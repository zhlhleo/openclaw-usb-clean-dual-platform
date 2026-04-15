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
import { H as HUGGINGFACE_MODEL_CATALOG, U as buildHuggingfaceModelDefinition, V as HUGGINGFACE_BASE_URL } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as buildHuggingfaceProvider } from "../../provider-catalog-ER-5YjHU.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { c as applyProviderConfigWithModelCatalogPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/huggingface/onboard.ts
const HUGGINGFACE_DEFAULT_MODEL_REF = "huggingface/deepseek-ai/DeepSeek-R1";
function applyHuggingfacePreset(cfg, primaryModelRef) {
	return applyProviderConfigWithModelCatalogPreset(cfg, {
		providerId: "huggingface",
		api: "openai-completions",
		baseUrl: HUGGINGFACE_BASE_URL,
		catalogModels: HUGGINGFACE_MODEL_CATALOG.map(buildHuggingfaceModelDefinition),
		aliases: [{
			modelRef: HUGGINGFACE_DEFAULT_MODEL_REF,
			alias: "Hugging Face"
		}],
		primaryModelRef
	});
}
function applyHuggingfaceConfig(cfg) {
	return applyHuggingfacePreset(cfg, HUGGINGFACE_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/huggingface/index.ts
const PROVIDER_ID = "huggingface";
var huggingface_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Hugging Face Provider",
	description: "Bundled Hugging Face provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Hugging Face",
			docsPath: "/providers/huggingface",
			envVars: ["HUGGINGFACE_HUB_TOKEN", "HF_TOKEN"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Hugging Face API key",
				hint: "Inference API (HF token)",
				optionKey: "huggingfaceApiKey",
				flagName: "--huggingface-api-key",
				envVar: "HUGGINGFACE_HUB_TOKEN",
				promptMessage: "Enter Hugging Face API key",
				defaultModel: HUGGINGFACE_DEFAULT_MODEL_REF,
				expectedProviders: ["huggingface"],
				applyConfig: (cfg) => applyHuggingfaceConfig(cfg),
				wizard: {
					choiceId: "huggingface-api-key",
					choiceLabel: "Hugging Face API key",
					choiceHint: "Inference API (HF token)",
					groupId: "huggingface",
					groupLabel: "Hugging Face",
					groupHint: "Inference API (HF token)"
				}
			})],
			catalog: {
				order: "simple",
				run: async (ctx) => {
					const { apiKey, discoveryApiKey } = ctx.resolveProviderApiKey(PROVIDER_ID);
					if (!apiKey) return null;
					return { provider: {
						...await buildHuggingfaceProvider(discoveryApiKey),
						apiKey
					} };
				}
			}
		});
	}
});
//#endregion
export { huggingface_default as default };
