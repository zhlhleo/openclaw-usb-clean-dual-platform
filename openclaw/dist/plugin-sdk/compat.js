import "../logger-CoEtkjhn.js";
import "../paths-GHJ97ebE.js";
import "../tmp-openclaw-dir-idKIOMmb.js";
import "../theme-CdOoMzRk.js";
import "../globals-41sdSaKv.js";
import "../subsystem-VzQeL-96.js";
import "../ansi-BEJF8NKS.js";
import "../utils-seFh26xW.js";
import "../boundary-path-Dm0QJ7-y.js";
import "../boundary-file-read-BGs2p0f_.js";
import "../logger-DtlnPe_E.js";
import "../exec-BnXF7JCz.js";
import "../workspace-DFURCHD1.js";
import "../agent-scope-D8nGiwMS.js";
import "../registry-BYdGgYCt.js";
import { o as ToolPolicySchema } from "../zod-schema.agent-runtime-BLp4Fcyb.js";
import { a as DmPolicySchema, c as GroupPolicySchema, m as MarkdownConfigSchema } from "../zod-schema.core-DICsKVAU.js";
import "../file-lock-DCUu-l3H.js";
import "../message-channel-Df2WMfuH.js";
import "../runtime-C8dQugND.js";
import "../registry-BjRjosRJ.js";
import "../plugins-Cr3w-NCx.js";
import { r as onDiagnosticEvent } from "../diagnostic-events-CReGCqoR.js";
import { t as KeyedAsyncQueue } from "../keyed-async-queue-DHrOXfCs.js";
import { t as emptyPluginConfigSchema } from "../config-schema-B-w7pwsi.js";
import { a as createScopedChannelConfigBase, c as createTopLevelChannelConfigBase, d as mapAllowFromEntries, i as createScopedChannelConfigAdapter, n as createHybridChannelConfigBase, o as createScopedDmSecurityResolver, r as createScopedAccountConfigAccessors, s as createTopLevelChannelConfigAdapter, t as createHybridChannelConfigAdapter } from "../channel-config-helpers-DDZb1T_S.js";
import { _ as createOpenProviderConfiguredRouteWarningCollector, a as collectAllowlistProviderRestrictSendersWarnings, c as collectOpenGroupPolicyRouteAllowlistWarnings, d as createAllowlistProviderGroupPolicyWarningCollector, f as createAllowlistProviderOpenWarningCollector, g as createOpenGroupPolicyRestrictSendersWarningCollector, h as createConditionalWarningCollector, i as collectAllowlistProviderGroupPolicyWarnings, l as collectOpenProviderGroupPolicyWarnings, m as createAllowlistProviderRouteAllowlistWarningCollector, n as buildOpenGroupPolicyRestrictSendersWarning, p as createAllowlistProviderRestrictSendersWarningCollector, r as buildOpenGroupPolicyWarning, s as collectOpenGroupPolicyRestrictSendersWarnings, t as buildOpenGroupPolicyConfigureRouteAllowlistWarning, u as composeWarningCollectors, v as createOpenProviderGroupPolicyWarningCollector, y as projectWarningCollector } from "../group-policy-warnings-C1YXwh-E.js";
import { t as buildAccountScopedDmSecurityPolicy } from "../helpers-BcTpR5CJ.js";
import "../whatsapp-DhaMCc_1.js";
import { t as delegateCompactionToRuntime } from "../delegate-Ca49yQcD.js";
import { i as buildNestedDmConfigSchema, n as buildCatchallMultiAccountChannelSchema, r as buildChannelConfigSchema, t as AllowFromListSchema } from "../config-schema-xeZI-QE_.js";
import { n as resolveControlCommandGate } from "../command-gating-REV5M7oz.js";
import "../pairing-store-CCji1-jE.js";
import "../json-store-DKXFzjJC.js";
import { n as readStoreAllowFromForDmPolicy, o as resolveDmGroupAccessWithLists, s as resolveEffectiveAllowFromLists, t as DM_GROUP_ACCESS_REASON } from "../dm-policy-shared-DKpdJGRu.js";
import "../shared-XXixA_ua.js";
import { i as resolveToolsBySender, n as resolveChannelGroupRequireMention, r as resolveChannelGroupToolsPolicy } from "../group-policy-DU1bQcz-.js";
import "../mentions-Ctfn_rwY.js";
import { t as inspectReadOnlyChannelAccount } from "../read-only-account-inspect-BTtFTljM.js";
import "../channel-policy-B95Gcu13.js";
import "../resolve-utils-Bk9z-kYd.js";
import { a as mapAllowlistResolutionInputs, n as formatNormalizedAllowFromEntries, t as formatAllowFromLowercase } from "../allow-from-BlfIMRQi.js";
import { t as createRuntimeDirectoryLiveAdapter } from "../runtime-forwarders-DTlmZE1t.js";
import { a as buildPendingHistoryContextFromMap, c as evictOldHistoryKeys, i as buildHistoryContextFromMap, l as recordPendingHistoryEntry, n as buildHistoryContext, o as clearHistoryEntries, r as buildHistoryContextFromEntries, s as clearHistoryEntriesIfEnabled, t as DEFAULT_GROUP_HISTORY_LIMIT, u as recordPendingHistoryEntryIfEnabled } from "../history-BK1AiOUs.js";
import "../reply-history-iORWNUc8.js";
import { i as nullChannelDirectorySelf, n as createEmptyChannelDirectoryAdapter, r as emptyChannelDirectoryList, t as createChannelDirectoryAdapter } from "../directory-runtime-CQUxqhbU.js";
import { a as listDirectoryGroupEntriesFromMapKeysAndAllowFrom, c as listInspectedDirectoryEntriesFromSources, d as listResolvedDirectoryUserEntriesFromAllowFrom, f as toDirectoryEntries, i as listDirectoryGroupEntriesFromMapKeys, l as listResolvedDirectoryEntriesFromSources, n as collectNormalizedDirectoryIds, o as listDirectoryUserEntriesFromAllowFrom, r as listDirectoryEntriesFromSources, s as listDirectoryUserEntriesFromAllowFromAndMapKeys, t as applyDirectoryQueryAndLimit, u as listResolvedDirectoryGroupEntriesFromMapKeys } from "../directory-config-helpers-D4KCRrBr.js";
import { t as createAccountStatusSink } from "../channel-lifecycle-BCryCEe0.js";
import { t as createPluginRuntimeStore } from "../runtime-store-C6-PWyO6.js";
import "../channel-config-schema-BMwEGpda.js";
import { n as resolveBlueBubblesGroupRequireMention, r as resolveBlueBubblesGroupToolPolicy, t as collectBlueBubblesStatusIssues } from "../bluebubbles-z4SBv4Dh.js";
//#region src/plugin-sdk/compat.ts
if (process.env.VITEST !== "true" && process.env.OPENCLAW_SUPPRESS_PLUGIN_SDK_COMPAT_WARNING !== "1") process.emitWarning("openclaw/plugin-sdk/compat is deprecated for new plugins. Migrate to focused openclaw/plugin-sdk/<subpath> imports. See https://docs.openclaw.ai/plugins/sdk-migration", {
	code: "OPENCLAW_PLUGIN_SDK_COMPAT_DEPRECATED",
	detail: "Bundled plugins must use scoped plugin-sdk subpaths. External plugins may keep compat temporarily while migrating. Migration guide: https://docs.openclaw.ai/plugins/sdk-migration"
});
//#endregion
export { AllowFromListSchema, DEFAULT_GROUP_HISTORY_LIMIT, DM_GROUP_ACCESS_REASON, DmPolicySchema, GroupPolicySchema, KeyedAsyncQueue, MarkdownConfigSchema, ToolPolicySchema, applyDirectoryQueryAndLimit, buildAccountScopedDmSecurityPolicy, buildCatchallMultiAccountChannelSchema, buildChannelConfigSchema, buildHistoryContext, buildHistoryContextFromEntries, buildHistoryContextFromMap, buildNestedDmConfigSchema, buildOpenGroupPolicyConfigureRouteAllowlistWarning, buildOpenGroupPolicyRestrictSendersWarning, buildOpenGroupPolicyWarning, buildPendingHistoryContextFromMap, clearHistoryEntries, clearHistoryEntriesIfEnabled, collectAllowlistProviderGroupPolicyWarnings, collectAllowlistProviderRestrictSendersWarnings, collectBlueBubblesStatusIssues, collectNormalizedDirectoryIds, collectOpenGroupPolicyRestrictSendersWarnings, collectOpenGroupPolicyRouteAllowlistWarnings, collectOpenProviderGroupPolicyWarnings, composeWarningCollectors, createAccountStatusSink, createAllowlistProviderGroupPolicyWarningCollector, createAllowlistProviderOpenWarningCollector, createAllowlistProviderRestrictSendersWarningCollector, createAllowlistProviderRouteAllowlistWarningCollector, createChannelDirectoryAdapter, createConditionalWarningCollector, createEmptyChannelDirectoryAdapter, createHybridChannelConfigAdapter, createHybridChannelConfigBase, createOpenGroupPolicyRestrictSendersWarningCollector, createOpenProviderConfiguredRouteWarningCollector, createOpenProviderGroupPolicyWarningCollector, createPluginRuntimeStore, createRuntimeDirectoryLiveAdapter, createScopedAccountConfigAccessors, createScopedChannelConfigAdapter, createScopedChannelConfigBase, createScopedDmSecurityResolver, createTopLevelChannelConfigAdapter, createTopLevelChannelConfigBase, delegateCompactionToRuntime, emptyChannelDirectoryList, emptyPluginConfigSchema, evictOldHistoryKeys, formatAllowFromLowercase, formatNormalizedAllowFromEntries, inspectReadOnlyChannelAccount, listDirectoryEntriesFromSources, listDirectoryGroupEntriesFromMapKeys, listDirectoryGroupEntriesFromMapKeysAndAllowFrom, listDirectoryUserEntriesFromAllowFrom, listDirectoryUserEntriesFromAllowFromAndMapKeys, listInspectedDirectoryEntriesFromSources, listResolvedDirectoryEntriesFromSources, listResolvedDirectoryGroupEntriesFromMapKeys, listResolvedDirectoryUserEntriesFromAllowFrom, mapAllowFromEntries, mapAllowlistResolutionInputs, nullChannelDirectorySelf, onDiagnosticEvent, projectWarningCollector, readStoreAllowFromForDmPolicy, recordPendingHistoryEntry, recordPendingHistoryEntryIfEnabled, resolveBlueBubblesGroupRequireMention, resolveBlueBubblesGroupToolPolicy, resolveChannelGroupRequireMention, resolveChannelGroupToolsPolicy, resolveControlCommandGate, resolveDmGroupAccessWithLists, resolveEffectiveAllowFromLists, resolveToolsBySender, toDirectoryEntries };
