// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2cc03.firebaseapp.com",
  projectId: "mern-estate-2cc03",
  storageBucket: "mern-estate-2cc03.appspot.com",
  messagingSenderId: "984776361902",
  appId: "1:984776361902:web:12d90f03a2fa885c0cea3f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
