export const prerender = false;
import type { APIContext } from 'astro';
import { getAverageColor } from 'fast-average-color-node';

export async function GET(context: APIContext) {
    const inv = "DVvGFXqpqH";

        if (context.request.headers.get("user-agent")?.includes("bot", 0) || true) {
            // Await response and convert to json before continuing
            const res = await fetch(`https://discord.com/api/v10/invites/${inv}`);
            const data = await res.json();

            const color = await getAverageColor(`https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}`);

            return new Response(`
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <link rel="icon" type="image/svg+xml" href="svg/favicon.svg" />
                        <meta name="viewport" content="width=device-width" />
                        <meta name="generator" content={Astro.generator} />
                        
                        <meta property="og:site_name" content="VainDiscord by Kyanoxia" />
                        <meta property="og:title" content="${data.guild.name}" />
                        <meta property="og:description" content="${data.guild.description}" />
                        <meta property="og:image" content="https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}" />
                        <meta property="og:image:width" content="128">
                        <meta property="og:image:height" content="128">

                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="VainDiscord by Kyanoxia" />
                        <meta name="twitter:title" content="${data.guild.name}" />
                        <meta name="twitter:description" content="${data.guild.description}" />
                        <meta name="twitter:image" content="https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}" />
                        <meta name="twitter:url" content="https://discord.com/invite/${inv}>

                        <meta itemprop="name" content="${data.guild.name}">
                        <meta itemprop="description" content="${data.guild.description}">
                        <meta itemprop="image" content="https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}">

                        <meta name="name" content="${data.guild.name}" />
                        <meta name="description" content="${data.guild.description}" />
                        <meta name="image" content="https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}" />

                        <meta name="theme-color" content="${color.hex}" />
                        <title>Join Us</title>
                    </head>
                    <body>
                        <h1>Redirecting...</h1>
                        <p>If you're seeing this, the site is most likely broken! Please contact Kyanoxia to fix it!</p>
                    </body>
                </html>
            `,
                {
                    status: 200,
                    headers: {
                        "Content-Type": "text/html",
                    }
            });
        }

        //return Response.redirect(new URL(`https://discord.com/invite/${inv}`), 302)
}
