import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
import "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import { n as isRich, r as theme } from "./theme-CdOoMzRk.js";
import "./globals-41sdSaKv.js";
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
import "./ports-lsof-BTr26w8T.js";
import "./restart-stale-pids-Bn0Pdc9z.js";
import "./runtime-parse-BWAbSsrY.js";
import "./launchd-Dq5jEpGt.js";
import "./service-BErkahkD.js";
import "./ports-DWLM_u4A.js";
import "./systemd-B_aNW_fh.js";
import "./progress-Bwj7zs4m.js";
import { n as formatTimeAgo } from "./format-relative-DzwCsyr7.js";
import { b as saveExecApprovals, f as readExecApprovalsSnapshot } from "./exec-approvals-Cdgv0D4N.js";
import "./exec-approvals-allowlist-CgYJQwdJ.js";
import { n as callGatewayFromCli } from "./gateway-rpc-BaJQUBA3.js";
import { n as renderTable, t as getTerminalTableWidth } from "./table-Cno3MQ7S.js";
import { t as describeUnknownError } from "./shared-BKdTrZyw.js";
import { a as resolveNodeId, r as nodesCallOpts } from "./rpc-ajnLS9mf.js";
import JSON5 from "json5";
import fs from "node:fs/promises";
//#region src/cli/exec-approvals-cli.ts
async function readStdin() {
	const chunks = [];
	for await (const chunk of process.stdin) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
	return Buffer.concat(chunks).toString("utf8");
}
async function resolveTargetNodeId(opts) {
	if (opts.gateway) return null;
	const raw = opts.node?.trim() ?? "";
	if (!raw) return null;
	return await resolveNodeId(opts, raw);
}
async function loadSnapshot(opts, nodeId) {
	return await callGatewayFromCli(nodeId ? "exec.approvals.node.get" : "exec.approvals.get", opts, nodeId ? { nodeId } : {});
}
function loadSnapshotLocal() {
	const snapshot = readExecApprovalsSnapshot();
	return {
		path: snapshot.path,
		exists: snapshot.exists,
		hash: snapshot.hash,
		file: snapshot.file
	};
}
function saveSnapshotLocal(file) {
	saveExecApprovals(file);
	return loadSnapshotLocal();
}
async function loadSnapshotTarget(opts) {
	if (!opts.gateway && !opts.node) return {
		snapshot: loadSnapshotLocal(),
		nodeId: null,
		source: "local"
	};
	const nodeId = await resolveTargetNodeId(opts);
	return {
		snapshot: await loadSnapshot(opts, nodeId),
		nodeId,
		source: nodeId ? "node" : "gateway"
	};
}
function exitWithError(message) {
	defaultRuntime.error(message);
	defaultRuntime.exit(1);
	throw new Error(message);
}
function requireTrimmedNonEmpty(value, message) {
	const trimmed = value.trim();
	if (!trimmed) exitWithError(message);
	return trimmed;
}
async function loadWritableSnapshotTarget(opts) {
	const { snapshot, nodeId, source } = await loadSnapshotTarget(opts);
	if (source === "local") defaultRuntime.log(theme.muted("Writing local approvals."));
	const targetLabel = source === "local" ? "local" : nodeId ? `node:${nodeId}` : "gateway";
	const baseHash = snapshot.hash;
	if (!baseHash) exitWithError("Exec approvals hash missing; reload and retry.");
	return {
		snapshot,
		nodeId,
		source,
		targetLabel,
		baseHash
	};
}
async function saveSnapshotTargeted(params) {
	const next = params.source === "local" ? saveSnapshotLocal(params.file) : await saveSnapshot(params.opts, params.nodeId, params.file, params.baseHash);
	if (params.opts.json) {
		defaultRuntime.log(JSON.stringify(next));
		return;
	}
	defaultRuntime.log(theme.muted(`Target: ${params.targetLabel}`));
	renderApprovalsSnapshot(next, params.targetLabel);
}
function formatCliError(err) {
	const msg = describeUnknownError(err);
	return msg.includes("\n") ? msg.split("\n")[0] : msg;
}
function renderApprovalsSnapshot(snapshot, targetLabel) {
	const rich = isRich();
	const heading = (text) => rich ? theme.heading(text) : text;
	const muted = (text) => rich ? theme.muted(text) : text;
	const tableWidth = getTerminalTableWidth();
	const file = snapshot.file ?? { version: 1 };
	const defaults = file.defaults ?? {};
	const defaultsParts = [
		defaults.security ? `security=${defaults.security}` : null,
		defaults.ask ? `ask=${defaults.ask}` : null,
		defaults.askFallback ? `askFallback=${defaults.askFallback}` : null,
		typeof defaults.autoAllowSkills === "boolean" ? `autoAllowSkills=${defaults.autoAllowSkills ? "on" : "off"}` : null
	].filter(Boolean);
	const agents = file.agents ?? {};
	const allowlistRows = [];
	const now = Date.now();
	for (const [agentId, agent] of Object.entries(agents)) {
		const allowlist = Array.isArray(agent.allowlist) ? agent.allowlist : [];
		for (const entry of allowlist) {
			const pattern = entry?.pattern?.trim() ?? "";
			if (!pattern) continue;
			const lastUsedAt = typeof entry.lastUsedAt === "number" ? entry.lastUsedAt : null;
			allowlistRows.push({
				Target: targetLabel,
				Agent: agentId,
				Pattern: pattern,
				LastUsed: lastUsedAt ? formatTimeAgo(Math.max(0, now - lastUsedAt)) : muted("unknown")
			});
		}
	}
	const summaryRows = [
		{
			Field: "Target",
			Value: targetLabel
		},
		{
			Field: "Path",
			Value: snapshot.path
		},
		{
			Field: "Exists",
			Value: snapshot.exists ? "yes" : "no"
		},
		{
			Field: "Hash",
			Value: snapshot.hash
		},
		{
			Field: "Version",
			Value: String(file.version ?? 1)
		},
		{
			Field: "Socket",
			Value: file.socket?.path ?? "default"
		},
		{
			Field: "Defaults",
			Value: defaultsParts.length > 0 ? defaultsParts.join(", ") : "none"
		},
		{
			Field: "Agents",
			Value: String(Object.keys(agents).length)
		},
		{
			Field: "Allowlist",
			Value: String(allowlistRows.length)
		}
	];
	defaultRuntime.log(heading("Approvals"));
	defaultRuntime.log(renderTable({
		width: tableWidth,
		columns: [{
			key: "Field",
			header: "Field",
			minWidth: 8
		}, {
			key: "Value",
			header: "Value",
			minWidth: 24,
			flex: true
		}],
		rows: summaryRows
	}).trimEnd());
	if (allowlistRows.length === 0) {
		defaultRuntime.log("");
		defaultRuntime.log(muted("No allowlist entries."));
		return;
	}
	defaultRuntime.log("");
	defaultRuntime.log(heading("Allowlist"));
	defaultRuntime.log(renderTable({
		width: tableWidth,
		columns: [
			{
				key: "Target",
				header: "Target",
				minWidth: 10
			},
			{
				key: "Agent",
				header: "Agent",
				minWidth: 8
			},
			{
				key: "Pattern",
				header: "Pattern",
				minWidth: 20,
				flex: true
			},
			{
				key: "LastUsed",
				header: "Last Used",
				minWidth: 10
			}
		],
		rows: allowlistRows
	}).trimEnd());
}
async function saveSnapshot(opts, nodeId, file, baseHash) {
	return await callGatewayFromCli(nodeId ? "exec.approvals.node.set" : "exec.approvals.set", opts, nodeId ? {
		nodeId,
		file,
		baseHash
	} : {
		file,
		baseHash
	});
}
function resolveAgentKey(value) {
	const trimmed = value?.trim() ?? "";
	return trimmed ? trimmed : "*";
}
function normalizeAllowlistEntry(entry) {
	const pattern = entry?.pattern?.trim() ?? "";
	return pattern ? pattern : null;
}
function ensureAgent(file, agentKey) {
	const agents = file.agents ?? {};
	const entry = agents[agentKey] ?? {};
	file.agents = agents;
	return entry;
}
function isEmptyAgent(agent) {
	const allowlist = Array.isArray(agent.allowlist) ? agent.allowlist : [];
	return !agent.security && !agent.ask && !agent.askFallback && agent.autoAllowSkills === void 0 && allowlist.length === 0;
}
async function loadWritableAllowlistAgent(opts) {
	const { snapshot, nodeId, source, targetLabel, baseHash } = await loadWritableSnapshotTarget(opts);
	const file = snapshot.file ?? { version: 1 };
	file.version = 1;
	const agentKey = resolveAgentKey(opts.agent);
	const agent = ensureAgent(file, agentKey);
	return {
		nodeId,
		source,
		targetLabel,
		baseHash,
		file,
		agentKey,
		agent,
		allowlistEntries: Array.isArray(agent.allowlist) ? agent.allowlist : []
	};
}
async function runAllowlistMutation(pattern, opts, mutate) {
	try {
		const trimmedPattern = requireTrimmedNonEmpty(pattern, "Pattern required.");
		const context = await loadWritableAllowlistAgent(opts);
		if (!await mutate({
			...context,
			trimmedPattern
		})) return;
		await saveSnapshotTargeted({
			opts,
			source: context.source,
			nodeId: context.nodeId,
			file: context.file,
			baseHash: context.baseHash,
			targetLabel: context.targetLabel
		});
	} catch (err) {
		defaultRuntime.error(formatCliError(err));
		defaultRuntime.exit(1);
	}
}
function registerAllowlistMutationCommand(params) {
	const command = params.allowlist.command(`${params.name} <pattern>`).description(params.description).option("--node <node>", "Target node id/name/IP").option("--gateway", "Force gateway approvals", false).option("--agent <id>", "Agent id (defaults to \"*\")").action(async (pattern, opts) => {
		await runAllowlistMutation(pattern, opts, params.mutate);
	});
	nodesCallOpts(command);
	return command;
}
function registerExecApprovalsCli(program) {
	const formatExample = (cmd, desc) => `  ${theme.command(cmd)}\n    ${theme.muted(desc)}`;
	const approvals = program.command("approvals").alias("exec-approvals").description("Manage exec approvals (gateway or node host)").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/approvals", "docs.openclaw.ai/cli/approvals")}\n`);
	nodesCallOpts(approvals.command("get").description("Fetch exec approvals snapshot").option("--node <node>", "Target node id/name/IP").option("--gateway", "Force gateway approvals", false).action(async (opts) => {
		try {
			const { snapshot, nodeId, source } = await loadSnapshotTarget(opts);
			if (opts.json) {
				defaultRuntime.log(JSON.stringify(snapshot));
				return;
			}
			const muted = (text) => isRich() ? theme.muted(text) : text;
			if (source === "local") {
				defaultRuntime.log(muted("Showing local approvals."));
				defaultRuntime.log("");
			}
			renderApprovalsSnapshot(snapshot, source === "local" ? "local" : nodeId ? `node:${nodeId}` : "gateway");
		} catch (err) {
			defaultRuntime.error(formatCliError(err));
			defaultRuntime.exit(1);
		}
	}));
	nodesCallOpts(approvals.command("set").description("Replace exec approvals with a JSON file").option("--node <node>", "Target node id/name/IP").option("--gateway", "Force gateway approvals", false).option("--file <path>", "Path to JSON file to upload").option("--stdin", "Read JSON from stdin", false).action(async (opts) => {
		try {
			if (!opts.file && !opts.stdin) exitWithError("Provide --file or --stdin.");
			if (opts.file && opts.stdin) exitWithError("Use either --file or --stdin (not both).");
			const { source, nodeId, targetLabel, baseHash } = await loadWritableSnapshotTarget(opts);
			const raw = opts.stdin ? await readStdin() : await fs.readFile(String(opts.file), "utf8");
			let file;
			try {
				file = JSON5.parse(raw);
			} catch (err) {
				exitWithError(`Failed to parse approvals JSON: ${String(err)}`);
			}
			file.version = 1;
			await saveSnapshotTargeted({
				opts,
				source,
				nodeId,
				file,
				baseHash,
				targetLabel
			});
		} catch (err) {
			defaultRuntime.error(formatCliError(err));
			defaultRuntime.exit(1);
		}
	}));
	const allowlist = approvals.command("allowlist").description("Edit the per-agent allowlist").addHelpText("after", () => `\n${theme.heading("Examples:")}\n${formatExample("openclaw approvals allowlist add \"~/Projects/**/bin/rg\"", "Allowlist a local binary pattern for the main agent.")}\n${formatExample("openclaw approvals allowlist add --agent main --node <id|name|ip> \"/usr/bin/uptime\"", "Allowlist on a specific node/agent.")}\n${formatExample("openclaw approvals allowlist add --agent \"*\" \"/usr/bin/uname\"", "Allowlist for all agents (wildcard).")}\n${formatExample("openclaw approvals allowlist remove \"~/Projects/**/bin/rg\"", "Remove an allowlist pattern.")}\n\n${theme.muted("Docs:")} ${formatDocsLink("/cli/approvals", "docs.openclaw.ai/cli/approvals")}\n`);
	registerAllowlistMutationCommand({
		allowlist,
		name: "add",
		description: "Add a glob pattern to an allowlist",
		mutate: ({ trimmedPattern, file, agent, agentKey, allowlistEntries }) => {
			if (allowlistEntries.some((entry) => normalizeAllowlistEntry(entry) === trimmedPattern)) {
				defaultRuntime.log("Already allowlisted.");
				return false;
			}
			allowlistEntries.push({
				pattern: trimmedPattern,
				lastUsedAt: Date.now()
			});
			agent.allowlist = allowlistEntries;
			file.agents = {
				...file.agents,
				[agentKey]: agent
			};
			return true;
		}
	});
	registerAllowlistMutationCommand({
		allowlist,
		name: "remove",
		description: "Remove a glob pattern from an allowlist",
		mutate: ({ trimmedPattern, file, agent, agentKey, allowlistEntries }) => {
			const nextEntries = allowlistEntries.filter((entry) => normalizeAllowlistEntry(entry) !== trimmedPattern);
			if (nextEntries.length === allowlistEntries.length) {
				defaultRuntime.log("Pattern not found.");
				return false;
			}
			if (nextEntries.length === 0) delete agent.allowlist;
			else agent.allowlist = nextEntries;
			if (isEmptyAgent(agent)) {
				const agents = { ...file.agents };
				delete agents[agentKey];
				file.agents = Object.keys(agents).length > 0 ? agents : void 0;
			} else file.agents = {
				...file.agents,
				[agentKey]: agent
			};
			return true;
		}
	});
}
//#endregion
export { registerExecApprovalsCli };
