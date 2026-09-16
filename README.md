# Ananya Technical Services

## Local development

Run `npm install`, then `npm run dev`.

## Deploy to Vercel

This project uses vinext, with a separate static export for Vercel.
The ordinary build targets Cloudflare and should not be used as the Vercel build command.

1. Push the updated source, including `vercel.json`, `scripts/build-vercel.mjs`, `package.json`, `next.config.ts`, and `vite.config.ts`, to the GitHub repository connected to Vercel.
2. In Vercel, select the project and open Settings > Build and Deployment.
3. Use Framework Preset **Other**, Build Command **npm run build:vercel**, and Output Directory **dist/client**. These values are also configured in `vercel.json`.
4. Keep Root Directory at the repository root (the directory containing `package.json`).
5. Deploy the new commit. If redeploying manually, confirm the selected deployment uses the new commit rather than an older one.
6. Visit the production URL and check `/`, `/about`, `/achievements`, `/contact`, and `/services/education` directly.

To verify the export locally, run `npm run build:vercel`. It must generate `dist/client/index.html` and the other route HTML files. The website is static; the enquiry form prepares an email in the visitor's email app rather than submitting to a server.

Do not change the output directory to `public`, `dist/server`, or `.next` for this Vercel configuration.
