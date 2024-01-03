'use client'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_api/firebaseConfig";
import { app } from "../../firebase_api/firebaseConfig";
import { redirect } from 'next/navigation'
import { onAuthStateChanged } from "firebase/auth";

export function signupFunction(email,password){
  console.log("clicked")
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            redirect('/dashboard')
          } else {
            // User is signed out
            // ...
          }
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // ..
      });
   
    
    
}
