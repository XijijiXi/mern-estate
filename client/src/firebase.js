// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d6858.firebaseapp.com",
  projectId: "mern-estate-d6858",
  storageBucket: "mern-estate-d6858.appspot.com",
  messagingSenderId: "526964509200",
  appId: "1:526964509200:web:03ddfe01f0878c90939895",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
