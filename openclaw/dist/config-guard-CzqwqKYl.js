import { N as shouldMigrateStateFromPath } from "./logger-CoEtkjhn.js";
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
import { d as readConfigFileSnapshot } from "./io-Cu_7vv9A.js";
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
//#region src/cli/program/config-guard.ts
const ALLOWED_INVALID_COMMANDS = new Set([
	"doctor",
	"logs",
	"health",
	"help",
	"status"
]);
const ALLOWED_INVALID_GATEWAY_SUBCOMMANDS = new Set([
	"status",
	"probe",
	"health",
	"discover",
	"call",
	"install",
	"uninstall",
	"start",
	"stop",
	"restart"
]);
let didRunDoctorConfigFlow = false;
let configSnapshotPromise = null;
function resetConfigGuardStateForTests() {
	didRunDoctorConfigFlow = false;
	configSnapshotPromise = null;
}
async function getConfigSnapshot() {
	if (process.env.VITEST === "true") return readConfigFileSnapshot();
	configSnapshotPromise ??= readConfigFileSnapshot();
	return configSnapshotPromise;
}
async function ensureConfigReady(params) {
	const commandPath = params.commandPath ?? [];
	let preflightSnapshot = null;
	if (!didRunDoctorConfigFlow && shouldMigrateStateFromPath(commandPath)) {
		didRunDoctorConfigFlow = true;
		const runDoctorConfigPreflight = async () => (await import("./doctor-config-preflight-BEvkz5yO.js")).runDoctorConfigPreflight({
			migrateState: false,
			migrateLegacyConfig: false,
			invalidConfigNote: false
		});
		if (!params.suppressDoctorStdout) preflightSnapshot = (await runDoctorConfigPreflight()).snapshot;
		else {
			const originalStdoutWrite = process.stdout.write.bind(process.stdout);
			const originalSuppressNotes = process.env.OPENCLAW_SUPPRESS_NOTES;
			process.stdout.write = (() => true);
			process.env.OPENCLAW_SUPPRESS_NOTES = "1";
			try {
				preflightSnapshot = (await runDoctorConfigPreflight()).snapshot;
			} finally {
				process.stdout.write = originalStdoutWrite;
				if (originalSuppressNotes === void 0) delete process.env.OPENCLAW_SUPPRESS_NOTES;
				else process.env.OPENCLAW_SUPPRESS_NOTES = originalSuppressNotes;
			}
		}
	}
	const snapshot = preflightSnapshot ?? await getConfigSnapshot();
	const commandName = commandPath[0];
	const subcommandName = commandPath[1];
	const allowInvalid = commandName ? ALLOWED_INVALID_COMMANDS.has(commandName) || commandName === "gateway" && subcommandName && ALLOWED_INVALID_GATEWAY_SUBCOMMANDS.has(subcommandName) : false;
	const { formatConfigIssueLines } = await import("./issue-format-j7JaT8W8.js");
	const issues = snapshot.exists && !snapshot.valid ? formatConfigIssueLines(snapshot.issues, "-", { normalizeRoot: true }) : [];
	const legacyIssues = snapshot.legacyIssues.length > 0 ? formatConfigIssueLines(snapshot.legacyIssues, "-") : [];
	if (!(snapshot.exists && !snapshot.valid)) return;
	const [{ colorize, isRich, theme }, { shortenHomePath }, { formatCliCommand }] = await Promise.all([
		import("./theme-B5HDbQfl.js"),
		import("./utils-BrlggDSh.js"),
		import("./command-format-BzGDKclR.js")
	]);
	const rich = isRich();
	const muted = (value) => colorize(rich, theme.muted, value);
	const error = (value) => colorize(rich, theme.error, value);
	const heading = (value) => colorize(rich, theme.heading, value);
	const commandText = (value) => colorize(rich, theme.command, value);
	params.runtime.error(heading("Config invalid"));
	params.runtime.error(`${muted("File:")} ${muted(shortenHomePath(snapshot.path))}`);
	if (issues.length > 0) {
		params.runtime.error(muted("Problem:"));
		params.runtime.error(issues.map((issue) => `  ${error(issue)}`).join("\n"));
	}
	if (legacyIssues.length > 0) {
		params.runtime.error(muted("Legacy config keys detected:"));
		params.runtime.error(legacyIssues.map((issue) => `  ${error(issue)}`).join("\n"));
	}
	params.runtime.error("");
	params.runtime.error(`${muted("Run:")} ${commandText(formatCliCommand("openclaw doctor --fix"))}`);
	if (!allowInvalid) params.runtime.exit(1);
}
const __test__ = { resetConfigGuardStateForTests };
//#endregion
export { __test__, ensureConfigReady };
