import "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import "./theme-CdOoMzRk.js";
import "./globals-41sdSaKv.js";
import "./subsystem-VzQeL-96.js";
import "./ansi-BEJF8NKS.js";
import "./boolean-C3GkJetE.js";
import "./env-mRJH5TpF.js";
import "./utils-seFh26xW.js";
import "./boundary-path-Dm0QJ7-y.js";
import "./boundary-file-read-BGs2p0f_.js";
import "./logger-DtlnPe_E.js";
import "./exec-BnXF7JCz.js";
import "./workspace-DFURCHD1.js";
import "./agent-scope-D8nGiwMS.js";
import "./model-selection-JWhBHRyf.js";
import { Ct as ensureControlUiAllowedOriginsForNonLoopbackBind } from "./io-Cu_7vv9A.js";
import "./host-env-security-Du6GREqL.js";
import "./shell-env-CcwPX9am.js";
import "./safe-text-D1ZwCSxe.js";
import "./version-CMPQj7au.js";
import { d as resolveSecretInputRef, l as normalizeSecretInputString } from "./types.secrets-DKOIsGys.js";
import "./env-substitution-BW_YpYTT.js";
import "./includes-DlCBNZMw.js";
import "./zod-schema.providers-core-CAJFPAb3.js";
import "./legacy-web-search-Cl_mGN-q.js";
import "./registry-BYdGgYCt.js";
import "./config-state-DM5O57m7.js";
import "./manifest-registry-BYh_hnWR.js";
import "./avatar-policy-ByRUKg_o.js";
import "./ip-CndEBNxP.js";
import "./zod-schema.agent-runtime-BLp4Fcyb.js";
import "./zod-schema.core-DICsKVAU.js";
import "./config-CLN6d0um.js";
import "./audit-fs-nZ0T6frF.js";
import "./resolve-BaVvVhzC.js";
import { a as findTailscaleBinary } from "./tailscale-CGrVLJCq.js";
import "./tailnet-ek-Gvazt.js";
import "./net-IbJJNPKH.js";
import "./credentials-BXUZJM8c.js";
import "./message-channel-Df2WMfuH.js";
import "./store-BGDAPyDm.js";
import "./runtime-C8dQugND.js";
import "./registry-BjRjosRJ.js";
import "./plugins-Cr3w-NCx.js";
import "./sessions-DMzSCOJI.js";
import "./paths-DTrmv0TT.js";
import "./session-write-lock-D8cHa_Rz.js";
import "./method-scopes-CLst3sPS.js";
import "./call-DOMUQRU0.js";
import "./control-ui-shared-CweZKiF7.js";
import "./prompt-style-CMikftfB.js";
import { m as randomToken, u as normalizeGatewayTokenInput, y as validateGatewayPasswordInput } from "./onboard-helpers--GPxZ2Ug.js";
import "./provider-env-vars-B47GY0nJ.js";
import { t as resolveSecretInputModeForEnvSelection } from "./provider-auth-mode-BvaZqry4.js";
import { n as promptSecretRefForSetup } from "./provider-auth-ref-DP38Y-Dh.js";
import { t as resolveSetupSecretInputString } from "./setup.secret-input-CS7SeNZn.js";
import { t as DEFAULT_DANGEROUS_NODE_COMMANDS } from "./node-command-policy-BTHlSnqi.js";
import { a as maybeAddTailnetOriginToControlUiAllowedOrigins, i as TAILSCALE_MISSING_BIN_NOTE_LINES, n as TAILSCALE_DOCS_LINES, r as TAILSCALE_EXPOSURE_OPTIONS, t as validateIPv4AddressInput } from "./ipv4-0zJZPr8y.js";
//#region src/wizard/setup.gateway-config.ts
async function configureGatewayForSetup(opts) {
	const { flow, localPort, quickstartGateway, prompter } = opts;
	let { nextConfig } = opts;
	const port = flow === "quickstart" ? quickstartGateway.port : Number.parseInt(String(await prompter.text({
		message: "Gateway port",
		initialValue: String(localPort),
		validate: (value) => Number.isFinite(Number(value)) ? void 0 : "Invalid port"
	})), 10);
	let bind = flow === "quickstart" ? quickstartGateway.bind : await prompter.select({
		message: "Gateway bind",
		options: [
			{
				value: "loopback",
				label: "Loopback (127.0.0.1)"
			},
			{
				value: "lan",
				label: "LAN (0.0.0.0)"
			},
			{
				value: "tailnet",
				label: "Tailnet (Tailscale IP)"
			},
			{
				value: "auto",
				label: "Auto (Loopback → LAN)"
			},
			{
				value: "custom",
				label: "Custom IP"
			}
		]
	});
	let customBindHost = quickstartGateway.customBindHost;
	if (bind === "custom") {
		if (flow !== "quickstart" || !customBindHost) {
			const input = await prompter.text({
				message: "Custom IP address",
				placeholder: "192.168.1.100",
				initialValue: customBindHost ?? "",
				validate: validateIPv4AddressInput
			});
			customBindHost = typeof input === "string" ? input.trim() : void 0;
		}
	}
	let authMode = flow === "quickstart" ? quickstartGateway.authMode : await prompter.select({
		message: "Gateway auth",
		options: [{
			value: "token",
			label: "Token",
			hint: "Recommended default (local + remote)"
		}, {
			value: "password",
			label: "Password"
		}],
		initialValue: "token"
	});
	const tailscaleMode = flow === "quickstart" ? quickstartGateway.tailscaleMode : await prompter.select({
		message: "Tailscale exposure",
		options: [...TAILSCALE_EXPOSURE_OPTIONS]
	});
	let tailscaleBin = null;
	if (tailscaleMode !== "off") {
		tailscaleBin = await findTailscaleBinary();
		if (!tailscaleBin) await prompter.note(TAILSCALE_MISSING_BIN_NOTE_LINES.join("\n"), "Tailscale Warning");
	}
	let tailscaleResetOnExit = flow === "quickstart" ? quickstartGateway.tailscaleResetOnExit : false;
	if (tailscaleMode !== "off" && flow !== "quickstart") {
		await prompter.note(TAILSCALE_DOCS_LINES.join("\n"), "Tailscale");
		tailscaleResetOnExit = Boolean(await prompter.confirm({
			message: "Reset Tailscale serve/funnel on exit?",
			initialValue: false
		}));
	}
	if (tailscaleMode !== "off" && bind !== "loopback") {
		await prompter.note("Tailscale requires bind=loopback. Adjusting bind to loopback.", "Note");
		bind = "loopback";
		customBindHost = void 0;
	}
	if (tailscaleMode === "funnel" && authMode !== "password") {
		await prompter.note("Tailscale funnel requires password auth.", "Note");
		authMode = "password";
	}
	let gatewayToken;
	let gatewayTokenInput;
	if (authMode === "token") {
		const quickstartTokenString = normalizeSecretInputString(quickstartGateway.token);
		const quickstartTokenRef = resolveSecretInputRef({
			value: quickstartGateway.token,
			defaults: nextConfig.secrets?.defaults
		}).ref;
		if ((flow === "quickstart" && opts.secretInputMode !== "ref" ? quickstartTokenRef ? "ref" : "plaintext" : await resolveSecretInputModeForEnvSelection({
			prompter,
			explicitMode: opts.secretInputMode,
			copy: {
				modeMessage: "How do you want to provide the gateway token?",
				plaintextLabel: "Generate/store plaintext token",
				plaintextHint: "Default",
				refLabel: "Use SecretRef",
				refHint: "Store a reference instead of plaintext"
			}
		})) === "ref") if (flow === "quickstart" && quickstartTokenRef) {
			gatewayTokenInput = quickstartTokenRef;
			gatewayToken = await resolveSetupSecretInputString({
				config: nextConfig,
				value: quickstartTokenRef,
				path: "gateway.auth.token",
				env: process.env
			});
		} else {
			const resolved = await promptSecretRefForSetup({
				provider: "gateway-auth-token",
				config: nextConfig,
				prompter,
				preferredEnvVar: "OPENCLAW_GATEWAY_TOKEN",
				copy: {
					sourceMessage: "Where is this gateway token stored?",
					envVarPlaceholder: "OPENCLAW_GATEWAY_TOKEN"
				}
			});
			gatewayTokenInput = resolved.ref;
			gatewayToken = resolved.resolvedValue;
		}
		else if (flow === "quickstart") {
			gatewayToken = (quickstartTokenString ?? normalizeGatewayTokenInput(process.env.OPENCLAW_GATEWAY_TOKEN)) || randomToken();
			gatewayTokenInput = gatewayToken;
		} else {
			gatewayToken = normalizeGatewayTokenInput(await prompter.text({
				message: "Gateway token (blank to generate)",
				placeholder: "Needed for multi-machine or non-loopback access",
				initialValue: quickstartTokenString ?? normalizeGatewayTokenInput(process.env.OPENCLAW_GATEWAY_TOKEN) ?? ""
			})) || randomToken();
			gatewayTokenInput = gatewayToken;
		}
	}
	if (authMode === "password") {
		let password = flow === "quickstart" && quickstartGateway.password ? quickstartGateway.password : void 0;
		if (!password) if (await resolveSecretInputModeForEnvSelection({
			prompter,
			explicitMode: opts.secretInputMode,
			copy: {
				modeMessage: "How do you want to provide the gateway password?",
				plaintextLabel: "Enter password now",
				plaintextHint: "Stores the password directly in OpenClaw config"
			}
		}) === "ref") password = (await promptSecretRefForSetup({
			provider: "gateway-auth-password",
			config: nextConfig,
			prompter,
			preferredEnvVar: "OPENCLAW_GATEWAY_PASSWORD",
			copy: {
				sourceMessage: "Where is this gateway password stored?",
				envVarPlaceholder: "OPENCLAW_GATEWAY_PASSWORD"
			}
		})).ref;
		else password = String(await prompter.text({
			message: "Gateway password",
			validate: validateGatewayPasswordInput
		}) ?? "").trim();
		nextConfig = {
			...nextConfig,
			gateway: {
				...nextConfig.gateway,
				auth: {
					...nextConfig.gateway?.auth,
					mode: "password",
					password
				}
			}
		};
	} else if (authMode === "token") nextConfig = {
		...nextConfig,
		gateway: {
			...nextConfig.gateway,
			auth: {
				...nextConfig.gateway?.auth,
				mode: "token",
				token: gatewayTokenInput
			}
		}
	};
	nextConfig = {
		...nextConfig,
		gateway: {
			...nextConfig.gateway,
			port,
			bind,
			...bind === "custom" && customBindHost ? { customBindHost } : {},
			tailscale: {
				...nextConfig.gateway?.tailscale,
				mode: tailscaleMode,
				resetOnExit: tailscaleResetOnExit
			}
		}
	};
	nextConfig = ensureControlUiAllowedOriginsForNonLoopbackBind(nextConfig, { requireControlUiEnabled: true }).config;
	nextConfig = await maybeAddTailnetOriginToControlUiAllowedOrigins({
		config: nextConfig,
		tailscaleMode,
		tailscaleBin
	});
	if (!quickstartGateway.hasExisting && nextConfig.gateway?.nodes?.denyCommands === void 0 && nextConfig.gateway?.nodes?.allowCommands === void 0 && nextConfig.gateway?.nodes?.browser === void 0) nextConfig = {
		...nextConfig,
		gateway: {
			...nextConfig.gateway,
			nodes: {
				...nextConfig.gateway?.nodes,
				denyCommands: [...DEFAULT_DANGEROUS_NODE_COMMANDS]
			}
		}
	};
	return {
		nextConfig,
		settings: {
			port,
			bind,
			customBindHost: bind === "custom" ? customBindHost : void 0,
			authMode,
			gatewayToken,
			tailscaleMode,
			tailscaleResetOnExit
		}
	};
}
//#endregion
export { configureGatewayForSetup };
