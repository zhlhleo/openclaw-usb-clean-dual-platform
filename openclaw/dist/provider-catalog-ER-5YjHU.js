import { H as HUGGINGFACE_MODEL_CATALOG, U as buildHuggingfaceModelDefinition, V as HUGGINGFACE_BASE_URL, W as discoverHuggingfaceModels } from "./provider-models-mDSVWqBj.js";
//#region extensions/huggingface/provider-catalog.ts
async function buildHuggingfaceProvider(discoveryApiKey) {
	const resolvedSecret = discoveryApiKey?.trim() ?? "";
	return {
		baseUrl: HUGGINGFACE_BASE_URL,
		api: "openai-completions",
		models: resolvedSecret !== "" ? await discoverHuggingfaceModels(resolvedSecret) : HUGGINGFACE_MODEL_CATALOG.map(buildHuggingfaceModelDefinition)
	};
}
//#endregion
export { buildHuggingfaceProvider as t };
