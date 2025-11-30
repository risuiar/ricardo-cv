/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // SECURITY: These variables are only accessible server-side in API routes
  // They are NEVER exposed to the client browser
  readonly PUBLIC_SECRET_KEY?: string; // Secret key for contact data access (server-side only)
  readonly PUBLIC_CV_LINK_DE: string;
  readonly PUBLIC_CV_LINK_EN: string;
  readonly PUBLIC_CONTACT_ADDRESS: string; // Server-side only - never exposed to client
  readonly PUBLIC_CONTACT_CITY: string; // Server-side only - never exposed to client
  readonly PUBLIC_CONTACT_EMAIL: string; // Server-side only - never exposed to client
  readonly PUBLIC_CONTACT_PHONE: string; // Server-side only - never exposed to client
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
