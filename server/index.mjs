import dotenv from "dotenv";
import express from "express";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: ".env.local", override: false });
dotenv.config({ override: false });

const app = express();
const port = Number(process.env.PORT || 8787);
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const model = process.env.GEMINI_MODEL || "gemini-3-flash-preview";
const allowedOrigin = process.env.FRONTEND_ORIGIN || "*";

if (!apiKey) {
  console.warn("Gemini API key is not configured. Set GEMINI_API_KEY or GOOGLE_API_KEY before starting the chat server.");
}

app.use(express.json({ limit: "1mb" }));

app.use((req, res, next) => {
  const requestOrigin = req.headers.origin;
  const origin = allowedOrigin === "*" ? "*" : requestOrigin === allowedOrigin ? allowedOrigin : "null";

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
});

app.get(["/health", "/api/health"], (_req, res) => {
  res.json({
    ok: true,
    status: apiKey ? "online" : "misconfigured",
    model,
    hasApiKey: Boolean(apiKey),
  });
});

app.post("/api/chat", async (req, res) => {
  if (!apiKey) {
    res.status(503).json({
      error: "Gemini API key is not configured on the chat server.",
      errorCode: "MISCONFIGURED",
      status: "misconfigured",
      model,
    });
    return;
  }

  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  const history = Array.isArray(req.body?.history) ? req.body.history : [];
  const siteContext = req.body?.siteContext && typeof req.body.siteContext === "object" ? req.body.siteContext : {};

  if (!message) {
    res.status(400).json({ error: "message is required.", errorCode: "INVALID_REQUEST" });
    return;
  }

  const ai = new GoogleGenAI({ apiKey });

  const trimmedHistory = history
    .slice(-10)
    .filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
    .map((item) => ({
      role: item.role === "user" ? "user" : "model",
      parts: [{ text: item.content }],
    }));

  const systemInstruction = `
You are the website assistant for ${siteContext.fullName || siteContext.name || "this site"}.
Answer questions using the site context below when possible.
If the site context does not contain the answer, say you are not sure and suggest contacting ${siteContext.email || "the site owner"}.
Keep answers concise, useful, and factual.

Site context:
- Short name: ${siteContext.name || "N/A"}
- Full name: ${siteContext.fullName || "N/A"}
- Professor / owner: ${siteContext.professor || "N/A"}
- University: ${siteContext.university || "N/A"}
- Department: ${siteContext.department || "N/A"}
- Location: ${siteContext.location || "N/A"}
- Email: ${siteContext.email || "N/A"}
- Phone: ${siteContext.phone || "N/A"}
- Research areas: ${Array.isArray(siteContext.researchAreas) ? siteContext.researchAreas.map((area) => `${area.title}: ${area.description}`).join(" | ") : "N/A"}
- Publications: ${Array.isArray(siteContext.publications) ? siteContext.publications.map((publication) => `${publication.title} (${publication.year})`).join(" | ") : "N/A"}
- Members: ${Array.isArray(siteContext.members) ? siteContext.members.map((member) => `${member.name} (${member.role})`).join(" | ") : "N/A"}
  `.trim();

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        ...trimmedHistory,
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
      config: {
        systemInstruction,
        temperature: 0.5,
      },
    });

    res.json({
      reply: response.text?.trim() || "I could not generate a response.",
      model,
      status: "online",
    });
  } catch (error) {
    console.error("Gemini chat error", error);
    res.status(502).json({
      error: "Gemini request failed.",
      errorCode: "REQUEST_FAILED",
      status: "request_failed",
      model,
    });
  }
});

app.listen(port, () => {
  console.log(`Chat server listening on http://localhost:${port}`);
});
