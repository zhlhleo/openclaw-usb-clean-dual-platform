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
import { n as QIANFAN_DEFAULT_MODEL_ID, r as buildQianfanProvider } from "../../provider-catalog-l2lnHHlP.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
import { o as applyProviderConfigWithDefaultModelsPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/qianfan/onboard.ts
const QIANFAN_DEFAULT_MODEL_REF = `qianfan/${QIANFAN_DEFAULT_MODEL_ID}`;
function resolveQianfanPreset(cfg) {
	const defaultProvider = buildQianfanProvider();
	const existingProvider = cfg.models?.providers?.qianfan;
	const existingBaseUrl = typeof existingProvider?.baseUrl === "string" ? existingProvider.baseUrl.trim() : "";
	return {
		api: typeof existingProvider?.api === "string" ? existingProvider.api : "openai-completions",
		baseUrl: existingBaseUrl || "https://qianfan.baidubce.com/v2",
		defaultModels: defaultProvider.models ?? []
	};
}
function applyQianfanPreset(cfg, primaryModelRef) {
	const preset = resolveQianfanPreset(cfg);
	return applyProviderConfigWithDefaultModelsPreset(cfg, {
		providerId: "qianfan",
		api: preset.api,
		baseUrl: preset.baseUrl,
		defaultModels: preset.defaultModels,
		defaultModelId: QIANFAN_DEFAULT_MODEL_ID,
		aliases: [{
			modelRef: QIANFAN_DEFAULT_MODEL_REF,
			alias: "QIANFAN"
		}],
		primaryModelRef
	});
}
function applyQianfanConfig(cfg) {
	return applyQianfanPreset(cfg, QIANFAN_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/qianfan/index.ts
const PROVIDER_ID = "qianfan";
var qianfan_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Qianfan Provider",
	description: "Bundled Qianfan provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Qianfan",
			docsPath: "/providers/qianfan",
			envVars: ["QIANFAN_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Qianfan API key",
				hint: "API key",
				optionKey: "qianfanApiKey",
				flagName: "--qianfan-api-key",
				envVar: "QIANFAN_API_KEY",
				promptMessage: "Enter Qianfan API key",
				defaultModel: QIANFAN_DEFAULT_MODEL_REF,
				expectedProviders: ["qianfan"],
				applyConfig: (cfg) => applyQianfanConfig(cfg),
				wizard: {
					choiceId: "qianfan-api-key",
					choiceLabel: "Qianfan API key",
					groupId: "qianfan",
					groupLabel: "Qianfan",
					groupHint: "API key"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildQianfanProvider
				})
			}
		});
	}
});
//#endregion
export { qianfan_default as default };
