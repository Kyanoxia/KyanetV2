export const prerender = false;
import type { APIContext } from 'astro';

export async function GET({ params, request }: APIContext) {
    return new Response(JSON.stringify(
        {
            "client_id": "https://kyanoxia.com/oauth/client-metadata.json",
            "client_name": "Kyanet Dev Env",
            "client_uri": "https://kyanoxia.com/",
            "logo_uri": "https://dtmunity.com/DTM_SQR.png",
            "tos_uri": "https://kyanoxia.com/",
            "policy_uri": "https://kyanoxia.com/",
            "redirect_uris": [
                "https://kyanoxia.com/"
            ],
            "scope": "atproto transition:generic",
            "grant_types": [
                "authorization_code",
                "refresh_token"
            ],
            "response_types": [
                "code"
            ],
            "token_endpoint_auth_method": "none",
            "application_type": "web",
            "dpop_bound_access_tokens": true
        }
    ), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    });
}
