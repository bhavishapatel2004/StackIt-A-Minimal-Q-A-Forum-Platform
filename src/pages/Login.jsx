import React from "react";
import { auth, db, googleProvider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Reference to user document
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      // Save only if user is new
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          role: "user",
          banned: false,
          createdAt: new Date().toISOString()
        });
        alert("📝 New user saved to Firestore!");
      } else {
        alert("👋 Welcome back, " + user.displayName);
      }
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login to StackIt</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
