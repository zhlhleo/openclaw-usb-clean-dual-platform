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
import { A as SYNTHETIC_BASE_URL, M as SYNTHETIC_MODEL_CATALOG, N as buildSyntheticModelDefinition, j as SYNTHETIC_DEFAULT_MODEL_REF } from "../../provider-models-mDSVWqBj.js";
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
//#region extensions/synthetic/onboard.ts
function applySyntheticPreset(cfg, primaryModelRef) {
	return applyProviderConfigWithModelCatalogPreset(cfg, {
		providerId: "synthetic",
		api: "anthropic-messages",
		baseUrl: SYNTHETIC_BASE_URL,
		catalogModels: SYNTHETIC_MODEL_CATALOG.map(buildSyntheticModelDefinition),
		aliases: [{
			modelRef: SYNTHETIC_DEFAULT_MODEL_REF,
			alias: "MiniMax M2.5"
		}],
		primaryModelRef
	});
}
function applySyntheticConfig(cfg) {
	return applySyntheticPreset(cfg, SYNTHETIC_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/synthetic/provider-catalog.ts
function buildSyntheticProvider() {
	return {
		baseUrl: SYNTHETIC_BASE_URL,
		api: "anthropic-messages",
		models: SYNTHETIC_MODEL_CATALOG.map(buildSyntheticModelDefinition)
	};
}
//#endregion
//#region extensions/synthetic/index.ts
const PROVIDER_ID = "synthetic";
var synthetic_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Synthetic Provider",
	description: "Bundled Synthetic provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Synthetic",
			docsPath: "/providers/synthetic",
			envVars: ["SYNTHETIC_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Synthetic API key",
				hint: "Anthropic-compatible (multi-model)",
				optionKey: "syntheticApiKey",
				flagName: "--synthetic-api-key",
				envVar: "SYNTHETIC_API_KEY",
				promptMessage: "Enter Synthetic API key",
				defaultModel: SYNTHETIC_DEFAULT_MODEL_REF,
				expectedProviders: ["synthetic"],
				applyConfig: (cfg) => applySyntheticConfig(cfg),
				wizard: {
					choiceId: "synthetic-api-key",
					choiceLabel: "Synthetic API key",
					groupId: "synthetic",
					groupLabel: "Synthetic",
					groupHint: "Anthropic-compatible (multi-model)"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildSyntheticProvider
				})
			}
		});
	}
});
//#endregion
export { synthetic_default as default };
