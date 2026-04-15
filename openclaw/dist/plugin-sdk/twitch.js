import "../logger-CoEtkjhn.js";
import "../paths-GHJ97ebE.js";
import "../tmp-openclaw-dir-idKIOMmb.js";
import "../theme-CdOoMzRk.js";
import "../globals-41sdSaKv.js";
import "../subsystem-VzQeL-96.js";
import "../ansi-BEJF8NKS.js";
import "../utils-seFh26xW.js";
import { t as formatDocsLink } from "../links-kyhxxZ1i.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../account-id-BRjWLAzU.js";
import "../boundary-path-Dm0QJ7-y.js";
import "../boundary-file-read-BGs2p0f_.js";
import "../logger-DtlnPe_E.js";
import "../exec-BnXF7JCz.js";
import "../workspace-DFURCHD1.js";
import "../agent-scope-D8nGiwMS.js";
import "../registry-BYdGgYCt.js";
import { m as MarkdownConfigSchema } from "../zod-schema.core-DICsKVAU.js";
import "../runtime-C8dQugND.js";
import "../registry-BjRjosRJ.js";
import "../plugins-Cr3w-NCx.js";
import "../identity-BPWC1ZKG.js";
import "../path-alias-guards-Pxk2Zypg.js";
import "../typing-CEvn35fL.js";
import { t as emptyPluginConfigSchema } from "../config-schema-B-w7pwsi.js";
import { r as buildChannelConfigSchema } from "../config-schema-xeZI-QE_.js";
import "../fs-safe-DJuvunYx.js";
import { t as createChannelReplyPipeline } from "../channel-reply-pipeline-iqE3vE0x.js";
import "../setup-binary-dR9y6RdL.js";
import "../archive-CaLGrkZ_.js";
import "../signal-cli-install-B8KV8qNP.js";
import "../setup-wizard-helpers-DLsY_UDN.js";
import "../setup-wizard-proxy-CmLvLRXc.js";
import "../setup-bKzDoFI-.js";
import { t as createOptionalChannelSetupSurface } from "../channel-setup-nAHpuATg.js";
//#region src/plugin-sdk/twitch.ts
const twitchSetup = createOptionalChannelSetupSurface({
	channel: "twitch",
	label: "Twitch",
	npmSpec: "@openclaw/twitch"
});
const twitchSetupAdapter = twitchSetup.setupAdapter;
const twitchSetupWizard = twitchSetup.setupWizard;
//#endregion
export { DEFAULT_ACCOUNT_ID, MarkdownConfigSchema, buildChannelConfigSchema, createChannelReplyPipeline, emptyPluginConfigSchema, formatDocsLink, normalizeAccountId, twitchSetupAdapter, twitchSetupWizard };
