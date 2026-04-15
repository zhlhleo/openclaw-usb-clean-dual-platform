import type { ChannelId } from "../channels/plugins/types.js";
export { createLoggedPairingApprovalNotifier, createPairingPrefixStripper, createTextPairingAdapter, } from "../channels/plugins/pairing-adapters.js";
import { issuePairingChallenge } from "../pairing/pairing-challenge.js";
import type { PluginRuntime } from "../plugins/runtime/types.js";
import { createScopedPairingAccess } from "./pairing-access.js";
type ScopedPairingAccess = ReturnType<typeof createScopedPairingAccess>;
export type ChannelPairingController = ScopedPairingAccess & {
    issueChallenge: (params: Omit<Parameters<typeof issuePairingChallenge>[0], "channel" | "upsertPairingRequest">) => ReturnType<typeof issuePairingChallenge>;
};
export declare function createChannelPairingChallengeIssuer(params: {
    channel: ChannelId;
    upsertPairingRequest: Parameters<typeof issuePairingChallenge>[0]["upsertPairingRequest"];
}): (challenge: Omit<Parameters<typeof issuePairingChallenge>[0], "channel" | "upsertPairingRequest">) => Promise<{
    created: boolean;
    code?: string;
}>;
export declare function createChannelPairingController(params: {
    core: PluginRuntime;
    channel: ChannelId;
    accountId: string;
}): ChannelPairingController;
