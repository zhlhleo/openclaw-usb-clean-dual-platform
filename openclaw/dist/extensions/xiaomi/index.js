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
import "../../file-lock-DCUu-l3H.js";
import "../../profiles-CpZYCV3C.js";
import "../../repair-f7r8_Mh5.js";
import "../../provider-env-vars-B47GY0nJ.js";
import "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import { n as buildXiaomiProvider, t as XIAOMI_DEFAULT_MODEL_ID } from "../../provider-catalog-D2kJAgeZ.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
import { u as PROVIDER_LABELS } from "../../provider-usage-dSfkOdUr.js";
import { a as applyProviderConfigWithDefaultModels, t as applyAgentDefaultModelPrimary } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/xiaomi/onboard.ts
const XIAOMI_DEFAULT_MODEL_REF = `xiaomi/${XIAOMI_DEFAULT_MODEL_ID}`;
function applyXiaomiProviderConfig(cfg) {
	const models = { ...cfg.agents?.defaults?.models };
	models[XIAOMI_DEFAULT_MODEL_REF] = {
		...models[XIAOMI_DEFAULT_MODEL_REF],
		alias: models[XIAOMI_DEFAULT_MODEL_REF]?.alias ?? "Xiaomi"
	};
	const defaultProvider = buildXiaomiProvider();
	return applyProviderConfigWithDefaultModels(cfg, {
		agentModels: models,
		providerId: "xiaomi",
		api: defaultProvider.api ?? "openai-completions",
		baseUrl: defaultProvider.baseUrl,
		defaultModels: defaultProvider.models ?? [],
		defaultModelId: XIAOMI_DEFAULT_MODEL_ID
	});
}
function applyXiaomiConfig(cfg) {
	return applyAgentDefaultModelPrimary(applyXiaomiProviderConfig(cfg), XIAOMI_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/xiaomi/index.ts
const PROVIDER_ID = "xiaomi";
var xiaomi_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Xiaomi Provider",
	description: "Bundled Xiaomi provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Xiaomi",
			docsPath: "/providers/xiaomi",
			envVars: ["XIAOMI_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Xiaomi API key",
				hint: "API key",
				optionKey: "xiaomiApiKey",
				flagName: "--xiaomi-api-key",
				envVar: "XIAOMI_API_KEY",
				promptMessage: "Enter Xiaomi API key",
				defaultModel: XIAOMI_DEFAULT_MODEL_REF,
				expectedProviders: ["xiaomi"],
				applyConfig: (cfg) => applyXiaomiConfig(cfg),
				wizard: {
					choiceId: "xiaomi-api-key",
					choiceLabel: "Xiaomi API key",
					groupId: "xiaomi",
					groupLabel: "Xiaomi",
					groupHint: "API key"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildXiaomiProvider
				})
			},
			resolveUsageAuth: async (ctx) => {
				const apiKey = ctx.resolveApiKeyFromConfigAndStore({ envDirect: [ctx.env.XIAOMI_API_KEY] });
				return apiKey ? { token: apiKey } : null;
			},
			fetchUsageSnapshot: async () => ({
				provider: "xiaomi",
				displayName: PROVIDER_LABELS.xiaomi,
				windows: []
			})
		});
	}
});
//#endregion
export { xiaomi_default as default };
