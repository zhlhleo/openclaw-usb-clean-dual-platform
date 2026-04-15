import { r as normalizeProviderId } from "./provider-id-BEs7khYg.js";
import { createHash, randomBytes } from "node:crypto";
//#region src/plugins/provider-auth-token.ts
const ANTHROPIC_SETUP_TOKEN_PREFIX = "sk-ant-oat01-";
const DEFAULT_TOKEN_PROFILE_NAME = "default";
function normalizeTokenProfileName(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return DEFAULT_TOKEN_PROFILE_NAME;
	return trimmed.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "") || "default";
}
function buildTokenProfileId(params) {
	return `${normalizeProviderId(params.provider)}:${normalizeTokenProfileName(params.name)}`;
}
function validateAnthropicSetupToken(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return "Required";
	if (!trimmed.startsWith("sk-ant-oat01-")) return `Expected token starting with ${ANTHROPIC_SETUP_TOKEN_PREFIX}`;
	if (trimmed.length < 80) return "Token looks too short; paste the full setup-token";
}
//#endregion
//#region src/plugin-sdk/provider-auth-result.ts
/** Build the standard auth result payload for OAuth-style provider login flows. */
function buildOauthProviderAuthResult(params) {
	const email = params.email ?? void 0;
	return {
		profiles: [{
			profileId: `${params.profilePrefix ?? params.providerId}:${email ?? "default"}`,
			credential: {
				type: "oauth",
				provider: params.providerId,
				access: params.access,
				...params.refresh ? { refresh: params.refresh } : {},
				...Number.isFinite(params.expires) ? { expires: params.expires } : {},
				...email ? { email } : {},
				...params.credentialExtra
			}
		}],
		configPatch: params.configPatch ?? { agents: { defaults: { models: { [params.defaultModel]: {} } } } },
		defaultModel: params.defaultModel,
		notes: params.notes
	};
}
//#endregion
//#region src/plugin-sdk/oauth-utils.ts
/** Encode a flat object as application/x-www-form-urlencoded form data. */
function toFormUrlEncoded(data) {
	return Object.entries(data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
}
/** Generate a PKCE verifier/challenge pair suitable for OAuth authorization flows. */
function generatePkceVerifierChallenge() {
	const verifier = randomBytes(32).toString("base64url");
	return {
		verifier,
		challenge: createHash("sha256").update(verifier).digest("base64url")
	};
}
//#endregion
export { validateAnthropicSetupToken as a, buildTokenProfileId as i, toFormUrlEncoded as n, buildOauthProviderAuthResult as r, generatePkceVerifierChallenge as t };
