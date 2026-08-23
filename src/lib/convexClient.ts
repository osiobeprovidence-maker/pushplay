import { ConvexReactClient } from "convex/react";
import { auth } from "./firebase";
import { getIdToken } from "firebase/auth";

// The Convex site URL. In production this is set via VITE_CONVEX_URL on Vercel.
const url =
  import.meta.env.VITE_CONVEX_URL ??
  "https://warmhearted-dove-864.eu-west-1.convex.cloud";

// Convex attaches the Firebase ID token to every request so it can verify the
// Firebase identity (see convex/auth.config.ts). Convex calls fetchToken
// whenever it needs a fresh token; Firebase refreshes tokens transparently.
export const convex = new ConvexReactClient(url);

async function fetchFirebaseToken({
  forceRefreshToken,
}: {
  forceRefreshToken: boolean;
}): Promise<string | null> {
  const user = auth.currentUser;
  if (!user) return null;
  return getIdToken(user, forceRefreshToken);
}

/**
 * (Re)registers the token provider on the Convex client. MUST be called again
 * whenever Firebase auth state changes: if setAuth's first invocation happens
 * while signed out, fetchToken returns null and the client stays
 * unauthenticated until setAuth is called again — Convex does not poll.
 */
export function syncConvexAuth(): void {
  convex.setAuth(fetchFirebaseToken, () => {
    /* auth result logging handled via server logs */
  });
}
