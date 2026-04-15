import { l as escapeRegExp } from "./utils-seFh26xW.js";
import { c as normalizeWhatsAppTarget, o as isWhatsAppGroupJid } from "./whatsapp-DhaMCc_1.js";
import { i as createAttachedChannelResultAdapter } from "./channel-send-result-C4cfMY3q.js";
import { n as missingTargetError } from "./target-errors-Cr83AOKO.js";
import { t as resolveOutboundSendDep } from "./send-deps-ha9aYBpd.js";
//#region src/whatsapp/resolve-outbound-target.ts
function resolveWhatsAppOutboundTarget(params) {
	const trimmed = params.to?.trim() ?? "";
	const allowListRaw = (params.allowFrom ?? []).map((entry) => String(entry).trim()).filter(Boolean);
	const hasWildcard = allowListRaw.includes("*");
	const allowList = allowListRaw.filter((entry) => entry !== "*").map((entry) => normalizeWhatsAppTarget(entry)).filter((entry) => Boolean(entry));
	if (trimmed) {
		const normalizedTo = normalizeWhatsAppTarget(trimmed);
		if (!normalizedTo) return {
			ok: false,
			error: missingTargetError("WhatsApp", "<E.164|group JID>")
		};
		if (isWhatsAppGroupJid(normalizedTo)) return {
			ok: true,
			to: normalizedTo
		};
		if (hasWildcard || allowList.length === 0) return {
			ok: true,
			to: normalizedTo
		};
		if (allowList.includes(normalizedTo)) return {
			ok: true,
			to: normalizedTo
		};
		return {
			ok: false,
			error: missingTargetError("WhatsApp", "<E.164|group JID>")
		};
	}
	return {
		ok: false,
		error: missingTargetError("WhatsApp", "<E.164|group JID>")
	};
}
//#endregion
//#region src/channels/plugins/whatsapp-shared.ts
const WHATSAPP_GROUP_INTRO_HINT = "WhatsApp IDs: SenderId is the participant JID (group participant id).";
function resolveWhatsAppGroupIntroHint() {
	return WHATSAPP_GROUP_INTRO_HINT;
}
function resolveWhatsAppMentionStripRegexes(ctx) {
	const selfE164 = (ctx.To ?? "").replace(/^whatsapp:/, "");
	if (!selfE164) return [];
	const escaped = escapeRegExp(selfE164);
	return [new RegExp(escaped, "g"), new RegExp(`@${escaped}`, "g")];
}
function createWhatsAppOutboundBase({ chunker, sendMessageWhatsApp, sendPollWhatsApp, shouldLogVerbose, resolveTarget = ({ to, allowFrom, mode }) => resolveWhatsAppOutboundTarget({
	to,
	allowFrom,
	mode
}), normalizeText = (text) => text ?? "", skipEmptyText = false }) {
	return {
		deliveryMode: "gateway",
		chunker,
		chunkerMode: "text",
		textChunkLimit: 4e3,
		pollMaxOptions: 12,
		resolveTarget,
		...createAttachedChannelResultAdapter({
			channel: "whatsapp",
			sendText: async ({ cfg, to, text, accountId, deps, gifPlayback }) => {
				const normalizedText = normalizeText(text);
				if (skipEmptyText && !normalizedText) return { messageId: "" };
				return await (resolveOutboundSendDep(deps, "whatsapp") ?? sendMessageWhatsApp)(to, normalizedText, {
					verbose: false,
					cfg,
					accountId: accountId ?? void 0,
					gifPlayback
				});
			},
			sendMedia: async ({ cfg, to, text, mediaUrl, mediaLocalRoots, accountId, deps, gifPlayback }) => {
				return await (resolveOutboundSendDep(deps, "whatsapp") ?? sendMessageWhatsApp)(to, normalizeText(text), {
					verbose: false,
					cfg,
					mediaUrl,
					mediaLocalRoots,
					accountId: accountId ?? void 0,
					gifPlayback
				});
			},
			sendPoll: async ({ cfg, to, poll, accountId }) => await sendPollWhatsApp(to, poll, {
				verbose: shouldLogVerbose(),
				accountId: accountId ?? void 0,
				cfg
			})
		})
	};
}
//#endregion
export { resolveWhatsAppOutboundTarget as i, resolveWhatsAppGroupIntroHint as n, resolveWhatsAppMentionStripRegexes as r, createWhatsAppOutboundBase as t };
