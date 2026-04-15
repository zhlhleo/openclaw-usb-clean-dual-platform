import "./logger-CoEtkjhn.js";
import "./paths-GHJ97ebE.js";
import "./tmp-openclaw-dir-idKIOMmb.js";
import { r as theme } from "./theme-CdOoMzRk.js";
import "./globals-41sdSaKv.js";
import { m as defaultRuntime } from "./subsystem-VzQeL-96.js";
import "./ansi-BEJF8NKS.js";
import "./boolean-C3GkJetE.js";
import "./env-mRJH5TpF.js";
import "./utils-seFh26xW.js";
import { t as formatDocsLink } from "./links-kyhxxZ1i.js";
import "./boundary-path-Dm0QJ7-y.js";
import "./boundary-file-read-BGs2p0f_.js";
import "./logger-DtlnPe_E.js";
import "./exec-BnXF7JCz.js";
import "./workspace-DFURCHD1.js";
import "./agent-scope-D8nGiwMS.js";
import "./model-selection-JWhBHRyf.js";
import { s as loadConfig } from "./io-Cu_7vv9A.js";
import "./host-env-security-Du6GREqL.js";
import "./shell-env-CcwPX9am.js";
import "./safe-text-D1ZwCSxe.js";
import "./version-CMPQj7au.js";
import "./env-substitution-BW_YpYTT.js";
import "./includes-DlCBNZMw.js";
import "./zod-schema.providers-core-CAJFPAb3.js";
import "./legacy-web-search-Cl_mGN-q.js";
import "./registry-BYdGgYCt.js";
import "./config-state-DM5O57m7.js";
import "./manifest-registry-BYh_hnWR.js";
import "./avatar-policy-ByRUKg_o.js";
import "./ip-CndEBNxP.js";
import "./zod-schema.agent-runtime-BLp4Fcyb.js";
import "./zod-schema.core-DICsKVAU.js";
import "./config-CLN6d0um.js";
import "./file-lock-DCUu-l3H.js";
import { t as formatCliCommand } from "./command-format-DRptdHvm.js";
import "./runtime-C8dQugND.js";
import { r as normalizeChannelId } from "./registry-BjRjosRJ.js";
import "./plugins-Cr3w-NCx.js";
import { i as listChannelPairingRequests, m as notifyPairingApproved, n as approveChannelPairingCode, p as listPairingChannels } from "./pairing-store-CCji1-jE.js";
import "./json-store-DKXFzjJC.js";
import { t as resolvePairingIdLabel } from "./pairing-labels-CYOIZDrf.js";
import { n as renderTable, t as getTerminalTableWidth } from "./table-Cno3MQ7S.js";
//#region src/cli/pairing-cli.ts
/** Parse channel, allowing extension channels not in core registry. */
function parseChannel(raw, channels) {
	const value = (typeof raw === "string" ? raw : typeof raw === "number" || typeof raw === "boolean" ? String(raw) : "").trim().toLowerCase();
	if (!value) throw new Error("Channel required");
	const normalized = normalizeChannelId(value);
	if (normalized) {
		if (!channels.includes(normalized)) throw new Error(`Channel ${normalized} does not support pairing`);
		return normalized;
	}
	if (/^[a-z][a-z0-9_-]{0,63}$/.test(value)) return value;
	throw new Error(`Invalid channel: ${value}`);
}
async function notifyApproved(channel, id) {
	await notifyPairingApproved({
		channelId: channel,
		id,
		cfg: loadConfig()
	});
}
function registerPairingCli(program) {
	const channels = listPairingChannels();
	const pairing = program.command("pairing").description("Secure DM pairing (approve inbound requests)").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/pairing", "docs.openclaw.ai/cli/pairing")}\n`);
	pairing.command("list").description("List pending pairing requests").option("--channel <channel>", `Channel (${channels.join(", ")})`).option("--account <accountId>", "Account id (for multi-account channels)").argument("[channel]", `Channel (${channels.join(", ")})`).option("--json", "Print JSON", false).action(async (channelArg, opts) => {
		const channelRaw = opts.channel ?? channelArg ?? (channels.length === 1 ? channels[0] : "");
		if (!channelRaw) throw new Error(`Channel required. Use --channel <channel> or pass it as the first argument (expected one of: ${channels.join(", ")})`);
		const channel = parseChannel(channelRaw, channels);
		const accountId = String(opts.account ?? "").trim();
		const requests = accountId ? await listChannelPairingRequests(channel, process.env, accountId) : await listChannelPairingRequests(channel);
		if (opts.json) {
			defaultRuntime.log(JSON.stringify({
				channel,
				requests
			}, null, 2));
			return;
		}
		if (requests.length === 0) {
			defaultRuntime.log(theme.muted(`No pending ${channel} pairing requests.`));
			return;
		}
		const idLabel = resolvePairingIdLabel(channel);
		const tableWidth = getTerminalTableWidth();
		defaultRuntime.log(`${theme.heading("Pairing requests")} ${theme.muted(`(${requests.length})`)}`);
		defaultRuntime.log(renderTable({
			width: tableWidth,
			columns: [
				{
					key: "Code",
					header: "Code",
					minWidth: 10
				},
				{
					key: "ID",
					header: idLabel,
					minWidth: 12,
					flex: true
				},
				{
					key: "Meta",
					header: "Meta",
					minWidth: 8,
					flex: true
				},
				{
					key: "Requested",
					header: "Requested",
					minWidth: 12
				}
			],
			rows: requests.map((r) => ({
				Code: r.code,
				ID: r.id,
				Meta: r.meta ? JSON.stringify(r.meta) : "",
				Requested: r.createdAt
			}))
		}).trimEnd());
	});
	pairing.command("approve").description("Approve a pairing code and allow that sender").option("--channel <channel>", `Channel (${channels.join(", ")})`).option("--account <accountId>", "Account id (for multi-account channels)").argument("<codeOrChannel>", "Pairing code (or channel when using 2 args)").argument("[code]", "Pairing code (when channel is passed as the 1st arg)").option("--notify", "Notify the requester on the same channel", false).action(async (codeOrChannel, code, opts) => {
		const defaultChannel = channels.length === 1 ? channels[0] : "";
		const usingExplicitChannel = Boolean(opts.channel);
		const hasPositionalCode = code != null;
		const channelRaw = usingExplicitChannel ? opts.channel : hasPositionalCode ? codeOrChannel : defaultChannel;
		const resolvedCode = usingExplicitChannel ? codeOrChannel : hasPositionalCode ? code : codeOrChannel;
		if (!channelRaw || !resolvedCode) throw new Error(`Usage: ${formatCliCommand("openclaw pairing approve <channel> <code>")} (or: ${formatCliCommand("openclaw pairing approve --channel <channel> <code>")})`);
		if (opts.channel && code != null) throw new Error(`Too many arguments. Use: ${formatCliCommand("openclaw pairing approve --channel <channel> <code>")}`);
		const channel = parseChannel(channelRaw, channels);
		const accountId = String(opts.account ?? "").trim();
		const approved = accountId ? await approveChannelPairingCode({
			channel,
			code: String(resolvedCode),
			accountId
		}) : await approveChannelPairingCode({
			channel,
			code: String(resolvedCode)
		});
		if (!approved) throw new Error(`No pending pairing request found for code: ${String(resolvedCode)}`);
		defaultRuntime.log(`${theme.success("Approved")} ${theme.muted(channel)} sender ${theme.command(approved.id)}.`);
		if (!opts.notify) return;
		await notifyApproved(channel, approved.id).catch((err) => {
			defaultRuntime.log(theme.warn(`Failed to notify requester: ${String(err)}`));
		});
	});
}
//#endregion
export { registerPairingCli };
