// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4PKfLt4KJ0dnw3mKDKg9HrAuZ1Ti0FZk",
  authDomain: "stackit-20ad8.firebaseapp.com",
  projectId: "stackit-20ad8",
  storageBucket: "stackit-20ad8.firebasestorage.app",
  messagingSenderId: "138328561209",
  appId: "1:138328561209:web:5c2f192974edab01099fe8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();



