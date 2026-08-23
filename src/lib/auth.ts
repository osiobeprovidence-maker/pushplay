import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";

export type { FirebaseUser };

export async function signUpWithEmail(
  email: string,
  password: string,
  name: string
): Promise<FirebaseUser> {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  if (name) {
    await updateProfile(credential.user, { displayName: name });
  }
  // Require email verification before the account is usable.
  await sendEmailVerification(credential.user);
  return credential.user;
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<FirebaseUser> {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function signOutFirebase(): Promise<void> {
  await firebaseSignOut(auth);
}

export async function resendVerificationEmail(): Promise<void> {
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser);
  }
}
