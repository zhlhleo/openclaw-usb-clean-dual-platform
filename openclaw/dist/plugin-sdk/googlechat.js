import "../logger-CoEtkjhn.js";
import "../paths-GHJ97ebE.js";
import "../tmp-openclaw-dir-idKIOMmb.js";
import "../theme-CdOoMzRk.js";
import "../globals-41sdSaKv.js";
import "../subsystem-VzQeL-96.js";
import "../ansi-BEJF8NKS.js";
import "../utils-seFh26xW.js";
import { t as formatDocsLink } from "../links-kyhxxZ1i.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../account-id-BRjWLAzU.js";
import "../boundary-path-Dm0QJ7-y.js";
import "../boundary-file-read-BGs2p0f_.js";
import "../logger-DtlnPe_E.js";
import "../exec-BnXF7JCz.js";
import "../workspace-DFURCHD1.js";
import "../agent-scope-D8nGiwMS.js";
import { o as isSecretRef } from "../types.secrets-DKOIsGys.js";
import { r as GoogleChatConfigSchema } from "../zod-schema.providers-core-CAJFPAb3.js";
import { r as getChatChannelMeta } from "../registry-BYdGgYCt.js";
import "../ip-CndEBNxP.js";
import "../zod-schema.agent-runtime-BLp4Fcyb.js";
import "../zod-schema.core-DICsKVAU.js";
import "../file-lock-DCUu-l3H.js";
import "../runtime-C8dQugND.js";
import "../registry-BjRjosRJ.js";
import "../plugins-Cr3w-NCx.js";
import "../identity-BPWC1ZKG.js";
import { t as createAccountListHelpers } from "../account-helpers-Bte7QgPf.js";
import "../http-registry-D6hBcu9U.js";
import { i as createActionGate, l as readNumberParam, p as readStringParam, s as jsonResult, u as readReactionParams } from "../common-8DMx6JsK.js";
import "../image-ops-CMWbh6Ue.js";
import "../path-alias-guards-Pxk2Zypg.js";
import "../mime-CsQSbndd.js";
import "../ssrf-CrYPbrLn.js";
import { n as fetchWithSsrFGuard } from "../fetch-guard-dWFaYrKn.js";
import "../typing-CEvn35fL.js";
import { t as emptyPluginConfigSchema } from "../config-schema-B-w7pwsi.js";
import { n as deleteAccountFromConfigSection, r as setAccountEnabledInConfigSection } from "../config-helpers-De7ZwA0q.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy, t as GROUP_POLICY_BLOCKED_LABEL } from "../runtime-group-policy-Dj5ka44z.js";
import { n as formatPairingApproveHint } from "../helpers-BcTpR5CJ.js";
import { n as createChannelPairingController } from "../channel-pairing-u9JP53wD.js";
import { r as buildChannelConfigSchema } from "../config-schema-xeZI-QE_.js";
import { a as migrateBaseNameToDefaultAccount, n as applySetupAccountConfigPatch, t as applyAccountNameToChannelSection } from "../setup-helpers-CqDC0H8Y.js";
import { a as resolveSenderScopedGroupPolicy, t as evaluateGroupRouteAccessForPolicy } from "../group-access-CjDGDFY8.js";
import "../pairing-store-CCji1-jE.js";
import "../json-store-DKXFzjJC.js";
import { o as resolveDmGroupAccessWithLists } from "../dm-policy-shared-DKpdJGRu.js";
import "../fs-safe-DJuvunYx.js";
import { n as missingTargetError } from "../target-errors-Cr83AOKO.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../pairing-message-CR8PqQ-S.js";
import "../shared-XXixA_ua.js";
import { r as buildComputedAccountStatusSnapshot } from "../status-helpers-MxakceNE.js";
import { n as resolveChannelGroupRequireMention } from "../group-policy-DU1bQcz-.js";
import { n as isDangerousNameMatchingEnabled } from "../dangerous-name-matching-Di87V4bj.js";
import { t as resolveChannelMediaMaxBytes } from "../media-limits-8IqNzccn.js";
import "../channel-policy-B95Gcu13.js";
import "../http-body-D-NIzIGK.js";
import { n as resolveMentionGatingWithBypass } from "../mention-gating-DuRqwNav.js";
import { t as createChannelReplyPipeline } from "../channel-reply-pipeline-iqE3vE0x.js";
import "../setup-binary-dR9y6RdL.js";
import "../archive-CaLGrkZ_.js";
import "../signal-cli-install-B8KV8qNP.js";
import { i as listDirectoryGroupEntriesFromMapKeys, o as listDirectoryUserEntriesFromAllowFrom } from "../directory-config-helpers-D4KCRrBr.js";
import { r as runPassiveAccountLifecycle, t as createAccountStatusSink } from "../channel-lifecycle-BCryCEe0.js";
import { J as splitSetupEntries, K as setTopLevelChannelDmPolicyWithAllowFrom, m as mergeAllowFromEntries, t as addWildcardAllowFrom } from "../setup-wizard-helpers-DLsY_UDN.js";
import "../setup-wizard-proxy-CmLvLRXc.js";
import "../setup-bKzDoFI-.js";
import { t as extractToolSend } from "../tool-send-BTEAgY5f.js";
import { t as createOptionalChannelSetupSurface } from "../channel-setup-nAHpuATg.js";
import "../webhook-memory-guards-DVGG6y9l.js";
import { a as resolveWebhookTargetWithAuthOrReject, c as withResolvedWebhookRequestPipeline, f as beginWebhookRequestPipelineOrReject, h as readJsonWebhookBodyOrReject, n as registerWebhookTargetWithPluginRoute, p as createWebhookInFlightLimiter, s as resolveWebhookTargets } from "../webhook-ingress-B788sHbV.js";
import { n as resolveWebhookPath } from "../webhook-path-DA_QQxLK.js";
import { t as resolveInboundRouteEnvelopeBuilderWithRuntime } from "../inbound-envelope-xVRZPeGK.js";
//#region src/plugin-sdk/googlechat.ts
function resolveGoogleChatGroupRequireMention(params) {
	return resolveChannelGroupRequireMention({
		cfg: params.cfg,
		channel: "googlechat",
		groupId: params.groupId,
		accountId: params.accountId
	});
}
const googlechatSetup = createOptionalChannelSetupSurface({
	channel: "googlechat",
	label: "Google Chat",
	npmSpec: "@openclaw/googlechat",
	docsPath: "/channels/googlechat"
});
const googlechatSetupAdapter = googlechatSetup.setupAdapter;
const googlechatSetupWizard = googlechatSetup.setupWizard;
//#endregion
export { DEFAULT_ACCOUNT_ID, GROUP_POLICY_BLOCKED_LABEL, GoogleChatConfigSchema, PAIRING_APPROVED_MESSAGE, addWildcardAllowFrom, applyAccountNameToChannelSection, applySetupAccountConfigPatch, beginWebhookRequestPipelineOrReject, buildChannelConfigSchema, buildComputedAccountStatusSnapshot, createAccountListHelpers, createAccountStatusSink, createActionGate, createChannelPairingController, createChannelReplyPipeline, createWebhookInFlightLimiter, deleteAccountFromConfigSection, emptyPluginConfigSchema, evaluateGroupRouteAccessForPolicy, extractToolSend, fetchWithSsrFGuard, formatDocsLink, formatPairingApproveHint, getChatChannelMeta, googlechatSetupAdapter, googlechatSetupWizard, isDangerousNameMatchingEnabled, isSecretRef, jsonResult, listDirectoryGroupEntriesFromMapKeys, listDirectoryUserEntriesFromAllowFrom, mergeAllowFromEntries, migrateBaseNameToDefaultAccount, missingTargetError, normalizeAccountId, readJsonWebhookBodyOrReject, readNumberParam, readReactionParams, readStringParam, registerWebhookTargetWithPluginRoute, resolveAllowlistProviderRuntimeGroupPolicy, resolveChannelMediaMaxBytes, resolveDefaultGroupPolicy, resolveDmGroupAccessWithLists, resolveGoogleChatGroupRequireMention, resolveInboundRouteEnvelopeBuilderWithRuntime, resolveMentionGatingWithBypass, resolveSenderScopedGroupPolicy, resolveWebhookPath, resolveWebhookTargetWithAuthOrReject, resolveWebhookTargets, runPassiveAccountLifecycle, setAccountEnabledInConfigSection, setTopLevelChannelDmPolicyWithAllowFrom, splitSetupEntries, warnMissingProviderGroupPolicyFallbackOnce, withResolvedWebhookRequestPipeline };
