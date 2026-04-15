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
import "../../profiles-CpZYCV3C.js";
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
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import "../../shared-D-Woqi_Z.js";
import { t as transcribeOpenAiCompatibleAudio } from "../../media-understanding-Dwc-uk1w.js";
import { i as applyProviderConfigWithDefaultModelPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/mistral/media-understanding-provider.ts
const DEFAULT_MISTRAL_AUDIO_BASE_URL = "https://api.mistral.ai/v1";
const DEFAULT_MISTRAL_AUDIO_MODEL = "voxtral-mini-latest";
const mistralMediaUnderstandingProvider = {
	id: "mistral",
	capabilities: ["audio"],
	transcribeAudio: async (req) => await transcribeOpenAiCompatibleAudio({
		...req,
		baseUrl: req.baseUrl ?? DEFAULT_MISTRAL_AUDIO_BASE_URL,
		defaultBaseUrl: DEFAULT_MISTRAL_AUDIO_BASE_URL,
		defaultModel: DEFAULT_MISTRAL_AUDIO_MODEL
	})
};
//#endregion
//#region extensions/mistral/model-definitions.ts
const MISTRAL_BASE_URL = "https://api.mistral.ai/v1";
const MISTRAL_DEFAULT_MODEL_ID = "mistral-large-latest";
`${MISTRAL_DEFAULT_MODEL_ID}`;
const MISTRAL_DEFAULT_CONTEXT_WINDOW = 262144;
const MISTRAL_DEFAULT_MAX_TOKENS = 262144;
const MISTRAL_DEFAULT_COST = {
	input: 0,
	output: 0,
	cacheRead: 0,
	cacheWrite: 0
};
function buildMistralModelDefinition() {
	return {
		id: MISTRAL_DEFAULT_MODEL_ID,
		name: "Mistral Large",
		reasoning: false,
		input: ["text", "image"],
		cost: MISTRAL_DEFAULT_COST,
		contextWindow: MISTRAL_DEFAULT_CONTEXT_WINDOW,
		maxTokens: MISTRAL_DEFAULT_MAX_TOKENS
	};
}
//#endregion
//#region extensions/mistral/onboard.ts
const MISTRAL_DEFAULT_MODEL_REF = `mistral/${MISTRAL_DEFAULT_MODEL_ID}`;
function applyMistralPreset(cfg, primaryModelRef) {
	return applyProviderConfigWithDefaultModelPreset(cfg, {
		providerId: "mistral",
		api: "openai-completions",
		baseUrl: MISTRAL_BASE_URL,
		defaultModel: buildMistralModelDefinition(),
		defaultModelId: MISTRAL_DEFAULT_MODEL_ID,
		aliases: [{
			modelRef: MISTRAL_DEFAULT_MODEL_REF,
			alias: "Mistral"
		}],
		primaryModelRef
	});
}
function applyMistralConfig(cfg) {
	return applyMistralPreset(cfg, MISTRAL_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/mistral/index.ts
const PROVIDER_ID = "mistral";
var mistral_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Mistral Provider",
	description: "Bundled Mistral provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Mistral",
			docsPath: "/providers/models",
			envVars: ["MISTRAL_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Mistral API key",
				hint: "API key",
				optionKey: "mistralApiKey",
				flagName: "--mistral-api-key",
				envVar: "MISTRAL_API_KEY",
				promptMessage: "Enter Mistral API key",
				defaultModel: MISTRAL_DEFAULT_MODEL_REF,
				expectedProviders: ["mistral"],
				applyConfig: (cfg) => applyMistralConfig(cfg),
				wizard: {
					choiceId: "mistral-api-key",
					choiceLabel: "Mistral API key",
					groupId: "mistral",
					groupLabel: "Mistral AI",
					groupHint: "API key"
				}
			})],
			capabilities: {
				transcriptToolCallIdMode: "strict9",
				transcriptToolCallIdModelHints: [
					"mistral",
					"mixtral",
					"codestral",
					"pixtral",
					"devstral",
					"ministral",
					"mistralai"
				]
			}
		});
		api.registerMediaUnderstandingProvider(mistralMediaUnderstandingProvider);
	}
});
//#endregion
export { mistral_default as default };
