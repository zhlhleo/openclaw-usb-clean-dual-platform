import type { OpenClawPluginApi, OpenClawPluginConfigSchema, OpenClawPluginDefinition } from "../plugins/types.js";
export type { AnyAgentTool, MediaUnderstandingProviderPlugin, OpenClawPluginApi, PluginCommandContext, OpenClawPluginConfigSchema, ProviderDiscoveryContext, ProviderCatalogContext, ProviderCatalogResult, ProviderAugmentModelCatalogContext, ProviderBuiltInModelSuppressionContext, ProviderBuiltInModelSuppressionResult, ProviderBuildMissingAuthMessageContext, ProviderCacheTtlEligibilityContext, ProviderDefaultThinkingPolicyContext, ProviderFetchUsageSnapshotContext, ProviderModernModelPolicyContext, ProviderPreparedRuntimeAuth, ProviderResolvedUsageAuth, ProviderPrepareExtraParamsContext, ProviderPrepareDynamicModelContext, ProviderPrepareRuntimeAuthContext, ProviderResolveUsageAuthContext, ProviderResolveDynamicModelContext, ProviderNormalizeResolvedModelContext, ProviderRuntimeModel, SpeechProviderPlugin, ProviderThinkingPolicyContext, ProviderWrapStreamFnContext, OpenClawPluginService, OpenClawPluginServiceContext, ProviderAuthContext, ProviderAuthDoctorHintContext, ProviderAuthMethodNonInteractiveContext, ProviderAuthMethod, ProviderAuthResult, OpenClawPluginCommandDefinition, OpenClawPluginDefinition, PluginLogger, PluginInteractiveTelegramHandlerContext, } from "../plugins/types.js";
export type { OpenClawConfig } from "../config/config.js";
export { emptyPluginConfigSchema } from "../plugins/config-schema.js";
type DefinePluginEntryOptions = {
    id: string;
    name: string;
    description: string;
    kind?: OpenClawPluginDefinition["kind"];
    configSchema?: OpenClawPluginConfigSchema | (() => OpenClawPluginConfigSchema);
    register: (api: OpenClawPluginApi) => void;
};
type DefinedPluginEntry = {
    id: string;
    name: string;
    description: string;
    configSchema: OpenClawPluginConfigSchema;
    register: NonNullable<OpenClawPluginDefinition["register"]>;
} & Pick<OpenClawPluginDefinition, "kind">;
export declare function definePluginEntry({ id, name, description, kind, configSchema, register, }: DefinePluginEntryOptions): DefinedPluginEntry;
