/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SECRET_KEY?: string; // Secret key for contact data access
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
