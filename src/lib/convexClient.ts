import { useEffect, useState } from "react";
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

export function useFirebaseConvexAuth(): {
  isLoading: boolean;
  isAuthenticated: boolean;
  fetchAccessToken: (args: { forceRefreshToken: boolean }) => Promise<string | null>;
} {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    return auth.onAuthStateChanged((nextUser) => {
      setUser(nextUser);
    });
  }, []);

  return {
    isLoading: user === undefined,
    isAuthenticated: !!user,
    fetchAccessToken: async ({ forceRefreshToken }) => {
      const currentUser = auth.currentUser;
      if (!currentUser) return null;
      return getIdToken(currentUser, forceRefreshToken);
    },
  };
}
