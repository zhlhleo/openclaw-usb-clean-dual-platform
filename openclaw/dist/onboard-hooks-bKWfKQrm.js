import "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import "./theme-CdOoMzRk.js";
import "./globals-41sdSaKv.js";
import "./subsystem-VzQeL-96.js";
import "./ansi-BEJF8NKS.js";
import "./boolean-C3GkJetE.js";
import "./utils-seFh26xW.js";
import "./boundary-path-Dm0QJ7-y.js";
import "./boundary-file-read-BGs2p0f_.js";
import "./logger-DtlnPe_E.js";
import "./exec-BnXF7JCz.js";
import "./workspace-DFURCHD1.js";
import { m as resolveDefaultAgentId, p as resolveAgentWorkspaceDir } from "./agent-scope-D8nGiwMS.js";
import "./registry-BYdGgYCt.js";
import "./config-state-DM5O57m7.js";
import "./manifest-registry-BYh_hnWR.js";
import { t as formatCliCommand } from "./command-format-DRptdHvm.js";
import "./frontmatter-DdYuoDob.js";
import "./config-EqFF8m2a.js";
import "./workspace-C6yRToWD.js";
import { t as buildWorkspaceHookStatus } from "./hooks-status-QK93mxRb.js";
//#region src/commands/onboard-hooks.ts
async function setupInternalHooks(cfg, runtime, prompter) {
	await prompter.note([
		"Hooks let you automate actions when agent commands are issued.",
		"Example: Save session context to memory when you issue /new or /reset.",
		"",
		"Learn more: https://docs.openclaw.ai/automation/hooks"
	].join("\n"), "Hooks");
	const eligibleHooks = buildWorkspaceHookStatus(resolveAgentWorkspaceDir(cfg, resolveDefaultAgentId(cfg)), { config: cfg }).hooks.filter((h) => h.eligible);
	if (eligibleHooks.length === 0) {
		await prompter.note("No eligible hooks found. You can configure hooks later in your config.", "No Hooks Available");
		return cfg;
	}
	const selected = (await prompter.multiselect({
		message: "Enable hooks?",
		options: [{
			value: "__skip__",
			label: "Skip for now"
		}, ...eligibleHooks.map((hook) => ({
			value: hook.name,
			label: `${hook.emoji ?? "🔗"} ${hook.name}`,
			hint: hook.description
		}))]
	})).filter((name) => name !== "__skip__");
	if (selected.length === 0) return cfg;
	const entries = { ...cfg.hooks?.internal?.entries };
	for (const name of selected) entries[name] = { enabled: true };
	const next = {
		...cfg,
		hooks: {
			...cfg.hooks,
			internal: {
				enabled: true,
				entries
			}
		}
	};
	await prompter.note([
		`Enabled ${selected.length} hook${selected.length > 1 ? "s" : ""}: ${selected.join(", ")}`,
		"",
		"You can manage hooks later with:",
		`  ${formatCliCommand("openclaw hooks list")}`,
		`  ${formatCliCommand("openclaw hooks enable <name>")}`,
		`  ${formatCliCommand("openclaw hooks disable <name>")}`
	].join("\n"), "Hooks Configured");
	return next;
}
//#endregion
export { setupInternalHooks };
