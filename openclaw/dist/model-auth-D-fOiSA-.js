import { t as createSubsystemLogger } from "./subsystem-VzQeL-96.js";
import { r as resolveAuthStorePathForDisplay } from "./paths-DN8rtGcC.js";
import { m as resolveApiKeyForProfile, n as resolveAuthProfileOrder } from "./auth-profiles-B-NeTOJm.js";
import { r as normalizeProviderId } from "./provider-id-BEs7khYg.js";
import { t as getShellEnvAppliedKeys } from "./shell-env-CcwPX9am.js";
import { i as coerceSecretRef } from "./types.secrets-DKOIsGys.js";
import { n as normalizeSecretInput, t as normalizeOptionalSecretInput } from "./normalize-secret-input-Rf8mhxjI.js";
import { c as ensureAuthProfileStore, n as listProfilesForProvider } from "./profiles-CpZYCV3C.js";
import { t as formatCliCommand } from "./command-format-DRptdHvm.js";
import { d as isKnownEnvApiKeyMarker, f as isNonSecretApiKeyMarker, n as CUSTOM_LOCAL_AUTH_MARKER, s as OLLAMA_LOCAL_AUTH_MARKER, t as resolveEnvApiKey } from "./model-auth-env-p0NyXNbZ.js";
import path from "node:path";
//#region src/agents/model-auth.ts
const log = createSubsystemLogger("model-auth");
const AWS_BEARER_ENV = "AWS_BEARER_TOKEN_BEDROCK";
const AWS_ACCESS_KEY_ENV = "AWS_ACCESS_KEY_ID";
const AWS_SECRET_KEY_ENV = "AWS_SECRET_ACCESS_KEY";
const AWS_PROFILE_ENV = "AWS_PROFILE";
let providerRuntimePromise;
function loadProviderRuntime() {
	providerRuntimePromise ??= import("./provider-runtime.runtime-f-fSnBZ5.js");
	return providerRuntimePromise;
}
function resolveProviderConfig(cfg, provider) {
	const providers = cfg?.models?.providers ?? {};
	const direct = providers[provider];
	if (direct) return direct;
	const normalized = normalizeProviderId(provider);
	if (normalized === provider) return Object.entries(providers).find(([key]) => normalizeProviderId(key) === normalized)?.[1];
	return providers[normalized] ?? Object.entries(providers).find(([key]) => normalizeProviderId(key) === normalized)?.[1];
}
function getCustomProviderApiKey(cfg, provider) {
	return normalizeOptionalSecretInput(resolveProviderConfig(cfg, provider)?.apiKey);
}
function resolveUsableCustomProviderApiKey(params) {
	const customKey = getCustomProviderApiKey(params.cfg, params.provider);
	if (!customKey) return null;
	if (!isNonSecretApiKeyMarker(customKey)) return {
		apiKey: customKey,
		source: "models.json"
	};
	if (!isKnownEnvApiKeyMarker(customKey)) return null;
	const envValue = normalizeOptionalSecretInput((params.env ?? process.env)[customKey]);
	if (!envValue) return null;
	return {
		apiKey: envValue,
		source: resolveEnvSourceLabel({
			applied: new Set(getShellEnvAppliedKeys()),
			envVars: [customKey],
			label: `${customKey} (models.json marker)`
		})
	};
}
function hasUsableCustomProviderApiKey(cfg, provider, env) {
	return Boolean(resolveUsableCustomProviderApiKey({
		cfg,
		provider,
		env
	}));
}
function resolveProviderAuthOverride(cfg, provider) {
	const auth = resolveProviderConfig(cfg, provider)?.auth;
	if (auth === "api-key" || auth === "aws-sdk" || auth === "oauth" || auth === "token") return auth;
}
function isLocalBaseUrl(baseUrl) {
	try {
		const host = new URL(baseUrl).hostname.toLowerCase();
		return host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host === "[::1]" || host === "[::ffff:7f00:1]" || host === "[::ffff:127.0.0.1]";
	} catch {
		return false;
	}
}
function hasExplicitProviderApiKeyConfig(providerConfig) {
	return normalizeOptionalSecretInput(providerConfig.apiKey) !== void 0 || coerceSecretRef(providerConfig.apiKey) !== null;
}
function isCustomLocalProviderConfig(providerConfig) {
	return typeof providerConfig.baseUrl === "string" && providerConfig.baseUrl.trim().length > 0 && typeof providerConfig.api === "string" && providerConfig.api.trim().length > 0 && Array.isArray(providerConfig.models) && providerConfig.models.length > 0;
}
function resolveSyntheticLocalProviderAuth(params) {
	const providerConfig = resolveProviderConfig(params.cfg, params.provider);
	if (!providerConfig) return null;
	if (!(Boolean(providerConfig.api?.trim()) || Boolean(providerConfig.baseUrl?.trim()) || Array.isArray(providerConfig.models) && providerConfig.models.length > 0)) return null;
	if (normalizeProviderId(params.provider) === "ollama") return {
		apiKey: OLLAMA_LOCAL_AUTH_MARKER,
		source: "models.providers.ollama (synthetic local key)",
		mode: "api-key"
	};
	const authOverride = resolveProviderAuthOverride(params.cfg, params.provider);
	if (authOverride && authOverride !== "api-key") return null;
	if (!isCustomLocalProviderConfig(providerConfig)) return null;
	if (hasExplicitProviderApiKeyConfig(providerConfig)) return null;
	if (providerConfig.baseUrl && isLocalBaseUrl(providerConfig.baseUrl)) return {
		apiKey: CUSTOM_LOCAL_AUTH_MARKER,
		source: `models.providers.${params.provider} (synthetic local key)`,
		mode: "api-key"
	};
	return null;
}
function resolveEnvSourceLabel(params) {
	return `${params.envVars.some((envVar) => params.applied.has(envVar)) ? "shell env: " : "env: "}${params.label}`;
}
function resolveAwsSdkEnvVarName(env = process.env) {
	if (env[AWS_BEARER_ENV]?.trim()) return AWS_BEARER_ENV;
	if (env[AWS_ACCESS_KEY_ENV]?.trim() && env[AWS_SECRET_KEY_ENV]?.trim()) return AWS_ACCESS_KEY_ENV;
	if (env[AWS_PROFILE_ENV]?.trim()) return AWS_PROFILE_ENV;
}
function resolveAwsSdkAuthInfo() {
	const applied = new Set(getShellEnvAppliedKeys());
	if (process.env[AWS_BEARER_ENV]?.trim()) return {
		mode: "aws-sdk",
		source: resolveEnvSourceLabel({
			applied,
			envVars: [AWS_BEARER_ENV],
			label: AWS_BEARER_ENV
		})
	};
	if (process.env[AWS_ACCESS_KEY_ENV]?.trim() && process.env[AWS_SECRET_KEY_ENV]?.trim()) return {
		mode: "aws-sdk",
		source: resolveEnvSourceLabel({
			applied,
			envVars: [AWS_ACCESS_KEY_ENV, AWS_SECRET_KEY_ENV],
			label: `${AWS_ACCESS_KEY_ENV} + ${AWS_SECRET_KEY_ENV}`
		})
	};
	if (process.env[AWS_PROFILE_ENV]?.trim()) return {
		mode: "aws-sdk",
		source: resolveEnvSourceLabel({
			applied,
			envVars: [AWS_PROFILE_ENV],
			label: AWS_PROFILE_ENV
		})
	};
	return {
		mode: "aws-sdk",
		source: "aws-sdk default chain"
	};
}
async function resolveApiKeyForProvider(params) {
	const { provider, cfg, profileId, preferredProfile } = params;
	const store = params.store ?? ensureAuthProfileStore(params.agentDir);
	if (profileId) {
		const resolved = await resolveApiKeyForProfile({
			cfg,
			store,
			profileId,
			agentDir: params.agentDir
		});
		if (!resolved) throw new Error(`No credentials found for profile "${profileId}".`);
		const mode = store.profiles[profileId]?.type;
		return {
			apiKey: resolved.apiKey,
			profileId,
			source: `profile:${profileId}`,
			mode: mode === "oauth" ? "oauth" : mode === "token" ? "token" : "api-key"
		};
	}
	const authOverride = resolveProviderAuthOverride(cfg, provider);
	if (authOverride === "aws-sdk") return resolveAwsSdkAuthInfo();
	const order = resolveAuthProfileOrder({
		cfg,
		store,
		provider,
		preferredProfile
	});
	for (const candidate of order) try {
		const resolved = await resolveApiKeyForProfile({
			cfg,
			store,
			profileId: candidate,
			agentDir: params.agentDir
		});
		if (resolved) {
			const mode = store.profiles[candidate]?.type;
			return {
				apiKey: resolved.apiKey,
				profileId: candidate,
				source: `profile:${candidate}`,
				mode: mode === "oauth" ? "oauth" : mode === "token" ? "token" : "api-key"
			};
		}
	} catch (err) {
		log.debug?.(`auth profile "${candidate}" failed for provider "${provider}": ${String(err)}`);
	}
	const envResolved = resolveEnvApiKey(provider);
	if (envResolved) return {
		apiKey: envResolved.apiKey,
		source: envResolved.source,
		mode: envResolved.source.includes("OAUTH_TOKEN") ? "oauth" : "api-key"
	};
	const customKey = resolveUsableCustomProviderApiKey({
		cfg,
		provider
	});
	if (customKey) return {
		apiKey: customKey.apiKey,
		source: customKey.source,
		mode: "api-key"
	};
	const syntheticLocalAuth = resolveSyntheticLocalProviderAuth({
		cfg,
		provider
	});
	if (syntheticLocalAuth) return syntheticLocalAuth;
	const normalized = normalizeProviderId(provider);
	if (authOverride === void 0 && normalized === "amazon-bedrock") return resolveAwsSdkAuthInfo();
	const { buildProviderMissingAuthMessageWithPlugin } = await loadProviderRuntime();
	const pluginMissingAuthMessage = buildProviderMissingAuthMessageWithPlugin({
		provider,
		config: cfg,
		context: {
			config: cfg,
			agentDir: params.agentDir,
			env: process.env,
			provider,
			listProfileIds: (providerId) => listProfilesForProvider(store, providerId)
		}
	});
	if (pluginMissingAuthMessage) throw new Error(pluginMissingAuthMessage);
	const authStorePath = resolveAuthStorePathForDisplay(params.agentDir);
	const resolvedAgentDir = path.dirname(authStorePath);
	throw new Error([
		`No API key found for provider "${provider}".`,
		`Auth store: ${authStorePath} (agentDir: ${resolvedAgentDir}).`,
		`Configure auth for this agent (${formatCliCommand("openclaw agents add <id>")}) or copy auth-profiles.json from the main agentDir.`
	].join(" "));
}
function resolveModelAuthMode(provider, cfg, store) {
	const resolved = provider?.trim();
	if (!resolved) return;
	const authOverride = resolveProviderAuthOverride(cfg, resolved);
	if (authOverride === "aws-sdk") return "aws-sdk";
	const authStore = store ?? ensureAuthProfileStore();
	const profiles = listProfilesForProvider(authStore, resolved);
	if (profiles.length > 0) {
		const modes = new Set(profiles.map((id) => authStore.profiles[id]?.type).filter((mode) => Boolean(mode)));
		if ([
			"oauth",
			"token",
			"api_key"
		].filter((k) => modes.has(k)).length >= 2) return "mixed";
		if (modes.has("oauth")) return "oauth";
		if (modes.has("token")) return "token";
		if (modes.has("api_key")) return "api-key";
	}
	if (authOverride === void 0 && normalizeProviderId(resolved) === "amazon-bedrock") return "aws-sdk";
	const envKey = resolveEnvApiKey(resolved);
	if (envKey?.apiKey) return envKey.source.includes("OAUTH_TOKEN") ? "oauth" : "api-key";
	if (hasUsableCustomProviderApiKey(cfg, resolved)) return "api-key";
	return "unknown";
}
async function hasAvailableAuthForProvider(params) {
	const { provider, cfg, preferredProfile } = params;
	const store = params.store ?? ensureAuthProfileStore(params.agentDir);
	const authOverride = resolveProviderAuthOverride(cfg, provider);
	if (authOverride === "aws-sdk") return true;
	const order = resolveAuthProfileOrder({
		cfg,
		store,
		provider,
		preferredProfile
	});
	for (const candidate of order) try {
		if (await resolveApiKeyForProfile({
			cfg,
			store,
			profileId: candidate,
			agentDir: params.agentDir
		})) return true;
	} catch (err) {
		log.debug?.(`auth profile "${candidate}" failed for provider "${provider}": ${String(err)}`);
	}
	if (resolveEnvApiKey(provider)) return true;
	if (resolveUsableCustomProviderApiKey({
		cfg,
		provider
	})) return true;
	if (resolveSyntheticLocalProviderAuth({
		cfg,
		provider
	})) return true;
	return authOverride === void 0 && normalizeProviderId(provider) === "amazon-bedrock";
}
async function getApiKeyForModel(params) {
	return resolveApiKeyForProvider({
		provider: params.model.provider,
		cfg: params.cfg,
		profileId: params.profileId,
		preferredProfile: params.preferredProfile,
		store: params.store,
		agentDir: params.agentDir
	});
}
function requireApiKey(auth, provider) {
	const key = normalizeSecretInput(auth.apiKey);
	if (key) return key;
	throw new Error(`No API key resolved for provider "${provider}" (auth mode: ${auth.mode}).`);
}
function applyLocalNoAuthHeaderOverride(model, auth) {
	if (auth?.apiKey !== "custom-local" || model.api !== "openai-completions") return model;
	const headers = {
		...model.headers,
		Authorization: null
	};
	return {
		...model,
		headers
	};
}
//#endregion
export { hasUsableCustomProviderApiKey as a, resolveAwsSdkEnvVarName as c, hasAvailableAuthForProvider as i, resolveModelAuthMode as l, getApiKeyForModel as n, requireApiKey as o, getCustomProviderApiKey as r, resolveApiKeyForProvider as s, applyLocalNoAuthHeaderOverride as t, resolveUsableCustomProviderApiKey as u };
