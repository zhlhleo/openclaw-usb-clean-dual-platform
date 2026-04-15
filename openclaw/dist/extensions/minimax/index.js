import "../../logger-CoEtkjhn.js";
import "../../paths-GHJ97ebE.js";
import "../../tmp-openclaw-dir-idKIOMmb.js";
import "../../theme-CdOoMzRk.js";
import "../../globals-41sdSaKv.js";
import "../../subsystem-VzQeL-96.js";
import "../../ansi-BEJF8NKS.js";
import "../../boolean-C3GkJetE.js";
import "../../env-mRJH5TpF.js";
import "../../utils-seFh26xW.js";
import "../../paths-DN8rtGcC.js";
import "../../boundary-path-Dm0QJ7-y.js";
import "../../boundary-file-read-BGs2p0f_.js";
import "../../logger-DtlnPe_E.js";
import "../../exec-BnXF7JCz.js";
import "../../workspace-DFURCHD1.js";
import "../../agent-scope-D8nGiwMS.js";
import "../../model-selection-JWhBHRyf.js";
import "../../host-env-security-Du6GREqL.js";
import "../../shell-env-CcwPX9am.js";
import "../../ip-CndEBNxP.js";
import "../../file-lock-DCUu-l3H.js";
import { c as ensureAuthProfileStore, n as listProfilesForProvider } from "../../profiles-CpZYCV3C.js";
import "../../repair-f7r8_Mh5.js";
import "../../provider-env-vars-B47GY0nJ.js";
import "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../ssrf-CrYPbrLn.js";
import "../../fetch-guard-dWFaYrKn.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import { r as buildOauthProviderAuthResult } from "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import "../../shared-D-Woqi_Z.js";
import { n as fetchMinimaxUsage } from "../../provider-usage-dSfkOdUr.js";
import { n as describeImageWithModel, r as describeImagesWithModel } from "../../media-understanding-Dwc-uk1w.js";
import { n as applyOnboardAuthAgentModelsAndProviders, t as applyAgentDefaultModelPrimary } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/minimax/media-understanding-provider.ts
const minimaxMediaUnderstandingProvider = {
	id: "minimax",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
const minimaxPortalMediaUnderstandingProvider = {
	id: "minimax-portal",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
//#region extensions/minimax/model-definitions.ts
const MINIMAX_API_BASE_URL = "https://api.minimax.io/anthropic";
const MINIMAX_CN_API_BASE_URL = "https://api.minimaxi.com/anthropic";
const DEFAULT_MINIMAX_CONTEXT_WINDOW = 2e5;
const DEFAULT_MINIMAX_MAX_TOKENS = 8192;
const MINIMAX_API_COST$1 = {
	input: .3,
	output: 1.2,
	cacheRead: .03,
	cacheWrite: .12
};
const MINIMAX_MODEL_CATALOG = {
	"MiniMax-M2.7": {
		name: "MiniMax M2.7",
		reasoning: true
	},
	"MiniMax-M2.7-highspeed": {
		name: "MiniMax M2.7 Highspeed",
		reasoning: true
	},
	"MiniMax-M2.5": {
		name: "MiniMax M2.5",
		reasoning: true
	},
	"MiniMax-M2.5-highspeed": {
		name: "MiniMax M2.5 Highspeed",
		reasoning: true
	}
};
function buildMinimaxModelDefinition(params) {
	const catalog = MINIMAX_MODEL_CATALOG[params.id];
	return {
		id: params.id,
		name: params.name ?? catalog?.name ?? `MiniMax ${params.id}`,
		reasoning: params.reasoning ?? catalog?.reasoning ?? false,
		input: ["text"],
		cost: params.cost,
		contextWindow: params.contextWindow,
		maxTokens: params.maxTokens
	};
}
function buildMinimaxApiModelDefinition(modelId) {
	return buildMinimaxModelDefinition({
		id: modelId,
		cost: MINIMAX_API_COST$1,
		contextWindow: DEFAULT_MINIMAX_CONTEXT_WINDOW,
		maxTokens: DEFAULT_MINIMAX_MAX_TOKENS
	});
}
//#endregion
//#region extensions/minimax/onboard.ts
function applyMinimaxApiProviderConfigWithBaseUrl(cfg, params) {
	const providers = { ...cfg.models?.providers };
	const existingProvider = providers[params.providerId];
	const existingModels = existingProvider?.models ?? [];
	const apiModel = buildMinimaxApiModelDefinition(params.modelId);
	const mergedModels = existingModels.some((model) => model.id === params.modelId) ? existingModels : [...existingModels, apiModel];
	const { apiKey: existingApiKey, ...existingProviderRest } = existingProvider ?? {
		baseUrl: params.baseUrl,
		models: []
	};
	const resolvedApiKey = typeof existingApiKey === "string" ? existingApiKey : void 0;
	const normalizedApiKey = resolvedApiKey?.trim() === "minimax" ? "" : resolvedApiKey;
	providers[params.providerId] = {
		...existingProviderRest,
		baseUrl: params.baseUrl,
		api: "anthropic-messages",
		authHeader: true,
		...normalizedApiKey?.trim() ? { apiKey: normalizedApiKey } : {},
		models: mergedModels.length > 0 ? mergedModels : [apiModel]
	};
	const models = { ...cfg.agents?.defaults?.models };
	const modelRef = `${params.providerId}/${params.modelId}`;
	models[modelRef] = {
		...models[modelRef],
		alias: "Minimax"
	};
	return applyOnboardAuthAgentModelsAndProviders(cfg, {
		agentModels: models,
		providers
	});
}
function applyMinimaxApiConfigWithBaseUrl(cfg, params) {
	return applyAgentDefaultModelPrimary(applyMinimaxApiProviderConfigWithBaseUrl(cfg, params), `${params.providerId}/${params.modelId}`);
}
function applyMinimaxApiConfig(cfg, modelId = "MiniMax-M2.7") {
	return applyMinimaxApiConfigWithBaseUrl(cfg, {
		providerId: "minimax",
		modelId,
		baseUrl: MINIMAX_API_BASE_URL
	});
}
function applyMinimaxApiConfigCn(cfg, modelId = "MiniMax-M2.7") {
	return applyMinimaxApiConfigWithBaseUrl(cfg, {
		providerId: "minimax",
		modelId,
		baseUrl: MINIMAX_CN_API_BASE_URL
	});
}
//#endregion
//#region extensions/minimax/provider-catalog.ts
const MINIMAX_PORTAL_BASE_URL = "https://api.minimax.io/anthropic";
const MINIMAX_DEFAULT_MODEL_ID = "MiniMax-M2.7";
const MINIMAX_DEFAULT_VISION_MODEL_ID = "MiniMax-VL-01";
const MINIMAX_DEFAULT_CONTEXT_WINDOW = 2e5;
const MINIMAX_DEFAULT_MAX_TOKENS = 8192;
const MINIMAX_API_COST = {
	input: .3,
	output: 1.2,
	cacheRead: .03,
	cacheWrite: .12
};
function buildMinimaxModel(params) {
	return {
		id: params.id,
		name: params.name,
		reasoning: params.reasoning,
		input: params.input,
		cost: MINIMAX_API_COST,
		contextWindow: MINIMAX_DEFAULT_CONTEXT_WINDOW,
		maxTokens: MINIMAX_DEFAULT_MAX_TOKENS
	};
}
function buildMinimaxTextModel(params) {
	return buildMinimaxModel({
		...params,
		input: ["text"]
	});
}
function buildMinimaxCatalog() {
	return [
		buildMinimaxModel({
			id: MINIMAX_DEFAULT_VISION_MODEL_ID,
			name: "MiniMax VL 01",
			reasoning: false,
			input: ["text", "image"]
		}),
		buildMinimaxTextModel({
			id: MINIMAX_DEFAULT_MODEL_ID,
			name: "MiniMax M2.7",
			reasoning: true
		}),
		buildMinimaxTextModel({
			id: "MiniMax-M2.7-highspeed",
			name: "MiniMax M2.7 Highspeed",
			reasoning: true
		}),
		buildMinimaxTextModel({
			id: "MiniMax-M2.5",
			name: "MiniMax M2.5",
			reasoning: true
		}),
		buildMinimaxTextModel({
			id: "MiniMax-M2.5-highspeed",
			name: "MiniMax M2.5 Highspeed",
			reasoning: true
		})
	];
}
function buildMinimaxProvider() {
	return {
		baseUrl: MINIMAX_PORTAL_BASE_URL,
		api: "anthropic-messages",
		authHeader: true,
		models: buildMinimaxCatalog()
	};
}
function buildMinimaxPortalProvider() {
	return {
		baseUrl: MINIMAX_PORTAL_BASE_URL,
		api: "anthropic-messages",
		authHeader: true,
		models: buildMinimaxCatalog()
	};
}
//#endregion
//#region extensions/minimax/index.ts
const API_PROVIDER_ID = "minimax";
const PORTAL_PROVIDER_ID = "minimax-portal";
const PROVIDER_LABEL = "MiniMax";
const DEFAULT_MODEL = "MiniMax-M2.7";
const DEFAULT_BASE_URL_CN = "https://api.minimaxi.com/anthropic";
const DEFAULT_BASE_URL_GLOBAL = "https://api.minimax.io/anthropic";
function getDefaultBaseUrl(region) {
	return region === "cn" ? DEFAULT_BASE_URL_CN : DEFAULT_BASE_URL_GLOBAL;
}
function apiModelRef(modelId) {
	return `${API_PROVIDER_ID}/${modelId}`;
}
function portalModelRef(modelId) {
	return `${PORTAL_PROVIDER_ID}/${modelId}`;
}
function isModernMiniMaxModel(modelId) {
	const lower = modelId.trim().toLowerCase();
	return lower.startsWith("minimax-m2.7") || lower.startsWith("minimax-m2.5");
}
function buildPortalProviderCatalog(params) {
	return {
		...buildMinimaxPortalProvider(),
		baseUrl: params.baseUrl,
		apiKey: params.apiKey
	};
}
function resolveApiCatalog(ctx) {
	const apiKey = ctx.resolveProviderApiKey(API_PROVIDER_ID).apiKey;
	if (!apiKey) return null;
	return { provider: {
		...buildMinimaxProvider(),
		apiKey
	} };
}
function resolvePortalCatalog(ctx) {
	const explicitProvider = ctx.config.models?.providers?.[PORTAL_PROVIDER_ID];
	const envApiKey = ctx.resolveProviderApiKey(PORTAL_PROVIDER_ID).apiKey;
	const hasProfiles = listProfilesForProvider(ensureAuthProfileStore(ctx.agentDir, { allowKeychainPrompt: false }), PORTAL_PROVIDER_ID).length > 0;
	const explicitApiKey = typeof explicitProvider?.apiKey === "string" ? explicitProvider.apiKey.trim() : void 0;
	const apiKey = envApiKey ?? explicitApiKey ?? (hasProfiles ? "minimax-oauth" : void 0);
	if (!apiKey) return null;
	return { provider: buildPortalProviderCatalog({
		baseUrl: (typeof explicitProvider?.baseUrl === "string" ? explicitProvider.baseUrl.trim() : void 0) || DEFAULT_BASE_URL_GLOBAL,
		apiKey
	}) };
}
function createOAuthHandler(region) {
	const defaultBaseUrl = getDefaultBaseUrl(region);
	const regionLabel = region === "cn" ? "CN" : "Global";
	return async (ctx) => {
		const progress = ctx.prompter.progress(`Starting MiniMax OAuth (${regionLabel})…`);
		try {
			const { loginMiniMaxPortalOAuth } = await import("../../oauth.runtime-C3ylLQKm.js");
			const result = await loginMiniMaxPortalOAuth({
				openUrl: ctx.openUrl,
				note: ctx.prompter.note,
				progress,
				region
			});
			progress.stop("MiniMax OAuth complete");
			if (result.notification_message) await ctx.prompter.note(result.notification_message, "MiniMax OAuth");
			const baseUrl = result.resourceUrl || defaultBaseUrl;
			return buildOauthProviderAuthResult({
				providerId: PORTAL_PROVIDER_ID,
				defaultModel: portalModelRef(DEFAULT_MODEL),
				access: result.access,
				refresh: result.refresh,
				expires: result.expires,
				configPatch: {
					models: { providers: { [PORTAL_PROVIDER_ID]: {
						baseUrl,
						models: []
					} } },
					agents: { defaults: { models: {
						[portalModelRef("MiniMax-M2.7")]: { alias: "minimax-m2.7" },
						[portalModelRef("MiniMax-M2.7-highspeed")]: { alias: "minimax-m2.7-highspeed" },
						[portalModelRef("MiniMax-M2.5")]: { alias: "minimax-m2.5" },
						[portalModelRef("MiniMax-M2.5-highspeed")]: { alias: "minimax-m2.5-highspeed" },
						[portalModelRef("MiniMax-M2.5-Lightning")]: { alias: "minimax-m2.5-lightning" }
					} } }
				},
				notes: [
					"MiniMax OAuth tokens auto-refresh. Re-run login if refresh fails or access is revoked.",
					`Base URL defaults to ${defaultBaseUrl}. Override models.providers.${PORTAL_PROVIDER_ID}.baseUrl if needed.`,
					...result.notification_message ? [result.notification_message] : []
				]
			});
		} catch (err) {
			const errorMsg = err instanceof Error ? err.message : String(err);
			progress.stop(`MiniMax OAuth failed: ${errorMsg}`);
			await ctx.prompter.note("If OAuth fails, verify your MiniMax account has portal access and try again.", "MiniMax OAuth");
			throw err;
		}
	};
}
var minimax_default = definePluginEntry({
	id: API_PROVIDER_ID,
	name: "MiniMax",
	description: "Bundled MiniMax API-key and OAuth provider plugin",
	register(api) {
		api.registerProvider({
			id: API_PROVIDER_ID,
			label: PROVIDER_LABEL,
			docsPath: "/providers/minimax",
			envVars: ["MINIMAX_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: API_PROVIDER_ID,
				methodId: "api-global",
				label: "MiniMax API key (Global)",
				hint: "Global endpoint - api.minimax.io",
				optionKey: "minimaxApiKey",
				flagName: "--minimax-api-key",
				envVar: "MINIMAX_API_KEY",
				promptMessage: "Enter MiniMax API key (sk-api- or sk-cp-)\nhttps://platform.minimax.io/user-center/basic-information/interface-key",
				profileId: "minimax:global",
				allowProfile: false,
				defaultModel: apiModelRef(DEFAULT_MODEL),
				expectedProviders: ["minimax"],
				applyConfig: (cfg) => applyMinimaxApiConfig(cfg),
				wizard: {
					choiceId: "minimax-global-api",
					choiceLabel: "MiniMax API key (Global)",
					choiceHint: "Global endpoint - api.minimax.io",
					groupId: "minimax",
					groupLabel: "MiniMax",
					groupHint: "M2.7 (recommended)"
				}
			}), createProviderApiKeyAuthMethod({
				providerId: API_PROVIDER_ID,
				methodId: "api-cn",
				label: "MiniMax API key (CN)",
				hint: "CN endpoint - api.minimaxi.com",
				optionKey: "minimaxApiKey",
				flagName: "--minimax-api-key",
				envVar: "MINIMAX_API_KEY",
				promptMessage: "Enter MiniMax CN API key (sk-api- or sk-cp-)\nhttps://platform.minimaxi.com/user-center/basic-information/interface-key",
				profileId: "minimax:cn",
				allowProfile: false,
				defaultModel: apiModelRef(DEFAULT_MODEL),
				expectedProviders: ["minimax", "minimax-cn"],
				applyConfig: (cfg) => applyMinimaxApiConfigCn(cfg),
				wizard: {
					choiceId: "minimax-cn-api",
					choiceLabel: "MiniMax API key (CN)",
					choiceHint: "CN endpoint - api.minimaxi.com",
					groupId: "minimax",
					groupLabel: "MiniMax",
					groupHint: "M2.7 (recommended)"
				}
			})],
			catalog: {
				order: "simple",
				run: async (ctx) => resolveApiCatalog(ctx)
			},
			resolveUsageAuth: async (ctx) => {
				const apiKey = ctx.resolveApiKeyFromConfigAndStore({ envDirect: [ctx.env.MINIMAX_CODE_PLAN_KEY, ctx.env.MINIMAX_API_KEY] });
				return apiKey ? { token: apiKey } : null;
			},
			isModernModelRef: ({ modelId }) => isModernMiniMaxModel(modelId),
			fetchUsageSnapshot: async (ctx) => await fetchMinimaxUsage(ctx.token, ctx.timeoutMs, ctx.fetchFn)
		});
		api.registerProvider({
			id: PORTAL_PROVIDER_ID,
			label: PROVIDER_LABEL,
			docsPath: "/providers/minimax",
			envVars: ["MINIMAX_OAUTH_TOKEN", "MINIMAX_API_KEY"],
			catalog: { run: async (ctx) => resolvePortalCatalog(ctx) },
			auth: [{
				id: "oauth",
				label: "MiniMax OAuth (Global)",
				hint: "Global endpoint - api.minimax.io",
				kind: "device_code",
				wizard: {
					choiceId: "minimax-global-oauth",
					choiceLabel: "MiniMax OAuth (Global)",
					choiceHint: "Global endpoint - api.minimax.io",
					groupId: "minimax",
					groupLabel: "MiniMax",
					groupHint: "M2.7 (recommended)"
				},
				run: createOAuthHandler("global")
			}, {
				id: "oauth-cn",
				label: "MiniMax OAuth (CN)",
				hint: "CN endpoint - api.minimaxi.com",
				kind: "device_code",
				wizard: {
					choiceId: "minimax-cn-oauth",
					choiceLabel: "MiniMax OAuth (CN)",
					choiceHint: "CN endpoint - api.minimaxi.com",
					groupId: "minimax",
					groupLabel: "MiniMax",
					groupHint: "M2.7 (recommended)"
				},
				run: createOAuthHandler("cn")
			}],
			isModernModelRef: ({ modelId }) => isModernMiniMaxModel(modelId)
		});
		api.registerMediaUnderstandingProvider(minimaxMediaUnderstandingProvider);
		api.registerMediaUnderstandingProvider(minimaxPortalMediaUnderstandingProvider);
	}
});
//#endregion
export { minimax_default as default };
