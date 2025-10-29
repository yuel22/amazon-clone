import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Lower the warning threshold a bit so we notice large chunks earlier.
    // You can increase this if you prefer fewer warnings.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id) return;
          if (id.includes("node_modules")) {
            // React-related packages grouped together
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "react-vendor";
            }

            // Firebase: split compat, auth, firestore into separate chunks when possible
            if (id.includes("firebase/compat")) {
              return "firebase-compat";
            }
            if (id.match(/firebase.*auth/)) {
              return "firebase-auth";
            }
            if (
              id.includes("firestore") ||
              (id.includes("node_modules/firebase") && id.includes("firestore"))
            ) {
              return "firebase-firestore";
            }
            if (id.includes("firebase")) {
              return "firebase";
            }

            // Stripe separate
            if (id.includes("@stripe") || id.includes("stripe")) {
              return "stripe";
            }

            // utility libraries
            if (id.includes("lodash") || id.includes("date-fns")) {
              return "utils";
            }

            // everything else
            return "vendor";
          }
        },
      },
    },
  },
});
