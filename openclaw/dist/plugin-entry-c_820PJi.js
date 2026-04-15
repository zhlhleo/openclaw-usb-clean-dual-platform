import { t as emptyPluginConfigSchema } from "./config-schema-B-w7pwsi.js";
//#region src/plugin-sdk/plugin-entry.ts
function resolvePluginConfigSchema(configSchema = emptyPluginConfigSchema) {
	return typeof configSchema === "function" ? configSchema() : configSchema;
}
function definePluginEntry({ id, name, description, kind, configSchema = emptyPluginConfigSchema, register }) {
	return {
		id,
		name,
		description,
		...kind ? { kind } : {},
		configSchema: resolvePluginConfigSchema(configSchema),
		register
	};
}
//#endregion
export { definePluginEntry as t };
