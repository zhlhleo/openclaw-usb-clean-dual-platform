import "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import "./theme-CdOoMzRk.js";
import "./globals-41sdSaKv.js";
import "./ansi-BEJF8NKS.js";
import "./utils-seFh26xW.js";
import "./links-kyhxxZ1i.js";
import { n as VERSION } from "./version-CMPQj7au.js";
import { t as getCoreCliCommandDescriptors } from "./core-command-descriptors-ChSSptEa.js";
import { n as getSubCliEntries } from "./subcli-descriptors-CRF4CgAv.js";
import "./banner-BJYwgHov.js";
import { t as configureProgramHelp } from "./help-DPKqrQiW.js";
import { Command } from "commander";
//#region src/cli/program/root-help.ts
function buildRootHelpProgram() {
	const program = new Command();
	configureProgramHelp(program, {
		programVersion: VERSION,
		channelOptions: [],
		messageChannelOptions: "",
		agentChannelOptions: ""
	});
	for (const command of getCoreCliCommandDescriptors()) program.command(command.name).description(command.description);
	for (const command of getSubCliEntries()) program.command(command.name).description(command.description);
	return program;
}
function outputRootHelp() {
	buildRootHelpProgram().outputHelp();
}
//#endregion
export { outputRootHelp };
