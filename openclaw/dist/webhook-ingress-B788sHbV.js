import { t as pruneMapToMaxSize } from "./map-size-Uomf5zcv.js";
import { t as registerPluginHttpRoute } from "./http-registry-D6hBcu9U.js";
import { a as isRequestBodyLimitError, c as requestBodyErrorToText, o as readJsonBodyWithLimit, s as readRequestBodyWithLimit } from "./http-body-D-NIzIGK.js";
import { t as normalizeWebhookPath } from "./webhook-path-DA_QQxLK.js";
//#region src/plugin-sdk/webhook-request-guards.ts
const WEBHOOK_BODY_READ_DEFAULTS = Object.freeze({
	preAuth: {
		maxBytes: 64 * 1024,
		timeoutMs: 5e3
	},
	postAuth: {
		maxBytes: 1024 * 1024,
		timeoutMs: 3e4
	}
});
const WEBHOOK_IN_FLIGHT_DEFAULTS = Object.freeze({
	maxInFlightPerKey: 8,
	maxTrackedKeys: 4096
});
function resolveWebhookBodyReadLimits(params) {
	const defaults = params.profile === "pre-auth" ? WEBHOOK_BODY_READ_DEFAULTS.preAuth : WEBHOOK_BODY_READ_DEFAULTS.postAuth;
	return {
		maxBytes: typeof params.maxBytes === "number" && Number.isFinite(params.maxBytes) && params.maxBytes > 0 ? Math.floor(params.maxBytes) : defaults.maxBytes,
		timeoutMs: typeof params.timeoutMs === "number" && Number.isFinite(params.timeoutMs) && params.timeoutMs > 0 ? Math.floor(params.timeoutMs) : defaults.timeoutMs
	};
}
function respondWebhookBodyReadError(params) {
	const { res, code, invalidMessage } = params;
	if (code === "PAYLOAD_TOO_LARGE") {
		res.statusCode = 413;
		res.end(requestBodyErrorToText("PAYLOAD_TOO_LARGE"));
		return { ok: false };
	}
	if (code === "REQUEST_BODY_TIMEOUT") {
		res.statusCode = 408;
		res.end(requestBodyErrorToText("REQUEST_BODY_TIMEOUT"));
		return { ok: false };
	}
	if (code === "CONNECTION_CLOSED") {
		res.statusCode = 400;
		res.end(requestBodyErrorToText("CONNECTION_CLOSED"));
		return { ok: false };
	}
	res.statusCode = 400;
	res.end(invalidMessage ?? "Bad Request");
	return { ok: false };
}
/** Create an in-memory limiter that caps concurrent webhook handlers per key. */
function createWebhookInFlightLimiter(options) {
	const maxInFlightPerKey = Math.max(1, Math.floor(options?.maxInFlightPerKey ?? WEBHOOK_IN_FLIGHT_DEFAULTS.maxInFlightPerKey));
	const maxTrackedKeys = Math.max(1, Math.floor(options?.maxTrackedKeys ?? WEBHOOK_IN_FLIGHT_DEFAULTS.maxTrackedKeys));
	const active = /* @__PURE__ */ new Map();
	return {
		tryAcquire: (key) => {
			if (!key) return true;
			const current = active.get(key) ?? 0;
			if (current >= maxInFlightPerKey) return false;
			active.set(key, current + 1);
			pruneMapToMaxSize(active, maxTrackedKeys);
			return true;
		},
		release: (key) => {
			if (!key) return;
			const current = active.get(key);
			if (current === void 0) return;
			if (current <= 1) {
				active.delete(key);
				return;
			}
			active.set(key, current - 1);
		},
		size: () => active.size,
		clear: () => active.clear()
	};
}
/** Detect JSON content types, including structured syntax suffixes like `application/ld+json`. */
function isJsonContentType(value) {
	const first = Array.isArray(value) ? value[0] : value;
	if (!first) return false;
	const mediaType = first.split(";", 1)[0]?.trim().toLowerCase();
	return mediaType === "application/json" || Boolean(mediaType?.endsWith("+json"));
}
/** Apply method, rate-limit, and content-type guards before a webhook handler reads the body. */
function applyBasicWebhookRequestGuards(params) {
	const allowMethods = params.allowMethods?.length ? params.allowMethods : null;
	if (allowMethods && !allowMethods.includes(params.req.method ?? "")) {
		params.res.statusCode = 405;
		params.res.setHeader("Allow", allowMethods.join(", "));
		params.res.end("Method Not Allowed");
		return false;
	}
	if (params.rateLimiter && params.rateLimitKey && params.rateLimiter.isRateLimited(params.rateLimitKey, params.nowMs ?? Date.now())) {
		params.res.statusCode = 429;
		params.res.end("Too Many Requests");
		return false;
	}
	if (params.requireJsonContentType && params.req.method === "POST" && !isJsonContentType(params.req.headers["content-type"])) {
		params.res.statusCode = 415;
		params.res.end("Unsupported Media Type");
		return false;
	}
	return true;
}
/** Start the shared webhook request lifecycle and return a release hook for in-flight tracking. */
function beginWebhookRequestPipelineOrReject(params) {
	if (!applyBasicWebhookRequestGuards({
		req: params.req,
		res: params.res,
		allowMethods: params.allowMethods,
		rateLimiter: params.rateLimiter,
		rateLimitKey: params.rateLimitKey,
		nowMs: params.nowMs,
		requireJsonContentType: params.requireJsonContentType
	})) return { ok: false };
	const inFlightKey = params.inFlightKey ?? "";
	const inFlightLimiter = params.inFlightLimiter;
	if (inFlightLimiter && inFlightKey && !inFlightLimiter.tryAcquire(inFlightKey)) {
		params.res.statusCode = params.inFlightLimitStatusCode ?? 429;
		params.res.end(params.inFlightLimitMessage ?? "Too Many Requests");
		return { ok: false };
	}
	let released = false;
	return {
		ok: true,
		release: () => {
			if (released) return;
			released = true;
			if (inFlightLimiter && inFlightKey) inFlightLimiter.release(inFlightKey);
		}
	};
}
/** Read a webhook request body with bounded size/time limits and translate failures into responses. */
async function readWebhookBodyOrReject(params) {
	const limits = resolveWebhookBodyReadLimits({
		maxBytes: params.maxBytes,
		timeoutMs: params.timeoutMs,
		profile: params.profile
	});
	try {
		return {
			ok: true,
			value: await readRequestBodyWithLimit(params.req, limits)
		};
	} catch (error) {
		if (isRequestBodyLimitError(error)) return respondWebhookBodyReadError({
			res: params.res,
			code: error.code,
			invalidMessage: params.invalidBodyMessage
		});
		return respondWebhookBodyReadError({
			res: params.res,
			code: "INVALID_BODY",
			invalidMessage: params.invalidBodyMessage ?? (error instanceof Error ? error.message : String(error))
		});
	}
}
/** Read and parse a JSON webhook body, rejecting malformed or oversized payloads consistently. */
async function readJsonWebhookBodyOrReject(params) {
	const limits = resolveWebhookBodyReadLimits({
		maxBytes: params.maxBytes,
		timeoutMs: params.timeoutMs,
		profile: params.profile
	});
	const body = await readJsonBodyWithLimit(params.req, {
		maxBytes: limits.maxBytes,
		timeoutMs: limits.timeoutMs,
		emptyObjectOnEmpty: params.emptyObjectOnEmpty
	});
	if (body.ok) return {
		ok: true,
		value: body.value
	};
	return respondWebhookBodyReadError({
		res: params.res,
		code: body.code,
		invalidMessage: params.invalidJsonMessage
	});
}
//#endregion
//#region src/plugin-sdk/webhook-targets.ts
/** Register a webhook target and lazily install the matching plugin HTTP route on first use. */
function registerWebhookTargetWithPluginRoute(params) {
	return registerWebhookTarget(params.targetsByPath, params.target, {
		onFirstPathTarget: ({ path }) => registerPluginHttpRoute({
			...params.route,
			path,
			replaceExisting: params.route.replaceExisting ?? true
		}),
		onLastPathTargetRemoved: params.onLastPathTargetRemoved
	});
}
const pathTeardownByTargetMap = /* @__PURE__ */ new WeakMap();
function getPathTeardownMap(targetsByPath) {
	const mapKey = targetsByPath;
	const existing = pathTeardownByTargetMap.get(mapKey);
	if (existing) return existing;
	const created = /* @__PURE__ */ new Map();
	pathTeardownByTargetMap.set(mapKey, created);
	return created;
}
/** Add a normalized target to a path bucket and clean up route state when the last target leaves. */
function registerWebhookTarget(targetsByPath, target, opts) {
	const key = normalizeWebhookPath(target.path);
	const normalizedTarget = {
		...target,
		path: key
	};
	const existing = targetsByPath.get(key) ?? [];
	if (existing.length === 0) {
		const onFirstPathResult = opts?.onFirstPathTarget?.({
			path: key,
			target: normalizedTarget
		});
		if (typeof onFirstPathResult === "function") getPathTeardownMap(targetsByPath).set(key, onFirstPathResult);
	}
	targetsByPath.set(key, [...existing, normalizedTarget]);
	let isActive = true;
	const unregister = () => {
		if (!isActive) return;
		isActive = false;
		const updated = (targetsByPath.get(key) ?? []).filter((entry) => entry !== normalizedTarget);
		if (updated.length > 0) {
			targetsByPath.set(key, updated);
			return;
		}
		targetsByPath.delete(key);
		const teardown = getPathTeardownMap(targetsByPath).get(key);
		if (teardown) {
			getPathTeardownMap(targetsByPath).delete(key);
			teardown();
		}
		opts?.onLastPathTargetRemoved?.({ path: key });
	};
	return {
		target: normalizedTarget,
		unregister
	};
}
/** Resolve all registered webhook targets for the incoming request path. */
function resolveWebhookTargets(req, targetsByPath) {
	const path = normalizeWebhookPath(new URL(req.url ?? "/", "http://localhost").pathname);
	const targets = targetsByPath.get(path);
	if (!targets || targets.length === 0) return null;
	return {
		path,
		targets
	};
}
/** Run common webhook guards, then dispatch only when the request path resolves to live targets. */
async function withResolvedWebhookRequestPipeline(params) {
	const resolved = resolveWebhookTargets(params.req, params.targetsByPath);
	if (!resolved) return false;
	const inFlightKey = typeof params.inFlightKey === "function" ? params.inFlightKey({
		req: params.req,
		path: resolved.path,
		targets: resolved.targets
	}) : params.inFlightKey ?? `${resolved.path}:${params.req.socket?.remoteAddress ?? "unknown"}`;
	const requestLifecycle = beginWebhookRequestPipelineOrReject({
		req: params.req,
		res: params.res,
		allowMethods: params.allowMethods,
		rateLimiter: params.rateLimiter,
		rateLimitKey: params.rateLimitKey,
		nowMs: params.nowMs,
		requireJsonContentType: params.requireJsonContentType,
		inFlightLimiter: params.inFlightLimiter,
		inFlightKey,
		inFlightLimitStatusCode: params.inFlightLimitStatusCode,
		inFlightLimitMessage: params.inFlightLimitMessage
	});
	if (!requestLifecycle.ok) return true;
	try {
		await params.handle(resolved);
		return true;
	} finally {
		requestLifecycle.release();
	}
}
function updateMatchedWebhookTarget(matched, target) {
	if (matched) return {
		ok: false,
		result: { kind: "ambiguous" }
	};
	return {
		ok: true,
		matched: target
	};
}
function finalizeMatchedWebhookTarget(matched) {
	if (!matched) return { kind: "none" };
	return {
		kind: "single",
		target: matched
	};
}
/** Match exactly one synchronous target or report whether resolution was empty or ambiguous. */
function resolveSingleWebhookTarget(targets, isMatch) {
	let matched;
	for (const target of targets) {
		if (!isMatch(target)) continue;
		const updated = updateMatchedWebhookTarget(matched, target);
		if (!updated.ok) return updated.result;
		matched = updated.matched;
	}
	return finalizeMatchedWebhookTarget(matched);
}
/** Async variant of single-target resolution for auth checks that need I/O. */
async function resolveSingleWebhookTargetAsync(targets, isMatch) {
	let matched;
	for (const target of targets) {
		if (!await isMatch(target)) continue;
		const updated = updateMatchedWebhookTarget(matched, target);
		if (!updated.ok) return updated.result;
		matched = updated.matched;
	}
	return finalizeMatchedWebhookTarget(matched);
}
/** Resolve an authorized target and send the standard unauthorized or ambiguous response on failure. */
async function resolveWebhookTargetWithAuthOrReject(params) {
	return resolveWebhookTargetMatchOrReject(params, await resolveSingleWebhookTargetAsync(params.targets, async (target) => Boolean(await params.isMatch(target))));
}
/** Synchronous variant of webhook auth resolution for cheap in-memory match checks. */
function resolveWebhookTargetWithAuthOrRejectSync(params) {
	return resolveWebhookTargetMatchOrReject(params, resolveSingleWebhookTarget(params.targets, params.isMatch));
}
function resolveWebhookTargetMatchOrReject(params, match) {
	if (match.kind === "single") return match.target;
	if (match.kind === "ambiguous") {
		params.res.statusCode = params.ambiguousStatusCode ?? 401;
		params.res.end(params.ambiguousMessage ?? "ambiguous webhook target");
		return null;
	}
	params.res.statusCode = params.unauthorizedStatusCode ?? 401;
	params.res.end(params.unauthorizedMessage ?? "unauthorized");
	return null;
}
//#endregion
export { resolveWebhookTargetWithAuthOrReject as a, withResolvedWebhookRequestPipeline as c, applyBasicWebhookRequestGuards as d, beginWebhookRequestPipelineOrReject as f, readWebhookBodyOrReject as g, readJsonWebhookBodyOrReject as h, resolveSingleWebhookTargetAsync as i, WEBHOOK_BODY_READ_DEFAULTS as l, isJsonContentType as m, registerWebhookTargetWithPluginRoute as n, resolveWebhookTargetWithAuthOrRejectSync as o, createWebhookInFlightLimiter as p, resolveSingleWebhookTarget as r, resolveWebhookTargets as s, registerWebhookTarget as t, WEBHOOK_IN_FLIGHT_DEFAULTS as u };
