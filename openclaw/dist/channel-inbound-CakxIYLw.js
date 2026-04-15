import { i as readSessionUpdatedAt } from "./store-BGDAPyDm.js";
import { t as normalizeChatType } from "./chat-type-Dr-g7lIP.js";
import { l as resolveStorePath } from "./paths-DTrmv0TT.js";
import { i as resolveUserTimezone } from "./date-time-BwTq3C5B.js";
import { c as listChatCommands, l as listChatCommandsForConfig, p as normalizeCommandBody } from "./commands-registry-B5LdPpzV.js";
import { n as formatZonedTimestamp, r as resolveTimezone, t as formatUtcTimestamp } from "./format-datetime-B9z5cqUc.js";
import { n as formatTimeAgo } from "./format-relative-DzwCsyr7.js";
//#region src/auto-reply/reply/abort-primitives.ts
const ABORT_TRIGGERS = new Set([
	"stop",
	"esc",
	"abort",
	"wait",
	"exit",
	"interrupt",
	"detente",
	"deten",
	"detén",
	"arrete",
	"arrête",
	"停止",
	"やめて",
	"止めて",
	"रुको",
	"توقف",
	"стоп",
	"остановись",
	"останови",
	"остановить",
	"прекрати",
	"halt",
	"anhalten",
	"aufhören",
	"hoer auf",
	"stopp",
	"pare",
	"stop openclaw",
	"openclaw stop",
	"stop action",
	"stop current action",
	"stop run",
	"stop current run",
	"stop agent",
	"stop the agent",
	"stop don't do anything",
	"stop dont do anything",
	"stop do not do anything",
	"stop doing anything",
	"do not do that",
	"please stop",
	"stop please"
]);
const ABORT_MEMORY = /* @__PURE__ */ new Map();
const ABORT_MEMORY_MAX = 2e3;
const TRAILING_ABORT_PUNCTUATION_RE = /[.!?…,，。;；:：'"’”)\]}]+$/u;
function normalizeAbortTriggerText(text) {
	return text.trim().toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, " ").replace(TRAILING_ABORT_PUNCTUATION_RE, "").trim();
}
function isAbortTrigger(text) {
	if (!text) return false;
	const normalized = normalizeAbortTriggerText(text);
	return ABORT_TRIGGERS.has(normalized);
}
function isAbortRequestText(text, options) {
	if (!text) return false;
	const normalized = normalizeCommandBody(text, options).trim();
	if (!normalized) return false;
	const normalizedLower = normalized.toLowerCase();
	return normalizedLower === "/stop" || normalizeAbortTriggerText(normalizedLower) === "/stop" || isAbortTrigger(normalizedLower);
}
function getAbortMemory(key) {
	const normalized = key.trim();
	if (!normalized) return;
	return ABORT_MEMORY.get(normalized);
}
function pruneAbortMemory() {
	if (ABORT_MEMORY.size <= ABORT_MEMORY_MAX) return;
	const excess = ABORT_MEMORY.size - ABORT_MEMORY_MAX;
	let removed = 0;
	for (const entryKey of ABORT_MEMORY.keys()) {
		ABORT_MEMORY.delete(entryKey);
		removed += 1;
		if (removed >= excess) break;
	}
}
function setAbortMemory(key, value) {
	const normalized = key.trim();
	if (!normalized) return;
	if (!value) {
		ABORT_MEMORY.delete(normalized);
		return;
	}
	if (ABORT_MEMORY.has(normalized)) ABORT_MEMORY.delete(normalized);
	ABORT_MEMORY.set(normalized, true);
	pruneAbortMemory();
}
//#endregion
//#region src/auto-reply/command-detection.ts
function hasControlCommand(text, cfg, options) {
	if (!text) return false;
	const trimmed = text.trim();
	if (!trimmed) return false;
	const normalizedBody = normalizeCommandBody(trimmed, options);
	if (!normalizedBody) return false;
	const lowered = normalizedBody.toLowerCase();
	const commands = cfg ? listChatCommandsForConfig(cfg) : listChatCommands();
	for (const command of commands) for (const alias of command.textAliases) {
		const normalized = alias.trim().toLowerCase();
		if (!normalized) continue;
		if (lowered === normalized) return true;
		if (command.acceptsArgs && lowered.startsWith(normalized)) {
			const nextChar = normalizedBody.charAt(normalized.length);
			if (nextChar && /\s/.test(nextChar)) return true;
		}
	}
	return false;
}
function isControlCommandMessage(text, cfg, options) {
	if (!text) return false;
	const trimmed = text.trim();
	if (!trimmed) return false;
	if (hasControlCommand(trimmed, cfg, options)) return true;
	return isAbortTrigger(normalizeCommandBody(trimmed, options).trim().toLowerCase());
}
/**
* Coarse detection for inline directives/shortcuts (e.g. "hey /status") so channel monitors
* can decide whether to compute CommandAuthorized for a message.
*
* This intentionally errs on the side of false positives; CommandAuthorized only gates
* command/directive execution, not normal chat replies.
*/
function hasInlineCommandTokens(text) {
	const body = text ?? "";
	if (!body.trim()) return false;
	return /(?:^|\s)[/!][a-z]/i.test(body);
}
function shouldComputeCommandAuthorized(text, cfg, options) {
	return isControlCommandMessage(text, cfg, options) || hasInlineCommandTokens(text);
}
//#endregion
//#region src/channels/sender-label.ts
function normalize(value) {
	const trimmed = value?.trim();
	return trimmed ? trimmed : void 0;
}
function normalizeSenderLabelParams(params) {
	return {
		name: normalize(params.name),
		username: normalize(params.username),
		tag: normalize(params.tag),
		e164: normalize(params.e164),
		id: normalize(params.id)
	};
}
function resolveSenderLabel(params) {
	const { name, username, tag, e164, id } = normalizeSenderLabelParams(params);
	const display = name ?? username ?? tag ?? "";
	const idPart = e164 ?? id ?? "";
	if (display && idPart && display !== idPart) return `${display} (${idPart})`;
	return display || idPart || null;
}
//#endregion
//#region src/auto-reply/envelope.ts
function sanitizeEnvelopeHeaderPart(value) {
	return value.replace(/\r\n|\r|\n/g, " ").replaceAll("[", "(").replaceAll("]", ")").replace(/\s+/g, " ").trim();
}
function resolveEnvelopeFormatOptions(cfg) {
	const defaults = cfg?.agents?.defaults;
	return {
		timezone: defaults?.envelopeTimezone,
		includeTimestamp: defaults?.envelopeTimestamp !== "off",
		includeElapsed: defaults?.envelopeElapsed !== "off",
		userTimezone: defaults?.userTimezone
	};
}
function normalizeEnvelopeOptions(options) {
	const includeTimestamp = options?.includeTimestamp !== false;
	const includeElapsed = options?.includeElapsed !== false;
	return {
		timezone: options?.timezone?.trim() || "local",
		includeTimestamp,
		includeElapsed,
		userTimezone: options?.userTimezone
	};
}
function resolveEnvelopeTimezone(options) {
	const trimmed = options.timezone?.trim();
	if (!trimmed) return { mode: "local" };
	const lowered = trimmed.toLowerCase();
	if (lowered === "utc" || lowered === "gmt") return { mode: "utc" };
	if (lowered === "local" || lowered === "host") return { mode: "local" };
	if (lowered === "user") return {
		mode: "iana",
		timeZone: resolveUserTimezone(options.userTimezone)
	};
	const explicit = resolveTimezone(trimmed);
	return explicit ? {
		mode: "iana",
		timeZone: explicit
	} : { mode: "utc" };
}
function formatEnvelopeTimestamp(ts, options) {
	if (!ts) return;
	const resolved = normalizeEnvelopeOptions(options);
	if (!resolved.includeTimestamp) return;
	const date = ts instanceof Date ? ts : new Date(ts);
	if (Number.isNaN(date.getTime())) return;
	const zone = resolveEnvelopeTimezone(resolved);
	const weekday = (() => {
		try {
			if (zone.mode === "utc") return new Intl.DateTimeFormat("en-US", {
				timeZone: "UTC",
				weekday: "short"
			}).format(date);
			if (zone.mode === "local") return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
			return new Intl.DateTimeFormat("en-US", {
				timeZone: zone.timeZone,
				weekday: "short"
			}).format(date);
		} catch {
			return;
		}
	})();
	const formatted = zone.mode === "utc" ? formatUtcTimestamp(date) : zone.mode === "local" ? formatZonedTimestamp(date) : formatZonedTimestamp(date, { timeZone: zone.timeZone });
	if (!formatted) return;
	return weekday ? `${weekday} ${formatted}` : formatted;
}
function formatAgentEnvelope(params) {
	const parts = [sanitizeEnvelopeHeaderPart(params.channel?.trim() || "Channel")];
	const resolved = normalizeEnvelopeOptions(params.envelope);
	let elapsed;
	if (resolved.includeElapsed && params.timestamp && params.previousTimestamp) {
		const elapsedMs = (params.timestamp instanceof Date ? params.timestamp.getTime() : params.timestamp) - (params.previousTimestamp instanceof Date ? params.previousTimestamp.getTime() : params.previousTimestamp);
		elapsed = Number.isFinite(elapsedMs) && elapsedMs >= 0 ? formatTimeAgo(elapsedMs, { suffix: false }) : void 0;
	}
	if (params.from?.trim()) {
		const from = sanitizeEnvelopeHeaderPart(params.from.trim());
		parts.push(elapsed ? `${from} +${elapsed}` : from);
	} else if (elapsed) parts.push(`+${elapsed}`);
	if (params.host?.trim()) parts.push(sanitizeEnvelopeHeaderPart(params.host.trim()));
	if (params.ip?.trim()) parts.push(sanitizeEnvelopeHeaderPart(params.ip.trim()));
	const ts = formatEnvelopeTimestamp(params.timestamp, resolved);
	if (ts) parts.push(ts);
	return `${`[${parts.join(" ")}]`} ${params.body}`;
}
function formatInboundEnvelope(params) {
	const chatType = normalizeChatType(params.chatType);
	const isDirect = !chatType || chatType === "direct";
	const resolvedSenderRaw = params.senderLabel?.trim() || resolveSenderLabel(params.sender ?? {});
	const resolvedSender = resolvedSenderRaw ? sanitizeEnvelopeHeaderPart(resolvedSenderRaw) : "";
	const body = isDirect && params.fromMe ? `(self): ${params.body}` : !isDirect && resolvedSender ? `${resolvedSender}: ${params.body}` : params.body;
	return formatAgentEnvelope({
		channel: params.channel,
		from: params.from,
		timestamp: params.timestamp,
		previousTimestamp: params.previousTimestamp,
		envelope: params.envelope,
		body
	});
}
function formatInboundFromLabel(params) {
	if (params.isGroup) {
		const label = params.groupLabel?.trim() || params.groupFallback || "Group";
		const id = params.groupId?.trim();
		return id ? `${label} id:${id}` : label;
	}
	const directLabel = params.directLabel.trim();
	const directId = params.directId?.trim();
	if (!directId || directId === directLabel) return directLabel;
	return `${directLabel} id:${directId}`;
}
//#endregion
//#region src/auto-reply/inbound-debounce.ts
const resolveMs = (value) => {
	if (typeof value !== "number" || !Number.isFinite(value)) return;
	return Math.max(0, Math.trunc(value));
};
const resolveChannelOverride = (params) => {
	if (!params.byChannel) return;
	return resolveMs(params.byChannel[params.channel]);
};
function resolveInboundDebounceMs(params) {
	const inbound = params.cfg.messages?.inbound;
	const override = resolveMs(params.overrideMs);
	const byChannel = resolveChannelOverride({
		byChannel: inbound?.byChannel,
		channel: params.channel
	});
	const base = resolveMs(inbound?.debounceMs);
	return override ?? byChannel ?? base ?? 0;
}
function createInboundDebouncer(params) {
	const buffers = /* @__PURE__ */ new Map();
	const defaultDebounceMs = Math.max(0, Math.trunc(params.debounceMs));
	const resolveDebounceMs = (item) => {
		const resolved = params.resolveDebounceMs?.(item);
		if (typeof resolved !== "number" || !Number.isFinite(resolved)) return defaultDebounceMs;
		return Math.max(0, Math.trunc(resolved));
	};
	const flushBuffer = async (key, buffer) => {
		buffers.delete(key);
		if (buffer.timeout) {
			clearTimeout(buffer.timeout);
			buffer.timeout = null;
		}
		if (buffer.items.length === 0) return;
		try {
			await params.onFlush(buffer.items);
		} catch (err) {
			params.onError?.(err, buffer.items);
		}
	};
	const flushKey = async (key) => {
		const buffer = buffers.get(key);
		if (!buffer) return;
		await flushBuffer(key, buffer);
	};
	const scheduleFlush = (key, buffer) => {
		if (buffer.timeout) clearTimeout(buffer.timeout);
		buffer.timeout = setTimeout(async () => {
			await flushBuffer(key, buffer);
		}, buffer.debounceMs);
		buffer.timeout.unref?.();
	};
	const enqueue = async (item) => {
		const key = params.buildKey(item);
		const debounceMs = resolveDebounceMs(item);
		if (!(debounceMs > 0 && (params.shouldDebounce?.(item) ?? true)) || !key) {
			if (key && buffers.has(key)) await flushKey(key);
			try {
				await params.onFlush([item]);
			} catch (err) {
				params.onError?.(err, [item]);
			}
			return;
		}
		const existing = buffers.get(key);
		if (existing) {
			existing.items.push(item);
			existing.debounceMs = debounceMs;
			scheduleFlush(key, existing);
			return;
		}
		const buffer = {
			items: [item],
			timeout: null,
			debounceMs
		};
		buffers.set(key, buffer);
		scheduleFlush(key, buffer);
	};
	return {
		enqueue,
		flushKey
	};
}
//#endregion
//#region src/channels/inbound-debounce-policy.ts
function shouldDebounceTextInbound(params) {
	if (params.allowDebounce === false) return false;
	if (params.hasMedia) return false;
	const text = params.text?.trim() ?? "";
	if (!text) return false;
	return !hasControlCommand(text, params.cfg, params.commandOptions);
}
function createChannelInboundDebouncer(params) {
	const debounceMs = resolveInboundDebounceMs({
		cfg: params.cfg,
		channel: params.channel,
		overrideMs: params.debounceMsOverride
	});
	const { cfg: _cfg, channel: _channel, debounceMsOverride: _override, ...rest } = params;
	return {
		debounceMs,
		debouncer: createInboundDebouncer({
			debounceMs,
			...rest
		})
	};
}
//#endregion
//#region src/channels/session-envelope.ts
function resolveInboundSessionEnvelopeContext(params) {
	const storePath = resolveStorePath(params.cfg.session?.store, { agentId: params.agentId });
	return {
		storePath,
		envelopeOptions: resolveEnvelopeFormatOptions(params.cfg),
		previousTimestamp: readSessionUpdatedAt({
			storePath,
			sessionKey: params.sessionKey
		})
	};
}
//#endregion
export { isAbortRequestText as _, resolveInboundDebounceMs as a, formatInboundEnvelope as c, resolveSenderLabel as d, hasControlCommand as f, getAbortMemory as g, shouldComputeCommandAuthorized as h, createInboundDebouncer as i, formatInboundFromLabel as l, isControlCommandMessage as m, createChannelInboundDebouncer as n, formatAgentEnvelope as o, hasInlineCommandTokens as p, shouldDebounceTextInbound as r, formatEnvelopeTimestamp as s, resolveInboundSessionEnvelopeContext as t, resolveEnvelopeFormatOptions as u, isAbortTrigger as v, setAbortMemory as y };
