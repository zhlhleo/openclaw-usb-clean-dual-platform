import { n as DiscordConfigSchema } from "./zod-schema.providers-core-CAJFPAb3.js";
import { r as getChatChannelMeta } from "./registry-BYdGgYCt.js";
import { dh as resolveDiscordAccount, lh as listDiscordAccountIds, sh as inspectDiscordAccount, uh as resolveDefaultDiscordAccountId } from "./pi-embedded-bGW40fA1.js";
import { i as createScopedChannelConfigAdapter } from "./channel-config-helpers-DDZb1T_S.js";
import { r as buildChannelConfigSchema } from "./config-schema-xeZI-QE_.js";
import { n as createChannelPluginBase } from "./core-CUJtaNvv.js";
import { t as formatAllowFromLowercase } from "./allow-from-BlfIMRQi.js";
import { n as createDiscordSetupWizardProxy } from "./setup-core-CZFRVy9-.js";
//#region extensions/discord/src/shared.ts
const DISCORD_CHANNEL = "discord";
async function loadDiscordChannelRuntime() {
	return await import("./channel.runtime-Bl13eB6o.js");
}
const discordSetupWizard = createDiscordSetupWizardProxy(async () => (await loadDiscordChannelRuntime()).discordSetupWizard);
const discordConfigAdapter = createScopedChannelConfigAdapter({
	sectionKey: DISCORD_CHANNEL,
	listAccountIds: listDiscordAccountIds,
	resolveAccount: (cfg, accountId) => resolveDiscordAccount({
		cfg,
		accountId
	}),
	inspectAccount: (cfg, accountId) => inspectDiscordAccount({
		cfg,
		accountId
	}),
	defaultAccountId: resolveDefaultDiscordAccountId,
	clearBaseFields: ["token", "name"],
	resolveAllowFrom: (account) => account.config.dm?.allowFrom,
	formatAllowFrom: (allowFrom) => formatAllowFromLowercase({ allowFrom }),
	resolveDefaultTo: (account) => account.config.defaultTo
});
function createDiscordPluginBase(params) {
	return createChannelPluginBase({
		id: DISCORD_CHANNEL,
		setupWizard: discordSetupWizard,
		meta: { ...getChatChannelMeta(DISCORD_CHANNEL) },
		capabilities: {
			chatTypes: [
				"direct",
				"channel",
				"thread"
			],
			polls: true,
			reactions: true,
			threads: true,
			media: true,
			nativeCommands: true
		},
		streaming: { blockStreamingCoalesceDefaults: {
			minChars: 1500,
			idleMs: 1e3
		} },
		reload: { configPrefixes: ["channels.discord"] },
		configSchema: buildChannelConfigSchema(DiscordConfigSchema),
		config: {
			...discordConfigAdapter,
			isConfigured: (account) => Boolean(account.token?.trim()),
			describeAccount: (account) => ({
				accountId: account.accountId,
				name: account.name,
				enabled: account.enabled,
				configured: Boolean(account.token?.trim()),
				tokenSource: account.tokenSource
			})
		},
		setup: params.setup
	});
}
//#endregion
export { discordConfigAdapter as n, createDiscordPluginBase as t };
