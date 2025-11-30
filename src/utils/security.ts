/**
 * Security utility to protect sensitive contact information
 * Only shows full data when a valid key is provided in URL
 * 
 * IMPORTANT: Set PUBLIC_SECRET_KEY in your .env file (server-side only)
 * This code runs server-side only in API endpoints, so the key comparison is safe
 * 
 * SECURITY: These functions are ONLY called from server-side code (API routes)
 * The secret key and sensitive data are NEVER exposed to the client
 */

// Get secret key from environment variable
// NOTE: This is only accessible server-side in API routes
// WARNING: If PUBLIC_SECRET_KEY is not set, the system will reject all keys for security
const SECRET_KEY = import.meta.env.PUBLIC_SECRET_KEY;

/**
 * Checks if the provided key matches the secret key
 * This function ONLY runs server-side in API routes
 * 
 * SECURITY: If SECRET_KEY is not configured, this will always return false
 */
export function hasValidKey(keyFromUrl?: string): boolean {
  // If no secret key is configured, reject all attempts
  if (!SECRET_KEY) {
    return false;
  }
  
  if (!keyFromUrl) {
    return false;
  }
  
  // Trim whitespace and compare
  const trimmedKey = keyFromUrl.trim();
  const trimmedSecret = String(SECRET_KEY).trim();
  
  // Direct comparison
  return trimmedKey === trimmedSecret;
}

/**
 * Gets the masked email for spam protection
 */
export function getMaskedEmail(): string {
  return 'rvoegeli [at] gmail [dot] com';
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

