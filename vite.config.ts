import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: "manual-cache-control",
      configureServer(server) {
        server.middlewares.use((req: any, res, next) => {
          if (req.url && req.url.includes("/fonts")) {
            res.setHeader("Cache-Control", "public, max-age=900000");
          }
          next();
        });
      },
    },
  ],
  base: "/note-taking-app",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
