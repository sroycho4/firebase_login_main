// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLr-ee9WRfctzY0BnorNZi7dNyDwgpa3Y",
  authDomain: "phone-auth-e519f.firebaseapp.com",
  projectId: "phone-auth-e519f",
  storageBucket: "phone-auth-e519f.appspot.com",
  messagingSenderId: "252513350177",
  appId: "1:252513350177:web:03b1d78b99e9ba40196960",
  measurementId: "G-SWKBKEDM1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;