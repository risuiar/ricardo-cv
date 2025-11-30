import type { APIRoute } from 'astro';
import { hasValidKey, getContactData } from '../../utils/security';

// Explicitly mark this route as dynamic (not pre-rendered)
export const prerender = false;

/**
 * API endpoint to securely retrieve contact information
 * Only returns sensitive data if a valid key is provided
 */
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const keyFromUrl = url.searchParams.get('key');

  // Validate the key
  const isValidKey = hasValidKey(keyFromUrl || undefined);

  // Get contact data based on validation
  const contactData = getContactData(isValidKey);

  // Return the appropriate data
  return new Response(
    JSON.stringify({
      success: true,
      data: contactData,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    }
  );
};

