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
import { v as resolveOAuthApiKeyMarker } from "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../kilocode-shared-BZ_lCepT.js";
import { I as CHUTES_DEFAULT_MODEL_REF, L as CHUTES_MODEL_CATALOG, P as CHUTES_BASE_URL, R as buildChutesModelDefinition, z as discoverChutesModels } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import "../../provider-auth-ref-DP38Y-Dh.js";
import "../../provider-auth-input-jgQ_pIKA.js";
import { r as buildOauthProviderAuthResult } from "../../provider-auth-BmEupdE6.js";
import "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import { c as applyProviderConfigWithModelCatalogPreset, t as applyAgentDefaultModelPrimary } from "../../provider-onboarding-config-CE72ce3k.js";
import "../../provider-onboard-Oe-GdOUG.js";
import { n as loginChutes } from "../../provider-auth-login-D1oBN94U.js";
//#region extensions/chutes/onboard.ts
/**
* Apply Chutes provider configuration without changing the default model.
* Registers all catalog models and sets provider aliases (chutes-fast, etc.).
*/
function applyChutesProviderConfig(cfg) {
	return applyProviderConfigWithModelCatalogPreset(cfg, {
		providerId: "chutes",
		api: "openai-completions",
		baseUrl: CHUTES_BASE_URL,
		catalogModels: CHUTES_MODEL_CATALOG.map(buildChutesModelDefinition),
		aliases: [
			...CHUTES_MODEL_CATALOG.map((model) => `chutes/${model.id}`),
			{
				modelRef: "chutes-fast",
				alias: "chutes/zai-org/GLM-4.7-FP8"
			},
			{
				modelRef: "chutes-vision",
				alias: "chutes/chutesai/Mistral-Small-3.2-24B-Instruct-2506"
			},
			{
				modelRef: "chutes-pro",
				alias: "chutes/deepseek-ai/DeepSeek-V3.2-TEE"
			}
		]
	});
}
function applyChutesApiKeyConfig(cfg) {
	return applyAgentDefaultModelPrimary(applyChutesProviderConfig(cfg), CHUTES_DEFAULT_MODEL_REF);
}
//#endregion
//#region extensions/chutes/provider-catalog.ts
/**
* Build the Chutes provider with dynamic model discovery.
* Falls back to the static catalog on failure.
* Accepts an optional access token (API key or OAuth access token) for authenticated discovery.
*/
async function buildChutesProvider(accessToken) {
	const models = await discoverChutesModels(accessToken);
	return {
		baseUrl: CHUTES_BASE_URL,
		api: "openai-completions",
		models: models.length > 0 ? models : CHUTES_MODEL_CATALOG.map(buildChutesModelDefinition)
	};
}
//#endregion
//#region extensions/chutes/index.ts
const PROVIDER_ID = "chutes";
async function runChutesOAuth(ctx) {
	const isRemote = ctx.isRemote;
	const redirectUri = process.env.CHUTES_OAUTH_REDIRECT_URI?.trim() || "http://127.0.0.1:1456/oauth-callback";
	const scopes = process.env.CHUTES_OAUTH_SCOPES?.trim() || "openid profile chutes:invoke";
	const clientId = process.env.CHUTES_CLIENT_ID?.trim() || String(await ctx.prompter.text({
		message: "Enter Chutes OAuth client id",
		placeholder: "cid_xxx",
		validate: (value) => value?.trim() ? void 0 : "Required"
	})).trim();
	const clientSecret = process.env.CHUTES_CLIENT_SECRET?.trim() || void 0;
	await ctx.prompter.note(isRemote ? [
		"You are running in a remote/VPS environment.",
		"A URL will be shown for you to open in your LOCAL browser.",
		"After signing in, paste the redirect URL back here.",
		"",
		`Redirect URI: ${redirectUri}`
	].join("\n") : [
		"Browser will open for Chutes authentication.",
		"If the callback doesn't auto-complete, paste the redirect URL.",
		"",
		`Redirect URI: ${redirectUri}`
	].join("\n"), "Chutes OAuth");
	const progress = ctx.prompter.progress("Starting Chutes OAuth…");
	try {
		const { onAuth, onPrompt } = ctx.oauth.createVpsAwareHandlers({
			isRemote,
			prompter: ctx.prompter,
			runtime: ctx.runtime,
			spin: progress,
			openUrl: ctx.openUrl,
			localBrowserMessage: "Complete sign-in in browser…"
		});
		const creds = await loginChutes({
			app: {
				clientId,
				clientSecret,
				redirectUri,
				scopes: scopes.split(/\s+/).filter(Boolean)
			},
			manual: isRemote,
			onAuth,
			onPrompt,
			onProgress: (message) => progress.update(message)
		});
		progress.stop("Chutes OAuth complete");
		return buildOauthProviderAuthResult({
			providerId: PROVIDER_ID,
			defaultModel: CHUTES_DEFAULT_MODEL_REF,
			access: creds.access,
			refresh: creds.refresh,
			expires: creds.expires,
			email: typeof creds.email === "string" ? creds.email : void 0,
			credentialExtra: {
				clientId,
				..."accountId" in creds && typeof creds.accountId === "string" ? { accountId: creds.accountId } : {}
			},
			configPatch: applyChutesProviderConfig({}),
			notes: ["Chutes OAuth tokens auto-refresh. Re-run login if refresh fails or access is revoked.", `Redirect URI: ${redirectUri}`]
		});
	} catch (err) {
		progress.stop("Chutes OAuth failed");
		await ctx.prompter.note([
			"Trouble with OAuth?",
			"Verify CHUTES_CLIENT_ID (and CHUTES_CLIENT_SECRET if required).",
			`Verify the OAuth app redirect URI includes: ${redirectUri}`,
			"Chutes docs: https://chutes.ai/docs/sign-in-with-chutes/overview"
		].join("\n"), "OAuth help");
		throw err;
	}
}
var chutes_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Chutes Provider",
	description: "Bundled Chutes.ai provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Chutes",
			docsPath: "/providers/chutes",
			envVars: ["CHUTES_API_KEY", "CHUTES_OAUTH_TOKEN"],
			auth: [{
				id: "oauth",
				label: "Chutes OAuth",
				hint: "Browser sign-in",
				kind: "oauth",
				wizard: {
					choiceId: "chutes",
					choiceLabel: "Chutes (OAuth)",
					choiceHint: "Browser sign-in",
					groupId: "chutes",
					groupLabel: "Chutes",
					groupHint: "OAuth + API key"
				},
				run: async (ctx) => await runChutesOAuth(ctx)
			}, createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Chutes API key",
				hint: "Open-source models including Llama, DeepSeek, and more",
				optionKey: "chutesApiKey",
				flagName: "--chutes-api-key",
				envVar: "CHUTES_API_KEY",
				promptMessage: "Enter Chutes API key",
				noteTitle: "Chutes",
				noteMessage: ["Chutes provides access to leading open-source models including Llama, DeepSeek, and more.", "Get your API key at: https://chutes.ai/settings/api-keys"].join("\n"),
				defaultModel: CHUTES_DEFAULT_MODEL_REF,
				expectedProviders: ["chutes"],
				applyConfig: (cfg) => applyChutesApiKeyConfig(cfg),
				wizard: {
					choiceId: "chutes-api-key",
					choiceLabel: "Chutes API key",
					groupId: "chutes",
					groupLabel: "Chutes",
					groupHint: "OAuth + API key"
				}
			})],
			catalog: {
				order: "profile",
				run: async (ctx) => {
					const { apiKey, discoveryApiKey } = ctx.resolveProviderAuth(PROVIDER_ID, { oauthMarker: resolveOAuthApiKeyMarker(PROVIDER_ID) });
					if (!apiKey) return null;
					return { provider: {
						...await buildChutesProvider(discoveryApiKey),
						apiKey
					} };
				}
			}
		});
	}
});
//#endregion
export { chutes_default as default };
