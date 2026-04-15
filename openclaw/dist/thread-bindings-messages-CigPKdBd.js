import { n as normalizeAccountId } from "./account-id-BRjWLAzU.js";
import { t as resolveGlobalMap } from "./global-singleton-DTdpxZNO.js";
import { r as prefixSystemMessage } from "./system-message-DMWeSoea.js";
//#region src/infra/outbound/session-binding-service.ts
var SessionBindingError = class extends Error {
	constructor(code, message, details) {
		super(message);
		this.code = code;
		this.details = details;
		this.name = "SessionBindingError";
	}
};
function isSessionBindingError(error) {
	return error instanceof SessionBindingError;
}
function normalizeConversationRef(ref) {
	return {
		channel: ref.channel.trim().toLowerCase(),
		accountId: normalizeAccountId(ref.accountId),
		conversationId: ref.conversationId.trim(),
		parentConversationId: ref.parentConversationId?.trim() || void 0
	};
}
function toAdapterKey(params) {
	return `${params.channel.trim().toLowerCase()}:${normalizeAccountId(params.accountId)}`;
}
function normalizePlacement(raw) {
	return raw === "current" || raw === "child" ? raw : void 0;
}
function inferDefaultPlacement(ref) {
	return ref.conversationId ? "current" : "child";
}
function resolveAdapterPlacements(adapter) {
	const placements = (adapter.capabilities?.placements?.map((value) => normalizePlacement(value)))?.filter((value) => Boolean(value));
	if (placements && placements.length > 0) return [...new Set(placements)];
	return ["current", "child"];
}
function resolveAdapterCapabilities(adapter) {
	if (!adapter) return {
		adapterAvailable: false,
		bindSupported: false,
		unbindSupported: false,
		placements: []
	};
	const bindSupported = adapter.capabilities?.bindSupported ?? Boolean(adapter.bind);
	return {
		adapterAvailable: true,
		bindSupported,
		unbindSupported: adapter.capabilities?.unbindSupported ?? Boolean(adapter.unbind),
		placements: bindSupported ? resolveAdapterPlacements(adapter) : []
	};
}
const ADAPTERS_BY_CHANNEL_ACCOUNT = resolveGlobalMap(Symbol.for("openclaw.sessionBinding.adapters"));
function getActiveAdapterForKey(key) {
	return ADAPTERS_BY_CHANNEL_ACCOUNT.get(key)?.[0]?.normalizedAdapter ?? null;
}
function registerSessionBindingAdapter(adapter) {
	const normalizedAdapter = {
		...adapter,
		channel: adapter.channel.trim().toLowerCase(),
		accountId: normalizeAccountId(adapter.accountId)
	};
	const key = toAdapterKey({
		channel: normalizedAdapter.channel,
		accountId: normalizedAdapter.accountId
	});
	const existing = ADAPTERS_BY_CHANNEL_ACCOUNT.get(key);
	const registrations = existing ? [...existing] : [];
	registrations.push({
		adapter,
		normalizedAdapter
	});
	ADAPTERS_BY_CHANNEL_ACCOUNT.set(key, registrations);
}
function unregisterSessionBindingAdapter(params) {
	const key = toAdapterKey(params);
	const registrations = ADAPTERS_BY_CHANNEL_ACCOUNT.get(key);
	if (!registrations || registrations.length === 0) return;
	const nextRegistrations = [...registrations];
	if (params.adapter) {
		const registrationIndex = nextRegistrations.findLastIndex((registration) => registration.adapter === params.adapter);
		if (registrationIndex < 0) return;
		nextRegistrations.splice(registrationIndex, 1);
	} else nextRegistrations.pop();
	if (nextRegistrations.length === 0) {
		ADAPTERS_BY_CHANNEL_ACCOUNT.delete(key);
		return;
	}
	ADAPTERS_BY_CHANNEL_ACCOUNT.set(key, nextRegistrations);
}
function resolveAdapterForConversation(ref) {
	return resolveAdapterForChannelAccount({
		channel: ref.channel,
		accountId: ref.accountId
	});
}
function resolveAdapterForChannelAccount(params) {
	return getActiveAdapterForKey(toAdapterKey({
		channel: params.channel,
		accountId: params.accountId
	}));
}
function getActiveRegisteredAdapters() {
	return [...ADAPTERS_BY_CHANNEL_ACCOUNT.values()].map((registrations) => registrations[0]?.normalizedAdapter ?? null).filter((adapter) => Boolean(adapter));
}
function dedupeBindings(records) {
	const byId = /* @__PURE__ */ new Map();
	for (const record of records) {
		if (!record?.bindingId) continue;
		byId.set(record.bindingId, record);
	}
	return [...byId.values()];
}
function createDefaultSessionBindingService() {
	return {
		bind: async (input) => {
			const normalizedConversation = normalizeConversationRef(input.conversation);
			const adapter = resolveAdapterForConversation(normalizedConversation);
			if (!adapter) throw new SessionBindingError("BINDING_ADAPTER_UNAVAILABLE", `Session binding adapter unavailable for ${normalizedConversation.channel}:${normalizedConversation.accountId}`, {
				channel: normalizedConversation.channel,
				accountId: normalizedConversation.accountId
			});
			if (!adapter.bind) throw new SessionBindingError("BINDING_CAPABILITY_UNSUPPORTED", `Session binding adapter does not support binding for ${normalizedConversation.channel}:${normalizedConversation.accountId}`, {
				channel: normalizedConversation.channel,
				accountId: normalizedConversation.accountId
			});
			const placement = normalizePlacement(input.placement) ?? inferDefaultPlacement(normalizedConversation);
			if (!resolveAdapterPlacements(adapter).includes(placement)) throw new SessionBindingError("BINDING_CAPABILITY_UNSUPPORTED", `Session binding placement "${placement}" is not supported for ${normalizedConversation.channel}:${normalizedConversation.accountId}`, {
				channel: normalizedConversation.channel,
				accountId: normalizedConversation.accountId,
				placement
			});
			const bound = await adapter.bind({
				...input,
				conversation: normalizedConversation,
				placement
			});
			if (!bound) throw new SessionBindingError("BINDING_CREATE_FAILED", "Session binding adapter failed to bind target conversation", {
				channel: normalizedConversation.channel,
				accountId: normalizedConversation.accountId,
				placement
			});
			return bound;
		},
		getCapabilities: (params) => {
			return resolveAdapterCapabilities(resolveAdapterForChannelAccount({
				channel: params.channel,
				accountId: params.accountId
			}));
		},
		listBySession: (targetSessionKey) => {
			const key = targetSessionKey.trim();
			if (!key) return [];
			const results = [];
			for (const adapter of getActiveRegisteredAdapters()) {
				const entries = adapter.listBySession(key);
				if (entries.length > 0) results.push(...entries);
			}
			return dedupeBindings(results);
		},
		resolveByConversation: (ref) => {
			const normalized = normalizeConversationRef(ref);
			if (!normalized.channel || !normalized.conversationId) return null;
			const adapter = resolveAdapterForConversation(normalized);
			if (!adapter) return null;
			return adapter.resolveByConversation(normalized);
		},
		touch: (bindingId, at) => {
			const normalizedBindingId = bindingId.trim();
			if (!normalizedBindingId) return;
			for (const adapter of getActiveRegisteredAdapters()) adapter.touch?.(normalizedBindingId, at);
		},
		unbind: async (input) => {
			const removed = [];
			for (const adapter of getActiveRegisteredAdapters()) {
				if (!adapter.unbind) continue;
				const entries = await adapter.unbind(input);
				if (entries.length > 0) removed.push(...entries);
			}
			return dedupeBindings(removed);
		}
	};
}
const DEFAULT_SESSION_BINDING_SERVICE = createDefaultSessionBindingService();
function getSessionBindingService() {
	return DEFAULT_SESSION_BINDING_SERVICE;
}
//#endregion
//#region src/channels/thread-bindings-messages.ts
const DEFAULT_THREAD_BINDING_FAREWELL_TEXT = "Session ended. Messages here will no longer be routed.";
function normalizeThreadBindingDurationMs(raw) {
	if (typeof raw !== "number" || !Number.isFinite(raw)) return 0;
	const durationMs = Math.floor(raw);
	if (durationMs < 0) return 0;
	return durationMs;
}
function formatThreadBindingDurationLabel(durationMs) {
	if (durationMs <= 0) return "disabled";
	if (durationMs < 6e4) return "<1m";
	const totalMinutes = Math.floor(durationMs / 6e4);
	if (totalMinutes % 60 === 0) return `${Math.floor(totalMinutes / 60)}h`;
	return `${totalMinutes}m`;
}
function resolveThreadBindingThreadName(params) {
	return `🤖 ${params.label?.trim() || params.agentId?.trim() || "agent"}`.replace(/\s+/g, " ").trim().slice(0, 100);
}
function resolveThreadBindingIntroText(params) {
	const normalized = (params.label?.trim() || params.agentId?.trim() || "agent").replace(/\s+/g, " ").trim().slice(0, 100) || "agent";
	const idleTimeoutMs = normalizeThreadBindingDurationMs(params.idleTimeoutMs);
	const maxAgeMs = normalizeThreadBindingDurationMs(params.maxAgeMs);
	const cwd = params.sessionCwd?.trim();
	const details = (params.sessionDetails ?? []).map((entry) => entry.trim()).filter((entry) => entry.length > 0);
	if (cwd) details.unshift(`cwd: ${cwd}`);
	const lifecycle = [];
	if (idleTimeoutMs > 0) lifecycle.push(`idle auto-unfocus after ${formatThreadBindingDurationLabel(idleTimeoutMs)} inactivity`);
	if (maxAgeMs > 0) lifecycle.push(`max age ${formatThreadBindingDurationLabel(maxAgeMs)}`);
	const intro = lifecycle.length > 0 ? `${normalized} session active (${lifecycle.join("; ")}). Messages here go directly to this session.` : `${normalized} session active. Messages here go directly to this session.`;
	if (details.length === 0) return prefixSystemMessage(intro);
	return prefixSystemMessage(`${intro}\n${details.join("\n")}`);
}
function resolveThreadBindingFarewellText(params) {
	const custom = params.farewellText?.trim();
	if (custom) return prefixSystemMessage(custom);
	if (params.reason === "idle-expired") return prefixSystemMessage(`Session ended automatically after ${formatThreadBindingDurationLabel(normalizeThreadBindingDurationMs(params.idleTimeoutMs))} of inactivity. Messages here will no longer be routed.`);
	if (params.reason === "max-age-expired") return prefixSystemMessage(`Session ended automatically at max age of ${formatThreadBindingDurationLabel(normalizeThreadBindingDurationMs(params.maxAgeMs))}. Messages here will no longer be routed.`);
	return prefixSystemMessage(DEFAULT_THREAD_BINDING_FAREWELL_TEXT);
}
//#endregion
export { SessionBindingError as a, registerSessionBindingAdapter as c, resolveThreadBindingThreadName as i, unregisterSessionBindingAdapter as l, resolveThreadBindingFarewellText as n, getSessionBindingService as o, resolveThreadBindingIntroText as r, isSessionBindingError as s, formatThreadBindingDurationLabel as t };
