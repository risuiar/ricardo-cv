/**
 * Security utility to protect sensitive contact information
 * Only shows full data when a valid key is provided in URL
 * 
 * IMPORTANT: Set SECRET_KEY in your .env file (without PUBLIC_ prefix)
 * The key is hashed, so even if someone sees the code, they can't guess it
 */

// Get secret key from environment variable (private, not exposed to client)
// WARNING: If SECRET_KEY is not set, the system will reject all keys for security
const SECRET_KEY = import.meta.env.SECRET_KEY;

/**
 * Simple hash function for key comparison
 * This prevents the actual key from being visible in the code
 * Note: This is a simple hash for obfuscation, not cryptographic security
 */
function hashKey(key: string): string {
  if (!key) return '';
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    const char = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Convert to positive hex string
  return Math.abs(hash).toString(16);
}

// Pre-computed hash of the valid key (calculated at build time)
// This is what we compare against - the actual key is never in the code
// If SECRET_KEY is not set, VALID_KEY_HASH will be empty and all keys will be rejected
const VALID_KEY_HASH = SECRET_KEY ? hashKey(SECRET_KEY) : '';

/**
 * Checks if the current URL contains a valid security key
 * Uses hash comparison so the actual key is never exposed
 * 
 * SECURITY: If SECRET_KEY is not configured, this will always return false
 */
export function hasValidKey(keyFromUrl?: string): boolean {
  // If no secret key is configured, reject all attempts
  if (!VALID_KEY_HASH || !SECRET_KEY) {
    return false;
  }
  
  if (!keyFromUrl) {
    return false;
  }
  
  // Compare hashes instead of direct key comparison
  // This way the actual key is never visible in the code or compiled output
  return hashKey(keyFromUrl) === VALID_KEY_HASH;
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

