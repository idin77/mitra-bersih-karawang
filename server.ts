import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
  httpOptions: {
    headers: { 'User-Agent': 'aistudio-build' }
  }
});

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      // Convert front-end messages to the format expected by the Gemini chat history
      const history = messages.slice(0, -1).map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));
      
      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        history: history,
        config: { systemInstruction: "You are a helpful assistant for Mitra Bersih, a company that provides septic tank cleaning and plumbing services in Karawang." },
      });
      
      const response = await chat.sendMessage({ message: messages[messages.length - 1].text });
      res.json({ text: response.text });
    } catch (error) {
      res.status(500).json({ error: "Failed to communicate with Gemini" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    // SPA Fallback: always serve index.html for unknown routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
