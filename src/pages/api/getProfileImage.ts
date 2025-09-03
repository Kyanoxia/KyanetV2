export const prerender = false;
import type { APIContext } from 'astro';

import { AtpAgent } from '@atproto/api';

export async function GET({ params, request }: APIContext) {
    try {
        const agent = await new AtpAgent({ service: 'https://public.api.bsky.app/' });

        const pfp = (await agent.getProfile({ actor: "did:plc:cocpebhxzqhh2vxsp4ivzdbr" })).data.avatar;

        const response = await fetch(pfp!); // Download image from the URL

        if (!response.ok) { // Check for successful response
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const imageBuffer = await response.arrayBuffer(); // Convert the response to a Buffer
        const headers = { 'Content-Type': response.headers.get('Content-Type') || 'image/png', status: "200" }; // Use the actual Content-Type from the response, or default to JPEG

        return new Response(imageBuffer, { headers, status: 200 }); // Return the image as a response
    } catch (err) {
        return new Response(`Internal Server Error: \n${err}`, { status: 500 })
    }
}
