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
import { X as OPENCODE_GO_DEFAULT_MODEL_REF } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { l as withAgentModelAliases, t as applyAgentDefaultModelPrimary } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/opencode-go/onboard.ts
const OPENCODE_GO_ALIAS_DEFAULTS = {
	"opencode-go/kimi-k2.5": "Kimi",
	"opencode-go/glm-5": "GLM",
	"opencode-go/minimax-m2.5": "MiniMax"
};
function applyOpencodeGoProviderConfig(cfg) {
	return {
		...cfg,
		agents: {
			...cfg.agents,
			defaults: {
				...cfg.agents?.defaults,
				models: withAgentModelAliases(cfg.agents?.defaults?.models, Object.entries(OPENCODE_GO_ALIAS_DEFAULTS).map(([modelRef, alias]) => ({
					modelRef,
					alias
				})))
			}
		}
	};
}
function applyOpencodeGoConfig(cfg) {
	return applyAgentDefaultModelPrimary(applyOpencodeGoProviderConfig(cfg), OPENCODE_GO_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/opencode-go/index.ts
const PROVIDER_ID = "opencode-go";
var opencode_go_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "OpenCode Go Provider",
	description: "Bundled OpenCode Go provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "OpenCode Go",
			docsPath: "/providers/models",
			envVars: ["OPENCODE_API_KEY", "OPENCODE_ZEN_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "OpenCode Go catalog",
				hint: "Shared API key for Zen + Go catalogs",
				optionKey: "opencodeGoApiKey",
				flagName: "--opencode-go-api-key",
				envVar: "OPENCODE_API_KEY",
				promptMessage: "Enter OpenCode API key",
				profileIds: ["opencode:default", "opencode-go:default"],
				defaultModel: OPENCODE_GO_DEFAULT_MODEL_REF,
				expectedProviders: ["opencode", "opencode-go"],
				applyConfig: (cfg) => applyOpencodeGoConfig(cfg),
				noteMessage: [
					"OpenCode uses one API key across the Zen and Go catalogs.",
					"Go focuses on Kimi, GLM, and MiniMax coding models.",
					"Get your API key at: https://opencode.ai/auth"
				].join("\n"),
				noteTitle: "OpenCode",
				wizard: {
					choiceId: "opencode-go",
					choiceLabel: "OpenCode Go catalog",
					groupId: "opencode",
					groupLabel: "OpenCode",
					groupHint: "Shared API key for Zen + Go catalogs"
				}
			})],
			capabilities: {
				openAiCompatTurnValidation: false,
				geminiThoughtSignatureSanitization: true,
				geminiThoughtSignatureModelHints: ["gemini"]
			},
			isModernModelRef: () => true
		});
	}
});
//#endregion
export { opencode_go_default as default };
