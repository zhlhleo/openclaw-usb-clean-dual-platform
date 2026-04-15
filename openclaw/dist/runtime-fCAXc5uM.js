import { i as getChildLogger, v as normalizeLogLevel } from "./logger-CoEtkjhn.js";
import { _ as resolveStateDir } from "./paths-GHJ97ebE.js";
import { a as logVerbose, l as shouldLogVerbose, t as danger } from "./globals-41sdSaKv.js";
import { p as createNonExitingRuntime } from "./subsystem-VzQeL-96.js";
import { S as parseAgentSessionKey } from "./session-key-CvyyYMlq.js";
import { a as logWarn } from "./logger-DtlnPe_E.js";
import { n as runCommandWithTimeout } from "./exec-BnXF7JCz.js";
import { d as ensureAgentWorkspace } from "./workspace-DFURCHD1.js";
import { a as resolveAgentDir, p as resolveAgentWorkspaceDir, v as resolveSessionAgentId } from "./agent-scope-D8nGiwMS.js";
import { n as DEFAULT_MODEL, r as DEFAULT_PROVIDER } from "./defaults-CEhyoDNX.js";
import { S as resolveThinkingDefault } from "./model-selection-JWhBHRyf.js";
import { g as writeConfigFile, s as loadConfig } from "./io-Cu_7vv9A.js";
import { n as loadPluginManifestRegistry } from "./manifest-registry-BYh_hnWR.js";
import { a as recordSessionMetaFromInbound, c as updateLastRoute, i as readSessionUpdatedAt, n as loadSessionStore, s as saveSessionStore } from "./store-BGDAPyDm.js";
import { l as resolveStorePath, r as resolveSessionFilePath } from "./paths-DTrmv0TT.js";
import { n as onSessionTranscriptUpdate } from "./transcript-events-Q8Td90Gv.js";
import { i as resolveHumanDelayConfig, n as resolveAgentIdentity, r as resolveEffectiveMessagesConfig } from "./identity-BPWC1ZKG.js";
import { i as resolveAgentRoute, t as buildAgentSessionKey } from "./resolve-route-CRpvL1jx.js";
import { Bf as onAgentEvent, Bn as resolveThreadBindingIdleTimeoutMs, C as describeImageFile, Ca as sendMessageSignal, D as transcribeAudioFile, Df as requestHeartbeatNow, E as runMediaUnderstandingFile, Fl as finalizeInboundContext, Gn as discordMessageActions, Hn as resolveThreadBindingMaxAgeExpiresAt, In as setThreadBindingIdleTimeoutBySessionKey, Js as signalMessageActions, Ln as setThreadBindingMaxAgeBySessionKey, Qo as listRuntimeImageGenerationProviders, Rn as unbindThreadBindingsBySessionKey, Sa as monitorSignalProvider, T as describeVideoFile, Un as resolveThreadBindingMaxAgeMs, Vn as resolveThreadBindingInactivityExpiresAt, Wd as listSpeechVoices, Zo as generateImage, Zr as dispatchReplyWithBufferedBlockDispatcher, _n as resolveTelegramToken, af as textToSpeech, ai as withReplyDispatcher, li as dispatchReplyFromConfig, mf as isVoiceCompatibleAudio, no as runWebSearch, of as textToSpeechTelephony, si as createReplyDispatcherWithTyping, t as runEmbeddedPiAgent, to as listWebSearchProviders, w as describeImageFileWithModel, xa as probeSignal, zn as getThreadBindingManager } from "./pi-embedded-bGW40fA1.js";
import { n as getApiKeyForModel, s as resolveApiKeyForProvider } from "./model-auth-D-fOiSA-.js";
import { t as waitForAbortSignal } from "./abort-signal-t31ckgqI.js";
import { C as resolveTextChunkLimit, S as resolveChunkMode, b as chunkText, d as convertMarkdownTables, g as chunkByNewline, t as withTimeout, v as chunkMarkdownText, x as chunkTextWithMode, y as chunkMarkdownTextWithMode } from "./text-runtime-CzoM2Rlj.js";
import { r as recordInboundSession } from "./conversation-runtime-CHkP5v8z.js";
import { o as normalizePluginHttpPath, t as registerPluginHttpRoute } from "./http-registry-D6hBcu9U.js";
import { a as logWebSelfId, b as shouldPreferNativeJiti, c as monitorWebChannel, d as sendPollWhatsApp, f as startWebLoginWithQr, g as buildPluginLoaderJitiOptions, i as handleWhatsAppAction, l as readWebSelfId, m as webAuthExists, n as getActiveWebListener, o as loginWeb, p as waitForWebLogin, r as getWebAuthAgeMs, s as logoutWeb, t as createRuntimeWhatsAppLoginTool, u as sendMessageWhatsApp, v as resolvePluginSdkAliasFile, y as resolvePluginSdkScopedAliasMap } from "./runtime-whatsapp-boundary-BecsYiTJ.js";
import { l as readNumberParam, p as readStringParam, s as jsonResult } from "./common-8DMx6JsK.js";
import { c as resizeToJpeg, i as getImageMetadata } from "./image-ops-CMWbh6Ue.js";
import { m as mediaKindFromMime, t as detectMime } from "./mime-CsQSbndd.js";
import { x as resolveAgentTimeoutMs } from "./manager-6G_0DVz9.js";
import { t as processLineMessage } from "./markdown-to-line-D9eOI56p.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "./runtime-group-policy-Dj5ka44z.js";
import { t as createChannelPairingChallengeIssuer } from "./channel-pairing-u9JP53wD.js";
import { n as buildPairingReply } from "./pairing-challenge-C7CRhfSl.js";
import { n as evaluateMatchedGroupAccessForPolicy } from "./group-access-CjDGDFY8.js";
import { n as isSenderIdAllowed, r as mergeDmAllowFromSources, t as firstDefined } from "./allow-from-BZWvYKo_.js";
import { n as resolveControlCommandGate, t as resolveCommandAuthorizedFromAuthorizers } from "./command-gating-REV5M7oz.js";
import { a as readChannelAllowFromStore, d as upsertChannelPairingRequest } from "./pairing-store-CCji1-jE.js";
import { c as resolvePinnedMainDmOwnerFromAllowlist } from "./dm-policy-shared-DKpdJGRu.js";
import { a as createLazyRuntimeSurface, n as createLazyRuntimeMethodBinder } from "./lazy-runtime-BMNFO5xi.js";
import { a as fetchRemoteMedia, n as loadWebMedia } from "./web-media-DgPCC_wU.js";
import { r as enqueueSystemEvent } from "./system-events-B1AzvbLz.js";
import { p as resolveSendableOutboundReplyParts } from "./reply-payload-BqLS-SRu.js";
import { a as resolveMarkdownTableMode } from "./config-runtime-er1PcYOL.js";
import { n as resolveChannelGroupRequireMention, t as resolveChannelGroupPolicy } from "./group-policy-DU1bQcz-.js";
import { it as saveMediaBuffer } from "./routes-cwLAFZU4.js";
import { t as buildRandomTempFilePath } from "./temp-path-Cb4_VYUB.js";
import { r as readAgentMemoryFile } from "./manager-DEjPYVHv.js";
import { i as matchesMentionWithExplicit, n as buildMentionRegexes, r as matchesMentionPatterns } from "./mentions-Ctfn_rwY.js";
import { y as shouldHandleTextCommands } from "./commands-registry-B5LdPpzV.js";
import { a as resolveInboundDebounceMs, c as formatInboundEnvelope, f as hasControlCommand, h as shouldComputeCommandAuthorized, i as createInboundDebouncer, m as isControlCommandMessage, o as formatAgentEnvelope, t as resolveInboundSessionEnvelopeContext, u as resolveEnvelopeFormatOptions } from "./channel-inbound-CakxIYLw.js";
import { n as recordChannelActivity, t as getChannelActivity } from "./channel-activity-DmW8i3nP.js";
import { a as isRequestBodyLimitError, c as requestBodyErrorToText, s as readRequestBodyWithLimit } from "./http-body-D-NIzIGK.js";
import { s as clearHistoryEntriesIfEnabled, u as recordPendingHistoryEntryIfEnabled } from "./history-BK1AiOUs.js";
import { n as shouldAckReaction, t as removeAckReactionAfterReply } from "./ack-reactions-4VXMY3Se.js";
import { n as resolveMentionGatingWithBypass } from "./mention-gating-DuRqwNav.js";
import { n as toLocationContext, t as formatLocationText } from "./location-D9ODbqNE.js";
import { t as createChannelReplyPipeline } from "./channel-reply-pipeline-iqE3vE0x.js";
import { t as resolveMemorySearchConfig } from "./memory-search-zbc9ennO.js";
import { n as getMemorySearchManager, r as resolveMemoryBackendConfig } from "./search-manager-CdmvzYd9.js";
import { n as collectTelegramUnmentionedGroupIds } from "./audit-DQtMzS-9.js";
import { i as resolveLineAccount, n as normalizeAccountId, r as resolveDefaultLineAccountId, t as listLineAccountIds } from "./accounts-CbVXw4pO.js";
import { _ as showLoadingAnimation, a as createTextMessageWithQuickReplies, c as pushFlexMessage, d as pushMessageLine, f as pushMessagesLine, g as sendMessageLine, h as replyMessageLine, i as createQuickReplyItems, m as pushTextMessageWithQuickReplies, n as createImageMessage, o as getUserDisplayName, p as pushTemplateMessage, r as createLocationMessage, t as createFlexMessage, u as pushLocationMessage } from "./send-Bp0drDzi.js";
import { t as buildTemplateMessageFromPayload } from "./template-messages-D_r4dvnV.js";
import { t as resolvePairingIdLabel } from "./pairing-labels-CYOIZDrf.js";
import { n as resolveLineGroupConfigEntry, r as resolveLineGroupHistoryKey } from "./group-keys-CIxPeHqO.js";
import { n as sendMessageIMessage, r as probeIMessage, t as monitorIMessageProvider } from "./imessage-BT3UJkgx.js";
import { i as setTelegramThreadBindingMaxAgeBySessionKey, o as telegramMessageActions, r as setTelegramThreadBindingIdleTimeoutBySessionKey } from "./telegram-D_lcxoTf.js";
import { t as registerMemoryCli } from "./memory-cli-xQoAKUiE.js";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { Type } from "@sinclair/typebox";
import { createJiti } from "jiti";
import { messagingApi } from "@line/bot-sdk";
//#region src/plugins/runtime/runtime-agent.ts
function createRuntimeAgent() {
	return {
		defaults: {
			model: DEFAULT_MODEL,
			provider: DEFAULT_PROVIDER
		},
		resolveAgentDir,
		resolveAgentWorkspaceDir,
		resolveAgentIdentity,
		resolveThinkingDefault,
		runEmbeddedPiAgent,
		resolveAgentTimeoutMs,
		ensureAgentWorkspace,
		session: {
			resolveStorePath,
			loadSessionStore,
			saveSessionStore,
			resolveSessionFilePath
		}
	};
}
//#endregion
//#region src/line/auto-reply-delivery.ts
async function deliverLineAutoReply(params) {
	const { payload, lineData, replyToken, accountId, to, textLimit, deps } = params;
	let replyTokenUsed = params.replyTokenUsed;
	const pushLineMessages = async (messages) => {
		if (messages.length === 0) return;
		for (let i = 0; i < messages.length; i += 5) await deps.pushMessagesLine(to, messages.slice(i, i + 5), { accountId });
	};
	const sendLineMessages = async (messages, allowReplyToken) => {
		if (messages.length === 0) return;
		let remaining = messages;
		if (allowReplyToken && replyToken && !replyTokenUsed) {
			const replyBatch = remaining.slice(0, 5);
			try {
				await deps.replyMessageLine(replyToken, replyBatch, { accountId });
			} catch (err) {
				deps.onReplyError?.(err);
				await pushLineMessages(replyBatch);
			}
			replyTokenUsed = true;
			remaining = remaining.slice(replyBatch.length);
		}
		if (remaining.length > 0) await pushLineMessages(remaining);
	};
	const richMessages = [];
	const hasQuickReplies = Boolean(lineData.quickReplies?.length);
	if (lineData.flexMessage) richMessages.push(deps.createFlexMessage(lineData.flexMessage.altText.slice(0, 400), lineData.flexMessage.contents));
	if (lineData.templateMessage) {
		const templateMsg = deps.buildTemplateMessageFromPayload(lineData.templateMessage);
		if (templateMsg) richMessages.push(templateMsg);
	}
	if (lineData.location) richMessages.push(deps.createLocationMessage(lineData.location));
	const processed = payload.text ? deps.processLineMessage(payload.text) : {
		text: "",
		flexMessages: []
	};
	for (const flexMsg of processed.flexMessages) richMessages.push(deps.createFlexMessage(flexMsg.altText.slice(0, 400), flexMsg.contents));
	const chunks = processed.text ? deps.chunkMarkdownText(processed.text, textLimit) : [];
	const mediaMessages = resolveSendableOutboundReplyParts(payload).mediaUrls.map((url) => url?.trim()).filter((url) => Boolean(url)).map((url) => deps.createImageMessage(url));
	if (chunks.length > 0) {
		const hasRichOrMedia = richMessages.length > 0 || mediaMessages.length > 0;
		if (hasQuickReplies && hasRichOrMedia) try {
			await sendLineMessages([...richMessages, ...mediaMessages], false);
		} catch (err) {
			deps.onReplyError?.(err);
		}
		const { replyTokenUsed: nextReplyTokenUsed } = await deps.sendLineReplyChunks({
			to,
			chunks,
			quickReplies: lineData.quickReplies,
			replyToken,
			replyTokenUsed,
			accountId,
			replyMessageLine: deps.replyMessageLine,
			pushMessageLine: deps.pushMessageLine,
			pushTextMessageWithQuickReplies: deps.pushTextMessageWithQuickReplies,
			createTextMessageWithQuickReplies: deps.createTextMessageWithQuickReplies
		});
		replyTokenUsed = nextReplyTokenUsed;
		if (!hasQuickReplies || !hasRichOrMedia) {
			await sendLineMessages(richMessages, false);
			if (mediaMessages.length > 0) await sendLineMessages(mediaMessages, false);
		}
	} else {
		const combined = [...richMessages, ...mediaMessages];
		if (hasQuickReplies && combined.length > 0) {
			const quickReply = deps.createQuickReplyItems(lineData.quickReplies);
			const targetIndex = replyToken && !replyTokenUsed ? Math.min(4, combined.length - 1) : combined.length - 1;
			combined[targetIndex] = {
				...combined[targetIndex],
				quickReply
			};
		}
		await sendLineMessages(combined, true);
	}
	return { replyTokenUsed };
}
//#endregion
//#region src/line/bot-access.ts
function normalizeAllowEntry(value) {
	const trimmed = String(value).trim();
	if (!trimmed) return "";
	if (trimmed === "*") return "*";
	return trimmed.replace(/^line:(?:user:)?/i, "");
}
const normalizeAllowFrom = (list) => {
	const entries = (list ?? []).map((value) => normalizeAllowEntry(value)).filter(Boolean);
	return {
		entries,
		hasWildcard: entries.includes("*"),
		hasEntries: entries.length > 0
	};
};
const normalizeDmAllowFromWithStore = (params) => normalizeAllowFrom(mergeDmAllowFromSources(params));
const isSenderAllowed = (params) => {
	const { allow, senderId } = params;
	return isSenderIdAllowed(allow, senderId, false);
};
//#endregion
//#region src/line/bot-message-context.ts
function getLineSourceInfo(source) {
	return {
		userId: source.type === "user" ? source.userId : source.type === "group" ? source.userId : source.type === "room" ? source.userId : void 0,
		groupId: source.type === "group" ? source.groupId : void 0,
		roomId: source.type === "room" ? source.roomId : void 0,
		isGroup: source.type === "group" || source.type === "room"
	};
}
function buildPeerId(source) {
	const groupKey = resolveLineGroupHistoryKey({
		groupId: source.type === "group" ? source.groupId : void 0,
		roomId: source.type === "room" ? source.roomId : void 0
	});
	if (groupKey) return groupKey;
	if (source.type === "user" && source.userId) return source.userId;
	return "unknown";
}
function resolveLineInboundRoute(params) {
	recordChannelActivity({
		channel: "line",
		accountId: params.account.accountId,
		direction: "inbound"
	});
	const { userId, groupId, roomId, isGroup } = getLineSourceInfo(params.source);
	const peerId = buildPeerId(params.source);
	return {
		userId,
		groupId,
		roomId,
		isGroup,
		peerId,
		route: resolveAgentRoute({
			cfg: params.cfg,
			channel: "line",
			accountId: params.account.accountId,
			peer: {
				kind: isGroup ? "group" : "direct",
				id: peerId
			}
		})
	};
}
const STICKER_PACKAGES = {
	"1": "Moon & James",
	"2": "Cony & Brown",
	"3": "Brown & Friends",
	"4": "Moon Special",
	"11537": "Cony",
	"11538": "Brown",
	"11539": "Moon",
	"6136": "Cony's Happy Life",
	"6325": "Brown's Life",
	"6359": "Choco",
	"6362": "Sally",
	"6370": "Edward",
	"789": "LINE Characters"
};
function describeStickerKeywords(sticker) {
	const keywords = sticker.keywords;
	if (keywords && keywords.length > 0) return keywords.slice(0, 3).join(", ");
	const stickerText = sticker.text;
	if (stickerText) return stickerText;
	return "";
}
function extractMessageText(message) {
	if (message.type === "text") return message.text;
	if (message.type === "location") {
		const loc = message;
		return formatLocationText({
			latitude: loc.latitude,
			longitude: loc.longitude,
			name: loc.title,
			address: loc.address
		}) ?? "";
	}
	if (message.type === "sticker") {
		const sticker = message;
		const packageName = STICKER_PACKAGES[sticker.packageId] ?? "sticker";
		const keywords = describeStickerKeywords(sticker);
		if (keywords) return `[Sent a ${packageName} sticker: ${keywords}]`;
		return `[Sent a ${packageName} sticker]`;
	}
	return "";
}
function extractMediaPlaceholder(message) {
	switch (message.type) {
		case "image": return "<media:image>";
		case "video": return "<media:video>";
		case "audio": return "<media:audio>";
		case "file": return "<media:document>";
		default: return "";
	}
}
function resolveLineConversationLabel(params) {
	return params.isGroup ? params.groupId ? `group:${params.groupId}` : params.roomId ? `room:${params.roomId}` : "unknown-group" : params.senderLabel;
}
function resolveLineAddresses(params) {
	const fromAddress = params.isGroup ? params.groupId ? `line:group:${params.groupId}` : params.roomId ? `line:room:${params.roomId}` : `line:${params.peerId}` : `line:${params.userId ?? params.peerId}`;
	return {
		fromAddress,
		toAddress: params.isGroup ? fromAddress : `line:${params.userId ?? params.peerId}`,
		originatingTo: params.isGroup ? fromAddress : `line:${params.userId ?? params.peerId}`
	};
}
function resolveLineGroupSystemPrompt(groups, source) {
	return resolveLineGroupConfigEntry(groups, {
		groupId: source.groupId,
		roomId: source.roomId
	})?.systemPrompt?.trim() || void 0;
}
async function finalizeLineInboundContext(params) {
	const { fromAddress, toAddress, originatingTo } = resolveLineAddresses({
		isGroup: params.source.isGroup,
		groupId: params.source.groupId,
		roomId: params.source.roomId,
		userId: params.source.userId,
		peerId: params.source.peerId
	});
	const senderId = params.source.userId ?? "unknown";
	const senderLabel = params.source.userId ? `user:${params.source.userId}` : "unknown";
	const conversationLabel = resolveLineConversationLabel({
		isGroup: params.source.isGroup,
		groupId: params.source.groupId,
		roomId: params.source.roomId,
		senderLabel
	});
	const { storePath, envelopeOptions, previousTimestamp } = resolveInboundSessionEnvelopeContext({
		cfg: params.cfg,
		agentId: params.route.agentId,
		sessionKey: params.route.sessionKey
	});
	const body = formatInboundEnvelope({
		channel: "LINE",
		from: conversationLabel,
		timestamp: params.timestamp,
		body: params.rawBody,
		chatType: params.source.isGroup ? "group" : "direct",
		sender: { id: senderId },
		previousTimestamp,
		envelope: envelopeOptions
	});
	const ctxPayload = finalizeInboundContext({
		Body: body,
		BodyForAgent: params.rawBody,
		RawBody: params.rawBody,
		CommandBody: params.rawBody,
		From: fromAddress,
		To: toAddress,
		SessionKey: params.route.sessionKey,
		AccountId: params.route.accountId,
		ChatType: params.source.isGroup ? "group" : "direct",
		ConversationLabel: conversationLabel,
		GroupSubject: params.source.isGroup ? params.source.groupId ?? params.source.roomId : void 0,
		SenderId: senderId,
		Provider: "line",
		Surface: "line",
		MessageSid: params.messageSid,
		Timestamp: params.timestamp,
		MediaPath: params.media.firstPath,
		MediaType: params.media.firstContentType,
		MediaUrl: params.media.firstPath,
		MediaPaths: params.media.paths,
		MediaUrls: params.media.paths,
		MediaTypes: params.media.types,
		...params.locationContext,
		CommandAuthorized: params.commandAuthorized,
		OriginatingChannel: "line",
		OriginatingTo: originatingTo,
		GroupSystemPrompt: params.source.isGroup ? resolveLineGroupSystemPrompt(params.account.config.groups, params.source) : void 0,
		InboundHistory: params.inboundHistory
	});
	const pinnedMainDmOwner = !params.source.isGroup ? resolvePinnedMainDmOwnerFromAllowlist({
		dmScope: params.cfg.session?.dmScope,
		allowFrom: params.account.config.allowFrom,
		normalizeEntry: (entry) => normalizeAllowFrom([entry]).entries[0]
	}) : null;
	await recordInboundSession({
		storePath,
		sessionKey: ctxPayload.SessionKey ?? params.route.sessionKey,
		ctx: ctxPayload,
		updateLastRoute: !params.source.isGroup ? {
			sessionKey: params.route.mainSessionKey,
			channel: "line",
			to: params.source.userId ?? params.source.peerId,
			accountId: params.route.accountId,
			mainDmOwnerPin: pinnedMainDmOwner && params.source.userId ? {
				ownerRecipient: pinnedMainDmOwner,
				senderRecipient: params.source.userId,
				onSkip: ({ ownerRecipient, senderRecipient }) => {
					logVerbose(`line: skip main-session last route for ${senderRecipient} (pinned owner ${ownerRecipient})`);
				}
			} : void 0
		} : void 0,
		onRecordError: (err) => {
			logVerbose(`line: failed updating session meta: ${String(err)}`);
		}
	});
	if (shouldLogVerbose()) {
		const preview = body.slice(0, 200).replace(/\n/g, "\\n");
		const mediaInfo = params.verboseLog.kind === "inbound" && (params.verboseLog.mediaCount ?? 0) > 1 ? ` mediaCount=${params.verboseLog.mediaCount}` : "";
		logVerbose(`${params.verboseLog.kind === "inbound" ? "line inbound" : "line postback"}: from=${ctxPayload.From} len=${body.length}${mediaInfo} preview="${preview}"`);
	}
	return {
		ctxPayload,
		replyToken: params.event.replyToken
	};
}
async function buildLineMessageContext(params) {
	const { event, allMedia, cfg, account, commandAuthorized, groupHistories, historyLimit } = params;
	const source = event.source;
	const { userId, groupId, roomId, isGroup, peerId, route } = resolveLineInboundRoute({
		source,
		cfg,
		account
	});
	const message = event.message;
	const messageId = message.id;
	const timestamp = event.timestamp;
	const textContent = extractMessageText(message);
	const placeholder = extractMediaPlaceholder(message);
	let rawBody = textContent || placeholder;
	if (!rawBody && allMedia.length > 0) rawBody = `<media:image>${allMedia.length > 1 ? ` (${allMedia.length} images)` : ""}`;
	if (!rawBody && allMedia.length === 0) return null;
	let locationContext;
	if (message.type === "location") {
		const loc = message;
		locationContext = toLocationContext({
			latitude: loc.latitude,
			longitude: loc.longitude,
			name: loc.title,
			address: loc.address
		});
	}
	const historyKey = isGroup ? peerId : void 0;
	const inboundHistory = historyKey && groupHistories && (historyLimit ?? 0) > 0 ? (groupHistories.get(historyKey) ?? []).map((entry) => ({
		sender: entry.sender,
		body: entry.body,
		timestamp: entry.timestamp
	})) : void 0;
	const { ctxPayload } = await finalizeLineInboundContext({
		cfg,
		account,
		event,
		route,
		source: {
			userId,
			groupId,
			roomId,
			isGroup,
			peerId
		},
		rawBody,
		timestamp,
		messageSid: messageId,
		commandAuthorized,
		media: {
			firstPath: allMedia[0]?.path,
			firstContentType: allMedia[0]?.contentType,
			paths: allMedia.length > 0 ? allMedia.map((m) => m.path) : void 0,
			types: allMedia.length > 0 ? allMedia.map((m) => m.contentType).filter(Boolean) : void 0
		},
		locationContext,
		verboseLog: {
			kind: "inbound",
			mediaCount: allMedia.length
		},
		inboundHistory
	});
	return {
		ctxPayload,
		event,
		userId,
		groupId,
		roomId,
		isGroup,
		route,
		replyToken: event.replyToken,
		accountId: account.accountId
	};
}
async function buildLinePostbackContext(params) {
	const { event, cfg, account, commandAuthorized } = params;
	const source = event.source;
	const { userId, groupId, roomId, isGroup, peerId, route } = resolveLineInboundRoute({
		source,
		cfg,
		account
	});
	const timestamp = event.timestamp;
	const rawData = event.postback?.data?.trim() ?? "";
	if (!rawData) return null;
	let rawBody = rawData;
	if (rawData.includes("line.action=")) {
		const params = new URLSearchParams(rawData);
		const action = params.get("line.action") ?? "";
		const device = params.get("line.device");
		rawBody = device ? `line action ${action} device ${device}` : `line action ${action}`;
	}
	const messageSid = event.replyToken ? `postback:${event.replyToken}` : `postback:${timestamp}`;
	const { ctxPayload } = await finalizeLineInboundContext({
		cfg,
		account,
		event,
		route,
		source: {
			userId,
			groupId,
			roomId,
			isGroup,
			peerId
		},
		rawBody,
		timestamp,
		messageSid,
		commandAuthorized,
		media: {
			firstPath: "",
			firstContentType: void 0,
			paths: void 0,
			types: void 0
		},
		verboseLog: { kind: "postback" }
	});
	return {
		ctxPayload,
		event,
		userId,
		groupId,
		roomId,
		isGroup,
		route,
		replyToken: event.replyToken,
		accountId: account.accountId
	};
}
//#endregion
//#region src/line/download.ts
const AUDIO_BRANDS = new Set([
	"m4a ",
	"m4b ",
	"m4p ",
	"m4r ",
	"f4a ",
	"f4b "
]);
async function downloadLineMedia(messageId, channelAccessToken, maxBytes = 10 * 1024 * 1024) {
	const response = await new messagingApi.MessagingApiBlobClient({ channelAccessToken }).getMessageContent(messageId);
	const chunks = [];
	let totalSize = 0;
	for await (const chunk of response) {
		totalSize += chunk.length;
		if (totalSize > maxBytes) throw new Error(`Media exceeds ${Math.round(maxBytes / (1024 * 1024))}MB limit`);
		chunks.push(chunk);
	}
	const buffer = Buffer.concat(chunks);
	const contentType = detectContentType(buffer);
	const filePath = buildRandomTempFilePath({
		prefix: "line-media",
		extension: getExtensionForContentType(contentType)
	});
	await fs.promises.writeFile(filePath, buffer);
	logVerbose(`line: downloaded media ${messageId} to ${filePath} (${buffer.length} bytes)`);
	return {
		path: filePath,
		contentType,
		size: buffer.length
	};
}
function detectContentType(buffer) {
	const hasFtypBox = buffer.length >= 12 && buffer[4] === 102 && buffer[5] === 116 && buffer[6] === 121 && buffer[7] === 112;
	if (buffer.length >= 2) {
		if (buffer[0] === 255 && buffer[1] === 216) return "image/jpeg";
		if (buffer[0] === 137 && buffer[1] === 80 && buffer[2] === 78 && buffer[3] === 71) return "image/png";
		if (buffer[0] === 71 && buffer[1] === 73 && buffer[2] === 70) return "image/gif";
		if (buffer[0] === 82 && buffer[1] === 73 && buffer[2] === 70 && buffer[3] === 70 && buffer[8] === 87 && buffer[9] === 69 && buffer[10] === 66 && buffer[11] === 80) return "image/webp";
		if (hasFtypBox) {
			const majorBrand = buffer.toString("ascii", 8, 12).toLowerCase();
			if (AUDIO_BRANDS.has(majorBrand)) return "audio/mp4";
			return "video/mp4";
		}
	}
	return "application/octet-stream";
}
function getExtensionForContentType(contentType) {
	switch (contentType) {
		case "image/jpeg": return ".jpg";
		case "image/png": return ".png";
		case "image/gif": return ".gif";
		case "image/webp": return ".webp";
		case "video/mp4": return ".mp4";
		case "audio/mp4": return ".m4a";
		case "audio/mpeg": return ".mp3";
		default: return ".bin";
	}
}
//#endregion
//#region src/line/bot-handlers.ts
const LINE_DOWNLOADABLE_MESSAGE_TYPES = new Set([
	"image",
	"video",
	"audio",
	"file"
]);
function isDownloadableLineMessageType(messageType) {
	return LINE_DOWNLOADABLE_MESSAGE_TYPES.has(messageType);
}
const LINE_WEBHOOK_REPLAY_WINDOW_MS = 600 * 1e3;
const LINE_WEBHOOK_REPLAY_MAX_ENTRIES = 4096;
const LINE_WEBHOOK_REPLAY_PRUNE_INTERVAL_MS = 1e3;
function createLineWebhookReplayCache() {
	return {
		seenEvents: /* @__PURE__ */ new Map(),
		inFlightEvents: /* @__PURE__ */ new Map(),
		lastPruneAtMs: 0
	};
}
function pruneLineWebhookReplayCache(cache, nowMs) {
	const minSeenAt = nowMs - LINE_WEBHOOK_REPLAY_WINDOW_MS;
	for (const [key, seenAt] of cache.seenEvents) if (seenAt < minSeenAt) cache.seenEvents.delete(key);
	if (cache.seenEvents.size > LINE_WEBHOOK_REPLAY_MAX_ENTRIES) {
		const deleteCount = cache.seenEvents.size - LINE_WEBHOOK_REPLAY_MAX_ENTRIES;
		let deleted = 0;
		for (const key of cache.seenEvents.keys()) {
			if (deleted >= deleteCount) break;
			cache.seenEvents.delete(key);
			deleted += 1;
		}
	}
}
function buildLineWebhookReplayKey(event, accountId) {
	if (event.type === "message") {
		const messageId = event.message?.id?.trim();
		if (messageId) return {
			key: `${accountId}|message:${messageId}`,
			eventId: `message:${messageId}`
		};
	}
	const eventId = event.webhookEventId?.trim();
	if (!eventId) return null;
	const source = event.source;
	const sourceId = source?.type === "group" ? `group:${source.groupId ?? ""}` : source?.type === "room" ? `room:${source.roomId ?? ""}` : `user:${source?.userId ?? ""}`;
	return {
		key: `${accountId}|${event.type}|${sourceId}|${eventId}`,
		eventId: `event:${eventId}`
	};
}
function getLineReplayCandidate(event, context) {
	const replay = buildLineWebhookReplayKey(event, context.account.accountId);
	const cache = context.replayCache;
	if (!replay || !cache) return null;
	const nowMs = Date.now();
	if (nowMs - cache.lastPruneAtMs >= LINE_WEBHOOK_REPLAY_PRUNE_INTERVAL_MS || cache.seenEvents.size >= LINE_WEBHOOK_REPLAY_MAX_ENTRIES) {
		pruneLineWebhookReplayCache(cache, nowMs);
		cache.lastPruneAtMs = nowMs;
	}
	return {
		key: replay.key,
		eventId: replay.eventId,
		seenAtMs: nowMs,
		cache
	};
}
function shouldSkipLineReplayEvent(candidate) {
	const inFlightResult = candidate.cache.inFlightEvents.get(candidate.key);
	if (inFlightResult) {
		logVerbose(`line: skipped in-flight replayed webhook event ${candidate.eventId}`);
		return {
			skip: true,
			inFlightResult
		};
	}
	if (candidate.cache.seenEvents.has(candidate.key)) {
		logVerbose(`line: skipped replayed webhook event ${candidate.eventId}`);
		return { skip: true };
	}
	return { skip: false };
}
function markLineReplayEventInFlight(candidate) {
	let resolve;
	let reject;
	const promise = new Promise((resolvePromise, rejectPromise) => {
		resolve = resolvePromise;
		reject = rejectPromise;
	});
	promise.catch(() => {});
	candidate.cache.inFlightEvents.set(candidate.key, promise);
	return {
		promise,
		resolve,
		reject
	};
}
function clearLineReplayEventInFlight(candidate) {
	candidate.cache.inFlightEvents.delete(candidate.key);
}
function rememberLineReplayEvent(candidate) {
	candidate.cache.seenEvents.set(candidate.key, candidate.seenAtMs);
}
function resolveLineGroupConfig(params) {
	return resolveLineGroupConfigEntry(params.config.groups, {
		groupId: params.groupId,
		roomId: params.roomId
	});
}
async function sendLinePairingReply(params) {
	const { senderId, replyToken, context } = params;
	const idLabel = (() => {
		try {
			return resolvePairingIdLabel("line");
		} catch {
			return "lineUserId";
		}
	})();
	await createChannelPairingChallengeIssuer({
		channel: "line",
		upsertPairingRequest: async ({ id, meta }) => await upsertChannelPairingRequest({
			channel: "line",
			id,
			accountId: context.account.accountId,
			meta
		})
	})({
		senderId,
		senderIdLine: `Your ${idLabel}: ${senderId}`,
		onCreated: () => {
			logVerbose(`line pairing request sender=${senderId}`);
		},
		sendPairingReply: async (text) => {
			if (replyToken) try {
				await replyMessageLine(replyToken, [{
					type: "text",
					text
				}], {
					accountId: context.account.accountId,
					channelAccessToken: context.account.channelAccessToken
				});
				return;
			} catch (err) {
				logVerbose(`line pairing reply failed for ${senderId}: ${String(err)}`);
			}
			try {
				await pushMessageLine(`line:${senderId}`, text, {
					accountId: context.account.accountId,
					channelAccessToken: context.account.channelAccessToken
				});
			} catch (err) {
				logVerbose(`line pairing reply failed for ${senderId}: ${String(err)}`);
			}
		}
	});
}
async function shouldProcessLineEvent(event, context) {
	const denied = {
		allowed: false,
		commandAuthorized: false
	};
	const { cfg, account } = context;
	const { userId, groupId, roomId, isGroup } = getLineSourceInfo(event.source);
	const senderId = userId ?? "";
	const dmPolicy = account.config.dmPolicy ?? "pairing";
	const storeAllowFrom = await readChannelAllowFromStore("line", void 0, account.accountId).catch(() => []);
	const effectiveDmAllow = normalizeDmAllowFromWithStore({
		allowFrom: account.config.allowFrom,
		storeAllowFrom,
		dmPolicy
	});
	const groupConfig = resolveLineGroupConfig({
		config: account.config,
		groupId,
		roomId
	});
	const groupAllowOverride = groupConfig?.allowFrom;
	const fallbackGroupAllowFrom = account.config.allowFrom?.length ? account.config.allowFrom : void 0;
	const effectiveGroupAllow = normalizeAllowFrom(firstDefined(groupAllowOverride, account.config.groupAllowFrom, fallbackGroupAllowFrom));
	const defaultGroupPolicy = resolveDefaultGroupPolicy(cfg);
	const { groupPolicy, providerMissingFallbackApplied } = resolveAllowlistProviderRuntimeGroupPolicy({
		providerConfigPresent: cfg.channels?.line !== void 0,
		groupPolicy: account.config.groupPolicy,
		defaultGroupPolicy
	});
	warnMissingProviderGroupPolicyFallbackOnce({
		providerMissingFallbackApplied,
		providerKey: "line",
		accountId: account.accountId,
		log: (message) => logVerbose(message)
	});
	if (isGroup) {
		if (groupConfig?.enabled === false) {
			logVerbose(`Blocked line group ${groupId ?? roomId ?? "unknown"} (group disabled)`);
			return denied;
		}
		if (typeof groupAllowOverride !== "undefined") {
			if (!senderId) {
				logVerbose("Blocked line group message (group allowFrom override, no sender ID)");
				return denied;
			}
			if (!isSenderAllowed({
				allow: effectiveGroupAllow,
				senderId
			})) {
				logVerbose(`Blocked line group sender ${senderId} (group allowFrom override)`);
				return denied;
			}
		}
		const senderGroupAccess = evaluateMatchedGroupAccessForPolicy({
			groupPolicy,
			requireMatchInput: true,
			hasMatchInput: Boolean(senderId),
			allowlistConfigured: effectiveGroupAllow.entries.length > 0,
			allowlistMatched: Boolean(senderId) && isSenderAllowed({
				allow: effectiveGroupAllow,
				senderId
			})
		});
		if (!senderGroupAccess.allowed && senderGroupAccess.reason === "disabled") {
			logVerbose("Blocked line group message (groupPolicy: disabled)");
			return denied;
		}
		if (!senderGroupAccess.allowed && senderGroupAccess.reason === "missing_match_input") {
			logVerbose("Blocked line group message (no sender ID, groupPolicy: allowlist)");
			return denied;
		}
		if (!senderGroupAccess.allowed && senderGroupAccess.reason === "empty_allowlist") {
			logVerbose("Blocked line group message (groupPolicy: allowlist, no groupAllowFrom)");
			return denied;
		}
		if (!senderGroupAccess.allowed && senderGroupAccess.reason === "not_allowlisted") {
			logVerbose(`Blocked line group message from ${senderId} (groupPolicy: allowlist)`);
			return denied;
		}
		return {
			allowed: true,
			commandAuthorized: resolveLineCommandAuthorized({
				cfg,
				event,
				senderId,
				allow: effectiveGroupAllow
			})
		};
	}
	if (dmPolicy === "disabled") {
		logVerbose("Blocked line sender (dmPolicy: disabled)");
		return denied;
	}
	if (!(dmPolicy === "open" || isSenderAllowed({
		allow: effectiveDmAllow,
		senderId
	}))) {
		if (dmPolicy === "pairing") {
			if (!senderId) {
				logVerbose("Blocked line sender (dmPolicy: pairing, no sender ID)");
				return denied;
			}
			await sendLinePairingReply({
				senderId,
				replyToken: "replyToken" in event ? event.replyToken : void 0,
				context
			});
		} else logVerbose(`Blocked line sender ${senderId || "unknown"} (dmPolicy: ${dmPolicy})`);
		return denied;
	}
	return {
		allowed: true,
		commandAuthorized: resolveLineCommandAuthorized({
			cfg,
			event,
			senderId,
			allow: effectiveDmAllow
		})
	};
}
/** Extract the mentionees array from a LINE text message (SDK types omit it).
* LINE webhook payloads include `mention.mentionees` on text messages with
* `isSelf: true` for the bot and `type: "all"` for @All mentions.
* The `@line/bot-sdk` types don't expose these fields, so we use a type assertion.
*/
function getLineMentionees(message) {
	if (message.type !== "text") return [];
	const mentionees = message.mention?.mentionees;
	return Array.isArray(mentionees) ? mentionees : [];
}
function isLineBotMentioned(message) {
	return getLineMentionees(message).some((m) => m.isSelf === true || m.type === "all");
}
/** True when *any* @mention exists (bot or other users). */
function hasAnyLineMention(message) {
	return getLineMentionees(message).length > 0;
}
function resolveEventRawText(event) {
	if (event.type === "message") {
		const msg = event.message;
		if (msg.type === "text") return msg.text;
		return "";
	}
	if (event.type === "postback") return event.postback?.data?.trim() ?? "";
	return "";
}
function resolveLineCommandAuthorized(params) {
	const senderAllowedForCommands = isSenderAllowed({
		allow: params.allow,
		senderId: params.senderId
	});
	const useAccessGroups = params.cfg.commands?.useAccessGroups !== false;
	const rawText = resolveEventRawText(params.event);
	return resolveControlCommandGate({
		useAccessGroups,
		authorizers: [{
			configured: params.allow.hasEntries,
			allowed: senderAllowedForCommands
		}],
		allowTextCommands: true,
		hasControlCommand: hasControlCommand(rawText, params.cfg)
	}).commandAuthorized;
}
async function handleMessageEvent(event, context) {
	const { cfg, account, runtime, mediaMaxBytes, processMessage } = context;
	const message = event.message;
	const decision = await shouldProcessLineEvent(event, context);
	if (!decision.allowed) return;
	const { isGroup, groupId, roomId } = getLineSourceInfo(event.source);
	if (isGroup) {
		const requireMention = resolveLineGroupConfig({
			config: account.config,
			groupId,
			roomId
		})?.requireMention !== false;
		const rawText = message.type === "text" ? message.text : "";
		const peerId = groupId ?? roomId ?? event.source.userId ?? "unknown";
		const { agentId } = resolveAgentRoute({
			cfg,
			channel: "line",
			accountId: account.accountId,
			peer: {
				kind: "group",
				id: peerId
			}
		});
		const mentionRegexes = buildMentionRegexes(cfg, agentId);
		const wasMentionedByNative = isLineBotMentioned(message);
		const wasMentionedByPattern = message.type === "text" ? matchesMentionPatterns(rawText, mentionRegexes) : false;
		const wasMentioned = wasMentionedByNative || wasMentionedByPattern;
		if (resolveMentionGatingWithBypass({
			isGroup: true,
			requireMention,
			canDetectMention: message.type === "text",
			wasMentioned,
			hasAnyMention: hasAnyLineMention(message),
			allowTextCommands: true,
			hasControlCommand: hasControlCommand(rawText, cfg),
			commandAuthorized: decision.commandAuthorized
		}).shouldSkip) {
			logVerbose(`line: skipping group message (requireMention, not mentioned)`);
			const historyKey = groupId ?? roomId;
			const senderId = event.source.type === "group" || event.source.type === "room" ? event.source.userId ?? "unknown" : "unknown";
			if (historyKey && context.groupHistories) recordPendingHistoryEntryIfEnabled({
				historyMap: context.groupHistories,
				historyKey,
				limit: context.historyLimit ?? 50,
				entry: {
					sender: `user:${senderId}`,
					body: rawText || `<${message.type}>`,
					timestamp: event.timestamp
				}
			});
			return;
		}
	}
	const allMedia = [];
	if (isDownloadableLineMessageType(message.type)) try {
		const media = await downloadLineMedia(message.id, account.channelAccessToken, mediaMaxBytes);
		allMedia.push({
			path: media.path,
			contentType: media.contentType
		});
	} catch (err) {
		const errMsg = String(err);
		if (errMsg.includes("exceeds") && errMsg.includes("limit")) logVerbose(`line: media exceeds size limit for message ${message.id}`);
		else runtime.error?.(danger(`line: failed to download media: ${errMsg}`));
	}
	const messageContext = await buildLineMessageContext({
		event,
		allMedia,
		cfg,
		account,
		commandAuthorized: decision.commandAuthorized,
		groupHistories: context.groupHistories,
		historyLimit: context.historyLimit ?? 50
	});
	if (!messageContext) {
		logVerbose("line: skipping empty message");
		return;
	}
	await processMessage(messageContext);
	if (isGroup && context.groupHistories) {
		const historyKey = groupId ?? roomId;
		if (historyKey && context.groupHistories.has(historyKey)) clearHistoryEntriesIfEnabled({
			historyMap: context.groupHistories,
			historyKey,
			limit: context.historyLimit ?? 50
		});
	}
}
async function handleFollowEvent(event, _context) {
	logVerbose(`line: user ${(event.source.type === "user" ? event.source.userId : void 0) ?? "unknown"} followed`);
}
async function handleUnfollowEvent(event, _context) {
	logVerbose(`line: user ${(event.source.type === "user" ? event.source.userId : void 0) ?? "unknown"} unfollowed`);
}
async function handleJoinEvent(event, _context) {
	const groupId = event.source.type === "group" ? event.source.groupId : void 0;
	const roomId = event.source.type === "room" ? event.source.roomId : void 0;
	logVerbose(`line: bot joined ${groupId ? `group ${groupId}` : `room ${roomId}`}`);
}
async function handleLeaveEvent(event, _context) {
	const groupId = event.source.type === "group" ? event.source.groupId : void 0;
	const roomId = event.source.type === "room" ? event.source.roomId : void 0;
	logVerbose(`line: bot left ${groupId ? `group ${groupId}` : `room ${roomId}`}`);
}
async function handlePostbackEvent(event, context) {
	const data = event.postback.data;
	logVerbose(`line: received postback: ${data}`);
	const decision = await shouldProcessLineEvent(event, context);
	if (!decision.allowed) return;
	const postbackContext = await buildLinePostbackContext({
		event,
		cfg: context.cfg,
		account: context.account,
		commandAuthorized: decision.commandAuthorized
	});
	if (!postbackContext) return;
	await context.processMessage(postbackContext);
}
async function handleLineWebhookEvents(events, context) {
	let firstError;
	for (const event of events) {
		const replayCandidate = getLineReplayCandidate(event, context);
		const replaySkip = replayCandidate ? shouldSkipLineReplayEvent(replayCandidate) : null;
		if (replaySkip?.skip) {
			if (replaySkip.inFlightResult) try {
				await replaySkip.inFlightResult;
			} catch (err) {
				context.runtime.error?.(danger(`line: replayed in-flight event failed: ${String(err)}`));
				firstError ??= err;
			}
			continue;
		}
		const inFlightReservation = replayCandidate ? markLineReplayEventInFlight(replayCandidate) : null;
		try {
			switch (event.type) {
				case "message":
					await handleMessageEvent(event, context);
					break;
				case "follow":
					await handleFollowEvent(event, context);
					break;
				case "unfollow":
					await handleUnfollowEvent(event, context);
					break;
				case "join":
					await handleJoinEvent(event, context);
					break;
				case "leave":
					await handleLeaveEvent(event, context);
					break;
				case "postback":
					await handlePostbackEvent(event, context);
					break;
				default: logVerbose(`line: unhandled event type: ${event.type}`);
			}
			if (replayCandidate) {
				rememberLineReplayEvent(replayCandidate);
				inFlightReservation?.resolve();
				clearLineReplayEventInFlight(replayCandidate);
			}
		} catch (err) {
			if (replayCandidate) {
				inFlightReservation?.reject(err);
				clearLineReplayEventInFlight(replayCandidate);
			}
			context.runtime.error?.(danger(`line: event handler failed: ${String(err)}`));
			firstError ??= err;
		}
	}
	if (firstError) throw firstError;
}
//#endregion
//#region src/line/signature.ts
function validateLineSignature(body, signature, channelSecret) {
	const hash = crypto.createHmac("SHA256", channelSecret).update(body).digest("base64");
	const hashBuffer = Buffer.from(hash);
	const signatureBuffer = Buffer.from(signature);
	if (hashBuffer.length !== signatureBuffer.length) return false;
	return crypto.timingSafeEqual(hashBuffer, signatureBuffer);
}
//#endregion
//#region src/line/webhook-utils.ts
function parseLineWebhookBody(rawBody) {
	try {
		return JSON.parse(rawBody);
	} catch {
		return null;
	}
}
//#endregion
//#region src/line/bot.ts
function createLineBot(opts) {
	const runtime = opts.runtime ?? createNonExitingRuntime();
	const cfg = opts.config ?? loadConfig();
	const account = resolveLineAccount({
		cfg,
		accountId: opts.accountId
	});
	const mediaMaxBytes = (opts.mediaMaxMb ?? account.config.mediaMaxMb ?? 10) * 1024 * 1024;
	const processMessage = opts.onMessage ?? (async () => {
		logVerbose("line: no message handler configured");
	});
	const replayCache = createLineWebhookReplayCache();
	const groupHistories = /* @__PURE__ */ new Map();
	const handleWebhook = async (body) => {
		if (!body.events || body.events.length === 0) return;
		await handleLineWebhookEvents(body.events, {
			cfg,
			account,
			runtime,
			mediaMaxBytes,
			processMessage,
			replayCache,
			groupHistories,
			historyLimit: cfg.messages?.groupChat?.historyLimit ?? 50
		});
	};
	return {
		handleWebhook,
		account
	};
}
//#endregion
//#region src/line/reply-chunks.ts
async function sendLineReplyChunks(params) {
	const hasQuickReplies = Boolean(params.quickReplies?.length);
	let replyTokenUsed = Boolean(params.replyTokenUsed);
	if (params.chunks.length === 0) return { replyTokenUsed };
	if (params.replyToken && !replyTokenUsed) try {
		const replyBatch = params.chunks.slice(0, 5);
		const remaining = params.chunks.slice(replyBatch.length);
		const replyMessages = replyBatch.map((chunk) => ({
			type: "text",
			text: chunk
		}));
		if (hasQuickReplies && remaining.length === 0 && replyMessages.length > 0) {
			const lastIndex = replyMessages.length - 1;
			replyMessages[lastIndex] = params.createTextMessageWithQuickReplies(replyBatch[lastIndex], params.quickReplies);
		}
		await params.replyMessageLine(params.replyToken, replyMessages, { accountId: params.accountId });
		replyTokenUsed = true;
		for (let i = 0; i < remaining.length; i += 1) if (i === remaining.length - 1 && hasQuickReplies) await params.pushTextMessageWithQuickReplies(params.to, remaining[i], params.quickReplies, { accountId: params.accountId });
		else await params.pushMessageLine(params.to, remaining[i], { accountId: params.accountId });
		return { replyTokenUsed };
	} catch (err) {
		params.onReplyError?.(err);
		replyTokenUsed = true;
	}
	for (let i = 0; i < params.chunks.length; i += 1) if (i === params.chunks.length - 1 && hasQuickReplies) await params.pushTextMessageWithQuickReplies(params.to, params.chunks[i], params.quickReplies, { accountId: params.accountId });
	else await params.pushMessageLine(params.to, params.chunks[i], { accountId: params.accountId });
	return { replyTokenUsed };
}
//#endregion
//#region src/line/webhook-node.ts
const LINE_WEBHOOK_MAX_BODY_BYTES = 1024 * 1024;
const LINE_WEBHOOK_PREAUTH_MAX_BODY_BYTES = 64 * 1024;
const LINE_WEBHOOK_PREAUTH_BODY_TIMEOUT_MS = 5e3;
async function readLineWebhookRequestBody(req, maxBytes = LINE_WEBHOOK_MAX_BODY_BYTES, timeoutMs = LINE_WEBHOOK_PREAUTH_BODY_TIMEOUT_MS) {
	return await readRequestBodyWithLimit(req, {
		maxBytes,
		timeoutMs
	});
}
function createLineNodeWebhookHandler(params) {
	const maxBodyBytes = params.maxBodyBytes ?? LINE_WEBHOOK_MAX_BODY_BYTES;
	const readBody = params.readBody ?? readLineWebhookRequestBody;
	return async (req, res) => {
		if (req.method === "GET" || req.method === "HEAD") {
			if (req.method === "HEAD") {
				res.statusCode = 204;
				res.end();
				return;
			}
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/plain");
			res.end("OK");
			return;
		}
		if (req.method !== "POST") {
			res.statusCode = 405;
			res.setHeader("Allow", "GET, HEAD, POST");
			res.setHeader("Content-Type", "application/json");
			res.end(JSON.stringify({ error: "Method Not Allowed" }));
			return;
		}
		try {
			const signatureHeader = req.headers["x-line-signature"];
			const signature = typeof signatureHeader === "string" ? signatureHeader.trim() : Array.isArray(signatureHeader) ? (signatureHeader[0] ?? "").trim() : "";
			if (!signature) {
				logVerbose("line: webhook missing X-Line-Signature header");
				res.statusCode = 400;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ error: "Missing X-Line-Signature header" }));
				return;
			}
			const rawBody = await readBody(req, Math.min(maxBodyBytes, LINE_WEBHOOK_PREAUTH_MAX_BODY_BYTES), LINE_WEBHOOK_PREAUTH_BODY_TIMEOUT_MS);
			if (!validateLineSignature(rawBody, signature, params.channelSecret)) {
				logVerbose("line: webhook signature validation failed");
				res.statusCode = 401;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ error: "Invalid signature" }));
				return;
			}
			const body = parseLineWebhookBody(rawBody);
			if (!body) {
				res.statusCode = 400;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ error: "Invalid webhook payload" }));
				return;
			}
			if (body.events && body.events.length > 0) {
				logVerbose(`line: received ${body.events.length} webhook events`);
				await params.bot.handleWebhook(body);
			}
			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");
			res.end(JSON.stringify({ status: "ok" }));
		} catch (err) {
			if (isRequestBodyLimitError(err, "PAYLOAD_TOO_LARGE")) {
				res.statusCode = 413;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ error: "Payload too large" }));
				return;
			}
			if (isRequestBodyLimitError(err, "REQUEST_BODY_TIMEOUT")) {
				res.statusCode = 408;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ error: requestBodyErrorToText("REQUEST_BODY_TIMEOUT") }));
				return;
			}
			params.runtime.error?.(danger(`line webhook error: ${String(err)}`));
			if (!res.headersSent) {
				res.statusCode = 500;
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify({ error: "Internal server error" }));
			}
		}
	};
}
//#endregion
//#region src/line/monitor.ts
const runtimeState = /* @__PURE__ */ new Map();
function recordChannelRuntimeState(params) {
	const key = `${params.channel}:${params.accountId}`;
	const existing = runtimeState.get(key) ?? {
		running: false,
		lastStartAt: null,
		lastStopAt: null,
		lastError: null
	};
	runtimeState.set(key, {
		...existing,
		...params.state
	});
}
function startLineLoadingKeepalive(params) {
	const intervalMs = params.intervalMs ?? 18e3;
	const loadingSeconds = params.loadingSeconds ?? 20;
	let stopped = false;
	const trigger = () => {
		if (stopped) return;
		showLoadingAnimation(params.userId, {
			accountId: params.accountId,
			loadingSeconds
		}).catch(() => {});
	};
	trigger();
	const timer = setInterval(trigger, intervalMs);
	return () => {
		if (stopped) return;
		stopped = true;
		clearInterval(timer);
	};
}
async function monitorLineProvider(opts) {
	const { channelAccessToken, channelSecret, accountId, config, runtime, abortSignal, webhookPath } = opts;
	const resolvedAccountId = accountId ?? "default";
	const token = channelAccessToken.trim();
	const secret = channelSecret.trim();
	if (!token) throw new Error("LINE webhook mode requires a non-empty channel access token.");
	if (!secret) throw new Error("LINE webhook mode requires a non-empty channel secret.");
	recordChannelRuntimeState({
		channel: "line",
		accountId: resolvedAccountId,
		state: {
			running: true,
			lastStartAt: Date.now()
		}
	});
	const bot = createLineBot({
		channelAccessToken: token,
		channelSecret: secret,
		accountId,
		runtime,
		config,
		onMessage: async (ctx) => {
			if (!ctx) return;
			const { ctxPayload, replyToken, route } = ctx;
			recordChannelRuntimeState({
				channel: "line",
				accountId: resolvedAccountId,
				state: { lastInboundAt: Date.now() }
			});
			const shouldShowLoading = Boolean(ctx.userId && !ctx.isGroup);
			const displayNamePromise = ctx.userId ? getUserDisplayName(ctx.userId, { accountId: ctx.accountId }) : Promise.resolve(ctxPayload.From);
			const stopLoading = shouldShowLoading ? startLineLoadingKeepalive({
				userId: ctx.userId,
				accountId: ctx.accountId
			}) : null;
			logVerbose(`line: received message from ${await displayNamePromise} (${ctxPayload.From})`);
			try {
				const textLimit = 5e3;
				let replyTokenUsed = false;
				const { onModelSelected, ...replyPipeline } = createChannelReplyPipeline({
					cfg: config,
					agentId: route.agentId,
					channel: "line",
					accountId: route.accountId
				});
				const { queuedFinal } = await dispatchReplyWithBufferedBlockDispatcher({
					ctx: ctxPayload,
					cfg: config,
					dispatcherOptions: {
						...replyPipeline,
						deliver: async (payload, _info) => {
							const lineData = payload.channelData?.line ?? {};
							if (ctx.userId && !ctx.isGroup) showLoadingAnimation(ctx.userId, { accountId: ctx.accountId }).catch(() => {});
							const { replyTokenUsed: nextReplyTokenUsed } = await deliverLineAutoReply({
								payload,
								lineData,
								to: ctxPayload.From,
								replyToken,
								replyTokenUsed,
								accountId: ctx.accountId,
								textLimit,
								deps: {
									buildTemplateMessageFromPayload,
									processLineMessage,
									chunkMarkdownText,
									sendLineReplyChunks,
									replyMessageLine,
									pushMessageLine,
									pushTextMessageWithQuickReplies,
									createQuickReplyItems,
									createTextMessageWithQuickReplies,
									pushMessagesLine,
									createFlexMessage,
									createImageMessage,
									createLocationMessage,
									onReplyError: (replyErr) => {
										logVerbose(`line: reply token failed, falling back to push: ${String(replyErr)}`);
									}
								}
							});
							replyTokenUsed = nextReplyTokenUsed;
							recordChannelRuntimeState({
								channel: "line",
								accountId: resolvedAccountId,
								state: { lastOutboundAt: Date.now() }
							});
						},
						onError: (err, info) => {
							runtime.error?.(danger(`line ${info.kind} reply failed: ${String(err)}`));
						}
					},
					replyOptions: { onModelSelected }
				});
				if (!queuedFinal) logVerbose(`line: no response generated for message from ${ctxPayload.From}`);
			} catch (err) {
				runtime.error?.(danger(`line: auto-reply failed: ${String(err)}`));
				if (replyToken) try {
					await replyMessageLine(replyToken, [{
						type: "text",
						text: "Sorry, I encountered an error processing your message."
					}], { accountId: ctx.accountId });
				} catch (replyErr) {
					runtime.error?.(danger(`line: error reply failed: ${String(replyErr)}`));
				}
			} finally {
				stopLoading?.();
			}
		}
	});
	const normalizedPath = normalizePluginHttpPath(webhookPath, "/line/webhook") ?? "/line/webhook";
	const unregisterHttp = registerPluginHttpRoute({
		path: normalizedPath,
		auth: "plugin",
		replaceExisting: true,
		pluginId: "line",
		accountId: resolvedAccountId,
		log: (msg) => logVerbose(msg),
		handler: createLineNodeWebhookHandler({
			channelSecret: secret,
			bot,
			runtime
		})
	});
	logVerbose(`line: registered webhook handler at ${normalizedPath}`);
	let stopped = false;
	const stopHandler = () => {
		if (stopped) return;
		stopped = true;
		logVerbose(`line: stopping provider for account ${resolvedAccountId}`);
		unregisterHttp();
		recordChannelRuntimeState({
			channel: "line",
			accountId: resolvedAccountId,
			state: {
				running: false,
				lastStopAt: Date.now()
			}
		});
	};
	if (abortSignal?.aborted) stopHandler();
	else if (abortSignal) {
		abortSignal.addEventListener("abort", stopHandler, { once: true });
		await waitForAbortSignal(abortSignal);
	}
	return {
		account: bot.account,
		handleWebhook: bot.handleWebhook,
		stop: () => {
			stopHandler();
			abortSignal?.removeEventListener("abort", stopHandler);
		}
	};
}
//#endregion
//#region src/line/probe.ts
async function probeLineBot(channelAccessToken, timeoutMs = 5e3) {
	if (!channelAccessToken?.trim()) return {
		ok: false,
		error: "Channel access token not configured"
	};
	const client = new messagingApi.MessagingApiClient({ channelAccessToken: channelAccessToken.trim() });
	try {
		const profile = await withTimeout(client.getBotInfo(), timeoutMs);
		return {
			ok: true,
			bot: {
				displayName: profile.displayName,
				userId: profile.userId,
				basicId: profile.basicId,
				pictureUrl: profile.pictureUrl
			}
		};
	} catch (err) {
		return {
			ok: false,
			error: err instanceof Error ? err.message : String(err)
		};
	}
}
//#endregion
//#region src/plugins/runtime/runtime-discord-typing.ts
const DEFAULT_DISCORD_TYPING_INTERVAL_MS = 8e3;
async function createDiscordTypingLease(params) {
	const intervalMs = typeof params.intervalMs === "number" && Number.isFinite(params.intervalMs) ? Math.max(1e3, Math.floor(params.intervalMs)) : DEFAULT_DISCORD_TYPING_INTERVAL_MS;
	let stopped = false;
	let timer = null;
	const pulse = async () => {
		if (stopped) return;
		await params.pulse({
			channelId: params.channelId,
			accountId: params.accountId,
			cfg: params.cfg
		});
	};
	await pulse();
	timer = setInterval(() => {
		pulse().catch((err) => {
			logWarn(`plugins: discord typing pulse failed: ${String(err)}`);
		});
	}, intervalMs);
	timer.unref?.();
	return {
		refresh: async () => {
			await pulse();
		},
		stop: () => {
			stopped = true;
			if (timer) {
				clearInterval(timer);
				timer = null;
			}
		}
	};
}
//#endregion
//#region src/plugins/runtime/runtime-discord.ts
const bindDiscordRuntimeMethod = createLazyRuntimeMethodBinder(createLazyRuntimeSurface(() => import("./runtime-discord-ops.runtime-DiNjdO6i.js"), ({ runtimeDiscordOps }) => runtimeDiscordOps));
const auditChannelPermissionsLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.auditChannelPermissions);
const listDirectoryGroupsLiveLazy$1 = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.listDirectoryGroupsLive);
const listDirectoryPeersLiveLazy$1 = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.listDirectoryPeersLive);
const probeDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.probeDiscord);
const resolveChannelAllowlistLazy$1 = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.resolveChannelAllowlist);
const resolveUserAllowlistLazy$1 = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.resolveUserAllowlist);
const sendComponentMessageLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.sendComponentMessage);
const sendMessageDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.sendMessageDiscord);
const sendPollDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.sendPollDiscord);
const monitorDiscordProviderLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.monitorDiscordProvider);
const sendTypingDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.typing.pulse);
const editMessageDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.conversationActions.editMessage);
const deleteMessageDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.conversationActions.deleteMessage);
const pinMessageDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.conversationActions.pinMessage);
const unpinMessageDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.conversationActions.unpinMessage);
const createThreadDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.conversationActions.createThread);
const editChannelDiscordLazy = bindDiscordRuntimeMethod((runtimeDiscordOps) => runtimeDiscordOps.conversationActions.editChannel);
function createRuntimeDiscord() {
	return {
		messageActions: discordMessageActions,
		auditChannelPermissions: auditChannelPermissionsLazy,
		listDirectoryGroupsLive: listDirectoryGroupsLiveLazy$1,
		listDirectoryPeersLive: listDirectoryPeersLiveLazy$1,
		probeDiscord: probeDiscordLazy,
		resolveChannelAllowlist: resolveChannelAllowlistLazy$1,
		resolveUserAllowlist: resolveUserAllowlistLazy$1,
		sendComponentMessage: sendComponentMessageLazy,
		sendMessageDiscord: sendMessageDiscordLazy,
		sendPollDiscord: sendPollDiscordLazy,
		monitorDiscordProvider: monitorDiscordProviderLazy,
		threadBindings: {
			getManager: getThreadBindingManager,
			resolveIdleTimeoutMs: resolveThreadBindingIdleTimeoutMs,
			resolveInactivityExpiresAt: resolveThreadBindingInactivityExpiresAt,
			resolveMaxAgeMs: resolveThreadBindingMaxAgeMs,
			resolveMaxAgeExpiresAt: resolveThreadBindingMaxAgeExpiresAt,
			setIdleTimeoutBySessionKey: setThreadBindingIdleTimeoutBySessionKey,
			setMaxAgeBySessionKey: setThreadBindingMaxAgeBySessionKey,
			unbindBySessionKey: unbindThreadBindingsBySessionKey
		},
		typing: {
			pulse: sendTypingDiscordLazy,
			start: async ({ channelId, accountId, cfg, intervalMs }) => await createDiscordTypingLease({
				channelId,
				accountId,
				cfg,
				intervalMs,
				pulse: async ({ channelId, accountId, cfg }) => void await sendTypingDiscordLazy(channelId, {
					accountId,
					cfg
				})
			})
		},
		conversationActions: {
			editMessage: editMessageDiscordLazy,
			deleteMessage: deleteMessageDiscordLazy,
			pinMessage: pinMessageDiscordLazy,
			unpinMessage: unpinMessageDiscordLazy,
			createThread: createThreadDiscordLazy,
			editChannel: editChannelDiscordLazy
		}
	};
}
//#endregion
//#region src/plugins/runtime/runtime-imessage.ts
function createRuntimeIMessage() {
	return {
		monitorIMessageProvider,
		probeIMessage,
		sendMessageIMessage
	};
}
//#endregion
//#region src/plugins/runtime/runtime-matrix-boundary.ts
const MATRIX_PLUGIN_ID = "matrix";
let cachedModulePath = null;
let cachedModule = null;
const jitiLoaders = /* @__PURE__ */ new Map();
function readConfigSafely() {
	try {
		return loadConfig();
	} catch {
		return {};
	}
}
function resolveMatrixPluginRecord() {
	const record = loadPluginManifestRegistry({
		config: readConfigSafely(),
		cache: true
	}).plugins.find((plugin) => plugin.id === MATRIX_PLUGIN_ID);
	if (!record?.source) return null;
	return {
		rootDir: record.rootDir,
		source: record.source
	};
}
function resolveMatrixRuntimeModulePath(record) {
	const candidates = [
		path.join(path.dirname(record.source), "runtime-api.js"),
		path.join(path.dirname(record.source), "runtime-api.ts"),
		...record.rootDir ? [path.join(record.rootDir, "runtime-api.js"), path.join(record.rootDir, "runtime-api.ts")] : []
	];
	for (const candidate of candidates) if (fs.existsSync(candidate)) return candidate;
	return null;
}
function getJiti(modulePath) {
	const tryNative = shouldPreferNativeJiti(modulePath);
	const cached = jitiLoaders.get(tryNative);
	if (cached) return cached;
	const pluginSdkAlias = resolvePluginSdkAliasFile({
		srcFile: "root-alias.cjs",
		distFile: "root-alias.cjs",
		modulePath
	});
	const aliasMap = {
		...pluginSdkAlias ? { "openclaw/plugin-sdk": pluginSdkAlias } : {},
		...resolvePluginSdkScopedAliasMap({ modulePath })
	};
	const loader = createJiti(import.meta.url, {
		...buildPluginLoaderJitiOptions(aliasMap),
		tryNative
	});
	jitiLoaders.set(tryNative, loader);
	return loader;
}
function loadWithJiti(modulePath) {
	return getJiti(modulePath)(modulePath);
}
function loadMatrixModule() {
	const record = resolveMatrixPluginRecord();
	if (!record) return null;
	const modulePath = resolveMatrixRuntimeModulePath(record);
	if (!modulePath) return null;
	if (cachedModule && cachedModulePath === modulePath) return cachedModule;
	const loaded = loadWithJiti(modulePath);
	cachedModulePath = modulePath;
	cachedModule = loaded;
	return loaded;
}
function setMatrixThreadBindingIdleTimeoutBySessionKey(...args) {
	const fn = loadMatrixModule()?.setMatrixThreadBindingIdleTimeoutBySessionKey;
	if (typeof fn !== "function") return [];
	return fn(...args);
}
function setMatrixThreadBindingMaxAgeBySessionKey(...args) {
	const fn = loadMatrixModule()?.setMatrixThreadBindingMaxAgeBySessionKey;
	if (typeof fn !== "function") return [];
	return fn(...args);
}
//#endregion
//#region src/plugins/runtime/runtime-matrix.ts
function createRuntimeMatrix() {
	return { threadBindings: {
		setIdleTimeoutBySessionKey: setMatrixThreadBindingIdleTimeoutBySessionKey,
		setMaxAgeBySessionKey: setMatrixThreadBindingMaxAgeBySessionKey
	} };
}
//#endregion
//#region src/plugins/runtime/runtime-signal.ts
function createRuntimeSignal() {
	return {
		probeSignal,
		sendMessageSignal,
		monitorSignalProvider,
		messageActions: signalMessageActions
	};
}
//#endregion
//#region src/plugins/runtime/runtime-slack.ts
const bindSlackRuntimeMethod = createLazyRuntimeMethodBinder(createLazyRuntimeSurface(() => import("./runtime-slack-ops.runtime-C-umxyub.js"), ({ runtimeSlackOps }) => runtimeSlackOps));
const listDirectoryGroupsLiveLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.listDirectoryGroupsLive);
const listDirectoryPeersLiveLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.listDirectoryPeersLive);
const probeSlackLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.probeSlack);
const resolveChannelAllowlistLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.resolveChannelAllowlist);
const resolveUserAllowlistLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.resolveUserAllowlist);
const sendMessageSlackLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.sendMessageSlack);
const monitorSlackProviderLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.monitorSlackProvider);
const handleSlackActionLazy = bindSlackRuntimeMethod((runtimeSlackOps) => runtimeSlackOps.handleSlackAction);
function createRuntimeSlack() {
	return {
		listDirectoryGroupsLive: listDirectoryGroupsLiveLazy,
		listDirectoryPeersLive: listDirectoryPeersLiveLazy,
		probeSlack: probeSlackLazy,
		resolveChannelAllowlist: resolveChannelAllowlistLazy,
		resolveUserAllowlist: resolveUserAllowlistLazy,
		sendMessageSlack: sendMessageSlackLazy,
		monitorSlackProvider: monitorSlackProviderLazy,
		handleSlackAction: handleSlackActionLazy
	};
}
//#endregion
//#region src/plugins/runtime/runtime-telegram-typing.ts
async function createTelegramTypingLease(params) {
	const intervalMs = typeof params.intervalMs === "number" && Number.isFinite(params.intervalMs) ? Math.max(1e3, Math.floor(params.intervalMs)) : 4e3;
	let stopped = false;
	const refresh = async () => {
		if (stopped) return;
		await params.pulse({
			to: params.to,
			accountId: params.accountId,
			cfg: params.cfg,
			messageThreadId: params.messageThreadId
		});
	};
	await refresh();
	const timer = setInterval(() => {
		refresh().catch((err) => {
			logWarn(`plugins: telegram typing pulse failed: ${String(err)}`);
		});
	}, intervalMs);
	timer.unref?.();
	return {
		refresh,
		stop: () => {
			if (stopped) return;
			stopped = true;
			clearInterval(timer);
		}
	};
}
//#endregion
//#region src/plugins/runtime/runtime-telegram.ts
const bindTelegramRuntimeMethod = createLazyRuntimeMethodBinder(createLazyRuntimeSurface(() => import("./runtime-telegram-ops.runtime-DBW1yhh2.js"), ({ runtimeTelegramOps }) => runtimeTelegramOps));
const auditGroupMembershipLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.auditGroupMembership);
const probeTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.probeTelegram);
const sendMessageTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.sendMessageTelegram);
const sendPollTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.sendPollTelegram);
const monitorTelegramProviderLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.monitorTelegramProvider);
const sendTypingTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.typing.pulse);
const editMessageTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.conversationActions.editMessage);
const editMessageReplyMarkupTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.conversationActions.editReplyMarkup);
const deleteMessageTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.conversationActions.deleteMessage);
const renameForumTopicTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.conversationActions.renameTopic);
const pinMessageTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.conversationActions.pinMessage);
const unpinMessageTelegramLazy = bindTelegramRuntimeMethod((runtimeTelegramOps) => runtimeTelegramOps.conversationActions.unpinMessage);
function createRuntimeTelegram() {
	return {
		auditGroupMembership: auditGroupMembershipLazy,
		collectUnmentionedGroupIds: collectTelegramUnmentionedGroupIds,
		probeTelegram: probeTelegramLazy,
		resolveTelegramToken,
		sendMessageTelegram: sendMessageTelegramLazy,
		sendPollTelegram: sendPollTelegramLazy,
		monitorTelegramProvider: monitorTelegramProviderLazy,
		messageActions: telegramMessageActions,
		threadBindings: {
			setIdleTimeoutBySessionKey: setTelegramThreadBindingIdleTimeoutBySessionKey,
			setMaxAgeBySessionKey: setTelegramThreadBindingMaxAgeBySessionKey
		},
		typing: {
			pulse: sendTypingTelegramLazy,
			start: async ({ to, accountId, cfg, intervalMs, messageThreadId }) => await createTelegramTypingLease({
				to,
				accountId,
				cfg,
				intervalMs,
				messageThreadId,
				pulse: async ({ to, accountId, cfg, messageThreadId }) => await sendTypingTelegramLazy(to, {
					accountId,
					cfg,
					messageThreadId
				})
			})
		},
		conversationActions: {
			editMessage: editMessageTelegramLazy,
			editReplyMarkup: editMessageReplyMarkupTelegramLazy,
			clearReplyMarkup: async (chatIdInput, messageIdInput, opts = {}) => await editMessageReplyMarkupTelegramLazy(chatIdInput, messageIdInput, [], opts),
			deleteMessage: deleteMessageTelegramLazy,
			renameTopic: renameForumTopicTelegramLazy,
			pinMessage: pinMessageTelegramLazy,
			unpinMessage: unpinMessageTelegramLazy
		}
	};
}
//#endregion
//#region src/plugins/runtime/runtime-whatsapp.ts
function createRuntimeWhatsApp() {
	return {
		getActiveWebListener,
		getWebAuthAgeMs,
		logoutWeb,
		logWebSelfId,
		readWebSelfId,
		webAuthExists,
		sendMessageWhatsApp,
		sendPollWhatsApp,
		loginWeb,
		startWebLoginWithQr,
		waitForWebLogin,
		monitorWebChannel,
		handleWhatsAppAction,
		createLoginTool: createRuntimeWhatsAppLoginTool
	};
}
//#endregion
//#region src/plugins/runtime/runtime-channel.ts
function defineCachedValue(target, key, create) {
	let cached;
	let ready = false;
	Object.defineProperty(target, key, {
		configurable: true,
		enumerable: true,
		get() {
			if (!ready) {
				cached = create();
				ready = true;
			}
			return cached;
		}
	});
}
function createRuntimeChannel() {
	const channelRuntime = {
		text: {
			chunkByNewline,
			chunkMarkdownText,
			chunkMarkdownTextWithMode,
			chunkText,
			chunkTextWithMode,
			resolveChunkMode,
			resolveTextChunkLimit,
			hasControlCommand,
			resolveMarkdownTableMode,
			convertMarkdownTables
		},
		reply: {
			dispatchReplyWithBufferedBlockDispatcher,
			createReplyDispatcherWithTyping,
			resolveEffectiveMessagesConfig,
			resolveHumanDelayConfig,
			dispatchReplyFromConfig,
			withReplyDispatcher,
			finalizeInboundContext,
			formatAgentEnvelope,
			formatInboundEnvelope,
			resolveEnvelopeFormatOptions
		},
		routing: {
			buildAgentSessionKey,
			resolveAgentRoute
		},
		pairing: {
			buildPairingReply,
			readAllowFromStore: ({ channel, accountId, env }) => readChannelAllowFromStore(channel, env, accountId),
			upsertPairingRequest: ({ channel, id, accountId, meta, env, pairingAdapter }) => upsertChannelPairingRequest({
				channel,
				id,
				accountId,
				meta,
				env,
				pairingAdapter
			})
		},
		media: {
			fetchRemoteMedia,
			saveMediaBuffer
		},
		activity: {
			record: recordChannelActivity,
			get: getChannelActivity
		},
		session: {
			resolveStorePath,
			readSessionUpdatedAt,
			recordSessionMetaFromInbound,
			recordInboundSession,
			updateLastRoute
		},
		mentions: {
			buildMentionRegexes,
			matchesMentionPatterns,
			matchesMentionWithExplicit
		},
		reactions: {
			shouldAckReaction,
			removeAckReactionAfterReply
		},
		groups: {
			resolveGroupPolicy: resolveChannelGroupPolicy,
			resolveRequireMention: resolveChannelGroupRequireMention
		},
		debounce: {
			createInboundDebouncer,
			resolveInboundDebounceMs
		},
		commands: {
			resolveCommandAuthorizedFromAuthorizers,
			isControlCommandMessage,
			shouldComputeCommandAuthorized,
			shouldHandleTextCommands
		},
		line: {
			listLineAccountIds,
			resolveDefaultLineAccountId,
			resolveLineAccount,
			normalizeAccountId,
			probeLineBot,
			sendMessageLine,
			pushMessageLine,
			pushMessagesLine,
			pushFlexMessage,
			pushTemplateMessage,
			pushLocationMessage,
			pushTextMessageWithQuickReplies,
			createQuickReplyItems,
			buildTemplateMessageFromPayload,
			monitorLineProvider
		}
	};
	defineCachedValue(channelRuntime, "discord", createRuntimeDiscord);
	defineCachedValue(channelRuntime, "slack", createRuntimeSlack);
	defineCachedValue(channelRuntime, "telegram", createRuntimeTelegram);
	defineCachedValue(channelRuntime, "matrix", createRuntimeMatrix);
	defineCachedValue(channelRuntime, "signal", createRuntimeSignal);
	defineCachedValue(channelRuntime, "imessage", createRuntimeIMessage);
	defineCachedValue(channelRuntime, "whatsapp", createRuntimeWhatsApp);
	return channelRuntime;
}
//#endregion
//#region src/plugins/runtime/runtime-config.ts
function createRuntimeConfig() {
	return {
		loadConfig,
		writeConfigFile
	};
}
//#endregion
//#region src/plugins/runtime/runtime-events.ts
function createRuntimeEvents() {
	return {
		onAgentEvent,
		onSessionTranscriptUpdate
	};
}
//#endregion
//#region src/plugins/runtime/runtime-logging.ts
function createRuntimeLogging() {
	return {
		shouldLogVerbose,
		getChildLogger: (bindings, opts) => {
			const logger = getChildLogger(bindings, { level: opts?.level ? normalizeLogLevel(opts.level) : void 0 });
			return {
				debug: (message) => logger.debug?.(message),
				info: (message) => logger.info(message),
				warn: (message) => logger.warn(message),
				error: (message) => logger.error(message)
			};
		}
	};
}
//#endregion
//#region src/plugins/runtime/runtime-media.ts
function createRuntimeMedia() {
	return {
		loadWebMedia,
		detectMime,
		mediaKindFromMime,
		isVoiceCompatibleAudio,
		getImageMetadata,
		resizeToJpeg
	};
}
//#endregion
//#region src/plugins/runtime/native-deps.ts
function formatNativeDependencyHint(params) {
	const manager = params.manager ?? "pnpm";
	const rebuildCommand = params.rebuildCommand ?? (manager === "npm" ? `npm rebuild ${params.packageName}` : manager === "yarn" ? `yarn rebuild ${params.packageName}` : `pnpm rebuild ${params.packageName}`);
	const steps = [
		params.approveBuildsCommand ?? (manager === "pnpm" ? `pnpm approve-builds (select ${params.packageName})` : void 0),
		rebuildCommand,
		params.downloadCommand
	].filter((step) => Boolean(step));
	if (steps.length === 0) return `Install ${params.packageName} and rebuild its native module.`;
	return `Install ${params.packageName} and rebuild its native module (${steps.join("; ")}).`;
}
//#endregion
//#region src/plugins/runtime/runtime-system.ts
function createRuntimeSystem() {
	return {
		enqueueSystemEvent,
		requestHeartbeatNow,
		runCommandWithTimeout,
		formatNativeDependencyHint
	};
}
//#endregion
//#region src/agents/tools/memory-tool.ts
const MemorySearchSchema = Type.Object({
	query: Type.String(),
	maxResults: Type.Optional(Type.Number()),
	minScore: Type.Optional(Type.Number())
});
const MemoryGetSchema = Type.Object({
	path: Type.String(),
	from: Type.Optional(Type.Number()),
	lines: Type.Optional(Type.Number())
});
function resolveMemoryToolContext(options) {
	const cfg = options.config;
	if (!cfg) return null;
	const agentId = resolveSessionAgentId({
		sessionKey: options.agentSessionKey,
		config: cfg
	});
	if (!resolveMemorySearchConfig(cfg, agentId)) return null;
	return {
		cfg,
		agentId
	};
}
async function getMemoryManagerContext(params) {
	return await getMemoryManagerContextWithPurpose({
		...params,
		purpose: void 0
	});
}
async function getMemoryManagerContextWithPurpose(params) {
	const { manager, error } = await getMemorySearchManager({
		cfg: params.cfg,
		agentId: params.agentId,
		purpose: params.purpose
	});
	return manager ? { manager } : { error };
}
function createMemoryTool(params) {
	const ctx = resolveMemoryToolContext(params.options);
	if (!ctx) return null;
	return {
		label: params.label,
		name: params.name,
		description: params.description,
		parameters: params.parameters,
		execute: params.execute(ctx)
	};
}
function createMemorySearchTool(options) {
	return createMemoryTool({
		options,
		label: "Memory Search",
		name: "memory_search",
		description: "Mandatory recall step: semantically search MEMORY.md + memory/*.md (and optional session transcripts) before answering questions about prior work, decisions, dates, people, preferences, or todos; returns top snippets with path + lines. If response has disabled=true, memory retrieval is unavailable and should be surfaced to the user.",
		parameters: MemorySearchSchema,
		execute: ({ cfg, agentId }) => async (_toolCallId, params) => {
			const query = readStringParam(params, "query", { required: true });
			const maxResults = readNumberParam(params, "maxResults");
			const minScore = readNumberParam(params, "minScore");
			const memory = await getMemoryManagerContext({
				cfg,
				agentId
			});
			if ("error" in memory) return jsonResult(buildMemorySearchUnavailableResult(memory.error));
			try {
				const citationsMode = resolveMemoryCitationsMode(cfg);
				const includeCitations = shouldIncludeCitations({
					mode: citationsMode,
					sessionKey: options.agentSessionKey
				});
				const rawResults = await memory.manager.search(query, {
					maxResults,
					minScore,
					sessionKey: options.agentSessionKey
				});
				const status = memory.manager.status();
				const decorated = decorateCitations(rawResults, includeCitations);
				const resolved = resolveMemoryBackendConfig({
					cfg,
					agentId
				});
				const results = status.backend === "qmd" ? clampResultsByInjectedChars(decorated, resolved.qmd?.limits.maxInjectedChars) : decorated;
				const searchMode = status.custom?.searchMode;
				return jsonResult({
					results,
					provider: status.provider,
					model: status.model,
					fallback: status.fallback,
					citations: citationsMode,
					mode: searchMode
				});
			} catch (err) {
				return jsonResult(buildMemorySearchUnavailableResult(err instanceof Error ? err.message : String(err)));
			}
		}
	});
}
function createMemoryGetTool(options) {
	return createMemoryTool({
		options,
		label: "Memory Get",
		name: "memory_get",
		description: "Safe snippet read from MEMORY.md or memory/*.md with optional from/lines; use after memory_search to pull only the needed lines and keep context small.",
		parameters: MemoryGetSchema,
		execute: ({ cfg, agentId }) => async (_toolCallId, params) => {
			const relPath = readStringParam(params, "path", { required: true });
			const from = readNumberParam(params, "from", { integer: true });
			const lines = readNumberParam(params, "lines", { integer: true });
			if (resolveMemoryBackendConfig({
				cfg,
				agentId
			}).backend === "builtin") try {
				return jsonResult(await readAgentMemoryFile({
					cfg,
					agentId,
					relPath,
					from: from ?? void 0,
					lines: lines ?? void 0
				}));
			} catch (err) {
				return jsonResult({
					path: relPath,
					text: "",
					disabled: true,
					error: err instanceof Error ? err.message : String(err)
				});
			}
			const memory = await getMemoryManagerContextWithPurpose({
				cfg,
				agentId,
				purpose: "status"
			});
			if ("error" in memory) return jsonResult({
				path: relPath,
				text: "",
				disabled: true,
				error: memory.error
			});
			try {
				return jsonResult(await memory.manager.readFile({
					relPath,
					from: from ?? void 0,
					lines: lines ?? void 0
				}));
			} catch (err) {
				return jsonResult({
					path: relPath,
					text: "",
					disabled: true,
					error: err instanceof Error ? err.message : String(err)
				});
			}
		}
	});
}
function resolveMemoryCitationsMode(cfg) {
	const mode = cfg.memory?.citations;
	if (mode === "on" || mode === "off" || mode === "auto") return mode;
	return "auto";
}
function decorateCitations(results, include) {
	if (!include) return results.map((entry) => ({
		...entry,
		citation: void 0
	}));
	return results.map((entry) => {
		const citation = formatCitation(entry);
		const snippet = `${entry.snippet.trim()}\n\nSource: ${citation}`;
		return {
			...entry,
			citation,
			snippet
		};
	});
}
function formatCitation(entry) {
	const lineRange = entry.startLine === entry.endLine ? `#L${entry.startLine}` : `#L${entry.startLine}-L${entry.endLine}`;
	return `${entry.path}${lineRange}`;
}
function clampResultsByInjectedChars(results, budget) {
	if (!budget || budget <= 0) return results;
	let remaining = budget;
	const clamped = [];
	for (const entry of results) {
		if (remaining <= 0) break;
		const snippet = entry.snippet ?? "";
		if (snippet.length <= remaining) {
			clamped.push(entry);
			remaining -= snippet.length;
		} else {
			const trimmed = snippet.slice(0, Math.max(0, remaining));
			clamped.push({
				...entry,
				snippet: trimmed
			});
			break;
		}
	}
	return clamped;
}
function buildMemorySearchUnavailableResult(error) {
	const reason = (error ?? "memory search unavailable").trim() || "memory search unavailable";
	const isQuotaError = /insufficient_quota|quota|429/.test(reason.toLowerCase());
	return {
		results: [],
		disabled: true,
		unavailable: true,
		error: reason,
		warning: isQuotaError ? "Memory search is unavailable because the embedding provider quota is exhausted." : "Memory search is unavailable due to an embedding/provider error.",
		action: isQuotaError ? "Top up or switch embedding provider, then retry memory_search." : "Check embedding provider configuration and retry memory_search."
	};
}
function shouldIncludeCitations(params) {
	if (params.mode === "on") return true;
	if (params.mode === "off") return false;
	return deriveChatTypeFromSessionKey(params.sessionKey) === "direct";
}
function deriveChatTypeFromSessionKey(sessionKey) {
	const parsed = parseAgentSessionKey(sessionKey);
	if (!parsed?.rest) return "direct";
	const tokens = new Set(parsed.rest.toLowerCase().split(":").filter(Boolean));
	if (tokens.has("channel")) return "channel";
	if (tokens.has("group")) return "group";
	return "direct";
}
//#endregion
//#region src/plugins/runtime/runtime-tools.ts
function createRuntimeTools() {
	return {
		createMemoryGetTool,
		createMemorySearchTool,
		registerMemoryCli
	};
}
//#endregion
//#region src/plugins/runtime/index.ts
let cachedVersion = null;
function resolveVersion() {
	if (cachedVersion) return cachedVersion;
	try {
		cachedVersion = createRequire(import.meta.url)("../../../package.json").version ?? "unknown";
		return cachedVersion;
	} catch {
		cachedVersion = "unknown";
		return cachedVersion;
	}
}
function createUnavailableSubagentRuntime() {
	const unavailable = () => {
		throw new Error("Plugin runtime subagent methods are only available during a gateway request.");
	};
	return {
		run: unavailable,
		waitForRun: unavailable,
		getSessionMessages: unavailable,
		getSession: unavailable,
		deleteSession: unavailable
	};
}
const GATEWAY_SUBAGENT_SYMBOL = Symbol.for("openclaw.plugin.gatewaySubagentRuntime");
const gatewaySubagentState = (() => {
	const g = globalThis;
	const existing = g[GATEWAY_SUBAGENT_SYMBOL];
	if (existing) return existing;
	const created = { subagent: void 0 };
	g[GATEWAY_SUBAGENT_SYMBOL] = created;
	return created;
})();
/**
* Set the process-global gateway subagent runtime.
* Called during gateway startup so that gateway-bindable plugin runtimes can
* resolve subagent methods dynamically even when their registry was cached
* before the gateway finished loading plugins.
*/
function setGatewaySubagentRuntime(subagent) {
	gatewaySubagentState.subagent = subagent;
}
/**
* Reset the process-global gateway subagent runtime.
* Used by tests to avoid leaking gateway state across module reloads.
*/
function clearGatewaySubagentRuntime() {
	gatewaySubagentState.subagent = void 0;
}
/**
* Create a late-binding subagent that resolves to:
* 1. An explicitly provided subagent (from runtimeOptions), OR
* 2. The process-global gateway subagent when the caller explicitly opts in, OR
* 3. The unavailable fallback (throws with a clear error message).
*/
function createLateBindingSubagent(explicit, allowGatewaySubagentBinding = false) {
	if (explicit) return explicit;
	const unavailable = createUnavailableSubagentRuntime();
	if (!allowGatewaySubagentBinding) return unavailable;
	return new Proxy(unavailable, { get(_target, prop, _receiver) {
		const resolved = gatewaySubagentState.subagent ?? unavailable;
		return Reflect.get(resolved, prop, resolved);
	} });
}
function createPluginRuntime(_options = {}) {
	return {
		version: resolveVersion(),
		config: createRuntimeConfig(),
		agent: createRuntimeAgent(),
		subagent: createLateBindingSubagent(_options.subagent, _options.allowGatewaySubagentBinding === true),
		system: createRuntimeSystem(),
		media: createRuntimeMedia(),
		tts: {
			textToSpeech,
			textToSpeechTelephony,
			listVoices: listSpeechVoices
		},
		mediaUnderstanding: {
			runFile: runMediaUnderstandingFile,
			describeImageFile,
			describeImageFileWithModel,
			describeVideoFile,
			transcribeAudioFile
		},
		imageGeneration: {
			generate: generateImage,
			listProviders: listRuntimeImageGenerationProviders
		},
		webSearch: {
			listProviders: listWebSearchProviders,
			search: runWebSearch
		},
		stt: { transcribeAudioFile },
		tools: createRuntimeTools(),
		channel: createRuntimeChannel(),
		events: createRuntimeEvents(),
		logging: createRuntimeLogging(),
		state: { resolveStateDir },
		modelAuth: {
			getApiKeyForModel: (params) => getApiKeyForModel({
				model: params.model,
				cfg: params.cfg
			}),
			resolveApiKeyForProvider: (params) => resolveApiKeyForProvider({
				provider: params.provider,
				cfg: params.cfg
			})
		}
	};
}
//#endregion
export { createPluginRuntime as n, setGatewaySubagentRuntime as r, clearGatewaySubagentRuntime as t };
