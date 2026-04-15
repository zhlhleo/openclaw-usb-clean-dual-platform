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
import "../../model-auth-D-fOiSA-.js";
import "../../ssrf-CrYPbrLn.js";
import "../../fetch-guard-dWFaYrKn.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { r as buildFalImageGenerationProvider } from "../../image-generation-B8kCg-to.js";
import "../../shared-D-Woqi_Z.js";
//#region extensions/fal/onboard.ts
const FAL_DEFAULT_IMAGE_MODEL_REF = "fal/fal-ai/flux/dev";
function applyFalConfig(cfg) {
	if (cfg.agents?.defaults?.imageGenerationModel) return cfg;
	return {
		...cfg,
		agents: {
			...cfg.agents,
			defaults: {
				...cfg.agents?.defaults,
				imageGenerationModel: { primary: FAL_DEFAULT_IMAGE_MODEL_REF }
			}
		}
	};
}
//#endregion
//#region extensions/fal/index.ts
const PROVIDER_ID = "fal";
var fal_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "fal Provider",
	description: "Bundled fal image generation provider",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "fal",
			docsPath: "/providers/models",
			envVars: ["FAL_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "fal API key",
				hint: "Image generation API key",
				optionKey: "falApiKey",
				flagName: "--fal-api-key",
				envVar: "FAL_KEY",
				promptMessage: "Enter fal API key",
				defaultModel: FAL_DEFAULT_IMAGE_MODEL_REF,
				expectedProviders: ["fal"],
				applyConfig: (cfg) => applyFalConfig(cfg),
				wizard: {
					choiceId: "fal-api-key",
					choiceLabel: "fal API key",
					choiceHint: "Image generation API key",
					groupId: "fal",
					groupLabel: "fal",
					groupHint: "Image generation",
					onboardingScopes: ["image-generation"]
				}
			})]
		});
		api.registerImageGenerationProvider(buildFalImageGenerationProvider());
	}
});
//#endregion
export { fal_default as default };
