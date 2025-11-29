/**
 * Security utility to protect sensitive contact information
 * Only shows full data when a valid key is provided in URL
 */

// Secret key - change this to your own secret
const SECRET_KEY = '64';

/**
 * Checks if the current URL contains a valid security key
 */
export function hasValidKey(): boolean {
  if (typeof window === 'undefined') {
    // Server-side: check URL params from Astro
    return false;
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('key');
  return key === SECRET_KEY;
}

/**
 * Gets the masked email for spam protection
 */
export function getMaskedEmail(): string {
  return 'ricardo [at] ricardovoegeli [dot] dev';
}

/**
 * Gets the safe location (only city and country)
 */
export function getSafeLocation(): string {
  return 'Zurich, Switzerland';
}

/**
 * Gets contact data based on security key
 */
export function getContactData(hasKey: boolean) {
  if (hasKey) {
    // Full data when key is present
    return {
      address: import.meta.env.PUBLIC_CONTACT_ADDRESS || '',
      city: import.meta.env.PUBLIC_CONTACT_CITY || '',
      email: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
      phone: import.meta.env.PUBLIC_CONTACT_PHONE || '',
      showFull: true
    };
  }
  
  // Safe data by default
  return {
    address: '',
    city: getSafeLocation(),
    email: getMaskedEmail(),
    phone: '',
    showFull: false
  };
}

