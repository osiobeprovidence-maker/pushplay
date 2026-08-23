import { defineConvexConfig } from "convex/server";

// Firebase ID-token verification for Convex.
// Firebase project id is "usepushplay" (see .env / Vite config).
// issuer + audience are derived from that project id.
export default defineConvexConfig({
  auth: {
    providers: [
      {
        issuer: "https://securetoken.google.com/usepushplay",
        audiences: ["usepushplay"],
        jwks: "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com",
      },
    ],
  },
});
