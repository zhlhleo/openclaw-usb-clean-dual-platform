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
import "../../kilocode-shared-BZ_lCepT.js";
import { D as TOGETHER_BASE_URL, O as TOGETHER_MODEL_CATALOG, k as buildTogetherModelDefinition } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
import { c as applyProviderConfigWithModelCatalogPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/together/onboard.ts
const TOGETHER_DEFAULT_MODEL_REF = "together/moonshotai/Kimi-K2.5";
function applyTogetherPreset(cfg, primaryModelRef) {
	return applyProviderConfigWithModelCatalogPreset(cfg, {
		providerId: "together",
		api: "openai-completions",
		baseUrl: TOGETHER_BASE_URL,
		catalogModels: TOGETHER_MODEL_CATALOG.map(buildTogetherModelDefinition),
		aliases: [{
			modelRef: TOGETHER_DEFAULT_MODEL_REF,
			alias: "Together AI"
		}],
		primaryModelRef
	});
}
function applyTogetherConfig(cfg) {
	return applyTogetherPreset(cfg, TOGETHER_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/together/provider-catalog.ts
function buildTogetherProvider() {
	return {
		baseUrl: TOGETHER_BASE_URL,
		api: "openai-completions",
		models: TOGETHER_MODEL_CATALOG.map(buildTogetherModelDefinition)
	};
}
//#endregion
//#region extensions/together/index.ts
const PROVIDER_ID = "together";
var together_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Together Provider",
	description: "Bundled Together provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Together",
			docsPath: "/providers/together",
			envVars: ["TOGETHER_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Together AI API key",
				hint: "API key",
				optionKey: "togetherApiKey",
				flagName: "--together-api-key",
				envVar: "TOGETHER_API_KEY",
				promptMessage: "Enter Together AI API key",
				defaultModel: TOGETHER_DEFAULT_MODEL_REF,
				expectedProviders: ["together"],
				applyConfig: (cfg) => applyTogetherConfig(cfg),
				wizard: {
					choiceId: "together-api-key",
					choiceLabel: "Together AI API key",
					groupId: "together",
					groupLabel: "Together AI",
					groupHint: "API key"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildTogetherProvider
				})
			}
		});
	}
});
//#endregion
export { together_default as default };
