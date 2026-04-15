import { t as buildNvidiaProvider } from "../../provider-catalog-B4QT5Ghk.js";
import { t as definePluginEntry } from "../../plugin-entry-c_820PJi.js";
import { n as buildSingleProviderApiKeyCatalog } from "../../provider-catalog-B_WMwfT5.js";
//#region extensions/nvidia/index.ts
const PROVIDER_ID = "nvidia";
var nvidia_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "NVIDIA Provider",
	description: "Bundled NVIDIA provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "NVIDIA",
			docsPath: "/providers/nvidia",
			envVars: ["NVIDIA_API_KEY"],
			auth: [],
			catalog: {
				order: "simple",
				run: (ctx) => buildSingleProviderApiKeyCatalog({
					ctx,
					providerId: PROVIDER_ID,
					buildProvider: buildNvidiaProvider
				})
			}
		});
	}
});
//#endregion
export { nvidia_default as default };
