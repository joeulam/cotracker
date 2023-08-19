import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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


// Initialize Firebase Authentication and get a reference to the service
