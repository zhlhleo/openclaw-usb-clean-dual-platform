import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
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
import "./paths-DN8rtGcC.js";
import "./auth-profiles-B-NeTOJm.js";
import "./boundary-path-Dm0QJ7-y.js";
import "./boundary-file-read-BGs2p0f_.js";
import "./logger-DtlnPe_E.js";
import "./exec-BnXF7JCz.js";
import "./workspace-DFURCHD1.js";
import "./agent-scope-D8nGiwMS.js";
import "./model-selection-JWhBHRyf.js";
import "./io-Cu_7vv9A.js";
import "./host-env-security-Du6GREqL.js";
import "./shell-env-CcwPX9am.js";
import "./safe-text-D1ZwCSxe.js";
import "./version-CMPQj7au.js";
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
import "./file-lock-DCUu-l3H.js";
import "./audit-fs-nZ0T6frF.js";
import "./resolve-BaVvVhzC.js";
import "./profiles-CpZYCV3C.js";
import "./repair-f7r8_Mh5.js";
import "./daemon-install-plan.shared-BVFnuqVe.js";
import "./runtime-paths-C0zpRZOk.js";
import "./runtime-guard-BYqa_9WZ.js";
import { n as buildGatewayInstallPlan, r as gatewayInstallErrorHint, t as resolveGatewayInstallToken } from "./gateway-install-token-CzLWccbs.js";
import { r as isGatewayDaemonRuntime } from "./daemon-runtime-BRxcFn3a.js";
import "./tailscale-CGrVLJCq.js";
import "./tailnet-ek-Gvazt.js";
import "./net-IbJJNPKH.js";
import "./auth-eLNKbKR0.js";
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
import "./onboard-helpers--GPxZ2Ug.js";
import "./ports-lsof-BTr26w8T.js";
import "./restart-stale-pids-Bn0Pdc9z.js";
import "./runtime-parse-BWAbSsrY.js";
import "./launchd-Dq5jEpGt.js";
import { n as resolveGatewayService } from "./service-BErkahkD.js";
import "./ports-DWLM_u4A.js";
import { i as isSystemdUserServiceAvailable } from "./systemd-B_aNW_fh.js";
import "./note-DTNzchm8.js";
import { n as ensureSystemdUserLingerNonInteractive } from "./systemd-linger-BU1vBgm6.js";
//#region src/commands/onboard-non-interactive/local/daemon-install.ts
async function installGatewayDaemonNonInteractive(params) {
	const { opts, runtime, port } = params;
	if (!opts.installDaemon) return { installed: false };
	const daemonRuntimeRaw = opts.daemonRuntime ?? "node";
	const systemdAvailable = process.platform === "linux" ? await isSystemdUserServiceAvailable() : true;
	if (process.platform === "linux" && !systemdAvailable) {
		runtime.log("Systemd user services are unavailable; skipping service install. Use a direct shell run (`openclaw gateway run`) or rerun without --install-daemon on this session.");
		return {
			installed: false,
			skippedReason: "systemd-user-unavailable"
		};
	}
	if (!isGatewayDaemonRuntime(daemonRuntimeRaw)) {
		runtime.error("Invalid --daemon-runtime (use node or bun)");
		runtime.exit(1);
		return { installed: false };
	}
	const service = resolveGatewayService();
	const tokenResolution = await resolveGatewayInstallToken({
		config: params.nextConfig,
		env: process.env
	});
	for (const warning of tokenResolution.warnings) runtime.log(warning);
	if (tokenResolution.unavailableReason) {
		runtime.error([
			"Gateway install blocked:",
			tokenResolution.unavailableReason,
			"Fix gateway auth config/token input and rerun setup."
		].join(" "));
		runtime.exit(1);
		return { installed: false };
	}
	const { programArguments, workingDirectory, environment } = await buildGatewayInstallPlan({
		env: process.env,
		port,
		runtime: daemonRuntimeRaw,
		warn: (message) => runtime.log(message),
		config: params.nextConfig
	});
	try {
		await service.install({
			env: process.env,
			stdout: process.stdout,
			programArguments,
			workingDirectory,
			environment
		});
	} catch (err) {
		runtime.error(`Gateway service install failed: ${String(err)}`);
		runtime.log(gatewayInstallErrorHint());
		return { installed: false };
	}
	await ensureSystemdUserLingerNonInteractive({ runtime });
	return { installed: true };
}
//#endregion
export { installGatewayDaemonNonInteractive };
