import "../logger-CoEtkjhn.js";
import "../paths-GHJ97ebE.js";
import "../tmp-openclaw-dir-idKIOMmb.js";
import "../theme-CdOoMzRk.js";
import "../globals-41sdSaKv.js";
import "../subsystem-VzQeL-96.js";
import "../ansi-BEJF8NKS.js";
import "../utils-seFh26xW.js";
import "../paths-DN8rtGcC.js";
import "../boundary-path-Dm0QJ7-y.js";
import "../boundary-file-read-BGs2p0f_.js";
import "../logger-DtlnPe_E.js";
import "../exec-BnXF7JCz.js";
import "../workspace-DFURCHD1.js";
import "../agent-scope-D8nGiwMS.js";
import "../model-selection-JWhBHRyf.js";
import "../file-lock-DCUu-l3H.js";
import "../profiles-CpZYCV3C.js";
import "../provider-env-vars-B47GY0nJ.js";
import "../anthropic-vertex-provider-C-wBc4Q0.js";
import "../kilocode-shared-BZ_lCepT.js";
import { c as VLLM_DEFAULT_API_KEY_ENV_VAR, d as VLLM_PROVIDER_LABEL, l as VLLM_DEFAULT_BASE_URL, u as VLLM_MODEL_PLACEHOLDER } from "../provider-models-mDSVWqBj.js";
import "../provider-model-allowlist-D9PqLk45.js";
import { t as OLLAMA_DEFAULT_BASE_URL } from "../ollama-defaults-DH_k13rf.js";
import "../retry-OtOVTYjJ.js";
import { a as SELF_HOSTED_DEFAULT_COST, i as SELF_HOSTED_DEFAULT_CONTEXT_WINDOW, n as buildSglangProvider, o as SELF_HOSTED_DEFAULT_MAX_TOKENS, r as buildVllmProvider, t as buildOllamaProvider } from "../models-config.providers.discovery-BqR9p-d6.js";
import "../provider-catalog-ER-5YjHU.js";
import "../provider-catalog-Onedvhpf.js";
import "../provider-catalog-BYJ6KtCu.js";
import "../provider-auth-helpers-DVW2Ef-v.js";
import "../setup-binary-dR9y6RdL.js";
import "../upsert-with-lock-SoDhiIZP.js";
import "../setup-browser-BaHrNih7.js";
import { i as promptAndConfigureOllama, n as configureOllamaNonInteractive, r as ensureOllamaModelPulled, t as OLLAMA_DEFAULT_MODEL } from "../provider-ollama-setup-BpMEpt5C.js";
import { a as promptAndConfigureOpenAICompatibleSelfHostedProviderAuth, i as promptAndConfigureOpenAICompatibleSelfHostedProvider, n as configureOpenAICompatibleSelfHostedProviderNonInteractive, r as discoverOpenAICompatibleSelfHostedProvider, t as applyProviderDefaultModel } from "../provider-self-hosted-setup-TE9mvg91.js";
//#region src/plugins/provider-vllm-setup.ts
const VLLM_DEFAULT_CONTEXT_WINDOW = SELF_HOSTED_DEFAULT_CONTEXT_WINDOW;
const VLLM_DEFAULT_MAX_TOKENS = SELF_HOSTED_DEFAULT_MAX_TOKENS;
const VLLM_DEFAULT_COST = SELF_HOSTED_DEFAULT_COST;
async function promptAndConfigureVllm(params) {
	const result = await promptAndConfigureOpenAICompatibleSelfHostedProvider({
		cfg: params.cfg,
		prompter: params.prompter,
		providerId: "vllm",
		providerLabel: VLLM_PROVIDER_LABEL,
		defaultBaseUrl: VLLM_DEFAULT_BASE_URL,
		defaultApiKeyEnvVar: VLLM_DEFAULT_API_KEY_ENV_VAR,
		modelPlaceholder: VLLM_MODEL_PLACEHOLDER
	});
	return {
		config: result.config,
		modelId: result.modelId,
		modelRef: result.modelRef
	};
}
//#endregion
export { OLLAMA_DEFAULT_BASE_URL, OLLAMA_DEFAULT_MODEL, SELF_HOSTED_DEFAULT_CONTEXT_WINDOW, SELF_HOSTED_DEFAULT_COST, SELF_HOSTED_DEFAULT_MAX_TOKENS, VLLM_DEFAULT_BASE_URL, VLLM_DEFAULT_CONTEXT_WINDOW, VLLM_DEFAULT_COST, VLLM_DEFAULT_MAX_TOKENS, applyProviderDefaultModel, buildOllamaProvider, buildSglangProvider, buildVllmProvider, configureOllamaNonInteractive, configureOpenAICompatibleSelfHostedProviderNonInteractive, discoverOpenAICompatibleSelfHostedProvider, ensureOllamaModelPulled, promptAndConfigureOllama, promptAndConfigureOpenAICompatibleSelfHostedProvider, promptAndConfigureOpenAICompatibleSelfHostedProviderAuth, promptAndConfigureVllm };
