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
import { i as coerceSecretRef } from "../../types.secrets-DKOIsGys.js";
import "../../file-lock-DCUu-l3H.js";
import { t as normalizeOptionalSecretInput } from "../../normalize-secret-input-Rf8mhxjI.js";
import { a as upsertAuthProfile, c as ensureAuthProfileStore, n as listProfilesForProvider } from "../../profiles-CpZYCV3C.js";
import "../../repair-f7r8_Mh5.js";
import "../../provider-env-vars-B47GY0nJ.js";
import { g as resolveNonEnvSecretRefApiKeyMarker } from "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../kilocode-shared-BZ_lCepT.js";
import { G as CLOUDFLARE_AI_GATEWAY_DEFAULT_MODEL_REF, K as buildCloudflareAiGatewayModelDefinition, q as resolveCloudflareAiGatewayBaseUrl } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import { i as normalizeApiKeyInput, n as ensureApiKeyFromOptionEnvOrPrompt, s as validateApiKeyInput } from "../../provider-auth-input-jgQ_pIKA.js";
import "../../provider-auth-BmEupdE6.js";
import { n as buildApiKeyCredential, t as applyAuthProfileConfig } from "../../provider-auth-helpers-DVW2Ef-v.js";
import "../../provider-api-key-auth-BtDrGQ-x.js";
import "../../provider-onboard-Oe-GdOUG.js";
import { n as buildCloudflareAiGatewayConfigPatch, t as applyCloudflareAiGatewayConfig } from "../../onboard-05748h2r.js";
//#region extensions/cloudflare-ai-gateway/index.ts
const PROVIDER_ID = "cloudflare-ai-gateway";
const PROVIDER_ENV_VAR = "CLOUDFLARE_AI_GATEWAY_API_KEY";
const PROFILE_ID = "cloudflare-ai-gateway:default";
function resolveApiKeyFromCredential(cred) {
	if (!cred || cred.type !== "api_key") return;
	const keyRef = coerceSecretRef(cred.keyRef);
	if (keyRef && keyRef.id.trim()) return keyRef.source === "env" ? keyRef.id.trim() : resolveNonEnvSecretRefApiKeyMarker(keyRef.source);
	return cred.key?.trim() || void 0;
}
function resolveMetadataFromCredential(cred) {
	if (!cred || cred.type !== "api_key") return {};
	return {
		accountId: cred?.metadata?.accountId?.trim() || void 0,
		gatewayId: cred?.metadata?.gatewayId?.trim() || void 0
	};
}
async function resolveCloudflareGatewayMetadataInteractive(ctx) {
	let accountId = ctx.accountId?.trim() ?? "";
	let gatewayId = ctx.gatewayId?.trim() ?? "";
	if (!accountId) {
		const value = await ctx.prompter.text({
			message: "Enter Cloudflare Account ID",
			validate: (val) => String(val ?? "").trim() ? void 0 : "Account ID is required"
		});
		accountId = String(value ?? "").trim();
	}
	if (!gatewayId) {
		const value = await ctx.prompter.text({
			message: "Enter Cloudflare AI Gateway ID",
			validate: (val) => String(val ?? "").trim() ? void 0 : "Gateway ID is required"
		});
		gatewayId = String(value ?? "").trim();
	}
	return {
		accountId,
		gatewayId
	};
}
var cloudflare_ai_gateway_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Cloudflare AI Gateway Provider",
	description: "Bundled Cloudflare AI Gateway provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Cloudflare AI Gateway",
			docsPath: "/providers/cloudflare-ai-gateway",
			envVars: ["CLOUDFLARE_AI_GATEWAY_API_KEY"],
			auth: [{
				id: "api-key",
				label: "Cloudflare AI Gateway",
				hint: "Account ID + Gateway ID + API key",
				kind: "api_key",
				wizard: {
					choiceId: "cloudflare-ai-gateway-api-key",
					choiceLabel: "Cloudflare AI Gateway",
					choiceHint: "Account ID + Gateway ID + API key",
					groupId: "cloudflare-ai-gateway",
					groupLabel: "Cloudflare AI Gateway",
					groupHint: "Account ID + Gateway ID + API key"
				},
				run: async (ctx) => {
					const metadata = await resolveCloudflareGatewayMetadataInteractive({
						accountId: normalizeOptionalSecretInput(ctx.opts?.cloudflareAiGatewayAccountId),
						gatewayId: normalizeOptionalSecretInput(ctx.opts?.cloudflareAiGatewayGatewayId),
						prompter: ctx.prompter
					});
					let capturedSecretInput;
					let capturedCredential = false;
					let capturedMode;
					await ensureApiKeyFromOptionEnvOrPrompt({
						token: normalizeOptionalSecretInput(ctx.opts?.cloudflareAiGatewayApiKey),
						tokenProvider: "cloudflare-ai-gateway",
						secretInputMode: ctx.allowSecretRefPrompt === false ? ctx.secretInputMode ?? "plaintext" : ctx.secretInputMode,
						config: ctx.config,
						expectedProviders: [PROVIDER_ID],
						provider: PROVIDER_ID,
						envLabel: PROVIDER_ENV_VAR,
						promptMessage: "Enter Cloudflare AI Gateway API key",
						normalize: normalizeApiKeyInput,
						validate: validateApiKeyInput,
						prompter: ctx.prompter,
						setCredential: async (apiKey, mode) => {
							capturedSecretInput = apiKey;
							capturedCredential = true;
							capturedMode = mode;
						}
					});
					if (!capturedCredential) throw new Error("Missing Cloudflare AI Gateway API key.");
					return {
						profiles: [{
							profileId: PROFILE_ID,
							credential: buildApiKeyCredential(PROVIDER_ID, capturedSecretInput ?? "", {
								accountId: metadata.accountId,
								gatewayId: metadata.gatewayId
							}, capturedMode ? { secretInputMode: capturedMode } : void 0)
						}],
						configPatch: buildCloudflareAiGatewayConfigPatch(metadata),
						defaultModel: CLOUDFLARE_AI_GATEWAY_DEFAULT_MODEL_REF
					};
				},
				runNonInteractive: async (ctx) => {
					const storedMetadata = resolveMetadataFromCredential(ensureAuthProfileStore(ctx.agentDir, { allowKeychainPrompt: false }).profiles[PROFILE_ID]);
					const accountId = normalizeOptionalSecretInput(ctx.opts.cloudflareAiGatewayAccountId) ?? storedMetadata.accountId;
					const gatewayId = normalizeOptionalSecretInput(ctx.opts.cloudflareAiGatewayGatewayId) ?? storedMetadata.gatewayId;
					if (!accountId || !gatewayId) {
						ctx.runtime.error("Cloudflare AI Gateway setup requires --cloudflare-ai-gateway-account-id and --cloudflare-ai-gateway-gateway-id.");
						ctx.runtime.exit(1);
						return null;
					}
					const resolved = await ctx.resolveApiKey({
						provider: PROVIDER_ID,
						flagValue: normalizeOptionalSecretInput(ctx.opts.cloudflareAiGatewayApiKey),
						flagName: "--cloudflare-ai-gateway-api-key",
						envVar: PROVIDER_ENV_VAR
					});
					if (!resolved) return null;
					if (resolved.source !== "profile") {
						const credential = ctx.toApiKeyCredential({
							provider: PROVIDER_ID,
							resolved,
							metadata: {
								accountId,
								gatewayId
							}
						});
						if (!credential) return null;
						upsertAuthProfile({
							profileId: PROFILE_ID,
							credential,
							agentDir: ctx.agentDir
						});
					}
					return applyCloudflareAiGatewayConfig(applyAuthProfileConfig(ctx.config, {
						profileId: PROFILE_ID,
						provider: PROVIDER_ID,
						mode: "api_key"
					}), {
						accountId,
						gatewayId
					});
				}
			}],
			catalog: {
				order: "late",
				run: async (ctx) => {
					const authStore = ensureAuthProfileStore(ctx.agentDir, { allowKeychainPrompt: false });
					const envManagedApiKey = ctx.env[PROVIDER_ENV_VAR]?.trim() ? PROVIDER_ENV_VAR : void 0;
					for (const profileId of listProfilesForProvider(authStore, PROVIDER_ID)) {
						const cred = authStore.profiles[profileId];
						if (!cred || cred.type !== "api_key") continue;
						const apiKey = envManagedApiKey ?? resolveApiKeyFromCredential(cred);
						if (!apiKey) continue;
						const accountId = cred.metadata?.accountId?.trim();
						const gatewayId = cred.metadata?.gatewayId?.trim();
						if (!accountId || !gatewayId) continue;
						const baseUrl = resolveCloudflareAiGatewayBaseUrl({
							accountId,
							gatewayId
						});
						if (!baseUrl) continue;
						return { provider: {
							baseUrl,
							api: "anthropic-messages",
							apiKey,
							models: [buildCloudflareAiGatewayModelDefinition()]
						} };
					}
					return null;
				}
			}
		});
	}
});
//#endregion
export { cloudflare_ai_gateway_default as default };
