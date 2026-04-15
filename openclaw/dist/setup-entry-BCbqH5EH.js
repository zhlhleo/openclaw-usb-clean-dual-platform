import { a as defineSetupPluginEntry } from "./core-CUJtaNvv.js";
import { n as lineSetupWizard, r as lineSetupAdapter, t as lineChannelPluginCommon } from "./channel-shared-q31ydArZ.js";
//#region extensions/line/src/channel.setup.ts
const lineSetupPlugin = {
	id: "line",
	...lineChannelPluginCommon,
	setupWizard: lineSetupWizard,
	setup: lineSetupAdapter
};
//#endregion
//#region extensions/line/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(lineSetupPlugin);
//#endregion
export { lineSetupPlugin as n, setup_entry_default as t };
