import "../logger-CoEtkjhn.js";
import "../paths-GHJ97ebE.js";
import "../tmp-openclaw-dir-idKIOMmb.js";
import "../theme-CdOoMzRk.js";
import "../globals-41sdSaKv.js";
import "../subsystem-VzQeL-96.js";
import "../ansi-BEJF8NKS.js";
import "../utils-seFh26xW.js";
import "../links-kyhxxZ1i.js";
import { t as DEFAULT_ACCOUNT_ID } from "../account-id-BRjWLAzU.js";
import "../boundary-path-Dm0QJ7-y.js";
import "../logger-DtlnPe_E.js";
import "../exec-BnXF7JCz.js";
import "../registry-BYdGgYCt.js";
import "../ip-CndEBNxP.js";
import { m as MarkdownConfigSchema } from "../zod-schema.core-DICsKVAU.js";
import "../message-channel-Df2WMfuH.js";
import "../runtime-C8dQugND.js";
import "../registry-BjRjosRJ.js";
import "../path-alias-guards-Pxk2Zypg.js";
import { s as isBlockedHostnameOrIp } from "../ssrf-CrYPbrLn.js";
import { t as emptyPluginConfigSchema } from "../config-schema-B-w7pwsi.js";
import { d as mapAllowFromEntries } from "../channel-config-helpers-DDZb1T_S.js";
import { n as formatPairingApproveHint } from "../helpers-BcTpR5CJ.js";
import "../whatsapp-DhaMCc_1.js";
import { r as buildChannelConfigSchema } from "../config-schema-xeZI-QE_.js";
import "../fs-safe-DJuvunYx.js";
import "../shared-XXixA_ua.js";
import { c as createDefaultChannelRuntimeState, s as collectStatusIssuesFromLastError } from "../status-helpers-MxakceNE.js";
import { c as requestBodyErrorToText, o as readJsonBodyWithLimit } from "../http-body-D-NIzIGK.js";
import "../setup-binary-dR9y6RdL.js";
import "../archive-CaLGrkZ_.js";
import "../signal-cli-install-B8KV8qNP.js";
import "../setup-wizard-helpers-DLsY_UDN.js";
import "../setup-wizard-proxy-CmLvLRXc.js";
import "../setup-bKzDoFI-.js";
import { t as createOptionalChannelSetupSurface } from "../channel-setup-nAHpuATg.js";
import { a as createFixedWindowRateLimiter } from "../webhook-memory-guards-DVGG6y9l.js";
//#region src/plugin-sdk/nostr.ts
const nostrSetup = createOptionalChannelSetupSurface({
	channel: "nostr",
	label: "Nostr",
	npmSpec: "@openclaw/nostr",
	docsPath: "/channels/nostr"
});
const nostrSetupAdapter = nostrSetup.setupAdapter;
const nostrSetupWizard = nostrSetup.setupWizard;
//#endregion
export { DEFAULT_ACCOUNT_ID, MarkdownConfigSchema, buildChannelConfigSchema, collectStatusIssuesFromLastError, createDefaultChannelRuntimeState, createFixedWindowRateLimiter, emptyPluginConfigSchema, formatPairingApproveHint, isBlockedHostnameOrIp, mapAllowFromEntries, nostrSetupAdapter, nostrSetupWizard, readJsonBodyWithLimit, requestBodyErrorToText };
