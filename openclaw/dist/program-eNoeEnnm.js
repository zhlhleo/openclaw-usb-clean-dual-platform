import { D as getVerboseFlag, O as hasFlag, S as getCommandPathWithRootOptions, k as hasHelpOrVersion } from "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import "./theme-CdOoMzRk.js";
import { s as setVerbose } from "./globals-41sdSaKv.js";
import { m as defaultRuntime } from "./subsystem-VzQeL-96.js";
import "./ansi-BEJF8NKS.js";
import "./boolean-C3GkJetE.js";
import { t as isTruthyEnvValue } from "./env-mRJH5TpF.js";
import "./utils-seFh26xW.js";
import "./links-kyhxxZ1i.js";
import { n as VERSION } from "./version-CMPQj7au.js";
import "./registry-BYdGgYCt.js";
import { n as resolveCliName } from "./cli-name-D8XJYuiq.js";
import "./ports-lsof-BTr26w8T.js";
import { n as resolveCliChannelOptions } from "./channel-options-oz8vel8M.js";
import "./register.subclis-Bjj24oEy.js";
import { i as registerProgramCommands } from "./command-registry-BQsnnmsK.js";
import { n as setProgramContext } from "./program-context-DzhFeF4w.js";
import "./ports-Dmkc1NwT.js";
import { t as emitCliBanner } from "./banner-BJYwgHov.js";
import { t as configureProgramHelp } from "./help-DPKqrQiW.js";
import { Command } from "commander";
//#region src/cli/program/context.ts
function createProgramContext() {
	let cachedChannelOptions;
	const getChannelOptions = () => {
		if (cachedChannelOptions === void 0) cachedChannelOptions = resolveCliChannelOptions();
		return cachedChannelOptions;
	};
	return {
		programVersion: VERSION,
		get channelOptions() {
			return getChannelOptions();
		},
		get messageChannelOptions() {
			return getChannelOptions().join("|");
		},
		get agentChannelOptions() {
			return ["last", ...getChannelOptions()].join("|");
		}
	};
}
//#endregion
//#region src/cli/program/preaction.ts
function setProcessTitleForCommand(actionCommand) {
	let current = actionCommand;
	while (current.parent && current.parent.parent) current = current.parent;
	const name = current.name();
	const cliName = resolveCliName();
	if (!name || name === cliName) return;
	process.title = `${cliName}-${name}`;
}
const PLUGIN_REQUIRED_COMMANDS = new Set([
	"message",
	"channels",
	"directory",
	"agents",
	"configure",
	"status",
	"health"
]);
const CONFIG_GUARD_BYPASS_COMMANDS = new Set([
	"backup",
	"doctor",
	"completion",
	"secrets"
]);
const JSON_PARSE_ONLY_COMMANDS = new Set(["config set"]);
let configGuardModulePromise;
let pluginRegistryModulePromise;
function shouldBypassConfigGuard(commandPath) {
	const [primary, secondary] = commandPath;
	if (!primary) return false;
	if (CONFIG_GUARD_BYPASS_COMMANDS.has(primary)) return true;
	if (primary === "config" && secondary === "validate") return true;
	return false;
}
function loadConfigGuardModule() {
	configGuardModulePromise ??= import("./config-guard-CzqwqKYl.js");
	return configGuardModulePromise;
}
function loadPluginRegistryModule() {
	pluginRegistryModulePromise ??= import("./plugin-registry-CnhUevHp.js");
	return pluginRegistryModulePromise;
}
function resolvePluginRegistryScope(commandPath) {
	return commandPath[0] === "status" || commandPath[0] === "health" ? "channels" : "all";
}
function shouldLoadPluginsForCommand(commandPath, argv) {
	const [primary, secondary] = commandPath;
	if (!primary || !PLUGIN_REQUIRED_COMMANDS.has(primary)) return false;
	if ((primary === "status" || primary === "health") && hasFlag(argv, "--json")) return false;
	if (primary === "onboard" || primary === "channels" && secondary === "add") return false;
	return true;
}
function getRootCommand(command) {
	let current = command;
	while (current.parent) current = current.parent;
	return current;
}
function getCliLogLevel(actionCommand) {
	const root = getRootCommand(actionCommand);
	if (typeof root.getOptionValueSource !== "function") return;
	if (root.getOptionValueSource("logLevel") !== "cli") return;
	const logLevel = root.opts().logLevel;
	return typeof logLevel === "string" ? logLevel : void 0;
}
function isJsonOutputMode(commandPath, argv) {
	if (!hasFlag(argv, "--json")) return false;
	const key = `${commandPath[0] ?? ""} ${commandPath[1] ?? ""}`.trim();
	if (JSON_PARSE_ONLY_COMMANDS.has(key)) return false;
	return true;
}
function registerPreActionHooks(program, programVersion) {
	program.hook("preAction", async (_thisCommand, actionCommand) => {
		setProcessTitleForCommand(actionCommand);
		const argv = process.argv;
		if (hasHelpOrVersion(argv)) return;
		const commandPath = getCommandPathWithRootOptions(argv, 2);
		if (!(isTruthyEnvValue(process.env.OPENCLAW_HIDE_BANNER) || commandPath[0] === "update" || commandPath[0] === "completion" || commandPath[0] === "plugins" && commandPath[1] === "update")) emitCliBanner(programVersion);
		const verbose = getVerboseFlag(argv, { includeDebug: true });
		setVerbose(verbose);
		const cliLogLevel = getCliLogLevel(actionCommand);
		if (cliLogLevel) process.env.OPENCLAW_LOG_LEVEL = cliLogLevel;
		if (!verbose) process.env.NODE_NO_WARNINGS ??= "1";
		if (shouldBypassConfigGuard(commandPath)) return;
		const suppressDoctorStdout = isJsonOutputMode(commandPath, argv);
		const { ensureConfigReady } = await loadConfigGuardModule();
		await ensureConfigReady({
			runtime: defaultRuntime,
			commandPath,
			...suppressDoctorStdout ? { suppressDoctorStdout: true } : {}
		});
		if (shouldLoadPluginsForCommand(commandPath, argv)) {
			const { ensurePluginRegistryLoaded } = await loadPluginRegistryModule();
			ensurePluginRegistryLoaded({ scope: resolvePluginRegistryScope(commandPath) });
		}
	});
}
//#endregion
//#region src/cli/program/build-program.ts
function buildProgram() {
	const program = new Command();
	const ctx = createProgramContext();
	const argv = process.argv;
	setProgramContext(program, ctx);
	configureProgramHelp(program, ctx);
	registerPreActionHooks(program, ctx.programVersion);
	registerProgramCommands(program, ctx, argv);
	return program;
}
//#endregion
export { buildProgram };
