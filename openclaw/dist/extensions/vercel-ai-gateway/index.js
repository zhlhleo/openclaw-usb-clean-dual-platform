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
import "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as buildVercelAiGatewayProvider } from "../../provider-catalog-BYJ6KtCu.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
import "../../provider-onboard-Oe-GdOUG.js";
import { n as applyVercelAiGatewayConfig, t as VERCEL_AI_GATEWAY_DEFAULT_MODEL_REF } from "../../onboard-BnrE4il4.js";
//#region extensions/vercel-ai-gateway/index.ts
const PROVIDER_ID = "vercel-ai-gateway";
var vercel_ai_gateway_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Vercel AI Gateway Provider",
	description: "Bundled Vercel AI Gateway provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Vercel AI Gateway",
			docsPath: "/providers/vercel-ai-gateway",
			envVars: ["AI_GATEWAY_API_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Vercel AI Gateway API key",
				hint: "API key",
				optionKey: "aiGatewayApiKey",
				flagName: "--ai-gateway-api-key",
				envVar: "AI_GATEWAY_API_KEY",
				promptMessage: "Enter Vercel AI Gateway API key",
				defaultModel: VERCEL_AI_GATEWAY_DEFAULT_MODEL_REF,
				expectedProviders: ["vercel-ai-gateway"],
				applyConfig: (cfg) => applyVercelAiGatewayConfig(cfg),
				wizard: {
					choiceId: "ai-gateway-api-key",
					choiceLabel: "Vercel AI Gateway API key",
					groupId: "ai-gateway",
					groupLabel: "Vercel AI Gateway",
					groupHint: "API key"
				}
			})],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildVercelAiGatewayProvider
				})
			}
		});
	}
});
//#endregion
export { vercel_ai_gateway_default as default };
