import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// `vercel dev`を使わずvite単体で動かす場合でも /api/generate-reading を叩けるようにする開発用プロキシ
function tarotApiDevProxy(env) {
  return {
    name: "tarot-api-dev-proxy",
    configureServer(server) {
      server.middlewares.use("/api/generate-reading", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          return res.end(JSON.stringify({ error: "Method not allowed" }));
        }
        let body = "";
        for await (const chunk of req) body += chunk;
        try {
          const apiKey = env.ANTHROPIC_API_KEY;
          if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");
          const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": apiKey,
              "anthropic-version": "2023-06-01",
            },
            body,
          });
          const data = await response.json();
          res.setHeader("Content-Type", "application/json");
          res.statusCode = response.status;
          res.end(JSON.stringify(data));
        } catch (e) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tarotApiDevProxy(env)],
  };
});
