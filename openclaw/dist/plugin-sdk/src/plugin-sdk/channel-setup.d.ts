import type { ChannelSetupWizard } from "../channels/plugins/setup-wizard.js";
import type { ChannelSetupAdapter } from "../channels/plugins/types.adapters.js";
export type { ChannelSetupAdapter } from "../channels/plugins/types.adapters.js";
export type { ChannelSetupInput } from "../channels/plugins/types.core.js";
export type { ChannelSetupDmPolicy, ChannelSetupWizard } from "./setup.js";
export { DEFAULT_ACCOUNT_ID, createTopLevelChannelDmPolicy, formatDocsLink, setSetupChannelEnabled, splitSetupEntries, } from "./setup.js";
type OptionalChannelSetupParams = {
    channel: string;
    label: string;
    npmSpec?: string;
    docsPath?: string;
};
export type OptionalChannelSetupSurface = {
    setupAdapter: ChannelSetupAdapter;
    setupWizard: ChannelSetupWizard;
};
export { createOptionalChannelSetupAdapter, createOptionalChannelSetupWizard, } from "./optional-channel-setup.js";
export declare function createOptionalChannelSetupSurface(params: OptionalChannelSetupParams): OptionalChannelSetupSurface;
