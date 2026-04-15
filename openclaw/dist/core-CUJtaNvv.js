import { r as getChatChannelMeta } from "./registry-BYdGgYCt.js";
import { t as buildOutboundBaseSessionKey } from "./base-session-key-CF34nYG6.js";
import { t as emptyPluginConfigSchema } from "./config-schema-B-w7pwsi.js";
import { t as definePluginEntry } from "./plugin-entry-c_820PJi.js";
import { r as createTopLevelChannelReplyToModeResolver, t as createScopedAccountReplyToModeResolver } from "./threading-helpers-_W4QpjWd.js";
import { o as createScopedDmSecurityResolver } from "./channel-config-helpers-DDZb1T_S.js";
import { a as createTextPairingAdapter } from "./channel-pairing-u9JP53wD.js";
import { i as createAttachedChannelResultAdapter } from "./channel-send-result-C4cfMY3q.js";
//#region src/shared/gateway-bind-url.ts
function resolveGatewayBindUrl(params) {
	const bind = params.bind ?? "loopback";
	if (bind === "custom") {
		const host = params.customBindHost?.trim();
		if (host) return {
			url: `${params.scheme}://${host}:${params.port}`,
			source: "gateway.bind=custom"
		};
		return { error: "gateway.bind=custom requires gateway.customBindHost." };
	}
	if (bind === "tailnet") {
		const host = params.pickTailnetHost();
		if (host) return {
			url: `${params.scheme}://${host}:${params.port}`,
			source: "gateway.bind=tailnet"
		};
		return { error: "gateway.bind=tailnet set, but no tailnet IP was found." };
	}
	if (bind === "lan") {
		const host = params.pickLanHost();
		if (host) return {
			url: `${params.scheme}://${host}:${params.port}`,
			source: "gateway.bind=lan"
		};
		return { error: "gateway.bind=lan set, but no private LAN IP was found." };
	}
	return null;
}
//#endregion
//#region src/shared/tailscale-status.ts
const TAILSCALE_STATUS_COMMAND_CANDIDATES = ["tailscale", "/Applications/Tailscale.app/Contents/MacOS/Tailscale"];
function parsePossiblyNoisyJsonObject(raw) {
	const start = raw.indexOf("{");
	const end = raw.lastIndexOf("}");
	if (start === -1 || end <= start) return {};
	try {
		return JSON.parse(raw.slice(start, end + 1));
	} catch {
		return {};
	}
}
function extractTailnetHostFromStatusJson(raw) {
	const parsed = parsePossiblyNoisyJsonObject(raw);
	const self = typeof parsed.Self === "object" && parsed.Self !== null ? parsed.Self : void 0;
	const dns = typeof self?.DNSName === "string" ? self.DNSName : void 0;
	if (dns && dns.length > 0) return dns.replace(/\.$/, "");
	const ips = Array.isArray(self?.TailscaleIPs) ? self.TailscaleIPs : [];
	return ips.length > 0 ? ips[0] ?? null : null;
}
async function resolveTailnetHostWithRunner(runCommandWithTimeout) {
	if (!runCommandWithTimeout) return null;
	for (const candidate of TAILSCALE_STATUS_COMMAND_CANDIDATES) try {
		const result = await runCommandWithTimeout([
			candidate,
			"status",
			"--json"
		], { timeoutMs: 5e3 });
		if (result.code !== 0) continue;
		const raw = result.stdout.trim();
		if (!raw) continue;
		const host = extractTailnetHostFromStatusJson(raw);
		if (host) return host;
	} catch {
		continue;
	}
	return null;
}
//#endregion
//#region src/plugin-sdk/core.ts
function stripChannelTargetPrefix(raw, ...providers) {
	const trimmed = raw.trim();
	for (const provider of providers) {
		const prefix = `${provider.toLowerCase()}:`;
		if (trimmed.toLowerCase().startsWith(prefix)) return trimmed.slice(prefix.length).trim();
	}
	return trimmed;
}
function stripTargetKindPrefix(raw) {
	return raw.replace(/^(user|channel|group|conversation|room|dm):/i, "").trim();
}
function buildChannelOutboundSessionRoute(params) {
	const baseSessionKey = buildOutboundBaseSessionKey({
		cfg: params.cfg,
		agentId: params.agentId,
		channel: params.channel,
		accountId: params.accountId,
		peer: params.peer
	});
	return {
		sessionKey: baseSessionKey,
		baseSessionKey,
		peer: params.peer,
		chatType: params.chatType,
		from: params.from,
		to: params.to,
		...params.threadId !== void 0 ? { threadId: params.threadId } : {}
	};
}
function defineChannelPluginEntry({ id, name, description, plugin, configSchema = emptyPluginConfigSchema, setRuntime, registerFull }) {
	return definePluginEntry({
		id,
		name,
		description,
		configSchema,
		register(api) {
			setRuntime?.(api.runtime);
			api.registerChannel({ plugin });
			if (api.registrationMode !== "full") return;
			registerFull?.(api);
		}
	});
}
function defineSetupPluginEntry(plugin) {
	return { plugin };
}
function resolveChatChannelSecurity(security) {
	if (!security) return;
	if (!("dm" in security)) return security;
	return {
		resolveDmPolicy: createScopedDmSecurityResolver(security.dm),
		...security.collectWarnings ? { collectWarnings: security.collectWarnings } : {}
	};
}
function resolveChatChannelPairing(pairing) {
	if (!pairing) return;
	if (!("text" in pairing)) return pairing;
	return createTextPairingAdapter(pairing.text);
}
function resolveChatChannelThreading(threading) {
	if (!threading) return;
	if (!("topLevelReplyToMode" in threading) && !("scopedAccountReplyToMode" in threading)) return threading;
	let resolveReplyToMode;
	if ("topLevelReplyToMode" in threading) resolveReplyToMode = createTopLevelChannelReplyToModeResolver(threading.topLevelReplyToMode);
	else resolveReplyToMode = createScopedAccountReplyToModeResolver(threading.scopedAccountReplyToMode);
	return {
		...threading,
		resolveReplyToMode
	};
}
function resolveChatChannelOutbound(outbound) {
	if (!outbound) return;
	if (!("attachedResults" in outbound)) return outbound;
	return {
		...outbound.base,
		...createAttachedChannelResultAdapter(outbound.attachedResults)
	};
}
function createChatChannelPlugin(params) {
	return {
		...params.base,
		...params.security ? { security: resolveChatChannelSecurity(params.security) } : {},
		...params.pairing ? { pairing: resolveChatChannelPairing(params.pairing) } : {},
		...params.threading ? { threading: resolveChatChannelThreading(params.threading) } : {},
		...params.outbound ? { outbound: resolveChatChannelOutbound(params.outbound) } : {}
	};
}
function createChannelPluginBase(params) {
	return {
		id: params.id,
		meta: {
			...getChatChannelMeta(params.id),
			...params.meta
		},
		...params.setupWizard ? { setupWizard: params.setupWizard } : {},
		...params.capabilities ? { capabilities: params.capabilities } : {},
		...params.agentPrompt ? { agentPrompt: params.agentPrompt } : {},
		...params.streaming ? { streaming: params.streaming } : {},
		...params.reload ? { reload: params.reload } : {},
		...params.gatewayMethods ? { gatewayMethods: params.gatewayMethods } : {},
		...params.configSchema ? { configSchema: params.configSchema } : {},
		...params.config ? { config: params.config } : {},
		...params.security ? { security: params.security } : {},
		...params.groups ? { groups: params.groups } : {},
		setup: params.setup
	};
}
//#endregion
export { defineSetupPluginEntry as a, resolveTailnetHostWithRunner as c, defineChannelPluginEntry as i, resolveGatewayBindUrl as l, createChannelPluginBase as n, stripChannelTargetPrefix as o, createChatChannelPlugin as r, stripTargetKindPrefix as s, buildChannelOutboundSessionRoute as t };
