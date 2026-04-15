import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
import "./registry-BYdGgYCt.js";
import "./runtime-C8dQugND.js";
import { n as listChannelPlugins } from "./registry-BjRjosRJ.js";
import "./plugins-Cr3w-NCx.js";
import "./read-only-account-inspect-BTtFTljM.js";
import { t as resolveDefaultChannelAccountContext } from "./channel-account-context-BiG2gyHm.js";
//#region src/commands/status.link-channel.ts
async function resolveLinkChannelContext(cfg) {
	for (const plugin of listChannelPlugins()) {
		const { defaultAccountId, account, enabled, configured } = await resolveDefaultChannelAccountContext(plugin, cfg, {
			mode: "read_only",
			commandName: "status"
		});
		const snapshot = plugin.config.describeAccount ? plugin.config.describeAccount(account, cfg) : {
			accountId: defaultAccountId,
			enabled,
			configured
		};
		const summaryRecord = plugin.status?.buildChannelSummary ? await plugin.status.buildChannelSummary({
			account,
			cfg,
			defaultAccountId,
			snapshot
		}) : void 0;
		const linked = summaryRecord && typeof summaryRecord.linked === "boolean" ? summaryRecord.linked : null;
		if (linked === null) continue;
		return {
			linked,
			authAgeMs: summaryRecord && typeof summaryRecord.authAgeMs === "number" ? summaryRecord.authAgeMs : null,
			account,
			accountId: defaultAccountId,
			plugin
		};
	}
	return null;
}
//#endregion
export { resolveLinkChannelContext };
