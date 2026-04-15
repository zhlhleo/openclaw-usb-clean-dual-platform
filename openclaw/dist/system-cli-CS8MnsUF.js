import "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import { r as theme } from "./theme-CdOoMzRk.js";
import { t as danger } from "./globals-41sdSaKv.js";
import { m as defaultRuntime } from "./subsystem-VzQeL-96.js";
import "./ansi-BEJF8NKS.js";
import "./boolean-C3GkJetE.js";
import "./env-mRJH5TpF.js";
import "./utils-seFh26xW.js";
import { t as formatDocsLink } from "./links-kyhxxZ1i.js";
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
import "./audit-fs-nZ0T6frF.js";
import "./resolve-BaVvVhzC.js";
import "./tailnet-ek-Gvazt.js";
import "./net-IbJJNPKH.js";
import "./credentials-BXUZJM8c.js";
import "./message-channel-Df2WMfuH.js";
import "./method-scopes-CLst3sPS.js";
import "./call-DOMUQRU0.js";
import "./progress-Bwj7zs4m.js";
import { n as callGatewayFromCli, t as addGatewayClientOptions } from "./gateway-rpc-BaJQUBA3.js";
//#region src/cli/system-cli.ts
const normalizeWakeMode = (raw) => {
	const mode = typeof raw === "string" ? raw.trim() : "";
	if (!mode) return "next-heartbeat";
	if (mode === "now" || mode === "next-heartbeat") return mode;
	throw new Error("--mode must be now or next-heartbeat");
};
async function runSystemGatewayCommand(opts, action, successText) {
	try {
		const result = await action();
		if (opts.json || successText === void 0) defaultRuntime.log(JSON.stringify(result, null, 2));
		else defaultRuntime.log(successText);
	} catch (err) {
		defaultRuntime.error(danger(String(err)));
		defaultRuntime.exit(1);
	}
}
function registerSystemCli(program) {
	const system = program.command("system").description("System tools (events, heartbeat, presence)").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/system", "docs.openclaw.ai/cli/system")}\n`);
	addGatewayClientOptions(system.command("event").description("Enqueue a system event and optionally trigger a heartbeat").requiredOption("--text <text>", "System event text").option("--mode <mode>", "Wake mode (now|next-heartbeat)", "next-heartbeat").option("--json", "Output JSON", false)).action(async (opts) => {
		await runSystemGatewayCommand(opts, async () => {
			const text = typeof opts.text === "string" ? opts.text.trim() : "";
			if (!text) throw new Error("--text is required");
			return await callGatewayFromCli("wake", opts, {
				mode: normalizeWakeMode(opts.mode),
				text
			}, { expectFinal: false });
		}, "ok");
	});
	const heartbeat = system.command("heartbeat").description("Heartbeat controls");
	addGatewayClientOptions(heartbeat.command("last").description("Show the last heartbeat event").option("--json", "Output JSON", false)).action(async (opts) => {
		await runSystemGatewayCommand(opts, async () => {
			return await callGatewayFromCli("last-heartbeat", opts, void 0, { expectFinal: false });
		});
	});
	addGatewayClientOptions(heartbeat.command("enable").description("Enable heartbeats").option("--json", "Output JSON", false)).action(async (opts) => {
		await runSystemGatewayCommand(opts, async () => {
			return await callGatewayFromCli("set-heartbeats", opts, { enabled: true }, { expectFinal: false });
		});
	});
	addGatewayClientOptions(heartbeat.command("disable").description("Disable heartbeats").option("--json", "Output JSON", false)).action(async (opts) => {
		await runSystemGatewayCommand(opts, async () => {
			return await callGatewayFromCli("set-heartbeats", opts, { enabled: false }, { expectFinal: false });
		});
	});
	addGatewayClientOptions(system.command("presence").description("List system presence entries").option("--json", "Output JSON", false)).action(async (opts) => {
		await runSystemGatewayCommand(opts, async () => {
			return await callGatewayFromCli("system-presence", opts, void 0, { expectFinal: false });
		});
	});
}
//#endregion
export { registerSystemCli };
