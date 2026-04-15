import { r as __require, t as __commonJSMin } from "./chunk-B2GA45YG.js";
import { i as testRegexWithBoundedInput, t as compileSafeRegex } from "./safe-regex-tLlDZYfM.js";
import { i as formatUncaughtError, r as formatErrorMessage } from "./errors-BxyFnvP3.js";
import { a as registerUnhandledRejectionHandler } from "./unhandled-rejections-CDJ8dOVP.js";
import { i as getChildLogger } from "./logger-CoEtkjhn.js";
import { _ as resolveStateDir } from "./paths-GHJ97ebE.js";
import { a as logVerbose, d as warn, l as shouldLogVerbose, t as danger } from "./globals-41sdSaKv.js";
import { m as defaultRuntime, p as createNonExitingRuntime, t as createSubsystemLogger } from "./subsystem-VzQeL-96.js";
import { S as parseAgentSessionKey, d as resolveThreadSessionKeys, f as sanitizeAgentId, r as buildAgentMainSessionKey, u as resolveAgentIdFromSessionKey } from "./session-key-CvyyYMlq.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "./account-id-BRjWLAzU.js";
import { a as resolveAgentDir, m as resolveDefaultAgentId } from "./agent-scope-D8nGiwMS.js";
import { g as resolveDefaultModelForAgent } from "./model-selection-JWhBHRyf.js";
import { At as resolveAgentMaxConcurrent, g as writeConfigFile, s as loadConfig } from "./io-Cu_7vv9A.js";
import { d as normalizeTelegramCommandName, f as resolveTelegramCustomCommands, u as TELEGRAM_COMMAND_NAME_PATTERN } from "./zod-schema.providers-core-CAJFPAb3.js";
import { i as readSessionUpdatedAt, l as updateSessionStore, n as loadSessionStore, o as resolveSessionStoreEntry } from "./store-BGDAPyDm.js";
import { l as resolveStorePath } from "./paths-DTrmv0TT.js";
import { r as writeJsonAtomic } from "./json-files-6Zkxblqw.js";
import { a as resolveNativeSkillsEnabled, i as resolveNativeCommandsEnabled, n as isNativeCommandsExplicitlyDisabled } from "./commands-CRAqgs4b.js";
import { t as resolveAckReaction } from "./identity-BPWC1ZKG.js";
import { a as resolveInboundLastRouteSessionKey, i as resolveAgentRoute, n as deriveLastRoutePolicy, t as buildAgentSessionKey } from "./resolve-route-CRpvL1jx.js";
import { $ as require_out$1, $t as isSenderAllowed, A as buildInlineKeyboard, B as sendPollTelegram, Bm as executePluginCommand, Bt as describeReplyTarget, Ct as isTelegramExecApprovalClientEnabled, Dt as shouldSuppressLocalTelegramExecApprovalPrompt, Et as shouldEnableTelegramExecApprovalButtons, F as editMessageTelegram, Fl as finalizeInboundContext, Ft as buildTelegramGroupFrom, G as wasSentByBot, Gt as normalizeForwardedContext, H as sendTypingTelegram, Ht as extractTelegramLocation, It as buildTelegramGroupPeerId, J as isTelegramClientRejection, Jr as generateTopicLabel, Jt as resolveTelegramGroupAllowFromContext, K as isRecoverableTelegramNetworkError, Kc as resolveTelegramPollVisibility, Kp as formatReasoningMessage, Kt as resolveTelegramDirectPeerId, L as reactMessageTelegram, La as buildCommandsPaginationKeyboard, Lt as buildTelegramParentPeer, M as deleteMessageTelegram, Mt as buildGroupLabel, N as editForumTopicTelegram, Nt as buildSenderLabel, O as resolveTelegramReactionLevel, Oa as buildModelsProviderData, P as editMessageReplyMarkupTelegram, Pt as buildSenderName, Q as withTelegramApiErrorLogging, Qt as resolveTelegramThreadSpec, Rt as buildTelegramThreadParams, S as searchStickers, St as isTelegramExecApprovalApprover, Tt as resolveTelegramExecApprovalTarget, Um as matchPluginCommand, Us as buildCommandsMessagePaginated, Ut as getTelegramTextParts, V as sendStickerTelegram, Vm as getPluginCommandSpecs, Vt as expandTextLinks, W as resolveTelegramVoiceSend, Wt as hasBotMention, X as tagTelegramNetworkError, Xt as resolveTelegramReplyId, Y as isTelegramPollingNetworkError, Yr as resolveAutoTopicLabelConfig, Yt as resolveTelegramMediaPlaceholder, Z as splitTelegramCaption, Zr as dispatchReplyWithBufferedBlockDispatcher, Zt as resolveTelegramStreamMode, _n as resolveTelegramToken, _t as isTelegramInlineButtonsEnabled, an as resolveTelegramApiBase, at as renderTelegramHtmlText, b as getCacheStats, cn as shouldRetryTelegramTransportFallback, dn as listEnabledTelegramAccounts, dt as buildModelsKeyboard, ei as isBtwRequestText, en as normalizeAllowFrom, et as require_abort_controller, fm as modelSupportsVision, ft as buildProviderKeyboard, g as writeTelegramUpdateOffset, gn as resolveTelegramPollActionGateState, gt as resolveModelSelection, h as readTelegramUpdateOffset, hn as resolveTelegramAccount, ht as parseModelCallbackData, it as markdownToTelegramHtml, j as createForumTopicTelegram, jm as getGlobalHookRunner, ka as formatModelsAvailableHeader, km as dispatchPluginInteractiveHandler, kt as resolveTelegramTargetChatType, lc as resolveExecApprovalSessionTarget, lm as findModelInCatalog, mc as resolveExecApprovalCommandDisplay, mt as getModelsPageSize, nn as resolveSenderAllowMatch, np as makeProxyFetch, on as resolveTelegramFetch, ot as wrapFileReferencesInHtml, pt as calculateTotalPages, q as isSafeToRetrySendError, qs as resolveNativeCommandSessionTargets, qt as resolveTelegramForumThreadId, rt as markdownToTelegramChunks, sn as resolveTelegramTransport, st as resolveTelegramInlineButtons, tn as normalizeDmAllowFromWithStore, tu as resolveCommandAuthorization, uc as buildExecApprovalPendingReplyPayload, um as loadModelCatalog, un as createTelegramActionGate, v as cacheSticker, vt as resolveTelegramInlineButtonsScope, wt as resolveTelegramExecApprovalConfig, x as getCachedSticker, xt as getTelegramExecApprovalApprovers, y as describeStickerImage, z as sendMessageTelegram, zt as buildTypingThreadParams, zu as buildOutboundMediaLoadOptions } from "./pi-embedded-bGW40fA1.js";
import { n as retryAsync } from "./retry-OtOVTYjJ.js";
import { t as waitForAbortSignal } from "./abort-signal-t31ckgqI.js";
import { n as isDiagnosticsEnabled } from "./diagnostic-events-CReGCqoR.js";
import { _ as startDiagnosticHeartbeat, f as logWebhookError, m as logWebhookReceived, p as logWebhookProcessed, v as stopDiagnosticHeartbeat } from "./diagnostic-Oa1s9LIh.js";
import { C as resolveTextChunkLimit, S as resolveChunkMode, c as findCodeRegions, l as isInsideCode, s as stripReasoningTagsFromText, y as chunkMarkdownTextWithMode } from "./text-runtime-CzoM2Rlj.js";
import { n as resolveGlobalSingleton } from "./global-singleton-DTdpxZNO.js";
import { n as fetchWithTimeout } from "./fetch-timeout-i_8ukTkX.js";
import { c as registerSessionBindingAdapter, l as unregisterSessionBindingAdapter, o as getSessionBindingService, t as formatThreadBindingDurationLabel } from "./thread-bindings-messages-CigPKdBd.js";
import { D as isPluginOwnedSessionBindingRecord, a as resolveConfiguredBindingRoute, i as ensureConfiguredBindingRouteReady, j as resolvePluginConversationBindingApproval, k as parsePluginBindingApprovalCustomId, n as recordInboundSessionMetaSafe, r as recordInboundSession, t as resolveThreadBindingConversationIdFromBindingId, x as buildPluginBindingResolvedText } from "./conversation-runtime-CHkP5v8z.js";
import { t as createDedupeCache } from "./dedupe-CWDTLBkV.js";
import { d as triggerInternalHook, n as createInternalHookEvent } from "./internal-hooks-DpBKS_so.js";
import { d as readStringArrayParam, f as readStringOrNumberParam, l as readNumberParam, p as readStringParam, s as jsonResult, u as readReactionParams } from "./common-8DMx6JsK.js";
import { o as isGifMedia, s as kindFromMime } from "./mime-CsQSbndd.js";
import { b as resolveChannelConfigWrites } from "./channel-config-helpers-DDZb1T_S.js";
import { i as resolveOpenProviderRuntimeGroupPolicy } from "./runtime-group-policy-Dj5ka44z.js";
import { t as createChannelPairingChallengeIssuer } from "./channel-pairing-u9JP53wD.js";
import { n as evaluateMatchedGroupAccessForPolicy } from "./group-access-CjDGDFY8.js";
import { t as firstDefined } from "./allow-from-BZWvYKo_.js";
import { n as resolveControlCommandGate, t as resolveCommandAuthorizedFromAuthorizers } from "./command-gating-REV5M7oz.js";
import { a as readChannelAllowFromStore, d as upsertChannelPairingRequest } from "./pairing-store-CCji1-jE.js";
import { c as resolvePinnedMainDmOwnerFromAllowlist } from "./dm-policy-shared-DKpdJGRu.js";
import { a as fetchRemoteMedia, i as MediaFetchError, n as loadWebMedia } from "./web-media-DgPCC_wU.js";
import { t as getAgentScopedMediaLocalRoots } from "./local-roots-B-8bxbQB.js";
import { t as listSkillCommandsForAgents } from "./skill-commands-B4-Do2cB.js";
import { c as computeBackoff, i as resolveStoredModelOverride, l as sleepWithAbort } from "./model-selection-c512Ywrw.js";
import { t as applyModelOverrideToSessionEntry } from "./model-overrides-D0ZRT08n.js";
import { r as enqueueSystemEvent } from "./system-events-B1AzvbLz.js";
import { p as resolveSendableOutboundReplyParts } from "./reply-payload-BqLS-SRu.js";
import { a as toInternalMessageSentContext, d as toPluginMessageSentEvent, f as fireAndForgetHook, l as toPluginMessageContext, t as buildCanonicalSentMessageHookContext } from "./message-hook-mappers-Kb4uvhKc.js";
import { a as resolveMarkdownTableMode } from "./config-runtime-er1PcYOL.js";
import { n as resolveChannelGroupRequireMention, t as resolveChannelGroupPolicy } from "./group-policy-DU1bQcz-.js";
import { it as saveMediaBuffer } from "./routes-cwLAFZU4.js";
import { r as resolvePollMaxSelections } from "./polls-Dfg7lndZ.js";
import { i as matchesMentionWithExplicit, n as buildMentionRegexes } from "./mentions-Ctfn_rwY.js";
import { d as listNativeCommandSpecsForConfig, g as resolveCommandArgMenu, m as parseCommandArgs, n as buildCommandTextFromArgs, p as normalizeCommandBody, r as findCommandByNativeName, u as listNativeCommandSpecs } from "./commands-registry-B5LdPpzV.js";
import { _ as isAbortRequestText, a as resolveInboundDebounceMs, c as formatInboundEnvelope, f as hasControlCommand, i as createInboundDebouncer, r as shouldDebounceTextInbound, u as resolveEnvelopeFormatOptions } from "./channel-inbound-CakxIYLw.js";
import { t as readBooleanParam } from "./boolean-param-Br4W7YDy.js";
import { a as listTokenSourcedAccounts, i as createUnionActionGate, r as resolveReactionMessageId, t as createMessageToolButtonsSchema } from "./channel-actions-B_z7qIUu.js";
import { n as recordChannelActivity } from "./channel-activity-DmW8i3nP.js";
import { r as formatDurationPrecise } from "./format-duration-B4LsEJfs.js";
import { o as readJsonBodyWithLimit } from "./http-body-D-NIzIGK.js";
import { a as buildPendingHistoryContextFromMap, s as clearHistoryEntriesIfEnabled, t as DEFAULT_GROUP_HISTORY_LIMIT, u as recordPendingHistoryEntryIfEnabled } from "./history-BK1AiOUs.js";
import { n as shouldAckReaction, t as removeAckReactionAfterReply } from "./ack-reactions-4VXMY3Se.js";
import { n as logInboundDrop, r as logTypingFailure, t as logAckFailure } from "./logging-B9udk67f.js";
import { a as createStatusReactionController, n as DEFAULT_EMOJIS } from "./channel-feedback-CH1I6w82.js";
import { n as resolveMentionGatingWithBypass } from "./mention-gating-DuRqwNav.js";
import { n as toLocationContext, t as formatLocationText } from "./location-D9ODbqNE.js";
import { t as createChannelReplyPipeline } from "./channel-reply-pipeline-iqE3vE0x.js";
import { a as resolveThreadBindingEffectiveExpiresAt, d as resolveThreadBindingSpawnPolicy, s as resolveThreadBindingIdleTimeoutMsForChannel, u as resolveThreadBindingMaxAgeMsForChannel } from "./thread-bindings-policy-BjR0dXK4.js";
import { c as createFinalizableDraftLifecycle } from "./channel-lifecycle-BCryCEe0.js";
import { t as createOperatorApprovalsGatewayClient } from "./gateway-runtime-DuJyBHhv.js";
import { t as extractToolSend } from "./tool-send-BTEAgY5f.js";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import fs$1 from "node:fs/promises";
import { createHash, timingSafeEqual } from "node:crypto";
import { Type } from "@sinclair/typebox";
import { createServer } from "node:http";
//#region extensions/telegram/src/action-runtime.ts
const telegramActionRuntime = {
	createForumTopicTelegram,
	deleteMessageTelegram,
	editForumTopicTelegram,
	editMessageTelegram,
	getCacheStats,
	reactMessageTelegram,
	searchStickers,
	sendMessageTelegram,
	sendPollTelegram,
	sendStickerTelegram
};
const TELEGRAM_BUTTON_STYLES = [
	"danger",
	"success",
	"primary"
];
const TELEGRAM_ACTION_ALIASES = {
	createForumTopic: "createForumTopic",
	delete: "deleteMessage",
	deleteMessage: "deleteMessage",
	edit: "editMessage",
	editForumTopic: "editForumTopic",
	editMessage: "editMessage",
	poll: "poll",
	react: "react",
	searchSticker: "searchSticker",
	send: "sendMessage",
	sendMessage: "sendMessage",
	sendSticker: "sendSticker",
	sticker: "sendSticker",
	stickerCacheStats: "stickerCacheStats",
	"sticker-search": "searchSticker",
	"topic-create": "createForumTopic",
	"topic-edit": "editForumTopic"
};
function readTelegramButtons(params) {
	const raw = params.buttons;
	if (raw == null) return;
	if (!Array.isArray(raw)) throw new Error("buttons must be an array of button rows");
	const filtered = raw.map((row, rowIndex) => {
		if (!Array.isArray(row)) throw new Error(`buttons[${rowIndex}] must be an array`);
		return row.map((button, buttonIndex) => {
			if (!button || typeof button !== "object") throw new Error(`buttons[${rowIndex}][${buttonIndex}] must be an object`);
			const text = typeof button.text === "string" ? button.text.trim() : "";
			const callbackData = typeof button.callback_data === "string" ? button.callback_data.trim() : "";
			if (!text || !callbackData) throw new Error(`buttons[${rowIndex}][${buttonIndex}] requires text and callback_data`);
			if (callbackData.length > 64) throw new Error(`buttons[${rowIndex}][${buttonIndex}] callback_data too long (max 64 chars)`);
			const styleRaw = button.style;
			const style = typeof styleRaw === "string" ? styleRaw.trim().toLowerCase() : void 0;
			if (styleRaw !== void 0 && !style) throw new Error(`buttons[${rowIndex}][${buttonIndex}] style must be string`);
			if (style && !TELEGRAM_BUTTON_STYLES.includes(style)) throw new Error(`buttons[${rowIndex}][${buttonIndex}] style must be one of ${TELEGRAM_BUTTON_STYLES.join(", ")}`);
			return {
				text,
				callback_data: callbackData,
				...style ? { style } : {}
			};
		});
	}).filter((row) => row.length > 0);
	return filtered.length > 0 ? filtered : void 0;
}
function normalizeTelegramActionName(action) {
	const normalized = TELEGRAM_ACTION_ALIASES[action];
	if (!normalized) throw new Error(`Unsupported Telegram action: ${action}`);
	return normalized;
}
function readTelegramChatId(params) {
	return readStringOrNumberParam(params, "chatId") ?? readStringOrNumberParam(params, "channelId") ?? readStringOrNumberParam(params, "to", { required: true });
}
function readTelegramThreadId(params) {
	return readNumberParam(params, "messageThreadId", { integer: true }) ?? readNumberParam(params, "threadId", { integer: true });
}
function readTelegramReplyToMessageId(params) {
	return readNumberParam(params, "replyToMessageId", { integer: true }) ?? readNumberParam(params, "replyTo", { integer: true });
}
function resolveTelegramButtonsFromParams(params) {
	return resolveTelegramInlineButtons({
		buttons: readTelegramButtons(params),
		interactive: params.interactive
	});
}
function readTelegramSendContent(params) {
	const content = readStringParam(params.args, "content", { allowEmpty: true }) ?? readStringParam(params.args, "message", { allowEmpty: true }) ?? readStringParam(params.args, "caption", { allowEmpty: true });
	if (content == null && !params.mediaUrl && !params.hasButtons) throw new Error("content required.");
	return content ?? "";
}
async function handleTelegramAction(params, cfg, options) {
	const { action, accountId } = {
		action: normalizeTelegramActionName(readStringParam(params, "action", { required: true })),
		accountId: readStringParam(params, "accountId")
	};
	const isActionEnabled = createTelegramActionGate({
		cfg,
		accountId
	});
	if (action === "react") {
		const reactionLevelInfo = resolveTelegramReactionLevel({
			cfg,
			accountId: accountId ?? void 0
		});
		if (!reactionLevelInfo.agentReactionsEnabled) return jsonResult({
			ok: false,
			reason: "disabled",
			hint: `Telegram agent reactions disabled (reactionLevel="${reactionLevelInfo.level}"). Do not retry.`
		});
		if (!isActionEnabled("reactions")) return jsonResult({
			ok: false,
			reason: "disabled",
			hint: "Telegram reactions are disabled via actions.reactions. Do not retry."
		});
		const chatId = readTelegramChatId(params);
		const messageId = readNumberParam(params, "messageId", { integer: true }) ?? resolveReactionMessageId({ args: params });
		if (typeof messageId !== "number" || !Number.isFinite(messageId) || messageId <= 0) return jsonResult({
			ok: false,
			reason: "missing_message_id",
			hint: "Telegram reaction requires a valid messageId (or inbound context fallback). Do not retry."
		});
		const { emoji, remove, isEmpty } = readReactionParams(params, { removeErrorMessage: "Emoji is required to remove a Telegram reaction." });
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) return jsonResult({
			ok: false,
			reason: "missing_token",
			hint: "Telegram bot token missing. Do not retry."
		});
		let reactionResult;
		try {
			reactionResult = await telegramActionRuntime.reactMessageTelegram(chatId ?? "", messageId ?? 0, emoji ?? "", {
				cfg,
				token,
				remove,
				accountId: accountId ?? void 0
			});
		} catch (err) {
			const isInvalid = String(err).includes("REACTION_INVALID");
			return jsonResult({
				ok: false,
				reason: isInvalid ? "REACTION_INVALID" : "error",
				emoji,
				hint: isInvalid ? "This emoji is not supported for Telegram reactions. Add it to your reaction disallow list so you do not try it again." : "Reaction failed. Do not retry."
			});
		}
		if (!reactionResult.ok) return jsonResult({
			ok: false,
			warning: reactionResult.warning,
			...remove || isEmpty ? { removed: true } : { added: emoji }
		});
		if (!remove && !isEmpty) return jsonResult({
			ok: true,
			added: emoji
		});
		return jsonResult({
			ok: true,
			removed: true
		});
	}
	if (action === "sendMessage") {
		if (!isActionEnabled("sendMessage")) throw new Error("Telegram sendMessage is disabled.");
		const to = readStringParam(params, "to", { required: true });
		const mediaUrl = readStringParam(params, "mediaUrl") ?? readStringParam(params, "media", { trim: false });
		const buttons = resolveTelegramButtonsFromParams(params);
		const content = readTelegramSendContent({
			args: params,
			mediaUrl: mediaUrl ?? void 0,
			hasButtons: Array.isArray(buttons) && buttons.length > 0
		});
		if (buttons) {
			const inlineButtonsScope = resolveTelegramInlineButtonsScope({
				cfg,
				accountId: accountId ?? void 0
			});
			if (inlineButtonsScope === "off") throw new Error("Telegram inline buttons are disabled. Set channels.telegram.capabilities.inlineButtons to \"dm\", \"group\", \"all\", or \"allowlist\".");
			if (inlineButtonsScope === "dm" || inlineButtonsScope === "group") {
				const targetType = resolveTelegramTargetChatType(to);
				if (targetType === "unknown") throw new Error(`Telegram inline buttons require a numeric chat id when inlineButtons="${inlineButtonsScope}".`);
				if (inlineButtonsScope === "dm" && targetType !== "direct") throw new Error("Telegram inline buttons are limited to DMs when inlineButtons=\"dm\".");
				if (inlineButtonsScope === "group" && targetType !== "group") throw new Error("Telegram inline buttons are limited to groups when inlineButtons=\"group\".");
			}
		}
		const replyToMessageId = readTelegramReplyToMessageId(params);
		const messageThreadId = readTelegramThreadId(params);
		const quoteText = readStringParam(params, "quoteText");
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		const result = await telegramActionRuntime.sendMessageTelegram(to, content, {
			cfg,
			token,
			accountId: accountId ?? void 0,
			mediaUrl: mediaUrl || void 0,
			mediaLocalRoots: options?.mediaLocalRoots,
			buttons,
			replyToMessageId: replyToMessageId ?? void 0,
			messageThreadId: messageThreadId ?? void 0,
			quoteText: quoteText ?? void 0,
			asVoice: readBooleanParam(params, "asVoice"),
			silent: readBooleanParam(params, "silent"),
			forceDocument: readBooleanParam(params, "forceDocument") ?? false
		});
		return jsonResult({
			ok: true,
			messageId: result.messageId,
			chatId: result.chatId
		});
	}
	if (action === "poll") {
		const pollActionState = resolveTelegramPollActionGateState(isActionEnabled);
		if (!pollActionState.sendMessageEnabled) throw new Error("Telegram sendMessage is disabled.");
		if (!pollActionState.pollEnabled) throw new Error("Telegram polls are disabled.");
		const to = readStringParam(params, "to", { required: true });
		const question = readStringParam(params, "question") ?? readStringParam(params, "pollQuestion", { required: true });
		const answers = readStringArrayParam(params, "answers") ?? readStringArrayParam(params, "pollOption", { required: true });
		const allowMultiselect = readBooleanParam(params, "allowMultiselect") ?? readBooleanParam(params, "pollMulti");
		const durationSeconds = readNumberParam(params, "durationSeconds", { integer: true }) ?? readNumberParam(params, "pollDurationSeconds", {
			integer: true,
			strict: true
		});
		const durationHours = readNumberParam(params, "durationHours", { integer: true }) ?? readNumberParam(params, "pollDurationHours", {
			integer: true,
			strict: true
		});
		const replyToMessageId = readTelegramReplyToMessageId(params);
		const messageThreadId = readTelegramThreadId(params);
		const isAnonymous = readBooleanParam(params, "isAnonymous") ?? resolveTelegramPollVisibility({
			pollAnonymous: readBooleanParam(params, "pollAnonymous"),
			pollPublic: readBooleanParam(params, "pollPublic")
		});
		const silent = readBooleanParam(params, "silent");
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		const result = await telegramActionRuntime.sendPollTelegram(to, {
			question,
			options: answers,
			maxSelections: resolvePollMaxSelections(answers.length, allowMultiselect ?? false),
			durationSeconds: durationSeconds ?? void 0,
			durationHours: durationHours ?? void 0
		}, {
			cfg,
			token,
			accountId: accountId ?? void 0,
			replyToMessageId: replyToMessageId ?? void 0,
			messageThreadId: messageThreadId ?? void 0,
			isAnonymous: isAnonymous ?? void 0,
			silent: silent ?? void 0
		});
		return jsonResult({
			ok: true,
			messageId: result.messageId,
			chatId: result.chatId,
			pollId: result.pollId
		});
	}
	if (action === "deleteMessage") {
		if (!isActionEnabled("deleteMessage")) throw new Error("Telegram deleteMessage is disabled.");
		const chatId = readTelegramChatId(params);
		const messageId = readNumberParam(params, "messageId", {
			required: true,
			integer: true
		});
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		await telegramActionRuntime.deleteMessageTelegram(chatId ?? "", messageId ?? 0, {
			cfg,
			token,
			accountId: accountId ?? void 0
		});
		return jsonResult({
			ok: true,
			deleted: true
		});
	}
	if (action === "editMessage") {
		if (!isActionEnabled("editMessage")) throw new Error("Telegram editMessage is disabled.");
		const chatId = readTelegramChatId(params);
		const messageId = readNumberParam(params, "messageId", {
			required: true,
			integer: true
		});
		const content = readStringParam(params, "content", { allowEmpty: false }) ?? readStringParam(params, "message", {
			required: true,
			allowEmpty: false
		});
		const buttons = resolveTelegramButtonsFromParams(params);
		if (buttons) {
			if (resolveTelegramInlineButtonsScope({
				cfg,
				accountId: accountId ?? void 0
			}) === "off") throw new Error("Telegram inline buttons are disabled. Set channels.telegram.capabilities.inlineButtons to \"dm\", \"group\", \"all\", or \"allowlist\".");
		}
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		const result = await telegramActionRuntime.editMessageTelegram(chatId ?? "", messageId ?? 0, content, {
			cfg,
			token,
			accountId: accountId ?? void 0,
			buttons
		});
		return jsonResult({
			ok: true,
			messageId: result.messageId,
			chatId: result.chatId
		});
	}
	if (action === "sendSticker") {
		if (!isActionEnabled("sticker", false)) throw new Error("Telegram sticker actions are disabled. Set channels.telegram.actions.sticker to true.");
		const to = readStringParam(params, "to") ?? readStringParam(params, "target", { required: true });
		const fileId = readStringParam(params, "fileId") ?? readStringArrayParam(params, "stickerId")?.[0];
		if (!fileId) throw new Error("fileId is required.");
		const replyToMessageId = readTelegramReplyToMessageId(params);
		const messageThreadId = readTelegramThreadId(params);
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		const result = await telegramActionRuntime.sendStickerTelegram(to, fileId, {
			cfg,
			token,
			accountId: accountId ?? void 0,
			replyToMessageId: replyToMessageId ?? void 0,
			messageThreadId: messageThreadId ?? void 0
		});
		return jsonResult({
			ok: true,
			messageId: result.messageId,
			chatId: result.chatId
		});
	}
	if (action === "searchSticker") {
		if (!isActionEnabled("sticker", false)) throw new Error("Telegram sticker actions are disabled. Set channels.telegram.actions.sticker to true.");
		const query = readStringParam(params, "query", { required: true });
		const limit = readNumberParam(params, "limit", { integer: true }) ?? 5;
		const results = telegramActionRuntime.searchStickers(query, limit);
		return jsonResult({
			ok: true,
			count: results.length,
			stickers: results.map((s) => ({
				fileId: s.fileId,
				emoji: s.emoji,
				description: s.description,
				setName: s.setName
			}))
		});
	}
	if (action === "stickerCacheStats") return jsonResult({
		ok: true,
		...telegramActionRuntime.getCacheStats()
	});
	if (action === "createForumTopic") {
		if (!isActionEnabled("createForumTopic")) throw new Error("Telegram createForumTopic is disabled.");
		const chatId = readTelegramChatId(params);
		const name = readStringParam(params, "name", { required: true });
		const iconColor = readNumberParam(params, "iconColor", { integer: true });
		const iconCustomEmojiId = readStringParam(params, "iconCustomEmojiId");
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		const result = await telegramActionRuntime.createForumTopicTelegram(chatId ?? "", name, {
			cfg,
			token,
			accountId: accountId ?? void 0,
			iconColor: iconColor ?? void 0,
			iconCustomEmojiId: iconCustomEmojiId ?? void 0
		});
		return jsonResult({
			ok: true,
			topicId: result.topicId,
			name: result.name,
			chatId: result.chatId
		});
	}
	if (action === "editForumTopic") {
		if (!isActionEnabled("editForumTopic")) throw new Error("Telegram editForumTopic is disabled.");
		const chatId = readTelegramChatId(params);
		const messageThreadId = readTelegramThreadId(params);
		if (typeof messageThreadId !== "number") throw new Error("messageThreadId or threadId is required.");
		const name = readStringParam(params, "name");
		const iconCustomEmojiId = readStringParam(params, "iconCustomEmojiId");
		const token = resolveTelegramToken(cfg, { accountId }).token;
		if (!token) throw new Error("Telegram bot token missing. Set TELEGRAM_BOT_TOKEN or channels.telegram.botToken.");
		return jsonResult(await telegramActionRuntime.editForumTopicTelegram(chatId ?? "", messageThreadId, {
			cfg,
			token,
			accountId: accountId ?? void 0,
			name: name ?? void 0,
			iconCustomEmojiId: iconCustomEmojiId ?? void 0
		}));
	}
	throw new Error(`Unsupported Telegram action: ${action}`);
}
//#endregion
//#region extensions/telegram/src/message-tool-schema.ts
function createTelegramPollExtraToolSchemas() {
	return {
		pollDurationSeconds: Type.Optional(Type.Number()),
		pollAnonymous: Type.Optional(Type.Boolean()),
		pollPublic: Type.Optional(Type.Boolean())
	};
}
//#endregion
//#region extensions/telegram/src/channel-actions.ts
const telegramMessageActionRuntime = { handleTelegramAction };
const TELEGRAM_MESSAGE_ACTION_MAP = {
	delete: "deleteMessage",
	edit: "editMessage",
	poll: "poll",
	react: "react",
	send: "sendMessage",
	sticker: "sendSticker",
	"sticker-search": "searchSticker",
	"topic-create": "createForumTopic",
	"topic-edit": "editForumTopic"
};
function resolveTelegramMessageActionName(action) {
	return TELEGRAM_MESSAGE_ACTION_MAP[action];
}
function resolveTelegramActionDiscovery(cfg) {
	const accounts = listTokenSourcedAccounts(listEnabledTelegramAccounts(cfg));
	if (accounts.length === 0) return null;
	const unionGate = createUnionActionGate(accounts, (account) => createTelegramActionGate({
		cfg,
		accountId: account.accountId
	}));
	return {
		isEnabled: (key, defaultValue = true) => unionGate(key, defaultValue),
		pollEnabled: accounts.some((account) => {
			return resolveTelegramPollActionGateState(createTelegramActionGate({
				cfg,
				accountId: account.accountId
			})).enabled;
		}),
		buttonsEnabled: accounts.some((account) => isTelegramInlineButtonsEnabled({
			cfg,
			accountId: account.accountId
		}))
	};
}
function describeTelegramMessageTool({ cfg }) {
	const discovery = resolveTelegramActionDiscovery(cfg);
	if (!discovery) return {
		actions: [],
		capabilities: [],
		schema: null
	};
	const actions = new Set(["send"]);
	if (discovery.pollEnabled) actions.add("poll");
	if (discovery.isEnabled("reactions")) actions.add("react");
	if (discovery.isEnabled("deleteMessage")) actions.add("delete");
	if (discovery.isEnabled("editMessage")) actions.add("edit");
	if (discovery.isEnabled("sticker", false)) {
		actions.add("sticker");
		actions.add("sticker-search");
	}
	if (discovery.isEnabled("createForumTopic")) actions.add("topic-create");
	if (discovery.isEnabled("editForumTopic")) actions.add("topic-edit");
	const schema = [];
	if (discovery.buttonsEnabled) schema.push({ properties: { buttons: createMessageToolButtonsSchema() } });
	if (discovery.pollEnabled) schema.push({
		properties: createTelegramPollExtraToolSchemas(),
		visibility: "all-configured"
	});
	return {
		actions: Array.from(actions),
		capabilities: discovery.buttonsEnabled ? ["interactive", "buttons"] : [],
		schema
	};
}
const telegramMessageActions = {
	describeMessageTool: describeTelegramMessageTool,
	extractToolSend: ({ args }) => {
		return extractToolSend(args, "sendMessage");
	},
	handleAction: async ({ action, params, cfg, accountId, mediaLocalRoots, toolContext }) => {
		const telegramAction = resolveTelegramMessageActionName(action);
		if (!telegramAction) throw new Error(`Unsupported Telegram action: ${action}`);
		return await telegramMessageActionRuntime.handleTelegramAction({
			...params,
			action: telegramAction,
			accountId: accountId ?? void 0,
			...action === "react" ? { messageId: resolveReactionMessageId({
				args: params,
				toolContext
			}) } : {}
		}, cfg, { mediaLocalRoots });
	}
};
//#endregion
//#region extensions/telegram/src/allowed-updates.ts
var import_out$1 = require_out$1();
function resolveTelegramAllowedUpdates() {
	const updates = [...import_out$1.API_CONSTANTS.DEFAULT_UPDATE_TYPES];
	if (!updates.includes("message_reaction")) updates.push("message_reaction");
	if (!updates.includes("channel_post")) updates.push("channel_post");
	return updates;
}
//#endregion
//#region extensions/telegram/src/approval-buttons.ts
const MAX_CALLBACK_DATA_BYTES = 64;
function fitsCallbackData(value) {
	return Buffer.byteLength(value, "utf8") <= MAX_CALLBACK_DATA_BYTES;
}
function buildTelegramExecApprovalButtons(approvalId) {
	return buildTelegramExecApprovalButtonsForDecisions(approvalId, [
		"allow-once",
		"allow-always",
		"deny"
	]);
}
function buildTelegramExecApprovalButtonsForDecisions(approvalId, allowedDecisions) {
	const allowOnce = `/approve ${approvalId} allow-once`;
	if (!allowedDecisions.includes("allow-once") || !fitsCallbackData(allowOnce)) return;
	const primaryRow = [{
		text: "Allow Once",
		callback_data: allowOnce
	}];
	const allowAlways = `/approve ${approvalId} allow-always`;
	if (allowedDecisions.includes("allow-always") && fitsCallbackData(allowAlways)) primaryRow.push({
		text: "Allow Always",
		callback_data: allowAlways
	});
	const rows = [primaryRow];
	const deny = `/approve ${approvalId} deny`;
	if (allowedDecisions.includes("deny") && fitsCallbackData(deny)) rows.push([{
		text: "Deny",
		callback_data: deny
	}]);
	return rows;
}
//#endregion
//#region extensions/telegram/src/exec-approvals-handler.ts
const log = createSubsystemLogger("telegram/exec-approvals");
function matchesFilters(params) {
	const config = resolveTelegramExecApprovalConfig({
		cfg: params.cfg,
		accountId: params.accountId
	});
	if (!config?.enabled) return false;
	if (getTelegramExecApprovalApprovers({
		cfg: params.cfg,
		accountId: params.accountId
	}).length === 0) return false;
	if (config.agentFilter?.length) {
		const agentId = params.request.request.agentId ?? parseAgentSessionKey(params.request.request.sessionKey)?.agentId;
		if (!agentId || !config.agentFilter.includes(agentId)) return false;
	}
	if (config.sessionFilter?.length) {
		const sessionKey = params.request.request.sessionKey;
		if (!sessionKey) return false;
		if (!config.sessionFilter.some((pattern) => {
			if (sessionKey.includes(pattern)) return true;
			const regex = compileSafeRegex(pattern);
			return regex ? testRegexWithBoundedInput(regex, sessionKey) : false;
		})) return false;
	}
	return true;
}
function isHandlerConfigured(params) {
	if (!resolveTelegramExecApprovalConfig({
		cfg: params.cfg,
		accountId: params.accountId
	})?.enabled) return false;
	return getTelegramExecApprovalApprovers({
		cfg: params.cfg,
		accountId: params.accountId
	}).length > 0;
}
function resolveRequestSessionTarget(params) {
	return resolveExecApprovalSessionTarget({
		cfg: params.cfg,
		request: params.request,
		turnSourceChannel: params.request.request.turnSourceChannel ?? void 0,
		turnSourceTo: params.request.request.turnSourceTo ?? void 0,
		turnSourceAccountId: params.request.request.turnSourceAccountId ?? void 0,
		turnSourceThreadId: params.request.request.turnSourceThreadId ?? void 0
	});
}
function resolveTelegramSourceTarget(params) {
	const turnSourceChannel = params.request.request.turnSourceChannel?.trim().toLowerCase() || "";
	const turnSourceTo = params.request.request.turnSourceTo?.trim() || "";
	const turnSourceAccountId = params.request.request.turnSourceAccountId?.trim() || "";
	if (turnSourceChannel === "telegram" && turnSourceTo) {
		if (turnSourceAccountId && normalizeAccountId(turnSourceAccountId) !== normalizeAccountId(params.accountId)) return null;
		const threadId = typeof params.request.request.turnSourceThreadId === "number" ? params.request.request.turnSourceThreadId : typeof params.request.request.turnSourceThreadId === "string" ? Number.parseInt(params.request.request.turnSourceThreadId, 10) : void 0;
		return {
			to: turnSourceTo,
			threadId: Number.isFinite(threadId) ? threadId : void 0
		};
	}
	const sessionTarget = resolveRequestSessionTarget(params);
	if (!sessionTarget || sessionTarget.channel !== "telegram") return null;
	if (sessionTarget.accountId && normalizeAccountId(sessionTarget.accountId) !== normalizeAccountId(params.accountId)) return null;
	return {
		to: sessionTarget.to,
		threadId: sessionTarget.threadId
	};
}
function dedupeTargets(targets) {
	const seen = /* @__PURE__ */ new Set();
	const deduped = [];
	for (const target of targets) {
		const key = `${target.to}:${target.threadId ?? ""}`;
		if (seen.has(key)) continue;
		seen.add(key);
		deduped.push(target);
	}
	return deduped;
}
var TelegramExecApprovalHandler = class {
	constructor(opts, deps = {}) {
		this.opts = opts;
		this.gatewayClient = null;
		this.pending = /* @__PURE__ */ new Map();
		this.started = false;
		this.nowMs = deps.nowMs ?? Date.now;
		this.sendTyping = deps.sendTyping ?? sendTypingTelegram;
		this.sendMessage = deps.sendMessage ?? sendMessageTelegram;
		this.editReplyMarkup = deps.editReplyMarkup ?? editMessageReplyMarkupTelegram;
	}
	shouldHandle(request) {
		return matchesFilters({
			cfg: this.opts.cfg,
			accountId: this.opts.accountId,
			request
		});
	}
	async start() {
		if (this.started) return;
		this.started = true;
		if (!isHandlerConfigured({
			cfg: this.opts.cfg,
			accountId: this.opts.accountId
		})) return;
		this.gatewayClient = await createOperatorApprovalsGatewayClient({
			config: this.opts.cfg,
			gatewayUrl: this.opts.gatewayUrl,
			clientDisplayName: `Telegram Exec Approvals (${this.opts.accountId})`,
			onEvent: (evt) => this.handleGatewayEvent(evt),
			onConnectError: (err) => {
				log.error(`telegram exec approvals: connect error: ${err.message}`);
			}
		});
		this.gatewayClient.start();
	}
	async stop() {
		if (!this.started) return;
		this.started = false;
		for (const pending of this.pending.values()) clearTimeout(pending.timeoutId);
		this.pending.clear();
		this.gatewayClient?.stop();
		this.gatewayClient = null;
	}
	async handleRequested(request) {
		if (!this.shouldHandle(request)) return;
		const targetMode = resolveTelegramExecApprovalTarget({
			cfg: this.opts.cfg,
			accountId: this.opts.accountId
		});
		const targets = [];
		const sourceTarget = resolveTelegramSourceTarget({
			cfg: this.opts.cfg,
			accountId: this.opts.accountId,
			request
		});
		let fallbackToDm = false;
		if (targetMode === "channel" || targetMode === "both") if (sourceTarget) targets.push(sourceTarget);
		else fallbackToDm = true;
		if (targetMode === "dm" || targetMode === "both" || fallbackToDm) for (const approver of getTelegramExecApprovalApprovers({
			cfg: this.opts.cfg,
			accountId: this.opts.accountId
		})) targets.push({ to: approver });
		const resolvedTargets = dedupeTargets(targets);
		if (resolvedTargets.length === 0) return;
		const payload = buildExecApprovalPendingReplyPayload({
			approvalId: request.id,
			approvalSlug: request.id.slice(0, 8),
			approvalCommandId: request.id,
			command: resolveExecApprovalCommandDisplay(request.request).commandText,
			cwd: request.request.cwd ?? void 0,
			host: request.request.host === "node" ? "node" : "gateway",
			nodeId: request.request.nodeId ?? void 0,
			expiresAtMs: request.expiresAtMs,
			nowMs: this.nowMs()
		});
		const buttons = buildTelegramExecApprovalButtons(request.id);
		const sentMessages = [];
		for (const target of resolvedTargets) try {
			await this.sendTyping(target.to, {
				cfg: this.opts.cfg,
				token: this.opts.token,
				accountId: this.opts.accountId,
				...typeof target.threadId === "number" ? { messageThreadId: target.threadId } : {}
			}).catch(() => {});
			const result = await this.sendMessage(target.to, payload.text ?? "", {
				cfg: this.opts.cfg,
				token: this.opts.token,
				accountId: this.opts.accountId,
				buttons,
				...typeof target.threadId === "number" ? { messageThreadId: target.threadId } : {}
			});
			sentMessages.push({
				chatId: result.chatId,
				messageId: result.messageId
			});
		} catch (err) {
			log.error(`telegram exec approvals: failed to send request ${request.id}: ${String(err)}`);
		}
		if (sentMessages.length === 0) return;
		const timeoutMs = Math.max(0, request.expiresAtMs - this.nowMs());
		const timeoutId = setTimeout(() => {
			this.handleResolved({
				id: request.id,
				decision: "deny",
				ts: Date.now()
			});
		}, timeoutMs);
		timeoutId.unref?.();
		this.pending.set(request.id, {
			timeoutId,
			messages: sentMessages
		});
	}
	async handleResolved(resolved) {
		const pending = this.pending.get(resolved.id);
		if (!pending) return;
		clearTimeout(pending.timeoutId);
		this.pending.delete(resolved.id);
		await Promise.allSettled(pending.messages.map(async (message) => {
			await this.editReplyMarkup(message.chatId, message.messageId, [], {
				cfg: this.opts.cfg,
				token: this.opts.token,
				accountId: this.opts.accountId
			});
		}));
	}
	handleGatewayEvent(evt) {
		if (evt.event === "exec.approval.requested") {
			this.handleRequested(evt.payload);
			return;
		}
		if (evt.event === "exec.approval.resolved") this.handleResolved(evt.payload);
	}
};
//#endregion
//#region node_modules/@grammyjs/runner/out/platform.node.js
var require_platform_node = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.parentThread = exports.createThread = void 0;
	const worker_threads_1 = __require("worker_threads");
	function createThread(specifier, seed) {
		const worker = new worker_threads_1.Worker(specifier, { workerData: seed });
		return {
			onMessage(callback) {
				worker.on("message", callback);
			},
			postMessage(i) {
				worker.postMessage(i);
			}
		};
	}
	exports.createThread = createThread;
	function parentThread() {
		return {
			seed: Promise.resolve(worker_threads_1.workerData),
			onMessage(callback) {
				worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 || worker_threads_1.parentPort.on("message", callback);
			},
			postMessage(o) {
				worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 || worker_threads_1.parentPort.postMessage(o);
			}
		};
	}
	exports.parentThread = parentThread;
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/distribute.js
var require_distribute = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.distribute = void 0;
	const platform_node_js_1 = require_platform_node();
	var ThreadPool = class {
		constructor(specifier, me, count = 4) {
			this.count = count;
			this.threads = [];
			this.tasks = /* @__PURE__ */ new Map();
			for (let i = 0; i < count; i++) {
				const thread = (0, platform_node_js_1.createThread)(specifier, me);
				thread.onMessage((update_id) => {
					const task = this.tasks.get(update_id);
					task === null || task === void 0 || task();
					this.tasks.delete(update_id);
				});
				this.threads.push(thread);
			}
		}
		async process(update) {
			const i = update.update_id % this.count;
			this.threads[i].postMessage(update);
			await new Promise((resolve) => {
				this.tasks.set(update.update_id, resolve);
			});
		}
	};
	const workers = /* @__PURE__ */ new Map();
	function getWorker(specifier, me, count) {
		let worker = workers.get(specifier);
		if (worker === void 0) {
			worker = new ThreadPool(specifier, me, count);
			workers.set(specifier, worker);
		}
		return worker;
	}
	/**
	* Creates middleware that distributes updates across cores.
	*
	* This function should be used in combination with the `BotWorker` class.
	* Create an instance of `BotWorker` in a separate file. Let's assume that this
	* file is called `worker.ts`. This will define your actual bot logic.
	*
	* You can now do
	*
	* ```ts
	* const bot = new Bot("");
	*
	* // Deno:
	* bot.use(distribute(new URL("./worker.ts", import.meta.url)));
	* // Node:
	* bot.use(distribute(__dirname + "/worker"));
	* ```
	*
	* in a central place to use the bot worker in `worker.ts` and send updates to
	* it.
	*
	* Under the hood, `distribute` will create several web workers (Deno) or worker
	* threads (Node) using `worker.ts`. Updates are distributed among them in a
	* round-robin fashion.
	*
	* You can adjust the number of workers via `count` in an options object which
	* is passed as a second argument, i.e. `distribute(specifier, { count: 8 })`.
	* By default, 4 workers are created.
	*
	* @param specifier Module specifier to a file which creates a `BotWorker`
	* @param options Further options to control the number of workers
	*/
	function distribute(specifier, options) {
		const count = options === null || options === void 0 ? void 0 : options.count;
		return (ctx) => getWorker(specifier, ctx.me, count).process(ctx.update);
	}
	exports.distribute = distribute;
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/queue.js
var require_queue = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DecayingDeque = void 0;
	const MAX_TIMEOUT_VALUE = 2147483647;
	/**
	* A _decaying deque_ is a special kind of doubly linked list that serves as a
	* queue for a special kind of nodes, called _drifts_.
	*
	* A decaying deque has a worker function that spawns a task for each element
	* that is added to the queue. This task then gets wrapped into a drift. The
	* drifts are then the actual elements (aka. links) in the queue.
	*
	* In addition, the decaying deque runs a timer that purges old elements from
	* the queue. This period of time is determined by the `taskTimeout`.
	*
	* When a task completes or exceeds its timeout, the corresponding drift is
	* removed from the queue. As a result, only drifts with pending tasks are
	* contained in the queue at all times.
	*
	* When a tasks completes with failure (`reject`s or exceeds the timeout), the
	* respective handler (`catchError` or `catchTimeout`) is called.
	*
	* The decaying deque has its name from the observation that new elements are
	* appended to the tail, and the old elements are removed at arbitrary positions
	* in the queue whenever a task completes, hence, the queue seems to _decay_.
	*/
	var DecayingDeque = class {
		/**
		* Creates a new decaying queue with the given parameters.
		*
		* @param taskTimeout Max period of time for a task
		* @param worker Task generator
		* @param concurrency `add` will return only after the number of pending tasks fell below `concurrency`. `false` means `1`, `true` means `Infinity`, numbers below `1` mean `1`
		* @param catchError Error handler, receives the error and the source element
		* @param catchTimeout Timeout handler, receives the source element and the promise of the task
		*/
		constructor(taskTimeout, worker, concurrency, catchError, catchTimeout) {
			this.taskTimeout = taskTimeout;
			this.worker = worker;
			this.catchError = catchError;
			this.catchTimeout = catchTimeout;
			/**
			* Number of drifts in the queue. Equivalent to the number of currently
			* pending tasks.
			*/
			this.len = 0;
			/** Head element (oldest), `null` iff the queue is empty */
			this.head = null;
			/** Tail element (newest), `null` iff the queue is empty */
			this.tail = null;
			/**
			* List of subscribers that wait for the queue to have capacity again. All
			* functions in this array will be called as soon as new capacity is
			* available, i.e. the number of pending tasks falls below `concurrency`.
			*/
			this.subscribers = [];
			this.emptySubscribers = [];
			if (concurrency === false) this.concurrency = 1;
			else if (concurrency === true) this.concurrency = Infinity;
			else this.concurrency = concurrency < 1 ? 1 : concurrency;
		}
		/**
		* Adds the provided elements to the queue and starts tasks for all of them
		* immediately. Returns a `Promise` that resolves with `concurrency - length`
		* once this value becomes positive.
		* @param elems Elements to be added
		* @returns `this.capacity()`
		*/
		add(elems) {
			const len = elems.length;
			this.len += len;
			if (len > 0) {
				let i = 0;
				const now = Date.now();
				if (this.head === null) {
					this.head = this.tail = this.toDrift(elems[i++], now);
					this.startTimer();
				}
				let prev = this.tail;
				while (i < len) {
					const node = this.toDrift(elems[i++], now);
					prev.next = node;
					node.prev = prev;
					prev = node;
				}
				this.tail = prev;
			}
			return this.capacity();
		}
		empty() {
			return new Promise((resolve) => {
				if (this.len === 0) resolve();
				else this.emptySubscribers.push(resolve);
			});
		}
		/**
		* Returns a `Promise` that resolves with `concurrency - length` once this
		* value becomes positive. Use `await queue.capacity()` to wait until the
		* queue has free space again.
		*
		* @returns `concurrency - length` once positive
		*/
		capacity() {
			return new Promise((resolve) => {
				const capacity = this.concurrency - this.len;
				if (capacity > 0) resolve(capacity);
				else this.subscribers.push(resolve);
			});
		}
		/**
		* Called when a node completed its lifecycle and should be removed from the
		* queue. Effectively wraps the `remove` call and takes care of the timer.
		*
		* @param node Drift to decay
		*/
		decay(node) {
			var _a;
			if (this.head === node && node.date !== ((_a = node.next) === null || _a === void 0 ? void 0 : _a.date)) {
				if (this.timer !== void 0) clearTimeout(this.timer);
				if (node.next === null) this.timer = void 0;
				else this.startTimer(node.next.date + this.taskTimeout - Date.now());
			}
			this.remove(node);
		}
		/**
		* Removes an element from the queue. Calls subscribers if there is capacity
		* after performing this operation.
		*
		* @param node Drift to remove
		*/
		remove(node) {
			if (this.head === node) this.head = node.next;
			else node.prev.next = node.next;
			if (this.tail === node) this.tail = node.prev;
			else node.next.prev = node.prev;
			node.date = -1;
			const capacity = this.concurrency - --this.len;
			if (capacity > 0) {
				this.subscribers.forEach((resolve) => resolve(capacity));
				this.subscribers = [];
			}
			if (this.len === 0) {
				this.emptySubscribers.forEach((resolve) => resolve());
				this.emptySubscribers = [];
			}
		}
		/**
		* Takes a source element and starts the task for it by calling the worker
		* function. Then wraps this task into a drift. Also makes sure that the drift
		* removes itself from the queue once it completes, and that the error handler
		* is invoked if it fails (rejects).
		*
		* @param elem Source element
		* @param date Date when this drift is created
		* @returns The created drift
		*/
		toDrift(elem, date) {
			const node = {
				prev: null,
				task: this.worker(elem).catch(async (err) => {
					if (node.date > 0) await this.catchError(err, elem);
					else throw err;
				}).finally(() => {
					if (node.date > 0) this.decay(node);
				}),
				next: null,
				date,
				elem
			};
			return node;
		}
		/**
		* Starts a timer that fires off a timeout after the given period of time.
		*
		* @param ms Number of milliseconds to wait before the timeout kicks in
		*/
		startTimer(ms = this.taskTimeout) {
			this.timer = ms > MAX_TIMEOUT_VALUE ? void 0 : setTimeout(() => this.timeout(), ms);
		}
		/**
		* Performs a timeout event. This removes the head element as well as all
		* subsequent drifts with the same date (added in the same millisecond).
		*
		* The timeout handler is called in sequence for every removed drift.
		*/
		timeout() {
			var _a;
			if (this.head === null) return;
			while (this.head.date === ((_a = this.head.next) === null || _a === void 0 ? void 0 : _a.date)) {
				this.catchTimeout(this.head.elem, this.head.task);
				this.remove(this.head);
			}
			this.catchTimeout(this.head.elem, this.head.task);
			this.decay(this.head);
		}
		/**
		* Number of pending tasks in the queue. Equivalent to
		* `this.pendingTasks().length` (but much more efficient).
		*/
		get length() {
			return this.len;
		}
		/**
		* Creates a snapshot of the queue by computing a list of those elements that
		* are currently being processed.
		*/
		pendingTasks() {
			const len = this.len;
			const snapshot = Array(len);
			let drift = this.head;
			for (let i = 0; i < len; i++) {
				snapshot[i] = drift.elem;
				drift = drift.next;
			}
			return snapshot;
		}
	};
	exports.DecayingDeque = DecayingDeque;
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/sink.js
var require_sink = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createConcurrentSink = exports.createBatchSink = exports.createSequentialSink = void 0;
	const queue_js_1 = require_queue();
	/**
	* Creates an update sink that handles updates sequentially, i.e. one after
	* another. No update will be processed before the previous update has not
	* either been processed, or its processing has failed and the error has been
	* handled.
	*
	* In the context of grammY, this is also the default behavior of the built-in
	* `bot.start` method. Sequential sinks are very predictable and hence are well
	* suited for debugging your bot. They do not scale well and should hence not be
	* used in a larger bot, or one with long-running middleware.
	*
	* @param handler Update consumer
	* @param errorHandler Error handler for when the update consumer rejects
	* @param options Further options for creating the sink
	* @returns An update sink that handles updates one by one
	*/
	function createSequentialSink(handler, errorHandler, options = {}) {
		var _a;
		const { milliseconds: timeout = Infinity, handler: timeoutHandler = () => {} } = (_a = options.timeout) !== null && _a !== void 0 ? _a : {};
		const q = new queue_js_1.DecayingDeque(timeout, handler.consume, false, errorHandler, timeoutHandler);
		return {
			handle: async (updates) => {
				const len = updates.length;
				for (let i = 0; i < len; i++) await q.add([updates[i]]);
				return Infinity;
			},
			size: () => q.length,
			snapshot: () => q.pendingTasks()
		};
	}
	exports.createSequentialSink = createSequentialSink;
	/**
	* Creates an update sink that handles updates in batches. In other words, all
	* updates of one batch are processed concurrently, but one batch has to be done
	* processing before the next batch will be processed.
	*
	* In the context of grammY, creating a batch sink is rarely useful. If you want
	* to process updates concurrently, consider creating a concurrent sink. If you
	* want to process updates sequentially, consider using a sequential sink.
	*
	* This method was mainly added to provide compatibility with older frameworks
	* such as `telegraf`. If your bot specifically relies on this behavior, you may
	* want to choose creating a batch sink for compatibility reasons.
	*
	* @param handler Update consumer
	* @param errorHandler Error handler for when the update consumer rejects
	* @param options Further options for creating the sink
	* @returns An update sink that handles updates batch by batch
	*/
	function createBatchSink(handler, errorHandler, options = {}) {
		var _a;
		const { milliseconds: timeout = Infinity, handler: timeoutHandler = () => {} } = (_a = options.timeout) !== null && _a !== void 0 ? _a : {};
		const q = new queue_js_1.DecayingDeque(timeout, handler.consume, false, errorHandler, timeoutHandler);
		const constInf = () => Infinity;
		return {
			handle: (updates) => q.add(updates).then(constInf),
			size: () => q.length,
			snapshot: () => q.pendingTasks()
		};
	}
	exports.createBatchSink = createBatchSink;
	/**
	* Creates an update sink that handles updates concurrently. In other words, new
	* updates will be fetched—and their processing will be started—before the
	* processing of older updates completes. The maximal number of concurrently
	* handled updates can be limited (default: 500).
	*
	* In the context of grammY, this is the sink that is created by default when
	* calling `run(bot)`.
	*
	* @param handler Update consumer
	* @param errorHandler Error handler for when the update consumer rejects
	* @param concurrency Maximal number of updates to process concurrently
	* @param options Further options for creating the sink
	* @returns An update sink that handles updates concurrently
	*/
	function createConcurrentSink(handler, errorHandler, options = {}) {
		const { concurrency = 500, timeout: { milliseconds: timeout = Infinity, handler: timeoutHandler = () => {} } = {} } = options;
		const q = new queue_js_1.DecayingDeque(timeout, handler.consume, concurrency, errorHandler, timeoutHandler);
		return {
			handle: (updates) => q.add(updates),
			size: () => q.length,
			snapshot: () => q.pendingTasks()
		};
	}
	exports.createConcurrentSink = createConcurrentSink;
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/node-shim.js
var require_node_shim = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$2) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$2, p)) __createBinding(exports$2, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(require_abort_controller(), exports);
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/source.js
var require_source = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createSource = void 0;
	const STAT_LEN = 16;
	/**
	* Creates an update source based on the given update supplier.
	*
	* @param supplier An update supplier to use for requesting updates
	* @returns An update source
	*/
	function createSource(supplier, options = {}) {
		const { speedTrafficBalance = 0, maxDelayMilliseconds = 500 } = options;
		let active = false;
		let endWait = () => {};
		let waitHandle = void 0;
		let controller;
		function deactivate() {
			active = false;
			clearTimeout(waitHandle);
			waitHandle = void 0;
			endWait();
		}
		let updateGenerator = worker();
		let pace = Infinity;
		const balance = 100 * Math.max(0, Math.min(speedTrafficBalance, 1)) / Math.max(1, maxDelayMilliseconds);
		const counts = Array(STAT_LEN).fill(100);
		const durations = Array(STAT_LEN).fill(1);
		let totalCounts = 100 * STAT_LEN;
		let totalDuration = 1 * STAT_LEN;
		let index = 0;
		/** Records a pair ms/items and estimates the pause length */
		const record = balance === 0 ? () => 0 : (newCount, newDuration) => {
			const oldCount = counts[index];
			const oldDuration = durations[index];
			counts[index] = newCount;
			durations[index] = newDuration;
			totalCounts += newCount - oldCount;
			totalDuration += newDuration - oldDuration;
			index = (index + 1) % STAT_LEN;
			const estimate = balance * totalDuration / (totalCounts || 1);
			return maxDelayMilliseconds * Math.tanh(estimate);
		};
		async function* worker() {
			active = true;
			do {
				controller = new node_shim_js_1.AbortController();
				controller.signal.addEventListener("abort", deactivate);
				try {
					const pre = Date.now();
					const items = await supplier.supply(pace, controller.signal);
					const post = Date.now();
					yield items;
					const wait = record(items.length, post - pre);
					if (items.length < 100 && wait > 0) await new Promise((r) => {
						endWait = r;
						waitHandle = setTimeout(r, wait);
					});
				} catch (e) {
					if (!controller.signal.aborted) throw e;
					close();
					break;
				}
			} while (active);
		}
		function close() {
			deactivate();
			controller.abort();
			updateGenerator = worker();
			pace = Infinity;
		}
		return {
			generator: () => updateGenerator,
			setGeneratorPace: (newPace) => pace = newPace,
			isActive: () => active,
			close: () => close()
		};
	}
	exports.createSource = createSource;
	const node_shim_js_1 = require_node_shim();
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/runner.js
var require_runner = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createRunner = exports.createUpdateFetcher = exports.run = void 0;
	const sink_js_1 = require_sink();
	const source_js_1 = require_source();
	/**
	* Runs a grammY bot with long polling. Updates are processed concurrently with
	* a default maximum concurrency of 500 updates. Calls to `getUpdates` will be
	* slowed down and the `limit` parameter will be adjusted as soon as this load
	* limit is reached.
	*
	* You should use this method if your bot processes a lot of updates (several
	* thousand per hour), or if your bot has long-running operations such as large
	* file transfers.
	*
	* Confer the grammY [documentation](https://grammy.dev/plugins/runner.html) to
	* learn more about how to scale a bot with grammY.
	*
	* @param bot A grammY bot
	* @param options Further configuration options
	* @returns A handle to manage your running bot
	*/
	function run(bot, options = {}) {
		const { source: sourceOpts, runner: runnerOpts, sink: sinkOpts } = options;
		const fetchUpdates = createUpdateFetcher(bot, runnerOpts);
		const supplier = { supply: async function(batchSize, signal) {
			if (bot.init !== void 0) await bot.init();
			const updates = await fetchUpdates(batchSize, signal);
			supplier.supply = fetchUpdates;
			return updates;
		} };
		const runner = createRunner((0, source_js_1.createSource)(supplier, sourceOpts), (0, sink_js_1.createConcurrentSink)({ consume: (update) => bot.handleUpdate(update) }, async (error) => {
			try {
				await bot.errorHandler(error);
			} catch (error) {
				printError(error);
			}
		}, sinkOpts));
		runner.start();
		return runner;
	}
	exports.run = run;
	/**
	* Takes a grammY bot and returns an update fetcher function for it. The
	* returned function has built-in retrying behavior that can be configured.
	* After every successful fetching operation, the `offset` parameter is
	* correctly incremented. As a result, you can simply invoke the created function
	* multiple times in a row, and you will obtain new updates every time.
	*
	* The update fetcher function has a default long polling timeout of 30 seconds.
	* Specify `sourceOptions` to configure what values to pass to `getUpdates`
	* calls.
	*
	* @param bot A grammY bot
	* @param options Further options on how to fetch updates
	* @returns A function that can fetch updates with automatic retry behavior
	*/
	function createUpdateFetcher(bot, options = {}) {
		const { fetch: fetchOpts, retryInterval = "exponential", maxRetryTime = 900 * 60 * 1e3, silent } = options;
		const backoff = retryInterval === "exponential" ? (t) => t + t : retryInterval === "quadratic" ? (t) => t + 100 : (t) => t;
		const initialRetryIn = typeof retryInterval === "number" ? retryInterval : 100;
		let offset = 0;
		async function fetchUpdates(batchSize, signal) {
			var _a;
			const args = {
				timeout: 30,
				...fetchOpts,
				offset,
				limit: Math.max(1, Math.min(batchSize, 100))
			};
			const latestRetry = Date.now() + maxRetryTime;
			let retryIn = initialRetryIn;
			let updates;
			do
				try {
					updates = await bot.api.getUpdates(args, signal);
				} catch (error) {
					if (signal.aborted) throw error;
					if (!silent) {
						console.error("[grammY runner] Error while fetching updates:");
						console.error("[grammY runner]", error);
					}
					await throwIfUnrecoverable(error);
					if (Date.now() + retryIn < latestRetry) {
						await new Promise((r) => setTimeout(r, retryIn));
						retryIn = backoff(retryIn);
					} else throw error;
				}
			while (updates === void 0);
			const lastId = (_a = updates[updates.length - 1]) === null || _a === void 0 ? void 0 : _a.update_id;
			if (lastId !== void 0) offset = lastId + 1;
			return updates;
		}
		return fetchUpdates;
	}
	exports.createUpdateFetcher = createUpdateFetcher;
	/**
	* Creates a runner that pulls in updates from the supplied source, and passes
	* them to the supplied sink. Returns a handle that lets you control the runner,
	* e.g. start it.
	*
	* @param source The source of updates
	* @param sink The sink for updates
	* @returns A handle to start and manage your bot
	*/
	function createRunner(source, sink) {
		let running = false;
		let task;
		async function runner() {
			if (!running) return;
			try {
				for await (const updates of source.generator()) {
					const capacity = await sink.handle(updates);
					if (!running) break;
					source.setGeneratorPace(capacity);
				}
			} catch (e) {
				if (running) {
					running = false;
					task = void 0;
					throw e;
				}
			}
			running = false;
			task = void 0;
		}
		return {
			start: () => {
				running = true;
				task = runner();
			},
			size: () => sink.size(),
			stop: () => {
				const t = task;
				running = false;
				task = void 0;
				source.close();
				return t;
			},
			task: () => task,
			isRunning: () => running && source.isActive()
		};
	}
	exports.createRunner = createRunner;
	async function throwIfUnrecoverable(err) {
		if (typeof err !== "object" || err === null) return;
		const code = "error_code" in err ? err.error_code : void 0;
		if (code === 401 || code === 409) throw err;
		if (code === 429) {
			if ("parameters" in err && typeof err.parameters === "object" && err.parameters !== null && "retry_after" in err.parameters && typeof err.parameters.retry_after === "number") {
				const delay = err.parameters.retry_after;
				await new Promise((r) => setTimeout(r, 1e3 * delay));
			}
		}
	}
	function printError(error) {
		console.error("::: ERROR ERROR ERROR :::");
		console.error();
		console.error("The error handling of your bot threw");
		console.error("an error itself! Make sure to handle");
		console.error("all errors! Time:", (/* @__PURE__ */ new Date()).toISOString());
		console.error();
		console.error("The default error handler rethrows all");
		console.error("errors. Did you maybe forget to set");
		console.error("an error handler with `bot.catch`?");
		console.error();
		console.error("Here is your error object:");
		console.error(error);
	}
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/sequentialize.js
var require_sequentialize = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sequentialize = void 0;
	/**
	* Using a runner for grammY allows your bot to run middleware concurrently.
	* This has the benefit that multiple messages can be processed concurrently,
	* hence making your bot drastically more scalable, but it comes at the cost
	* that race conditions may occur because some messages need to be processed in
	* order.
	*
	* The solution to this problem is by making sure that some updates wait for
	* others to be done processing before running their middleware. This can be
	* achieved by middleware.
	*
	* This function creates that middleware for you. You can pass in a constraint
	* function that determines what updates could clash, and you will be provided
	* by middleware that will ensure that clashes will not occur. A constraint is
	* simply a string that is derived from an update.
	*
	* As an example, you can use this constraint function to make sure that
	* messages inside the same chat are never processed concurrently:
	*
	* ```ts
	* // Correctly order updates with the same chat identifier
	* const constraint = (ctx: Context) => String(ctx.chat.id)
	*
	* bot.use(sequentialize(constraint))
	* ```
	*
	* It is possible to return an array of strings if multiple constraints should
	* hold, such as "process things inside the same chat in sequence, but also from
	* the same user across chats":
	* ```ts
	* const constraints = (ctx: Context) => [String(ctx.chat.id), String(ctx.from.id)]
	*
	* bot.use(sequentialize(constraints))
	* ```
	*
	* Sequentializing updates is especially important when using session middleware
	* in order to prevent write-after-read hazards. In this case, you should
	* provide the same function to determine constraints as you use to resolve the
	* session key.
	*
	* @param constraint Function that determines the constraints of an update
	* @returns Sequentializing middleware to be installed on the bot
	*/
	function sequentialize(constraint) {
		const map = /* @__PURE__ */ new Map();
		return async (ctx, next) => {
			const con = constraint(ctx);
			const cs = (Array.isArray(con) ? con : [con]).filter((cs) => !!cs);
			const clots = cs.map((c) => {
				let v = map.get(c);
				if (v === void 0) {
					v = {
						chain: Promise.resolve(),
						len: 0
					};
					map.set(c, v);
				}
				return v;
			});
			const allClots = Promise.all(clots.map((p) => p.chain));
			async function run() {
				try {
					await allClots;
				} catch {}
				try {
					await next();
				} finally {
					cs.forEach((c) => {
						const cl = map.get(c);
						if (cl !== void 0 && --cl.len === 0) map.delete(c);
					});
				}
			}
			const task = run();
			clots.forEach((pr) => {
				pr.len++;
				pr.chain = task;
			});
			await task;
		};
	}
	exports.sequentialize = sequentialize;
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/deps.node.js
var require_deps_node$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BotError = exports.Bot = void 0;
	var grammy_1 = require_out$1();
	Object.defineProperty(exports, "Bot", {
		enumerable: true,
		get: function() {
			return grammy_1.Bot;
		}
	});
	Object.defineProperty(exports, "BotError", {
		enumerable: true,
		get: function() {
			return grammy_1.BotError;
		}
	});
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/worker.js
var require_worker = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BotWorker = void 0;
	const deps_node_js_1 = require_deps_node$1();
	const platform_node_js_1 = require_platform_node();
	/**
	* A `BotWorker` instance is a like a `Bot` instance in the sense that it can
	* process updates. It is different from `Bot` because it cannot pull in these
	* updates, so it cannot be be started or stopped. Instead, it has to receive
	* these updates from a central Bot instance that fetches updates.
	*
	* Create an instance of this class in a separate file.
	*
	* ```ts
	* // worker.ts
	* const bot = new BotWorker(""); // <-- pass your bot token here (again)
	*
	* bot.on("message", (ctx) => ctx.reply("yay!"));
	* ```
	*
	* This is the place where you should define all your bot logic. Install
	* plugins, add handlers, process messages and other updates. Basically, instead
	* of creating a bot, you only create a bot worker.
	*
	* Next, you can define a very minimal central bot instance to pull in updates.
	* You can use this central instance to sequentialize your updates. However, it
	* generally makes sense to put as little logic as possible in it.
	*
	* Install the `distribute` middleware exported from grammY runner to send the
	* updates to your bot workers.
	*
	* Note that any plugins you install in the central bot instance will not be
	* available inside the bot worker. In face, you can even use different context
	* types in the central bot instance and in your bot workers.
	*/
	var BotWorker = class extends deps_node_js_1.Bot {
		constructor(token, config) {
			super(token, config);
			this.token = token;
			const p = (0, platform_node_js_1.parentThread)();
			p.seed.then((me) => {
				if (!this.isInited()) this.botInfo = me;
			});
			p.onMessage(async (update) => {
				try {
					await this.handleUpdate(update);
				} catch (err) {
					if (err instanceof deps_node_js_1.BotError) await this.errorHandler(err);
					else {
						console.error("FATAL: grammY worker unable to handle:", err);
						throw err;
					}
				} finally {
					p.postMessage(update.update_id);
				}
			});
			this.start = () => {
				throw new Error("Cannot start a bot worker!");
			};
			this.stop = () => {
				throw new Error("Cannot stop a bot worker!");
			};
		}
	};
	exports.BotWorker = BotWorker;
}));
//#endregion
//#region node_modules/@grammyjs/runner/out/mod.js
var require_out = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(require_distribute(), exports);
	__exportStar(require_queue(), exports);
	__exportStar(require_runner(), exports);
	__exportStar(require_sequentialize(), exports);
	__exportStar(require_sink(), exports);
	__exportStar(require_source(), exports);
	__exportStar(require_worker(), exports);
}));
//#endregion
//#region extensions/telegram/src/bot-deps.ts
const defaultTelegramBotDeps = {
	get loadConfig() {
		return loadConfig;
	},
	get resolveStorePath() {
		return resolveStorePath;
	},
	get readChannelAllowFromStore() {
		return readChannelAllowFromStore;
	},
	get upsertChannelPairingRequest() {
		return upsertChannelPairingRequest;
	},
	get enqueueSystemEvent() {
		return enqueueSystemEvent;
	},
	get dispatchReplyWithBufferedBlockDispatcher() {
		return dispatchReplyWithBufferedBlockDispatcher;
	},
	get buildModelsProviderData() {
		return buildModelsProviderData;
	},
	get listSkillCommandsForAgents() {
		return listSkillCommandsForAgents;
	},
	get wasSentByBot() {
		return wasSentByBot;
	}
};
//#endregion
//#region extensions/telegram/src/bot-handlers.media.ts
const APPROVE_CALLBACK_DATA_RE = /^\/approve(?:@[^\s]+)?\s+[A-Za-z0-9][A-Za-z0-9._:-]*\s+(allow-once|allow-always|deny)\b/i;
function isMediaSizeLimitError(err) {
	const errMsg = String(err);
	return errMsg.includes("exceeds") && errMsg.includes("MB limit");
}
function isRecoverableMediaGroupError(err) {
	return err instanceof MediaFetchError || isMediaSizeLimitError(err);
}
function hasInboundMedia(msg) {
	return Boolean(msg.media_group_id) || Array.isArray(msg.photo) && msg.photo.length > 0 || Boolean(msg.video ?? msg.video_note ?? msg.document ?? msg.audio ?? msg.voice ?? msg.sticker);
}
function hasReplyTargetMedia(msg) {
	const externalReply = msg.external_reply;
	const replyTarget = msg.reply_to_message ?? externalReply;
	return Boolean(replyTarget && hasInboundMedia(replyTarget));
}
function resolveInboundMediaFileId(msg) {
	return msg.sticker?.file_id ?? msg.photo?.[msg.photo.length - 1]?.file_id ?? msg.video?.file_id ?? msg.video_note?.file_id ?? msg.document?.file_id ?? msg.audio?.file_id ?? msg.voice?.file_id;
}
//#endregion
//#region extensions/telegram/src/bot-updates.ts
const RECENT_TELEGRAM_UPDATE_TTL_MS = 5 * 6e4;
const RECENT_TELEGRAM_UPDATE_MAX = 2e3;
const resolveTelegramUpdateId = (ctx) => ctx.update?.update_id ?? ctx.update_id;
const buildTelegramUpdateKey = (ctx) => {
	const updateId = resolveTelegramUpdateId(ctx);
	if (typeof updateId === "number") return `update:${updateId}`;
	const callbackId = ctx.callbackQuery?.id;
	if (callbackId) return `callback:${callbackId}`;
	const msg = ctx.message ?? ctx.channelPost ?? ctx.editedChannelPost ?? ctx.update?.message ?? ctx.update?.edited_message ?? ctx.update?.channel_post ?? ctx.update?.edited_channel_post ?? ctx.callbackQuery?.message;
	const chatId = msg?.chat?.id;
	const messageId = msg?.message_id;
	if (typeof chatId !== "undefined" && typeof messageId === "number") return `message:${chatId}:${messageId}`;
};
const createTelegramUpdateDedupe = () => createDedupeCache({
	ttlMs: RECENT_TELEGRAM_UPDATE_TTL_MS,
	maxSize: RECENT_TELEGRAM_UPDATE_MAX
});
//#endregion
//#region extensions/telegram/src/bot/delivery.send.ts
const PARSE_ERR_RE = /can't parse entities|parse entities|find end of the entity/i;
const EMPTY_TEXT_ERR_RE = /message text is empty/i;
const THREAD_NOT_FOUND_RE$1 = /message thread not found/i;
function isTelegramThreadNotFoundError(err) {
	if (err instanceof import_out$1.GrammyError) return THREAD_NOT_FOUND_RE$1.test(err.description);
	return THREAD_NOT_FOUND_RE$1.test(formatErrorMessage(err));
}
function hasMessageThreadIdParam(params) {
	if (!params) return false;
	return typeof params.message_thread_id === "number";
}
function removeMessageThreadIdParam(params) {
	if (!params) return {};
	const { message_thread_id: _ignored, ...rest } = params;
	return rest;
}
async function sendTelegramWithThreadFallback(params) {
	const allowThreadlessRetry = params.thread?.scope === "dm";
	const hasThreadId = hasMessageThreadIdParam(params.requestParams);
	const shouldSuppressFirstErrorLog = (err) => allowThreadlessRetry && hasThreadId && isTelegramThreadNotFoundError(err);
	const mergedShouldLog = params.shouldLog ? (err) => params.shouldLog(err) && !shouldSuppressFirstErrorLog(err) : (err) => !shouldSuppressFirstErrorLog(err);
	try {
		return await withTelegramApiErrorLogging({
			operation: params.operation,
			runtime: params.runtime,
			shouldLog: mergedShouldLog,
			fn: () => params.send(params.requestParams)
		});
	} catch (err) {
		if (!allowThreadlessRetry || !hasThreadId || !isTelegramThreadNotFoundError(err)) throw err;
		const retryParams = removeMessageThreadIdParam(params.requestParams);
		params.runtime.log?.(`telegram ${params.operation}: message thread not found; retrying without message_thread_id`);
		return await withTelegramApiErrorLogging({
			operation: `${params.operation} (threadless retry)`,
			runtime: params.runtime,
			fn: () => params.send(retryParams)
		});
	}
}
function buildTelegramSendParams(opts) {
	const threadParams = buildTelegramThreadParams(opts?.thread);
	const params = {};
	if (opts?.replyToMessageId) params.reply_to_message_id = opts.replyToMessageId;
	if (threadParams) params.message_thread_id = threadParams.message_thread_id;
	if (opts?.silent === true) params.disable_notification = true;
	return params;
}
async function sendTelegramText(bot, chatId, text, runtime, opts) {
	const baseParams = buildTelegramSendParams({
		replyToMessageId: opts?.replyToMessageId,
		thread: opts?.thread,
		silent: opts?.silent
	});
	const linkPreviewOptions = opts?.linkPreview ?? true ? void 0 : { is_disabled: true };
	const htmlText = (opts?.textMode ?? "markdown") === "html" ? text : markdownToTelegramHtml(text);
	const fallbackText = opts?.plainText ?? text;
	const hasFallbackText = fallbackText.trim().length > 0;
	const sendPlainFallback = async () => {
		const res = await sendTelegramWithThreadFallback({
			operation: "sendMessage",
			runtime,
			thread: opts?.thread,
			requestParams: baseParams,
			send: (effectiveParams) => bot.api.sendMessage(chatId, fallbackText, {
				...linkPreviewOptions ? { link_preview_options: linkPreviewOptions } : {},
				...opts?.replyMarkup ? { reply_markup: opts.replyMarkup } : {},
				...effectiveParams
			})
		});
		runtime.log?.(`telegram sendMessage ok chat=${chatId} message=${res.message_id} (plain)`);
		return res.message_id;
	};
	if (!htmlText.trim()) {
		if (!hasFallbackText) throw new Error("telegram sendMessage failed: empty formatted text and empty plain fallback");
		return await sendPlainFallback();
	}
	try {
		const res = await sendTelegramWithThreadFallback({
			operation: "sendMessage",
			runtime,
			thread: opts?.thread,
			requestParams: baseParams,
			shouldLog: (err) => {
				const errText = formatErrorMessage(err);
				return !PARSE_ERR_RE.test(errText) && !EMPTY_TEXT_ERR_RE.test(errText);
			},
			send: (effectiveParams) => bot.api.sendMessage(chatId, htmlText, {
				parse_mode: "HTML",
				...linkPreviewOptions ? { link_preview_options: linkPreviewOptions } : {},
				...opts?.replyMarkup ? { reply_markup: opts.replyMarkup } : {},
				...effectiveParams
			})
		});
		runtime.log?.(`telegram sendMessage ok chat=${chatId} message=${res.message_id}`);
		return res.message_id;
	} catch (err) {
		const errText = formatErrorMessage(err);
		if (PARSE_ERR_RE.test(errText) || EMPTY_TEXT_ERR_RE.test(errText)) {
			if (!hasFallbackText) throw err;
			runtime.log?.(`telegram formatted send failed; retrying without formatting: ${errText}`);
			return await sendPlainFallback();
		}
		throw err;
	}
}
//#endregion
//#region extensions/telegram/src/bot/reply-threading.ts
function resolveReplyToForSend(params) {
	return params.replyToId && (params.replyToMode === "all" || !params.progress.hasReplied) ? params.replyToId : void 0;
}
function markReplyApplied(progress, replyToId) {
	if (replyToId && !progress.hasReplied) progress.hasReplied = true;
}
function markDelivered$1(progress) {
	progress.hasDelivered = true;
}
async function sendChunkedTelegramReplyText(params) {
	const applyDelivered = params.markDelivered ?? markDelivered$1;
	for (let i = 0; i < params.chunks.length; i += 1) {
		const chunk = params.chunks[i];
		if (!chunk) continue;
		const isFirstChunk = i === 0;
		const replyToMessageId = resolveReplyToForSend({
			replyToId: params.replyToId,
			replyToMode: params.replyToMode,
			progress: params.progress
		});
		const shouldAttachQuote = Boolean(replyToMessageId) && Boolean(params.replyQuoteText) && (params.quoteOnlyOnFirstChunk !== true || isFirstChunk);
		await params.sendChunk({
			chunk,
			isFirstChunk,
			replyToMessageId,
			replyMarkup: isFirstChunk ? params.replyMarkup : void 0,
			replyQuoteText: shouldAttachQuote ? params.replyQuoteText : void 0
		});
		markReplyApplied(params.progress, replyToMessageId);
		applyDelivered(params.progress);
	}
}
//#endregion
//#region extensions/telegram/src/bot/delivery.replies.ts
const VOICE_FORBIDDEN_RE = /VOICE_MESSAGES_FORBIDDEN/;
const CAPTION_TOO_LONG_RE = /caption is too long/i;
function buildChunkTextResolver(params) {
	return (markdown) => {
		const markdownChunks = params.chunkMode === "newline" ? chunkMarkdownTextWithMode(markdown, params.textLimit, params.chunkMode) : [markdown];
		const chunks = [];
		for (const chunk of markdownChunks) {
			const nested = markdownToTelegramChunks(chunk, params.textLimit, { tableMode: params.tableMode });
			if (!nested.length && chunk) {
				chunks.push({
					html: wrapFileReferencesInHtml(markdownToTelegramHtml(chunk, {
						tableMode: params.tableMode,
						wrapFileRefs: false
					})),
					text: chunk
				});
				continue;
			}
			chunks.push(...nested);
		}
		return chunks;
	};
}
function markDelivered(progress) {
	progress.hasDelivered = true;
	progress.deliveredCount += 1;
}
async function deliverTextReply(params) {
	let firstDeliveredMessageId;
	await sendChunkedTelegramReplyText({
		chunks: params.chunkText(params.replyText),
		progress: params.progress,
		replyToId: params.replyToId,
		replyToMode: params.replyToMode,
		replyMarkup: params.replyMarkup,
		replyQuoteText: params.replyQuoteText,
		markDelivered,
		sendChunk: async ({ chunk, replyToMessageId, replyMarkup, replyQuoteText }) => {
			const messageId = await sendTelegramText(params.bot, params.chatId, chunk.html, params.runtime, {
				replyToMessageId,
				replyQuoteText,
				thread: params.thread,
				textMode: "html",
				plainText: chunk.text,
				linkPreview: params.linkPreview,
				silent: params.silent,
				replyMarkup
			});
			if (firstDeliveredMessageId == null) firstDeliveredMessageId = messageId;
		}
	});
	return firstDeliveredMessageId;
}
async function sendPendingFollowUpText(params) {
	await sendChunkedTelegramReplyText({
		chunks: params.chunkText(params.text),
		progress: params.progress,
		replyToId: params.replyToId,
		replyToMode: params.replyToMode,
		replyMarkup: params.replyMarkup,
		markDelivered,
		sendChunk: async ({ chunk, replyToMessageId, replyMarkup }) => {
			await sendTelegramText(params.bot, params.chatId, chunk.html, params.runtime, {
				replyToMessageId,
				thread: params.thread,
				textMode: "html",
				plainText: chunk.text,
				linkPreview: params.linkPreview,
				silent: params.silent,
				replyMarkup
			});
		}
	});
}
function isVoiceMessagesForbidden(err) {
	if (err instanceof import_out$1.GrammyError) return VOICE_FORBIDDEN_RE.test(err.description);
	return VOICE_FORBIDDEN_RE.test(formatErrorMessage(err));
}
function isCaptionTooLong(err) {
	if (err instanceof import_out$1.GrammyError) return CAPTION_TOO_LONG_RE.test(err.description);
	return CAPTION_TOO_LONG_RE.test(formatErrorMessage(err));
}
async function sendTelegramVoiceFallbackText(opts) {
	let firstDeliveredMessageId;
	const chunks = opts.chunkText(opts.text);
	let appliedReplyTo = false;
	for (let i = 0; i < chunks.length; i += 1) {
		const chunk = chunks[i];
		const replyToForChunk = !appliedReplyTo ? opts.replyToId : void 0;
		const messageId = await sendTelegramText(opts.bot, opts.chatId, chunk.html, opts.runtime, {
			replyToMessageId: replyToForChunk,
			replyQuoteText: !appliedReplyTo ? opts.replyQuoteText : void 0,
			thread: opts.thread,
			textMode: "html",
			plainText: chunk.text,
			linkPreview: opts.linkPreview,
			silent: opts.silent,
			replyMarkup: !appliedReplyTo ? opts.replyMarkup : void 0
		});
		if (firstDeliveredMessageId == null) firstDeliveredMessageId = messageId;
		if (replyToForChunk) appliedReplyTo = true;
	}
	return firstDeliveredMessageId;
}
async function deliverMediaReply(params) {
	let firstDeliveredMessageId;
	let first = true;
	let pendingFollowUpText;
	for (const mediaUrl of params.mediaList) {
		const isFirstMedia = first;
		const media = await params.mediaLoader(mediaUrl, buildOutboundMediaLoadOptions({ mediaLocalRoots: params.mediaLocalRoots }));
		const kind = kindFromMime(media.contentType ?? void 0);
		const isGif = isGifMedia({
			contentType: media.contentType,
			fileName: media.fileName
		});
		const fileName = media.fileName ?? (isGif ? "animation.gif" : "file");
		const file = new import_out$1.InputFile(media.buffer, fileName);
		const { caption, followUpText } = splitTelegramCaption(isFirstMedia ? params.reply.text ?? void 0 : void 0);
		const htmlCaption = caption ? renderTelegramHtmlText(caption, { tableMode: params.tableMode }) : void 0;
		if (followUpText) pendingFollowUpText = followUpText;
		first = false;
		const replyToMessageId = resolveReplyToForSend({
			replyToId: params.replyToId,
			replyToMode: params.replyToMode,
			progress: params.progress
		});
		const shouldAttachButtonsToMedia = isFirstMedia && params.replyMarkup && !followUpText;
		const mediaParams = {
			caption: htmlCaption,
			...htmlCaption ? { parse_mode: "HTML" } : {},
			...shouldAttachButtonsToMedia ? { reply_markup: params.replyMarkup } : {},
			...buildTelegramSendParams({
				replyToMessageId,
				thread: params.thread,
				silent: params.silent
			})
		};
		if (isGif) {
			const result = await sendTelegramWithThreadFallback({
				operation: "sendAnimation",
				runtime: params.runtime,
				thread: params.thread,
				requestParams: mediaParams,
				send: (effectiveParams) => params.bot.api.sendAnimation(params.chatId, file, { ...effectiveParams })
			});
			if (firstDeliveredMessageId == null) firstDeliveredMessageId = result.message_id;
			markDelivered(params.progress);
		} else if (kind === "image") {
			const result = await sendTelegramWithThreadFallback({
				operation: "sendPhoto",
				runtime: params.runtime,
				thread: params.thread,
				requestParams: mediaParams,
				send: (effectiveParams) => params.bot.api.sendPhoto(params.chatId, file, { ...effectiveParams })
			});
			if (firstDeliveredMessageId == null) firstDeliveredMessageId = result.message_id;
			markDelivered(params.progress);
		} else if (kind === "video") {
			const result = await sendTelegramWithThreadFallback({
				operation: "sendVideo",
				runtime: params.runtime,
				thread: params.thread,
				requestParams: mediaParams,
				send: (effectiveParams) => params.bot.api.sendVideo(params.chatId, file, { ...effectiveParams })
			});
			if (firstDeliveredMessageId == null) firstDeliveredMessageId = result.message_id;
			markDelivered(params.progress);
		} else if (kind === "audio") {
			const { useVoice } = resolveTelegramVoiceSend({
				wantsVoice: params.reply.audioAsVoice === true,
				contentType: media.contentType,
				fileName,
				logFallback: logVerbose
			});
			if (useVoice) {
				const sendVoiceMedia = async (requestParams, shouldLog) => {
					const result = await sendTelegramWithThreadFallback({
						operation: "sendVoice",
						runtime: params.runtime,
						thread: params.thread,
						requestParams,
						shouldLog,
						send: (effectiveParams) => params.bot.api.sendVoice(params.chatId, file, { ...effectiveParams })
					});
					if (firstDeliveredMessageId == null) firstDeliveredMessageId = result.message_id;
					markDelivered(params.progress);
				};
				await params.onVoiceRecording?.();
				try {
					await sendVoiceMedia(mediaParams, (err) => !isVoiceMessagesForbidden(err));
				} catch (voiceErr) {
					if (isVoiceMessagesForbidden(voiceErr)) {
						const fallbackText = params.reply.text;
						if (!fallbackText || !fallbackText.trim()) throw voiceErr;
						logVerbose("telegram sendVoice forbidden (recipient has voice messages blocked in privacy settings); falling back to text");
						const voiceFallbackReplyTo = resolveReplyToForSend({
							replyToId: params.replyToId,
							replyToMode: params.replyToMode,
							progress: params.progress
						});
						const fallbackMessageId = await sendTelegramVoiceFallbackText({
							bot: params.bot,
							chatId: params.chatId,
							runtime: params.runtime,
							text: fallbackText,
							chunkText: params.chunkText,
							replyToId: voiceFallbackReplyTo,
							thread: params.thread,
							linkPreview: params.linkPreview,
							silent: params.silent,
							replyMarkup: params.replyMarkup,
							replyQuoteText: params.replyQuoteText
						});
						if (firstDeliveredMessageId == null) firstDeliveredMessageId = fallbackMessageId;
						markReplyApplied(params.progress, voiceFallbackReplyTo);
						markDelivered(params.progress);
						continue;
					}
					if (isCaptionTooLong(voiceErr)) {
						logVerbose("telegram sendVoice caption too long; resending voice without caption + text separately");
						const noCaptionParams = { ...mediaParams };
						delete noCaptionParams.caption;
						delete noCaptionParams.parse_mode;
						await sendVoiceMedia(noCaptionParams);
						const fallbackText = params.reply.text;
						if (fallbackText?.trim()) await sendTelegramVoiceFallbackText({
							bot: params.bot,
							chatId: params.chatId,
							runtime: params.runtime,
							text: fallbackText,
							chunkText: params.chunkText,
							replyToId: void 0,
							thread: params.thread,
							linkPreview: params.linkPreview,
							silent: params.silent,
							replyMarkup: params.replyMarkup
						});
						markReplyApplied(params.progress, replyToMessageId);
						continue;
					}
					throw voiceErr;
				}
			} else {
				const result = await sendTelegramWithThreadFallback({
					operation: "sendAudio",
					runtime: params.runtime,
					thread: params.thread,
					requestParams: mediaParams,
					send: (effectiveParams) => params.bot.api.sendAudio(params.chatId, file, { ...effectiveParams })
				});
				if (firstDeliveredMessageId == null) firstDeliveredMessageId = result.message_id;
				markDelivered(params.progress);
			}
		} else {
			const result = await sendTelegramWithThreadFallback({
				operation: "sendDocument",
				runtime: params.runtime,
				thread: params.thread,
				requestParams: mediaParams,
				send: (effectiveParams) => params.bot.api.sendDocument(params.chatId, file, { ...effectiveParams })
			});
			if (firstDeliveredMessageId == null) firstDeliveredMessageId = result.message_id;
			markDelivered(params.progress);
		}
		markReplyApplied(params.progress, replyToMessageId);
		if (pendingFollowUpText && isFirstMedia) {
			await sendPendingFollowUpText({
				bot: params.bot,
				chatId: params.chatId,
				runtime: params.runtime,
				thread: params.thread,
				chunkText: params.chunkText,
				text: pendingFollowUpText,
				replyMarkup: params.replyMarkup,
				linkPreview: params.linkPreview,
				silent: params.silent,
				replyToId: params.replyToId,
				replyToMode: params.replyToMode,
				progress: params.progress
			});
			pendingFollowUpText = void 0;
		}
	}
	return firstDeliveredMessageId;
}
async function maybePinFirstDeliveredMessage(params) {
	if (!params.shouldPin || typeof params.firstDeliveredMessageId !== "number") return;
	try {
		await params.bot.api.pinChatMessage(params.chatId, params.firstDeliveredMessageId, { disable_notification: true });
	} catch (err) {
		logVerbose(`telegram pinChatMessage failed chat=${params.chatId} message=${params.firstDeliveredMessageId}: ${formatErrorMessage(err)}`);
	}
}
function buildTelegramSentHookContext(params) {
	return buildCanonicalSentMessageHookContext({
		to: params.chatId,
		content: params.content,
		success: params.success,
		error: params.error,
		channelId: "telegram",
		accountId: params.accountId,
		conversationId: params.chatId,
		messageId: typeof params.messageId === "number" ? String(params.messageId) : void 0,
		isGroup: params.isGroup,
		groupId: params.groupId
	});
}
function emitInternalMessageSentHook(params) {
	if (!params.sessionKeyForInternalHooks) return;
	const canonical = buildTelegramSentHookContext(params);
	fireAndForgetHook(triggerInternalHook(createInternalHookEvent("message", "sent", params.sessionKeyForInternalHooks, toInternalMessageSentContext(canonical))), "telegram: message:sent internal hook failed");
}
function emitMessageSentHooks(params) {
	if (!params.enabled && !params.sessionKeyForInternalHooks) return;
	const canonical = buildTelegramSentHookContext(params);
	if (params.enabled) fireAndForgetHook(Promise.resolve(params.hookRunner.runMessageSent(toPluginMessageSentEvent(canonical), toPluginMessageContext(canonical))), "telegram: message_sent plugin hook failed");
	emitInternalMessageSentHook(params);
}
async function deliverReplies(params) {
	const progress = {
		hasReplied: false,
		hasDelivered: false,
		deliveredCount: 0
	};
	const mediaLoader = params.mediaLoader ?? loadWebMedia;
	const hookRunner = getGlobalHookRunner();
	const hasMessageSendingHooks = hookRunner?.hasHooks("message_sending") ?? false;
	const hasMessageSentHooks = hookRunner?.hasHooks("message_sent") ?? false;
	const chunkText = buildChunkTextResolver({
		textLimit: params.textLimit,
		chunkMode: params.chunkMode ?? "length",
		tableMode: params.tableMode
	});
	for (const originalReply of params.replies) {
		let reply = originalReply;
		const mediaList = reply?.mediaUrls?.length ? reply.mediaUrls : reply?.mediaUrl ? [reply.mediaUrl] : [];
		const hasMedia = mediaList.length > 0;
		if (!reply?.text && !hasMedia) {
			if (reply?.audioAsVoice) {
				logVerbose("telegram reply has audioAsVoice without media/text; skipping");
				continue;
			}
			params.runtime.error?.(danger("reply missing text/media"));
			continue;
		}
		const rawContent = reply.text || "";
		if (hasMessageSendingHooks) {
			const hookResult = await hookRunner?.runMessageSending({
				to: params.chatId,
				content: rawContent,
				metadata: {
					channel: "telegram",
					mediaUrls: mediaList,
					threadId: params.thread?.id
				}
			}, {
				channelId: "telegram",
				accountId: params.accountId,
				conversationId: params.chatId
			});
			if (hookResult?.cancel) continue;
			if (typeof hookResult?.content === "string" && hookResult.content !== rawContent) reply = {
				...reply,
				text: hookResult.content
			};
		}
		const contentForSentHook = reply.text || "";
		try {
			const deliveredCountBeforeReply = progress.deliveredCount;
			const replyToId = params.replyToMode === "off" ? void 0 : resolveTelegramReplyId(reply.replyToId);
			const telegramData = reply.channelData?.telegram;
			const shouldPinFirstMessage = telegramData?.pin === true;
			const replyMarkup = buildInlineKeyboard(telegramData?.buttons);
			let firstDeliveredMessageId;
			if (mediaList.length === 0) firstDeliveredMessageId = await deliverTextReply({
				bot: params.bot,
				chatId: params.chatId,
				runtime: params.runtime,
				thread: params.thread,
				chunkText,
				replyText: reply.text || "",
				replyMarkup,
				replyQuoteText: params.replyQuoteText,
				linkPreview: params.linkPreview,
				silent: params.silent,
				replyToId,
				replyToMode: params.replyToMode,
				progress
			});
			else firstDeliveredMessageId = await deliverMediaReply({
				reply,
				mediaList,
				bot: params.bot,
				chatId: params.chatId,
				runtime: params.runtime,
				thread: params.thread,
				tableMode: params.tableMode,
				mediaLocalRoots: params.mediaLocalRoots,
				chunkText,
				mediaLoader,
				onVoiceRecording: params.onVoiceRecording,
				linkPreview: params.linkPreview,
				silent: params.silent,
				replyQuoteText: params.replyQuoteText,
				replyMarkup,
				replyToId,
				replyToMode: params.replyToMode,
				progress
			});
			await maybePinFirstDeliveredMessage({
				shouldPin: shouldPinFirstMessage,
				bot: params.bot,
				chatId: params.chatId,
				runtime: params.runtime,
				firstDeliveredMessageId
			});
			emitMessageSentHooks({
				hookRunner,
				enabled: hasMessageSentHooks,
				sessionKeyForInternalHooks: params.sessionKeyForInternalHooks,
				chatId: params.chatId,
				accountId: params.accountId,
				content: contentForSentHook,
				success: progress.deliveredCount > deliveredCountBeforeReply,
				messageId: firstDeliveredMessageId,
				isGroup: params.mirrorIsGroup,
				groupId: params.mirrorGroupId
			});
		} catch (error) {
			emitMessageSentHooks({
				hookRunner,
				enabled: hasMessageSentHooks,
				sessionKeyForInternalHooks: params.sessionKeyForInternalHooks,
				chatId: params.chatId,
				accountId: params.accountId,
				content: contentForSentHook,
				success: false,
				error: error instanceof Error ? error.message : String(error),
				isGroup: params.mirrorIsGroup,
				groupId: params.mirrorGroupId
			});
			throw error;
		}
	}
	return { delivered: progress.hasDelivered };
}
//#endregion
//#region extensions/telegram/src/bot/delivery.resolve-media.ts
const FILE_TOO_BIG_RE = /file is too big/i;
function buildTelegramMediaSsrfPolicy(apiRoot) {
	const hostnames = ["api.telegram.org"];
	if (apiRoot) try {
		const customHost = new URL(apiRoot).hostname;
		if (customHost && !hostnames.includes(customHost)) hostnames.push(customHost);
	} catch {}
	return {
		allowedHostnames: hostnames,
		allowRfc2544BenchmarkRange: true
	};
}
/**
* Returns true if the error is Telegram's "file is too big" error.
* This happens when trying to download files >20MB via the Bot API.
* Unlike network errors, this is a permanent error and should not be retried.
*/
function isFileTooBigError(err) {
	if (err instanceof import_out$1.GrammyError) return FILE_TOO_BIG_RE.test(err.description);
	return FILE_TOO_BIG_RE.test(formatErrorMessage(err));
}
/**
* Returns true if the error is a transient network error that should be retried.
* Returns false for permanent errors like "file is too big" (400 Bad Request).
*/
function isRetryableGetFileError(err) {
	if (isFileTooBigError(err)) return false;
	return true;
}
function resolveMediaFileRef(msg) {
	return msg.photo?.[msg.photo.length - 1] ?? msg.video ?? msg.video_note ?? msg.document ?? msg.audio ?? msg.voice;
}
function resolveTelegramFileName(msg) {
	return msg.document?.file_name ?? msg.audio?.file_name ?? msg.video?.file_name ?? msg.animation?.file_name;
}
async function resolveTelegramFileWithRetry(ctx) {
	try {
		return await retryAsync(() => ctx.getFile(), {
			attempts: 3,
			minDelayMs: 1e3,
			maxDelayMs: 4e3,
			jitter: .2,
			label: "telegram:getFile",
			shouldRetry: isRetryableGetFileError,
			onRetry: ({ attempt, maxAttempts }) => logVerbose(`telegram: getFile retry ${attempt}/${maxAttempts}`)
		});
	} catch (err) {
		if (isFileTooBigError(err)) {
			logVerbose(warn("telegram: getFile failed - file exceeds Telegram Bot API 20MB limit; skipping attachment"));
			return null;
		}
		logVerbose(`telegram: getFile failed after retries: ${String(err)}`);
		return null;
	}
}
function resolveRequiredTelegramTransport(transport) {
	if (transport) return transport;
	const resolvedFetch = globalThis.fetch;
	if (!resolvedFetch) throw new Error("fetch is not available; set channels.telegram.proxy in config");
	return {
		fetch: resolvedFetch,
		sourceFetch: resolvedFetch
	};
}
function resolveOptionalTelegramTransport(transport) {
	try {
		return resolveRequiredTelegramTransport(transport);
	} catch {
		return null;
	}
}
/** Default idle timeout for Telegram media downloads (30 seconds). */
const TELEGRAM_DOWNLOAD_IDLE_TIMEOUT_MS = 3e4;
async function downloadAndSaveTelegramFile(params) {
	if (path.isAbsolute(params.filePath)) return {
		path: params.filePath,
		contentType: void 0
	};
	const fetched = await fetchRemoteMedia({
		url: `${resolveTelegramApiBase(params.apiRoot)}/file/bot${params.token}/${params.filePath}`,
		fetchImpl: params.transport.sourceFetch,
		dispatcherAttempts: params.transport.dispatcherAttempts,
		shouldRetryFetchError: shouldRetryTelegramTransportFallback,
		filePathHint: params.filePath,
		maxBytes: params.maxBytes,
		readIdleTimeoutMs: TELEGRAM_DOWNLOAD_IDLE_TIMEOUT_MS,
		ssrfPolicy: buildTelegramMediaSsrfPolicy(params.apiRoot)
	});
	const originalName = params.telegramFileName ?? fetched.fileName ?? params.filePath;
	return saveMediaBuffer(fetched.buffer, fetched.contentType, "inbound", params.maxBytes, originalName);
}
async function resolveStickerMedia(params) {
	const { msg, ctx, maxBytes, token, transport } = params;
	if (!msg.sticker) return;
	const sticker = msg.sticker;
	if (sticker.is_animated || sticker.is_video) {
		logVerbose("telegram: skipping animated/video sticker (only static stickers supported)");
		return null;
	}
	if (!sticker.file_id) return null;
	try {
		const file = await resolveTelegramFileWithRetry(ctx);
		if (!file?.file_path) {
			logVerbose("telegram: getFile returned no file_path for sticker");
			return null;
		}
		const resolvedTransport = resolveOptionalTelegramTransport(transport);
		if (!resolvedTransport) {
			logVerbose("telegram: fetch not available for sticker download");
			return null;
		}
		const saved = await downloadAndSaveTelegramFile({
			filePath: file.file_path,
			token,
			transport: resolvedTransport,
			maxBytes,
			apiRoot: params.apiRoot
		});
		const cached = sticker.file_unique_id ? getCachedSticker(sticker.file_unique_id) : null;
		if (cached) {
			logVerbose(`telegram: sticker cache hit for ${sticker.file_unique_id}`);
			const fileId = sticker.file_id ?? cached.fileId;
			const emoji = sticker.emoji ?? cached.emoji;
			const setName = sticker.set_name ?? cached.setName;
			if (fileId !== cached.fileId || emoji !== cached.emoji || setName !== cached.setName) cacheSticker({
				...cached,
				fileId,
				emoji,
				setName
			});
			return {
				path: saved.path,
				contentType: saved.contentType,
				placeholder: "<media:sticker>",
				stickerMetadata: {
					emoji,
					setName,
					fileId,
					fileUniqueId: sticker.file_unique_id,
					cachedDescription: cached.description
				}
			};
		}
		return {
			path: saved.path,
			contentType: saved.contentType,
			placeholder: "<media:sticker>",
			stickerMetadata: {
				emoji: sticker.emoji ?? void 0,
				setName: sticker.set_name ?? void 0,
				fileId: sticker.file_id,
				fileUniqueId: sticker.file_unique_id
			}
		};
	} catch (err) {
		logVerbose(`telegram: failed to process sticker: ${String(err)}`);
		return null;
	}
}
async function resolveMedia(ctx, maxBytes, token, transport, apiRoot) {
	const msg = ctx.message;
	const stickerResolved = await resolveStickerMedia({
		msg,
		ctx,
		maxBytes,
		token,
		transport,
		apiRoot
	});
	if (stickerResolved !== void 0) return stickerResolved;
	if (!resolveMediaFileRef(msg)?.file_id) return null;
	const file = await resolveTelegramFileWithRetry(ctx);
	if (!file) return null;
	if (!file.file_path) throw new Error("Telegram getFile returned no file_path");
	const saved = await downloadAndSaveTelegramFile({
		filePath: file.file_path,
		token,
		transport: resolveRequiredTelegramTransport(transport),
		maxBytes,
		telegramFileName: resolveTelegramFileName(msg),
		apiRoot
	});
	const placeholder = resolveTelegramMediaPlaceholder(msg) ?? "<media:document>";
	return {
		path: saved.path,
		contentType: saved.contentType,
		placeholder
	};
}
//#endregion
//#region extensions/telegram/src/conversation-route.ts
function resolveTelegramConversationRoute(params) {
	const peerId = params.isGroup ? buildTelegramGroupPeerId(params.chatId, params.resolvedThreadId) : resolveTelegramDirectPeerId({
		chatId: params.chatId,
		senderId: params.senderId
	});
	const parentPeer = buildTelegramParentPeer({
		isGroup: params.isGroup,
		resolvedThreadId: params.resolvedThreadId,
		chatId: params.chatId
	});
	let route = resolveAgentRoute({
		cfg: params.cfg,
		channel: "telegram",
		accountId: params.accountId,
		peer: {
			kind: params.isGroup ? "group" : "direct",
			id: peerId
		},
		parentPeer
	});
	const rawTopicAgentId = params.topicAgentId?.trim();
	if (rawTopicAgentId) {
		const topicAgentId = sanitizeAgentId(rawTopicAgentId);
		route = {
			...route,
			agentId: topicAgentId,
			sessionKey: buildAgentSessionKey({
				agentId: topicAgentId,
				channel: "telegram",
				accountId: params.accountId,
				peer: {
					kind: params.isGroup ? "group" : "direct",
					id: peerId
				},
				dmScope: params.cfg.session?.dmScope,
				identityLinks: params.cfg.session?.identityLinks
			}).toLowerCase(),
			mainSessionKey: buildAgentMainSessionKey({ agentId: topicAgentId }).toLowerCase(),
			lastRoutePolicy: deriveLastRoutePolicy({
				sessionKey: buildAgentSessionKey({
					agentId: topicAgentId,
					channel: "telegram",
					accountId: params.accountId,
					peer: {
						kind: params.isGroup ? "group" : "direct",
						id: peerId
					},
					dmScope: params.cfg.session?.dmScope,
					identityLinks: params.cfg.session?.identityLinks
				}).toLowerCase(),
				mainSessionKey: buildAgentMainSessionKey({ agentId: topicAgentId }).toLowerCase()
			})
		};
		logVerbose(`telegram: topic route override: topic=${params.resolvedThreadId ?? params.replyThreadId} agent=${topicAgentId} sessionKey=${route.sessionKey}`);
	}
	const configuredRoute = resolveConfiguredBindingRoute({
		cfg: params.cfg,
		route,
		conversation: {
			channel: "telegram",
			accountId: params.accountId,
			conversationId: peerId,
			parentConversationId: params.isGroup ? String(params.chatId) : void 0
		}
	});
	let configuredBinding = configuredRoute.bindingResolution;
	let configuredBindingSessionKey = configuredRoute.boundSessionKey ?? "";
	route = configuredRoute.route;
	const threadBindingConversationId = params.replyThreadId != null ? `${params.chatId}:topic:${params.replyThreadId}` : !params.isGroup ? String(params.chatId) : void 0;
	if (threadBindingConversationId) {
		const threadBinding = getSessionBindingService().resolveByConversation({
			channel: "telegram",
			accountId: params.accountId,
			conversationId: threadBindingConversationId
		});
		const boundSessionKey = threadBinding?.targetSessionKey?.trim();
		if (threadBinding && boundSessionKey) {
			if (!isPluginOwnedSessionBindingRecord(threadBinding)) route = {
				...route,
				sessionKey: boundSessionKey,
				agentId: resolveAgentIdFromSessionKey(boundSessionKey),
				lastRoutePolicy: deriveLastRoutePolicy({
					sessionKey: boundSessionKey,
					mainSessionKey: route.mainSessionKey
				}),
				matchedBy: "binding.channel"
			};
			configuredBinding = null;
			configuredBindingSessionKey = "";
			getSessionBindingService().touch(threadBinding.bindingId);
			logVerbose(isPluginOwnedSessionBindingRecord(threadBinding) ? `telegram: plugin-bound conversation ${threadBindingConversationId}` : `telegram: routed via bound conversation ${threadBindingConversationId} -> ${boundSessionKey}`);
		}
	}
	return {
		route,
		configuredBinding,
		configuredBindingSessionKey
	};
}
function resolveTelegramConversationBaseSessionKey(params) {
	if (!(params.route.accountId !== "default" && params.route.matchedBy === "default") || params.isGroup) return params.route.sessionKey;
	return buildAgentSessionKey({
		agentId: params.route.agentId,
		channel: "telegram",
		accountId: params.route.accountId,
		peer: {
			kind: "direct",
			id: resolveTelegramDirectPeerId({
				chatId: params.chatId,
				senderId: params.senderId
			})
		},
		dmScope: "per-account-channel-peer",
		identityLinks: params.cfg.session?.identityLinks
	}).toLowerCase();
}
//#endregion
//#region extensions/telegram/src/dm-access.ts
function resolveTelegramSenderIdentity(msg, chatId) {
	const from = msg.from;
	const userId = from?.id != null ? String(from.id) : null;
	return {
		username: from?.username ?? "",
		userId,
		candidateId: userId ?? String(chatId),
		firstName: from?.first_name,
		lastName: from?.last_name
	};
}
async function enforceTelegramDmAccess(params) {
	const { isGroup, dmPolicy, msg, chatId, effectiveDmAllow, accountId, bot, logger, upsertPairingRequest } = params;
	if (isGroup) return true;
	if (dmPolicy === "disabled") return false;
	if (dmPolicy === "open") return true;
	const sender = resolveTelegramSenderIdentity(msg, chatId);
	const allowMatch = resolveSenderAllowMatch({
		allow: effectiveDmAllow,
		senderId: sender.candidateId,
		senderUsername: sender.username
	});
	const allowMatchMeta = `matchKey=${allowMatch.matchKey ?? "none"} matchSource=${allowMatch.matchSource ?? "none"}`;
	if (effectiveDmAllow.hasWildcard || effectiveDmAllow.hasEntries && allowMatch.allowed) return true;
	if (dmPolicy === "pairing") {
		try {
			const telegramUserId = sender.userId ?? sender.candidateId;
			await createChannelPairingChallengeIssuer({
				channel: "telegram",
				upsertPairingRequest: async ({ id, meta }) => await (upsertPairingRequest ?? upsertChannelPairingRequest)({
					channel: "telegram",
					id,
					accountId,
					meta
				})
			})({
				senderId: telegramUserId,
				senderIdLine: `Your Telegram user id: ${telegramUserId}`,
				meta: {
					username: sender.username || void 0,
					firstName: sender.firstName,
					lastName: sender.lastName
				},
				onCreated: () => {
					logger.info({
						chatId: String(chatId),
						senderUserId: sender.userId ?? void 0,
						username: sender.username || void 0,
						firstName: sender.firstName,
						lastName: sender.lastName,
						matchKey: allowMatch.matchKey ?? "none",
						matchSource: allowMatch.matchSource ?? "none"
					}, "telegram pairing request");
				},
				sendPairingReply: async (text) => {
					await withTelegramApiErrorLogging({
						operation: "sendMessage",
						fn: () => bot.api.sendMessage(chatId, text)
					});
				},
				onReplyError: (err) => {
					logVerbose(`telegram pairing reply failed for chat ${chatId}: ${String(err)}`);
				}
			});
		} catch (err) {
			logVerbose(`telegram pairing reply failed for chat ${chatId}: ${String(err)}`);
		}
		return false;
	}
	logVerbose(`Blocked unauthorized telegram sender ${sender.candidateId} (dmPolicy=${dmPolicy}, ${allowMatchMeta})`);
	return false;
}
//#endregion
//#region extensions/telegram/src/group-access.ts
function isGroupAllowOverrideAuthorized(params) {
	if (!params.effectiveGroupAllow.hasEntries) return false;
	const senderId = params.senderId ?? "";
	if (params.requireSenderForAllowOverride && !senderId) return false;
	return isSenderAllowed({
		allow: params.effectiveGroupAllow,
		senderId,
		senderUsername: params.senderUsername ?? ""
	});
}
const evaluateTelegramGroupBaseAccess = (params) => {
	if (params.groupConfig?.enabled === false) return {
		allowed: false,
		reason: "group-disabled"
	};
	if (params.topicConfig?.enabled === false) return {
		allowed: false,
		reason: "topic-disabled"
	};
	if (!params.isGroup) {
		if (params.enforceAllowOverride && params.hasGroupAllowOverride) {
			if (!isGroupAllowOverrideAuthorized({
				effectiveGroupAllow: params.effectiveGroupAllow,
				senderId: params.senderId,
				senderUsername: params.senderUsername,
				requireSenderForAllowOverride: params.requireSenderForAllowOverride
			})) return {
				allowed: false,
				reason: "group-override-unauthorized"
			};
		}
		return { allowed: true };
	}
	if (!params.enforceAllowOverride || !params.hasGroupAllowOverride) return { allowed: true };
	if (!isGroupAllowOverrideAuthorized({
		effectiveGroupAllow: params.effectiveGroupAllow,
		senderId: params.senderId,
		senderUsername: params.senderUsername,
		requireSenderForAllowOverride: params.requireSenderForAllowOverride
	})) return {
		allowed: false,
		reason: "group-override-unauthorized"
	};
	return { allowed: true };
};
const resolveTelegramRuntimeGroupPolicy = (params) => resolveOpenProviderRuntimeGroupPolicy({
	providerConfigPresent: params.providerConfigPresent,
	groupPolicy: params.groupPolicy,
	defaultGroupPolicy: params.defaultGroupPolicy
});
const evaluateTelegramGroupPolicyAccess = (params) => {
	const { groupPolicy: runtimeFallbackPolicy } = resolveTelegramRuntimeGroupPolicy({
		providerConfigPresent: params.cfg.channels?.telegram !== void 0,
		groupPolicy: params.telegramCfg.groupPolicy,
		defaultGroupPolicy: params.cfg.channels?.defaults?.groupPolicy
	});
	const fallbackPolicy = firstDefined(params.telegramCfg.groupPolicy, params.cfg.channels?.defaults?.groupPolicy) ?? runtimeFallbackPolicy;
	const groupPolicy = params.useTopicAndGroupOverrides ? firstDefined(params.topicConfig?.groupPolicy, params.groupConfig?.groupPolicy, params.telegramCfg.groupPolicy, params.cfg.channels?.defaults?.groupPolicy) ?? runtimeFallbackPolicy : fallbackPolicy;
	if (!params.isGroup || !params.enforcePolicy) return {
		allowed: true,
		groupPolicy
	};
	if (groupPolicy === "disabled") return {
		allowed: false,
		reason: "group-policy-disabled",
		groupPolicy
	};
	let chatExplicitlyAllowed = false;
	if (params.checkChatAllowlist) {
		const groupAllowlist = params.resolveGroupPolicy(params.chatId);
		if (groupAllowlist.allowlistEnabled && !groupAllowlist.allowed) return {
			allowed: false,
			reason: "group-chat-not-allowed",
			groupPolicy
		};
		if (groupAllowlist.allowlistEnabled && groupAllowlist.allowed && groupAllowlist.groupConfig) chatExplicitlyAllowed = true;
	}
	if (groupPolicy === "allowlist" && params.enforceAllowlistAuthorization) {
		const senderId = params.senderId ?? "";
		const senderAuthorization = evaluateMatchedGroupAccessForPolicy({
			groupPolicy,
			requireMatchInput: params.requireSenderForAllowlistAuthorization,
			hasMatchInput: Boolean(senderId),
			allowlistConfigured: chatExplicitlyAllowed || params.allowEmptyAllowlistEntries || params.effectiveGroupAllow.hasEntries,
			allowlistMatched: chatExplicitlyAllowed && !params.effectiveGroupAllow.hasEntries || isSenderAllowed({
				allow: params.effectiveGroupAllow,
				senderId,
				senderUsername: params.senderUsername ?? ""
			})
		});
		if (!senderAuthorization.allowed && senderAuthorization.reason === "missing_match_input") return {
			allowed: false,
			reason: "group-policy-allowlist-no-sender",
			groupPolicy
		};
		if (!senderAuthorization.allowed && senderAuthorization.reason === "empty_allowlist") return {
			allowed: false,
			reason: "group-policy-allowlist-empty",
			groupPolicy
		};
		if (!senderAuthorization.allowed && senderAuthorization.reason === "not_allowlisted") return {
			allowed: false,
			reason: "group-policy-allowlist-unauthorized",
			groupPolicy
		};
	}
	return {
		allowed: true,
		groupPolicy
	};
};
//#endregion
//#region extensions/telegram/src/group-migration.ts
function resolveAccountGroups(cfg, accountId) {
	if (!accountId) return {};
	const normalized = normalizeAccountId(accountId);
	const accounts = cfg.channels?.telegram?.accounts;
	if (!accounts || typeof accounts !== "object") return {};
	const exact = accounts[normalized];
	if (exact?.groups) return { groups: exact.groups };
	const matchKey = Object.keys(accounts).find((key) => key.toLowerCase() === normalized.toLowerCase());
	return { groups: matchKey ? accounts[matchKey]?.groups : void 0 };
}
function migrateTelegramGroupsInPlace(groups, oldChatId, newChatId) {
	if (!groups) return {
		migrated: false,
		skippedExisting: false
	};
	if (oldChatId === newChatId) return {
		migrated: false,
		skippedExisting: false
	};
	if (!Object.hasOwn(groups, oldChatId)) return {
		migrated: false,
		skippedExisting: false
	};
	if (Object.hasOwn(groups, newChatId)) return {
		migrated: false,
		skippedExisting: true
	};
	groups[newChatId] = groups[oldChatId];
	delete groups[oldChatId];
	return {
		migrated: true,
		skippedExisting: false
	};
}
function migrateTelegramGroupConfig(params) {
	const scopes = [];
	let migrated = false;
	let skippedExisting = false;
	const migrationTargets = [{
		scope: "account",
		groups: resolveAccountGroups(params.cfg, params.accountId).groups
	}, {
		scope: "global",
		groups: params.cfg.channels?.telegram?.groups
	}];
	for (const target of migrationTargets) {
		const result = migrateTelegramGroupsInPlace(target.groups, params.oldChatId, params.newChatId);
		if (result.migrated) {
			migrated = true;
			scopes.push(target.scope);
		}
		if (result.skippedExisting) skippedExisting = true;
	}
	return {
		migrated,
		skippedExisting,
		scopes
	};
}
//#endregion
//#region extensions/telegram/src/bot-handlers.runtime.ts
const registerTelegramHandlers = ({ cfg, accountId, bot, opts, telegramTransport, runtime, mediaMaxBytes, telegramCfg, allowFrom, groupAllowFrom, resolveGroupPolicy, resolveTelegramGroupConfig, shouldSkipUpdate, processMessage, logger, telegramDeps = defaultTelegramBotDeps }) => {
	const DEFAULT_TEXT_FRAGMENT_MAX_GAP_MS = 1500;
	const TELEGRAM_TEXT_FRAGMENT_START_THRESHOLD_CHARS = 4e3;
	const TELEGRAM_TEXT_FRAGMENT_MAX_GAP_MS = typeof opts.testTimings?.textFragmentGapMs === "number" && Number.isFinite(opts.testTimings.textFragmentGapMs) ? Math.max(10, Math.floor(opts.testTimings.textFragmentGapMs)) : DEFAULT_TEXT_FRAGMENT_MAX_GAP_MS;
	const TELEGRAM_TEXT_FRAGMENT_MAX_ID_GAP = 1;
	const TELEGRAM_TEXT_FRAGMENT_MAX_PARTS = 12;
	const TELEGRAM_TEXT_FRAGMENT_MAX_TOTAL_CHARS = 5e4;
	const mediaGroupTimeoutMs = typeof opts.testTimings?.mediaGroupFlushMs === "number" && Number.isFinite(opts.testTimings.mediaGroupFlushMs) ? Math.max(10, Math.floor(opts.testTimings.mediaGroupFlushMs)) : 500;
	const mediaGroupBuffer = /* @__PURE__ */ new Map();
	let mediaGroupProcessing = Promise.resolve();
	const textFragmentBuffer = /* @__PURE__ */ new Map();
	let textFragmentProcessing = Promise.resolve();
	const debounceMs = resolveInboundDebounceMs({
		cfg,
		channel: "telegram"
	});
	const FORWARD_BURST_DEBOUNCE_MS = 80;
	const resolveTelegramDebounceLane = (msg) => {
		const forwardMeta = msg;
		return forwardMeta.forward_origin ?? forwardMeta.forward_from ?? forwardMeta.forward_from_chat ?? forwardMeta.forward_sender_name ?? forwardMeta.forward_date ? "forward" : "default";
	};
	const buildSyntheticTextMessage = (params) => ({
		...params.base,
		...params.from ? { from: params.from } : {},
		text: params.text,
		caption: void 0,
		caption_entities: void 0,
		entities: void 0,
		...params.date != null ? { date: params.date } : {}
	});
	const buildSyntheticContext = (ctx, message) => {
		const getFile = typeof ctx.getFile === "function" ? ctx.getFile.bind(ctx) : async () => ({});
		return {
			message,
			me: ctx.me,
			getFile
		};
	};
	const inboundDebouncer = createInboundDebouncer({
		debounceMs,
		resolveDebounceMs: (entry) => entry.debounceLane === "forward" ? FORWARD_BURST_DEBOUNCE_MS : debounceMs,
		buildKey: (entry) => entry.debounceKey,
		shouldDebounce: (entry) => {
			const hasDebounceableText = shouldDebounceTextInbound({
				text: entry.msg.text ?? entry.msg.caption ?? "",
				cfg,
				commandOptions: { botUsername: entry.botUsername }
			});
			if (entry.debounceLane === "forward") return hasDebounceableText || entry.allMedia.length > 0;
			if (!hasDebounceableText) return false;
			return entry.allMedia.length === 0;
		},
		onFlush: async (entries) => {
			const last = entries.at(-1);
			if (!last) return;
			if (entries.length === 1) {
				const replyMedia = await resolveReplyMediaForMessage(last.ctx, last.msg);
				await processMessage(last.ctx, last.allMedia, last.storeAllowFrom, {
					receivedAtMs: last.receivedAtMs,
					ingressBuffer: "inbound-debounce"
				}, replyMedia);
				return;
			}
			const combinedText = entries.map((entry) => entry.msg.text ?? entry.msg.caption ?? "").filter(Boolean).join("\n");
			const combinedMedia = entries.flatMap((entry) => entry.allMedia);
			if (!combinedText.trim() && combinedMedia.length === 0) return;
			const first = entries[0];
			const baseCtx = first.ctx;
			const syntheticMessage = buildSyntheticTextMessage({
				base: first.msg,
				text: combinedText,
				date: last.msg.date ?? first.msg.date
			});
			const messageIdOverride = last.msg.message_id ? String(last.msg.message_id) : void 0;
			const syntheticCtx = buildSyntheticContext(baseCtx, syntheticMessage);
			const replyMedia = await resolveReplyMediaForMessage(baseCtx, syntheticMessage);
			await processMessage(syntheticCtx, combinedMedia, first.storeAllowFrom, {
				...messageIdOverride ? { messageIdOverride } : {},
				receivedAtMs: first.receivedAtMs,
				ingressBuffer: "inbound-debounce"
			}, replyMedia);
		},
		onError: (err, items) => {
			runtime.error?.(danger(`telegram debounce flush failed: ${String(err)}`));
			const chatId = items[0]?.msg.chat.id;
			if (chatId != null) {
				const threadId = items[0]?.msg.message_thread_id;
				bot.api.sendMessage(chatId, "Something went wrong while processing your message. Please try again.", threadId != null ? { message_thread_id: threadId } : void 0).catch((sendErr) => {
					logVerbose(`telegram: error fallback send failed: ${String(sendErr)}`);
				});
			}
		}
	});
	const resolveTelegramSessionState = (params) => {
		const runtimeCfg = telegramDeps.loadConfig();
		const resolvedThreadId = params.resolvedThreadId ?? resolveTelegramForumThreadId({
			isForum: params.isForum,
			messageThreadId: params.messageThreadId
		});
		const dmThreadId = !params.isGroup ? params.messageThreadId : void 0;
		const topicThreadId = resolvedThreadId ?? dmThreadId;
		const { topicConfig } = resolveTelegramGroupConfig(params.chatId, topicThreadId);
		const { route } = resolveTelegramConversationRoute({
			cfg: runtimeCfg,
			accountId,
			chatId: params.chatId,
			isGroup: params.isGroup,
			resolvedThreadId,
			replyThreadId: topicThreadId,
			senderId: params.senderId,
			topicAgentId: topicConfig?.agentId
		});
		const baseSessionKey = resolveTelegramConversationBaseSessionKey({
			cfg: runtimeCfg,
			route,
			chatId: params.chatId,
			isGroup: params.isGroup,
			senderId: params.senderId
		});
		const sessionKey = (dmThreadId != null ? resolveThreadSessionKeys({
			baseSessionKey,
			threadId: `${params.chatId}:${dmThreadId}`
		}) : null)?.sessionKey ?? baseSessionKey;
		const store = loadSessionStore(telegramDeps.resolveStorePath(runtimeCfg.session?.store, { agentId: route.agentId }));
		const entry = resolveSessionStoreEntry({
			store,
			sessionKey
		}).existing;
		const storedOverride = resolveStoredModelOverride({
			sessionEntry: entry,
			sessionStore: store,
			sessionKey
		});
		if (storedOverride) return {
			agentId: route.agentId,
			sessionEntry: entry,
			sessionKey,
			model: storedOverride.provider ? `${storedOverride.provider}/${storedOverride.model}` : storedOverride.model
		};
		const provider = entry?.modelProvider?.trim();
		const model = entry?.model?.trim();
		if (provider && model) return {
			agentId: route.agentId,
			sessionEntry: entry,
			sessionKey,
			model: `${provider}/${model}`
		};
		const modelCfg = runtimeCfg.agents?.defaults?.model;
		return {
			agentId: route.agentId,
			sessionEntry: entry,
			sessionKey,
			model: typeof modelCfg === "string" ? modelCfg : modelCfg?.primary
		};
	};
	const processMediaGroup = async (entry) => {
		try {
			entry.messages.sort((a, b) => a.msg.message_id - b.msg.message_id);
			const primaryEntry = entry.messages.find((m) => m.msg.caption || m.msg.text) ?? entry.messages[0];
			const allMedia = [];
			for (const { ctx } of entry.messages) {
				let media;
				try {
					media = await resolveMedia(ctx, mediaMaxBytes, opts.token, telegramTransport, telegramCfg.apiRoot);
				} catch (mediaErr) {
					if (!isRecoverableMediaGroupError(mediaErr)) throw mediaErr;
					runtime.log?.(warn(`media group: skipping photo that failed to fetch: ${String(mediaErr)}`));
					continue;
				}
				if (media) allMedia.push({
					path: media.path,
					contentType: media.contentType,
					stickerMetadata: media.stickerMetadata
				});
			}
			const storeAllowFrom = await loadStoreAllowFrom();
			const replyMedia = await resolveReplyMediaForMessage(primaryEntry.ctx, primaryEntry.msg);
			await processMessage(primaryEntry.ctx, allMedia, storeAllowFrom, void 0, replyMedia);
		} catch (err) {
			runtime.error?.(danger(`media group handler failed: ${String(err)}`));
		}
	};
	const flushTextFragments = async (entry) => {
		try {
			entry.messages.sort((a, b) => a.msg.message_id - b.msg.message_id);
			const first = entry.messages[0];
			const last = entry.messages.at(-1);
			if (!first || !last) return;
			const combinedText = entry.messages.map((m) => m.msg.text ?? "").join("");
			if (!combinedText.trim()) return;
			const syntheticMessage = buildSyntheticTextMessage({
				base: first.msg,
				text: combinedText,
				date: last.msg.date ?? first.msg.date
			});
			const storeAllowFrom = await loadStoreAllowFrom();
			const baseCtx = first.ctx;
			await processMessage(buildSyntheticContext(baseCtx, syntheticMessage), [], storeAllowFrom, {
				messageIdOverride: String(last.msg.message_id),
				receivedAtMs: first.receivedAtMs,
				ingressBuffer: "text-fragment"
			});
		} catch (err) {
			runtime.error?.(danger(`text fragment handler failed: ${String(err)}`));
		}
	};
	const queueTextFragmentFlush = async (entry) => {
		textFragmentProcessing = textFragmentProcessing.then(async () => {
			await flushTextFragments(entry);
		}).catch(() => void 0);
		await textFragmentProcessing;
	};
	const runTextFragmentFlush = async (entry) => {
		textFragmentBuffer.delete(entry.key);
		await queueTextFragmentFlush(entry);
	};
	const scheduleTextFragmentFlush = (entry) => {
		clearTimeout(entry.timer);
		entry.timer = setTimeout(async () => {
			await runTextFragmentFlush(entry);
		}, TELEGRAM_TEXT_FRAGMENT_MAX_GAP_MS);
	};
	const loadStoreAllowFrom = async () => telegramDeps.readChannelAllowFromStore("telegram", process.env, accountId).catch(() => []);
	const resolveReplyMediaForMessage = async (ctx, msg) => {
		const replyMessage = msg.reply_to_message;
		if (!replyMessage || !hasInboundMedia(replyMessage)) return [];
		const replyFileId = resolveInboundMediaFileId(replyMessage);
		if (!replyFileId) return [];
		try {
			const media = await resolveMedia({
				message: replyMessage,
				me: ctx.me,
				getFile: async () => await bot.api.getFile(replyFileId)
			}, mediaMaxBytes, opts.token, telegramTransport, telegramCfg.apiRoot);
			if (!media) return [];
			return [{
				path: media.path,
				contentType: media.contentType,
				stickerMetadata: media.stickerMetadata
			}];
		} catch (err) {
			logger.warn({
				chatId: msg.chat.id,
				error: String(err)
			}, "reply media fetch failed");
			return [];
		}
	};
	const isAllowlistAuthorized = (allow, senderId, senderUsername) => allow.hasWildcard || allow.hasEntries && isSenderAllowed({
		allow,
		senderId,
		senderUsername
	});
	const shouldSkipGroupMessage = (params) => {
		const { isGroup, chatId, chatTitle, resolvedThreadId, senderId, senderUsername, effectiveGroupAllow, hasGroupAllowOverride, groupConfig, topicConfig } = params;
		const baseAccess = evaluateTelegramGroupBaseAccess({
			isGroup,
			groupConfig,
			topicConfig,
			hasGroupAllowOverride,
			effectiveGroupAllow,
			senderId,
			senderUsername,
			enforceAllowOverride: true,
			requireSenderForAllowOverride: true
		});
		if (!baseAccess.allowed) {
			if (baseAccess.reason === "group-disabled") {
				logVerbose(`Blocked telegram group ${chatId} (group disabled)`);
				return true;
			}
			if (baseAccess.reason === "topic-disabled") {
				logVerbose(`Blocked telegram topic ${chatId} (${resolvedThreadId ?? "unknown"}) (topic disabled)`);
				return true;
			}
			logVerbose(`Blocked telegram group sender ${senderId || "unknown"} (group allowFrom override)`);
			return true;
		}
		if (!isGroup) return false;
		const policyAccess = evaluateTelegramGroupPolicyAccess({
			isGroup,
			chatId,
			cfg,
			telegramCfg,
			topicConfig,
			groupConfig,
			effectiveGroupAllow,
			senderId,
			senderUsername,
			resolveGroupPolicy,
			enforcePolicy: true,
			useTopicAndGroupOverrides: true,
			enforceAllowlistAuthorization: true,
			allowEmptyAllowlistEntries: false,
			requireSenderForAllowlistAuthorization: true,
			checkChatAllowlist: true
		});
		if (!policyAccess.allowed) {
			if (policyAccess.reason === "group-policy-disabled") {
				logVerbose("Blocked telegram group message (groupPolicy: disabled)");
				return true;
			}
			if (policyAccess.reason === "group-policy-allowlist-no-sender") {
				logVerbose("Blocked telegram group message (no sender ID, groupPolicy: allowlist)");
				return true;
			}
			if (policyAccess.reason === "group-policy-allowlist-empty") {
				logVerbose("Blocked telegram group message (groupPolicy: allowlist, no group allowlist entries)");
				return true;
			}
			if (policyAccess.reason === "group-policy-allowlist-unauthorized") {
				logVerbose(`Blocked telegram group message from ${senderId} (groupPolicy: allowlist)`);
				return true;
			}
			logger.info({
				chatId,
				title: chatTitle,
				reason: "not-allowed"
			}, "skipping group message");
			return true;
		}
		return false;
	};
	const TELEGRAM_EVENT_AUTH_RULES = {
		reaction: {
			enforceDirectAuthorization: true,
			enforceGroupAllowlistAuthorization: false,
			deniedDmReason: "reaction unauthorized by dm policy/allowlist",
			deniedGroupReason: "reaction unauthorized by group allowlist"
		},
		"callback-scope": {
			enforceDirectAuthorization: false,
			enforceGroupAllowlistAuthorization: false,
			deniedDmReason: "callback unauthorized by inlineButtonsScope",
			deniedGroupReason: "callback unauthorized by inlineButtonsScope"
		},
		"callback-allowlist": {
			enforceDirectAuthorization: true,
			enforceGroupAllowlistAuthorization: false,
			deniedDmReason: "callback unauthorized by inlineButtonsScope allowlist",
			deniedGroupReason: "callback unauthorized by inlineButtonsScope allowlist"
		}
	};
	const resolveTelegramEventAuthorizationContext = async (params) => {
		const groupAllowContext = params.groupAllowContext ?? await resolveTelegramGroupAllowFromContext({
			chatId: params.chatId,
			accountId,
			isGroup: params.isGroup,
			isForum: params.isForum,
			messageThreadId: params.messageThreadId,
			groupAllowFrom,
			readChannelAllowFromStore: telegramDeps.readChannelAllowFromStore,
			resolveTelegramGroupConfig
		});
		return {
			dmPolicy: !params.isGroup && groupAllowContext.groupConfig && "dmPolicy" in groupAllowContext.groupConfig ? groupAllowContext.groupConfig.dmPolicy ?? telegramCfg.dmPolicy ?? "pairing" : telegramCfg.dmPolicy ?? "pairing",
			...groupAllowContext
		};
	};
	const authorizeTelegramEventSender = (params) => {
		const { chatId, chatTitle, isGroup, senderId, senderUsername, mode, context } = params;
		const { dmPolicy, resolvedThreadId, storeAllowFrom, groupConfig, topicConfig, groupAllowOverride, effectiveGroupAllow, hasGroupAllowOverride } = context;
		const { enforceDirectAuthorization, enforceGroupAllowlistAuthorization, deniedDmReason, deniedGroupReason } = TELEGRAM_EVENT_AUTH_RULES[mode];
		if (shouldSkipGroupMessage({
			isGroup,
			chatId,
			chatTitle,
			resolvedThreadId,
			senderId,
			senderUsername,
			effectiveGroupAllow,
			hasGroupAllowOverride,
			groupConfig,
			topicConfig
		})) return {
			allowed: false,
			reason: "group-policy"
		};
		if (!isGroup && enforceDirectAuthorization) {
			if (dmPolicy === "disabled") {
				logVerbose(`Blocked telegram direct event from ${senderId || "unknown"} (${deniedDmReason})`);
				return {
					allowed: false,
					reason: "direct-disabled"
				};
			}
			if (dmPolicy !== "open") {
				if (!isAllowlistAuthorized(normalizeDmAllowFromWithStore({
					allowFrom: groupAllowOverride ?? allowFrom,
					storeAllowFrom,
					dmPolicy
				}), senderId, senderUsername)) {
					logVerbose(`Blocked telegram direct sender ${senderId || "unknown"} (${deniedDmReason})`);
					return {
						allowed: false,
						reason: "direct-unauthorized"
					};
				}
			}
		}
		if (isGroup && enforceGroupAllowlistAuthorization) {
			if (!isAllowlistAuthorized(effectiveGroupAllow, senderId, senderUsername)) {
				logVerbose(`Blocked telegram group sender ${senderId || "unknown"} (${deniedGroupReason})`);
				return {
					allowed: false,
					reason: "group-unauthorized"
				};
			}
		}
		return { allowed: true };
	};
	bot.on("message_reaction", async (ctx) => {
		try {
			const reaction = ctx.messageReaction;
			if (!reaction) return;
			if (shouldSkipUpdate(ctx)) return;
			const chatId = reaction.chat.id;
			const messageId = reaction.message_id;
			const user = reaction.user;
			const senderId = user?.id != null ? String(user.id) : "";
			const senderUsername = user?.username ?? "";
			const isGroup = reaction.chat.type === "group" || reaction.chat.type === "supergroup";
			const isForum = reaction.chat.is_forum === true;
			const reactionMode = telegramCfg.reactionNotifications ?? "own";
			if (reactionMode === "off") return;
			if (user?.is_bot) return;
			if (reactionMode === "own" && !telegramDeps.wasSentByBot(chatId, messageId)) return;
			const eventAuthContext = await resolveTelegramEventAuthorizationContext({
				chatId,
				isGroup,
				isForum
			});
			if (!authorizeTelegramEventSender({
				chatId,
				chatTitle: reaction.chat.title,
				isGroup,
				senderId,
				senderUsername,
				mode: "reaction",
				context: eventAuthContext
			}).allowed) return;
			if (!isGroup) {
				if (eventAuthContext.groupConfig?.requireTopic === true) {
					logVerbose(`Blocked telegram reaction in DM ${chatId}: requireTopic=true but topic unknown for reactions`);
					return;
				}
			}
			const oldEmojis = new Set(reaction.old_reaction.filter((r) => r.type === "emoji").map((r) => r.emoji));
			const addedReactions = reaction.new_reaction.filter((r) => r.type === "emoji").filter((r) => !oldEmojis.has(r.emoji));
			if (addedReactions.length === 0) return;
			const senderName = user ? [user.first_name, user.last_name].filter(Boolean).join(" ").trim() || user.username : void 0;
			const senderUsernameLabel = user?.username ? `@${user.username}` : void 0;
			let senderLabel = senderName;
			if (senderName && senderUsernameLabel) senderLabel = `${senderName} (${senderUsernameLabel})`;
			else if (!senderName && senderUsernameLabel) senderLabel = senderUsernameLabel;
			if (!senderLabel && user?.id) senderLabel = `id:${user.id}`;
			senderLabel = senderLabel || "unknown";
			const resolvedThreadId = isForum ? resolveTelegramForumThreadId({
				isForum,
				messageThreadId: void 0
			}) : void 0;
			const peerId = isGroup ? buildTelegramGroupPeerId(chatId, resolvedThreadId) : String(chatId);
			const parentPeer = buildTelegramParentPeer({
				isGroup,
				resolvedThreadId,
				chatId
			});
			const sessionKey = resolveAgentRoute({
				cfg: telegramDeps.loadConfig(),
				channel: "telegram",
				accountId,
				peer: {
					kind: isGroup ? "group" : "direct",
					id: peerId
				},
				parentPeer
			}).sessionKey;
			for (const r of addedReactions) {
				const emoji = r.emoji;
				const text = `Telegram reaction added: ${emoji} by ${senderLabel} on msg ${messageId}`;
				telegramDeps.enqueueSystemEvent(text, {
					sessionKey,
					contextKey: `telegram:reaction:add:${chatId}:${messageId}:${user?.id ?? "anon"}:${emoji}`
				});
				logVerbose(`telegram: reaction event enqueued: ${text}`);
			}
		} catch (err) {
			runtime.error?.(danger(`telegram reaction handler failed: ${String(err)}`));
		}
	});
	const processInboundMessage = async (params) => {
		const { ctx, msg, chatId, resolvedThreadId, dmThreadId, storeAllowFrom, sendOversizeWarning, oversizeLogMessage } = params;
		const text = typeof msg.text === "string" ? msg.text : void 0;
		const isCommandLike = (text ?? "").trim().startsWith("/");
		if (text && !isCommandLike) {
			const nowMs = Date.now();
			const senderId = msg.from?.id != null ? String(msg.from.id) : "unknown";
			const key = `text:${chatId}:${resolvedThreadId ?? dmThreadId ?? "main"}:${senderId}`;
			const existing = textFragmentBuffer.get(key);
			if (existing) {
				const last = existing.messages.at(-1);
				const lastMsgId = last?.msg.message_id;
				const lastReceivedAtMs = last?.receivedAtMs ?? nowMs;
				const idGap = typeof lastMsgId === "number" ? msg.message_id - lastMsgId : Infinity;
				const timeGapMs = nowMs - lastReceivedAtMs;
				if (idGap > 0 && idGap <= TELEGRAM_TEXT_FRAGMENT_MAX_ID_GAP && timeGapMs >= 0 && timeGapMs <= TELEGRAM_TEXT_FRAGMENT_MAX_GAP_MS) {
					const nextTotalChars = existing.messages.reduce((sum, m) => sum + (m.msg.text?.length ?? 0), 0) + text.length;
					if (existing.messages.length + 1 <= TELEGRAM_TEXT_FRAGMENT_MAX_PARTS && nextTotalChars <= TELEGRAM_TEXT_FRAGMENT_MAX_TOTAL_CHARS) {
						existing.messages.push({
							msg,
							ctx,
							receivedAtMs: nowMs
						});
						scheduleTextFragmentFlush(existing);
						return;
					}
				}
				clearTimeout(existing.timer);
				textFragmentBuffer.delete(key);
				textFragmentProcessing = textFragmentProcessing.then(async () => {
					await flushTextFragments(existing);
				}).catch(() => void 0);
				await textFragmentProcessing;
			}
			if (text.length >= TELEGRAM_TEXT_FRAGMENT_START_THRESHOLD_CHARS) {
				const entry = {
					key,
					messages: [{
						msg,
						ctx,
						receivedAtMs: nowMs
					}],
					timer: setTimeout(() => {}, TELEGRAM_TEXT_FRAGMENT_MAX_GAP_MS)
				};
				textFragmentBuffer.set(key, entry);
				scheduleTextFragmentFlush(entry);
				return;
			}
		}
		const mediaGroupId = msg.media_group_id;
		if (mediaGroupId) {
			const existing = mediaGroupBuffer.get(mediaGroupId);
			if (existing) {
				clearTimeout(existing.timer);
				existing.messages.push({
					msg,
					ctx
				});
				existing.timer = setTimeout(async () => {
					mediaGroupBuffer.delete(mediaGroupId);
					mediaGroupProcessing = mediaGroupProcessing.then(async () => {
						await processMediaGroup(existing);
					}).catch(() => void 0);
					await mediaGroupProcessing;
				}, mediaGroupTimeoutMs);
			} else {
				const entry = {
					messages: [{
						msg,
						ctx
					}],
					timer: setTimeout(async () => {
						mediaGroupBuffer.delete(mediaGroupId);
						mediaGroupProcessing = mediaGroupProcessing.then(async () => {
							await processMediaGroup(entry);
						}).catch(() => void 0);
						await mediaGroupProcessing;
					}, mediaGroupTimeoutMs)
				};
				mediaGroupBuffer.set(mediaGroupId, entry);
			}
			return;
		}
		let media = null;
		try {
			media = await resolveMedia(ctx, mediaMaxBytes, opts.token, telegramTransport, telegramCfg.apiRoot);
		} catch (mediaErr) {
			if (isMediaSizeLimitError(mediaErr)) {
				if (sendOversizeWarning) {
					const limitMb = Math.round(mediaMaxBytes / (1024 * 1024));
					await withTelegramApiErrorLogging({
						operation: "sendMessage",
						runtime,
						fn: () => bot.api.sendMessage(chatId, `⚠️ File too large. Maximum size is ${limitMb}MB.`, { reply_to_message_id: msg.message_id })
					}).catch(() => {});
				}
				logger.warn({
					chatId,
					error: String(mediaErr)
				}, oversizeLogMessage);
				return;
			}
			logger.warn({
				chatId,
				error: String(mediaErr)
			}, "media fetch failed");
			await withTelegramApiErrorLogging({
				operation: "sendMessage",
				runtime,
				fn: () => bot.api.sendMessage(chatId, "⚠️ Failed to download media. Please try again.", { reply_to_message_id: msg.message_id })
			}).catch(() => {});
			return;
		}
		const hasText = Boolean(getTelegramTextParts(msg).text.trim());
		if (msg.sticker && !media && !hasText) {
			logVerbose("telegram: skipping sticker-only message (unsupported sticker type)");
			return;
		}
		const allMedia = media ? [{
			path: media.path,
			contentType: media.contentType,
			stickerMetadata: media.stickerMetadata
		}] : [];
		const senderId = msg.from?.id ? String(msg.from.id) : "";
		const conversationThreadId = resolvedThreadId ?? dmThreadId;
		const conversationKey = conversationThreadId != null ? `${chatId}:topic:${conversationThreadId}` : String(chatId);
		const debounceLane = resolveTelegramDebounceLane(msg);
		const debounceKey = senderId ? `telegram:${accountId ?? "default"}:${conversationKey}:${senderId}:${debounceLane}` : null;
		await inboundDebouncer.enqueue({
			ctx,
			msg,
			allMedia,
			storeAllowFrom,
			receivedAtMs: Date.now(),
			debounceKey,
			debounceLane,
			botUsername: ctx.me?.username
		});
	};
	bot.on("callback_query", async (ctx) => {
		const callback = ctx.callbackQuery;
		if (!callback) return;
		if (shouldSkipUpdate(ctx)) return;
		await withTelegramApiErrorLogging({
			operation: "answerCallbackQuery",
			runtime,
			fn: typeof ctx.answerCallbackQuery === "function" ? () => ctx.answerCallbackQuery() : () => bot.api.answerCallbackQuery(callback.id)
		}).catch(() => {});
		try {
			const data = (callback.data ?? "").trim();
			const callbackMessage = callback.message;
			if (!data || !callbackMessage) return;
			const editCallbackMessage = async (text, params) => {
				if (typeof ctx.editMessageText === "function") return await ctx.editMessageText(text, params);
				return await bot.api.editMessageText(callbackMessage.chat.id, callbackMessage.message_id, text, params);
			};
			const clearCallbackButtons = async () => {
				const replyMarkup = { reply_markup: { inline_keyboard: [] } };
				if (typeof ctx.editMessageReplyMarkup === "function") return await ctx.editMessageReplyMarkup(replyMarkup);
				if (typeof bot.api.editMessageReplyMarkup === "function") return await bot.api.editMessageReplyMarkup(callbackMessage.chat.id, callbackMessage.message_id, replyMarkup);
				const messageText = callbackMessage.text ?? callbackMessage.caption;
				if (typeof messageText !== "string" || messageText.trim().length === 0) return;
				return await editCallbackMessage(messageText, replyMarkup);
			};
			const editCallbackButtons = async (buttons) => {
				const replyMarkup = { reply_markup: buildInlineKeyboard(buttons) ?? { inline_keyboard: [] } };
				if (typeof ctx.editMessageReplyMarkup === "function") return await ctx.editMessageReplyMarkup(replyMarkup);
				return await bot.api.editMessageReplyMarkup(callbackMessage.chat.id, callbackMessage.message_id, replyMarkup);
			};
			const deleteCallbackMessage = async () => {
				if (typeof ctx.deleteMessage === "function") return await ctx.deleteMessage();
				return await bot.api.deleteMessage(callbackMessage.chat.id, callbackMessage.message_id);
			};
			const replyToCallbackChat = async (text, params) => {
				if (typeof ctx.reply === "function") return await ctx.reply(text, params);
				return await bot.api.sendMessage(callbackMessage.chat.id, text, params);
			};
			const chatId = callbackMessage.chat.id;
			const isGroup = callbackMessage.chat.type === "group" || callbackMessage.chat.type === "supergroup";
			const isApprovalCallback = APPROVE_CALLBACK_DATA_RE.test(data);
			const inlineButtonsScope = resolveTelegramInlineButtonsScope({
				cfg,
				accountId
			});
			const execApprovalButtonsEnabled = isApprovalCallback && shouldEnableTelegramExecApprovalButtons({
				cfg,
				accountId,
				to: String(chatId)
			});
			if (!execApprovalButtonsEnabled) {
				if (inlineButtonsScope === "off") return;
				if (inlineButtonsScope === "dm" && isGroup) return;
				if (inlineButtonsScope === "group" && !isGroup) return;
			}
			const messageThreadId = callbackMessage.message_thread_id;
			const isForum = callbackMessage.chat.is_forum === true;
			const eventAuthContext = await resolveTelegramEventAuthorizationContext({
				chatId,
				isGroup,
				isForum,
				messageThreadId
			});
			const { resolvedThreadId, dmThreadId, storeAllowFrom, groupConfig } = eventAuthContext;
			const requireTopic = groupConfig?.requireTopic;
			if (!isGroup && requireTopic === true && dmThreadId == null) {
				logVerbose(`Blocked telegram callback in DM ${chatId}: requireTopic=true but no topic present`);
				return;
			}
			const senderId = callback.from?.id ? String(callback.from.id) : "";
			const senderUsername = callback.from?.username ?? "";
			const authorizationMode = !execApprovalButtonsEnabled && inlineButtonsScope === "allowlist" ? "callback-allowlist" : "callback-scope";
			if (!authorizeTelegramEventSender({
				chatId,
				chatTitle: callbackMessage.chat.title,
				isGroup,
				senderId,
				senderUsername,
				mode: authorizationMode,
				context: eventAuthContext
			}).allowed) return;
			const callbackConversationId = messageThreadId != null ? `${chatId}:topic:${messageThreadId}` : String(chatId);
			const pluginBindingApproval = parsePluginBindingApprovalCustomId(data);
			if (pluginBindingApproval) {
				const resolved = await resolvePluginConversationBindingApproval({
					approvalId: pluginBindingApproval.approvalId,
					decision: pluginBindingApproval.decision,
					senderId: senderId || void 0
				});
				await clearCallbackButtons();
				await replyToCallbackChat(buildPluginBindingResolvedText(resolved));
				return;
			}
			if ((await dispatchPluginInteractiveHandler({
				channel: "telegram",
				data,
				callbackId: callback.id,
				ctx: {
					accountId,
					callbackId: callback.id,
					conversationId: callbackConversationId,
					parentConversationId: messageThreadId != null ? String(chatId) : void 0,
					senderId: senderId || void 0,
					senderUsername: senderUsername || void 0,
					threadId: messageThreadId,
					isGroup,
					isForum,
					auth: { isAuthorizedSender: true },
					callbackMessage: {
						messageId: callbackMessage.message_id,
						chatId: String(chatId),
						messageText: callbackMessage.text ?? callbackMessage.caption
					}
				},
				respond: {
					reply: async ({ text, buttons }) => {
						await replyToCallbackChat(text, buttons ? { reply_markup: buildInlineKeyboard(buttons) } : void 0);
					},
					editMessage: async ({ text, buttons }) => {
						await editCallbackMessage(text, buttons ? { reply_markup: buildInlineKeyboard(buttons) } : void 0);
					},
					editButtons: async ({ buttons }) => {
						await editCallbackButtons(buttons);
					},
					clearButtons: async () => {
						await clearCallbackButtons();
					},
					deleteMessage: async () => {
						await deleteCallbackMessage();
					}
				}
			})).handled) return;
			const runtimeCfg = telegramDeps.loadConfig();
			if (isApprovalCallback) {
				if (!isTelegramExecApprovalClientEnabled({
					cfg: runtimeCfg,
					accountId
				}) || !isTelegramExecApprovalApprover({
					cfg: runtimeCfg,
					accountId,
					senderId
				})) {
					logVerbose(`Blocked telegram exec approval callback from ${senderId || "unknown"} (not an approver)`);
					return;
				}
				try {
					await clearCallbackButtons();
				} catch (editErr) {
					const errStr = String(editErr);
					if (!errStr.includes("message is not modified") && !errStr.includes("there is no text in the message to edit")) logVerbose(`telegram: failed to clear approval callback buttons: ${errStr}`);
				}
			}
			const paginationMatch = data.match(/^commands_page_(\d+|noop)(?::(.+))?$/);
			if (paginationMatch) {
				const pageValue = paginationMatch[1];
				if (pageValue === "noop") return;
				const page = Number.parseInt(pageValue, 10);
				if (Number.isNaN(page) || page < 1) return;
				const agentId = paginationMatch[2]?.trim() || resolveDefaultAgentId(runtimeCfg);
				const result = buildCommandsMessagePaginated(runtimeCfg, telegramDeps.listSkillCommandsForAgents({
					cfg: runtimeCfg,
					agentIds: [agentId]
				}), {
					page,
					surface: "telegram"
				});
				const keyboard = result.totalPages > 1 ? buildInlineKeyboard(buildCommandsPaginationKeyboard(result.currentPage, result.totalPages, agentId)) : void 0;
				try {
					await editCallbackMessage(result.text, keyboard ? { reply_markup: keyboard } : void 0);
				} catch (editErr) {
					if (!String(editErr).includes("message is not modified")) throw editErr;
				}
				return;
			}
			const modelCallback = parseModelCallbackData(data);
			if (modelCallback) {
				const sessionState = resolveTelegramSessionState({
					chatId,
					isGroup,
					isForum,
					messageThreadId,
					resolvedThreadId,
					senderId
				});
				const { byProvider, providers } = await telegramDeps.buildModelsProviderData(runtimeCfg, sessionState.agentId);
				const editMessageWithButtons = async (text, buttons) => {
					const keyboard = buildInlineKeyboard(buttons);
					try {
						await editCallbackMessage(text, keyboard ? { reply_markup: keyboard } : void 0);
					} catch (editErr) {
						const errStr = String(editErr);
						if (errStr.includes("no text in the message")) {
							try {
								await deleteCallbackMessage();
							} catch {}
							await replyToCallbackChat(text, keyboard ? { reply_markup: keyboard } : void 0);
						} else if (!errStr.includes("message is not modified")) throw editErr;
					}
				};
				if (modelCallback.type === "providers" || modelCallback.type === "back") {
					if (providers.length === 0) {
						await editMessageWithButtons("No providers available.", []);
						return;
					}
					await editMessageWithButtons("Select a provider:", buildProviderKeyboard(providers.map((p) => ({
						id: p,
						count: byProvider.get(p)?.size ?? 0
					}))));
					return;
				}
				if (modelCallback.type === "list") {
					const { provider, page } = modelCallback;
					const modelSet = byProvider.get(provider);
					if (!modelSet || modelSet.size === 0) {
						const buttons = buildProviderKeyboard(providers.map((p) => ({
							id: p,
							count: byProvider.get(p)?.size ?? 0
						})));
						await editMessageWithButtons(`Unknown provider: ${provider}\n\nSelect a provider:`, buttons);
						return;
					}
					const models = [...modelSet].toSorted();
					const pageSize = getModelsPageSize();
					const totalPages = calculateTotalPages(models.length, pageSize);
					const safePage = Math.max(1, Math.min(page, totalPages));
					const currentSessionState = resolveTelegramSessionState({
						chatId,
						isGroup,
						isForum,
						messageThreadId,
						resolvedThreadId,
						senderId
					});
					const currentModel = currentSessionState.model;
					const buttons = buildModelsKeyboard({
						provider,
						models,
						currentModel,
						currentPage: safePage,
						totalPages,
						pageSize
					});
					await editMessageWithButtons(formatModelsAvailableHeader({
						provider,
						total: models.length,
						cfg,
						agentDir: resolveAgentDir(cfg, currentSessionState.agentId),
						sessionEntry: currentSessionState.sessionEntry
					}), buttons);
					return;
				}
				if (modelCallback.type === "select") {
					const selection = resolveModelSelection({
						callback: modelCallback,
						providers,
						byProvider
					});
					if (selection.kind !== "resolved") {
						const buttons = buildProviderKeyboard(providers.map((p) => ({
							id: p,
							count: byProvider.get(p)?.size ?? 0
						})));
						await editMessageWithButtons(`Could not resolve model "${selection.model}".\n\nSelect a provider:`, buttons);
						return;
					}
					if (!byProvider.get(selection.provider)?.has(selection.model)) {
						await editMessageWithButtons(`❌ Model "${selection.provider}/${selection.model}" is not allowed.`, []);
						return;
					}
					try {
						const storePath = telegramDeps.resolveStorePath(cfg.session?.store, { agentId: sessionState.agentId });
						const resolvedDefault = resolveDefaultModelForAgent({
							cfg,
							agentId: sessionState.agentId
						});
						const isDefaultSelection = selection.provider === resolvedDefault.provider && selection.model === resolvedDefault.model;
						await updateSessionStore(storePath, (store) => {
							const sessionKey = sessionState.sessionKey;
							const entry = store[sessionKey] ?? {};
							store[sessionKey] = entry;
							applyModelOverrideToSessionEntry({
								entry,
								selection: {
									provider: selection.provider,
									model: selection.model,
									isDefault: isDefaultSelection
								}
							});
						});
						await editMessageWithButtons(`✅ Model ${isDefaultSelection ? "reset to default" : `changed to **${selection.provider}/${selection.model}**`}\n\nThis model will be used for your next message.`, []);
					} catch (err) {
						await editMessageWithButtons(`❌ Failed to change model: ${String(err)}`, []);
					}
					return;
				}
				return;
			}
			await processMessage(buildSyntheticContext(ctx, buildSyntheticTextMessage({
				base: callbackMessage,
				from: callback.from,
				text: data
			})), [], storeAllowFrom, {
				forceWasMentioned: true,
				messageIdOverride: callback.id
			});
		} catch (err) {
			runtime.error?.(danger(`callback handler failed: ${String(err)}`));
		}
	});
	bot.on("message:migrate_to_chat_id", async (ctx) => {
		try {
			const msg = ctx.message;
			if (!msg?.migrate_to_chat_id) return;
			if (shouldSkipUpdate(ctx)) return;
			const oldChatId = String(msg.chat.id);
			const newChatId = String(msg.migrate_to_chat_id);
			const chatTitle = msg.chat.title ?? "Unknown";
			runtime.log?.(warn(`[telegram] Group migrated: "${chatTitle}" ${oldChatId} → ${newChatId}`));
			if (!resolveChannelConfigWrites({
				cfg,
				channelId: "telegram",
				accountId
			})) {
				runtime.log?.(warn("[telegram] Config writes disabled; skipping group config migration."));
				return;
			}
			const currentConfig = telegramDeps.loadConfig();
			const migration = migrateTelegramGroupConfig({
				cfg: currentConfig,
				accountId,
				oldChatId,
				newChatId
			});
			if (migration.migrated) {
				runtime.log?.(warn(`[telegram] Migrating group config from ${oldChatId} to ${newChatId}`));
				migrateTelegramGroupConfig({
					cfg,
					accountId,
					oldChatId,
					newChatId
				});
				await writeConfigFile(currentConfig);
				runtime.log?.(warn(`[telegram] Group config migrated and saved successfully`));
			} else if (migration.skippedExisting) runtime.log?.(warn(`[telegram] Group config already exists for ${newChatId}; leaving ${oldChatId} unchanged`));
			else runtime.log?.(warn(`[telegram] No config found for old group ID ${oldChatId}, migration logged only`));
		} catch (err) {
			runtime.error?.(danger(`[telegram] Group migration handler failed: ${String(err)}`));
		}
	});
	const handleInboundMessageLike = async (event) => {
		try {
			if (shouldSkipUpdate(event.ctxForDedupe)) return;
			const { dmPolicy, resolvedThreadId, dmThreadId, storeAllowFrom, groupConfig, topicConfig, groupAllowOverride, effectiveGroupAllow, hasGroupAllowOverride } = await resolveTelegramEventAuthorizationContext({
				chatId: event.chatId,
				isGroup: event.isGroup,
				isForum: event.isForum,
				messageThreadId: event.messageThreadId
			});
			const effectiveDmAllow = normalizeDmAllowFromWithStore({
				allowFrom: groupAllowOverride ?? allowFrom,
				storeAllowFrom,
				dmPolicy
			});
			if (event.requireConfiguredGroup && (!groupConfig || groupConfig.enabled === false)) {
				logVerbose(`Blocked telegram channel ${event.chatId} (channel disabled)`);
				return;
			}
			if (shouldSkipGroupMessage({
				isGroup: event.isGroup,
				chatId: event.chatId,
				chatTitle: event.msg.chat.title,
				resolvedThreadId,
				senderId: event.senderId,
				senderUsername: event.senderUsername,
				effectiveGroupAllow,
				hasGroupAllowOverride,
				groupConfig,
				topicConfig
			})) return;
			if (!event.isGroup && (hasInboundMedia(event.msg) || hasReplyTargetMedia(event.msg))) {
				if (!await enforceTelegramDmAccess({
					isGroup: event.isGroup,
					dmPolicy,
					msg: event.msg,
					chatId: event.chatId,
					effectiveDmAllow,
					accountId,
					bot,
					logger,
					upsertPairingRequest: telegramDeps.upsertChannelPairingRequest
				})) return;
			}
			await processInboundMessage({
				ctx: event.ctx,
				msg: event.msg,
				chatId: event.chatId,
				resolvedThreadId,
				dmThreadId,
				storeAllowFrom,
				sendOversizeWarning: event.sendOversizeWarning,
				oversizeLogMessage: event.oversizeLogMessage
			});
		} catch (err) {
			runtime.error?.(danger(`${event.errorMessage}: ${String(err)}`));
		}
	};
	bot.on("message", async (ctx) => {
		const msg = ctx.message;
		if (!msg) return;
		await handleInboundMessageLike({
			ctxForDedupe: ctx,
			ctx: buildSyntheticContext(ctx, msg),
			msg,
			chatId: msg.chat.id,
			isGroup: msg.chat.type === "group" || msg.chat.type === "supergroup",
			isForum: msg.chat.is_forum === true,
			messageThreadId: msg.message_thread_id,
			senderId: msg.from?.id != null ? String(msg.from.id) : "",
			senderUsername: msg.from?.username ?? "",
			requireConfiguredGroup: false,
			sendOversizeWarning: true,
			oversizeLogMessage: "media exceeds size limit",
			errorMessage: "handler failed"
		});
	});
	bot.on("channel_post", async (ctx) => {
		const post = ctx.channelPost;
		if (!post) return;
		const chatId = post.chat.id;
		const syntheticFrom = post.sender_chat ? {
			id: post.sender_chat.id,
			is_bot: true,
			first_name: post.sender_chat.title || "Channel",
			username: post.sender_chat.username
		} : {
			id: chatId,
			is_bot: true,
			first_name: post.chat.title || "Channel",
			username: post.chat.username
		};
		const syntheticMsg = {
			...post,
			from: post.from ?? syntheticFrom,
			chat: {
				...post.chat,
				type: "supergroup"
			}
		};
		await handleInboundMessageLike({
			ctxForDedupe: ctx,
			ctx: buildSyntheticContext(ctx, syntheticMsg),
			msg: syntheticMsg,
			chatId,
			isGroup: true,
			isForum: false,
			senderId: post.sender_chat?.id != null ? String(post.sender_chat.id) : post.from?.id != null ? String(post.from.id) : "",
			senderUsername: post.sender_chat?.username ?? post.from?.username ?? "",
			requireConfiguredGroup: true,
			sendOversizeWarning: false,
			oversizeLogMessage: "channel post media exceeds size limit",
			errorMessage: "channel_post handler failed"
		});
	});
};
//#endregion
//#region extensions/telegram/src/forum-service-message.ts
/** Telegram forum-topic service-message fields (Bot API). */
const TELEGRAM_FORUM_SERVICE_FIELDS = [
	"forum_topic_created",
	"forum_topic_edited",
	"forum_topic_closed",
	"forum_topic_reopened",
	"general_forum_topic_hidden",
	"general_forum_topic_unhidden"
];
/**
* Returns `true` when the message is a Telegram forum service message (e.g.
* "Topic created"). These auto-generated messages carry one of the
* `forum_topic_*` / `general_forum_topic_*` fields and should not count as
* regular bot replies for implicit-mention purposes.
*/
function isTelegramForumServiceMessage(msg) {
	if (!msg || typeof msg !== "object") return false;
	const record = msg;
	return TELEGRAM_FORUM_SERVICE_FIELDS.some((field) => record[field] != null);
}
//#endregion
//#region extensions/telegram/src/bot-message-context.body.ts
async function resolveStickerVisionSupport$1(params) {
	try {
		const catalog = await loadModelCatalog({ config: params.cfg });
		const defaultModel = resolveDefaultModelForAgent({
			cfg: params.cfg,
			agentId: params.agentId
		});
		const entry = findModelInCatalog(catalog, defaultModel.provider, defaultModel.model);
		if (!entry) return false;
		return modelSupportsVision(entry);
	} catch {
		return false;
	}
}
async function resolveTelegramInboundBody(params) {
	const { cfg, primaryCtx, msg, allMedia, isGroup, chatId, senderId, senderUsername, resolvedThreadId, routeAgentId, effectiveGroupAllow, effectiveDmAllow, groupConfig, topicConfig, requireMention, options, groupHistories, historyLimit, logger } = params;
	const botUsername = primaryCtx.me?.username?.toLowerCase();
	const mentionRegexes = buildMentionRegexes(cfg, routeAgentId);
	const messageTextParts = getTelegramTextParts(msg);
	const allowForCommands = isGroup ? effectiveGroupAllow : effectiveDmAllow;
	const senderAllowedForCommands = isSenderAllowed({
		allow: allowForCommands,
		senderId,
		senderUsername
	});
	const useAccessGroups = cfg.commands?.useAccessGroups !== false;
	const hasControlCommandInMessage = hasControlCommand(messageTextParts.text, cfg, { botUsername });
	const commandGate = resolveControlCommandGate({
		useAccessGroups,
		authorizers: [{
			configured: allowForCommands.hasEntries,
			allowed: senderAllowedForCommands
		}],
		allowTextCommands: true,
		hasControlCommand: hasControlCommandInMessage
	});
	const commandAuthorized = commandGate.commandAuthorized;
	const historyKey = isGroup ? buildTelegramGroupPeerId(chatId, resolvedThreadId) : void 0;
	let placeholder = resolveTelegramMediaPlaceholder(msg) ?? "";
	const cachedStickerDescription = allMedia[0]?.stickerMetadata?.cachedDescription;
	const stickerSupportsVision = msg.sticker ? await resolveStickerVisionSupport$1({
		cfg,
		agentId: routeAgentId
	}) : false;
	const stickerCacheHit = Boolean(cachedStickerDescription) && !stickerSupportsVision;
	if (stickerCacheHit) {
		const emoji = allMedia[0]?.stickerMetadata?.emoji;
		const setName = allMedia[0]?.stickerMetadata?.setName;
		const stickerContext = [emoji, setName ? `from "${setName}"` : null].filter(Boolean).join(" ");
		placeholder = `[Sticker${stickerContext ? ` ${stickerContext}` : ""}] ${cachedStickerDescription}`;
	}
	const locationData = extractTelegramLocation(msg);
	const locationText = locationData ? formatLocationText(locationData) : void 0;
	const rawText = expandTextLinks(messageTextParts.text, messageTextParts.entities).trim();
	const hasUserText = Boolean(rawText || locationText);
	let rawBody = [rawText, locationText].filter(Boolean).join("\n").trim();
	if (!rawBody) rawBody = placeholder;
	if (!rawBody && allMedia.length === 0) return null;
	let bodyText = rawBody;
	const hasAudio = allMedia.some((media) => media.contentType?.startsWith("audio/"));
	const disableAudioPreflight = (topicConfig?.disableAudioPreflight ?? groupConfig?.disableAudioPreflight) === true;
	let preflightTranscript;
	if (isGroup && requireMention && hasAudio && !hasUserText && mentionRegexes.length > 0 && !disableAudioPreflight) try {
		const { transcribeFirstAudio } = await import("./media-understanding.runtime-1GtCfFVd.js");
		preflightTranscript = await transcribeFirstAudio({
			ctx: {
				MediaPaths: allMedia.length > 0 ? allMedia.map((m) => m.path) : void 0,
				MediaTypes: allMedia.length > 0 ? allMedia.map((m) => m.contentType).filter(Boolean) : void 0
			},
			cfg,
			agentDir: void 0
		});
	} catch (err) {
		logVerbose(`telegram: audio preflight transcription failed: ${String(err)}`);
	}
	if (hasAudio && bodyText === "<media:audio>" && preflightTranscript) bodyText = preflightTranscript;
	if (!bodyText && allMedia.length > 0) if (hasAudio) bodyText = preflightTranscript || "<media:audio>";
	else bodyText = `<media:image>${allMedia.length > 1 ? ` (${allMedia.length} images)` : ""}`;
	const hasAnyMention = messageTextParts.entities.some((ent) => ent.type === "mention");
	const explicitlyMentioned = botUsername ? hasBotMention(msg, botUsername) : false;
	const computedWasMentioned = matchesMentionWithExplicit({
		text: messageTextParts.text,
		mentionRegexes,
		explicit: {
			hasAnyMention,
			isExplicitlyMentioned: explicitlyMentioned,
			canResolveExplicit: Boolean(botUsername)
		},
		transcript: preflightTranscript
	});
	const wasMentioned = options?.forceWasMentioned === true ? true : computedWasMentioned;
	if (isGroup && commandGate.shouldBlock) {
		logInboundDrop({
			log: logVerbose,
			channel: "telegram",
			reason: "control command (unauthorized)",
			target: senderId ?? "unknown"
		});
		return null;
	}
	const botId = primaryCtx.me?.id;
	const replyFromId = msg.reply_to_message?.from?.id;
	const replyToBotMessage = botId != null && replyFromId === botId;
	const isReplyToServiceMessage = replyToBotMessage && isTelegramForumServiceMessage(msg.reply_to_message);
	const implicitMention = replyToBotMessage && !isReplyToServiceMessage;
	const canDetectMention = Boolean(botUsername) || mentionRegexes.length > 0;
	const mentionGate = resolveMentionGatingWithBypass({
		isGroup,
		requireMention: Boolean(requireMention),
		canDetectMention,
		wasMentioned,
		implicitMention: isGroup && Boolean(requireMention) && implicitMention,
		hasAnyMention,
		allowTextCommands: true,
		hasControlCommand: hasControlCommandInMessage,
		commandAuthorized
	});
	const effectiveWasMentioned = mentionGate.effectiveWasMentioned;
	if (isGroup && requireMention && canDetectMention && mentionGate.shouldSkip) {
		logger.info({
			chatId,
			reason: "no-mention"
		}, "skipping group message");
		recordPendingHistoryEntryIfEnabled({
			historyMap: groupHistories,
			historyKey: historyKey ?? "",
			limit: historyLimit,
			entry: historyKey ? {
				sender: buildSenderLabel(msg, senderId || chatId),
				body: rawBody,
				timestamp: msg.date ? msg.date * 1e3 : void 0,
				messageId: typeof msg.message_id === "number" ? String(msg.message_id) : void 0
			} : null
		});
		return null;
	}
	return {
		bodyText,
		rawBody,
		historyKey,
		commandAuthorized,
		effectiveWasMentioned,
		canDetectMention,
		shouldBypassMention: mentionGate.shouldBypassMention,
		stickerCacheHit,
		locationData: locationData ?? void 0
	};
}
//#endregion
//#region extensions/telegram/src/group-config-helpers.ts
function resolveTelegramGroupPromptSettings(params) {
	const skillFilter = firstDefined(params.topicConfig?.skills, params.groupConfig?.skills);
	const systemPromptParts = [params.groupConfig?.systemPrompt?.trim() || null, params.topicConfig?.systemPrompt?.trim() || null].filter((entry) => Boolean(entry));
	return {
		skillFilter,
		groupSystemPrompt: systemPromptParts.length > 0 ? systemPromptParts.join("\n\n") : void 0
	};
}
//#endregion
//#region extensions/telegram/src/bot-message-context.session.ts
async function buildTelegramInboundContextPayload(params) {
	const { cfg, primaryCtx, msg, allMedia, replyMedia, isGroup, isForum, chatId, senderId, senderUsername, resolvedThreadId, dmThreadId, threadSpec, route, rawBody, bodyText, historyKey, historyLimit, groupHistories, groupConfig, topicConfig, stickerCacheHit, effectiveWasMentioned, commandAuthorized, locationData, options, dmAllowFrom } = params;
	const replyTarget = describeReplyTarget(msg);
	const forwardOrigin = normalizeForwardedContext(msg);
	const replyForwardAnnotation = replyTarget?.forwardedFrom ? `[Forwarded from ${replyTarget.forwardedFrom.from}${replyTarget.forwardedFrom.date ? ` at ${(/* @__PURE__ */ new Date(replyTarget.forwardedFrom.date * 1e3)).toISOString()}` : ""}]\n` : "";
	const replySuffix = replyTarget ? replyTarget.kind === "quote" ? `\n\n[Quoting ${replyTarget.sender}${replyTarget.id ? ` id:${replyTarget.id}` : ""}]\n${replyForwardAnnotation}"${replyTarget.body}"\n[/Quoting]` : `\n\n[Replying to ${replyTarget.sender}${replyTarget.id ? ` id:${replyTarget.id}` : ""}]\n${replyForwardAnnotation}${replyTarget.body}\n[/Replying]` : "";
	const forwardPrefix = forwardOrigin ? `[Forwarded from ${forwardOrigin.from}${forwardOrigin.date ? ` at ${(/* @__PURE__ */ new Date(forwardOrigin.date * 1e3)).toISOString()}` : ""}]\n` : "";
	const groupLabel = isGroup ? buildGroupLabel(msg, chatId, resolvedThreadId) : void 0;
	const senderName = buildSenderName(msg);
	const conversationLabel = isGroup ? groupLabel ?? `group:${chatId}` : buildSenderLabel(msg, senderId || chatId);
	const storePath = resolveStorePath(cfg.session?.store, { agentId: route.agentId });
	const envelopeOptions = resolveEnvelopeFormatOptions(cfg);
	const previousTimestamp = readSessionUpdatedAt({
		storePath,
		sessionKey: route.sessionKey
	});
	const body = formatInboundEnvelope({
		channel: "Telegram",
		from: conversationLabel,
		timestamp: msg.date ? msg.date * 1e3 : void 0,
		body: `${forwardPrefix}${bodyText}${replySuffix}`,
		chatType: isGroup ? "group" : "direct",
		sender: {
			name: senderName,
			username: senderUsername || void 0,
			id: senderId || void 0
		},
		previousTimestamp,
		envelope: envelopeOptions
	});
	let combinedBody = body;
	if (isGroup && historyKey && historyLimit > 0) combinedBody = buildPendingHistoryContextFromMap({
		historyMap: groupHistories,
		historyKey,
		limit: historyLimit,
		currentMessage: combinedBody,
		formatEntry: (entry) => formatInboundEnvelope({
			channel: "Telegram",
			from: groupLabel ?? `group:${chatId}`,
			timestamp: entry.timestamp,
			body: `${entry.body} [id:${entry.messageId ?? "unknown"} chat:${chatId}]`,
			chatType: "group",
			senderLabel: entry.sender,
			envelope: envelopeOptions
		})
	});
	const { skillFilter, groupSystemPrompt } = resolveTelegramGroupPromptSettings({
		groupConfig,
		topicConfig
	});
	const commandBody = normalizeCommandBody(rawBody, { botUsername: primaryCtx.me?.username?.toLowerCase() });
	const inboundHistory = isGroup && historyKey && historyLimit > 0 ? (groupHistories.get(historyKey) ?? []).map((entry) => ({
		sender: entry.sender,
		body: entry.body,
		timestamp: entry.timestamp
	})) : void 0;
	const contextMedia = [...stickerCacheHit ? [] : allMedia, ...replyMedia];
	const ctxPayload = finalizeInboundContext({
		Body: combinedBody,
		BodyForAgent: bodyText,
		InboundHistory: inboundHistory,
		RawBody: rawBody,
		CommandBody: commandBody,
		From: isGroup ? buildTelegramGroupFrom(chatId, resolvedThreadId) : `telegram:${chatId}`,
		To: `telegram:${chatId}`,
		SessionKey: route.sessionKey,
		AccountId: route.accountId,
		ChatType: isGroup ? "group" : "direct",
		ConversationLabel: conversationLabel,
		GroupSubject: isGroup ? msg.chat.title ?? void 0 : void 0,
		GroupSystemPrompt: isGroup || !isGroup && groupConfig ? groupSystemPrompt : void 0,
		SenderName: senderName,
		SenderId: senderId || void 0,
		SenderUsername: senderUsername || void 0,
		Provider: "telegram",
		Surface: "telegram",
		BotUsername: primaryCtx.me?.username ?? void 0,
		MessageSid: options?.messageIdOverride ?? String(msg.message_id),
		ReplyToId: replyTarget?.id,
		ReplyToBody: replyTarget?.body,
		ReplyToSender: replyTarget?.sender,
		ReplyToIsQuote: replyTarget?.kind === "quote" ? true : void 0,
		ReplyToForwardedFrom: replyTarget?.forwardedFrom?.from,
		ReplyToForwardedFromType: replyTarget?.forwardedFrom?.fromType,
		ReplyToForwardedFromId: replyTarget?.forwardedFrom?.fromId,
		ReplyToForwardedFromUsername: replyTarget?.forwardedFrom?.fromUsername,
		ReplyToForwardedFromTitle: replyTarget?.forwardedFrom?.fromTitle,
		ReplyToForwardedDate: replyTarget?.forwardedFrom?.date ? replyTarget.forwardedFrom.date * 1e3 : void 0,
		ForwardedFrom: forwardOrigin?.from,
		ForwardedFromType: forwardOrigin?.fromType,
		ForwardedFromId: forwardOrigin?.fromId,
		ForwardedFromUsername: forwardOrigin?.fromUsername,
		ForwardedFromTitle: forwardOrigin?.fromTitle,
		ForwardedFromSignature: forwardOrigin?.fromSignature,
		ForwardedFromChatType: forwardOrigin?.fromChatType,
		ForwardedFromMessageId: forwardOrigin?.fromMessageId,
		ForwardedDate: forwardOrigin?.date ? forwardOrigin.date * 1e3 : void 0,
		Timestamp: msg.date ? msg.date * 1e3 : void 0,
		WasMentioned: isGroup ? effectiveWasMentioned : void 0,
		MediaPath: contextMedia.length > 0 ? contextMedia[0]?.path : void 0,
		MediaType: contextMedia.length > 0 ? contextMedia[0]?.contentType : void 0,
		MediaUrl: contextMedia.length > 0 ? contextMedia[0]?.path : void 0,
		MediaPaths: contextMedia.length > 0 ? contextMedia.map((m) => m.path) : void 0,
		MediaUrls: contextMedia.length > 0 ? contextMedia.map((m) => m.path) : void 0,
		MediaTypes: contextMedia.length > 0 ? contextMedia.map((m) => m.contentType).filter(Boolean) : void 0,
		Sticker: allMedia[0]?.stickerMetadata,
		StickerMediaIncluded: allMedia[0]?.stickerMetadata ? !stickerCacheHit : void 0,
		...locationData ? toLocationContext(locationData) : void 0,
		CommandAuthorized: commandAuthorized,
		MessageThreadId: threadSpec.id,
		IsForum: isForum,
		OriginatingChannel: "telegram",
		OriginatingTo: `telegram:${chatId}`
	});
	const pinnedMainDmOwner = !isGroup ? resolvePinnedMainDmOwnerFromAllowlist({
		dmScope: cfg.session?.dmScope,
		allowFrom: dmAllowFrom,
		normalizeEntry: (entry) => normalizeAllowFrom([entry]).entries[0]
	}) : null;
	const updateLastRouteSessionKey = resolveInboundLastRouteSessionKey({
		route,
		sessionKey: route.sessionKey
	});
	await recordInboundSession({
		storePath,
		sessionKey: ctxPayload.SessionKey ?? route.sessionKey,
		ctx: ctxPayload,
		updateLastRoute: !isGroup ? {
			sessionKey: updateLastRouteSessionKey,
			channel: "telegram",
			to: `telegram:${chatId}`,
			accountId: route.accountId,
			threadId: dmThreadId != null ? String(dmThreadId) : void 0,
			mainDmOwnerPin: updateLastRouteSessionKey === route.mainSessionKey && pinnedMainDmOwner && senderId ? {
				ownerRecipient: pinnedMainDmOwner,
				senderRecipient: senderId,
				onSkip: ({ ownerRecipient, senderRecipient }) => {
					logVerbose(`telegram: skip main-session last route for ${senderRecipient} (pinned owner ${ownerRecipient})`);
				}
			} : void 0
		} : void 0,
		onRecordError: (err) => {
			logVerbose(`telegram: failed updating session meta: ${String(err)}`);
		}
	});
	if (replyTarget && shouldLogVerbose()) {
		const preview = replyTarget.body.replace(/\s+/g, " ").slice(0, 120);
		logVerbose(`telegram reply-context: replyToId=${replyTarget.id} replyToSender=${replyTarget.sender} replyToBody="${preview}"`);
	}
	if (forwardOrigin && shouldLogVerbose()) logVerbose(`telegram forward-context: forwardedFrom="${forwardOrigin.from}" type=${forwardOrigin.fromType}`);
	if (shouldLogVerbose()) {
		const preview = body.slice(0, 200).replace(/\n/g, "\\n");
		const mediaInfo = allMedia.length > 1 ? ` mediaCount=${allMedia.length}` : "";
		const topicInfo = resolvedThreadId != null ? ` topic=${resolvedThreadId}` : "";
		logVerbose(`telegram inbound: chatId=${chatId} from=${ctxPayload.From} len=${body.length}${mediaInfo}${topicInfo} preview="${preview}"`);
	}
	return {
		ctxPayload,
		skillFilter
	};
}
//#endregion
//#region extensions/telegram/src/status-reaction-variants.ts
const TELEGRAM_GENERIC_REACTION_FALLBACKS = [
	"👍",
	"👀",
	"🔥"
];
const TELEGRAM_SUPPORTED_REACTION_EMOJIS = new Set([
	"❤",
	"👍",
	"👎",
	"🔥",
	"🥰",
	"👏",
	"😁",
	"🤔",
	"🤯",
	"😱",
	"🤬",
	"😢",
	"🎉",
	"🤩",
	"🤮",
	"💩",
	"🙏",
	"👌",
	"🕊",
	"🤡",
	"🥱",
	"🥴",
	"😍",
	"🐳",
	"❤‍🔥",
	"🌚",
	"🌭",
	"💯",
	"🤣",
	"⚡",
	"🍌",
	"🏆",
	"💔",
	"🤨",
	"😐",
	"🍓",
	"🍾",
	"💋",
	"🖕",
	"😈",
	"😴",
	"😭",
	"🤓",
	"👻",
	"👨‍💻",
	"👀",
	"🎃",
	"🙈",
	"😇",
	"😨",
	"🤝",
	"✍",
	"🤗",
	"🫡",
	"🎅",
	"🎄",
	"☃",
	"💅",
	"🤪",
	"🗿",
	"🆒",
	"💘",
	"🙉",
	"🦄",
	"😘",
	"💊",
	"🙊",
	"😎",
	"👾",
	"🤷‍♂",
	"🤷",
	"🤷‍♀",
	"😡"
]);
const TELEGRAM_STATUS_REACTION_VARIANTS = {
	queued: [
		"👀",
		"👍",
		"🔥"
	],
	thinking: [
		"🤔",
		"🤓",
		"👀"
	],
	tool: [
		"🔥",
		"⚡",
		"👍"
	],
	coding: [
		"👨‍💻",
		"🔥",
		"⚡"
	],
	web: [
		"⚡",
		"🔥",
		"👍"
	],
	done: [
		"👍",
		"🎉",
		"💯"
	],
	error: [
		"😱",
		"😨",
		"🤯"
	],
	stallSoft: [
		"🥱",
		"😴",
		"🤔"
	],
	stallHard: [
		"😨",
		"😱",
		"⚡"
	],
	compacting: [
		"✍",
		"🤔",
		"🤯"
	]
};
const STATUS_REACTION_EMOJI_KEYS = [
	"queued",
	"thinking",
	"tool",
	"coding",
	"web",
	"done",
	"error",
	"stallSoft",
	"stallHard",
	"compacting"
];
function normalizeEmoji(value) {
	const trimmed = value?.trim();
	return trimmed ? trimmed : void 0;
}
function toUniqueNonEmpty(values) {
	return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}
function resolveTelegramStatusReactionEmojis(params) {
	const { overrides } = params;
	const queuedFallback = normalizeEmoji(params.initialEmoji) ?? DEFAULT_EMOJIS.queued;
	return {
		queued: normalizeEmoji(overrides?.queued) ?? queuedFallback,
		thinking: normalizeEmoji(overrides?.thinking) ?? DEFAULT_EMOJIS.thinking,
		tool: normalizeEmoji(overrides?.tool) ?? DEFAULT_EMOJIS.tool,
		coding: normalizeEmoji(overrides?.coding) ?? DEFAULT_EMOJIS.coding,
		web: normalizeEmoji(overrides?.web) ?? DEFAULT_EMOJIS.web,
		done: normalizeEmoji(overrides?.done) ?? DEFAULT_EMOJIS.done,
		error: normalizeEmoji(overrides?.error) ?? DEFAULT_EMOJIS.error,
		stallSoft: normalizeEmoji(overrides?.stallSoft) ?? DEFAULT_EMOJIS.stallSoft,
		stallHard: normalizeEmoji(overrides?.stallHard) ?? DEFAULT_EMOJIS.stallHard,
		compacting: normalizeEmoji(overrides?.compacting) ?? DEFAULT_EMOJIS.compacting
	};
}
function buildTelegramStatusReactionVariants(emojis) {
	const variantsByRequested = /* @__PURE__ */ new Map();
	for (const key of STATUS_REACTION_EMOJI_KEYS) {
		const requested = normalizeEmoji(emojis[key]);
		if (!requested) continue;
		const candidates = toUniqueNonEmpty([requested, ...TELEGRAM_STATUS_REACTION_VARIANTS[key] ?? []]);
		variantsByRequested.set(requested, candidates);
	}
	return variantsByRequested;
}
function isTelegramSupportedReactionEmoji(emoji) {
	return TELEGRAM_SUPPORTED_REACTION_EMOJIS.has(emoji);
}
function extractTelegramAllowedEmojiReactions(chat) {
	if (!chat || typeof chat !== "object") return;
	if (!Object.prototype.hasOwnProperty.call(chat, "available_reactions")) return;
	const availableReactions = chat.available_reactions;
	if (availableReactions == null) return null;
	if (!Array.isArray(availableReactions)) return /* @__PURE__ */ new Set();
	const allowed = /* @__PURE__ */ new Set();
	for (const reaction of availableReactions) {
		if (!reaction || typeof reaction !== "object") continue;
		const typedReaction = reaction;
		if (typedReaction.type !== "emoji" || typeof typedReaction.emoji !== "string") continue;
		const emoji = typedReaction.emoji.trim();
		if (emoji) allowed.add(emoji);
	}
	return allowed;
}
async function resolveTelegramAllowedEmojiReactions(params) {
	const fromMessage = extractTelegramAllowedEmojiReactions(params.chat);
	if (fromMessage !== void 0) return fromMessage;
	if (params.getChat) try {
		const fromLookup = extractTelegramAllowedEmojiReactions(await params.getChat(params.chatId));
		if (fromLookup !== void 0) return fromLookup;
	} catch {
		return null;
	}
	return null;
}
function resolveTelegramReactionVariant(params) {
	const requestedEmoji = normalizeEmoji(params.requestedEmoji);
	if (!requestedEmoji) return;
	const variants = toUniqueNonEmpty([...params.variantsByRequestedEmoji.get(requestedEmoji) ?? [requestedEmoji], ...TELEGRAM_GENERIC_REACTION_FALLBACKS]);
	for (const candidate of variants) if ((params.allowedEmojiReactions == null || params.allowedEmojiReactions.has(candidate)) && isTelegramSupportedReactionEmoji(candidate)) return candidate;
}
//#endregion
//#region extensions/telegram/src/bot-message-context.ts
const buildTelegramMessageContext = async ({ primaryCtx, allMedia, replyMedia = [], storeAllowFrom, options, bot, cfg, account, historyLimit, groupHistories, dmPolicy, allowFrom, groupAllowFrom, ackReactionScope, logger, resolveGroupActivation, resolveGroupRequireMention, resolveTelegramGroupConfig, loadFreshConfig, upsertPairingRequest, sendChatActionHandler }) => {
	const msg = primaryCtx.message;
	const chatId = msg.chat.id;
	const isGroup = msg.chat.type === "group" || msg.chat.type === "supergroup";
	const senderId = msg.from?.id ? String(msg.from.id) : "";
	const messageThreadId = msg.message_thread_id;
	const isForum = msg.chat.is_forum === true;
	const threadSpec = resolveTelegramThreadSpec({
		isGroup,
		isForum,
		messageThreadId
	});
	const resolvedThreadId = threadSpec.scope === "forum" ? threadSpec.id : void 0;
	const replyThreadId = threadSpec.id;
	const dmThreadId = threadSpec.scope === "dm" ? threadSpec.id : void 0;
	const { groupConfig, topicConfig } = resolveTelegramGroupConfig(chatId, resolvedThreadId ?? dmThreadId);
	const effectiveDmPolicy = !isGroup && groupConfig && "dmPolicy" in groupConfig ? groupConfig.dmPolicy ?? dmPolicy : dmPolicy;
	const freshCfg = (loadFreshConfig ?? loadConfig)();
	let { route, configuredBinding, configuredBindingSessionKey } = resolveTelegramConversationRoute({
		cfg: freshCfg,
		accountId: account.accountId,
		chatId,
		isGroup,
		resolvedThreadId,
		replyThreadId,
		senderId,
		topicAgentId: topicConfig?.agentId
	});
	const requiresExplicitAccountBinding = (candidate) => candidate.accountId !== "default" && candidate.matchedBy === "default";
	if (requiresExplicitAccountBinding(route) && isGroup) {
		logInboundDrop({
			log: logVerbose,
			channel: "telegram",
			reason: "non-default account requires explicit binding",
			target: route.accountId
		});
		return null;
	}
	const groupAllowOverride = firstDefined(topicConfig?.allowFrom, groupConfig?.allowFrom);
	const dmAllowFrom = groupAllowOverride ?? allowFrom;
	const effectiveDmAllow = normalizeDmAllowFromWithStore({
		allowFrom: dmAllowFrom,
		storeAllowFrom,
		dmPolicy: effectiveDmPolicy
	});
	const effectiveGroupAllow = normalizeAllowFrom(groupAllowOverride ?? groupAllowFrom);
	const hasGroupAllowOverride = typeof groupAllowOverride !== "undefined";
	const senderUsername = msg.from?.username ?? "";
	const baseAccess = evaluateTelegramGroupBaseAccess({
		isGroup,
		groupConfig,
		topicConfig,
		hasGroupAllowOverride,
		effectiveGroupAllow,
		senderId,
		senderUsername,
		enforceAllowOverride: true,
		requireSenderForAllowOverride: false
	});
	if (!baseAccess.allowed) {
		if (baseAccess.reason === "group-disabled") {
			logVerbose(`Blocked telegram group ${chatId} (group disabled)`);
			return null;
		}
		if (baseAccess.reason === "topic-disabled") {
			logVerbose(`Blocked telegram topic ${chatId} (${resolvedThreadId ?? "unknown"}) (topic disabled)`);
			return null;
		}
		logVerbose(isGroup ? `Blocked telegram group sender ${senderId || "unknown"} (group allowFrom override)` : `Blocked telegram DM sender ${senderId || "unknown"} (DM allowFrom override)`);
		return null;
	}
	const requireTopic = groupConfig?.requireTopic;
	if (!isGroup && requireTopic === true && dmThreadId == null) {
		logVerbose(`Blocked telegram DM ${chatId}: requireTopic=true but no topic present`);
		return null;
	}
	const sendTyping = async () => {
		await withTelegramApiErrorLogging({
			operation: "sendChatAction",
			fn: () => sendChatActionHandler.sendChatAction(chatId, "typing", buildTypingThreadParams(replyThreadId))
		});
	};
	const sendRecordVoice = async () => {
		try {
			await withTelegramApiErrorLogging({
				operation: "sendChatAction",
				fn: () => sendChatActionHandler.sendChatAction(chatId, "record_voice", buildTypingThreadParams(replyThreadId))
			});
		} catch (err) {
			logVerbose(`telegram record_voice cue failed for chat ${chatId}: ${String(err)}`);
		}
	};
	if (!await enforceTelegramDmAccess({
		isGroup,
		dmPolicy: effectiveDmPolicy,
		msg,
		chatId,
		effectiveDmAllow,
		accountId: account.accountId,
		bot,
		logger,
		upsertPairingRequest
	})) return null;
	const ensureConfiguredBindingReady = async () => {
		if (!configuredBinding) return true;
		const ensured = await ensureConfiguredBindingRouteReady({
			cfg: freshCfg,
			bindingResolution: configuredBinding
		});
		if (ensured.ok) {
			logVerbose(`telegram: using configured ACP binding for ${configuredBinding.record.conversation.conversationId} -> ${configuredBindingSessionKey}`);
			return true;
		}
		logVerbose(`telegram: configured ACP binding unavailable for ${configuredBinding.record.conversation.conversationId}: ${ensured.error}`);
		logInboundDrop({
			log: logVerbose,
			channel: "telegram",
			reason: "configured ACP binding unavailable",
			target: configuredBinding.record.conversation.conversationId
		});
		return false;
	};
	const baseSessionKey = resolveTelegramConversationBaseSessionKey({
		cfg: freshCfg,
		route,
		chatId,
		isGroup,
		senderId
	});
	const sessionKey = (dmThreadId != null ? resolveThreadSessionKeys({
		baseSessionKey,
		threadId: `${chatId}:${dmThreadId}`
	}) : null)?.sessionKey ?? baseSessionKey;
	route = {
		...route,
		sessionKey,
		lastRoutePolicy: deriveLastRoutePolicy({
			sessionKey,
			mainSessionKey: route.mainSessionKey
		})
	};
	const activationOverride = resolveGroupActivation({
		chatId,
		messageThreadId: resolvedThreadId,
		sessionKey,
		agentId: route.agentId
	});
	const baseRequireMention = resolveGroupRequireMention(chatId);
	const requireMention = firstDefined(activationOverride, topicConfig?.requireMention, groupConfig?.requireMention, baseRequireMention);
	recordChannelActivity({
		channel: "telegram",
		accountId: account.accountId,
		direction: "inbound"
	});
	const bodyResult = await resolveTelegramInboundBody({
		cfg,
		primaryCtx,
		msg,
		allMedia,
		isGroup,
		chatId,
		senderId,
		senderUsername,
		resolvedThreadId,
		routeAgentId: route.agentId,
		effectiveGroupAllow,
		effectiveDmAllow,
		groupConfig,
		topicConfig,
		requireMention,
		options,
		groupHistories,
		historyLimit,
		logger
	});
	if (!bodyResult) return null;
	if (!await ensureConfiguredBindingReady()) return null;
	const ackReaction = resolveAckReaction(cfg, route.agentId, {
		channel: "telegram",
		accountId: account.accountId
	});
	const removeAckAfterReply = cfg.messages?.removeAckAfterReply ?? false;
	const shouldAckReaction$1 = () => Boolean(ackReaction && shouldAckReaction({
		scope: ackReactionScope,
		isDirect: !isGroup,
		isGroup,
		isMentionableGroup: isGroup,
		requireMention: Boolean(requireMention),
		canDetectMention: bodyResult.canDetectMention,
		effectiveWasMentioned: bodyResult.effectiveWasMentioned,
		shouldBypassMention: bodyResult.shouldBypassMention
	}));
	const api = bot.api;
	const reactionApi = typeof api.setMessageReaction === "function" ? api.setMessageReaction.bind(api) : null;
	const getChatApi = typeof api.getChat === "function" ? api.getChat.bind(api) : null;
	const statusReactionsConfig = cfg.messages?.statusReactions;
	const statusReactionsEnabled = statusReactionsConfig?.enabled === true && Boolean(reactionApi) && shouldAckReaction$1();
	const resolvedStatusReactionEmojis = resolveTelegramStatusReactionEmojis({
		initialEmoji: ackReaction,
		overrides: statusReactionsConfig?.emojis
	});
	const statusReactionVariantsByEmoji = buildTelegramStatusReactionVariants(resolvedStatusReactionEmojis);
	let allowedStatusReactionEmojisPromise = null;
	const statusReactionController = statusReactionsEnabled && msg.message_id ? createStatusReactionController({
		enabled: true,
		adapter: { setReaction: async (emoji) => {
			if (reactionApi) {
				if (!allowedStatusReactionEmojisPromise) allowedStatusReactionEmojisPromise = resolveTelegramAllowedEmojiReactions({
					chat: msg.chat,
					chatId,
					getChat: getChatApi ?? void 0
				}).catch((err) => {
					logVerbose(`telegram status-reaction available_reactions lookup failed for chat ${chatId}: ${String(err)}`);
					return null;
				});
				const resolvedEmoji = resolveTelegramReactionVariant({
					requestedEmoji: emoji,
					variantsByRequestedEmoji: statusReactionVariantsByEmoji,
					allowedEmojiReactions: await allowedStatusReactionEmojisPromise
				});
				if (!resolvedEmoji) return;
				await reactionApi(chatId, msg.message_id, [{
					type: "emoji",
					emoji: resolvedEmoji
				}]);
			}
		} },
		initialEmoji: ackReaction,
		emojis: resolvedStatusReactionEmojis,
		timing: statusReactionsConfig?.timing,
		onError: (err) => {
			logVerbose(`telegram status-reaction error for chat ${chatId}: ${String(err)}`);
		}
	}) : null;
	const ackReactionPromise = statusReactionController ? shouldAckReaction$1() ? Promise.resolve(statusReactionController.setQueued()).then(() => true, () => false) : null : shouldAckReaction$1() && msg.message_id && reactionApi ? withTelegramApiErrorLogging({
		operation: "setMessageReaction",
		fn: () => reactionApi(chatId, msg.message_id, [{
			type: "emoji",
			emoji: ackReaction
		}])
	}).then(() => true, (err) => {
		logVerbose(`telegram react failed for chat ${chatId}: ${String(err)}`);
		return false;
	}) : null;
	const { ctxPayload, skillFilter } = await buildTelegramInboundContextPayload({
		cfg,
		primaryCtx,
		msg,
		allMedia,
		replyMedia,
		isGroup,
		isForum,
		chatId,
		senderId,
		senderUsername,
		resolvedThreadId,
		dmThreadId,
		threadSpec,
		route,
		rawBody: bodyResult.rawBody,
		bodyText: bodyResult.bodyText,
		historyKey: bodyResult.historyKey,
		historyLimit,
		groupHistories,
		groupConfig,
		topicConfig,
		stickerCacheHit: bodyResult.stickerCacheHit,
		effectiveWasMentioned: bodyResult.effectiveWasMentioned,
		locationData: bodyResult.locationData,
		options,
		dmAllowFrom,
		commandAuthorized: bodyResult.commandAuthorized
	});
	return {
		ctxPayload,
		primaryCtx,
		msg,
		chatId,
		isGroup,
		groupConfig,
		resolvedThreadId,
		threadSpec,
		replyThreadId,
		isForum,
		historyKey: bodyResult.historyKey,
		historyLimit,
		groupHistories,
		route,
		skillFilter,
		sendTyping,
		sendRecordVoice,
		ackReactionPromise,
		reactionApi,
		removeAckAfterReply,
		statusReactionController,
		accountId: account.accountId
	};
};
//#endregion
//#region extensions/telegram/src/draft-stream.ts
const TELEGRAM_STREAM_MAX_CHARS = 4096;
const DEFAULT_THROTTLE_MS = 1e3;
const TELEGRAM_DRAFT_ID_MAX = 2147483647;
const THREAD_NOT_FOUND_RE = /400:\s*Bad Request:\s*message thread not found/i;
const DRAFT_METHOD_UNAVAILABLE_RE = /(unknown method|method .*not (found|available|supported)|unsupported)/i;
const DRAFT_CHAT_UNSUPPORTED_RE = /(can't be used|can be used only)/i;
/**
* Keep draft-id allocation shared across bundled chunks so concurrent preview
* lanes do not accidentally reuse draft ids when code-split entries coexist.
*/
const TELEGRAM_DRAFT_STREAM_STATE_KEY = Symbol.for("openclaw.telegramDraftStreamState");
let draftStreamState;
function getDraftStreamState() {
	draftStreamState ??= resolveGlobalSingleton(TELEGRAM_DRAFT_STREAM_STATE_KEY, () => ({ nextDraftId: 0 }));
	return draftStreamState;
}
function allocateTelegramDraftId() {
	const draftStreamState = getDraftStreamState();
	draftStreamState.nextDraftId = draftStreamState.nextDraftId >= TELEGRAM_DRAFT_ID_MAX ? 1 : draftStreamState.nextDraftId + 1;
	return draftStreamState.nextDraftId;
}
function resolveSendMessageDraftApi(api) {
	const sendMessageDraft = api.sendMessageDraft;
	if (typeof sendMessageDraft !== "function") return;
	return sendMessageDraft.bind(api);
}
function shouldFallbackFromDraftTransport(err) {
	const text = typeof err === "string" ? err : err instanceof Error ? err.message : typeof err === "object" && err && "description" in err ? typeof err.description === "string" ? err.description : "" : "";
	if (!/sendMessageDraft/i.test(text)) return false;
	return DRAFT_METHOD_UNAVAILABLE_RE.test(text) || DRAFT_CHAT_UNSUPPORTED_RE.test(text);
}
function createTelegramDraftStream(params) {
	const maxChars = Math.min(params.maxChars ?? TELEGRAM_STREAM_MAX_CHARS, TELEGRAM_STREAM_MAX_CHARS);
	const throttleMs = Math.max(250, params.throttleMs ?? DEFAULT_THROTTLE_MS);
	const minInitialChars = params.minInitialChars;
	const chatId = params.chatId;
	const requestedPreviewTransport = params.previewTransport ?? "auto";
	const prefersDraftTransport = requestedPreviewTransport === "draft" ? true : requestedPreviewTransport === "message" ? false : params.thread?.scope === "dm";
	const threadParams = buildTelegramThreadParams(params.thread);
	const replyParams = params.replyToMessageId != null ? {
		...threadParams,
		reply_to_message_id: params.replyToMessageId
	} : threadParams;
	const resolvedDraftApi = prefersDraftTransport ? resolveSendMessageDraftApi(params.api) : void 0;
	const usesDraftTransport = Boolean(prefersDraftTransport && resolvedDraftApi);
	if (prefersDraftTransport && !usesDraftTransport) params.warn?.("telegram stream preview: sendMessageDraft unavailable; falling back to sendMessage/editMessageText");
	const streamState = {
		stopped: false,
		final: false
	};
	let messageSendAttempted = false;
	let streamMessageId;
	let streamDraftId = usesDraftTransport ? allocateTelegramDraftId() : void 0;
	let previewTransport = usesDraftTransport ? "draft" : "message";
	let lastSentText = "";
	let lastDeliveredText = "";
	let lastSentParseMode;
	let previewRevision = 0;
	let generation = 0;
	const sendRenderedMessageWithThreadFallback = async (sendArgs) => {
		const sendParams = sendArgs.renderedParseMode ? {
			...replyParams,
			parse_mode: sendArgs.renderedParseMode
		} : replyParams;
		const usedThreadParams = "message_thread_id" in (sendParams ?? {}) && typeof sendParams.message_thread_id === "number";
		try {
			return {
				sent: await params.api.sendMessage(chatId, sendArgs.renderedText, sendParams),
				usedThreadParams
			};
		} catch (err) {
			if (!usedThreadParams || !THREAD_NOT_FOUND_RE.test(String(err))) throw err;
			const threadlessParams = { ...sendParams };
			delete threadlessParams.message_thread_id;
			params.warn?.(sendArgs.fallbackWarnMessage);
			return {
				sent: await params.api.sendMessage(chatId, sendArgs.renderedText, Object.keys(threadlessParams).length > 0 ? threadlessParams : void 0),
				usedThreadParams: false
			};
		}
	};
	const sendMessageTransportPreview = async ({ renderedText, renderedParseMode, sendGeneration }) => {
		if (typeof streamMessageId === "number") {
			if (renderedParseMode) await params.api.editMessageText(chatId, streamMessageId, renderedText, { parse_mode: renderedParseMode });
			else await params.api.editMessageText(chatId, streamMessageId, renderedText);
			return true;
		}
		messageSendAttempted = true;
		let sent;
		try {
			({sent} = await sendRenderedMessageWithThreadFallback({
				renderedText,
				renderedParseMode,
				fallbackWarnMessage: "telegram stream preview send failed with message_thread_id, retrying without thread"
			}));
		} catch (err) {
			if (isSafeToRetrySendError(err) || isTelegramClientRejection(err)) messageSendAttempted = false;
			throw err;
		}
		const sentMessageId = sent?.message_id;
		if (typeof sentMessageId !== "number" || !Number.isFinite(sentMessageId)) {
			streamState.stopped = true;
			params.warn?.("telegram stream preview stopped (missing message id from sendMessage)");
			return false;
		}
		const normalizedMessageId = Math.trunc(sentMessageId);
		if (sendGeneration !== generation) {
			params.onSupersededPreview?.({
				messageId: normalizedMessageId,
				textSnapshot: renderedText,
				parseMode: renderedParseMode
			});
			return true;
		}
		streamMessageId = normalizedMessageId;
		return true;
	};
	const sendDraftTransportPreview = async ({ renderedText, renderedParseMode }) => {
		const draftId = streamDraftId ?? allocateTelegramDraftId();
		streamDraftId = draftId;
		const draftParams = {
			...threadParams?.message_thread_id != null ? { message_thread_id: threadParams.message_thread_id } : {},
			...renderedParseMode ? { parse_mode: renderedParseMode } : {}
		};
		await resolvedDraftApi(chatId, draftId, renderedText, Object.keys(draftParams).length > 0 ? draftParams : void 0);
		return true;
	};
	const sendOrEditStreamMessage = async (text) => {
		if (streamState.stopped && !streamState.final) return false;
		const trimmed = text.trimEnd();
		if (!trimmed) return false;
		const rendered = params.renderText?.(trimmed) ?? { text: trimmed };
		const renderedText = rendered.text.trimEnd();
		const renderedParseMode = rendered.parseMode;
		if (!renderedText) return false;
		if (renderedText.length > maxChars) {
			streamState.stopped = true;
			params.warn?.(`telegram stream preview stopped (text length ${renderedText.length} > ${maxChars})`);
			return false;
		}
		if (renderedText === lastSentText && renderedParseMode === lastSentParseMode) return true;
		const sendGeneration = generation;
		if (typeof streamMessageId !== "number" && minInitialChars != null && !streamState.final) {
			if (renderedText.length < minInitialChars) return false;
		}
		lastSentText = renderedText;
		lastSentParseMode = renderedParseMode;
		try {
			let sent = false;
			if (previewTransport === "draft") try {
				sent = await sendDraftTransportPreview({
					renderedText,
					renderedParseMode,
					sendGeneration
				});
			} catch (err) {
				if (!shouldFallbackFromDraftTransport(err)) throw err;
				previewTransport = "message";
				streamDraftId = void 0;
				params.warn?.("telegram stream preview: sendMessageDraft rejected by API; falling back to sendMessage/editMessageText");
				sent = await sendMessageTransportPreview({
					renderedText,
					renderedParseMode,
					sendGeneration
				});
			}
			else sent = await sendMessageTransportPreview({
				renderedText,
				renderedParseMode,
				sendGeneration
			});
			if (sent) {
				previewRevision += 1;
				lastDeliveredText = trimmed;
			}
			return sent;
		} catch (err) {
			streamState.stopped = true;
			params.warn?.(`telegram stream preview failed: ${err instanceof Error ? err.message : String(err)}`);
			return false;
		}
	};
	const { loop, update, stop, clear } = createFinalizableDraftLifecycle({
		throttleMs,
		state: streamState,
		sendOrEditStreamMessage,
		readMessageId: () => streamMessageId,
		clearMessageId: () => {
			streamMessageId = void 0;
		},
		isValidMessageId: (value) => typeof value === "number" && Number.isFinite(value),
		deleteMessage: async (messageId) => {
			await params.api.deleteMessage(chatId, messageId);
		},
		onDeleteSuccess: (messageId) => {
			params.log?.(`telegram stream preview deleted (chat=${chatId}, message=${messageId})`);
		},
		warn: params.warn,
		warnPrefix: "telegram stream preview cleanup failed"
	});
	const forceNewMessage = () => {
		streamState.final = false;
		generation += 1;
		messageSendAttempted = false;
		streamMessageId = void 0;
		if (previewTransport === "draft") streamDraftId = allocateTelegramDraftId();
		lastSentText = "";
		lastSentParseMode = void 0;
		loop.resetPending();
		loop.resetThrottleWindow();
	};
	/**
	* Materialize the current draft into a permanent message.
	* For draft transport: sends the accumulated text as a real sendMessage.
	* For message transport: the message is already permanent (noop).
	* Returns the permanent message id, or undefined if nothing to materialize.
	*/
	const materialize = async () => {
		await stop();
		if (previewTransport === "message" && typeof streamMessageId === "number") return streamMessageId;
		const renderedText = lastSentText || lastDeliveredText;
		if (!renderedText) return;
		const renderedParseMode = lastSentText ? lastSentParseMode : void 0;
		try {
			const { sent, usedThreadParams } = await sendRenderedMessageWithThreadFallback({
				renderedText,
				renderedParseMode,
				fallbackWarnMessage: "telegram stream preview materialize send failed with message_thread_id, retrying without thread"
			});
			const sentId = sent?.message_id;
			if (typeof sentId === "number" && Number.isFinite(sentId)) {
				streamMessageId = Math.trunc(sentId);
				if (resolvedDraftApi != null && streamDraftId != null) {
					const clearDraftId = streamDraftId;
					const clearThreadParams = usedThreadParams && threadParams?.message_thread_id != null ? { message_thread_id: threadParams.message_thread_id } : void 0;
					try {
						await resolvedDraftApi(chatId, clearDraftId, "", clearThreadParams);
					} catch {}
				}
				return streamMessageId;
			}
		} catch (err) {
			params.warn?.(`telegram stream preview materialize failed: ${err instanceof Error ? err.message : String(err)}`);
		}
	};
	params.log?.(`telegram stream preview ready (maxChars=${maxChars}, throttleMs=${throttleMs})`);
	return {
		update,
		flush: loop.flush,
		messageId: () => streamMessageId,
		previewMode: () => previewTransport,
		previewRevision: () => previewRevision,
		lastDeliveredText: () => lastDeliveredText,
		clear,
		stop,
		materialize,
		forceNewMessage,
		sendMayHaveLanded: () => messageSendAttempted && typeof streamMessageId !== "number"
	};
}
//#endregion
//#region extensions/telegram/src/lane-delivery-text-deliverer.ts
const MESSAGE_NOT_MODIFIED_RE = /400:\s*Bad Request:\s*message is not modified|MESSAGE_NOT_MODIFIED/i;
const MESSAGE_NOT_FOUND_RE = /400:\s*Bad Request:\s*message to edit not found|MESSAGE_ID_INVALID|message can't be edited/i;
function extractErrorText(err) {
	return typeof err === "string" ? err : err instanceof Error ? err.message : typeof err === "object" && err && "description" in err ? typeof err.description === "string" ? err.description : "" : "";
}
function isMessageNotModifiedError(err) {
	return MESSAGE_NOT_MODIFIED_RE.test(extractErrorText(err));
}
/**
* Returns true when Telegram rejects an edit because the target message can no
* longer be resolved or edited. The caller still needs preview context to
* decide whether to retain a different visible preview or fall back to send.
*/
function isMissingPreviewMessageError(err) {
	return MESSAGE_NOT_FOUND_RE.test(extractErrorText(err));
}
function result(kind, delivery) {
	if (kind === "preview-finalized") return {
		kind,
		delivery
	};
	return { kind };
}
function shouldSkipRegressivePreviewUpdate(args) {
	const currentPreviewText = args.currentPreviewText;
	if (currentPreviewText === void 0) return false;
	return currentPreviewText.startsWith(args.text) && args.text.length < currentPreviewText.length && (args.skipRegressive === "always" || args.hadPreviewMessage);
}
function resolvePreviewTarget(params) {
	const lanePreviewMessageId = params.lane.stream?.messageId();
	const previewMessageId = typeof params.previewMessageIdOverride === "number" ? params.previewMessageIdOverride : lanePreviewMessageId;
	const hadPreviewMessage = typeof params.previewMessageIdOverride === "number" || typeof lanePreviewMessageId === "number";
	return {
		hadPreviewMessage,
		previewMessageId: typeof previewMessageId === "number" ? previewMessageId : void 0,
		stopCreatesFirstPreview: params.stopBeforeEdit && !hadPreviewMessage && params.context === "final"
	};
}
function createLaneTextDeliverer(params) {
	const getLanePreviewText = (lane) => lane.lastPartialText;
	const markActivePreviewComplete = (laneName) => {
		params.activePreviewLifecycleByLane[laneName] = "complete";
		params.retainPreviewOnCleanupByLane[laneName] = true;
	};
	const isDraftPreviewLane = (lane) => lane.stream?.previewMode?.() === "draft";
	const canMaterializeDraftFinal = (lane, previewButtons) => {
		const hasPreviewButtons = Boolean(previewButtons && previewButtons.length > 0);
		return isDraftPreviewLane(lane) && !hasPreviewButtons && typeof lane.stream?.materialize === "function";
	};
	const tryMaterializeDraftPreviewForFinal = async (args) => {
		const stream = args.lane.stream;
		if (!stream || !isDraftPreviewLane(args.lane)) return;
		stream.update(args.text);
		const materializedMessageId = await stream.materialize?.();
		if (typeof materializedMessageId !== "number") {
			params.log(`telegram: ${args.laneName} draft preview materialize produced no message id; falling back to standard send`);
			return;
		}
		args.lane.lastPartialText = args.text;
		params.markDelivered();
		return materializedMessageId;
	};
	const tryEditPreviewMessage = async (args) => {
		try {
			await params.editPreview({
				laneName: args.laneName,
				messageId: args.messageId,
				text: args.text,
				previewButtons: args.previewButtons,
				context: args.context
			});
			if (args.updateLaneSnapshot) args.lane.lastPartialText = args.text;
			params.markDelivered();
			return "edited";
		} catch (err) {
			if (isMessageNotModifiedError(err)) {
				params.log(`telegram: ${args.laneName} preview ${args.context} edit returned "message is not modified"; treating as delivered`);
				params.markDelivered();
				return "edited";
			}
			if (args.context === "final") {
				if (args.finalTextAlreadyLanded) {
					params.log(`telegram: ${args.laneName} preview final edit failed after stop flush; keeping existing preview (${String(err)})`);
					params.markDelivered();
					return "retained";
				}
				if (isSafeToRetrySendError(err)) {
					params.log(`telegram: ${args.laneName} preview final edit failed before reaching Telegram; falling back to standard send (${String(err)})`);
					return "fallback";
				}
				if (isMissingPreviewMessageError(err)) {
					if (args.retainAlternatePreviewOnMissingTarget) {
						params.log(`telegram: ${args.laneName} preview final edit target missing; keeping alternate preview without fallback (${String(err)})`);
						params.markDelivered();
						return "retained";
					}
					params.log(`telegram: ${args.laneName} preview final edit target missing with no alternate preview; falling back to standard send (${String(err)})`);
					return "fallback";
				}
				if (isRecoverableTelegramNetworkError(err, { allowMessageMatch: true })) {
					params.log(`telegram: ${args.laneName} preview final edit may have landed despite network error; keeping existing preview (${String(err)})`);
					params.markDelivered();
					return "retained";
				}
				if (isTelegramClientRejection(err)) {
					params.log(`telegram: ${args.laneName} preview final edit rejected by Telegram (client error); falling back to standard send (${String(err)})`);
					return "fallback";
				}
				params.log(`telegram: ${args.laneName} preview final edit failed with ambiguous error; keeping existing preview to avoid duplicate (${String(err)})`);
				params.markDelivered();
				return "retained";
			}
			params.log(`telegram: ${args.laneName} preview ${args.context} edit failed; falling back to standard send (${String(err)})`);
			return "fallback";
		}
	};
	const tryUpdatePreviewForLane = async ({ lane, laneName, text, previewButtons, stopBeforeEdit = false, updateLaneSnapshot = false, skipRegressive, context, previewMessageId: previewMessageIdOverride, previewTextSnapshot }) => {
		const editPreview = (messageId, finalTextAlreadyLanded, retainAlternatePreviewOnMissingTarget) => tryEditPreviewMessage({
			laneName,
			messageId,
			text,
			context,
			previewButtons,
			updateLaneSnapshot,
			lane,
			finalTextAlreadyLanded,
			retainAlternatePreviewOnMissingTarget
		});
		const finalizePreview = (previewMessageId, finalTextAlreadyLanded, hadPreviewMessage, retainAlternatePreviewOnMissingTarget = false) => {
			if (shouldSkipRegressivePreviewUpdate({
				currentPreviewText: previewTextSnapshot ?? getLanePreviewText(lane),
				text,
				skipRegressive,
				hadPreviewMessage
			})) {
				params.markDelivered();
				return "regressive-skipped";
			}
			return editPreview(previewMessageId, finalTextAlreadyLanded, retainAlternatePreviewOnMissingTarget);
		};
		if (!lane.stream) return "fallback";
		if (resolvePreviewTarget({
			lane,
			previewMessageIdOverride,
			stopBeforeEdit,
			context
		}).stopCreatesFirstPreview) {
			lane.stream.update(text);
			await params.stopDraftLane(lane);
			const previewTargetAfterStop = resolvePreviewTarget({
				lane,
				stopBeforeEdit: false,
				context
			});
			if (typeof previewTargetAfterStop.previewMessageId !== "number") return "fallback";
			return finalizePreview(previewTargetAfterStop.previewMessageId, true, false);
		}
		if (stopBeforeEdit) await params.stopDraftLane(lane);
		const previewTargetAfterStop = resolvePreviewTarget({
			lane,
			previewMessageIdOverride,
			stopBeforeEdit: false,
			context
		});
		if (typeof previewTargetAfterStop.previewMessageId !== "number") {
			if (context === "final" && lane.hasStreamedMessage && lane.stream?.sendMayHaveLanded?.()) {
				params.log(`telegram: ${laneName} preview send may have landed despite missing message id; keeping to avoid duplicate`);
				params.markDelivered();
				return "retained";
			}
			return "fallback";
		}
		const activePreviewMessageId = lane.stream?.messageId();
		return finalizePreview(previewTargetAfterStop.previewMessageId, false, previewTargetAfterStop.hadPreviewMessage, typeof activePreviewMessageId === "number" && activePreviewMessageId !== previewTargetAfterStop.previewMessageId);
	};
	const consumeArchivedAnswerPreviewForFinal = async ({ lane, text, payload, previewButtons, canEditViaPreview }) => {
		const archivedPreview = params.archivedAnswerPreviews.shift();
		if (!archivedPreview) return;
		if (canEditViaPreview) {
			const finalized = await tryUpdatePreviewForLane({
				lane,
				laneName: "answer",
				text,
				previewButtons,
				stopBeforeEdit: false,
				skipRegressive: "existingOnly",
				context: "final",
				previewMessageId: archivedPreview.messageId,
				previewTextSnapshot: archivedPreview.textSnapshot
			});
			if (finalized === "edited") return result("preview-finalized", {
				content: text,
				messageId: archivedPreview.messageId
			});
			if (finalized === "regressive-skipped") return result("preview-finalized", {
				content: archivedPreview.textSnapshot,
				messageId: archivedPreview.messageId
			});
			if (finalized === "retained") {
				params.retainPreviewOnCleanupByLane.answer = true;
				return result("preview-retained");
			}
		}
		const delivered = await params.sendPayload(params.applyTextToPayload(payload, text));
		if (delivered || archivedPreview.deleteIfUnused !== false) try {
			await params.deletePreviewMessage(archivedPreview.messageId);
		} catch (err) {
			params.log(`telegram: archived answer preview cleanup failed (${archivedPreview.messageId}): ${String(err)}`);
		}
		return delivered ? result("sent") : result("skipped");
	};
	return async ({ laneName, text, payload, infoKind, previewButtons, allowPreviewUpdateForNonFinal = false }) => {
		const lane = params.lanes[laneName];
		const hasMedia = resolveSendableOutboundReplyParts(payload, { text }).hasMedia;
		const canEditViaPreview = !hasMedia && text.length > 0 && text.length <= params.draftMaxChars && !payload.isError;
		if (infoKind === "final") {
			if (params.activePreviewLifecycleByLane[laneName] === "transient") params.retainPreviewOnCleanupByLane[laneName] = false;
			if (laneName === "answer") {
				const archivedResult = await consumeArchivedAnswerPreviewForFinal({
					lane,
					text,
					payload,
					previewButtons,
					canEditViaPreview
				});
				if (archivedResult) return archivedResult;
			}
			if (canEditViaPreview && params.activePreviewLifecycleByLane[laneName] === "transient") {
				await params.flushDraftLane(lane);
				if (laneName === "answer") {
					const archivedResultAfterFlush = await consumeArchivedAnswerPreviewForFinal({
						lane,
						text,
						payload,
						previewButtons,
						canEditViaPreview
					});
					if (archivedResultAfterFlush) return archivedResultAfterFlush;
				}
				if (canMaterializeDraftFinal(lane, previewButtons)) {
					const materializedMessageId = await tryMaterializeDraftPreviewForFinal({
						lane,
						laneName,
						text
					});
					if (typeof materializedMessageId === "number") {
						markActivePreviewComplete(laneName);
						return result("preview-finalized", {
							content: text,
							messageId: materializedMessageId
						});
					}
				}
				const previewMessageId = lane.stream?.messageId();
				const finalized = await tryUpdatePreviewForLane({
					lane,
					laneName,
					text,
					previewButtons,
					stopBeforeEdit: true,
					skipRegressive: "existingOnly",
					context: "final"
				});
				if (finalized === "edited") {
					markActivePreviewComplete(laneName);
					return result("preview-finalized", {
						content: text,
						messageId: previewMessageId ?? lane.stream?.messageId()
					});
				}
				if (finalized === "regressive-skipped") {
					markActivePreviewComplete(laneName);
					return result("preview-finalized", {
						content: lane.lastPartialText,
						messageId: previewMessageId ?? lane.stream?.messageId()
					});
				}
				if (finalized === "retained") {
					markActivePreviewComplete(laneName);
					return result("preview-retained");
				}
			} else if (!hasMedia && !payload.isError && text.length > params.draftMaxChars) params.log(`telegram: preview final too long for edit (${text.length} > ${params.draftMaxChars}); falling back to standard send`);
			await params.stopDraftLane(lane);
			return await params.sendPayload(params.applyTextToPayload(payload, text)) ? result("sent") : result("skipped");
		}
		if (allowPreviewUpdateForNonFinal && canEditViaPreview) {
			if (isDraftPreviewLane(lane)) {
				const previewRevisionBeforeFlush = lane.stream?.previewRevision?.() ?? 0;
				lane.stream?.update(text);
				await params.flushDraftLane(lane);
				if (!((lane.stream?.previewRevision?.() ?? 0) > previewRevisionBeforeFlush)) {
					params.log(`telegram: ${laneName} draft preview update not emitted; falling back to standard send`);
					return await params.sendPayload(params.applyTextToPayload(payload, text)) ? result("sent") : result("skipped");
				}
				lane.lastPartialText = text;
				params.markDelivered();
				return result("preview-updated");
			}
			const updated = await tryUpdatePreviewForLane({
				lane,
				laneName,
				text,
				previewButtons,
				stopBeforeEdit: false,
				updateLaneSnapshot: true,
				skipRegressive: "always",
				context: "update"
			});
			if (updated === "edited" || updated === "regressive-skipped") return result("preview-updated");
		}
		return await params.sendPayload(params.applyTextToPayload(payload, text)) ? result("sent") : result("skipped");
	};
}
//#endregion
//#region extensions/telegram/src/lane-delivery-state.ts
function createLaneDeliveryStateTracker() {
	const state = {
		delivered: false,
		skippedNonSilent: 0,
		failedNonSilent: 0
	};
	return {
		markDelivered: () => {
			state.delivered = true;
		},
		markNonSilentSkip: () => {
			state.skippedNonSilent += 1;
		},
		markNonSilentFailure: () => {
			state.failedNonSilent += 1;
		},
		snapshot: () => ({ ...state })
	};
}
//#endregion
//#region extensions/telegram/src/reasoning-lane-coordinator.ts
const REASONING_MESSAGE_PREFIX = "Reasoning:\n";
const REASONING_TAG_PREFIXES = [
	"<think",
	"<thinking",
	"<thought",
	"<antthinking",
	"</think",
	"</thinking",
	"</thought",
	"</antthinking"
];
const THINKING_TAG_RE = /<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;
function extractThinkingFromTaggedStreamOutsideCode(text) {
	if (!text) return "";
	const codeRegions = findCodeRegions(text);
	let result = "";
	let lastIndex = 0;
	let inThinking = false;
	THINKING_TAG_RE.lastIndex = 0;
	for (const match of text.matchAll(THINKING_TAG_RE)) {
		const idx = match.index ?? 0;
		if (isInsideCode(idx, codeRegions)) continue;
		if (inThinking) result += text.slice(lastIndex, idx);
		inThinking = !(match[1] === "/");
		lastIndex = idx + match[0].length;
	}
	if (inThinking) result += text.slice(lastIndex);
	return result.trim();
}
function isPartialReasoningTagPrefix(text) {
	const trimmed = text.trimStart().toLowerCase();
	if (!trimmed.startsWith("<")) return false;
	if (trimmed.includes(">")) return false;
	return REASONING_TAG_PREFIXES.some((prefix) => prefix.startsWith(trimmed));
}
function splitTelegramReasoningText(text) {
	if (typeof text !== "string") return {};
	const trimmed = text.trim();
	if (isPartialReasoningTagPrefix(trimmed)) return {};
	if (trimmed.startsWith(REASONING_MESSAGE_PREFIX) && trimmed.length > 11) return { reasoningText: trimmed };
	const taggedReasoning = extractThinkingFromTaggedStreamOutsideCode(text);
	const strippedAnswer = stripReasoningTagsFromText(text, {
		mode: "strict",
		trim: "both"
	});
	if (!taggedReasoning && strippedAnswer === text) return { answerText: text };
	return {
		reasoningText: taggedReasoning ? formatReasoningMessage(taggedReasoning) : void 0,
		answerText: strippedAnswer || void 0
	};
}
function createTelegramReasoningStepState() {
	let reasoningStatus = "none";
	let bufferedFinalAnswer;
	const noteReasoningHint = () => {
		if (reasoningStatus === "none") reasoningStatus = "hinted";
	};
	const noteReasoningDelivered = () => {
		reasoningStatus = "delivered";
	};
	const shouldBufferFinalAnswer = () => {
		return reasoningStatus === "hinted" && !bufferedFinalAnswer;
	};
	const bufferFinalAnswer = (value) => {
		bufferedFinalAnswer = value;
	};
	const takeBufferedFinalAnswer = () => {
		const value = bufferedFinalAnswer;
		bufferedFinalAnswer = void 0;
		return value;
	};
	const resetForNextStep = () => {
		reasoningStatus = "none";
		bufferedFinalAnswer = void 0;
	};
	return {
		noteReasoningHint,
		noteReasoningDelivered,
		shouldBufferFinalAnswer,
		bufferFinalAnswer,
		takeBufferedFinalAnswer,
		resetForNextStep
	};
}
//#endregion
//#region extensions/telegram/src/bot-message-dispatch.ts
const EMPTY_RESPONSE_FALLBACK$1 = "No response generated. Please try again.";
/** Minimum chars before sending first streaming message (improves push notification UX) */
const DRAFT_MIN_INITIAL_CHARS = 30;
async function resolveStickerVisionSupport(cfg, agentId) {
	try {
		const catalog = await loadModelCatalog({ config: cfg });
		const defaultModel = resolveDefaultModelForAgent({
			cfg,
			agentId
		});
		const entry = findModelInCatalog(catalog, defaultModel.provider, defaultModel.model);
		if (!entry) return false;
		return modelSupportsVision(entry);
	} catch {
		return false;
	}
}
function pruneStickerMediaFromContext(ctxPayload, opts) {
	if (opts?.stickerMediaIncluded === false) return;
	const nextMediaPaths = Array.isArray(ctxPayload.MediaPaths) ? ctxPayload.MediaPaths.slice(1) : void 0;
	const nextMediaUrls = Array.isArray(ctxPayload.MediaUrls) ? ctxPayload.MediaUrls.slice(1) : void 0;
	const nextMediaTypes = Array.isArray(ctxPayload.MediaTypes) ? ctxPayload.MediaTypes.slice(1) : void 0;
	ctxPayload.MediaPaths = nextMediaPaths && nextMediaPaths.length > 0 ? nextMediaPaths : void 0;
	ctxPayload.MediaUrls = nextMediaUrls && nextMediaUrls.length > 0 ? nextMediaUrls : void 0;
	ctxPayload.MediaTypes = nextMediaTypes && nextMediaTypes.length > 0 ? nextMediaTypes : void 0;
	ctxPayload.MediaPath = ctxPayload.MediaPaths?.[0];
	ctxPayload.MediaUrl = ctxPayload.MediaUrls?.[0] ?? ctxPayload.MediaPath;
	ctxPayload.MediaType = ctxPayload.MediaTypes?.[0];
}
function resolveTelegramReasoningLevel(params) {
	const { cfg, sessionKey, agentId } = params;
	if (!sessionKey) return "off";
	try {
		const level = resolveSessionStoreEntry({
			store: loadSessionStore(resolveStorePath(cfg.session?.store, { agentId }), { skipCache: true }),
			sessionKey
		}).existing?.reasoningLevel;
		if (level === "on" || level === "stream") return level;
	} catch {}
	return "off";
}
const dispatchTelegramMessage = async ({ context, bot, cfg, runtime, replyToMode, streamMode, textLimit, telegramCfg, telegramDeps = defaultTelegramBotDeps, opts }) => {
	const { ctxPayload, msg, chatId, isGroup, groupConfig, threadSpec, historyKey, historyLimit, groupHistories, route, skillFilter, sendTyping, sendRecordVoice, ackReactionPromise, reactionApi, removeAckAfterReply, statusReactionController } = context;
	const draftMaxChars = Math.min(textLimit, 4096);
	const tableMode = resolveMarkdownTableMode({
		cfg,
		channel: "telegram",
		accountId: route.accountId
	});
	const renderDraftPreview = (text) => ({
		text: renderTelegramHtmlText(text, { tableMode }),
		parseMode: "HTML"
	});
	const accountBlockStreamingEnabled = typeof telegramCfg.blockStreaming === "boolean" ? telegramCfg.blockStreaming : cfg.agents?.defaults?.blockStreamingDefault === "on";
	const resolvedReasoningLevel = resolveTelegramReasoningLevel({
		cfg,
		sessionKey: ctxPayload.SessionKey,
		agentId: route.agentId
	});
	const forceBlockStreamingForReasoning = resolvedReasoningLevel === "on";
	const streamReasoningDraft = resolvedReasoningLevel === "stream";
	const previewStreamingEnabled = streamMode !== "off";
	const canStreamAnswerDraft = previewStreamingEnabled && !accountBlockStreamingEnabled && !forceBlockStreamingForReasoning;
	const canStreamReasoningDraft = canStreamAnswerDraft || streamReasoningDraft;
	const draftReplyToMessageId = replyToMode !== "off" && typeof msg.message_id === "number" ? msg.message_id : void 0;
	const draftMinInitialChars = DRAFT_MIN_INITIAL_CHARS;
	const useMessagePreviewTransportForDm = threadSpec?.scope === "dm" && canStreamAnswerDraft;
	const mediaLocalRoots = getAgentScopedMediaLocalRoots(cfg, route.agentId);
	const archivedAnswerPreviews = [];
	const archivedReasoningPreviewIds = [];
	const createDraftLane = (laneName, enabled) => {
		return {
			stream: enabled ? createTelegramDraftStream({
				api: bot.api,
				chatId,
				maxChars: draftMaxChars,
				thread: threadSpec,
				previewTransport: useMessagePreviewTransportForDm ? "message" : "auto",
				replyToMessageId: draftReplyToMessageId,
				minInitialChars: draftMinInitialChars,
				renderText: renderDraftPreview,
				onSupersededPreview: laneName === "answer" || laneName === "reasoning" ? (preview) => {
					if (laneName === "reasoning") {
						if (!archivedReasoningPreviewIds.includes(preview.messageId)) archivedReasoningPreviewIds.push(preview.messageId);
						return;
					}
					archivedAnswerPreviews.push({
						messageId: preview.messageId,
						textSnapshot: preview.textSnapshot,
						deleteIfUnused: true
					});
				} : void 0,
				log: logVerbose,
				warn: logVerbose
			}) : void 0,
			lastPartialText: "",
			hasStreamedMessage: false
		};
	};
	const lanes = {
		answer: createDraftLane("answer", canStreamAnswerDraft),
		reasoning: createDraftLane("reasoning", canStreamReasoningDraft)
	};
	const activePreviewLifecycleByLane = {
		answer: "transient",
		reasoning: "transient"
	};
	const retainPreviewOnCleanupByLane = {
		answer: false,
		reasoning: false
	};
	const answerLane = lanes.answer;
	const reasoningLane = lanes.reasoning;
	let splitReasoningOnNextStream = false;
	let skipNextAnswerMessageStartRotation = false;
	let draftLaneEventQueue = Promise.resolve();
	const reasoningStepState = createTelegramReasoningStepState();
	const enqueueDraftLaneEvent = (task) => {
		draftLaneEventQueue = draftLaneEventQueue.then(task).catch((err) => {
			logVerbose(`telegram: draft lane callback failed: ${String(err)}`);
		});
		return draftLaneEventQueue;
	};
	const splitTextIntoLaneSegments = (text) => {
		const split = splitTelegramReasoningText(text);
		const segments = [];
		const suppressReasoning = resolvedReasoningLevel === "off";
		if (split.reasoningText && !suppressReasoning) segments.push({
			lane: "reasoning",
			text: split.reasoningText
		});
		if (split.answerText) segments.push({
			lane: "answer",
			text: split.answerText
		});
		return {
			segments,
			suppressedReasoningOnly: Boolean(split.reasoningText) && suppressReasoning && !split.answerText
		};
	};
	const resetDraftLaneState = (lane) => {
		lane.lastPartialText = "";
		lane.hasStreamedMessage = false;
	};
	const rotateAnswerLaneForNewAssistantMessage = async () => {
		let didForceNewMessage = false;
		if (answerLane.hasStreamedMessage) {
			const previewMessageId = await answerLane.stream?.materialize?.() ?? answerLane.stream?.messageId();
			if (typeof previewMessageId === "number" && activePreviewLifecycleByLane.answer === "transient") archivedAnswerPreviews.push({
				messageId: previewMessageId,
				textSnapshot: answerLane.lastPartialText,
				deleteIfUnused: false
			});
			answerLane.stream?.forceNewMessage();
			didForceNewMessage = true;
		}
		resetDraftLaneState(answerLane);
		if (didForceNewMessage) {
			activePreviewLifecycleByLane.answer = "transient";
			retainPreviewOnCleanupByLane.answer = false;
		}
		return didForceNewMessage;
	};
	const updateDraftFromPartial = (lane, text) => {
		const laneStream = lane.stream;
		if (!laneStream || !text) return;
		if (text === lane.lastPartialText) return;
		lane.hasStreamedMessage = true;
		if (lane.lastPartialText && lane.lastPartialText.startsWith(text) && text.length < lane.lastPartialText.length) return;
		lane.lastPartialText = text;
		laneStream.update(text);
	};
	const ingestDraftLaneSegments = async (text) => {
		const split = splitTextIntoLaneSegments(text);
		if (split.segments.some((segment) => segment.lane === "answer") && activePreviewLifecycleByLane.answer !== "transient") skipNextAnswerMessageStartRotation = await rotateAnswerLaneForNewAssistantMessage();
		for (const segment of split.segments) {
			if (segment.lane === "reasoning") {
				reasoningStepState.noteReasoningHint();
				reasoningStepState.noteReasoningDelivered();
			}
			updateDraftFromPartial(lanes[segment.lane], segment.text);
		}
	};
	const flushDraftLane = async (lane) => {
		if (!lane.stream) return;
		await lane.stream.flush();
	};
	const disableBlockStreaming = !previewStreamingEnabled ? true : forceBlockStreamingForReasoning ? false : typeof telegramCfg.blockStreaming === "boolean" ? !telegramCfg.blockStreaming : canStreamAnswerDraft ? true : void 0;
	const chunkMode = resolveChunkMode(cfg, "telegram", route.accountId);
	const sticker = ctxPayload.Sticker;
	if (sticker?.fileId && sticker.fileUniqueId && ctxPayload.MediaPath) {
		const agentDir = resolveAgentDir(cfg, route.agentId);
		const stickerSupportsVision = await resolveStickerVisionSupport(cfg, route.agentId);
		let description = sticker.cachedDescription ?? null;
		if (!description) description = await describeStickerImage({
			imagePath: ctxPayload.MediaPath,
			cfg,
			agentDir,
			agentId: route.agentId
		});
		if (description) {
			const stickerContext = [sticker.emoji, sticker.setName ? `from "${sticker.setName}"` : null].filter(Boolean).join(" ");
			const formattedDesc = `[Sticker${stickerContext ? ` ${stickerContext}` : ""}] ${description}`;
			sticker.cachedDescription = description;
			if (!stickerSupportsVision) {
				ctxPayload.Body = formattedDesc;
				ctxPayload.BodyForAgent = formattedDesc;
				pruneStickerMediaFromContext(ctxPayload, { stickerMediaIncluded: ctxPayload.StickerMediaIncluded });
			}
			if (sticker.fileId) {
				cacheSticker({
					fileId: sticker.fileId,
					fileUniqueId: sticker.fileUniqueId,
					emoji: sticker.emoji,
					setName: sticker.setName,
					description,
					cachedAt: (/* @__PURE__ */ new Date()).toISOString(),
					receivedFrom: ctxPayload.From
				});
				logVerbose(`telegram: cached sticker description for ${sticker.fileUniqueId}`);
			} else logVerbose(`telegram: skipped sticker cache (missing fileId)`);
		}
	}
	const replyQuoteText = ctxPayload.ReplyToIsQuote && ctxPayload.ReplyToBody ? ctxPayload.ReplyToBody.trim() || void 0 : void 0;
	const deliveryState = createLaneDeliveryStateTracker();
	const clearGroupHistory = () => {
		if (isGroup && historyKey) clearHistoryEntriesIfEnabled({
			historyMap: groupHistories,
			historyKey,
			limit: historyLimit
		});
	};
	const deliveryBaseOptions = {
		chatId: String(chatId),
		accountId: route.accountId,
		sessionKeyForInternalHooks: ctxPayload.SessionKey,
		mirrorIsGroup: isGroup,
		mirrorGroupId: isGroup ? String(chatId) : void 0,
		token: opts.token,
		runtime,
		bot,
		mediaLocalRoots,
		replyToMode,
		textLimit,
		thread: threadSpec,
		tableMode,
		chunkMode,
		linkPreview: telegramCfg.linkPreview,
		replyQuoteText
	};
	const silentErrorReplies = telegramCfg.silentErrorReplies === true;
	const applyTextToPayload = (payload, text) => {
		if (payload.text === text) return payload;
		return {
			...payload,
			text
		};
	};
	const sendPayload = async (payload) => {
		const result = await deliverReplies({
			...deliveryBaseOptions,
			replies: [payload],
			onVoiceRecording: sendRecordVoice,
			silent: silentErrorReplies && payload.isError === true
		});
		if (result.delivered) deliveryState.markDelivered();
		return result.delivered;
	};
	const emitPreviewFinalizedHook = (result) => {
		if (result.kind !== "preview-finalized") return;
		emitInternalMessageSentHook({
			sessionKeyForInternalHooks: deliveryBaseOptions.sessionKeyForInternalHooks,
			chatId: deliveryBaseOptions.chatId,
			accountId: deliveryBaseOptions.accountId,
			content: result.delivery.content,
			success: true,
			messageId: result.delivery.messageId,
			isGroup: deliveryBaseOptions.mirrorIsGroup,
			groupId: deliveryBaseOptions.mirrorGroupId
		});
	};
	const deliverLaneText = createLaneTextDeliverer({
		lanes,
		archivedAnswerPreviews,
		activePreviewLifecycleByLane,
		retainPreviewOnCleanupByLane,
		draftMaxChars,
		applyTextToPayload,
		sendPayload,
		flushDraftLane,
		stopDraftLane: async (lane) => {
			await lane.stream?.stop();
		},
		editPreview: async ({ messageId, text, previewButtons }) => {
			await editMessageTelegram(chatId, messageId, text, {
				api: bot.api,
				cfg,
				accountId: route.accountId,
				linkPreview: telegramCfg.linkPreview,
				buttons: previewButtons
			});
		},
		deletePreviewMessage: async (messageId) => {
			await bot.api.deleteMessage(chatId, messageId);
		},
		log: logVerbose,
		markDelivered: () => {
			deliveryState.markDelivered();
		}
	});
	let queuedFinal = false;
	let hadErrorReplyFailureOrSkip = false;
	const isDmTopic = !isGroup && threadSpec.scope === "dm" && threadSpec.id != null;
	let isFirstTurnInSession = false;
	if (isDmTopic) try {
		const store = loadSessionStore(resolveStorePath(cfg.session?.store, { agentId: route.agentId }), { skipCache: true });
		const sessionKey = ctxPayload.SessionKey;
		if (sessionKey) isFirstTurnInSession = !resolveSessionStoreEntry({
			store,
			sessionKey
		}).existing?.systemSent;
		else logVerbose("auto-topic-label: SessionKey is absent, skipping first-turn detection");
	} catch (err) {
		logVerbose(`auto-topic-label: session store error: ${err instanceof Error ? err.message : String(err)}`);
	}
	if (statusReactionController) statusReactionController.setThinking();
	const { onModelSelected, ...replyPipeline } = createChannelReplyPipeline({
		cfg,
		agentId: route.agentId,
		channel: "telegram",
		accountId: route.accountId,
		typing: {
			start: sendTyping,
			onStartError: (err) => {
				logTypingFailure({
					log: logVerbose,
					channel: "telegram",
					target: String(chatId),
					error: err
				});
			}
		}
	});
	let dispatchError;
	try {
		({queuedFinal} = await telegramDeps.dispatchReplyWithBufferedBlockDispatcher({
			ctx: ctxPayload,
			cfg,
			dispatcherOptions: {
				...replyPipeline,
				deliver: async (payload, info) => {
					if (payload.isError === true) hadErrorReplyFailureOrSkip = true;
					if (info.kind === "final") await enqueueDraftLaneEvent(async () => {});
					if (shouldSuppressLocalTelegramExecApprovalPrompt({
						cfg,
						accountId: route.accountId,
						payload
					})) {
						queuedFinal = true;
						return;
					}
					const previewButtons = (payload.channelData?.telegram)?.buttons;
					const split = splitTextIntoLaneSegments(payload.text);
					const segments = split.segments;
					const reply = resolveSendableOutboundReplyParts(payload);
					reply.hasMedia;
					const flushBufferedFinalAnswer = async () => {
						const buffered = reasoningStepState.takeBufferedFinalAnswer();
						if (!buffered) return;
						const bufferedButtons = (buffered.payload.channelData?.telegram)?.buttons;
						await deliverLaneText({
							laneName: "answer",
							text: buffered.text,
							payload: buffered.payload,
							infoKind: "final",
							previewButtons: bufferedButtons
						});
						reasoningStepState.resetForNextStep();
					};
					for (const segment of segments) {
						if (segment.lane === "answer" && info.kind === "final" && reasoningStepState.shouldBufferFinalAnswer()) {
							reasoningStepState.bufferFinalAnswer({
								payload,
								text: segment.text
							});
							continue;
						}
						if (segment.lane === "reasoning") reasoningStepState.noteReasoningHint();
						const result = await deliverLaneText({
							laneName: segment.lane,
							text: segment.text,
							payload,
							infoKind: info.kind,
							previewButtons,
							allowPreviewUpdateForNonFinal: segment.lane === "reasoning"
						});
						if (info.kind === "final") emitPreviewFinalizedHook(result);
						if (segment.lane === "reasoning") {
							if (result.kind !== "skipped") {
								reasoningStepState.noteReasoningDelivered();
								await flushBufferedFinalAnswer();
							}
							continue;
						}
						if (info.kind === "final") {
							if (reasoningLane.hasStreamedMessage) {
								activePreviewLifecycleByLane.reasoning = "complete";
								retainPreviewOnCleanupByLane.reasoning = true;
							}
							reasoningStepState.resetForNextStep();
						}
					}
					if (segments.length > 0) return;
					if (split.suppressedReasoningOnly) {
						if (reply.hasMedia) await sendPayload(typeof payload.text === "string" ? {
							...payload,
							text: ""
						} : payload);
						if (info.kind === "final") await flushBufferedFinalAnswer();
						return;
					}
					if (info.kind === "final") {
						await answerLane.stream?.stop();
						await reasoningLane.stream?.stop();
						reasoningStepState.resetForNextStep();
					}
					if (!(reply.hasMedia || reply.text.length > 0)) {
						if (info.kind === "final") await flushBufferedFinalAnswer();
						return;
					}
					await sendPayload(payload);
					if (info.kind === "final") await flushBufferedFinalAnswer();
				},
				onSkip: (payload, info) => {
					if (payload.isError === true) hadErrorReplyFailureOrSkip = true;
					if (info.reason !== "silent") deliveryState.markNonSilentSkip();
				},
				onError: (err, info) => {
					deliveryState.markNonSilentFailure();
					runtime.error?.(danger(`telegram ${info.kind} reply failed: ${String(err)}`));
				}
			},
			replyOptions: {
				skillFilter,
				disableBlockStreaming,
				onPartialReply: answerLane.stream || reasoningLane.stream ? (payload) => enqueueDraftLaneEvent(async () => {
					await ingestDraftLaneSegments(payload.text);
				}) : void 0,
				onReasoningStream: reasoningLane.stream ? (payload) => enqueueDraftLaneEvent(async () => {
					if (splitReasoningOnNextStream) {
						reasoningLane.stream?.forceNewMessage();
						resetDraftLaneState(reasoningLane);
						splitReasoningOnNextStream = false;
					}
					await ingestDraftLaneSegments(payload.text);
				}) : void 0,
				onAssistantMessageStart: answerLane.stream ? () => enqueueDraftLaneEvent(async () => {
					reasoningStepState.resetForNextStep();
					if (skipNextAnswerMessageStartRotation) {
						skipNextAnswerMessageStartRotation = false;
						activePreviewLifecycleByLane.answer = "transient";
						retainPreviewOnCleanupByLane.answer = false;
						return;
					}
					await rotateAnswerLaneForNewAssistantMessage();
					activePreviewLifecycleByLane.answer = "transient";
					retainPreviewOnCleanupByLane.answer = false;
				}) : void 0,
				onReasoningEnd: reasoningLane.stream ? () => enqueueDraftLaneEvent(async () => {
					splitReasoningOnNextStream = reasoningLane.hasStreamedMessage;
				}) : void 0,
				onToolStart: statusReactionController ? async (payload) => {
					await statusReactionController.setTool(payload.name);
				} : void 0,
				onCompactionStart: statusReactionController ? () => statusReactionController.setCompacting() : void 0,
				onCompactionEnd: statusReactionController ? async () => {
					statusReactionController.cancelPending();
					await statusReactionController.setThinking();
				} : void 0,
				onModelSelected
			}
		}));
	} catch (err) {
		dispatchError = err;
		runtime.error?.(danger(`telegram dispatch failed: ${String(err)}`));
	} finally {
		await draftLaneEventQueue;
		const streamCleanupStates = /* @__PURE__ */ new Map();
		const lanesToCleanup = [{
			laneName: "answer",
			lane: answerLane
		}, {
			laneName: "reasoning",
			lane: reasoningLane
		}];
		for (const laneState of lanesToCleanup) {
			const stream = laneState.lane.stream;
			if (!stream) continue;
			const activePreviewMessageId = stream.messageId();
			const hasBoundaryFinalizedActivePreview = laneState.laneName === "answer" && typeof activePreviewMessageId === "number" && archivedAnswerPreviews.some((p) => p.deleteIfUnused === false && p.messageId === activePreviewMessageId);
			const shouldClear = !retainPreviewOnCleanupByLane[laneState.laneName] && !hasBoundaryFinalizedActivePreview;
			const existing = streamCleanupStates.get(stream);
			if (!existing) {
				streamCleanupStates.set(stream, { shouldClear });
				continue;
			}
			existing.shouldClear = existing.shouldClear && shouldClear;
		}
		for (const [stream, cleanupState] of streamCleanupStates) {
			await stream.stop();
			if (cleanupState.shouldClear) await stream.clear();
		}
		for (const archivedPreview of archivedAnswerPreviews) {
			if (archivedPreview.deleteIfUnused === false) continue;
			try {
				await bot.api.deleteMessage(chatId, archivedPreview.messageId);
			} catch (err) {
				logVerbose(`telegram: archived answer preview cleanup failed (${archivedPreview.messageId}): ${String(err)}`);
			}
		}
		for (const messageId of archivedReasoningPreviewIds) try {
			await bot.api.deleteMessage(chatId, messageId);
		} catch (err) {
			logVerbose(`telegram: archived reasoning preview cleanup failed (${messageId}): ${String(err)}`);
		}
	}
	let sentFallback = false;
	const deliverySummary = deliveryState.snapshot();
	if (dispatchError || !deliverySummary.delivered && (deliverySummary.skippedNonSilent > 0 || deliverySummary.failedNonSilent > 0)) sentFallback = (await deliverReplies({
		replies: [{ text: dispatchError ? "Something went wrong while processing your request. Please try again." : EMPTY_RESPONSE_FALLBACK$1 }],
		...deliveryBaseOptions,
		silent: silentErrorReplies && (dispatchError != null || hadErrorReplyFailureOrSkip)
	})).delivered;
	const hasFinalResponse = queuedFinal || sentFallback;
	if (statusReactionController && !hasFinalResponse) statusReactionController.setError().catch((err) => {
		logVerbose(`telegram: status reaction error finalize failed: ${String(err)}`);
	});
	if (!hasFinalResponse) {
		clearGroupHistory();
		return;
	}
	if (isDmTopic && isFirstTurnInSession) {
		const userMessage = (ctxPayload.RawBody ?? ctxPayload.Body ?? "").slice(0, 500);
		if (userMessage.trim()) {
			const agentDir = resolveAgentDir(cfg, route.agentId);
			const directAutoTopicLabel = (!isGroup ? groupConfig : void 0)?.autoTopicLabel;
			const accountAutoTopicLabel = telegramCfg?.autoTopicLabel;
			const autoTopicConfig = resolveAutoTopicLabelConfig(directAutoTopicLabel, accountAutoTopicLabel);
			if (autoTopicConfig) {
				const topicThreadId = threadSpec.id;
				(async () => {
					try {
						const label = await generateTopicLabel({
							userMessage,
							prompt: autoTopicConfig.prompt,
							cfg,
							agentId: route.agentId,
							agentDir
						});
						if (!label) {
							logVerbose("auto-topic-label: LLM returned empty label");
							return;
						}
						logVerbose(`auto-topic-label: generated label (len=${label.length})`);
						await bot.api.editForumTopic(chatId, topicThreadId, { name: label });
						logVerbose(`auto-topic-label: renamed topic ${chatId}/${topicThreadId}`);
					} catch (err) {
						logVerbose(`auto-topic-label: failed: ${err instanceof Error ? err.message : String(err)}`);
					}
				})();
			}
		}
	}
	if (statusReactionController) statusReactionController.setDone().catch((err) => {
		logVerbose(`telegram: status reaction finalize failed: ${String(err)}`);
	});
	else removeAckReactionAfterReply({
		removeAfterReply: removeAckAfterReply,
		ackReactionPromise,
		ackReactionValue: ackReactionPromise ? "ack" : null,
		remove: () => reactionApi?.(chatId, msg.message_id ?? 0, []) ?? Promise.resolve(),
		onError: (err) => {
			if (!msg.message_id) return;
			logAckFailure({
				log: logVerbose,
				channel: "telegram",
				target: `${chatId}/${msg.message_id}`,
				error: err
			});
		}
	});
	clearGroupHistory();
};
//#endregion
//#region extensions/telegram/src/bot-message.ts
const createTelegramMessageProcessor = (deps) => {
	const { bot, cfg, account, telegramCfg, historyLimit, groupHistories, dmPolicy, allowFrom, groupAllowFrom, ackReactionScope, logger, resolveGroupActivation, resolveGroupRequireMention, resolveTelegramGroupConfig, loadFreshConfig, sendChatActionHandler, runtime, replyToMode, streamMode, textLimit, telegramDeps, opts } = deps;
	return async (primaryCtx, allMedia, storeAllowFrom, options, replyMedia) => {
		const ingressReceivedAtMs = typeof options?.receivedAtMs === "number" && Number.isFinite(options.receivedAtMs) ? options.receivedAtMs : void 0;
		const ingressDebugEnabled = shouldLogVerbose() || process.env.OPENCLAW_DEBUG_TELEGRAM_INGRESS === "1";
		const ingressContextStartMs = ingressReceivedAtMs ? Date.now() : void 0;
		const context = await buildTelegramMessageContext({
			primaryCtx,
			allMedia,
			replyMedia,
			storeAllowFrom,
			options,
			bot,
			cfg,
			account,
			historyLimit,
			groupHistories,
			dmPolicy,
			allowFrom,
			groupAllowFrom,
			ackReactionScope,
			logger,
			resolveGroupActivation,
			resolveGroupRequireMention,
			resolveTelegramGroupConfig,
			sendChatActionHandler,
			loadFreshConfig,
			upsertPairingRequest: telegramDeps.upsertChannelPairingRequest
		});
		if (!context) {
			if (ingressDebugEnabled && ingressReceivedAtMs && ingressContextStartMs) logVerbose(`telegram ingress: chatId=${primaryCtx.message.chat.id} dropped after ${Date.now() - ingressReceivedAtMs}ms${options?.ingressBuffer ? ` buffer=${options.ingressBuffer}` : ""}`);
			return;
		}
		if (ingressDebugEnabled && ingressReceivedAtMs && ingressContextStartMs) logVerbose(`telegram ingress: chatId=${context.chatId} contextReadyMs=${Date.now() - ingressReceivedAtMs} preDispatchMs=${Date.now() - ingressContextStartMs}${options?.ingressBuffer ? ` buffer=${options.ingressBuffer}` : ""}`);
		try {
			await dispatchTelegramMessage({
				context,
				bot,
				cfg,
				runtime,
				replyToMode,
				streamMode,
				textLimit,
				telegramCfg,
				telegramDeps,
				opts
			});
			if (ingressDebugEnabled && ingressReceivedAtMs) logVerbose(`telegram ingress: chatId=${context.chatId} dispatchCompleteMs=${Date.now() - ingressReceivedAtMs}${options?.ingressBuffer ? ` buffer=${options.ingressBuffer}` : ""}`);
		} catch (err) {
			runtime.error?.(danger(`telegram message processing failed: ${String(err)}`));
			try {
				await bot.api.sendMessage(context.chatId, "Something went wrong while processing your request. Please try again.", context.threadSpec?.id != null ? { message_thread_id: context.threadSpec.id } : void 0);
			} catch {}
		}
	};
};
//#endregion
//#region extensions/telegram/src/bot-native-command-menu.ts
const TELEGRAM_MAX_COMMANDS = 100;
const TELEGRAM_COMMAND_RETRY_RATIO = .8;
function isBotCommandsTooMuchError(err) {
	if (!err) return false;
	const pattern = /\bBOT_COMMANDS_TOO_MUCH\b/i;
	if (typeof err === "string") return pattern.test(err);
	if (err instanceof Error) {
		if (pattern.test(err.message)) return true;
	}
	if (typeof err === "object") {
		const maybe = err;
		if (typeof maybe.description === "string" && pattern.test(maybe.description)) return true;
		if (typeof maybe.message === "string" && pattern.test(maybe.message)) return true;
	}
	return false;
}
function formatTelegramCommandRetrySuccessLog(params) {
	const omittedCount = Math.max(0, params.initialCount - params.acceptedCount);
	return `Telegram accepted ${params.acceptedCount} commands after BOT_COMMANDS_TOO_MUCH (started with ${params.initialCount}; omitted ${omittedCount}). Reduce plugin/skill/custom commands to expose more menu entries.`;
}
function buildPluginTelegramMenuCommands(params) {
	const { specs, existingCommands } = params;
	const commands = [];
	const issues = [];
	const pluginCommandNames = /* @__PURE__ */ new Set();
	for (const spec of specs) {
		const rawName = typeof spec.name === "string" ? spec.name : "";
		const normalized = normalizeTelegramCommandName(rawName);
		if (!normalized || !TELEGRAM_COMMAND_NAME_PATTERN.test(normalized)) {
			const invalidName = rawName.trim() ? rawName : "<unknown>";
			issues.push(`Plugin command "/${invalidName}" is invalid for Telegram (use a-z, 0-9, underscore; max 32 chars).`);
			continue;
		}
		const description = typeof spec.description === "string" ? spec.description.trim() : "";
		if (!description) {
			issues.push(`Plugin command "/${normalized}" is missing a description.`);
			continue;
		}
		if (existingCommands.has(normalized)) {
			if (pluginCommandNames.has(normalized)) issues.push(`Plugin command "/${normalized}" is duplicated.`);
			else issues.push(`Plugin command "/${normalized}" conflicts with an existing Telegram command.`);
			continue;
		}
		pluginCommandNames.add(normalized);
		existingCommands.add(normalized);
		commands.push({
			command: normalized,
			description
		});
	}
	return {
		commands,
		issues
	};
}
function buildCappedTelegramMenuCommands(params) {
	const { allCommands } = params;
	const maxCommands = params.maxCommands ?? 100;
	const totalCommands = allCommands.length;
	const overflowCount = Math.max(0, totalCommands - maxCommands);
	return {
		commandsToRegister: allCommands.slice(0, maxCommands),
		totalCommands,
		maxCommands,
		overflowCount
	};
}
/** Compute a stable hash of the command list for change detection. */
function hashCommandList(commands) {
	const sorted = [...commands].toSorted((a, b) => a.command.localeCompare(b.command));
	return createHash("sha256").update(JSON.stringify(sorted)).digest("hex").slice(0, 16);
}
function hashBotIdentity(botIdentity) {
	const normalized = botIdentity?.trim();
	if (!normalized) return "no-bot";
	return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
}
function resolveCommandHashPath(accountId, botIdentity) {
	const stateDir = resolveStateDir(process.env, os.homedir);
	const normalizedAccount = accountId?.trim().replace(/[^a-z0-9._-]+/gi, "_") || "default";
	const botHash = hashBotIdentity(botIdentity);
	return path.join(stateDir, "telegram", `command-hash-${normalizedAccount}-${botHash}.txt`);
}
async function readCachedCommandHash(accountId, botIdentity) {
	try {
		return (await fs$1.readFile(resolveCommandHashPath(accountId, botIdentity), "utf-8")).trim();
	} catch {
		return null;
	}
}
async function writeCachedCommandHash(accountId, botIdentity, hash) {
	const filePath = resolveCommandHashPath(accountId, botIdentity);
	try {
		await fs$1.mkdir(path.dirname(filePath), { recursive: true });
		await fs$1.writeFile(filePath, hash, "utf-8");
	} catch {}
}
function syncTelegramMenuCommands(params) {
	const { bot, runtime, commandsToRegister, accountId, botIdentity } = params;
	const sync = async () => {
		const currentHash = hashCommandList(commandsToRegister);
		if (await readCachedCommandHash(accountId, botIdentity) === currentHash) {
			logVerbose("telegram: command menu unchanged; skipping sync");
			return;
		}
		let deleteSucceeded = true;
		if (typeof bot.api.deleteMyCommands === "function") deleteSucceeded = await withTelegramApiErrorLogging({
			operation: "deleteMyCommands",
			runtime,
			fn: () => bot.api.deleteMyCommands()
		}).then(() => true).catch(() => false);
		if (commandsToRegister.length === 0) {
			if (!deleteSucceeded) {
				runtime.log?.("telegram: deleteMyCommands failed; skipping empty-menu hash cache write");
				return;
			}
			await writeCachedCommandHash(accountId, botIdentity, currentHash);
			return;
		}
		let retryCommands = commandsToRegister;
		const initialCommandCount = commandsToRegister.length;
		while (retryCommands.length > 0) try {
			await withTelegramApiErrorLogging({
				operation: "setMyCommands",
				runtime,
				shouldLog: (err) => !isBotCommandsTooMuchError(err),
				fn: () => bot.api.setMyCommands(retryCommands)
			});
			if (retryCommands.length < initialCommandCount) runtime.log?.(formatTelegramCommandRetrySuccessLog({
				initialCount: initialCommandCount,
				acceptedCount: retryCommands.length
			}));
			await writeCachedCommandHash(accountId, botIdentity, currentHash);
			return;
		} catch (err) {
			if (!isBotCommandsTooMuchError(err)) throw err;
			const nextCount = Math.floor(retryCommands.length * TELEGRAM_COMMAND_RETRY_RATIO);
			const reducedCount = nextCount < retryCommands.length ? nextCount : retryCommands.length - 1;
			if (reducedCount <= 0) {
				runtime.error?.("Telegram rejected native command registration (BOT_COMMANDS_TOO_MUCH); leaving menu empty. Reduce commands or disable channels.telegram.commands.native.");
				return;
			}
			runtime.log?.(`Telegram rejected ${retryCommands.length} commands (BOT_COMMANDS_TOO_MUCH); retrying with ${reducedCount}.`);
			retryCommands = retryCommands.slice(0, reducedCount);
		}
	};
	sync().catch((err) => {
		runtime.error?.(`Telegram command sync failed: ${String(err)}`);
	});
}
//#endregion
//#region extensions/telegram/src/bot-native-commands.ts
const EMPTY_RESPONSE_FALLBACK = "No response generated. Please try again.";
async function resolveTelegramCommandAuth(params) {
	const { msg, bot, cfg, accountId, telegramCfg, readChannelAllowFromStore, allowFrom, groupAllowFrom, useAccessGroups, resolveGroupPolicy, resolveTelegramGroupConfig, requireAuth } = params;
	const chatId = msg.chat.id;
	const isGroup = msg.chat.type === "group" || msg.chat.type === "supergroup";
	const messageThreadId = msg.message_thread_id;
	const isForum = msg.chat.is_forum === true;
	const threadParams = buildTelegramThreadParams(resolveTelegramThreadSpec({
		isGroup,
		isForum,
		messageThreadId
	})) ?? {};
	const { resolvedThreadId, dmThreadId, storeAllowFrom, groupConfig, topicConfig, groupAllowOverride, effectiveGroupAllow, hasGroupAllowOverride } = await resolveTelegramGroupAllowFromContext({
		chatId,
		accountId,
		isGroup,
		isForum,
		messageThreadId,
		groupAllowFrom,
		readChannelAllowFromStore,
		resolveTelegramGroupConfig
	});
	const effectiveDmPolicy = !isGroup && groupConfig && "dmPolicy" in groupConfig ? groupConfig.dmPolicy ?? telegramCfg.dmPolicy ?? "pairing" : telegramCfg.dmPolicy ?? "pairing";
	const requireTopic = groupConfig?.requireTopic;
	if (!isGroup && requireTopic === true && dmThreadId == null) {
		logVerbose(`Blocked telegram command in DM ${chatId}: requireTopic=true but no topic present`);
		return null;
	}
	const dmAllowFrom = groupAllowOverride ?? allowFrom;
	const senderId = msg.from?.id ? String(msg.from.id) : "";
	const senderUsername = msg.from?.username ?? "";
	const commandsAllowFrom = cfg.commands?.allowFrom;
	const commandsAllowFromConfigured = commandsAllowFrom != null && typeof commandsAllowFrom === "object" && (Array.isArray(commandsAllowFrom.telegram) || Array.isArray(commandsAllowFrom["*"]));
	const commandsAllowFromAccess = commandsAllowFromConfigured ? resolveCommandAuthorization({
		ctx: {
			Provider: "telegram",
			Surface: "telegram",
			OriginatingChannel: "telegram",
			AccountId: accountId,
			ChatType: isGroup ? "group" : "direct",
			From: isGroup ? buildTelegramGroupFrom(chatId, resolvedThreadId) : `telegram:${chatId}`,
			SenderId: senderId || void 0,
			SenderUsername: senderUsername || void 0
		},
		cfg,
		commandAuthorized: false
	}) : null;
	const sendAuthMessage = async (text) => {
		await withTelegramApiErrorLogging({
			operation: "sendMessage",
			fn: () => bot.api.sendMessage(chatId, text, threadParams)
		});
		return null;
	};
	const rejectNotAuthorized = async () => {
		return await sendAuthMessage("You are not authorized to use this command.");
	};
	const baseAccess = evaluateTelegramGroupBaseAccess({
		isGroup,
		groupConfig,
		topicConfig,
		hasGroupAllowOverride,
		effectiveGroupAllow,
		senderId,
		senderUsername,
		enforceAllowOverride: requireAuth,
		requireSenderForAllowOverride: true
	});
	if (!baseAccess.allowed) {
		if (baseAccess.reason === "group-disabled") return await sendAuthMessage("This group is disabled.");
		if (baseAccess.reason === "topic-disabled") return await sendAuthMessage("This topic is disabled.");
		return await rejectNotAuthorized();
	}
	const policyAccess = evaluateTelegramGroupPolicyAccess({
		isGroup,
		chatId,
		cfg,
		telegramCfg,
		topicConfig,
		groupConfig,
		effectiveGroupAllow,
		senderId,
		senderUsername,
		resolveGroupPolicy,
		enforcePolicy: useAccessGroups,
		useTopicAndGroupOverrides: false,
		enforceAllowlistAuthorization: requireAuth && !commandsAllowFromConfigured,
		allowEmptyAllowlistEntries: true,
		requireSenderForAllowlistAuthorization: true,
		checkChatAllowlist: useAccessGroups
	});
	if (!policyAccess.allowed) {
		if (policyAccess.reason === "group-policy-disabled") return await sendAuthMessage("Telegram group commands are disabled.");
		if (policyAccess.reason === "group-policy-allowlist-no-sender" || policyAccess.reason === "group-policy-allowlist-unauthorized") return await rejectNotAuthorized();
		if (policyAccess.reason === "group-chat-not-allowed") return await sendAuthMessage("This group is not allowed.");
	}
	const dmAllow = normalizeDmAllowFromWithStore({
		allowFrom: dmAllowFrom,
		storeAllowFrom: isGroup ? [] : storeAllowFrom,
		dmPolicy: effectiveDmPolicy
	});
	const senderAllowed = isSenderAllowed({
		allow: dmAllow,
		senderId,
		senderUsername
	});
	const groupSenderAllowed = isGroup ? isSenderAllowed({
		allow: effectiveGroupAllow,
		senderId,
		senderUsername
	}) : false;
	const commandAuthorized = commandsAllowFromConfigured ? Boolean(commandsAllowFromAccess?.isAuthorizedSender) : resolveCommandAuthorizedFromAuthorizers({
		useAccessGroups,
		authorizers: [{
			configured: dmAllow.hasEntries,
			allowed: senderAllowed
		}, ...isGroup ? [{
			configured: effectiveGroupAllow.hasEntries,
			allowed: groupSenderAllowed
		}] : []],
		modeWhenAccessGroupsOff: "configured"
	});
	if (requireAuth && !commandAuthorized) return await rejectNotAuthorized();
	return {
		chatId,
		isGroup,
		isForum,
		resolvedThreadId,
		senderId,
		senderUsername,
		groupConfig,
		topicConfig,
		commandAuthorized
	};
}
const registerTelegramNativeCommands = ({ bot, cfg, runtime, accountId, telegramCfg, allowFrom, groupAllowFrom, replyToMode, textLimit, useAccessGroups, nativeEnabled, nativeSkillsEnabled, nativeDisabledExplicit, resolveGroupPolicy, resolveTelegramGroupConfig, shouldSkipUpdate, telegramDeps = defaultTelegramBotDeps, opts }) => {
	const boundRoute = nativeEnabled && nativeSkillsEnabled ? resolveAgentRoute({
		cfg,
		channel: "telegram",
		accountId
	}) : null;
	if (nativeEnabled && nativeSkillsEnabled && !boundRoute) runtime.log?.("nativeSkillsEnabled is true but no agent route is bound for this Telegram account; skill commands will not appear in the native menu.");
	const skillCommands = nativeEnabled && nativeSkillsEnabled && boundRoute ? telegramDeps.listSkillCommandsForAgents({
		cfg,
		agentIds: [boundRoute.agentId]
	}) : [];
	const nativeCommands = nativeEnabled ? listNativeCommandSpecsForConfig(cfg, {
		skillCommands,
		provider: "telegram"
	}) : [];
	const reservedCommands = new Set(listNativeCommandSpecs().map((command) => normalizeTelegramCommandName(command.name)));
	for (const command of skillCommands) reservedCommands.add(command.name.toLowerCase());
	const customResolution = resolveTelegramCustomCommands({
		commands: telegramCfg.customCommands,
		reservedCommands
	});
	for (const issue of customResolution.issues) runtime.error?.(danger(issue.message));
	const customCommands = customResolution.commands;
	const pluginCatalog = buildPluginTelegramMenuCommands({
		specs: getPluginCommandSpecs("telegram"),
		existingCommands: new Set([...nativeCommands.map((command) => normalizeTelegramCommandName(command.name)), ...customCommands.map((command) => command.command)].map((command) => command.toLowerCase()))
	});
	for (const issue of pluginCatalog.issues) runtime.error?.(danger(issue));
	const loadFreshRuntimeConfig = () => telegramDeps.loadConfig();
	const resolveFreshTelegramConfig = (runtimeCfg) => {
		try {
			return resolveTelegramAccount({
				cfg: runtimeCfg,
				accountId
			}).config;
		} catch (error) {
			logVerbose(`telegram native command: failed to load fresh account config for ${accountId}; using startup snapshot: ${String(error)}`);
			return telegramCfg;
		}
	};
	const { commandsToRegister, totalCommands, maxCommands, overflowCount } = buildCappedTelegramMenuCommands({ allCommands: [
		...nativeCommands.map((command) => {
			const normalized = normalizeTelegramCommandName(command.name);
			if (!TELEGRAM_COMMAND_NAME_PATTERN.test(normalized)) {
				runtime.error?.(danger(`Native command "${command.name}" is invalid for Telegram (resolved to "${normalized}"). Skipping.`));
				return null;
			}
			return {
				command: normalized,
				description: command.description
			};
		}).filter((cmd) => cmd !== null),
		...nativeEnabled ? pluginCatalog.commands : [],
		...customCommands
	] });
	if (overflowCount > 0) runtime.log?.(`Telegram limits bots to ${maxCommands} commands. ${totalCommands} configured; registering first ${maxCommands}. Use channels.telegram.commands.native: false to disable, or reduce plugin/skill/custom commands.`);
	syncTelegramMenuCommands({
		bot,
		runtime,
		commandsToRegister,
		accountId,
		botIdentity: opts.token
	});
	const resolveCommandRuntimeContext = async (params) => {
		const { msg, runtimeCfg, isGroup, isForum, resolvedThreadId, senderId, topicAgentId } = params;
		const chatId = msg.chat.id;
		const messageThreadId = msg.message_thread_id;
		const threadSpec = resolveTelegramThreadSpec({
			isGroup,
			isForum,
			messageThreadId
		});
		let { route, configuredBinding } = resolveTelegramConversationRoute({
			cfg: runtimeCfg,
			accountId,
			chatId,
			isGroup,
			resolvedThreadId,
			replyThreadId: threadSpec.id,
			senderId,
			topicAgentId
		});
		if (configuredBinding) {
			const ensured = await ensureConfiguredBindingRouteReady({
				cfg: runtimeCfg,
				bindingResolution: configuredBinding
			});
			if (!ensured.ok) {
				logVerbose(`telegram native command: configured ACP binding unavailable for topic ${configuredBinding.record.conversation.conversationId}: ${ensured.error}`);
				await withTelegramApiErrorLogging({
					operation: "sendMessage",
					runtime,
					fn: () => bot.api.sendMessage(chatId, "Configured ACP binding is unavailable right now. Please try again.", buildTelegramThreadParams(threadSpec) ?? {})
				});
				return null;
			}
		}
		return {
			chatId,
			threadSpec,
			route,
			mediaLocalRoots: getAgentScopedMediaLocalRoots(runtimeCfg, route.agentId),
			tableMode: resolveMarkdownTableMode({
				cfg: runtimeCfg,
				channel: "telegram",
				accountId: route.accountId
			}),
			chunkMode: resolveChunkMode(runtimeCfg, "telegram", route.accountId)
		};
	};
	const buildCommandDeliveryBaseOptions = (params) => ({
		chatId: String(params.chatId),
		accountId: params.accountId,
		sessionKeyForInternalHooks: params.sessionKeyForInternalHooks,
		mirrorIsGroup: params.mirrorIsGroup,
		mirrorGroupId: params.mirrorGroupId,
		token: opts.token,
		runtime,
		bot,
		mediaLocalRoots: params.mediaLocalRoots,
		replyToMode,
		textLimit,
		thread: params.threadSpec,
		tableMode: params.tableMode,
		chunkMode: params.chunkMode,
		linkPreview: params.linkPreview
	});
	if (commandsToRegister.length > 0 || pluginCatalog.commands.length > 0) if (typeof bot.command !== "function") logVerbose("telegram: bot.command unavailable; skipping native handlers");
	else {
		for (const command of nativeCommands) {
			const normalizedCommandName = normalizeTelegramCommandName(command.name);
			bot.command(normalizedCommandName, async (ctx) => {
				const msg = ctx.message;
				if (!msg) return;
				if (shouldSkipUpdate(ctx)) return;
				const runtimeCfg = loadFreshRuntimeConfig();
				const runtimeTelegramCfg = resolveFreshTelegramConfig(runtimeCfg);
				const auth = await resolveTelegramCommandAuth({
					msg,
					bot,
					cfg: runtimeCfg,
					accountId,
					telegramCfg: runtimeTelegramCfg,
					readChannelAllowFromStore: telegramDeps.readChannelAllowFromStore,
					allowFrom,
					groupAllowFrom,
					useAccessGroups,
					resolveGroupPolicy,
					resolveTelegramGroupConfig,
					requireAuth: true
				});
				if (!auth) return;
				const { chatId, isGroup, isForum, resolvedThreadId, senderId, senderUsername, groupConfig, topicConfig, commandAuthorized } = auth;
				const runtimeContext = await resolveCommandRuntimeContext({
					msg,
					runtimeCfg,
					isGroup,
					isForum,
					resolvedThreadId,
					senderId,
					topicAgentId: topicConfig?.agentId
				});
				if (!runtimeContext) return;
				const { threadSpec, route, mediaLocalRoots, tableMode, chunkMode } = runtimeContext;
				const threadParams = buildTelegramThreadParams(threadSpec) ?? {};
				const commandDefinition = findCommandByNativeName(command.name, "telegram");
				const rawText = ctx.match?.trim() ?? "";
				const commandArgs = commandDefinition ? parseCommandArgs(commandDefinition, rawText) : rawText ? { raw: rawText } : void 0;
				const prompt = commandDefinition ? buildCommandTextFromArgs(commandDefinition, commandArgs) : rawText ? `/${command.name} ${rawText}` : `/${command.name}`;
				const menu = commandDefinition ? resolveCommandArgMenu({
					command: commandDefinition,
					args: commandArgs,
					cfg: runtimeCfg
				}) : null;
				if (menu && commandDefinition) {
					const title = menu.title ?? `Choose ${menu.arg.description || menu.arg.name} for /${commandDefinition.nativeName ?? commandDefinition.key}.`;
					const rows = [];
					for (let i = 0; i < menu.choices.length; i += 2) {
						const slice = menu.choices.slice(i, i + 2);
						rows.push(slice.map((choice) => {
							const args = { values: { [menu.arg.name]: choice.value } };
							return {
								text: choice.label,
								callback_data: buildCommandTextFromArgs(commandDefinition, args)
							};
						}));
					}
					const replyMarkup = buildInlineKeyboard(rows);
					await withTelegramApiErrorLogging({
						operation: "sendMessage",
						runtime,
						fn: () => bot.api.sendMessage(chatId, title, {
							...replyMarkup ? { reply_markup: replyMarkup } : {},
							...threadParams
						})
					});
					return;
				}
				const baseSessionKey = resolveTelegramConversationBaseSessionKey({
					cfg: runtimeCfg,
					route,
					chatId,
					isGroup,
					senderId
				});
				const dmThreadId = threadSpec.scope === "dm" ? threadSpec.id : void 0;
				const sessionKey = (dmThreadId != null ? resolveThreadSessionKeys({
					baseSessionKey,
					threadId: `${chatId}:${dmThreadId}`
				}) : null)?.sessionKey ?? baseSessionKey;
				const { skillFilter, groupSystemPrompt } = resolveTelegramGroupPromptSettings({
					groupConfig,
					topicConfig
				});
				const { sessionKey: commandSessionKey, commandTargetSessionKey } = resolveNativeCommandSessionTargets({
					agentId: route.agentId,
					sessionPrefix: "telegram:slash",
					userId: String(senderId || chatId),
					targetSessionKey: sessionKey
				});
				const deliveryBaseOptions = buildCommandDeliveryBaseOptions({
					chatId,
					accountId: route.accountId,
					sessionKeyForInternalHooks: commandSessionKey,
					mirrorIsGroup: isGroup,
					mirrorGroupId: isGroup ? String(chatId) : void 0,
					mediaLocalRoots,
					threadSpec,
					tableMode,
					chunkMode,
					linkPreview: runtimeTelegramCfg.linkPreview
				});
				const conversationLabel = isGroup ? msg.chat.title ? `${msg.chat.title} id:${chatId}` : `group:${chatId}` : buildSenderName(msg) ?? String(senderId || chatId);
				const ctxPayload = finalizeInboundContext({
					Body: prompt,
					BodyForAgent: prompt,
					RawBody: prompt,
					CommandBody: prompt,
					CommandArgs: commandArgs,
					From: isGroup ? buildTelegramGroupFrom(chatId, resolvedThreadId) : `telegram:${chatId}`,
					To: `slash:${senderId || chatId}`,
					ChatType: isGroup ? "group" : "direct",
					ConversationLabel: conversationLabel,
					GroupSubject: isGroup ? msg.chat.title ?? void 0 : void 0,
					GroupSystemPrompt: isGroup || !isGroup && groupConfig ? groupSystemPrompt : void 0,
					SenderName: buildSenderName(msg),
					SenderId: senderId || void 0,
					SenderUsername: senderUsername || void 0,
					Surface: "telegram",
					Provider: "telegram",
					MessageSid: String(msg.message_id),
					Timestamp: msg.date ? msg.date * 1e3 : void 0,
					WasMentioned: true,
					CommandAuthorized: commandAuthorized,
					CommandSource: "native",
					SessionKey: commandSessionKey,
					AccountId: route.accountId,
					CommandTargetSessionKey: commandTargetSessionKey,
					MessageThreadId: threadSpec.id,
					IsForum: isForum,
					OriginatingChannel: "telegram",
					OriginatingTo: `telegram:${chatId}`
				});
				await recordInboundSessionMetaSafe({
					cfg: runtimeCfg,
					agentId: route.agentId,
					sessionKey: ctxPayload.SessionKey ?? route.sessionKey,
					ctx: ctxPayload,
					onError: (err) => runtime.error?.(danger(`telegram slash: failed updating session meta: ${String(err)}`))
				});
				const disableBlockStreaming = typeof runtimeTelegramCfg.blockStreaming === "boolean" ? !runtimeTelegramCfg.blockStreaming : void 0;
				const deliveryState = {
					delivered: false,
					skippedNonSilent: 0
				};
				const { onModelSelected, ...replyPipeline } = createChannelReplyPipeline({
					cfg: runtimeCfg,
					agentId: route.agentId,
					channel: "telegram",
					accountId: route.accountId
				});
				await telegramDeps.dispatchReplyWithBufferedBlockDispatcher({
					ctx: ctxPayload,
					cfg: runtimeCfg,
					dispatcherOptions: {
						...replyPipeline,
						deliver: async (payload, _info) => {
							if (shouldSuppressLocalTelegramExecApprovalPrompt({
								cfg: runtimeCfg,
								accountId: route.accountId,
								payload
							})) {
								deliveryState.delivered = true;
								return;
							}
							if ((await deliverReplies({
								replies: [payload],
								...deliveryBaseOptions,
								silent: runtimeTelegramCfg.silentErrorReplies === true && payload.isError === true
							})).delivered) deliveryState.delivered = true;
						},
						onSkip: (_payload, info) => {
							if (info.reason !== "silent") deliveryState.skippedNonSilent += 1;
						},
						onError: (err, info) => {
							runtime.error?.(danger(`telegram slash ${info.kind} reply failed: ${String(err)}`));
						}
					},
					replyOptions: {
						skillFilter,
						disableBlockStreaming,
						onModelSelected
					}
				});
				if (!deliveryState.delivered && deliveryState.skippedNonSilent > 0) await deliverReplies({
					replies: [{ text: EMPTY_RESPONSE_FALLBACK }],
					...deliveryBaseOptions
				});
			});
		}
		for (const pluginCommand of pluginCatalog.commands) bot.command(pluginCommand.command, async (ctx) => {
			const msg = ctx.message;
			if (!msg) return;
			if (shouldSkipUpdate(ctx)) return;
			const chatId = msg.chat.id;
			const runtimeCfg = loadFreshRuntimeConfig();
			const runtimeTelegramCfg = resolveFreshTelegramConfig(runtimeCfg);
			const rawText = ctx.match?.trim() ?? "";
			const commandBody = `/${pluginCommand.command}${rawText ? ` ${rawText}` : ""}`;
			const match = matchPluginCommand(commandBody);
			if (!match) {
				await withTelegramApiErrorLogging({
					operation: "sendMessage",
					runtime,
					fn: () => bot.api.sendMessage(chatId, "Command not found.")
				});
				return;
			}
			const auth = await resolveTelegramCommandAuth({
				msg,
				bot,
				cfg: runtimeCfg,
				accountId,
				telegramCfg: runtimeTelegramCfg,
				readChannelAllowFromStore: telegramDeps.readChannelAllowFromStore,
				allowFrom,
				groupAllowFrom,
				useAccessGroups,
				resolveGroupPolicy,
				resolveTelegramGroupConfig,
				requireAuth: match.command.requireAuth !== false
			});
			if (!auth) return;
			const { senderId, commandAuthorized, isGroup, isForum, resolvedThreadId } = auth;
			const runtimeContext = await resolveCommandRuntimeContext({
				msg,
				runtimeCfg,
				isGroup,
				isForum,
				resolvedThreadId,
				senderId,
				topicAgentId: auth.topicConfig?.agentId
			});
			if (!runtimeContext) return;
			const { threadSpec, route, mediaLocalRoots, tableMode, chunkMode } = runtimeContext;
			const deliveryBaseOptions = buildCommandDeliveryBaseOptions({
				chatId,
				accountId: route.accountId,
				sessionKeyForInternalHooks: route.sessionKey,
				mirrorIsGroup: isGroup,
				mirrorGroupId: isGroup ? String(chatId) : void 0,
				mediaLocalRoots,
				threadSpec,
				tableMode,
				chunkMode,
				linkPreview: runtimeTelegramCfg.linkPreview
			});
			const from = isGroup ? buildTelegramGroupFrom(chatId, threadSpec.id) : `telegram:${chatId}`;
			const to = `telegram:${chatId}`;
			const result = await executePluginCommand({
				command: match.command,
				args: match.args,
				senderId,
				channel: "telegram",
				isAuthorizedSender: commandAuthorized,
				commandBody,
				config: runtimeCfg,
				from,
				to,
				accountId,
				messageThreadId: threadSpec.id
			});
			if (!shouldSuppressLocalTelegramExecApprovalPrompt({
				cfg: runtimeCfg,
				accountId: route.accountId,
				payload: result
			})) await deliverReplies({
				replies: [result],
				...deliveryBaseOptions,
				silent: runtimeTelegramCfg.silentErrorReplies === true && result.isError === true
			});
		});
	}
	else if (nativeDisabledExplicit) withTelegramApiErrorLogging({
		operation: "setMyCommands",
		runtime,
		fn: () => bot.api.setMyCommands([])
	}).catch(() => {});
};
//#endregion
//#region node_modules/bottleneck/lib/parser.js
var require_parser = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.load = function(received, defaults, onto = {}) {
		var k, ref, v;
		for (k in defaults) {
			v = defaults[k];
			onto[k] = (ref = received[k]) != null ? ref : v;
		}
		return onto;
	};
	exports.overwrite = function(received, defaults, onto = {}) {
		var k, v;
		for (k in received) {
			v = received[k];
			if (defaults[k] !== void 0) onto[k] = v;
		}
		return onto;
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/DLList.js
var require_DLList = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class DLList {
		constructor(incr, decr) {
			this.incr = incr;
			this.decr = decr;
			this._first = null;
			this._last = null;
			this.length = 0;
		}
		push(value) {
			var node;
			this.length++;
			if (typeof this.incr === "function") this.incr();
			node = {
				value,
				prev: this._last,
				next: null
			};
			if (this._last != null) {
				this._last.next = node;
				this._last = node;
			} else this._first = this._last = node;
		}
		shift() {
			var value;
			if (this._first == null) return;
			else {
				this.length--;
				if (typeof this.decr === "function") this.decr();
			}
			value = this._first.value;
			if ((this._first = this._first.next) != null) this._first.prev = null;
			else this._last = null;
			return value;
		}
		first() {
			if (this._first != null) return this._first.value;
		}
		getArray() {
			var node = this._first, ref, results = [];
			while (node != null) results.push((ref = node, node = node.next, ref.value));
			return results;
		}
		forEachShift(cb) {
			var node = this.shift();
			while (node != null) cb(node), node = this.shift();
		}
		debug() {
			var node = this._first, ref, ref1, ref2, results = [];
			while (node != null) results.push((ref = node, node = node.next, {
				value: ref.value,
				prev: (ref1 = ref.prev) != null ? ref1.value : void 0,
				next: (ref2 = ref.next) != null ? ref2.value : void 0
			}));
			return results;
		}
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/Events.js
var require_Events = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	module.exports = class Events {
		constructor(instance) {
			this.instance = instance;
			this._events = {};
			if (this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null) throw new Error("An Emitter already exists for this object");
			this.instance.on = (name, cb) => {
				return this._addListener(name, "many", cb);
			};
			this.instance.once = (name, cb) => {
				return this._addListener(name, "once", cb);
			};
			this.instance.removeAllListeners = (name = null) => {
				if (name != null) return delete this._events[name];
				else return this._events = {};
			};
		}
		_addListener(name, status, cb) {
			var base;
			if ((base = this._events)[name] == null) base[name] = [];
			this._events[name].push({
				cb,
				status
			});
			return this.instance;
		}
		listenerCount(name) {
			if (this._events[name] != null) return this._events[name].length;
			else return 0;
		}
		trigger(name, ...args) {
			var _this = this;
			return _asyncToGenerator(function* () {
				var e, promises;
				try {
					if (name !== "debug") _this.trigger("debug", `Event triggered: ${name}`, args);
					if (_this._events[name] == null) return;
					_this._events[name] = _this._events[name].filter(function(listener) {
						return listener.status !== "none";
					});
					promises = _this._events[name].map(/* @__PURE__ */ function() {
						var _ref = _asyncToGenerator(function* (listener) {
							var e, returned;
							if (listener.status === "none") return;
							if (listener.status === "once") listener.status = "none";
							try {
								returned = typeof listener.cb === "function" ? listener.cb(...args) : void 0;
								if (typeof (returned != null ? returned.then : void 0) === "function") return yield returned;
								else return returned;
							} catch (error) {
								e = error;
								_this.trigger("error", e);
								return null;
							}
						});
						return function(_x) {
							return _ref.apply(this, arguments);
						};
					}());
					return (yield Promise.all(promises)).find(function(x) {
						return x != null;
					});
				} catch (error) {
					e = error;
					_this.trigger("error", e);
					return null;
				}
			})();
		}
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/Queues.js
var require_Queues = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DLList = require_DLList(), Events = require_Events();
	module.exports = class Queues {
		constructor(num_priorities) {
			this.Events = new Events(this);
			this._length = 0;
			this._lists = function() {
				var j, ref, results = [];
				for (j = 1, ref = num_priorities; 1 <= ref ? j <= ref : j >= ref; 1 <= ref ? ++j : --j) results.push(new DLList(() => {
					return this.incr();
				}, () => {
					return this.decr();
				}));
				return results;
			}.call(this);
		}
		incr() {
			if (this._length++ === 0) return this.Events.trigger("leftzero");
		}
		decr() {
			if (--this._length === 0) return this.Events.trigger("zero");
		}
		push(job) {
			return this._lists[job.options.priority].push(job);
		}
		queued(priority) {
			if (priority != null) return this._lists[priority].length;
			else return this._length;
		}
		shiftAll(fn) {
			return this._lists.forEach(function(list) {
				return list.forEachShift(fn);
			});
		}
		getFirst(arr = this._lists) {
			var j, len, list;
			for (j = 0, len = arr.length; j < len; j++) {
				list = arr[j];
				if (list.length > 0) return list;
			}
			return [];
		}
		shiftLastFrom(priority) {
			return this.getFirst(this._lists.slice(priority).reverse()).shift();
		}
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/BottleneckError.js
var require_BottleneckError = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class BottleneckError extends Error {};
}));
//#endregion
//#region node_modules/bottleneck/lib/Job.js
var require_Job = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var BottleneckError, DEFAULT_PRIORITY, Job, NUM_PRIORITIES = 10, parser;
	DEFAULT_PRIORITY = 5;
	parser = require_parser();
	BottleneckError = require_BottleneckError();
	Job = class Job {
		constructor(task, args, options, jobDefaults, rejectOnDrop, Events, _states, Promise) {
			this.task = task;
			this.args = args;
			this.rejectOnDrop = rejectOnDrop;
			this.Events = Events;
			this._states = _states;
			this.Promise = Promise;
			this.options = parser.load(options, jobDefaults);
			this.options.priority = this._sanitizePriority(this.options.priority);
			if (this.options.id === jobDefaults.id) this.options.id = `${this.options.id}-${this._randomIndex()}`;
			this.promise = new this.Promise((_resolve, _reject) => {
				this._resolve = _resolve;
				this._reject = _reject;
			});
			this.retryCount = 0;
		}
		_sanitizePriority(priority) {
			var sProperty = ~~priority !== priority ? DEFAULT_PRIORITY : priority;
			if (sProperty < 0) return 0;
			else if (sProperty > NUM_PRIORITIES - 1) return NUM_PRIORITIES - 1;
			else return sProperty;
		}
		_randomIndex() {
			return Math.random().toString(36).slice(2);
		}
		doDrop({ error, message = "This job has been dropped by Bottleneck" } = {}) {
			if (this._states.remove(this.options.id)) {
				if (this.rejectOnDrop) this._reject(error != null ? error : new BottleneckError(message));
				this.Events.trigger("dropped", {
					args: this.args,
					options: this.options,
					task: this.task,
					promise: this.promise
				});
				return true;
			} else return false;
		}
		_assertStatus(expected) {
			var status = this._states.jobStatus(this.options.id);
			if (!(status === expected || expected === "DONE" && status === null)) throw new BottleneckError(`Invalid job status ${status}, expected ${expected}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`);
		}
		doReceive() {
			this._states.start(this.options.id);
			return this.Events.trigger("received", {
				args: this.args,
				options: this.options
			});
		}
		doQueue(reachedHWM, blocked) {
			this._assertStatus("RECEIVED");
			this._states.next(this.options.id);
			return this.Events.trigger("queued", {
				args: this.args,
				options: this.options,
				reachedHWM,
				blocked
			});
		}
		doRun() {
			if (this.retryCount === 0) {
				this._assertStatus("QUEUED");
				this._states.next(this.options.id);
			} else this._assertStatus("EXECUTING");
			return this.Events.trigger("scheduled", {
				args: this.args,
				options: this.options
			});
		}
		doExecute(chained, clearGlobalState, run, free) {
			var _this = this;
			return _asyncToGenerator(function* () {
				var error, eventInfo, passed;
				if (_this.retryCount === 0) {
					_this._assertStatus("RUNNING");
					_this._states.next(_this.options.id);
				} else _this._assertStatus("EXECUTING");
				eventInfo = {
					args: _this.args,
					options: _this.options,
					retryCount: _this.retryCount
				};
				_this.Events.trigger("executing", eventInfo);
				try {
					passed = yield chained != null ? chained.schedule(_this.options, _this.task, ..._this.args) : _this.task(..._this.args);
					if (clearGlobalState()) {
						_this.doDone(eventInfo);
						yield free(_this.options, eventInfo);
						_this._assertStatus("DONE");
						return _this._resolve(passed);
					}
				} catch (error1) {
					error = error1;
					return _this._onFailure(error, eventInfo, clearGlobalState, run, free);
				}
			})();
		}
		doExpire(clearGlobalState, run, free) {
			var error, eventInfo;
			if (this._states.jobStatus(this.options.id === "RUNNING")) this._states.next(this.options.id);
			this._assertStatus("EXECUTING");
			eventInfo = {
				args: this.args,
				options: this.options,
				retryCount: this.retryCount
			};
			error = new BottleneckError(`This job timed out after ${this.options.expiration} ms.`);
			return this._onFailure(error, eventInfo, clearGlobalState, run, free);
		}
		_onFailure(error, eventInfo, clearGlobalState, run, free) {
			var _this2 = this;
			return _asyncToGenerator(function* () {
				var retry, retryAfter;
				if (clearGlobalState()) {
					retry = yield _this2.Events.trigger("failed", error, eventInfo);
					if (retry != null) {
						retryAfter = ~~retry;
						_this2.Events.trigger("retry", `Retrying ${_this2.options.id} after ${retryAfter} ms`, eventInfo);
						_this2.retryCount++;
						return run(retryAfter);
					} else {
						_this2.doDone(eventInfo);
						yield free(_this2.options, eventInfo);
						_this2._assertStatus("DONE");
						return _this2._reject(error);
					}
				}
			})();
		}
		doDone(eventInfo) {
			this._assertStatus("EXECUTING");
			this._states.next(this.options.id);
			return this.Events.trigger("done", eventInfo);
		}
	};
	module.exports = Job;
}));
//#endregion
//#region node_modules/bottleneck/lib/LocalDatastore.js
var require_LocalDatastore = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var BottleneckError, LocalDatastore, parser = require_parser();
	BottleneckError = require_BottleneckError();
	LocalDatastore = class LocalDatastore {
		constructor(instance, storeOptions, storeInstanceOptions) {
			this.instance = instance;
			this.storeOptions = storeOptions;
			this.clientId = this.instance._randomIndex();
			parser.load(storeInstanceOptions, storeInstanceOptions, this);
			this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now();
			this._running = 0;
			this._done = 0;
			this._unblockTime = 0;
			this.ready = this.Promise.resolve();
			this.clients = {};
			this._startHeartbeat();
		}
		_startHeartbeat() {
			var base;
			if (this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null)) return typeof (base = this.heartbeat = setInterval(() => {
				var amount, incr, maximum, now = Date.now(), reservoir;
				if (this.storeOptions.reservoirRefreshInterval != null && now >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval) {
					this._lastReservoirRefresh = now;
					this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount;
					this.instance._drainAll(this.computeCapacity());
				}
				if (this.storeOptions.reservoirIncreaseInterval != null && now >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval) {
					var _this$storeOptions = this.storeOptions;
					amount = _this$storeOptions.reservoirIncreaseAmount;
					maximum = _this$storeOptions.reservoirIncreaseMaximum;
					reservoir = _this$storeOptions.reservoir;
					this._lastReservoirIncrease = now;
					incr = maximum != null ? Math.min(amount, maximum - reservoir) : amount;
					if (incr > 0) {
						this.storeOptions.reservoir += incr;
						return this.instance._drainAll(this.computeCapacity());
					}
				}
			}, this.heartbeatInterval)).unref === "function" ? base.unref() : void 0;
			else return clearInterval(this.heartbeat);
		}
		__publish__(message) {
			var _this = this;
			return _asyncToGenerator(function* () {
				yield _this.yieldLoop();
				return _this.instance.Events.trigger("message", message.toString());
			})();
		}
		__disconnect__(flush) {
			var _this2 = this;
			return _asyncToGenerator(function* () {
				yield _this2.yieldLoop();
				clearInterval(_this2.heartbeat);
				return _this2.Promise.resolve();
			})();
		}
		yieldLoop(t = 0) {
			return new this.Promise(function(resolve, reject) {
				return setTimeout(resolve, t);
			});
		}
		computePenalty() {
			var ref;
			return (ref = this.storeOptions.penalty) != null ? ref : 15 * this.storeOptions.minTime || 5e3;
		}
		__updateSettings__(options) {
			var _this3 = this;
			return _asyncToGenerator(function* () {
				yield _this3.yieldLoop();
				parser.overwrite(options, options, _this3.storeOptions);
				_this3._startHeartbeat();
				_this3.instance._drainAll(_this3.computeCapacity());
				return true;
			})();
		}
		__running__() {
			var _this4 = this;
			return _asyncToGenerator(function* () {
				yield _this4.yieldLoop();
				return _this4._running;
			})();
		}
		__queued__() {
			var _this5 = this;
			return _asyncToGenerator(function* () {
				yield _this5.yieldLoop();
				return _this5.instance.queued();
			})();
		}
		__done__() {
			var _this6 = this;
			return _asyncToGenerator(function* () {
				yield _this6.yieldLoop();
				return _this6._done;
			})();
		}
		__groupCheck__(time) {
			var _this7 = this;
			return _asyncToGenerator(function* () {
				yield _this7.yieldLoop();
				return _this7._nextRequest + _this7.timeout < time;
			})();
		}
		computeCapacity() {
			var maxConcurrent, reservoir;
			var _this$storeOptions2 = this.storeOptions;
			maxConcurrent = _this$storeOptions2.maxConcurrent;
			reservoir = _this$storeOptions2.reservoir;
			if (maxConcurrent != null && reservoir != null) return Math.min(maxConcurrent - this._running, reservoir);
			else if (maxConcurrent != null) return maxConcurrent - this._running;
			else if (reservoir != null) return reservoir;
			else return null;
		}
		conditionsCheck(weight) {
			var capacity = this.computeCapacity();
			return capacity == null || weight <= capacity;
		}
		__incrementReservoir__(incr) {
			var _this8 = this;
			return _asyncToGenerator(function* () {
				var reservoir;
				yield _this8.yieldLoop();
				reservoir = _this8.storeOptions.reservoir += incr;
				_this8.instance._drainAll(_this8.computeCapacity());
				return reservoir;
			})();
		}
		__currentReservoir__() {
			var _this9 = this;
			return _asyncToGenerator(function* () {
				yield _this9.yieldLoop();
				return _this9.storeOptions.reservoir;
			})();
		}
		isBlocked(now) {
			return this._unblockTime >= now;
		}
		check(weight, now) {
			return this.conditionsCheck(weight) && this._nextRequest - now <= 0;
		}
		__check__(weight) {
			var _this10 = this;
			return _asyncToGenerator(function* () {
				var now;
				yield _this10.yieldLoop();
				now = Date.now();
				return _this10.check(weight, now);
			})();
		}
		__register__(index, weight, expiration) {
			var _this11 = this;
			return _asyncToGenerator(function* () {
				var now, wait;
				yield _this11.yieldLoop();
				now = Date.now();
				if (_this11.conditionsCheck(weight)) {
					_this11._running += weight;
					if (_this11.storeOptions.reservoir != null) _this11.storeOptions.reservoir -= weight;
					wait = Math.max(_this11._nextRequest - now, 0);
					_this11._nextRequest = now + wait + _this11.storeOptions.minTime;
					return {
						success: true,
						wait,
						reservoir: _this11.storeOptions.reservoir
					};
				} else return { success: false };
			})();
		}
		strategyIsBlock() {
			return this.storeOptions.strategy === 3;
		}
		__submit__(queueLength, weight) {
			var _this12 = this;
			return _asyncToGenerator(function* () {
				var blocked, now, reachedHWM;
				yield _this12.yieldLoop();
				if (_this12.storeOptions.maxConcurrent != null && weight > _this12.storeOptions.maxConcurrent) throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${_this12.storeOptions.maxConcurrent}`);
				now = Date.now();
				reachedHWM = _this12.storeOptions.highWater != null && queueLength === _this12.storeOptions.highWater && !_this12.check(weight, now);
				blocked = _this12.strategyIsBlock() && (reachedHWM || _this12.isBlocked(now));
				if (blocked) {
					_this12._unblockTime = now + _this12.computePenalty();
					_this12._nextRequest = _this12._unblockTime + _this12.storeOptions.minTime;
					_this12.instance._dropAllQueued();
				}
				return {
					reachedHWM,
					blocked,
					strategy: _this12.storeOptions.strategy
				};
			})();
		}
		__free__(index, weight) {
			var _this13 = this;
			return _asyncToGenerator(function* () {
				yield _this13.yieldLoop();
				_this13._running -= weight;
				_this13._done += weight;
				_this13.instance._drainAll(_this13.computeCapacity());
				return { running: _this13._running };
			})();
		}
	};
	module.exports = LocalDatastore;
}));
//#endregion
//#region node_modules/bottleneck/lib/lua.json
var require_lua = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"blacklist_client.lua": "local blacklist = ARGV[num_static_argv + 1]\n\nif redis.call('zscore', client_last_seen_key, blacklist) then\n  redis.call('zadd', client_last_seen_key, 0, blacklist)\nend\n\n\nreturn {}\n",
		"check.lua": "local weight = tonumber(ARGV[num_static_argv + 1])\n\nlocal capacity = process_tick(now, false)['capacity']\nlocal nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))\n\nreturn conditions_check(capacity, weight) and nextRequest - now <= 0\n",
		"conditions_check.lua": "local conditions_check = function (capacity, weight)\n  return capacity == nil or weight <= capacity\nend\n",
		"current_reservoir.lua": "return process_tick(now, false)['reservoir']\n",
		"done.lua": "process_tick(now, false)\n\nreturn tonumber(redis.call('hget', settings_key, 'done'))\n",
		"free.lua": "local index = ARGV[num_static_argv + 1]\n\nredis.call('zadd', job_expirations_key, 0, index)\n\nreturn process_tick(now, false)['running']\n",
		"get_time.lua": "redis.replicate_commands()\n\nlocal get_time = function ()\n  local time = redis.call('time')\n\n  return tonumber(time[1]..string.sub(time[2], 1, 3))\nend\n",
		"group_check.lua": "return not (redis.call('exists', settings_key) == 1)\n",
		"heartbeat.lua": "process_tick(now, true)\n",
		"increment_reservoir.lua": "local incr = tonumber(ARGV[num_static_argv + 1])\n\nredis.call('hincrby', settings_key, 'reservoir', incr)\n\nlocal reservoir = process_tick(now, true)['reservoir']\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(0, 0, groupTimeout)\n\nreturn reservoir\n",
		"init.lua": "local clear = tonumber(ARGV[num_static_argv + 1])\nlocal limiter_version = ARGV[num_static_argv + 2]\nlocal num_local_argv = num_static_argv + 2\n\nif clear == 1 then\n  redis.call('del', unpack(KEYS))\nend\n\nif redis.call('exists', settings_key) == 0 then\n  -- Create\n  local args = {'hmset', settings_key}\n\n  for i = num_local_argv + 1, #ARGV do\n    table.insert(args, ARGV[i])\n  end\n\n  redis.call(unpack(args))\n  redis.call('hmset', settings_key,\n    'nextRequest', now,\n    'lastReservoirRefresh', now,\n    'lastReservoirIncrease', now,\n    'running', 0,\n    'done', 0,\n    'unblockTime', 0,\n    'capacityPriorityCounter', 0\n  )\n\nelse\n  -- Apply migrations\n  local settings = redis.call('hmget', settings_key,\n    'id',\n    'version'\n  )\n  local id = settings[1]\n  local current_version = settings[2]\n\n  if current_version ~= limiter_version then\n    local version_digits = {}\n    for k, v in string.gmatch(current_version, \"([^.]+)\") do\n      table.insert(version_digits, tonumber(k))\n    end\n\n    -- 2.10.0\n    if version_digits[2] < 10 then\n      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')\n      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')\n      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')\n      redis.call('hsetnx', settings_key, 'done', 0)\n      redis.call('hset', settings_key, 'version', '2.10.0')\n    end\n\n    -- 2.11.1\n    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then\n      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then\n        redis.call('hmset', settings_key,\n          'lastReservoirRefresh', now,\n          'version', '2.11.1'\n        )\n      end\n    end\n\n    -- 2.14.0\n    if version_digits[2] < 14 then\n      local old_running_key = 'b_'..id..'_running'\n      local old_executing_key = 'b_'..id..'_executing'\n\n      if redis.call('exists', old_running_key) == 1 then\n        redis.call('rename', old_running_key, job_weights_key)\n      end\n      if redis.call('exists', old_executing_key) == 1 then\n        redis.call('rename', old_executing_key, job_expirations_key)\n      end\n      redis.call('hset', settings_key, 'version', '2.14.0')\n    end\n\n    -- 2.15.2\n    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then\n      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)\n      redis.call('hset', settings_key, 'version', '2.15.2')\n    end\n\n    -- 2.17.0\n    if version_digits[2] < 17 then\n      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)\n      redis.call('hset', settings_key, 'version', '2.17.0')\n    end\n\n    -- 2.18.0\n    if version_digits[2] < 18 then\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')\n      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)\n      redis.call('hset', settings_key, 'version', '2.18.0')\n    end\n\n  end\n\n  process_tick(now, false)\nend\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(0, 0, groupTimeout)\n\nreturn {}\n",
		"process_tick.lua": "local process_tick = function (now, always_publish)\n\n  local compute_capacity = function (maxConcurrent, running, reservoir)\n    if maxConcurrent ~= nil and reservoir ~= nil then\n      return math.min((maxConcurrent - running), reservoir)\n    elseif maxConcurrent ~= nil then\n      return maxConcurrent - running\n    elseif reservoir ~= nil then\n      return reservoir\n    else\n      return nil\n    end\n  end\n\n  local settings = redis.call('hmget', settings_key,\n    'id',\n    'maxConcurrent',\n    'running',\n    'reservoir',\n    'reservoirRefreshInterval',\n    'reservoirRefreshAmount',\n    'lastReservoirRefresh',\n    'reservoirIncreaseInterval',\n    'reservoirIncreaseAmount',\n    'reservoirIncreaseMaximum',\n    'lastReservoirIncrease',\n    'capacityPriorityCounter',\n    'clientTimeout'\n  )\n  local id = settings[1]\n  local maxConcurrent = tonumber(settings[2])\n  local running = tonumber(settings[3])\n  local reservoir = tonumber(settings[4])\n  local reservoirRefreshInterval = tonumber(settings[5])\n  local reservoirRefreshAmount = tonumber(settings[6])\n  local lastReservoirRefresh = tonumber(settings[7])\n  local reservoirIncreaseInterval = tonumber(settings[8])\n  local reservoirIncreaseAmount = tonumber(settings[9])\n  local reservoirIncreaseMaximum = tonumber(settings[10])\n  local lastReservoirIncrease = tonumber(settings[11])\n  local capacityPriorityCounter = tonumber(settings[12])\n  local clientTimeout = tonumber(settings[13])\n\n  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)\n\n  --\n  -- Process 'running' changes\n  --\n  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)\n\n  if #expired > 0 then\n    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)\n\n    local flush_batch = function (batch, acc)\n      local weights = redis.call('hmget', job_weights_key, unpack(batch))\n                      redis.call('hdel',  job_weights_key, unpack(batch))\n      local clients = redis.call('hmget', job_clients_key, unpack(batch))\n                      redis.call('hdel',  job_clients_key, unpack(batch))\n\n      -- Calculate sum of removed weights\n      for i = 1, #weights do\n        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)\n      end\n\n      -- Calculate sum of removed weights by client\n      local client_weights = {}\n      for i = 1, #clients do\n        local removed = tonumber(weights[i]) or 0\n        if removed > 0 then\n          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed\n        end\n      end\n    end\n\n    local acc = {\n      ['total'] = 0,\n      ['client_weights'] = {}\n    }\n    local batch_size = 1000\n\n    -- Compute changes to Zsets and apply changes to Hashes\n    for i = 1, #expired, batch_size do\n      local batch = {}\n      for j = i, math.min(i + batch_size - 1, #expired) do\n        table.insert(batch, expired[j])\n      end\n\n      flush_batch(batch, acc)\n    end\n\n    -- Apply changes to Zsets\n    if acc['total'] > 0 then\n      redis.call('hincrby', settings_key, 'done', acc['total'])\n      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))\n    end\n\n    for client, weight in pairs(acc['client_weights']) do\n      redis.call('zincrby', client_running_key, -weight, client)\n    end\n  end\n\n  --\n  -- Process 'reservoir' changes\n  --\n  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil\n  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then\n    reservoir = reservoirRefreshAmount\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'lastReservoirRefresh', now\n    )\n  end\n\n  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil\n  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then\n    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)\n    local incr = reservoirIncreaseAmount * num_intervals\n    if reservoirIncreaseMaximum ~= nil then\n      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))\n    end\n    if incr > 0 then\n      reservoir = (reservoir or 0) + incr\n    end\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)\n    )\n  end\n\n  --\n  -- Clear unresponsive clients\n  --\n  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))\n  local unresponsive_lookup = {}\n  local terminated_clients = {}\n  for i = 1, #unresponsive do\n    unresponsive_lookup[unresponsive[i]] = true\n    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then\n      table.insert(terminated_clients, unresponsive[i])\n    end\n  end\n  if #terminated_clients > 0 then\n    redis.call('zrem', client_running_key,         unpack(terminated_clients))\n    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))\n    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))\n    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))\n  end\n\n  --\n  -- Broadcast capacity changes\n  --\n  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)\n\n  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then\n    -- always_publish or was not unlimited, now unlimited\n    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\n\n  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then\n    -- capacity was increased\n    -- send the capacity message to the limiter having the lowest number of running jobs\n    -- the tiebreaker is the limiter having not registered a job in the longest time\n\n    local lowest_concurrency_value = nil\n    local lowest_concurrency_clients = {}\n    local lowest_concurrency_last_registered = {}\n    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')\n\n    for i = 1, #client_concurrencies, 2 do\n      local client = client_concurrencies[i]\n      local concurrency = tonumber(client_concurrencies[i+1])\n\n      if (\n        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency\n      ) and (\n        not unresponsive_lookup[client]\n      ) and (\n        tonumber(redis.call('hget', client_num_queued_key, client)) > 0\n      ) then\n        lowest_concurrency_value = concurrency\n        table.insert(lowest_concurrency_clients, client)\n        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))\n        table.insert(lowest_concurrency_last_registered, last_registered)\n      end\n    end\n\n    if #lowest_concurrency_clients > 0 then\n      local position = 1\n      local earliest = lowest_concurrency_last_registered[1]\n\n      for i,v in ipairs(lowest_concurrency_last_registered) do\n        if v < earliest then\n          position = i\n          earliest = v\n        end\n      end\n\n      local next_client = lowest_concurrency_clients[position]\n      redis.call('publish', 'b_'..id,\n        'capacity-priority:'..(final_capacity or '')..\n        ':'..next_client..\n        ':'..capacityPriorityCounter\n      )\n      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')\n    else\n      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\n    end\n  end\n\n  return {\n    ['capacity'] = final_capacity,\n    ['running'] = running,\n    ['reservoir'] = reservoir\n  }\nend\n",
		"queued.lua": "local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))\nlocal valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')\nlocal client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))\n\nlocal sum = 0\nfor i = 1, #client_queued do\n  sum = sum + tonumber(client_queued[i])\nend\n\nreturn sum\n",
		"refresh_expiration.lua": "local refresh_expiration = function (now, nextRequest, groupTimeout)\n\n  if groupTimeout ~= nil then\n    local ttl = (nextRequest + groupTimeout) - now\n\n    for i = 1, #KEYS do\n      redis.call('pexpire', KEYS[i], ttl)\n    end\n  end\n\nend\n",
		"refs.lua": "local settings_key = KEYS[1]\nlocal job_weights_key = KEYS[2]\nlocal job_expirations_key = KEYS[3]\nlocal job_clients_key = KEYS[4]\nlocal client_running_key = KEYS[5]\nlocal client_num_queued_key = KEYS[6]\nlocal client_last_registered_key = KEYS[7]\nlocal client_last_seen_key = KEYS[8]\n\nlocal now = tonumber(ARGV[1])\nlocal client = ARGV[2]\n\nlocal num_static_argv = 2\n",
		"register.lua": "local index = ARGV[num_static_argv + 1]\nlocal weight = tonumber(ARGV[num_static_argv + 2])\nlocal expiration = tonumber(ARGV[num_static_argv + 3])\n\nlocal state = process_tick(now, false)\nlocal capacity = state['capacity']\nlocal reservoir = state['reservoir']\n\nlocal settings = redis.call('hmget', settings_key,\n  'nextRequest',\n  'minTime',\n  'groupTimeout'\n)\nlocal nextRequest = tonumber(settings[1])\nlocal minTime = tonumber(settings[2])\nlocal groupTimeout = tonumber(settings[3])\n\nif conditions_check(capacity, weight) then\n\n  redis.call('hincrby', settings_key, 'running', weight)\n  redis.call('hset', job_weights_key, index, weight)\n  if expiration ~= nil then\n    redis.call('zadd', job_expirations_key, now + expiration, index)\n  end\n  redis.call('hset', job_clients_key, index, client)\n  redis.call('zincrby', client_running_key, weight, client)\n  redis.call('hincrby', client_num_queued_key, client, -1)\n  redis.call('zadd', client_last_registered_key, now, client)\n\n  local wait = math.max(nextRequest - now, 0)\n  local newNextRequest = now + wait + minTime\n\n  if reservoir == nil then\n    redis.call('hset', settings_key,\n      'nextRequest', newNextRequest\n    )\n  else\n    reservoir = reservoir - weight\n    redis.call('hmset', settings_key,\n      'reservoir', reservoir,\n      'nextRequest', newNextRequest\n    )\n  end\n\n  refresh_expiration(now, newNextRequest, groupTimeout)\n\n  return {true, wait, reservoir}\n\nelse\n  return {false}\nend\n",
		"register_client.lua": "local queued = tonumber(ARGV[num_static_argv + 1])\n\n-- Could have been re-registered concurrently\nif not redis.call('zscore', client_last_seen_key, client) then\n  redis.call('zadd', client_running_key, 0, client)\n  redis.call('hset', client_num_queued_key, client, queued)\n  redis.call('zadd', client_last_registered_key, 0, client)\nend\n\nredis.call('zadd', client_last_seen_key, now, client)\n\nreturn {}\n",
		"running.lua": "return process_tick(now, false)['running']\n",
		"submit.lua": "local queueLength = tonumber(ARGV[num_static_argv + 1])\nlocal weight = tonumber(ARGV[num_static_argv + 2])\n\nlocal capacity = process_tick(now, false)['capacity']\n\nlocal settings = redis.call('hmget', settings_key,\n  'id',\n  'maxConcurrent',\n  'highWater',\n  'nextRequest',\n  'strategy',\n  'unblockTime',\n  'penalty',\n  'minTime',\n  'groupTimeout'\n)\nlocal id = settings[1]\nlocal maxConcurrent = tonumber(settings[2])\nlocal highWater = tonumber(settings[3])\nlocal nextRequest = tonumber(settings[4])\nlocal strategy = tonumber(settings[5])\nlocal unblockTime = tonumber(settings[6])\nlocal penalty = tonumber(settings[7])\nlocal minTime = tonumber(settings[8])\nlocal groupTimeout = tonumber(settings[9])\n\nif maxConcurrent ~= nil and weight > maxConcurrent then\n  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)\nend\n\nlocal reachedHWM = (highWater ~= nil and queueLength == highWater\n  and not (\n    conditions_check(capacity, weight)\n    and nextRequest - now <= 0\n  )\n)\n\nlocal blocked = strategy == 3 and (reachedHWM or unblockTime >= now)\n\nif blocked then\n  local computedPenalty = penalty\n  if computedPenalty == nil then\n    if minTime == 0 then\n      computedPenalty = 5000\n    else\n      computedPenalty = 15 * minTime\n    end\n  end\n\n  local newNextRequest = now + computedPenalty + minTime\n\n  redis.call('hmset', settings_key,\n    'unblockTime', now + computedPenalty,\n    'nextRequest', newNextRequest\n  )\n\n  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)\n  local queued_reset = {}\n  for i = 1, #clients_queued_reset do\n    table.insert(queued_reset, clients_queued_reset[i])\n    table.insert(queued_reset, 0)\n  end\n  redis.call('hmset', client_num_queued_key, unpack(queued_reset))\n\n  redis.call('publish', 'b_'..id, 'blocked:')\n\n  refresh_expiration(now, newNextRequest, groupTimeout)\nend\n\nif not blocked and not reachedHWM then\n  redis.call('hincrby', client_num_queued_key, client, 1)\nend\n\nreturn {reachedHWM, blocked, strategy}\n",
		"update_settings.lua": "local args = {'hmset', settings_key}\n\nfor i = num_static_argv + 1, #ARGV do\n  table.insert(args, ARGV[i])\nend\n\nredis.call(unpack(args))\n\nprocess_tick(now, true)\n\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\nrefresh_expiration(0, 0, groupTimeout)\n\nreturn {}\n",
		"validate_client.lua": "if not redis.call('zscore', client_last_seen_key, client) then\n  return redis.error_reply('UNKNOWN_CLIENT')\nend\n\nredis.call('zadd', client_last_seen_key, now, client)\n",
		"validate_keys.lua": "if not (redis.call('exists', settings_key) == 1) then\n  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')\nend\n"
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/Scripts.js
var require_Scripts = /* @__PURE__ */ __commonJSMin(((exports) => {
	var headers, lua = require_lua(), templates;
	headers = {
		refs: lua["refs.lua"],
		validate_keys: lua["validate_keys.lua"],
		validate_client: lua["validate_client.lua"],
		refresh_expiration: lua["refresh_expiration.lua"],
		process_tick: lua["process_tick.lua"],
		conditions_check: lua["conditions_check.lua"],
		get_time: lua["get_time.lua"]
	};
	exports.allKeys = function(id) {
		return [
			`b_${id}_settings`,
			`b_${id}_job_weights`,
			`b_${id}_job_expirations`,
			`b_${id}_job_clients`,
			`b_${id}_client_running`,
			`b_${id}_client_num_queued`,
			`b_${id}_client_last_registered`,
			`b_${id}_client_last_seen`
		];
	};
	templates = {
		init: {
			keys: exports.allKeys,
			headers: ["process_tick"],
			refresh_expiration: true,
			code: lua["init.lua"]
		},
		group_check: {
			keys: exports.allKeys,
			headers: [],
			refresh_expiration: false,
			code: lua["group_check.lua"]
		},
		register_client: {
			keys: exports.allKeys,
			headers: ["validate_keys"],
			refresh_expiration: false,
			code: lua["register_client.lua"]
		},
		blacklist_client: {
			keys: exports.allKeys,
			headers: ["validate_keys", "validate_client"],
			refresh_expiration: false,
			code: lua["blacklist_client.lua"]
		},
		heartbeat: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: false,
			code: lua["heartbeat.lua"]
		},
		update_settings: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: true,
			code: lua["update_settings.lua"]
		},
		running: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: false,
			code: lua["running.lua"]
		},
		queued: {
			keys: exports.allKeys,
			headers: ["validate_keys", "validate_client"],
			refresh_expiration: false,
			code: lua["queued.lua"]
		},
		done: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: false,
			code: lua["done.lua"]
		},
		check: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick",
				"conditions_check"
			],
			refresh_expiration: false,
			code: lua["check.lua"]
		},
		submit: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick",
				"conditions_check"
			],
			refresh_expiration: true,
			code: lua["submit.lua"]
		},
		register: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick",
				"conditions_check"
			],
			refresh_expiration: true,
			code: lua["register.lua"]
		},
		free: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: true,
			code: lua["free.lua"]
		},
		current_reservoir: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: false,
			code: lua["current_reservoir.lua"]
		},
		increment_reservoir: {
			keys: exports.allKeys,
			headers: [
				"validate_keys",
				"validate_client",
				"process_tick"
			],
			refresh_expiration: true,
			code: lua["increment_reservoir.lua"]
		}
	};
	exports.names = Object.keys(templates);
	exports.keys = function(name, id) {
		return templates[name].keys(id);
	};
	exports.payload = function(name) {
		var template = templates[name];
		return Array.prototype.concat(headers.refs, template.headers.map(function(h) {
			return headers[h];
		}), template.refresh_expiration ? headers.refresh_expiration : "", template.code).join("\n");
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/RedisConnection.js
var require_RedisConnection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var Events, RedisConnection, Scripts, parser = require_parser();
	Events = require_Events();
	Scripts = require_Scripts();
	RedisConnection = function() {
		class RedisConnection {
			constructor(options = {}) {
				parser.load(options, this.defaults, this);
				if (this.Redis == null) this.Redis = eval("require")("redis");
				if (this.Events == null) this.Events = new Events(this);
				this.terminated = false;
				if (this.client == null) this.client = this.Redis.createClient(this.clientOptions);
				this.subscriber = this.client.duplicate();
				this.limiters = {};
				this.shas = {};
				this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
					return this._loadScripts();
				}).then(() => {
					return {
						client: this.client,
						subscriber: this.subscriber
					};
				});
			}
			_setup(client, sub) {
				client.setMaxListeners(0);
				return new this.Promise((resolve, reject) => {
					client.on("error", (e) => {
						return this.Events.trigger("error", e);
					});
					if (sub) client.on("message", (channel, message) => {
						var ref;
						return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : void 0;
					});
					if (client.ready) return resolve();
					else return client.once("ready", resolve);
				});
			}
			_loadScript(name) {
				return new this.Promise((resolve, reject) => {
					var payload = Scripts.payload(name);
					return this.client.multi([[
						"script",
						"load",
						payload
					]]).exec((err, replies) => {
						if (err != null) return reject(err);
						this.shas[name] = replies[0];
						return resolve(replies[0]);
					});
				});
			}
			_loadScripts() {
				return this.Promise.all(Scripts.names.map((k) => {
					return this._loadScript(k);
				}));
			}
			__runCommand__(cmd) {
				var _this = this;
				return _asyncToGenerator(function* () {
					yield _this.ready;
					return new _this.Promise((resolve, reject) => {
						return _this.client.multi([cmd]).exec_atomic(function(err, replies) {
							if (err != null) return reject(err);
							else return resolve(replies[0]);
						});
					});
				})();
			}
			__addLimiter__(instance) {
				return this.Promise.all([instance.channel(), instance.channel_client()].map((channel) => {
					return new this.Promise((resolve, reject) => {
						var handler = (chan) => {
							if (chan === channel) {
								this.subscriber.removeListener("subscribe", handler);
								this.limiters[channel] = instance;
								return resolve();
							}
						};
						this.subscriber.on("subscribe", handler);
						return this.subscriber.subscribe(channel);
					});
				}));
			}
			__removeLimiter__(instance) {
				var _this2 = this;
				return this.Promise.all([instance.channel(), instance.channel_client()].map(/* @__PURE__ */ function() {
					var _ref = _asyncToGenerator(function* (channel) {
						if (!_this2.terminated) yield new _this2.Promise((resolve, reject) => {
							return _this2.subscriber.unsubscribe(channel, function(err, chan) {
								if (err != null) return reject(err);
								if (chan === channel) return resolve();
							});
						});
						return delete _this2.limiters[channel];
					});
					return function(_x) {
						return _ref.apply(this, arguments);
					};
				}()));
			}
			__scriptArgs__(name, id, args, cb) {
				var keys = Scripts.keys(name, id);
				return [this.shas[name], keys.length].concat(keys, args, cb);
			}
			__scriptFn__(name) {
				return this.client.evalsha.bind(this.client);
			}
			disconnect(flush = true) {
				var i, k, len, ref = Object.keys(this.limiters);
				for (i = 0, len = ref.length; i < len; i++) {
					k = ref[i];
					clearInterval(this.limiters[k]._store.heartbeat);
				}
				this.limiters = {};
				this.terminated = true;
				this.client.end(flush);
				this.subscriber.end(flush);
				return this.Promise.resolve();
			}
		}
		RedisConnection.prototype.datastore = "redis";
		RedisConnection.prototype.defaults = {
			Redis: null,
			clientOptions: {},
			client: null,
			Promise,
			Events: null
		};
		return RedisConnection;
	}.call(void 0);
	module.exports = RedisConnection;
}));
//#endregion
//#region node_modules/bottleneck/lib/IORedisConnection.js
var require_IORedisConnection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _slicedToArray(arr, i) {
		return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}
	function _iterableToArrayLimit(arr, i) {
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = void 0;
		try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);
				if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;
			_e = err;
		} finally {
			try {
				if (!_n && _i["return"] != null) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) return arr;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var Events, IORedisConnection, Scripts, parser = require_parser();
	Events = require_Events();
	Scripts = require_Scripts();
	IORedisConnection = function() {
		class IORedisConnection {
			constructor(options = {}) {
				parser.load(options, this.defaults, this);
				if (this.Redis == null) this.Redis = eval("require")("ioredis");
				if (this.Events == null) this.Events = new Events(this);
				this.terminated = false;
				if (this.clusterNodes != null) {
					this.client = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
					this.subscriber = new this.Redis.Cluster(this.clusterNodes, this.clientOptions);
				} else if (this.client != null && this.client.duplicate == null) this.subscriber = new this.Redis.Cluster(this.client.startupNodes, this.client.options);
				else {
					if (this.client == null) this.client = new this.Redis(this.clientOptions);
					this.subscriber = this.client.duplicate();
				}
				this.limiters = {};
				this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
					this._loadScripts();
					return {
						client: this.client,
						subscriber: this.subscriber
					};
				});
			}
			_setup(client, sub) {
				client.setMaxListeners(0);
				return new this.Promise((resolve, reject) => {
					client.on("error", (e) => {
						return this.Events.trigger("error", e);
					});
					if (sub) client.on("message", (channel, message) => {
						var ref;
						return (ref = this.limiters[channel]) != null ? ref._store.onMessage(channel, message) : void 0;
					});
					if (client.status === "ready") return resolve();
					else return client.once("ready", resolve);
				});
			}
			_loadScripts() {
				return Scripts.names.forEach((name) => {
					return this.client.defineCommand(name, { lua: Scripts.payload(name) });
				});
			}
			__runCommand__(cmd) {
				var _this = this;
				return _asyncToGenerator(function* () {
					var _, deleted;
					yield _this.ready;
					var _ref2$ = _slicedToArray(_slicedToArray(yield _this.client.pipeline([cmd]).exec(), 1)[0], 2);
					_ref2$[0];
					deleted = _ref2$[1];
					return deleted;
				})();
			}
			__addLimiter__(instance) {
				return this.Promise.all([instance.channel(), instance.channel_client()].map((channel) => {
					return new this.Promise((resolve, reject) => {
						return this.subscriber.subscribe(channel, () => {
							this.limiters[channel] = instance;
							return resolve();
						});
					});
				}));
			}
			__removeLimiter__(instance) {
				var _this2 = this;
				return [instance.channel(), instance.channel_client()].forEach(/* @__PURE__ */ function() {
					var _ref3 = _asyncToGenerator(function* (channel) {
						if (!_this2.terminated) yield _this2.subscriber.unsubscribe(channel);
						return delete _this2.limiters[channel];
					});
					return function(_x) {
						return _ref3.apply(this, arguments);
					};
				}());
			}
			__scriptArgs__(name, id, args, cb) {
				var keys = Scripts.keys(name, id);
				return [keys.length].concat(keys, args, cb);
			}
			__scriptFn__(name) {
				return this.client[name].bind(this.client);
			}
			disconnect(flush = true) {
				var i, k, len, ref = Object.keys(this.limiters);
				for (i = 0, len = ref.length; i < len; i++) {
					k = ref[i];
					clearInterval(this.limiters[k]._store.heartbeat);
				}
				this.limiters = {};
				this.terminated = true;
				if (flush) return this.Promise.all([this.client.quit(), this.subscriber.quit()]);
				else {
					this.client.disconnect();
					this.subscriber.disconnect();
					return this.Promise.resolve();
				}
			}
		}
		IORedisConnection.prototype.datastore = "ioredis";
		IORedisConnection.prototype.defaults = {
			Redis: null,
			clientOptions: {},
			clusterNodes: null,
			client: null,
			Promise,
			Events: null
		};
		return IORedisConnection;
	}.call(void 0);
	module.exports = IORedisConnection;
}));
//#endregion
//#region node_modules/bottleneck/lib/RedisDatastore.js
var require_RedisDatastore = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _slicedToArray(arr, i) {
		return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}
	function _iterableToArrayLimit(arr, i) {
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = void 0;
		try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);
				if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;
			_e = err;
		} finally {
			try {
				if (!_n && _i["return"] != null) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) return arr;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var BottleneckError, IORedisConnection, RedisConnection, RedisDatastore, parser = require_parser();
	BottleneckError = require_BottleneckError();
	RedisConnection = require_RedisConnection();
	IORedisConnection = require_IORedisConnection();
	RedisDatastore = class RedisDatastore {
		constructor(instance, storeOptions, storeInstanceOptions) {
			this.instance = instance;
			this.storeOptions = storeOptions;
			this.originalId = this.instance.id;
			this.clientId = this.instance._randomIndex();
			parser.load(storeInstanceOptions, storeInstanceOptions, this);
			this.clients = {};
			this.capacityPriorityCounters = {};
			this.sharedConnection = this.connection != null;
			if (this.connection == null) this.connection = this.instance.datastore === "redis" ? new RedisConnection({
				Redis: this.Redis,
				clientOptions: this.clientOptions,
				Promise: this.Promise,
				Events: this.instance.Events
			}) : this.instance.datastore === "ioredis" ? new IORedisConnection({
				Redis: this.Redis,
				clientOptions: this.clientOptions,
				clusterNodes: this.clusterNodes,
				Promise: this.Promise,
				Events: this.instance.Events
			}) : void 0;
			this.instance.connection = this.connection;
			this.instance.datastore = this.connection.datastore;
			this.ready = this.connection.ready.then((clients) => {
				this.clients = clients;
				return this.runScript("init", this.prepareInitSettings(this.clearDatastore));
			}).then(() => {
				return this.connection.__addLimiter__(this.instance);
			}).then(() => {
				return this.runScript("register_client", [this.instance.queued()]);
			}).then(() => {
				var base;
				if (typeof (base = this.heartbeat = setInterval(() => {
					return this.runScript("heartbeat", []).catch((e) => {
						return this.instance.Events.trigger("error", e);
					});
				}, this.heartbeatInterval)).unref === "function") base.unref();
				return this.clients;
			});
		}
		__publish__(message) {
			var _this = this;
			return _asyncToGenerator(function* () {
				return (yield _this.ready).client.publish(_this.instance.channel(), `message:${message.toString()}`);
			})();
		}
		onMessage(channel, message) {
			var _this2 = this;
			return _asyncToGenerator(function* () {
				var capacity, counter, data, drained, e, newCapacity, pos, priorityClient, rawCapacity, type;
				try {
					pos = message.indexOf(":");
					var _ref2 = [message.slice(0, pos), message.slice(pos + 1)];
					type = _ref2[0];
					data = _ref2[1];
					if (type === "capacity") return yield _this2.instance._drainAll(data.length > 0 ? ~~data : void 0);
					else if (type === "capacity-priority") {
						var _data$split2 = _slicedToArray(data.split(":"), 3);
						rawCapacity = _data$split2[0];
						priorityClient = _data$split2[1];
						counter = _data$split2[2];
						capacity = rawCapacity.length > 0 ? ~~rawCapacity : void 0;
						if (priorityClient === _this2.clientId) {
							drained = yield _this2.instance._drainAll(capacity);
							newCapacity = capacity != null ? capacity - (drained || 0) : "";
							return yield _this2.clients.client.publish(_this2.instance.channel(), `capacity-priority:${newCapacity}::${counter}`);
						} else if (priorityClient === "") {
							clearTimeout(_this2.capacityPriorityCounters[counter]);
							delete _this2.capacityPriorityCounters[counter];
							return _this2.instance._drainAll(capacity);
						} else return _this2.capacityPriorityCounters[counter] = setTimeout(/* @__PURE__ */ _asyncToGenerator(function* () {
							var e;
							try {
								delete _this2.capacityPriorityCounters[counter];
								yield _this2.runScript("blacklist_client", [priorityClient]);
								return yield _this2.instance._drainAll(capacity);
							} catch (error) {
								e = error;
								return _this2.instance.Events.trigger("error", e);
							}
						}), 1e3);
					} else if (type === "message") return _this2.instance.Events.trigger("message", data);
					else if (type === "blocked") return yield _this2.instance._dropAllQueued();
				} catch (error) {
					e = error;
					return _this2.instance.Events.trigger("error", e);
				}
			})();
		}
		__disconnect__(flush) {
			clearInterval(this.heartbeat);
			if (this.sharedConnection) return this.connection.__removeLimiter__(this.instance);
			else return this.connection.disconnect(flush);
		}
		runScript(name, args) {
			var _this3 = this;
			return _asyncToGenerator(function* () {
				if (!(name === "init" || name === "register_client")) yield _this3.ready;
				return new _this3.Promise((resolve, reject) => {
					var all_args = [Date.now(), _this3.clientId].concat(args), arr;
					_this3.instance.Events.trigger("debug", `Calling Redis script: ${name}.lua`, all_args);
					arr = _this3.connection.__scriptArgs__(name, _this3.originalId, all_args, function(err, replies) {
						if (err != null) return reject(err);
						return resolve(replies);
					});
					return _this3.connection.__scriptFn__(name)(...arr);
				}).catch((e) => {
					if (e.message === "SETTINGS_KEY_NOT_FOUND") if (name === "heartbeat") return _this3.Promise.resolve();
					else return _this3.runScript("init", _this3.prepareInitSettings(false)).then(() => {
						return _this3.runScript(name, args);
					});
					else if (e.message === "UNKNOWN_CLIENT") return _this3.runScript("register_client", [_this3.instance.queued()]).then(() => {
						return _this3.runScript(name, args);
					});
					else return _this3.Promise.reject(e);
				});
			})();
		}
		prepareArray(arr) {
			var i, len, results = [], x;
			for (i = 0, len = arr.length; i < len; i++) {
				x = arr[i];
				results.push(x != null ? x.toString() : "");
			}
			return results;
		}
		prepareObject(obj) {
			var arr = [], k, v;
			for (k in obj) {
				v = obj[k];
				arr.push(k, v != null ? v.toString() : "");
			}
			return arr;
		}
		prepareInitSettings(clear) {
			var args = this.prepareObject(Object.assign({}, this.storeOptions, {
				id: this.originalId,
				version: this.instance.version,
				groupTimeout: this.timeout,
				clientTimeout: this.clientTimeout
			}));
			args.unshift(clear ? 1 : 0, this.instance.version);
			return args;
		}
		convertBool(b) {
			return !!b;
		}
		__updateSettings__(options) {
			var _this4 = this;
			return _asyncToGenerator(function* () {
				yield _this4.runScript("update_settings", _this4.prepareObject(options));
				return parser.overwrite(options, options, _this4.storeOptions);
			})();
		}
		__running__() {
			return this.runScript("running", []);
		}
		__queued__() {
			return this.runScript("queued", []);
		}
		__done__() {
			return this.runScript("done", []);
		}
		__groupCheck__() {
			var _this5 = this;
			return _asyncToGenerator(function* () {
				return _this5.convertBool(yield _this5.runScript("group_check", []));
			})();
		}
		__incrementReservoir__(incr) {
			return this.runScript("increment_reservoir", [incr]);
		}
		__currentReservoir__() {
			return this.runScript("current_reservoir", []);
		}
		__check__(weight) {
			var _this6 = this;
			return _asyncToGenerator(function* () {
				return _this6.convertBool(yield _this6.runScript("check", _this6.prepareArray([weight])));
			})();
		}
		__register__(index, weight, expiration) {
			var _this7 = this;
			return _asyncToGenerator(function* () {
				var reservoir, success, wait;
				var _ref5 = _slicedToArray(yield _this7.runScript("register", _this7.prepareArray([
					index,
					weight,
					expiration
				])), 3);
				success = _ref5[0];
				wait = _ref5[1];
				reservoir = _ref5[2];
				return {
					success: _this7.convertBool(success),
					wait,
					reservoir
				};
			})();
		}
		__submit__(queueLength, weight) {
			var _this8 = this;
			return _asyncToGenerator(function* () {
				var blocked, e, maxConcurrent, reachedHWM, strategy;
				try {
					var _ref7 = _slicedToArray(yield _this8.runScript("submit", _this8.prepareArray([queueLength, weight])), 3);
					reachedHWM = _ref7[0];
					blocked = _ref7[1];
					strategy = _ref7[2];
					return {
						reachedHWM: _this8.convertBool(reachedHWM),
						blocked: _this8.convertBool(blocked),
						strategy
					};
				} catch (error) {
					e = error;
					if (e.message.indexOf("OVERWEIGHT") === 0) {
						var _e$message$split2 = _slicedToArray(e.message.split(":"), 3);
						_e$message$split2[0];
						weight = _e$message$split2[1];
						maxConcurrent = _e$message$split2[2];
						throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${maxConcurrent}`);
					} else throw e;
				}
			})();
		}
		__free__(index, weight) {
			var _this9 = this;
			return _asyncToGenerator(function* () {
				return { running: yield _this9.runScript("free", _this9.prepareArray([index])) };
			})();
		}
	};
	module.exports = RedisDatastore;
}));
//#endregion
//#region node_modules/bottleneck/lib/States.js
var require_States = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var BottleneckError = require_BottleneckError();
	module.exports = class States {
		constructor(status1) {
			this.status = status1;
			this._jobs = {};
			this.counts = this.status.map(function() {
				return 0;
			});
		}
		next(id) {
			var current = this._jobs[id], next = current + 1;
			if (current != null && next < this.status.length) {
				this.counts[current]--;
				this.counts[next]++;
				return this._jobs[id]++;
			} else if (current != null) {
				this.counts[current]--;
				return delete this._jobs[id];
			}
		}
		start(id) {
			var initial = 0;
			this._jobs[id] = initial;
			return this.counts[initial]++;
		}
		remove(id) {
			var current = this._jobs[id];
			if (current != null) {
				this.counts[current]--;
				delete this._jobs[id];
			}
			return current != null;
		}
		jobStatus(id) {
			var ref;
			return (ref = this.status[this._jobs[id]]) != null ? ref : null;
		}
		statusJobs(status) {
			var k, pos, ref, results, v;
			if (status != null) {
				pos = this.status.indexOf(status);
				if (pos < 0) throw new BottleneckError(`status must be one of ${this.status.join(", ")}`);
				ref = this._jobs;
				results = [];
				for (k in ref) {
					v = ref[k];
					if (v === pos) results.push(k);
				}
				return results;
			} else return Object.keys(this._jobs);
		}
		statusCounts() {
			return this.counts.reduce((acc, v, i) => {
				acc[this.status[i]] = v;
				return acc;
			}, {});
		}
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/Sync.js
var require_Sync = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var DLList = require_DLList();
	module.exports = class Sync {
		constructor(name, Promise) {
			this.schedule = this.schedule.bind(this);
			this.name = name;
			this.Promise = Promise;
			this._running = 0;
			this._queue = new DLList();
		}
		isEmpty() {
			return this._queue.length === 0;
		}
		_tryToRun() {
			var _this = this;
			return _asyncToGenerator(function* () {
				var args, cb, error, reject, resolve, returned, task;
				if (_this._running < 1 && _this._queue.length > 0) {
					_this._running++;
					var _this$_queue$shift = _this._queue.shift();
					task = _this$_queue$shift.task;
					args = _this$_queue$shift.args;
					resolve = _this$_queue$shift.resolve;
					reject = _this$_queue$shift.reject;
					cb = yield _asyncToGenerator(function* () {
						try {
							returned = yield task(...args);
							return function() {
								return resolve(returned);
							};
						} catch (error1) {
							error = error1;
							return function() {
								return reject(error);
							};
						}
					})();
					_this._running--;
					_this._tryToRun();
					return cb();
				}
			})();
		}
		schedule(task, ...args) {
			var promise, reject, resolve = reject = null;
			promise = new this.Promise(function(_resolve, _reject) {
				resolve = _resolve;
				return reject = _reject;
			});
			this._queue.push({
				task,
				args,
				resolve,
				reject
			});
			this._tryToRun();
			return promise;
		}
	};
}));
//#endregion
//#region node_modules/bottleneck/lib/version.json
var require_version = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = { "version": "2.19.5" };
}));
//#endregion
//#region node_modules/bottleneck/lib/Group.js
var require_Group = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _slicedToArray(arr, i) {
		return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}
	function _iterableToArrayLimit(arr, i) {
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = void 0;
		try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);
				if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;
			_e = err;
		} finally {
			try {
				if (!_n && _i["return"] != null) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) return arr;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var Events, Group, IORedisConnection, RedisConnection, Scripts, parser = require_parser();
	Events = require_Events();
	RedisConnection = require_RedisConnection();
	IORedisConnection = require_IORedisConnection();
	Scripts = require_Scripts();
	Group = function() {
		class Group {
			constructor(limiterOptions = {}) {
				this.deleteKey = this.deleteKey.bind(this);
				this.limiterOptions = limiterOptions;
				parser.load(this.limiterOptions, this.defaults, this);
				this.Events = new Events(this);
				this.instances = {};
				this.Bottleneck = require_Bottleneck();
				this._startAutoCleanup();
				this.sharedConnection = this.connection != null;
				if (this.connection == null) {
					if (this.limiterOptions.datastore === "redis") this.connection = new RedisConnection(Object.assign({}, this.limiterOptions, { Events: this.Events }));
					else if (this.limiterOptions.datastore === "ioredis") this.connection = new IORedisConnection(Object.assign({}, this.limiterOptions, { Events: this.Events }));
				}
			}
			key(key = "") {
				var ref;
				return (ref = this.instances[key]) != null ? ref : (() => {
					var limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
						id: `${this.id}-${key}`,
						timeout: this.timeout,
						connection: this.connection
					}));
					this.Events.trigger("created", limiter, key);
					return limiter;
				})();
			}
			deleteKey(key = "") {
				var _this = this;
				return _asyncToGenerator(function* () {
					var deleted, instance = _this.instances[key];
					if (_this.connection) deleted = yield _this.connection.__runCommand__(["del", ...Scripts.allKeys(`${_this.id}-${key}`)]);
					if (instance != null) {
						delete _this.instances[key];
						yield instance.disconnect();
					}
					return instance != null || deleted > 0;
				})();
			}
			limiters() {
				var k, ref = this.instances, results = [], v;
				for (k in ref) {
					v = ref[k];
					results.push({
						key: k,
						limiter: v
					});
				}
				return results;
			}
			keys() {
				return Object.keys(this.instances);
			}
			clusterKeys() {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					var cursor, end, found, i, k, keys, len, next, start;
					if (_this2.connection == null) return _this2.Promise.resolve(_this2.keys());
					keys = [];
					cursor = null;
					start = `b_${_this2.id}-`.length;
					end = 9;
					while (cursor !== 0) {
						var _ref2 = _slicedToArray(yield _this2.connection.__runCommand__([
							"scan",
							cursor != null ? cursor : 0,
							"match",
							`b_${_this2.id}-*_settings`,
							"count",
							1e4
						]), 2);
						next = _ref2[0];
						found = _ref2[1];
						cursor = ~~next;
						for (i = 0, len = found.length; i < len; i++) {
							k = found[i];
							keys.push(k.slice(start, -end));
						}
					}
					return keys;
				})();
			}
			_startAutoCleanup() {
				var _this3 = this;
				var base;
				clearInterval(this.interval);
				return typeof (base = this.interval = setInterval(/* @__PURE__ */ _asyncToGenerator(function* () {
					var e, k, ref, results, time = Date.now(), v;
					ref = _this3.instances;
					results = [];
					for (k in ref) {
						v = ref[k];
						try {
							if (yield v._store.__groupCheck__(time)) results.push(_this3.deleteKey(k));
							else results.push(void 0);
						} catch (error) {
							e = error;
							results.push(v.Events.trigger("error", e));
						}
					}
					return results;
				}), this.timeout / 2)).unref === "function" ? base.unref() : void 0;
			}
			updateSettings(options = {}) {
				parser.overwrite(options, this.defaults, this);
				parser.overwrite(options, options, this.limiterOptions);
				if (options.timeout != null) return this._startAutoCleanup();
			}
			disconnect(flush = true) {
				var ref;
				if (!this.sharedConnection) return (ref = this.connection) != null ? ref.disconnect(flush) : void 0;
			}
		}
		Group.prototype.defaults = {
			timeout: 1e3 * 60 * 5,
			connection: null,
			Promise,
			id: "group-key"
		};
		return Group;
	}.call(void 0);
	module.exports = Group;
}));
//#endregion
//#region node_modules/bottleneck/lib/Batcher.js
var require_Batcher = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Batcher, Events, parser = require_parser();
	Events = require_Events();
	Batcher = function() {
		class Batcher {
			constructor(options = {}) {
				this.options = options;
				parser.load(this.options, this.defaults, this);
				this.Events = new Events(this);
				this._arr = [];
				this._resetPromise();
				this._lastFlush = Date.now();
			}
			_resetPromise() {
				return this._promise = new this.Promise((res, rej) => {
					return this._resolve = res;
				});
			}
			_flush() {
				clearTimeout(this._timeout);
				this._lastFlush = Date.now();
				this._resolve();
				this.Events.trigger("batch", this._arr);
				this._arr = [];
				return this._resetPromise();
			}
			add(data) {
				var ret;
				this._arr.push(data);
				ret = this._promise;
				if (this._arr.length === this.maxSize) this._flush();
				else if (this.maxTime != null && this._arr.length === 1) this._timeout = setTimeout(() => {
					return this._flush();
				}, this.maxTime);
				return ret;
			}
		}
		Batcher.prototype.defaults = {
			maxTime: null,
			maxSize: null,
			Promise
		};
		return Batcher;
	}.call(void 0);
	module.exports = Batcher;
}));
//#endregion
//#region node_modules/bottleneck/lib/Bottleneck.js
var require_Bottleneck = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _slicedToArray(arr, i) {
		return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}
	function _iterableToArrayLimit(arr, i) {
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = void 0;
		try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);
				if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;
			_e = err;
		} finally {
			try {
				if (!_n && _i["return"] != null) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
	function _toArray(arr) {
		return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}
	function _iterableToArray(iter) {
		if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}
	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) return arr;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	var Bottleneck, DEFAULT_PRIORITY, Events, Job, LocalDatastore, NUM_PRIORITIES, Queues, RedisDatastore, States, Sync, parser, splice = [].splice;
	NUM_PRIORITIES = 10;
	DEFAULT_PRIORITY = 5;
	parser = require_parser();
	Queues = require_Queues();
	Job = require_Job();
	LocalDatastore = require_LocalDatastore();
	RedisDatastore = require_RedisDatastore();
	Events = require_Events();
	States = require_States();
	Sync = require_Sync();
	Bottleneck = function() {
		class Bottleneck {
			constructor(options = {}, ...invalid) {
				var storeInstanceOptions, storeOptions;
				this._addToQueue = this._addToQueue.bind(this);
				this._validateOptions(options, invalid);
				parser.load(options, this.instanceDefaults, this);
				this._queues = new Queues(NUM_PRIORITIES);
				this._scheduled = {};
				this._states = new States([
					"RECEIVED",
					"QUEUED",
					"RUNNING",
					"EXECUTING"
				].concat(this.trackDoneStatus ? ["DONE"] : []));
				this._limiter = null;
				this.Events = new Events(this);
				this._submitLock = new Sync("submit", this.Promise);
				this._registerLock = new Sync("register", this.Promise);
				storeOptions = parser.load(options, this.storeDefaults, {});
				this._store = function() {
					if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null) {
						storeInstanceOptions = parser.load(options, this.redisStoreDefaults, {});
						return new RedisDatastore(this, storeOptions, storeInstanceOptions);
					} else if (this.datastore === "local") {
						storeInstanceOptions = parser.load(options, this.localStoreDefaults, {});
						return new LocalDatastore(this, storeOptions, storeInstanceOptions);
					} else throw new Bottleneck.prototype.BottleneckError(`Invalid datastore type: ${this.datastore}`);
				}.call(this);
				this._queues.on("leftzero", () => {
					var ref;
					return (ref = this._store.heartbeat) != null ? typeof ref.ref === "function" ? ref.ref() : void 0 : void 0;
				});
				this._queues.on("zero", () => {
					var ref;
					return (ref = this._store.heartbeat) != null ? typeof ref.unref === "function" ? ref.unref() : void 0 : void 0;
				});
			}
			_validateOptions(options, invalid) {
				if (!(options != null && typeof options === "object" && invalid.length === 0)) throw new Bottleneck.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.");
			}
			ready() {
				return this._store.ready;
			}
			clients() {
				return this._store.clients;
			}
			channel() {
				return `b_${this.id}`;
			}
			channel_client() {
				return `b_${this.id}_${this._store.clientId}`;
			}
			publish(message) {
				return this._store.__publish__(message);
			}
			disconnect(flush = true) {
				return this._store.__disconnect__(flush);
			}
			chain(_limiter) {
				this._limiter = _limiter;
				return this;
			}
			queued(priority) {
				return this._queues.queued(priority);
			}
			clusterQueued() {
				return this._store.__queued__();
			}
			empty() {
				return this.queued() === 0 && this._submitLock.isEmpty();
			}
			running() {
				return this._store.__running__();
			}
			done() {
				return this._store.__done__();
			}
			jobStatus(id) {
				return this._states.jobStatus(id);
			}
			jobs(status) {
				return this._states.statusJobs(status);
			}
			counts() {
				return this._states.statusCounts();
			}
			_randomIndex() {
				return Math.random().toString(36).slice(2);
			}
			check(weight = 1) {
				return this._store.__check__(weight);
			}
			_clearGlobalState(index) {
				if (this._scheduled[index] != null) {
					clearTimeout(this._scheduled[index].expiration);
					delete this._scheduled[index];
					return true;
				} else return false;
			}
			_free(index, job, options, eventInfo) {
				var _this = this;
				return _asyncToGenerator(function* () {
					var e, running;
					try {
						running = (yield _this._store.__free__(index, options.weight)).running;
						_this.Events.trigger("debug", `Freed ${options.id}`, eventInfo);
						if (running === 0 && _this.empty()) return _this.Events.trigger("idle");
					} catch (error1) {
						e = error1;
						return _this.Events.trigger("error", e);
					}
				})();
			}
			_run(index, job, wait) {
				var clearGlobalState, free, run;
				job.doRun();
				clearGlobalState = this._clearGlobalState.bind(this, index);
				run = this._run.bind(this, index, job);
				free = this._free.bind(this, index, job);
				return this._scheduled[index] = {
					timeout: setTimeout(() => {
						return job.doExecute(this._limiter, clearGlobalState, run, free);
					}, wait),
					expiration: job.options.expiration != null ? setTimeout(function() {
						return job.doExpire(clearGlobalState, run, free);
					}, wait + job.options.expiration) : void 0,
					job
				};
			}
			_drainOne(capacity) {
				return this._registerLock.schedule(() => {
					var args, index, next, options, queue;
					if (this.queued() === 0) return this.Promise.resolve(null);
					queue = this._queues.getFirst();
					var _next2 = next = queue.first();
					options = _next2.options;
					args = _next2.args;
					if (capacity != null && options.weight > capacity) return this.Promise.resolve(null);
					this.Events.trigger("debug", `Draining ${options.id}`, {
						args,
						options
					});
					index = this._randomIndex();
					return this._store.__register__(index, options.weight, options.expiration).then(({ success, wait, reservoir }) => {
						var empty;
						this.Events.trigger("debug", `Drained ${options.id}`, {
							success,
							args,
							options
						});
						if (success) {
							queue.shift();
							empty = this.empty();
							if (empty) this.Events.trigger("empty");
							if (reservoir === 0) this.Events.trigger("depleted", empty);
							this._run(index, next, wait);
							return this.Promise.resolve(options.weight);
						} else return this.Promise.resolve(null);
					});
				});
			}
			_drainAll(capacity, total = 0) {
				return this._drainOne(capacity).then((drained) => {
					var newCapacity;
					if (drained != null) {
						newCapacity = capacity != null ? capacity - drained : capacity;
						return this._drainAll(newCapacity, total + drained);
					} else return this.Promise.resolve(total);
				}).catch((e) => {
					return this.Events.trigger("error", e);
				});
			}
			_dropAllQueued(message) {
				return this._queues.shiftAll(function(job) {
					return job.doDrop({ message });
				});
			}
			stop(options = {}) {
				var done, waitForExecuting;
				options = parser.load(options, this.stopDefaults);
				waitForExecuting = (at) => {
					var finished = () => {
						var counts = this._states.counts;
						return counts[0] + counts[1] + counts[2] + counts[3] === at;
					};
					return new this.Promise((resolve, reject) => {
						if (finished()) return resolve();
						else return this.on("done", () => {
							if (finished()) {
								this.removeAllListeners("done");
								return resolve();
							}
						});
					});
				};
				done = options.dropWaitingJobs ? (this._run = function(index, next) {
					return next.doDrop({ message: options.dropErrorMessage });
				}, this._drainOne = () => {
					return this.Promise.resolve(null);
				}, this._registerLock.schedule(() => {
					return this._submitLock.schedule(() => {
						var k, ref = this._scheduled, v;
						for (k in ref) {
							v = ref[k];
							if (this.jobStatus(v.job.options.id) === "RUNNING") {
								clearTimeout(v.timeout);
								clearTimeout(v.expiration);
								v.job.doDrop({ message: options.dropErrorMessage });
							}
						}
						this._dropAllQueued(options.dropErrorMessage);
						return waitForExecuting(0);
					});
				})) : this.schedule({
					priority: NUM_PRIORITIES - 1,
					weight: 0
				}, () => {
					return waitForExecuting(1);
				});
				this._receive = function(job) {
					return job._reject(new Bottleneck.prototype.BottleneckError(options.enqueueErrorMessage));
				};
				this.stop = () => {
					return this.Promise.reject(new Bottleneck.prototype.BottleneckError("stop() has already been called"));
				};
				return done;
			}
			_addToQueue(job) {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					var args = job.args, blocked, error, options = job.options, reachedHWM, shifted, strategy;
					try {
						var _ref2 = yield _this2._store.__submit__(_this2.queued(), options.weight);
						reachedHWM = _ref2.reachedHWM;
						blocked = _ref2.blocked;
						strategy = _ref2.strategy;
					} catch (error1) {
						error = error1;
						_this2.Events.trigger("debug", `Could not queue ${options.id}`, {
							args,
							options,
							error
						});
						job.doDrop({ error });
						return false;
					}
					if (blocked) {
						job.doDrop();
						return true;
					} else if (reachedHWM) {
						shifted = strategy === Bottleneck.prototype.strategy.LEAK ? _this2._queues.shiftLastFrom(options.priority) : strategy === Bottleneck.prototype.strategy.OVERFLOW_PRIORITY ? _this2._queues.shiftLastFrom(options.priority + 1) : strategy === Bottleneck.prototype.strategy.OVERFLOW ? job : void 0;
						if (shifted != null) shifted.doDrop();
						if (shifted == null || strategy === Bottleneck.prototype.strategy.OVERFLOW) {
							if (shifted == null) job.doDrop();
							return reachedHWM;
						}
					}
					job.doQueue(reachedHWM, blocked);
					_this2._queues.push(job);
					yield _this2._drainAll();
					return reachedHWM;
				})();
			}
			_receive(job) {
				if (this._states.jobStatus(job.options.id) != null) {
					job._reject(new Bottleneck.prototype.BottleneckError(`A job with the same id already exists (id=${job.options.id})`));
					return false;
				} else {
					job.doReceive();
					return this._submitLock.schedule(this._addToQueue, job);
				}
			}
			submit(...args) {
				var cb, fn, job, options, ref, ref1, task;
				if (typeof args[0] === "function") {
					var _ref3, _ref4, _splice$call, _splice$call2;
					ref = args, _ref3 = ref, _ref4 = _toArray(_ref3), fn = _ref4[0], args = _ref4.slice(1), _splice$call = splice.call(args, -1), _splice$call2 = _slicedToArray(_splice$call, 1), cb = _splice$call2[0];
					options = parser.load({}, this.jobDefaults);
				} else {
					var _ref5, _ref6, _splice$call3, _splice$call4;
					ref1 = args, _ref5 = ref1, _ref6 = _toArray(_ref5), options = _ref6[0], fn = _ref6[1], args = _ref6.slice(2), _splice$call3 = splice.call(args, -1), _splice$call4 = _slicedToArray(_splice$call3, 1), cb = _splice$call4[0];
					options = parser.load(options, this.jobDefaults);
				}
				task = (...args) => {
					return new this.Promise(function(resolve, reject) {
						return fn(...args, function(...args) {
							return (args[0] != null ? reject : resolve)(args);
						});
					});
				};
				job = new Job(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
				job.promise.then(function(args) {
					return typeof cb === "function" ? cb(...args) : void 0;
				}).catch(function(args) {
					if (Array.isArray(args)) return typeof cb === "function" ? cb(...args) : void 0;
					else return typeof cb === "function" ? cb(args) : void 0;
				});
				return this._receive(job);
			}
			schedule(...args) {
				var job, options, task;
				if (typeof args[0] === "function") {
					var _args2 = _toArray(args);
					task = _args2[0];
					args = _args2.slice(1);
					options = {};
				} else {
					var _args4 = _toArray(args);
					options = _args4[0];
					task = _args4[1];
					args = _args4.slice(2);
				}
				job = new Job(task, args, options, this.jobDefaults, this.rejectOnDrop, this.Events, this._states, this.Promise);
				this._receive(job);
				return job.promise;
			}
			wrap(fn) {
				var schedule = this.schedule.bind(this), wrapped = function wrapped(...args) {
					return schedule(fn.bind(this), ...args);
				};
				wrapped.withOptions = function(options, ...args) {
					return schedule(options, fn, ...args);
				};
				return wrapped;
			}
			updateSettings(options = {}) {
				var _this3 = this;
				return _asyncToGenerator(function* () {
					yield _this3._store.__updateSettings__(parser.overwrite(options, _this3.storeDefaults));
					parser.overwrite(options, _this3.instanceDefaults, _this3);
					return _this3;
				})();
			}
			currentReservoir() {
				return this._store.__currentReservoir__();
			}
			incrementReservoir(incr = 0) {
				return this._store.__incrementReservoir__(incr);
			}
		}
		Bottleneck.default = Bottleneck;
		Bottleneck.Events = Events;
		Bottleneck.version = Bottleneck.prototype.version = require_version().version;
		Bottleneck.strategy = Bottleneck.prototype.strategy = {
			LEAK: 1,
			OVERFLOW: 2,
			OVERFLOW_PRIORITY: 4,
			BLOCK: 3
		};
		Bottleneck.BottleneckError = Bottleneck.prototype.BottleneckError = require_BottleneckError();
		Bottleneck.Group = Bottleneck.prototype.Group = require_Group();
		Bottleneck.RedisConnection = Bottleneck.prototype.RedisConnection = require_RedisConnection();
		Bottleneck.IORedisConnection = Bottleneck.prototype.IORedisConnection = require_IORedisConnection();
		Bottleneck.Batcher = Bottleneck.prototype.Batcher = require_Batcher();
		Bottleneck.prototype.jobDefaults = {
			priority: DEFAULT_PRIORITY,
			weight: 1,
			expiration: null,
			id: "<no-id>"
		};
		Bottleneck.prototype.storeDefaults = {
			maxConcurrent: null,
			minTime: 0,
			highWater: null,
			strategy: Bottleneck.prototype.strategy.LEAK,
			penalty: null,
			reservoir: null,
			reservoirRefreshInterval: null,
			reservoirRefreshAmount: null,
			reservoirIncreaseInterval: null,
			reservoirIncreaseAmount: null,
			reservoirIncreaseMaximum: null
		};
		Bottleneck.prototype.localStoreDefaults = {
			Promise,
			timeout: null,
			heartbeatInterval: 250
		};
		Bottleneck.prototype.redisStoreDefaults = {
			Promise,
			timeout: null,
			heartbeatInterval: 5e3,
			clientTimeout: 1e4,
			Redis: null,
			clientOptions: {},
			clusterNodes: null,
			clearDatastore: false,
			connection: null
		};
		Bottleneck.prototype.instanceDefaults = {
			datastore: "local",
			connection: null,
			id: "<no-id>",
			rejectOnDrop: true,
			trackDoneStatus: false,
			Promise
		};
		Bottleneck.prototype.stopDefaults = {
			enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
			dropWaitingJobs: true,
			dropErrorMessage: "This limiter has been stopped."
		};
		return Bottleneck;
	}.call(void 0);
	module.exports = Bottleneck;
}));
//#endregion
//#region node_modules/bottleneck/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_Bottleneck();
}));
//#endregion
//#region node_modules/@grammyjs/transformer-throttler/dist/deps.node.js
var require_deps_node = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Bottleneck = void 0;
	var bottleneck_1 = require_lib();
	Object.defineProperty(exports, "Bottleneck", {
		enumerable: true,
		get: function() {
			return __importDefault(bottleneck_1).default;
		}
	});
}));
//#endregion
//#region node_modules/@grammyjs/transformer-throttler/dist/mod.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bypassThrottler = exports.apiThrottler = exports.BottleneckStrategy = void 0;
	const deps_node_js_1 = require_deps_node();
	const skipSet = /* @__PURE__ */ new Set();
	const bypassThrottler = async (ctx, next) => {
		let willSkip = true;
		ctx.api.config.use(async (prev, method, payload, signal) => {
			if (!willSkip) return prev(method, payload, signal);
			willSkip = false;
			skipSet.add(payload);
			try {
				return await prev(method, payload, signal);
			} finally {
				skipSet.delete(payload);
			}
		});
		await next();
	};
	exports.bypassThrottler = bypassThrottler;
	const apiThrottler = (opts = {}) => {
		var _a, _b, _c;
		const globalConfig = (_a = opts.global) !== null && _a !== void 0 ? _a : {
			reservoir: 30,
			reservoirRefreshAmount: 30,
			reservoirRefreshInterval: 1e3
		};
		const groupConfig = (_b = opts.group) !== null && _b !== void 0 ? _b : {
			maxConcurrent: 1,
			minTime: 1e3,
			reservoir: 20,
			reservoirRefreshAmount: 20,
			reservoirRefreshInterval: 6e4
		};
		const outConfig = (_c = opts.out) !== null && _c !== void 0 ? _c : {
			maxConcurrent: 1,
			minTime: 1e3
		};
		const globalThrottler = new deps_node_js_1.Bottleneck(globalConfig);
		const groupThrottler = new deps_node_js_1.Bottleneck.Group(groupConfig);
		const outThrottler = new deps_node_js_1.Bottleneck.Group(outConfig);
		groupThrottler.on("created", (throttler) => throttler.chain(globalThrottler));
		outThrottler.on("created", (throttler) => throttler.chain(globalThrottler));
		const transformer = async (prev, method, payload, signal) => {
			if (!payload || !("chat_id" in payload) || skipSet.has(payload)) return prev(method, payload, signal);
			const chatId = Number(payload.chat_id);
			return (chatId < 0 ? groupThrottler.key(`${chatId}`) : outThrottler.key(`${chatId}`)).schedule(() => prev(method, payload, signal));
		};
		return transformer;
	};
	exports.apiThrottler = apiThrottler;
	exports.BottleneckStrategy = deps_node_js_1.Bottleneck.strategy;
}));
//#endregion
//#region extensions/telegram/src/bot.runtime.ts
var import_out = require_out();
var import_dist = require_dist();
//#endregion
//#region extensions/telegram/src/sendchataction-401-backoff.ts
const BACKOFF_POLICY = {
	initialMs: 1e3,
	maxMs: 3e5,
	factor: 2,
	jitter: .1
};
function is401Error(error) {
	if (!error) return false;
	const message = error instanceof Error ? error.message : JSON.stringify(error);
	return message.includes("401") || message.toLowerCase().includes("unauthorized");
}
/**
* Creates a GLOBAL (per-account) handler for sendChatAction that tracks 401 errors
* across all message contexts. This prevents the infinite loop that caused Telegram
* to delete bots (issue #27092).
*
* When a 401 occurs, exponential backoff is applied (1s → 2s → 4s → ... → 5min).
* After maxConsecutive401 failures (default 10), all sendChatAction calls are
* suspended until reset() is called.
*/
function createTelegramSendChatActionHandler({ sendChatActionFn, logger, maxConsecutive401 = 10 }) {
	let consecutive401Failures = 0;
	let suspended = false;
	const reset = () => {
		consecutive401Failures = 0;
		suspended = false;
	};
	const sendChatAction = async (chatId, action, threadParams) => {
		if (suspended) return;
		if (consecutive401Failures > 0) {
			const backoffMs = computeBackoff(BACKOFF_POLICY, consecutive401Failures);
			logger(`sendChatAction backoff: waiting ${backoffMs}ms before retry (failure ${consecutive401Failures}/${maxConsecutive401})`);
			await sleepWithAbort(backoffMs);
		}
		try {
			await sendChatActionFn(chatId, action, threadParams);
			if (consecutive401Failures > 0) {
				logger(`sendChatAction recovered after ${consecutive401Failures} consecutive 401 failures`);
				consecutive401Failures = 0;
			}
		} catch (error) {
			if (is401Error(error)) {
				consecutive401Failures++;
				if (consecutive401Failures >= maxConsecutive401) {
					suspended = true;
					logger(`CRITICAL: sendChatAction suspended after ${consecutive401Failures} consecutive 401 errors. Bot token is likely invalid. Telegram may DELETE the bot if requests continue. Replace the token and restart: openclaw channels restart telegram`);
				} else logger(`sendChatAction 401 error (${consecutive401Failures}/${maxConsecutive401}). Retrying with exponential backoff.`);
			}
			throw error;
		}
	};
	return {
		sendChatAction,
		isSuspended: () => suspended,
		reset
	};
}
//#endregion
//#region extensions/telegram/src/sequential-key.ts
function getTelegramSequentialKey(ctx) {
	const reaction = ctx.update?.message_reaction;
	if (reaction?.chat?.id) return `telegram:${reaction.chat.id}`;
	const msg = ctx.message ?? ctx.channelPost ?? ctx.editedChannelPost ?? ctx.update?.message ?? ctx.update?.edited_message ?? ctx.update?.channel_post ?? ctx.update?.edited_channel_post ?? ctx.update?.callback_query?.message;
	const chatId = msg?.chat?.id ?? ctx.chat?.id;
	const rawText = msg?.text ?? msg?.caption;
	const botUsername = ctx.me?.username;
	if (isAbortRequestText(rawText, botUsername ? { botUsername } : void 0)) {
		if (typeof chatId === "number") return `telegram:${chatId}:control`;
		return "telegram:control";
	}
	if (isBtwRequestText(rawText, botUsername ? { botUsername } : void 0)) {
		const messageId = msg?.message_id;
		if (typeof chatId === "number" && typeof messageId === "number") return `telegram:${chatId}:btw:${messageId}`;
		if (typeof chatId === "number") return `telegram:${chatId}:btw`;
		return "telegram:btw";
	}
	const isGroup = msg?.chat?.type === "group" || msg?.chat?.type === "supergroup";
	const messageThreadId = msg?.message_thread_id;
	const isForum = msg?.chat?.is_forum;
	const threadId = isGroup ? resolveTelegramForumThreadId({
		isForum,
		messageThreadId
	}) : messageThreadId;
	if (typeof chatId === "number") return threadId != null ? `telegram:${chatId}:topic:${threadId}` : `telegram:${chatId}`;
	return "telegram:unknown";
}
//#endregion
//#region extensions/telegram/src/thread-bindings.ts
const DEFAULT_THREAD_BINDING_IDLE_TIMEOUT_MS = 1440 * 60 * 1e3;
const DEFAULT_THREAD_BINDING_MAX_AGE_MS = 0;
const THREAD_BINDINGS_SWEEP_INTERVAL_MS = 6e4;
const STORE_VERSION = 1;
/**
* Keep Telegram thread binding state shared across bundled chunks so routing,
* binding lookups, and binding mutations all observe the same live registry.
*/
const TELEGRAM_THREAD_BINDINGS_STATE_KEY = Symbol.for("openclaw.telegramThreadBindingsState");
let threadBindingsState;
function getThreadBindingsState() {
	threadBindingsState ??= resolveGlobalSingleton(TELEGRAM_THREAD_BINDINGS_STATE_KEY, () => ({
		managersByAccountId: /* @__PURE__ */ new Map(),
		bindingsByAccountConversation: /* @__PURE__ */ new Map(),
		persistQueueByAccountId: /* @__PURE__ */ new Map()
	}));
	return threadBindingsState;
}
function normalizeDurationMs(raw, fallback) {
	if (typeof raw !== "number" || !Number.isFinite(raw)) return fallback;
	return Math.max(0, Math.floor(raw));
}
function normalizeConversationId(raw) {
	if (typeof raw !== "string") return;
	return raw.trim() || void 0;
}
function resolveBindingKey(params) {
	return `${params.accountId}:${params.conversationId}`;
}
function toSessionBindingTargetKind(raw) {
	return raw === "subagent" ? "subagent" : "session";
}
function toTelegramTargetKind(raw) {
	return raw === "subagent" ? "subagent" : "acp";
}
function toSessionBindingRecord(record, defaults) {
	return {
		bindingId: resolveBindingKey({
			accountId: record.accountId,
			conversationId: record.conversationId
		}),
		targetSessionKey: record.targetSessionKey,
		targetKind: toSessionBindingTargetKind(record.targetKind),
		conversation: {
			channel: "telegram",
			accountId: record.accountId,
			conversationId: record.conversationId
		},
		status: "active",
		boundAt: record.boundAt,
		expiresAt: resolveThreadBindingEffectiveExpiresAt({
			record,
			defaultIdleTimeoutMs: defaults.idleTimeoutMs,
			defaultMaxAgeMs: defaults.maxAgeMs
		}),
		metadata: {
			agentId: record.agentId,
			label: record.label,
			boundBy: record.boundBy,
			lastActivityAt: record.lastActivityAt,
			idleTimeoutMs: typeof record.idleTimeoutMs === "number" ? Math.max(0, Math.floor(record.idleTimeoutMs)) : defaults.idleTimeoutMs,
			maxAgeMs: typeof record.maxAgeMs === "number" ? Math.max(0, Math.floor(record.maxAgeMs)) : defaults.maxAgeMs,
			...record.metadata
		}
	};
}
function fromSessionBindingInput(params) {
	const now = Date.now();
	const metadata = params.input.metadata ?? {};
	const existing = getThreadBindingsState().bindingsByAccountConversation.get(resolveBindingKey({
		accountId: params.accountId,
		conversationId: params.input.conversationId
	}));
	const record = {
		accountId: params.accountId,
		conversationId: params.input.conversationId,
		targetKind: toTelegramTargetKind(params.input.targetKind),
		targetSessionKey: params.input.targetSessionKey,
		agentId: typeof metadata.agentId === "string" && metadata.agentId.trim() ? metadata.agentId.trim() : existing?.agentId,
		label: typeof metadata.label === "string" && metadata.label.trim() ? metadata.label.trim() : existing?.label,
		boundBy: typeof metadata.boundBy === "string" && metadata.boundBy.trim() ? metadata.boundBy.trim() : existing?.boundBy,
		boundAt: now,
		lastActivityAt: now,
		metadata: {
			...existing?.metadata,
			...metadata
		}
	};
	if (typeof metadata.idleTimeoutMs === "number" && Number.isFinite(metadata.idleTimeoutMs)) record.idleTimeoutMs = Math.max(0, Math.floor(metadata.idleTimeoutMs));
	else if (typeof existing?.idleTimeoutMs === "number") record.idleTimeoutMs = existing.idleTimeoutMs;
	if (typeof metadata.maxAgeMs === "number" && Number.isFinite(metadata.maxAgeMs)) record.maxAgeMs = Math.max(0, Math.floor(metadata.maxAgeMs));
	else if (typeof existing?.maxAgeMs === "number") record.maxAgeMs = existing.maxAgeMs;
	return record;
}
function resolveBindingsPath(accountId, env = process.env) {
	const stateDir = resolveStateDir(env, os.homedir);
	return path.join(stateDir, "telegram", `thread-bindings-${accountId}.json`);
}
function summarizeLifecycleForLog(record, defaults) {
	const idleTimeoutMs = typeof record.idleTimeoutMs === "number" ? record.idleTimeoutMs : defaults.idleTimeoutMs;
	const maxAgeMs = typeof record.maxAgeMs === "number" ? record.maxAgeMs : defaults.maxAgeMs;
	return `idle=${formatThreadBindingDurationLabel(Math.max(0, Math.floor(idleTimeoutMs)))} maxAge=${formatThreadBindingDurationLabel(Math.max(0, Math.floor(maxAgeMs)))}`;
}
function loadBindingsFromDisk(accountId) {
	const filePath = resolveBindingsPath(accountId);
	try {
		const raw = fs.readFileSync(filePath, "utf-8");
		const parsed = JSON.parse(raw);
		if (parsed?.version !== STORE_VERSION || !Array.isArray(parsed.bindings)) return [];
		const bindings = [];
		for (const entry of parsed.bindings) {
			const conversationId = normalizeConversationId(entry?.conversationId);
			const targetSessionKey = typeof entry?.targetSessionKey === "string" ? entry.targetSessionKey.trim() : "";
			const targetKind = entry?.targetKind === "subagent" ? "subagent" : "acp";
			if (!conversationId || !targetSessionKey) continue;
			const boundAt = typeof entry?.boundAt === "number" && Number.isFinite(entry.boundAt) ? Math.floor(entry.boundAt) : Date.now();
			const record = {
				accountId,
				conversationId,
				targetSessionKey,
				targetKind,
				boundAt,
				lastActivityAt: typeof entry?.lastActivityAt === "number" && Number.isFinite(entry.lastActivityAt) ? Math.floor(entry.lastActivityAt) : boundAt
			};
			if (typeof entry?.idleTimeoutMs === "number" && Number.isFinite(entry.idleTimeoutMs)) record.idleTimeoutMs = Math.max(0, Math.floor(entry.idleTimeoutMs));
			if (typeof entry?.maxAgeMs === "number" && Number.isFinite(entry.maxAgeMs)) record.maxAgeMs = Math.max(0, Math.floor(entry.maxAgeMs));
			if (typeof entry?.agentId === "string" && entry.agentId.trim()) record.agentId = entry.agentId.trim();
			if (typeof entry?.label === "string" && entry.label.trim()) record.label = entry.label.trim();
			if (typeof entry?.boundBy === "string" && entry.boundBy.trim()) record.boundBy = entry.boundBy.trim();
			if (entry?.metadata && typeof entry.metadata === "object") record.metadata = { ...entry.metadata };
			bindings.push(record);
		}
		return bindings;
	} catch (err) {
		if (err.code !== "ENOENT") logVerbose(`telegram thread bindings load failed (${accountId}): ${String(err)}`);
		return [];
	}
}
async function persistBindingsToDisk(params) {
	if (!params.persist) return;
	const payload = {
		version: STORE_VERSION,
		bindings: params.bindings ?? [...getThreadBindingsState().bindingsByAccountConversation.values()].filter((entry) => entry.accountId === params.accountId)
	};
	await writeJsonAtomic(resolveBindingsPath(params.accountId), payload, {
		mode: 384,
		trailingNewline: true,
		ensureDirMode: 448
	});
}
function listBindingsForAccount(accountId) {
	return [...getThreadBindingsState().bindingsByAccountConversation.values()].filter((entry) => entry.accountId === accountId);
}
function enqueuePersistBindings(params) {
	if (!params.persist) return Promise.resolve();
	const next = (getThreadBindingsState().persistQueueByAccountId.get(params.accountId) ?? Promise.resolve()).catch(() => void 0).then(async () => {
		await persistBindingsToDisk(params);
	});
	getThreadBindingsState().persistQueueByAccountId.set(params.accountId, next);
	next.finally(() => {
		if (getThreadBindingsState().persistQueueByAccountId.get(params.accountId) === next) getThreadBindingsState().persistQueueByAccountId.delete(params.accountId);
	});
	return next;
}
function persistBindingsSafely(params) {
	enqueuePersistBindings(params).catch((err) => {
		logVerbose(`telegram thread bindings persist failed (${params.accountId}, ${params.reason}): ${String(err)}`);
	});
}
function normalizeTimestampMs(raw) {
	if (typeof raw !== "number" || !Number.isFinite(raw)) return Date.now();
	return Math.max(0, Math.floor(raw));
}
function shouldExpireByIdle(params) {
	const idleTimeoutMs = typeof params.record.idleTimeoutMs === "number" ? Math.max(0, Math.floor(params.record.idleTimeoutMs)) : params.defaultIdleTimeoutMs;
	if (idleTimeoutMs <= 0) return false;
	return params.now >= Math.max(params.record.lastActivityAt, params.record.boundAt) + idleTimeoutMs;
}
function shouldExpireByMaxAge(params) {
	const maxAgeMs = typeof params.record.maxAgeMs === "number" ? Math.max(0, Math.floor(params.record.maxAgeMs)) : params.defaultMaxAgeMs;
	if (maxAgeMs <= 0) return false;
	return params.now >= params.record.boundAt + maxAgeMs;
}
function createTelegramThreadBindingManager(params = {}) {
	const accountId = normalizeAccountId(params.accountId);
	const existing = getThreadBindingsState().managersByAccountId.get(accountId);
	if (existing) return existing;
	const persist = params.persist ?? true;
	const idleTimeoutMs = normalizeDurationMs(params.idleTimeoutMs, DEFAULT_THREAD_BINDING_IDLE_TIMEOUT_MS);
	const maxAgeMs = normalizeDurationMs(params.maxAgeMs, DEFAULT_THREAD_BINDING_MAX_AGE_MS);
	const loaded = loadBindingsFromDisk(accountId);
	for (const entry of loaded) {
		const key = resolveBindingKey({
			accountId,
			conversationId: entry.conversationId
		});
		getThreadBindingsState().bindingsByAccountConversation.set(key, {
			...entry,
			accountId
		});
	}
	let sweepTimer = null;
	const manager = {
		accountId,
		shouldPersistMutations: () => persist,
		getIdleTimeoutMs: () => idleTimeoutMs,
		getMaxAgeMs: () => maxAgeMs,
		getByConversationId: (conversationIdRaw) => {
			const conversationId = normalizeConversationId(conversationIdRaw);
			if (!conversationId) return;
			return getThreadBindingsState().bindingsByAccountConversation.get(resolveBindingKey({
				accountId,
				conversationId
			}));
		},
		listBySessionKey: (targetSessionKeyRaw) => {
			const targetSessionKey = targetSessionKeyRaw.trim();
			if (!targetSessionKey) return [];
			return listBindingsForAccount(accountId).filter((entry) => entry.targetSessionKey === targetSessionKey);
		},
		listBindings: () => listBindingsForAccount(accountId),
		touchConversation: (conversationIdRaw, at) => {
			const conversationId = normalizeConversationId(conversationIdRaw);
			if (!conversationId) return null;
			const key = resolveBindingKey({
				accountId,
				conversationId
			});
			const existing = getThreadBindingsState().bindingsByAccountConversation.get(key);
			if (!existing) return null;
			const nextRecord = {
				...existing,
				lastActivityAt: normalizeTimestampMs(at ?? Date.now())
			};
			getThreadBindingsState().bindingsByAccountConversation.set(key, nextRecord);
			persistBindingsSafely({
				accountId,
				persist: manager.shouldPersistMutations(),
				bindings: listBindingsForAccount(accountId),
				reason: "touch"
			});
			return nextRecord;
		},
		unbindConversation: (unbindParams) => {
			const conversationId = normalizeConversationId(unbindParams.conversationId);
			if (!conversationId) return null;
			const key = resolveBindingKey({
				accountId,
				conversationId
			});
			const removed = getThreadBindingsState().bindingsByAccountConversation.get(key) ?? null;
			if (!removed) return null;
			getThreadBindingsState().bindingsByAccountConversation.delete(key);
			persistBindingsSafely({
				accountId,
				persist: manager.shouldPersistMutations(),
				bindings: listBindingsForAccount(accountId),
				reason: "unbind-conversation"
			});
			return removed;
		},
		unbindBySessionKey: (unbindParams) => {
			const targetSessionKey = unbindParams.targetSessionKey.trim();
			if (!targetSessionKey) return [];
			const removed = [];
			for (const entry of listBindingsForAccount(accountId)) {
				if (entry.targetSessionKey !== targetSessionKey) continue;
				const key = resolveBindingKey({
					accountId,
					conversationId: entry.conversationId
				});
				getThreadBindingsState().bindingsByAccountConversation.delete(key);
				removed.push(entry);
			}
			if (removed.length > 0) persistBindingsSafely({
				accountId,
				persist: manager.shouldPersistMutations(),
				bindings: listBindingsForAccount(accountId),
				reason: "unbind-session"
			});
			return removed;
		},
		stop: () => {
			if (sweepTimer) {
				clearInterval(sweepTimer);
				sweepTimer = null;
			}
			unregisterSessionBindingAdapter({
				channel: "telegram",
				accountId,
				adapter: sessionBindingAdapter
			});
			if (getThreadBindingsState().managersByAccountId.get(accountId) === manager) getThreadBindingsState().managersByAccountId.delete(accountId);
		}
	};
	const sessionBindingAdapter = {
		channel: "telegram",
		accountId,
		capabilities: { placements: ["current"] },
		bind: async (input) => {
			if (input.conversation.channel !== "telegram") return null;
			if (input.placement === "child") return null;
			const conversationId = normalizeConversationId(input.conversation.conversationId);
			const targetSessionKey = input.targetSessionKey.trim();
			if (!conversationId || !targetSessionKey) return null;
			const record = fromSessionBindingInput({
				accountId,
				input: {
					targetSessionKey,
					targetKind: input.targetKind,
					conversationId,
					metadata: input.metadata
				}
			});
			getThreadBindingsState().bindingsByAccountConversation.set(resolveBindingKey({
				accountId,
				conversationId
			}), record);
			await enqueuePersistBindings({
				accountId,
				persist: manager.shouldPersistMutations(),
				bindings: listBindingsForAccount(accountId)
			});
			logVerbose(`telegram: bound conversation ${conversationId} -> ${targetSessionKey} (${summarizeLifecycleForLog(record, {
				idleTimeoutMs,
				maxAgeMs
			})})`);
			return toSessionBindingRecord(record, {
				idleTimeoutMs,
				maxAgeMs
			});
		},
		listBySession: (targetSessionKeyRaw) => {
			const targetSessionKey = targetSessionKeyRaw.trim();
			if (!targetSessionKey) return [];
			return manager.listBySessionKey(targetSessionKey).map((entry) => toSessionBindingRecord(entry, {
				idleTimeoutMs,
				maxAgeMs
			}));
		},
		resolveByConversation: (ref) => {
			if (ref.channel !== "telegram") return null;
			const conversationId = normalizeConversationId(ref.conversationId);
			if (!conversationId) return null;
			const record = manager.getByConversationId(conversationId);
			return record ? toSessionBindingRecord(record, {
				idleTimeoutMs,
				maxAgeMs
			}) : null;
		},
		touch: (bindingId, at) => {
			const conversationId = resolveThreadBindingConversationIdFromBindingId({
				accountId,
				bindingId
			});
			if (!conversationId) return;
			manager.touchConversation(conversationId, at);
		},
		unbind: async (input) => {
			if (input.targetSessionKey?.trim()) {
				const removed = manager.unbindBySessionKey({
					targetSessionKey: input.targetSessionKey,
					reason: input.reason,
					sendFarewell: false
				});
				if (removed.length > 0) await enqueuePersistBindings({
					accountId,
					persist: manager.shouldPersistMutations(),
					bindings: listBindingsForAccount(accountId)
				});
				return removed.map((entry) => toSessionBindingRecord(entry, {
					idleTimeoutMs,
					maxAgeMs
				}));
			}
			const conversationId = resolveThreadBindingConversationIdFromBindingId({
				accountId,
				bindingId: input.bindingId
			});
			if (!conversationId) return [];
			const removed = manager.unbindConversation({
				conversationId,
				reason: input.reason,
				sendFarewell: false
			});
			if (removed) await enqueuePersistBindings({
				accountId,
				persist: manager.shouldPersistMutations(),
				bindings: listBindingsForAccount(accountId)
			});
			return removed ? [toSessionBindingRecord(removed, {
				idleTimeoutMs,
				maxAgeMs
			})] : [];
		}
	};
	registerSessionBindingAdapter(sessionBindingAdapter);
	if (params.enableSweeper !== false) {
		sweepTimer = setInterval(() => {
			const now = Date.now();
			for (const record of listBindingsForAccount(accountId)) {
				const idleExpired = shouldExpireByIdle({
					now,
					record,
					defaultIdleTimeoutMs: idleTimeoutMs
				});
				const maxAgeExpired = shouldExpireByMaxAge({
					now,
					record,
					defaultMaxAgeMs: maxAgeMs
				});
				if (!idleExpired && !maxAgeExpired) continue;
				manager.unbindConversation({
					conversationId: record.conversationId,
					reason: idleExpired ? "idle-expired" : "max-age-expired",
					sendFarewell: false
				});
			}
		}, THREAD_BINDINGS_SWEEP_INTERVAL_MS);
		sweepTimer.unref?.();
	}
	getThreadBindingsState().managersByAccountId.set(accountId, manager);
	return manager;
}
function getTelegramThreadBindingManager(accountId) {
	return getThreadBindingsState().managersByAccountId.get(normalizeAccountId(accountId)) ?? null;
}
function updateTelegramBindingsBySessionKey(params) {
	const targetSessionKey = params.targetSessionKey.trim();
	if (!targetSessionKey) return [];
	const now = Date.now();
	const updated = [];
	for (const entry of params.manager.listBySessionKey(targetSessionKey)) {
		const key = resolveBindingKey({
			accountId: params.manager.accountId,
			conversationId: entry.conversationId
		});
		const next = params.update(entry, now);
		getThreadBindingsState().bindingsByAccountConversation.set(key, next);
		updated.push(next);
	}
	if (updated.length > 0) persistBindingsSafely({
		accountId: params.manager.accountId,
		persist: params.manager.shouldPersistMutations(),
		bindings: listBindingsForAccount(params.manager.accountId),
		reason: "session-lifecycle-update"
	});
	return updated;
}
function setTelegramThreadBindingIdleTimeoutBySessionKey(params) {
	const manager = getTelegramThreadBindingManager(params.accountId);
	if (!manager) return [];
	const idleTimeoutMs = normalizeDurationMs(params.idleTimeoutMs, 0);
	return updateTelegramBindingsBySessionKey({
		manager,
		targetSessionKey: params.targetSessionKey,
		update: (entry, now) => ({
			...entry,
			idleTimeoutMs,
			lastActivityAt: now
		})
	});
}
function setTelegramThreadBindingMaxAgeBySessionKey(params) {
	const manager = getTelegramThreadBindingManager(params.accountId);
	if (!manager) return [];
	const maxAgeMs = normalizeDurationMs(params.maxAgeMs, 0);
	return updateTelegramBindingsBySessionKey({
		manager,
		targetSessionKey: params.targetSessionKey,
		update: (entry, now) => ({
			...entry,
			maxAgeMs,
			lastActivityAt: now
		})
	});
}
//#endregion
//#region extensions/telegram/src/bot.ts
const DEFAULT_TELEGRAM_BOT_RUNTIME = {
	Bot: import_out$1.Bot,
	sequentialize: import_out.sequentialize,
	apiThrottler: import_dist.apiThrottler
};
const TELEGRAM_GET_UPDATES_REQUEST_TIMEOUT_MS = 45e3;
let telegramBotRuntimeForTest;
function readRequestUrl(input) {
	if (typeof input === "string") return input;
	if (input instanceof URL) return input.toString();
	if (typeof input === "object" && input !== null && "url" in input) {
		const url = input.url;
		return typeof url === "string" ? url : null;
	}
	return null;
}
function extractTelegramApiMethod(input) {
	const url = readRequestUrl(input);
	if (!url) return null;
	try {
		const segments = new URL(url).pathname.split("/").filter(Boolean);
		return (segments.length > 0 ? segments.at(-1) ?? null : null)?.toLowerCase() ?? null;
	} catch {
		return null;
	}
}
function createTelegramBot(opts) {
	const botRuntime = telegramBotRuntimeForTest ?? DEFAULT_TELEGRAM_BOT_RUNTIME;
	const runtime = opts.runtime ?? createNonExitingRuntime();
	const telegramDeps = opts.telegramDeps ?? defaultTelegramBotDeps;
	const cfg = opts.config ?? telegramDeps.loadConfig();
	const account = resolveTelegramAccount({
		cfg,
		accountId: opts.accountId
	});
	const threadBindingManager = resolveThreadBindingSpawnPolicy({
		cfg,
		channel: "telegram",
		accountId: account.accountId,
		kind: "subagent"
	}).enabled ? createTelegramThreadBindingManager({
		accountId: account.accountId,
		idleTimeoutMs: resolveThreadBindingIdleTimeoutMsForChannel({
			cfg,
			channel: "telegram",
			accountId: account.accountId
		}),
		maxAgeMs: resolveThreadBindingMaxAgeMsForChannel({
			cfg,
			channel: "telegram",
			accountId: account.accountId
		})
	}) : null;
	const telegramCfg = account.config;
	const telegramTransport = opts.telegramTransport ?? resolveTelegramTransport(opts.proxyFetch, { network: telegramCfg.network });
	const shouldProvideFetch = Boolean(telegramTransport.fetch);
	const fetchForClient = telegramTransport.fetch;
	let finalFetch = shouldProvideFetch ? fetchForClient : void 0;
	if (finalFetch || opts.fetchAbortSignal) {
		const callFetch = finalFetch ?? globalThis.fetch;
		finalFetch = ((input, init) => {
			const controller = new AbortController();
			const abortWith = (signal) => controller.abort(signal.reason);
			const shutdownSignal = opts.fetchAbortSignal;
			const onShutdown = () => abortWith(shutdownSignal);
			const method = extractTelegramApiMethod(input);
			const requestTimeoutMs = method === "getupdates" ? TELEGRAM_GET_UPDATES_REQUEST_TIMEOUT_MS : void 0;
			let requestTimeout;
			let onRequestAbort;
			if (shutdownSignal?.aborted) abortWith(shutdownSignal);
			else if (shutdownSignal) shutdownSignal.addEventListener("abort", onShutdown, { once: true });
			if (init?.signal) if (init.signal.aborted) abortWith(init.signal);
			else {
				onRequestAbort = () => abortWith(init.signal);
				init.signal.addEventListener("abort", onRequestAbort);
			}
			if (requestTimeoutMs) {
				requestTimeout = setTimeout(() => {
					controller.abort(/* @__PURE__ */ new Error(`Telegram ${method} timed out after ${requestTimeoutMs}ms`));
				}, requestTimeoutMs);
				requestTimeout.unref?.();
			}
			return callFetch(input, {
				...init,
				signal: controller.signal
			}).finally(() => {
				if (requestTimeout) clearTimeout(requestTimeout);
				shutdownSignal?.removeEventListener("abort", onShutdown);
				if (init?.signal && onRequestAbort) init.signal.removeEventListener("abort", onRequestAbort);
			});
		});
	}
	if (finalFetch) {
		const baseFetch = finalFetch;
		finalFetch = ((input, init) => {
			return Promise.resolve(baseFetch(input, init)).catch((err) => {
				try {
					tagTelegramNetworkError(err, {
						method: extractTelegramApiMethod(input),
						url: readRequestUrl(input)
					});
				} catch {}
				throw err;
			});
		});
	}
	const timeoutSeconds = typeof telegramCfg?.timeoutSeconds === "number" && Number.isFinite(telegramCfg.timeoutSeconds) ? Math.max(1, Math.floor(telegramCfg.timeoutSeconds)) : void 0;
	const apiRoot = telegramCfg.apiRoot?.trim() || void 0;
	const client = finalFetch || timeoutSeconds || apiRoot ? {
		...finalFetch ? { fetch: finalFetch } : {},
		...timeoutSeconds ? { timeoutSeconds } : {},
		...apiRoot ? { apiRoot } : {}
	} : void 0;
	const bot = new botRuntime.Bot(opts.token, client ? { client } : void 0);
	bot.api.config.use(botRuntime.apiThrottler());
	bot.catch((err) => {
		runtime.error?.(danger(`telegram bot error: ${formatUncaughtError(err)}`));
	});
	const recentUpdates = createTelegramUpdateDedupe();
	const initialUpdateId = typeof opts.updateOffset?.lastUpdateId === "number" ? opts.updateOffset.lastUpdateId : null;
	const pendingUpdateIds = /* @__PURE__ */ new Set();
	let highestCompletedUpdateId = initialUpdateId;
	let highestPersistedUpdateId = initialUpdateId;
	const maybePersistSafeWatermark = () => {
		if (typeof opts.updateOffset?.onUpdateId !== "function") return;
		if (highestCompletedUpdateId === null) return;
		let safe = highestCompletedUpdateId;
		if (pendingUpdateIds.size > 0) {
			let minPending = null;
			for (const id of pendingUpdateIds) if (minPending === null || id < minPending) minPending = id;
			if (minPending !== null) safe = Math.min(safe, minPending - 1);
		}
		if (highestPersistedUpdateId !== null && safe <= highestPersistedUpdateId) return;
		highestPersistedUpdateId = safe;
		opts.updateOffset.onUpdateId(safe);
	};
	const shouldSkipUpdate = (ctx) => {
		const updateId = resolveTelegramUpdateId(ctx);
		const skipCutoff = highestPersistedUpdateId ?? initialUpdateId;
		if (typeof updateId === "number" && skipCutoff !== null && updateId <= skipCutoff) return true;
		const key = buildTelegramUpdateKey(ctx);
		const skipped = recentUpdates.check(key);
		if (skipped && key && shouldLogVerbose()) logVerbose(`telegram dedupe: skipped ${key}`);
		return skipped;
	};
	bot.use(async (ctx, next) => {
		const updateId = resolveTelegramUpdateId(ctx);
		if (typeof updateId === "number") pendingUpdateIds.add(updateId);
		try {
			await next();
		} finally {
			if (typeof updateId === "number") {
				pendingUpdateIds.delete(updateId);
				if (highestCompletedUpdateId === null || updateId > highestCompletedUpdateId) highestCompletedUpdateId = updateId;
				maybePersistSafeWatermark();
			}
		}
	});
	bot.use(botRuntime.sequentialize(getTelegramSequentialKey));
	const rawUpdateLogger = createSubsystemLogger("gateway/channels/telegram/raw-update");
	const MAX_RAW_UPDATE_CHARS = 8e3;
	const MAX_RAW_UPDATE_STRING = 500;
	const MAX_RAW_UPDATE_ARRAY = 20;
	const stringifyUpdate = (update) => {
		const seen = /* @__PURE__ */ new WeakSet();
		return JSON.stringify(update ?? null, (key, value) => {
			if (typeof value === "string" && value.length > MAX_RAW_UPDATE_STRING) return `${value.slice(0, MAX_RAW_UPDATE_STRING)}...`;
			if (Array.isArray(value) && value.length > MAX_RAW_UPDATE_ARRAY) return [...value.slice(0, MAX_RAW_UPDATE_ARRAY), `...(${value.length - MAX_RAW_UPDATE_ARRAY} more)`];
			if (value && typeof value === "object") {
				if (seen.has(value)) return "[Circular]";
				seen.add(value);
			}
			return value;
		});
	};
	bot.use(async (ctx, next) => {
		if (shouldLogVerbose()) try {
			const raw = stringifyUpdate(ctx.update);
			const preview = raw.length > MAX_RAW_UPDATE_CHARS ? `${raw.slice(0, MAX_RAW_UPDATE_CHARS)}...` : raw;
			rawUpdateLogger.debug(`telegram update: ${preview}`);
		} catch (err) {
			rawUpdateLogger.debug(`telegram update log failed: ${String(err)}`);
		}
		await next();
	});
	const historyLimit = Math.max(0, telegramCfg.historyLimit ?? cfg.messages?.groupChat?.historyLimit ?? 50);
	const groupHistories = /* @__PURE__ */ new Map();
	const textLimit = resolveTextChunkLimit(cfg, "telegram", account.accountId);
	const dmPolicy = telegramCfg.dmPolicy ?? "pairing";
	const allowFrom = opts.allowFrom ?? telegramCfg.allowFrom;
	const groupAllowFrom = opts.groupAllowFrom ?? telegramCfg.groupAllowFrom ?? telegramCfg.allowFrom ?? allowFrom;
	const replyToMode = opts.replyToMode ?? telegramCfg.replyToMode ?? "off";
	const nativeEnabled = resolveNativeCommandsEnabled({
		providerId: "telegram",
		providerSetting: telegramCfg.commands?.native,
		globalSetting: cfg.commands?.native
	});
	const nativeSkillsEnabled = resolveNativeSkillsEnabled({
		providerId: "telegram",
		providerSetting: telegramCfg.commands?.nativeSkills,
		globalSetting: cfg.commands?.nativeSkills
	});
	const nativeDisabledExplicit = isNativeCommandsExplicitlyDisabled({
		providerSetting: telegramCfg.commands?.native,
		globalSetting: cfg.commands?.native
	});
	const useAccessGroups = cfg.commands?.useAccessGroups !== false;
	const ackReactionScope = cfg.messages?.ackReactionScope ?? "group-mentions";
	const mediaMaxBytes = (opts.mediaMaxMb ?? telegramCfg.mediaMaxMb ?? 100) * 1024 * 1024;
	const logger = getChildLogger({ module: "telegram-auto-reply" });
	const streamMode = resolveTelegramStreamMode(telegramCfg);
	const resolveGroupPolicy = (chatId) => resolveChannelGroupPolicy({
		cfg,
		channel: "telegram",
		accountId: account.accountId,
		groupId: String(chatId)
	});
	const resolveGroupActivation = (params) => {
		const agentId = params.agentId ?? resolveDefaultAgentId(cfg);
		const sessionKey = params.sessionKey ?? `agent:${agentId}:telegram:group:${buildTelegramGroupPeerId(params.chatId, params.messageThreadId)}`;
		const storePath = resolveStorePath(cfg.session?.store, { agentId });
		try {
			const entry = loadSessionStore(storePath)[sessionKey];
			if (entry?.groupActivation === "always") return false;
			if (entry?.groupActivation === "mention") return true;
		} catch (err) {
			logVerbose(`Failed to load session for activation check: ${String(err)}`);
		}
	};
	const resolveGroupRequireMention = (chatId) => resolveChannelGroupRequireMention({
		cfg,
		channel: "telegram",
		accountId: account.accountId,
		groupId: String(chatId),
		requireMentionOverride: opts.requireMention,
		overrideOrder: "after-config"
	});
	const loadFreshTelegramAccountConfig = () => {
		try {
			return resolveTelegramAccount({
				cfg: telegramDeps.loadConfig(),
				accountId: account.accountId
			}).config;
		} catch (error) {
			logVerbose(`telegram: failed to load fresh config for account ${account.accountId}; using startup snapshot: ${String(error)}`);
			return telegramCfg;
		}
	};
	const resolveTelegramGroupConfig = (chatId, messageThreadId) => {
		const freshTelegramCfg = loadFreshTelegramAccountConfig();
		const groups = freshTelegramCfg.groups;
		const direct = freshTelegramCfg.direct;
		const chatIdStr = String(chatId);
		if (!chatIdStr.startsWith("-")) {
			const directConfig = direct?.[chatIdStr] ?? direct?.["*"];
			if (directConfig) return {
				groupConfig: directConfig,
				topicConfig: messageThreadId != null ? directConfig.topics?.[String(messageThreadId)] : void 0
			};
			return {
				groupConfig: void 0,
				topicConfig: void 0
			};
		}
		if (!groups) return {
			groupConfig: void 0,
			topicConfig: void 0
		};
		const groupConfig = groups[chatIdStr] ?? groups["*"];
		return {
			groupConfig,
			topicConfig: messageThreadId != null ? groupConfig?.topics?.[String(messageThreadId)] : void 0
		};
	};
	const processMessage = createTelegramMessageProcessor({
		bot,
		cfg,
		account,
		telegramCfg,
		historyLimit,
		groupHistories,
		dmPolicy,
		allowFrom,
		groupAllowFrom,
		ackReactionScope,
		logger,
		resolveGroupActivation,
		resolveGroupRequireMention,
		resolveTelegramGroupConfig,
		loadFreshConfig: () => telegramDeps.loadConfig(),
		sendChatActionHandler: createTelegramSendChatActionHandler({
			sendChatActionFn: (chatId, action, threadParams) => bot.api.sendChatAction(chatId, action, threadParams),
			logger: (message) => logVerbose(`telegram: ${message}`)
		}),
		runtime,
		replyToMode,
		streamMode,
		textLimit,
		opts,
		telegramDeps
	});
	registerTelegramNativeCommands({
		bot,
		cfg,
		runtime,
		accountId: account.accountId,
		telegramCfg,
		allowFrom,
		groupAllowFrom,
		replyToMode,
		textLimit,
		useAccessGroups,
		nativeEnabled,
		nativeSkillsEnabled,
		nativeDisabledExplicit,
		resolveGroupPolicy,
		resolveTelegramGroupConfig,
		shouldSkipUpdate,
		opts,
		telegramDeps
	});
	registerTelegramHandlers({
		cfg,
		accountId: account.accountId,
		bot,
		opts,
		telegramTransport,
		runtime,
		mediaMaxBytes,
		telegramCfg,
		allowFrom,
		groupAllowFrom,
		resolveGroupPolicy,
		resolveTelegramGroupConfig,
		shouldSkipUpdate,
		processMessage,
		logger,
		telegramDeps
	});
	const originalStop = bot.stop.bind(bot);
	bot.stop = ((...args) => {
		threadBindingManager?.stop();
		return originalStop(...args);
	});
	return bot;
}
//#endregion
//#region extensions/telegram/src/polling-session.ts
const TELEGRAM_POLL_RESTART_POLICY = {
	initialMs: 2e3,
	maxMs: 3e4,
	factor: 1.8,
	jitter: .25
};
const POLL_STALL_THRESHOLD_MS = 9e4;
const POLL_WATCHDOG_INTERVAL_MS = 3e4;
const POLL_STOP_GRACE_MS = 15e3;
const waitForGracefulStop = async (stop) => {
	let timer;
	try {
		await Promise.race([stop(), new Promise((resolve) => {
			timer = setTimeout(resolve, POLL_STOP_GRACE_MS);
			timer.unref?.();
		})]);
	} finally {
		if (timer) clearTimeout(timer);
	}
};
var TelegramPollingSession = class {
	#restartAttempts = 0;
	#webhookCleared = false;
	#forceRestarted = false;
	#activeRunner;
	#activeFetchAbort;
	constructor(opts) {
		this.opts = opts;
	}
	get activeRunner() {
		return this.#activeRunner;
	}
	markForceRestarted() {
		this.#forceRestarted = true;
	}
	abortActiveFetch() {
		this.#activeFetchAbort?.abort();
	}
	async runUntilAbort() {
		while (!this.opts.abortSignal?.aborted) {
			const bot = await this.#createPollingBot();
			if (!bot) continue;
			const cleanupState = await this.#ensureWebhookCleanup(bot);
			if (cleanupState === "retry") continue;
			if (cleanupState === "exit") return;
			if (await this.#runPollingCycle(bot) === "exit") return;
		}
	}
	async #waitBeforeRestart(buildLine) {
		this.#restartAttempts += 1;
		const delayMs = computeBackoff(TELEGRAM_POLL_RESTART_POLICY, this.#restartAttempts);
		const delay = formatDurationPrecise(delayMs);
		this.opts.log(buildLine(delay));
		try {
			await sleepWithAbort(delayMs, this.opts.abortSignal);
		} catch (sleepErr) {
			if (this.opts.abortSignal?.aborted) return false;
			throw sleepErr;
		}
		return true;
	}
	async #waitBeforeRetryOnRecoverableSetupError(err, logPrefix) {
		if (this.opts.abortSignal?.aborted) return false;
		if (!isRecoverableTelegramNetworkError(err, { context: "unknown" })) throw err;
		return this.#waitBeforeRestart((delay) => `${logPrefix}: ${formatErrorMessage(err)}; retrying in ${delay}.`);
	}
	async #createPollingBot() {
		const fetchAbortController = new AbortController();
		this.#activeFetchAbort = fetchAbortController;
		try {
			return createTelegramBot({
				token: this.opts.token,
				runtime: this.opts.runtime,
				proxyFetch: this.opts.proxyFetch,
				config: this.opts.config,
				accountId: this.opts.accountId,
				fetchAbortSignal: fetchAbortController.signal,
				updateOffset: {
					lastUpdateId: this.opts.getLastUpdateId(),
					onUpdateId: this.opts.persistUpdateId
				},
				telegramTransport: this.opts.telegramTransport
			});
		} catch (err) {
			await this.#waitBeforeRetryOnRecoverableSetupError(err, "Telegram setup network error");
			if (this.#activeFetchAbort === fetchAbortController) this.#activeFetchAbort = void 0;
			return;
		}
	}
	async #ensureWebhookCleanup(bot) {
		if (this.#webhookCleared) return "ready";
		try {
			await withTelegramApiErrorLogging({
				operation: "deleteWebhook",
				runtime: this.opts.runtime,
				fn: () => bot.api.deleteWebhook({ drop_pending_updates: false })
			});
			this.#webhookCleared = true;
			return "ready";
		} catch (err) {
			return await this.#waitBeforeRetryOnRecoverableSetupError(err, "Telegram webhook cleanup failed") ? "retry" : "exit";
		}
	}
	async #confirmPersistedOffset(bot) {
		const lastUpdateId = this.opts.getLastUpdateId();
		if (lastUpdateId === null || lastUpdateId >= Number.MAX_SAFE_INTEGER) return;
		try {
			await bot.api.getUpdates({
				offset: lastUpdateId + 1,
				limit: 1,
				timeout: 0
			});
		} catch {}
	}
	async #runPollingCycle(bot) {
		await this.#confirmPersistedOffset(bot);
		let lastGetUpdatesAt = Date.now();
		bot.api.config.use((prev, method, payload, signal) => {
			if (method === "getUpdates") lastGetUpdatesAt = Date.now();
			return prev(method, payload, signal);
		});
		const runner = (0, import_out.run)(bot, this.opts.runnerOptions);
		this.#activeRunner = runner;
		const fetchAbortController = this.#activeFetchAbort;
		let stopPromise;
		let stalledRestart = false;
		let forceCycleTimer;
		let forceCycleResolve;
		const forceCyclePromise = new Promise((resolve) => {
			forceCycleResolve = resolve;
		});
		const stopRunner = () => {
			fetchAbortController?.abort();
			stopPromise ??= Promise.resolve(runner.stop()).then(() => void 0).catch(() => {});
			return stopPromise;
		};
		const stopBot = () => {
			return Promise.resolve(bot.stop()).then(() => void 0).catch(() => {});
		};
		const stopOnAbort = () => {
			if (this.opts.abortSignal?.aborted) stopRunner();
		};
		const watchdog = setInterval(() => {
			if (this.opts.abortSignal?.aborted) return;
			const elapsed = Date.now() - lastGetUpdatesAt;
			if (elapsed > POLL_STALL_THRESHOLD_MS && runner.isRunning()) {
				stalledRestart = true;
				this.opts.log(`[telegram] Polling stall detected (no getUpdates for ${formatDurationPrecise(elapsed)}); forcing restart.`);
				stopRunner();
				stopBot();
				if (!forceCycleTimer) forceCycleTimer = setTimeout(() => {
					if (this.opts.abortSignal?.aborted) return;
					this.opts.log(`[telegram] Polling runner stop timed out after ${formatDurationPrecise(POLL_STOP_GRACE_MS)}; forcing restart cycle.`);
					forceCycleResolve?.();
				}, POLL_STOP_GRACE_MS);
			}
		}, POLL_WATCHDOG_INTERVAL_MS);
		this.opts.abortSignal?.addEventListener("abort", stopOnAbort, { once: true });
		try {
			await Promise.race([runner.task(), forceCyclePromise]);
			if (this.opts.abortSignal?.aborted) return "exit";
			const reason = stalledRestart ? "polling stall detected" : this.#forceRestarted ? "unhandled network error" : "runner stopped (maxRetryTime exceeded or graceful stop)";
			this.#forceRestarted = false;
			return await this.#waitBeforeRestart((delay) => `Telegram polling runner stopped (${reason}); restarting in ${delay}.`) ? "continue" : "exit";
		} catch (err) {
			this.#forceRestarted = false;
			if (this.opts.abortSignal?.aborted) throw err;
			const isConflict = isGetUpdatesConflict(err);
			if (isConflict) this.#webhookCleared = false;
			const isRecoverable = isRecoverableTelegramNetworkError(err, { context: "polling" });
			if (!isConflict && !isRecoverable) throw err;
			const reason = isConflict ? "getUpdates conflict" : "network error";
			const errMsg = formatErrorMessage(err);
			return await this.#waitBeforeRestart((delay) => `Telegram ${reason}: ${errMsg}; retrying in ${delay}.`) ? "continue" : "exit";
		} finally {
			clearInterval(watchdog);
			if (forceCycleTimer) clearTimeout(forceCycleTimer);
			this.opts.abortSignal?.removeEventListener("abort", stopOnAbort);
			await waitForGracefulStop(stopRunner);
			await waitForGracefulStop(stopBot);
			this.#activeRunner = void 0;
			if (this.#activeFetchAbort === fetchAbortController) this.#activeFetchAbort = void 0;
		}
	}
};
const isGetUpdatesConflict = (err) => {
	if (!err || typeof err !== "object") return false;
	const typed = err;
	if ((typed.error_code ?? typed.errorCode) !== 409) return false;
	return [
		typed.method,
		typed.description,
		typed.message
	].filter((value) => typeof value === "string").join(" ").toLowerCase().includes("getupdates");
};
//#endregion
//#region extensions/telegram/src/webhook.ts
const TELEGRAM_WEBHOOK_MAX_BODY_BYTES = 1024 * 1024;
const TELEGRAM_WEBHOOK_BODY_TIMEOUT_MS = 3e4;
const TELEGRAM_WEBHOOK_CALLBACK_TIMEOUT_MS = 1e4;
async function listenHttpServer(params) {
	await new Promise((resolve, reject) => {
		const onError = (err) => {
			params.server.off("error", onError);
			reject(err);
		};
		params.server.once("error", onError);
		params.server.listen(params.port, params.host, () => {
			params.server.off("error", onError);
			resolve();
		});
	});
}
function resolveWebhookPublicUrl(params) {
	if (params.configuredPublicUrl) return params.configuredPublicUrl;
	const address = params.server.address();
	if (address && typeof address !== "string") return `http://${params.host === "0.0.0.0" || address.address === "0.0.0.0" || address.address === "::" ? "localhost" : address.address}:${address.port}${params.path}`;
	return `http://${params.host === "0.0.0.0" ? "localhost" : params.host}:${params.port}${params.path}`;
}
async function initializeTelegramWebhookBot(params) {
	const initSignal = params.abortSignal;
	await withTelegramApiErrorLogging({
		operation: "getMe",
		runtime: params.runtime,
		fn: () => params.bot.init(initSignal)
	});
}
function resolveSingleHeaderValue(header) {
	if (typeof header === "string") return header;
	if (Array.isArray(header) && header.length === 1) return header[0];
}
function hasValidTelegramWebhookSecret(secretHeader, expectedSecret) {
	if (typeof secretHeader !== "string") return false;
	const actual = Buffer.from(secretHeader, "utf-8");
	const expected = Buffer.from(expectedSecret, "utf-8");
	return actual.length === expected.length && timingSafeEqual(actual, expected);
}
async function startTelegramWebhook(opts) {
	const path = opts.path ?? "/telegram-webhook";
	const healthPath = opts.healthPath ?? "/healthz";
	const port = opts.port ?? 8787;
	const host = opts.host ?? "127.0.0.1";
	const secret = typeof opts.secret === "string" ? opts.secret.trim() : "";
	if (!secret) throw new Error("Telegram webhook mode requires a non-empty secret token. Set channels.telegram.webhookSecret in your config.");
	const runtime = opts.runtime ?? defaultRuntime;
	const diagnosticsEnabled = isDiagnosticsEnabled(opts.config);
	const bot = createTelegramBot({
		token: opts.token,
		runtime,
		proxyFetch: opts.fetch,
		config: opts.config,
		accountId: opts.accountId
	});
	await initializeTelegramWebhookBot({
		bot,
		runtime,
		abortSignal: opts.abortSignal
	});
	const handler = (0, import_out$1.webhookCallback)(bot, "callback", {
		secretToken: secret,
		onTimeout: "return",
		timeoutMilliseconds: TELEGRAM_WEBHOOK_CALLBACK_TIMEOUT_MS
	});
	if (diagnosticsEnabled) startDiagnosticHeartbeat(opts.config);
	const server = createServer((req, res) => {
		const respondText = (statusCode, text = "") => {
			if (res.headersSent || res.writableEnded) return;
			res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
			res.end(text);
		};
		if (req.url === healthPath) {
			res.writeHead(200);
			res.end("ok");
			return;
		}
		if (req.url !== path || req.method !== "POST") {
			res.writeHead(404);
			res.end();
			return;
		}
		const startTime = Date.now();
		if (diagnosticsEnabled) logWebhookReceived({
			channel: "telegram",
			updateType: "telegram-post"
		});
		const secretHeader = resolveSingleHeaderValue(req.headers["x-telegram-bot-api-secret-token"]);
		if (!hasValidTelegramWebhookSecret(secretHeader, secret)) {
			res.shouldKeepAlive = false;
			res.setHeader("Connection", "close");
			respondText(401, "unauthorized");
			return;
		}
		(async () => {
			const body = await readJsonBodyWithLimit(req, {
				maxBytes: TELEGRAM_WEBHOOK_MAX_BODY_BYTES,
				timeoutMs: TELEGRAM_WEBHOOK_BODY_TIMEOUT_MS,
				emptyObjectOnEmpty: false
			});
			if (!body.ok) {
				if (body.code === "PAYLOAD_TOO_LARGE") {
					respondText(413, body.error);
					return;
				}
				if (body.code === "REQUEST_BODY_TIMEOUT") {
					respondText(408, body.error);
					return;
				}
				if (body.code === "CONNECTION_CLOSED") {
					respondText(400, body.error);
					return;
				}
				respondText(400, body.error);
				return;
			}
			let replied = false;
			const reply = async (json) => {
				if (replied) return;
				replied = true;
				if (res.headersSent || res.writableEnded) return;
				res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
				res.end(json);
			};
			const unauthorized = async () => {
				if (replied) return;
				replied = true;
				respondText(401, "unauthorized");
			};
			await handler(body.value, reply, secretHeader, unauthorized);
			if (!replied) respondText(200);
			if (diagnosticsEnabled) logWebhookProcessed({
				channel: "telegram",
				updateType: "telegram-post",
				durationMs: Date.now() - startTime
			});
		})().catch((err) => {
			const errMsg = formatErrorMessage(err);
			if (diagnosticsEnabled) logWebhookError({
				channel: "telegram",
				updateType: "telegram-post",
				error: errMsg
			});
			runtime.log?.(`webhook handler failed: ${errMsg}`);
			respondText(500);
		});
	});
	await listenHttpServer({
		server,
		port,
		host
	});
	const boundAddress = server.address();
	const boundPort = boundAddress && typeof boundAddress !== "string" ? boundAddress.port : port;
	const publicUrl = resolveWebhookPublicUrl({
		configuredPublicUrl: opts.publicUrl,
		server,
		path,
		host,
		port
	});
	try {
		await withTelegramApiErrorLogging({
			operation: "setWebhook",
			runtime,
			fn: () => bot.api.setWebhook(publicUrl, {
				secret_token: secret,
				allowed_updates: resolveTelegramAllowedUpdates(),
				certificate: opts.webhookCertPath ? new import_out$1.InputFile(opts.webhookCertPath) : void 0
			})
		});
	} catch (err) {
		server.close();
		bot.stop();
		if (diagnosticsEnabled) stopDiagnosticHeartbeat();
		throw err;
	}
	runtime.log?.(`webhook local listener on http://${host}:${boundPort}${path}`);
	runtime.log?.(`webhook advertised to telegram on ${publicUrl}`);
	let shutDown = false;
	const shutdown = () => {
		if (shutDown) return;
		shutDown = true;
		withTelegramApiErrorLogging({
			operation: "deleteWebhook",
			runtime,
			fn: () => bot.api.deleteWebhook({ drop_pending_updates: false })
		}).catch(() => {});
		server.close();
		bot.stop();
		if (diagnosticsEnabled) stopDiagnosticHeartbeat();
	};
	if (opts.abortSignal) opts.abortSignal.addEventListener("abort", shutdown, { once: true });
	return {
		server,
		bot,
		stop: shutdown
	};
}
//#endregion
//#region extensions/telegram/src/monitor.ts
function createTelegramRunnerOptions(cfg) {
	return {
		sink: { concurrency: resolveAgentMaxConcurrent(cfg) },
		runner: {
			fetch: {
				timeout: 30,
				allowed_updates: resolveTelegramAllowedUpdates()
			},
			silent: true,
			maxRetryTime: 3600 * 1e3,
			retryInterval: "exponential"
		}
	};
}
function normalizePersistedUpdateId(value) {
	if (value === null) return null;
	if (!Number.isSafeInteger(value) || value < 0) return null;
	return value;
}
/** Check if error is a Grammy HttpError (used to scope unhandled rejection handling) */
const isGrammyHttpError = (err) => {
	if (!err || typeof err !== "object") return false;
	return err.name === "HttpError";
};
async function monitorTelegramProvider(opts = {}) {
	const log = opts.runtime?.error ?? console.error;
	let pollingSession;
	let execApprovalsHandler;
	const unregisterHandler = registerUnhandledRejectionHandler((err) => {
		const isNetworkError = isRecoverableTelegramNetworkError(err, { context: "polling" });
		const isTelegramPollingError = isTelegramPollingNetworkError(err);
		if (isGrammyHttpError(err) && isNetworkError && isTelegramPollingError) {
			log(`[telegram] Suppressed network error: ${formatErrorMessage(err)}`);
			return true;
		}
		const activeRunner = pollingSession?.activeRunner;
		if (isNetworkError && isTelegramPollingError && activeRunner && activeRunner.isRunning()) {
			pollingSession?.markForceRestarted();
			pollingSession?.abortActiveFetch();
			activeRunner.stop().catch(() => {});
			log(`[telegram] Restarting polling after unhandled network error: ${formatErrorMessage(err)}`);
			return true;
		}
		return false;
	});
	try {
		const cfg = opts.config ?? loadConfig();
		const account = resolveTelegramAccount({
			cfg,
			accountId: opts.accountId
		});
		const token = opts.token?.trim() || account.token;
		if (!token) throw new Error(`Telegram bot token missing for account "${account.accountId}" (set channels.telegram.accounts.${account.accountId}.botToken/tokenFile or TELEGRAM_BOT_TOKEN for default).`);
		const proxyFetch = opts.proxyFetch ?? (account.config.proxy ? makeProxyFetch(account.config.proxy) : void 0);
		execApprovalsHandler = new TelegramExecApprovalHandler({
			token,
			accountId: account.accountId,
			cfg,
			runtime: opts.runtime
		});
		await execApprovalsHandler.start();
		const persistedOffsetRaw = await readTelegramUpdateOffset({
			accountId: account.accountId,
			botToken: token
		});
		let lastUpdateId = normalizePersistedUpdateId(persistedOffsetRaw);
		if (persistedOffsetRaw !== null && lastUpdateId === null) log(`[telegram] Ignoring invalid persisted update offset (${String(persistedOffsetRaw)}); starting without offset confirmation.`);
		const persistUpdateId = async (updateId) => {
			const normalizedUpdateId = normalizePersistedUpdateId(updateId);
			if (normalizedUpdateId === null) {
				log(`[telegram] Ignoring invalid update_id value: ${String(updateId)}`);
				return;
			}
			if (lastUpdateId !== null && normalizedUpdateId <= lastUpdateId) return;
			lastUpdateId = normalizedUpdateId;
			try {
				await writeTelegramUpdateOffset({
					accountId: account.accountId,
					updateId: normalizedUpdateId,
					botToken: token
				});
			} catch (err) {
				(opts.runtime?.error ?? console.error)(`telegram: failed to persist update offset: ${String(err)}`);
			}
		};
		if (opts.useWebhook) {
			await startTelegramWebhook({
				token,
				accountId: account.accountId,
				config: cfg,
				path: opts.webhookPath,
				port: opts.webhookPort,
				secret: opts.webhookSecret ?? account.config.webhookSecret,
				host: opts.webhookHost ?? account.config.webhookHost,
				runtime: opts.runtime,
				fetch: proxyFetch,
				abortSignal: opts.abortSignal,
				publicUrl: opts.webhookUrl,
				webhookCertPath: opts.webhookCertPath
			});
			await waitForAbortSignal(opts.abortSignal);
			return;
		}
		const telegramTransport = resolveTelegramTransport(proxyFetch, { network: account.config.network });
		pollingSession = new TelegramPollingSession({
			token,
			config: cfg,
			accountId: account.accountId,
			runtime: opts.runtime,
			proxyFetch,
			abortSignal: opts.abortSignal,
			runnerOptions: createTelegramRunnerOptions(cfg),
			getLastUpdateId: () => lastUpdateId,
			persistUpdateId,
			log,
			telegramTransport
		});
		await pollingSession.runUntilAbort();
	} finally {
		await execApprovalsHandler?.stop().catch(() => {});
		unregisterHandler();
	}
}
//#endregion
//#region extensions/telegram/src/probe.ts
const probeFetcherCache = /* @__PURE__ */ new Map();
const MAX_PROBE_FETCHER_CACHE_SIZE = 64;
function resolveProbeOptions(proxyOrOptions) {
	if (!proxyOrOptions) return;
	if (typeof proxyOrOptions === "string") return { proxyUrl: proxyOrOptions };
	return proxyOrOptions;
}
function shouldUseProbeFetcherCache() {
	return !process.env.VITEST && true;
}
function buildProbeFetcherCacheKey(token, options) {
	const cacheIdentity = options?.accountId?.trim() || token;
	const cacheIdentityKind = options?.accountId?.trim() ? "account" : "token";
	const proxyKey = options?.proxyUrl?.trim() ?? "";
	const autoSelectFamily = options?.network?.autoSelectFamily;
	return `${cacheIdentityKind}:${cacheIdentity}::${proxyKey}::${typeof autoSelectFamily === "boolean" ? String(autoSelectFamily) : "default"}::${options?.network?.dnsResultOrder ?? "default"}::${options?.apiRoot?.trim() ?? ""}`;
}
function setCachedProbeFetcher(cacheKey, fetcher) {
	probeFetcherCache.set(cacheKey, fetcher);
	if (probeFetcherCache.size > MAX_PROBE_FETCHER_CACHE_SIZE) {
		const oldestKey = probeFetcherCache.keys().next().value;
		if (oldestKey !== void 0) probeFetcherCache.delete(oldestKey);
	}
	return fetcher;
}
function resolveProbeFetcher(token, options) {
	const cacheKey = shouldUseProbeFetcherCache() ? buildProbeFetcherCacheKey(token, options) : null;
	if (cacheKey) {
		const cachedFetcher = probeFetcherCache.get(cacheKey);
		if (cachedFetcher) return cachedFetcher;
	}
	const proxyUrl = options?.proxyUrl?.trim();
	const resolved = resolveTelegramFetch(proxyUrl ? makeProxyFetch(proxyUrl) : void 0, { network: options?.network });
	if (cacheKey) return setCachedProbeFetcher(cacheKey, resolved);
	return resolved;
}
async function probeTelegram(token, timeoutMs, proxyOrOptions) {
	const started = Date.now();
	const timeoutBudgetMs = Math.max(1, Math.floor(timeoutMs));
	const deadlineMs = started + timeoutBudgetMs;
	const options = resolveProbeOptions(proxyOrOptions);
	const fetcher = resolveProbeFetcher(token, options);
	const base = `${resolveTelegramApiBase(options?.apiRoot)}/bot${token}`;
	const retryDelayMs = Math.max(50, Math.min(1e3, Math.floor(timeoutBudgetMs / 5)));
	const resolveRemainingBudgetMs = () => Math.max(0, deadlineMs - Date.now());
	const result = {
		ok: false,
		status: null,
		error: null,
		elapsedMs: 0
	};
	try {
		let meRes = null;
		let fetchError = null;
		for (let i = 0; i < 3; i++) {
			const remainingBudgetMs = resolveRemainingBudgetMs();
			if (remainingBudgetMs <= 0) break;
			try {
				meRes = await fetchWithTimeout(`${base}/getMe`, {}, Math.max(1, Math.min(timeoutBudgetMs, remainingBudgetMs)), fetcher);
				break;
			} catch (err) {
				fetchError = err;
				if (i < 2) {
					const remainingAfterAttemptMs = resolveRemainingBudgetMs();
					if (remainingAfterAttemptMs <= 0) break;
					const delayMs = Math.min(retryDelayMs, remainingAfterAttemptMs);
					if (delayMs > 0) await new Promise((resolve) => setTimeout(resolve, delayMs));
				}
			}
		}
		if (!meRes) throw fetchError ?? /* @__PURE__ */ new Error(`probe timed out after ${timeoutBudgetMs}ms`);
		const meJson = await meRes.json();
		if (!meRes.ok || !meJson?.ok) {
			result.status = meRes.status;
			result.error = meJson?.description ?? `getMe failed (${meRes.status})`;
			return {
				...result,
				elapsedMs: Date.now() - started
			};
		}
		result.bot = {
			id: meJson.result?.id ?? null,
			username: meJson.result?.username ?? null,
			canJoinGroups: typeof meJson.result?.can_join_groups === "boolean" ? meJson.result?.can_join_groups : null,
			canReadAllGroupMessages: typeof meJson.result?.can_read_all_group_messages === "boolean" ? meJson.result?.can_read_all_group_messages : null,
			supportsInlineQueries: typeof meJson.result?.supports_inline_queries === "boolean" ? meJson.result?.supports_inline_queries : null
		};
		try {
			const webhookRemainingBudgetMs = resolveRemainingBudgetMs();
			if (webhookRemainingBudgetMs > 0) {
				const webhookRes = await fetchWithTimeout(`${base}/getWebhookInfo`, {}, Math.max(1, Math.min(timeoutBudgetMs, webhookRemainingBudgetMs)), fetcher);
				const webhookJson = await webhookRes.json();
				if (webhookRes.ok && webhookJson?.ok) result.webhook = {
					url: webhookJson.result?.url ?? null,
					hasCustomCert: webhookJson.result?.has_custom_certificate ?? null
				};
			}
		} catch {}
		result.ok = true;
		result.status = null;
		result.error = null;
		result.elapsedMs = Date.now() - started;
		return result;
	} catch (err) {
		return {
			...result,
			status: err instanceof Response ? err.status : result.status,
			error: err instanceof Error ? err.message : String(err),
			elapsedMs: Date.now() - started
		};
	}
}
//#endregion
export { buildTelegramExecApprovalButtons as a, setTelegramThreadBindingMaxAgeBySessionKey as i, monitorTelegramProvider as n, telegramMessageActions as o, setTelegramThreadBindingIdleTimeoutBySessionKey as r, probeTelegram as t };
