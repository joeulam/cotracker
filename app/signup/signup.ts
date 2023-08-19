import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase_api/firebaseConfig";

export function signupFunction(email,password){
  const auth = getAuth(app);
    console.log("Ran")
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // ..
      });
   
    
    
}
