# Personal Site

This project is a Vite + React site with a Gemini-powered chatbot.

## Why the old chatbot failed

The old code instantiated `@google/genai` in the browser. That requires an API key in the client bundle, which is both insecure and the reason you saw:

- `An API Key must be set when running in a browser`

The chatbot now calls a separate backend endpoint instead.

## Local development

1. Install dependencies:
   `npm install`
2. Create `.env.local` in the repo root based on `.env.example`
3. Start the Gemini backend in one terminal:
   `npm run dev:server`
4. Start the frontend in another terminal:
   `npm run dev:client`

The frontend runs on `http://localhost:3000` and proxies `/api/*` to the local chat server on `http://localhost:8787`.

## API key location

Store the Gemini API key only on the backend.

- Local dev: put `GEMINI_API_KEY=...` in `.env.local`
- Production backend: set `GEMINI_API_KEY` in the hosting platform's secret/environment settings

Do not put the key in:

- `src/*`
- `VITE_*` variables
- GitHub Pages secrets expecting the frontend to read them directly

Anything in the frontend bundle is public.

## Production deployment

If the frontend is hosted on GitHub Pages, deploy the chat backend separately and set:

- frontend build env: `VITE_CHAT_API_URL=https://your-api.example.com/api/chat`
- backend secret env: `GEMINI_API_KEY=...`
- backend optional env: `GEMINI_MODEL=gemini-3-flash-preview`
- backend optional env: `FRONTEND_ORIGIN=https://your-site.github.io`

GitHub Pages cannot safely store a runtime Gemini API key for browser-side use.

## GitHub Pages setup

If you are deploying the site from GitHub, GitHub should only know the chatbot backend URL, not the Gemini API key.

Set it like this:

1. Open your repository on GitHub
2. Go to `Settings`
3. Go to `Secrets and variables`
4. Open `Actions`
5. Open `Variables`
6. Add a repository variable named:
   `VITE_CHAT_API_URL`
7. Set its value to:
   `https://your-backend.example.com/api/chat`

Put the Gemini key on the backend host only:

- `GEMINI_API_KEY=...`
- `GEMINI_MODEL=gemini-3-flash-preview`
- `FRONTEND_ORIGIN=https://park-sangdon.github.io`

Do not put `GEMINI_API_KEY` into any `VITE_*` variable or frontend file.

## Model note

As of 2026-04-08, Google AI for Developers publicly lists:

- `gemini-3-flash-preview`
- `gemini-3.1-flash-lite-preview`
- `gemini-3.1-flash-live-preview`

For a normal text chatbot, `gemini-3-flash-preview` is the simplest default in this repo.
