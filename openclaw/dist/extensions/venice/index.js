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
import "../../auth-profiles-B-NeTOJm.js";
import "../../boundary-path-Dm0QJ7-y.js";
import "../../boundary-file-read-BGs2p0f_.js";
import "../../logger-DtlnPe_E.js";
import "../../exec-BnXF7JCz.js";
import "../../workspace-DFURCHD1.js";
import "../../agent-scope-D8nGiwMS.js";
import "../../model-selection-JWhBHRyf.js";
import "../../io-Cu_7vv9A.js";
import "../../host-env-security-Du6GREqL.js";
import "../../shell-env-CcwPX9am.js";
import "../../safe-text-D1ZwCSxe.js";
import "../../version-CMPQj7au.js";
import "../../env-substitution-BW_YpYTT.js";
import "../../includes-DlCBNZMw.js";
import "../../zod-schema.providers-core-CAJFPAb3.js";
import "../../legacy-web-search-Cl_mGN-q.js";
import "../../registry-BYdGgYCt.js";
import "../../config-state-DM5O57m7.js";
import "../../manifest-registry-BYh_hnWR.js";
import "../../avatar-policy-ByRUKg_o.js";
import "../../ip-CndEBNxP.js";
import "../../zod-schema.agent-runtime-BLp4Fcyb.js";
import "../../zod-schema.core-DICsKVAU.js";
import "../../config-CLN6d0um.js";
import "../../file-lock-DCUu-l3H.js";
import "../../audit-fs-nZ0T6frF.js";
import "../../resolve-BaVvVhzC.js";
import "../../profiles-CpZYCV3C.js";
import "../../repair-f7r8_Mh5.js";
import "../../provider-env-vars-B47GY0nJ.js";
import "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../kilocode-shared-BZ_lCepT.js";
import { C as VENICE_DEFAULT_MODEL_REF, S as VENICE_BASE_URL, T as buildVeniceModelDefinition, rt as applyXaiModelCompat, w as VENICE_MODEL_CATALOG } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as buildVeniceProvider } from "../../provider-catalog-Onedvhpf.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
import { c as applyProviderConfigWithModelCatalogPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
import "../../provider-auth-api-key-DwQCR24G.js";
//#region extensions/venice/onboard.ts
function applyVenicePreset(cfg, primaryModelRef) {
	return applyProviderConfigWithModelCatalogPreset(cfg, {
		providerId: "venice",
		api: "openai-completions",
		baseUrl: VENICE_BASE_URL,
		catalogModels: VENICE_MODEL_CATALOG.map(buildVeniceModelDefinition),
		aliases: [{
			modelRef: VENICE_DEFAULT_MODEL_REF,
			alias: "Kimi K2.5"
		}],
		primaryModelRef
	});
}
function applyVeniceConfig(cfg) {
	return applyVenicePreset(cfg, VENICE_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/venice/index.ts
const PROVIDER_ID = "venice";
function isXaiBackedVeniceModel(modelId) {
	return modelId.trim().toLowerCase().includes("grok");
}
var venice_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Venice Provider",
	description: "Bundled Venice provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Venice",
			docsPath: "/providers/venice",
			envVars: ["VENICE_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Venice AI API key",
				hint: "Privacy-focused (uncensored models)",
				optionKey: "veniceApiKey",
				flagName: "--venice-api-key",
				envVar: "VENICE_API_KEY",
				promptMessage: "Enter Venice AI API key",
				defaultModel: VENICE_DEFAULT_MODEL_REF,
				expectedProviders: ["venice"],
				applyConfig: (cfg) => applyVeniceConfig(cfg),
				noteMessage: [
					"Venice AI provides privacy-focused inference with uncensored models.",
					"Get your API key at: https://venice.ai/settings/api",
					"Supports 'private' (fully private) and 'anonymized' (proxy) modes."
				].join("\n"),
				noteTitle: "Venice AI",
				wizard: {
					choiceId: "venice-api-key",
					choiceLabel: "Venice AI API key",
					groupId: "venice",
					groupLabel: "Venice AI",
					groupHint: "Privacy-focused (uncensored models)"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildVeniceProvider
				})
			},
			normalizeResolvedModel: ({ modelId, model }) => isXaiBackedVeniceModel(modelId) ? applyXaiModelCompat(model) : void 0
		});
	}
});
//#endregion
export { venice_default as default };
