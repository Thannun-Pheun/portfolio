import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" = relative asset URLs, so the build works on GitHub Pages
// project sub-paths AND at a domain root (Firebase) without reconfiguration.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
