<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e4de8182-b382-48c6-b869-6e7ad0e68a86

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GitHub Pages deployment

This repo now includes `.github/workflows/deploy.yml` so GitHub Pages deploys the Vite build output from `dist/`.

Important:

1. In GitHub repository settings, set Pages to use `GitHub Actions`.
2. Push to `main`.
3. The workflow builds with `npm ci && npm run build` and deploys `dist`.

If GitHub Pages serves the repository root directly, it will try to load `/src/main.tsx` and fail with a MIME type error. The site must serve the production build output instead.
