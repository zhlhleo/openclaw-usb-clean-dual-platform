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
import { s as CLAUDE_CLI_PROFILE_ID } from "../../paths-DN8rtGcC.js";
import "../../boundary-path-Dm0QJ7-y.js";
import "../../boundary-file-read-BGs2p0f_.js";
import "../../logger-DtlnPe_E.js";
import "../../exec-BnXF7JCz.js";
import "../../workspace-DFURCHD1.js";
import "../../agent-scope-D8nGiwMS.js";
import "../../model-selection-JWhBHRyf.js";
import "../../host-env-security-Du6GREqL.js";
import "../../shell-env-CcwPX9am.js";
import "../../version-CMPQj7au.js";
import "../../ip-CndEBNxP.js";
import { t as parseDurationMs } from "../../parse-duration-DN8r2ciT.js";
import "../../file-lock-DCUu-l3H.js";
import { n as normalizeSecretInput } from "../../normalize-secret-input-Rf8mhxjI.js";
import { a as upsertAuthProfile, n as listProfilesForProvider } from "../../profiles-CpZYCV3C.js";
import { n as suggestOAuthProfileIdForLegacyDefault } from "../../repair-f7r8_Mh5.js";
import { t as formatCliCommand } from "../../command-format-DRptdHvm.js";
import "../../provider-env-vars-B47GY0nJ.js";
import "../../model-auth-env-p0NyXNbZ.js";
import "../../anthropic-vertex-provider-C-wBc4Q0.js";
import "../../kilocode-shared-BZ_lCepT.js";
import { at as normalizeModelCompat } from "../../provider-models-mDSVWqBj.js";
import "../../provider-model-allowlist-D9PqLk45.js";
import "../../retry-OtOVTYjJ.js";
import "../../cli-runtime-GxVE-iQU.js";
import "../../ssrf-CrYPbrLn.js";
import "../../fetch-guard-dWFaYrKn.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import { t as resolveSecretInputModeForEnvSelection } from "../../provider-auth-mode-BvaZqry4.js";
import { n as promptSecretRefForSetup } from "../../provider-auth-ref-DP38Y-Dh.js";
import { a as normalizeSecretInputModeInput } from "../../provider-auth-input-jgQ_pIKA.js";
import { a as validateAnthropicSetupToken, i as buildTokenProfileId } from "../../provider-auth-BmEupdE6.js";
import { t as applyAuthProfileConfig } from "../../provider-auth-helpers-DVW2Ef-v.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-BtDrGQ-x.js";
import "../../shared-D-Woqi_Z.js";
import { a as fetchClaudeUsage } from "../../provider-usage-dSfkOdUr.js";
import { n as describeImageWithModel, r as describeImagesWithModel } from "../../media-understanding-Dwc-uk1w.js";
//#region extensions/anthropic/media-understanding-provider.ts
const anthropicMediaUnderstandingProvider = {
	id: "anthropic",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
//#region extensions/anthropic/index.ts
const PROVIDER_ID = "anthropic";
const DEFAULT_ANTHROPIC_MODEL = "anthropic/claude-sonnet-4-6";
const ANTHROPIC_OPUS_46_MODEL_ID = "claude-opus-4-6";
const ANTHROPIC_OPUS_46_DOT_MODEL_ID = "claude-opus-4.6";
const ANTHROPIC_OPUS_TEMPLATE_MODEL_IDS = ["claude-opus-4-5", "claude-opus-4.5"];
const ANTHROPIC_SONNET_46_MODEL_ID = "claude-sonnet-4-6";
const ANTHROPIC_SONNET_46_DOT_MODEL_ID = "claude-sonnet-4.6";
const ANTHROPIC_SONNET_TEMPLATE_MODEL_IDS = ["claude-sonnet-4-5", "claude-sonnet-4.5"];
const ANTHROPIC_MODERN_MODEL_PREFIXES = [
	"claude-opus-4-6",
	"claude-sonnet-4-6",
	"claude-opus-4-5",
	"claude-sonnet-4-5",
	"claude-haiku-4-5"
];
const ANTHROPIC_OAUTH_ALLOWLIST = [
	"anthropic/claude-sonnet-4-6",
	"anthropic/claude-opus-4-6",
	"anthropic/claude-opus-4-5",
	"anthropic/claude-sonnet-4-5",
	"anthropic/claude-haiku-4-5"
];
function cloneFirstTemplateModel(params) {
	const trimmedModelId = params.modelId.trim();
	for (const templateId of [...new Set(params.templateIds)].filter(Boolean)) {
		const template = params.ctx.modelRegistry.find(PROVIDER_ID, templateId);
		if (!template) continue;
		return normalizeModelCompat({
			...template,
			id: trimmedModelId,
			name: trimmedModelId
		});
	}
}
function resolveAnthropic46ForwardCompatModel(params) {
	const trimmedModelId = params.ctx.modelId.trim();
	const lower = trimmedModelId.toLowerCase();
	if (!(lower === params.dashModelId || lower === params.dotModelId || lower.startsWith(`${params.dashModelId}-`) || lower.startsWith(`${params.dotModelId}-`))) return;
	const templateIds = [];
	if (lower.startsWith(params.dashModelId)) templateIds.push(lower.replace(params.dashModelId, params.dashTemplateId));
	if (lower.startsWith(params.dotModelId)) templateIds.push(lower.replace(params.dotModelId, params.dotTemplateId));
	templateIds.push(...params.fallbackTemplateIds);
	return cloneFirstTemplateModel({
		modelId: trimmedModelId,
		templateIds,
		ctx: params.ctx
	});
}
function resolveAnthropicForwardCompatModel(ctx) {
	return resolveAnthropic46ForwardCompatModel({
		ctx,
		dashModelId: ANTHROPIC_OPUS_46_MODEL_ID,
		dotModelId: ANTHROPIC_OPUS_46_DOT_MODEL_ID,
		dashTemplateId: "claude-opus-4-5",
		dotTemplateId: "claude-opus-4.5",
		fallbackTemplateIds: ANTHROPIC_OPUS_TEMPLATE_MODEL_IDS
	}) ?? resolveAnthropic46ForwardCompatModel({
		ctx,
		dashModelId: ANTHROPIC_SONNET_46_MODEL_ID,
		dotModelId: ANTHROPIC_SONNET_46_DOT_MODEL_ID,
		dashTemplateId: "claude-sonnet-4-5",
		dotTemplateId: "claude-sonnet-4.5",
		fallbackTemplateIds: ANTHROPIC_SONNET_TEMPLATE_MODEL_IDS
	});
}
function matchesAnthropicModernModel(modelId) {
	const lower = modelId.trim().toLowerCase();
	return ANTHROPIC_MODERN_MODEL_PREFIXES.some((prefix) => lower.startsWith(prefix));
}
function buildAnthropicAuthDoctorHint(params) {
	const legacyProfileId = params.profileId ?? "anthropic:default";
	const suggested = suggestOAuthProfileIdForLegacyDefault({
		cfg: params.config,
		store: params.store,
		provider: PROVIDER_ID,
		legacyProfileId
	});
	if (!suggested || suggested === legacyProfileId) return "";
	const storeOauthProfiles = listProfilesForProvider(params.store, PROVIDER_ID).filter((id) => params.store.profiles[id]?.type === "oauth").join(", ");
	const cfgMode = params.config?.auth?.profiles?.[legacyProfileId]?.mode;
	const cfgProvider = params.config?.auth?.profiles?.[legacyProfileId]?.provider;
	return [
		"Doctor hint (for GitHub issue):",
		`- provider: ${PROVIDER_ID}`,
		`- config: ${legacyProfileId}${cfgProvider || cfgMode ? ` (provider=${cfgProvider ?? "?"}, mode=${cfgMode ?? "?"})` : ""}`,
		`- auth store oauth profiles: ${storeOauthProfiles || "(none)"}`,
		`- suggested profile: ${suggested}`,
		`Fix: run "${formatCliCommand("openclaw doctor --yes")}"`
	].join("\n");
}
async function runAnthropicSetupToken(ctx) {
	await ctx.prompter.note(["Run `claude setup-token` in your terminal.", "Then paste the generated token below."].join("\n"), "Anthropic setup-token");
	const requestedSecretInputMode = normalizeSecretInputModeInput(ctx.secretInputMode);
	const selectedMode = ctx.allowSecretRefPrompt ? await resolveSecretInputModeForEnvSelection({
		prompter: ctx.prompter,
		explicitMode: requestedSecretInputMode,
		copy: {
			modeMessage: "How do you want to provide this setup token?",
			plaintextLabel: "Paste setup token now",
			plaintextHint: "Stores the token directly in the auth profile"
		}
	}) : "plaintext";
	let token = "";
	let tokenRef;
	if (selectedMode === "ref") {
		const resolved = await promptSecretRefForSetup({
			provider: "anthropic-setup-token",
			config: ctx.config,
			prompter: ctx.prompter,
			preferredEnvVar: "ANTHROPIC_SETUP_TOKEN",
			copy: {
				sourceMessage: "Where is this Anthropic setup token stored?",
				envVarPlaceholder: "ANTHROPIC_SETUP_TOKEN"
			}
		});
		token = resolved.resolvedValue.trim();
		tokenRef = resolved.ref;
	} else {
		const tokenRaw = await ctx.prompter.text({
			message: "Paste Anthropic setup-token",
			validate: (value) => validateAnthropicSetupToken(String(value ?? ""))
		});
		token = String(tokenRaw ?? "").trim();
	}
	const tokenError = validateAnthropicSetupToken(token);
	if (tokenError) throw new Error(tokenError);
	const profileNameRaw = await ctx.prompter.text({
		message: "Token name (blank = default)",
		placeholder: "default"
	});
	return { profiles: [{
		profileId: buildTokenProfileId({
			provider: PROVIDER_ID,
			name: String(profileNameRaw ?? "")
		}),
		credential: {
			type: "token",
			provider: PROVIDER_ID,
			token,
			...tokenRef ? { tokenRef } : {}
		}
	}] };
}
async function runAnthropicSetupTokenNonInteractive(ctx) {
	const provider = ctx.opts.tokenProvider?.trim().toLowerCase();
	if (!provider) {
		ctx.runtime.error("Missing --token-provider for --auth-choice token.");
		ctx.runtime.exit(1);
		return null;
	}
	if (provider !== PROVIDER_ID) {
		ctx.runtime.error("Only --token-provider anthropic is supported for --auth-choice token.");
		ctx.runtime.exit(1);
		return null;
	}
	const token = normalizeSecretInput(ctx.opts.token);
	if (!token) {
		ctx.runtime.error("Missing --token for --auth-choice token.");
		ctx.runtime.exit(1);
		return null;
	}
	const tokenError = validateAnthropicSetupToken(token);
	if (tokenError) {
		ctx.runtime.error(tokenError);
		ctx.runtime.exit(1);
		return null;
	}
	let expires;
	const expiresInRaw = ctx.opts.tokenExpiresIn?.trim();
	if (expiresInRaw) try {
		expires = Date.now() + parseDurationMs(expiresInRaw, { defaultUnit: "d" });
	} catch (err) {
		ctx.runtime.error(`Invalid --token-expires-in: ${String(err)}`);
		ctx.runtime.exit(1);
		return null;
	}
	const profileId = ctx.opts.tokenProfileId?.trim() || buildTokenProfileId({
		provider: PROVIDER_ID,
		name: ""
	});
	upsertAuthProfile({
		profileId,
		agentDir: ctx.agentDir,
		credential: {
			type: "token",
			provider: PROVIDER_ID,
			token,
			...expires ? { expires } : {}
		}
	});
	return applyAuthProfileConfig(ctx.config, {
		profileId,
		provider: PROVIDER_ID,
		mode: "token"
	});
}
var anthropic_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "Anthropic Provider",
	description: "Bundled Anthropic provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Anthropic",
			docsPath: "/providers/models",
			envVars: ["ANTHROPIC_OAUTH_TOKEN", "ANTHROPIC_API_KEY"],
			deprecatedProfileIds: [CLAUDE_CLI_PROFILE_ID],
			auth: [{
				id: "setup-token",
				label: "setup-token (claude)",
				hint: "Paste a setup-token from `claude setup-token`",
				kind: "token",
				wizard: {
					choiceId: "token",
					choiceLabel: "Anthropic token (paste setup-token)",
					choiceHint: "Run `claude setup-token` elsewhere, then paste the token here",
					groupId: "anthropic",
					groupLabel: "Anthropic",
					groupHint: "setup-token + API key",
					modelAllowlist: {
						allowedKeys: [...ANTHROPIC_OAUTH_ALLOWLIST],
						initialSelections: ["anthropic/claude-sonnet-4-6"],
						message: "Anthropic OAuth models"
					}
				},
				run: async (ctx) => await runAnthropicSetupToken(ctx),
				runNonInteractive: async (ctx) => await runAnthropicSetupTokenNonInteractive({
					config: ctx.config,
					opts: ctx.opts,
					runtime: ctx.runtime,
					agentDir: ctx.agentDir
				})
			}, createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "Anthropic API key",
				hint: "Direct Anthropic API key",
				optionKey: "anthropicApiKey",
				flagName: "--anthropic-api-key",
				envVar: "ANTHROPIC_API_KEY",
				promptMessage: "Enter Anthropic API key",
				defaultModel: DEFAULT_ANTHROPIC_MODEL,
				expectedProviders: ["anthropic"],
				wizard: {
					choiceId: "apiKey",
					choiceLabel: "Anthropic API key",
					groupId: "anthropic",
					groupLabel: "Anthropic",
					groupHint: "setup-token + API key"
				}
			})],
			resolveDynamicModel: (ctx) => resolveAnthropicForwardCompatModel(ctx),
			capabilities: {
				providerFamily: "anthropic",
				dropThinkingBlockModelHints: ["claude"]
			},
			isModernModelRef: ({ modelId }) => matchesAnthropicModernModel(modelId),
			resolveDefaultThinkingLevel: ({ modelId }) => matchesAnthropicModernModel(modelId) && (modelId.toLowerCase().startsWith(ANTHROPIC_OPUS_46_MODEL_ID) || modelId.toLowerCase().startsWith(ANTHROPIC_OPUS_46_DOT_MODEL_ID) || modelId.toLowerCase().startsWith(ANTHROPIC_SONNET_46_MODEL_ID) || modelId.toLowerCase().startsWith(ANTHROPIC_SONNET_46_DOT_MODEL_ID)) ? "adaptive" : void 0,
			resolveUsageAuth: async (ctx) => await ctx.resolveOAuthToken(),
			fetchUsageSnapshot: async (ctx) => await fetchClaudeUsage(ctx.token, ctx.timeoutMs, ctx.fetchFn),
			isCacheTtlEligible: () => true,
			buildAuthDoctorHint: (ctx) => buildAnthropicAuthDoctorHint({
				config: ctx.config,
				store: ctx.store,
				profileId: ctx.profileId
			})
		});
		api.registerMediaUnderstandingProvider(anthropicMediaUnderstandingProvider);
	}
});
//#endregion
export { anthropic_default as default };
