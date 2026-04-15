import { t as DEFAULT_ACCOUNT_ID } from "./account-id-BRjWLAzU.js";
import { t as buildOutboundBaseSessionKey } from "./base-session-key-CF34nYG6.js";
import { Hc as resolveIMessageAccount, Mc as normalizeIMessageHandle, Nc as parseIMessageTarget, Rc as resolveIMessageGroupRequireMention, jc as looksLikeIMessageExplicitTargetId, kc as inferIMessageTargetChatType, zc as resolveIMessageGroupToolPolicy } from "./pi-embedded-bGW40fA1.js";
import { l as formatTrimmedAllowFromEntries } from "./channel-config-helpers-DDZb1T_S.js";
import { i as createAttachedChannelResultAdapter } from "./channel-send-result-C4cfMY3q.js";
import { i as defineChannelPluginEntry } from "./core-CUJtaNvv.js";
import { r as createLazyRuntimeModule } from "./lazy-runtime-BMNFO5xi.js";
import { s as collectStatusIssuesFromLastError } from "./status-helpers-MxakceNE.js";
import { a as normalizeIMessageMessagingTarget } from "./imessage-BT3UJkgx.js";
import { n as buildDmGroupAccountAllowlistAdapter } from "./allowlist-config-edit-BjnKLr80.js";
import { n as buildPassiveProbedChannelStatusSummary } from "./extension-shared-CVrbAIEB.js";
import { n as setIMessageRuntime, t as getIMessageRuntime } from "./runtime-B1SvHISY.js";
import { a as imessageSetupAdapter } from "./setup-core-DJXs8C0Y.js";
import { i as imessageSetupWizard, n as createIMessagePluginBase, r as imessageResolveDmPolicy, t as collectIMessageSecurityWarnings } from "./shared-DRUq0HPK.js";
//#region extensions/imessage/src/channel.ts
const loadIMessageChannelRuntime = createLazyRuntimeModule(() => import("./channel.runtime-BO3XtFhV.js"));
function buildIMessageBaseSessionKey(params) {
	return buildOutboundBaseSessionKey({
		...params,
		channel: "imessage"
	});
}
function resolveIMessageOutboundSessionRoute(params) {
	const parsed = parseIMessageTarget(params.target);
	if (parsed.kind === "handle") {
		const handle = normalizeIMessageHandle(parsed.to);
		if (!handle) return null;
		const peer = {
			kind: "direct",
			id: handle
		};
		const baseSessionKey = buildIMessageBaseSessionKey({
			cfg: params.cfg,
			agentId: params.agentId,
			accountId: params.accountId,
			peer
		});
		return {
			sessionKey: baseSessionKey,
			baseSessionKey,
			peer,
			chatType: "direct",
			from: `imessage:${handle}`,
			to: `imessage:${handle}`
		};
	}
	const peerId = parsed.kind === "chat_id" ? String(parsed.chatId) : parsed.kind === "chat_guid" ? parsed.chatGuid : parsed.chatIdentifier;
	if (!peerId) return null;
	const peer = {
		kind: "group",
		id: peerId
	};
	const baseSessionKey = buildIMessageBaseSessionKey({
		cfg: params.cfg,
		agentId: params.agentId,
		accountId: params.accountId,
		peer
	});
	const toPrefix = parsed.kind === "chat_id" ? "chat_id" : parsed.kind === "chat_guid" ? "chat_guid" : "chat_identifier";
	return {
		sessionKey: baseSessionKey,
		baseSessionKey,
		peer,
		chatType: "group",
		from: `imessage:group:${peerId}`,
		to: `${toPrefix}:${peerId}`
	};
}
const imessagePlugin = {
	...createIMessagePluginBase({
		setupWizard: imessageSetupWizard,
		setup: imessageSetupAdapter
	}),
	pairing: {
		idLabel: "imessageSenderId",
		notifyApproval: async ({ id }) => await (await loadIMessageChannelRuntime()).notifyIMessageApproval(id)
	},
	allowlist: buildDmGroupAccountAllowlistAdapter({
		channelId: "imessage",
		resolveAccount: ({ cfg, accountId }) => resolveIMessageAccount({
			cfg,
			accountId
		}),
		normalize: ({ values }) => formatTrimmedAllowFromEntries(values),
		resolveDmAllowFrom: (account) => account.config.allowFrom,
		resolveGroupAllowFrom: (account) => account.config.groupAllowFrom,
		resolveDmPolicy: (account) => account.config.dmPolicy,
		resolveGroupPolicy: (account) => account.config.groupPolicy
	}),
	security: {
		resolveDmPolicy: imessageResolveDmPolicy,
		collectWarnings: collectIMessageSecurityWarnings
	},
	groups: {
		resolveRequireMention: resolveIMessageGroupRequireMention,
		resolveToolPolicy: resolveIMessageGroupToolPolicy
	},
	messaging: {
		normalizeTarget: normalizeIMessageMessagingTarget,
		inferTargetChatType: ({ to }) => inferIMessageTargetChatType(to),
		resolveOutboundSessionRoute: (params) => resolveIMessageOutboundSessionRoute(params),
		targetResolver: {
			looksLikeId: looksLikeIMessageExplicitTargetId,
			hint: "<handle|chat_id:ID>",
			resolveTarget: async ({ normalized }) => {
				const to = normalized?.trim();
				if (!to) return null;
				const chatType = inferIMessageTargetChatType(to);
				if (!chatType) return null;
				return {
					to,
					kind: chatType === "direct" ? "user" : "group",
					source: "normalized"
				};
			}
		}
	},
	outbound: {
		deliveryMode: "direct",
		chunker: (text, limit) => getIMessageRuntime().channel.text.chunkText(text, limit),
		chunkerMode: "text",
		textChunkLimit: 4e3,
		...createAttachedChannelResultAdapter({
			channel: "imessage",
			sendText: async ({ cfg, to, text, accountId, deps, replyToId }) => await (await loadIMessageChannelRuntime()).sendIMessageOutbound({
				cfg,
				to,
				text,
				accountId: accountId ?? void 0,
				deps,
				replyToId: replyToId ?? void 0
			}),
			sendMedia: async ({ cfg, to, text, mediaUrl, mediaLocalRoots, accountId, deps, replyToId }) => await (await loadIMessageChannelRuntime()).sendIMessageOutbound({
				cfg,
				to,
				text,
				mediaUrl,
				mediaLocalRoots,
				accountId: accountId ?? void 0,
				deps,
				replyToId: replyToId ?? void 0
			})
		})
	},
	status: {
		defaultRuntime: {
			accountId: DEFAULT_ACCOUNT_ID,
			running: false,
			lastStartAt: null,
			lastStopAt: null,
			lastError: null,
			cliPath: null,
			dbPath: null
		},
		collectStatusIssues: (accounts) => collectStatusIssuesFromLastError("imessage", accounts),
		buildChannelSummary: ({ snapshot }) => buildPassiveProbedChannelStatusSummary(snapshot, {
			cliPath: snapshot.cliPath ?? null,
			dbPath: snapshot.dbPath ?? null
		}),
		probeAccount: async ({ timeoutMs }) => await (await loadIMessageChannelRuntime()).probeIMessageAccount(timeoutMs),
		buildAccountSnapshot: ({ account, runtime, probe }) => ({
			accountId: account.accountId,
			name: account.name,
			enabled: account.enabled,
			configured: account.configured,
			running: runtime?.running ?? false,
			lastStartAt: runtime?.lastStartAt ?? null,
			lastStopAt: runtime?.lastStopAt ?? null,
			lastError: runtime?.lastError ?? null,
			cliPath: runtime?.cliPath ?? account.config.cliPath ?? null,
			dbPath: runtime?.dbPath ?? account.config.dbPath ?? null,
			probe,
			lastInboundAt: runtime?.lastInboundAt ?? null,
			lastOutboundAt: runtime?.lastOutboundAt ?? null
		}),
		resolveAccountState: ({ enabled }) => enabled ? "enabled" : "disabled"
	},
	gateway: { startAccount: async (ctx) => await (await loadIMessageChannelRuntime()).startIMessageGatewayAccount(ctx) }
};
//#endregion
//#region extensions/imessage/index.ts
var imessage_default = defineChannelPluginEntry({
	id: "imessage",
	name: "iMessage",
	description: "iMessage channel plugin",
	plugin: imessagePlugin,
	setRuntime: setIMessageRuntime
});
//#endregion
export { imessagePlugin as n, imessage_default as t };
