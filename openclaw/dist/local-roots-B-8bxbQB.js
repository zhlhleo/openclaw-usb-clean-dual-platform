import { _ as resolveStateDir } from "./paths-GHJ97ebE.js";
import { n as resolvePreferredOpenClawTmpDir } from "./tmp-openclaw-dir-idKIOMmb.js";
import { p as resolveAgentWorkspaceDir } from "./agent-scope-D8nGiwMS.js";
import path from "node:path";
//#region src/media/local-roots.ts
let cachedPreferredTmpDir;
function resolveCachedPreferredTmpDir() {
	if (!cachedPreferredTmpDir) cachedPreferredTmpDir = resolvePreferredOpenClawTmpDir();
	return cachedPreferredTmpDir;
}
function buildMediaLocalRoots(stateDir, options = {}) {
	const resolvedStateDir = path.resolve(stateDir);
	return [
		options.preferredTmpDir ?? resolveCachedPreferredTmpDir(),
		path.join(resolvedStateDir, "media"),
		path.join(resolvedStateDir, "agents"),
		path.join(resolvedStateDir, "workspace"),
		path.join(resolvedStateDir, "sandboxes")
	];
}
function getDefaultMediaLocalRoots() {
	return buildMediaLocalRoots(resolveStateDir());
}
function getAgentScopedMediaLocalRoots(cfg, agentId) {
	const roots = buildMediaLocalRoots(resolveStateDir());
	if (!agentId?.trim()) return roots;
	const workspaceDir = resolveAgentWorkspaceDir(cfg, agentId);
	if (!workspaceDir) return roots;
	const normalizedWorkspaceDir = path.resolve(workspaceDir);
	if (!roots.includes(normalizedWorkspaceDir)) roots.push(normalizedWorkspaceDir);
	return roots;
}
//#endregion
export { getDefaultMediaLocalRoots as n, getAgentScopedMediaLocalRoots as t };
