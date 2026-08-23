import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Push Play Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJfWOmuVupZQdhYgkBLPXuYtql0po4sM",
  authDomain: "usepushplay.firebaseapp.com",
  projectId: "usepushplay",
  storageBucket: "usepushplay.firebasestorage.app",
  messagingSenderId: "596112499041",
  appId: "1:596112499041:web:38ab37d855a0ec50836520",
  measurementId: "G-1FH5TLRV1B"
};

export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const auth = getAuth(app);
export const db = getFirestore(app);
