import { buildModelsProviderData, listSkillCommandsForAgents } from "openclaw/plugin-sdk/command-auth";
import { loadConfig, resolveStorePath } from "openclaw/plugin-sdk/config-runtime";
import { readChannelAllowFromStore } from "openclaw/plugin-sdk/conversation-runtime";
import { upsertChannelPairingRequest } from "openclaw/plugin-sdk/conversation-runtime";
import { enqueueSystemEvent } from "openclaw/plugin-sdk/infra-runtime";
import { dispatchReplyWithBufferedBlockDispatcher } from "openclaw/plugin-sdk/reply-runtime";
import { wasSentByBot } from "./sent-message-cache.js";
export type TelegramBotDeps = {
    loadConfig: typeof loadConfig;
    resolveStorePath: typeof resolveStorePath;
    readChannelAllowFromStore: typeof readChannelAllowFromStore;
    upsertChannelPairingRequest: typeof upsertChannelPairingRequest;
    enqueueSystemEvent: typeof enqueueSystemEvent;
    dispatchReplyWithBufferedBlockDispatcher: typeof dispatchReplyWithBufferedBlockDispatcher;
    buildModelsProviderData: typeof buildModelsProviderData;
    listSkillCommandsForAgents: typeof listSkillCommandsForAgents;
    wasSentByBot: typeof wasSentByBot;
};
export declare const defaultTelegramBotDeps: TelegramBotDeps;
