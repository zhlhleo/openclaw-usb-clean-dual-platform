import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
import "./logger-CoEtkjhn.js";
import { _ as resolveStateDir, o as resolveConfigPath } from "./paths-GHJ97ebE.js";
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
import { r as runExec } from "./exec-BnXF7JCz.js";
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
import "./paths-DTrmv0TT.js";
import "./method-scopes-CLst3sPS.js";
import "./call-DOMUQRU0.js";
import "./control-ui-shared-CweZKiF7.js";
import "./ports-lsof-BTr26w8T.js";
import "./restart-stale-pids-Bn0Pdc9z.js";
import "./runtime-parse-BWAbSsrY.js";
import "./launchd-Dq5jEpGt.js";
import "./service-BErkahkD.js";
import "./ports-DWLM_u4A.js";
import "./systemd-B_aNW_fh.js";
import "./probe-DSIT_BzO.js";
import "./probe-auth-BAOvNytZ.js";
import { n as hasPotentialConfiguredChannels } from "./config-presence-B7Q1svdj.js";
import "./heartbeat-BUaFgTg1.js";
import "./system-events-B1AzvbLz.js";
import { a as resolveSharedMemoryStatusSnapshot, c as getNodeDaemonStatusSummary, h as pickGatewaySelfPresence, i as resolveMemoryPluginStatus, m as resolveOsSummary, n as buildTailscaleHttpsUrl, o as getAgentLocalStatuses, r as resolveGatewayProbeSnapshot, s as getDaemonStatusSummary, t as getStatusSummary } from "./status.summary-2vO9UGOE.js";
import "./heartbeat-summary-SdzXSmtX.js";
import { h as resolveUpdateChannelDisplay, p as normalizeUpdateChannel } from "./update-check-D-XTRwep.js";
import "./node-service-DmNDkDoi.js";
import { r as getUpdateCheckResult } from "./status.update-rW35ONQ5.js";
import { existsSync } from "node:fs";
import path from "node:path";
import os from "node:os";
//#region src/commands/status.scan.fast-json.ts
let pluginRegistryModulePromise;
let pluginStatusModulePromise;
let configIoModulePromise;
let commandSecretTargetsModulePromise;
let commandSecretGatewayModulePromise;
let memorySearchModulePromise;
let statusScanDepsRuntimeModulePromise;
function loadPluginRegistryModule() {
	pluginRegistryModulePromise ??= import("./plugin-registry-CnhUevHp.js");
	return pluginRegistryModulePromise;
}
function loadPluginStatusModule() {
	pluginStatusModulePromise ??= import("./status-DSWu_6jw.js");
	return pluginStatusModulePromise;
}
function loadConfigIoModule() {
	configIoModulePromise ??= import("./io-GdCVxvdv.js");
	return configIoModulePromise;
}
function loadCommandSecretTargetsModule() {
	commandSecretTargetsModulePromise ??= import("./command-secret-targets-C5ZQSmRC.js");
	return commandSecretTargetsModulePromise;
}
function loadCommandSecretGatewayModule() {
	commandSecretGatewayModulePromise ??= import("./command-secret-gateway-Dk_LwURc.js");
	return commandSecretGatewayModulePromise;
}
function loadMemorySearchModule() {
	memorySearchModulePromise ??= import("./memory-search-BllNZXsN.js");
	return memorySearchModulePromise;
}
function loadStatusScanDepsRuntimeModule() {
	statusScanDepsRuntimeModulePromise ??= import("./status.scan.deps.runtime-Cc_MT1_i.js");
	return statusScanDepsRuntimeModulePromise;
}
function shouldSkipMissingConfigFastPath() {
	return process.env.VITEST === "true" || process.env.VITEST_POOL_ID !== void 0 || false;
}
function isMissingConfigColdStart() {
	return !shouldSkipMissingConfigFastPath() && !existsSync(resolveConfigPath(process.env));
}
function buildColdStartUpdateResult() {
	return {
		root: null,
		installKind: "unknown",
		packageManager: "unknown"
	};
}
function shouldCollectPluginCompatibility(cfg) {
	if (hasPotentialConfiguredChannels(cfg)) return true;
	return existsSync(resolveConfigPath(process.env));
}
function resolveDefaultMemoryStorePath(agentId) {
	return path.join(resolveStateDir(process.env, os.homedir), "memory", `${agentId}.sqlite`);
}
async function resolveMemoryStatusSnapshot(params) {
	const { resolveMemorySearchConfig } = await loadMemorySearchModule();
	const { getMemorySearchManager } = await loadStatusScanDepsRuntimeModule();
	return await resolveSharedMemoryStatusSnapshot({
		cfg: params.cfg,
		agentStatus: params.agentStatus,
		memoryPlugin: params.memoryPlugin,
		resolveMemoryConfig: resolveMemorySearchConfig,
		getMemorySearchManager,
		requireDefaultStore: resolveDefaultMemoryStorePath
	});
}
async function readStatusSourceConfig() {
	if (!shouldSkipMissingConfigFastPath() && !existsSync(resolveConfigPath(process.env))) return {};
	const { readBestEffortConfig } = await loadConfigIoModule();
	return await readBestEffortConfig();
}
async function resolveStatusConfig(params) {
	if (!shouldSkipMissingConfigFastPath() && !existsSync(resolveConfigPath(process.env))) return {
		resolvedConfig: params.sourceConfig,
		diagnostics: []
	};
	const [{ resolveCommandSecretRefsViaGateway }, { getStatusCommandSecretTargetIds }] = await Promise.all([loadCommandSecretGatewayModule(), loadCommandSecretTargetsModule()]);
	return await resolveCommandSecretRefsViaGateway({
		config: params.sourceConfig,
		commandName: params.commandName,
		targetIds: getStatusCommandSecretTargetIds(),
		mode: "read_only_status"
	});
}
async function scanStatusJsonFast(opts, _runtime) {
	const coldStart = isMissingConfigColdStart();
	const loadedRaw = await readStatusSourceConfig();
	const { resolvedConfig: cfg, diagnostics: secretDiagnostics } = await resolveStatusConfig({
		sourceConfig: loadedRaw,
		commandName: "status --json"
	});
	const hasConfiguredChannels = hasPotentialConfiguredChannels(cfg);
	if (hasConfiguredChannels) {
		const { ensurePluginRegistryLoaded } = await loadPluginRegistryModule();
		ensurePluginRegistryLoaded({ scope: "configured-channels" });
	}
	const osSummary = resolveOsSummary();
	const tailscaleMode = cfg.gateway?.tailscale?.mode ?? "off";
	const updateTimeoutMs = opts.all ? 6500 : 2500;
	const skipColdStartNetworkChecks = coldStart && !hasConfiguredChannels && opts.all !== true;
	const updatePromise = skipColdStartNetworkChecks ? Promise.resolve(buildColdStartUpdateResult()) : getUpdateCheckResult({
		timeoutMs: updateTimeoutMs,
		fetchGit: true,
		includeRegistry: true
	});
	const agentStatusPromise = getAgentLocalStatuses(cfg);
	const summaryPromise = getStatusSummary({
		config: cfg,
		sourceConfig: loadedRaw
	});
	const tailscaleDnsPromise = tailscaleMode === "off" ? Promise.resolve(null) : loadStatusScanDepsRuntimeModule().then(({ getTailnetHostname }) => getTailnetHostname((cmd, args) => runExec(cmd, args, {
		timeoutMs: 1200,
		maxBuffer: 2e5
	}))).catch(() => null);
	const gatewayProbePromise = resolveGatewayProbeSnapshot({
		cfg,
		opts: {
			...opts,
			...skipColdStartNetworkChecks ? { skipProbe: true } : {}
		}
	});
	const [tailscaleDns, update, agentStatus, gatewaySnapshot, summary] = await Promise.all([
		tailscaleDnsPromise,
		updatePromise,
		agentStatusPromise,
		gatewayProbePromise,
		summaryPromise
	]);
	const tailscaleHttpsUrl = buildTailscaleHttpsUrl({
		tailscaleMode,
		tailscaleDns,
		controlUiBasePath: cfg.gateway?.controlUi?.basePath
	});
	const { gatewayConnection, remoteUrlMissing, gatewayMode, gatewayProbeAuth, gatewayProbeAuthWarning, gatewayProbe } = gatewaySnapshot;
	const gatewayReachable = gatewayProbe?.ok === true;
	const gatewaySelf = gatewayProbe?.presence ? pickGatewaySelfPresence(gatewayProbe.presence) : null;
	const memoryPlugin = resolveMemoryPluginStatus(cfg);
	return {
		cfg,
		sourceConfig: loadedRaw,
		secretDiagnostics,
		osSummary,
		tailscaleMode,
		tailscaleDns,
		tailscaleHttpsUrl,
		update,
		gatewayConnection,
		remoteUrlMissing,
		gatewayMode,
		gatewayProbeAuth,
		gatewayProbeAuthWarning,
		gatewayProbe,
		gatewayReachable,
		gatewaySelf,
		channelIssues: [],
		agentStatus,
		channels: {
			rows: [],
			details: []
		},
		summary,
		memory: opts.all ? await resolveMemoryStatusSnapshot({
			cfg,
			agentStatus,
			memoryPlugin
		}) : null,
		memoryPlugin,
		pluginCompatibility: shouldCollectPluginCompatibility(cfg) ? await loadPluginStatusModule().then(({ buildPluginCompatibilityNotices }) => buildPluginCompatibilityNotices({ config: cfg })) : []
	};
}
//#endregion
//#region src/commands/status-json.ts
let providerUsagePromise;
let securityAuditModulePromise;
let gatewayCallModulePromise;
function loadProviderUsage() {
	providerUsagePromise ??= import("./provider-usage-H-MDYp5n.js");
	return providerUsagePromise;
}
function loadSecurityAuditModule() {
	securityAuditModulePromise ??= import("./audit.runtime-BCCkjE-o.js");
	return securityAuditModulePromise;
}
function loadGatewayCallModule() {
	gatewayCallModulePromise ??= import("./call-CoLt5GOP.js");
	return gatewayCallModulePromise;
}
async function statusJsonCommand(opts, runtime) {
	const scan = await scanStatusJsonFast({
		timeoutMs: opts.timeoutMs,
		all: opts.all
	}, runtime);
	const securityAudit = opts.all ? await loadSecurityAuditModule().then(({ runSecurityAudit }) => runSecurityAudit({
		config: scan.cfg,
		sourceConfig: scan.sourceConfig,
		deep: false,
		includeFilesystem: true,
		includeChannelSecurity: true
	})) : void 0;
	const usage = opts.usage ? await loadProviderUsage().then(({ loadProviderUsageSummary }) => loadProviderUsageSummary({ timeoutMs: opts.timeoutMs })) : void 0;
	const gatewayCall = opts.deep ? await loadGatewayCallModule().then((mod) => mod.callGateway) : null;
	const health = gatewayCall != null ? await gatewayCall({
		method: "health",
		params: { probe: true },
		timeoutMs: opts.timeoutMs,
		config: scan.cfg
	}).catch(() => void 0) : void 0;
	const lastHeartbeat = gatewayCall != null && scan.gatewayReachable ? await gatewayCall({
		method: "last-heartbeat",
		params: {},
		timeoutMs: opts.timeoutMs,
		config: scan.cfg
	}).catch(() => null) : null;
	const [daemon, nodeDaemon] = await Promise.all([getDaemonStatusSummary(), getNodeDaemonStatusSummary()]);
	const channelInfo = resolveUpdateChannelDisplay({
		configChannel: normalizeUpdateChannel(scan.cfg.update?.channel),
		installKind: scan.update.installKind,
		gitTag: scan.update.git?.tag ?? null,
		gitBranch: scan.update.git?.branch ?? null
	});
	runtime.log(JSON.stringify({
		...scan.summary,
		os: scan.osSummary,
		update: scan.update,
		updateChannel: channelInfo.channel,
		updateChannelSource: channelInfo.source,
		memory: scan.memory,
		memoryPlugin: scan.memoryPlugin,
		gateway: {
			mode: scan.gatewayMode,
			url: scan.gatewayConnection.url,
			urlSource: scan.gatewayConnection.urlSource,
			misconfigured: scan.remoteUrlMissing,
			reachable: scan.gatewayReachable,
			connectLatencyMs: scan.gatewayProbe?.connectLatencyMs ?? null,
			self: scan.gatewaySelf,
			error: scan.gatewayProbe?.error ?? null,
			authWarning: scan.gatewayProbeAuthWarning ?? null
		},
		gatewayService: daemon,
		nodeService: nodeDaemon,
		agents: scan.agentStatus,
		secretDiagnostics: scan.secretDiagnostics,
		...securityAudit ? { securityAudit } : {},
		...health || usage || lastHeartbeat ? {
			health,
			usage,
			lastHeartbeat
		} : {}
	}, null, 2));
}
//#endregion
export { statusJsonCommand };
