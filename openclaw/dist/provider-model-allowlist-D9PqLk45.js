import "./defaults-CEhyoDNX.js";
import { m as resolveAllowlistModelKey } from "./model-selection-JWhBHRyf.js";
//#region src/plugins/provider-model-allowlist.ts
function ensureModelAllowlistEntry(params) {
	const rawModelRef = params.modelRef.trim();
	if (!rawModelRef) return params.cfg;
	const models = { ...params.cfg.agents?.defaults?.models };
	const keySet = new Set([rawModelRef]);
	const canonicalKey = resolveAllowlistModelKey(rawModelRef, params.defaultProvider ?? "anthropic");
	if (canonicalKey) keySet.add(canonicalKey);
	for (const key of keySet) models[key] = { ...models[key] };
	return {
		...params.cfg,
		agents: {
			...params.cfg.agents,
			defaults: {
				...params.cfg.agents?.defaults,
				models
			}
		}
	};
}
//#endregion
export { ensureModelAllowlistEntry as t };
