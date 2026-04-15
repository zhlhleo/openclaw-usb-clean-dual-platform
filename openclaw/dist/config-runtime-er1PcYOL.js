import { v as expandHomePrefix } from "./paths-GHJ97ebE.js";
import { t as CONFIG_DIR } from "./utils-seFh26xW.js";
import { n as normalizeAccountId } from "./account-id-BRjWLAzU.js";
import { r as normalizeChannelId } from "./registry-BjRjosRJ.js";
import { t as resolveAccountEntry } from "./account-lookup-CT7OB5Zn.js";
import fs from "node:fs";
import path from "node:path";
import JSON5 from "json5";
import { randomBytes } from "node:crypto";
//#region src/config/markdown-tables.ts
const DEFAULT_TABLE_MODES = new Map([
	["signal", "bullets"],
	["whatsapp", "bullets"],
	["mattermost", "off"]
]);
const isMarkdownTableMode = (value) => value === "off" || value === "bullets" || value === "code";
function resolveMarkdownModeFromSection(section, accountId) {
	if (!section) return;
	const normalizedAccountId = normalizeAccountId(accountId);
	const accounts = section.accounts;
	if (accounts && typeof accounts === "object") {
		const matchMode = resolveAccountEntry(accounts, normalizedAccountId)?.markdown?.tables;
		if (isMarkdownTableMode(matchMode)) return matchMode;
	}
	const sectionMode = section.markdown?.tables;
	return isMarkdownTableMode(sectionMode) ? sectionMode : void 0;
}
function resolveMarkdownTableMode(params) {
	const channel = normalizeChannelId(params.channel);
	const defaultMode = channel ? DEFAULT_TABLE_MODES.get(channel) ?? "code" : "code";
	if (!channel || !params.cfg) return defaultMode;
	return resolveMarkdownModeFromSection(params.cfg.channels?.[channel] ?? params.cfg?.[channel], params.accountId) ?? defaultMode;
}
//#endregion
//#region src/utils/parse-json-compat.ts
function parseJsonWithJson5Fallback(raw) {
	try {
		return JSON.parse(raw);
	} catch {
		return JSON5.parse(raw);
	}
}
//#endregion
//#region src/cron/store.ts
const DEFAULT_CRON_DIR = path.join(CONFIG_DIR, "cron");
const DEFAULT_CRON_STORE_PATH = path.join(DEFAULT_CRON_DIR, "jobs.json");
const serializedStoreCache = /* @__PURE__ */ new Map();
function resolveCronStorePath(storePath) {
	if (storePath?.trim()) {
		const raw = storePath.trim();
		if (raw.startsWith("~")) return path.resolve(expandHomePrefix(raw));
		return path.resolve(raw);
	}
	return DEFAULT_CRON_STORE_PATH;
}
async function loadCronStore(storePath) {
	try {
		const raw = await fs.promises.readFile(storePath, "utf-8");
		let parsed;
		try {
			parsed = parseJsonWithJson5Fallback(raw);
		} catch (err) {
			throw new Error(`Failed to parse cron store at ${storePath}: ${String(err)}`, { cause: err });
		}
		const parsedRecord = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
		const store = {
			version: 1,
			jobs: (Array.isArray(parsedRecord.jobs) ? parsedRecord.jobs : []).filter(Boolean)
		};
		serializedStoreCache.set(storePath, JSON.stringify(store, null, 2));
		return store;
	} catch (err) {
		if (err?.code === "ENOENT") {
			serializedStoreCache.delete(storePath);
			return {
				version: 1,
				jobs: []
			};
		}
		throw err;
	}
}
async function setSecureFileMode(filePath) {
	await fs.promises.chmod(filePath, 384).catch(() => void 0);
}
async function saveCronStore(storePath, store, opts) {
	const storeDir = path.dirname(storePath);
	await fs.promises.mkdir(storeDir, {
		recursive: true,
		mode: 448
	});
	await fs.promises.chmod(storeDir, 448).catch(() => void 0);
	const json = JSON.stringify(store, null, 2);
	const cached = serializedStoreCache.get(storePath);
	if (cached === json) return;
	let previous = cached ?? null;
	if (previous === null) try {
		previous = await fs.promises.readFile(storePath, "utf-8");
	} catch (err) {
		if (err.code !== "ENOENT") throw err;
	}
	if (previous === json) {
		serializedStoreCache.set(storePath, json);
		return;
	}
	const tmp = `${storePath}.${process.pid}.${randomBytes(8).toString("hex")}.tmp`;
	await fs.promises.writeFile(tmp, json, {
		encoding: "utf-8",
		mode: 384
	});
	await setSecureFileMode(tmp);
	if (previous !== null && !opts?.skipBackup) try {
		const backupPath = `${storePath}.bak`;
		await fs.promises.copyFile(storePath, backupPath);
		await setSecureFileMode(backupPath);
	} catch {}
	await renameWithRetry(tmp, storePath);
	await setSecureFileMode(storePath);
	serializedStoreCache.set(storePath, json);
}
const RENAME_MAX_RETRIES = 3;
const RENAME_BASE_DELAY_MS = 50;
async function renameWithRetry(src, dest) {
	for (let attempt = 0; attempt <= RENAME_MAX_RETRIES; attempt++) try {
		await fs.promises.rename(src, dest);
		return;
	} catch (err) {
		const code = err.code;
		if (code === "EBUSY" && attempt < RENAME_MAX_RETRIES) {
			await new Promise((resolve) => setTimeout(resolve, RENAME_BASE_DELAY_MS * 2 ** attempt));
			continue;
		}
		if (code === "EPERM" || code === "EEXIST") {
			await fs.promises.copyFile(src, dest);
			await fs.promises.unlink(src).catch(() => {});
			return;
		}
		throw err;
	}
}
//#endregion
export { resolveMarkdownTableMode as a, parseJsonWithJson5Fallback as i, resolveCronStorePath as n, saveCronStore as r, loadCronStore as t };
