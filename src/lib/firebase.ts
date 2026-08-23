import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Push Play Firebase configuration — values come from environment variables
// (see .env.example). Set these in Vercel project env vars for production.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// Analytics requires a fully-populated config (it pulls in Firebase
// Installations, which hard-crashes without projectId). Guard it so a missing
// env var degrades gracefully instead of breaking the whole app.
export const analytics = (() => {
  try {
    if (
      typeof window === "undefined" ||
      !firebaseConfig.apiKey ||
      !firebaseConfig.projectId ||
      !firebaseConfig.measurementId
    ) {
      return null;
    }
    return getAnalytics(app);
  } catch {
    return null;
  }
})();

export const auth = getAuth(app);
export const db = getFirestore(app);
