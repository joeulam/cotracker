// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpBT5Ne5vyVQYmeqHS8lv6q6vuLxr2BWY",
  authDomain: "cotrackerpt2.firebaseapp.com",
  projectId: "cotrackerpt2",
  storageBucket: "cotrackerpt2.appspot.com",
  messagingSenderId: "563671076767",
  appId: "1:563671076767:web:8dd2dffda97bcedf27b7aa",
  measurementId: "G-QSTV939BJZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

