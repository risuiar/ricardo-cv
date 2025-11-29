/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SECRET_KEY?: string; // Private key for contact data access (not exposed to client)
  readonly PUBLIC_CV_LINK_DE: string;
  readonly PUBLIC_CV_LINK_EN: string;
  readonly PUBLIC_CONTACT_ADDRESS: string;
  readonly PUBLIC_CONTACT_CITY: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_CONTACT_PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
