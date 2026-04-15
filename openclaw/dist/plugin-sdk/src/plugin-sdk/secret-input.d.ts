import { z } from "zod";
import { hasConfiguredSecretInput, normalizeResolvedSecretInputString, normalizeSecretInputString } from "../config/types.secrets.js";
import { buildSecretInputSchema } from "./secret-input-schema.js";
export type { SecretInput } from "../config/types.secrets.js";
export { buildSecretInputSchema, hasConfiguredSecretInput, normalizeResolvedSecretInputString, normalizeSecretInputString, };
export declare function buildOptionalSecretInputSchema(): z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
    source: z.ZodLiteral<"env">;
    provider: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    source: z.ZodLiteral<"file">;
    provider: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    source: z.ZodLiteral<"exec">;
    provider: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>], "source">]>>;
export declare function buildSecretInputArraySchema(): z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
    source: z.ZodLiteral<"env">;
    provider: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    source: z.ZodLiteral<"file">;
    provider: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    source: z.ZodLiteral<"exec">;
    provider: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>], "source">]>>;
