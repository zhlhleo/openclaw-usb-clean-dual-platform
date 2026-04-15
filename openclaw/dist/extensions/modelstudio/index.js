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
import { t as buildModelStudioProvider } from "../../provider-catalog-C8PYJd9b.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
import { c as applyProviderConfigWithModelCatalogPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/modelstudio/model-definitions.ts
const MODELSTUDIO_CN_BASE_URL = "https://coding.dashscope.aliyuncs.com/v1";
const MODELSTUDIO_GLOBAL_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1";
const MODELSTUDIO_DEFAULT_MODEL_REF = `modelstudio/qwen3.5-plus`;
//#endregion
//#region extensions/modelstudio/onboard.ts
function applyModelStudioProviderConfigWithBaseUrl(cfg, baseUrl, primaryModelRef) {
	const provider = buildModelStudioProvider();
	return applyProviderConfigWithModelCatalogPreset(cfg, {
		providerId: "modelstudio",
		api: provider.api ?? "openai-completions",
		baseUrl,
		catalogModels: provider.models ?? [],
		aliases: [...(provider.models ?? []).map((model) => `modelstudio/${model.id}`), {
			modelRef: MODELSTUDIO_DEFAULT_MODEL_REF,
			alias: "Qwen"
		}],
		primaryModelRef
	});
}
function applyModelStudioConfig(cfg) {
	return applyModelStudioProviderConfigWithBaseUrl(cfg, MODELSTUDIO_GLOBAL_BASE_URL, MODELSTUDIO_DEFAULT_MODEL_REF);
}
function applyModelStudioConfigCn(cfg) {
	return applyModelStudioProviderConfigWithBaseUrl(cfg, MODELSTUDIO_CN_BASE_URL, MODELSTUDIO_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/modelstudio/index.ts
const PROVIDER_ID = "modelstudio";
var modelstudio_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Model Studio Provider",
	description: "Bundled Model Studio provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Model Studio",
			docsPath: "/providers/models",
			envVars: ["MODELSTUDIO_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key-cn",
				label: "Coding Plan API Key for China (subscription)",
				hint: "Endpoint: coding.dashscope.aliyuncs.com",
				optionKey: "modelstudioApiKeyCn",
				flagName: "--modelstudio-api-key-cn",
				envVar: "MODELSTUDIO_API_KEY",
				promptMessage: "Enter Alibaba Cloud Model Studio Coding Plan API key (China)",
				defaultModel: MODELSTUDIO_DEFAULT_MODEL_REF,
				expectedProviders: ["modelstudio"],
				applyConfig: (cfg) => applyModelStudioConfigCn(cfg),
				noteMessage: [
					"Get your API key at: https://bailian.console.aliyun.com/",
					"Endpoint: coding.dashscope.aliyuncs.com",
					"Models: qwen3.5-plus, glm-4.7, kimi-k2.5, MiniMax-M2.5, etc."
				].join("\n"),
				noteTitle: "Alibaba Cloud Model Studio Coding Plan (China)",
				wizard: {
					choiceId: "modelstudio-api-key-cn",
					choiceLabel: "Coding Plan API Key for China (subscription)",
					choiceHint: "Endpoint: coding.dashscope.aliyuncs.com",
					groupId: "modelstudio",
					groupLabel: "Alibaba Cloud Model Studio",
					groupHint: "Coding Plan API key (CN / Global)"
				}
			}), createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Coding Plan API Key for Global/Intl (subscription)",
				hint: "Endpoint: coding-intl.dashscope.aliyuncs.com",
				optionKey: "modelstudioApiKey",
				flagName: "--modelstudio-api-key",
				envVar: "MODELSTUDIO_API_KEY",
				promptMessage: "Enter Alibaba Cloud Model Studio Coding Plan API key (Global/Intl)",
				defaultModel: MODELSTUDIO_DEFAULT_MODEL_REF,
				expectedProviders: ["modelstudio"],
				applyConfig: (cfg) => applyModelStudioConfig(cfg),
				noteMessage: [
					"Get your API key at: https://bailian.console.aliyun.com/",
					"Endpoint: coding-intl.dashscope.aliyuncs.com",
					"Models: qwen3.5-plus, glm-4.7, kimi-k2.5, MiniMax-M2.5, etc."
				].join("\n"),
				noteTitle: "Alibaba Cloud Model Studio Coding Plan (Global/Intl)",
				wizard: {
					choiceId: "modelstudio-api-key",
					choiceLabel: "Coding Plan API Key for Global/Intl (subscription)",
					choiceHint: "Endpoint: coding-intl.dashscope.aliyuncs.com",
					groupId: "modelstudio",
					groupLabel: "Alibaba Cloud Model Studio",
					groupHint: "Coding Plan API key (CN / Global)"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildModelStudioProvider,
					allowExplicitBaseUrl: true
				})
			}
		});
	}
});
//#endregion
export { modelstudio_default as default };
