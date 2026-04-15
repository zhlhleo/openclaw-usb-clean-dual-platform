import "../../redact-BDinS1q9.js";
import "../../logger-CoEtkjhn.js";
import "../../paths-GHJ97ebE.js";
import "../../tmp-openclaw-dir-idKIOMmb.js";
import "../../theme-CdOoMzRk.js";
import "../../globals-41sdSaKv.js";
import "../../subsystem-VzQeL-96.js";
import "../../ansi-BEJF8NKS.js";
import "../../boolean-C3GkJetE.js";
import "../../env-mRJH5TpF.js";
import { d as isRecord } from "../../utils-seFh26xW.js";
import "../../paths-DN8rtGcC.js";
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
import "../../profiles-CpZYCV3C.js";
import "../../repair-f7r8_Mh5.js";
import "../../message-channel-Df2WMfuH.js";
import "../../provider-env-vars-B47GY0nJ.js";
import "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import { n as KIMI_CODING_DEFAULT_MODEL_ID, r as buildKimiCodingProvider, t as KIMI_CODING_BASE_URL } from "../../provider-catalog-DK_GtbjL.js";
import "../../diagnostic-Oa1s9LIh.js";
import "../../text-runtime-CzoM2Rlj.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { i as applyProviderConfigWithDefaultModelPreset } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
//#region extensions/kimi-coding/onboard.ts
const KIMI_MODEL_REF = `kimi/${KIMI_CODING_DEFAULT_MODEL_ID}`;
const KIMI_CODING_MODEL_REF = KIMI_MODEL_REF;
function resolveKimiCodingDefaultModel() {
	return buildKimiCodingProvider().models[0];
}
function applyKimiCodingPreset(cfg, primaryModelRef) {
	const defaultModel = resolveKimiCodingDefaultModel();
	if (!defaultModel) return cfg;
	return applyProviderConfigWithDefaultModelPreset(cfg, {
		providerId: "kimi",
		api: "anthropic-messages",
		baseUrl: KIMI_CODING_BASE_URL,
		defaultModel,
		defaultModelId: KIMI_CODING_DEFAULT_MODEL_ID,
		aliases: [{
			modelRef: KIMI_MODEL_REF,
			alias: "Kimi"
		}],
		primaryModelRef
	});
}
function applyKimiCodeConfig(cfg) {
	return applyKimiCodingPreset(cfg, KIMI_MODEL_REF);
}
//#endregion
//#region extensions/kimi-coding/index.ts
const PLUGIN_ID = "kimi";
const PROVIDER_ID = "kimi";
var kimi_coding_default = definePluginEntry({
	id: PLUGIN_ID,
	name: "Kimi Provider",
	description: "Bundled Kimi provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Kimi",
			aliases: ["kimi-code", "kimi-coding"],
			docsPath: "/providers/moonshot",
			envVars: ["KIMI_API_KEY", "KIMICODE_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Kimi API key (subscription)",
				hint: "Kimi K2.5 + Kimi",
				optionKey: "kimiCodeApiKey",
				flagName: "--kimi-code-api-key",
				envVar: "KIMI_API_KEY",
				promptMessage: "Enter Kimi API key",
				defaultModel: KIMI_CODING_MODEL_REF,
				expectedProviders: [
					"kimi",
					"kimi-code",
					"kimi-coding"
				],
				applyConfig: (cfg) => applyKimiCodeConfig(cfg),
				noteMessage: ["Kimi uses a dedicated coding endpoint and API key.", "Get your API key at: https://www.kimi.com/code/en"].join("\n"),
				noteTitle: "Kimi",
				wizard: {
					choiceId: "kimi-code-api-key",
					choiceLabel: "Kimi API key (subscription)",
					groupId: "moonshot",
					groupLabel: "Moonshot AI (Kimi K2.5)",
					groupHint: "Kimi K2.5 + Kimi"
				}
			})],
			catalog: {
				order: "simple",
				run: async (ctx) => {
					const apiKey = ctx.resolveProviderApiKey(PROVIDER_ID).apiKey;
					if (!apiKey) return null;
					const explicitProvider = ctx.config.models?.providers?.[PROVIDER_ID];
					const builtInProvider = buildKimiCodingProvider();
					const explicitBaseUrl = typeof explicitProvider?.baseUrl === "string" ? explicitProvider.baseUrl.trim() : "";
					const explicitHeaders = isRecord(explicitProvider?.headers) ? explicitProvider.headers : void 0;
					return { provider: {
						...builtInProvider,
						...explicitBaseUrl ? { baseUrl: explicitBaseUrl } : {},
						...explicitHeaders ? { headers: {
							...builtInProvider.headers,
							...explicitHeaders
						} } : {},
						apiKey
					} };
				}
			},
			capabilities: { preserveAnthropicThinkingSignatures: false }
		});
	}
});
//#endregion
export { kimi_coding_default as default };
