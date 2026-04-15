import { i as defineChannelPluginEntry } from "./core-CUJtaNvv.js";
import { t as zaloPlugin } from "./channel-C_laKeaN.js";
import { n as setZaloRuntime } from "./runtime-BqNrhCO1.js";
//#region extensions/zalo/index.ts
var zalo_default = defineChannelPluginEntry({
	id: "zalo",
	name: "Zalo",
	description: "Zalo channel plugin",
	plugin: zaloPlugin,
	setRuntime: setZaloRuntime
});
//#endregion
export { zalo_default as t };
