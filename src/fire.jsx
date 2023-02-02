// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzE9Nj2TMUOcW3fjPjMBQn2-Cvlo7nz1s",
  authDomain: "sample-firebase-92fc1.firebaseapp.com",
  projectId: "sample-firebase-92fc1",
  storageBucket: "sample-firebase-92fc1.appspot.com",
  messagingSenderId: "176719465582",
  appId: "1:176719465582:web:59dd5f5102f10baf676a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;