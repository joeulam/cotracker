'use client'
// Import the useRouter hook
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { apps } from '../../firebase_api/firebaseConfig';

export default function login() {
    // Use the useRouter hook to get the router instance
    const router = useRouter();

    function loginS() {
        const email = (document.getElementById("email") as HTMLInputElement | null)?.value;
        const password = (document.getElementById("password") as HTMLInputElement | null)?.value;
        const auth = getAuth(apps);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            router.push("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        console.log("clicked");

        // Use the router instance to navigate to the "dashboard" page
    }

    return (
        <main>
            <div>
                <p>Login</p>
                <div>
                    <h3>Email:</h3>
                    <input id="email" type="email" className="outline-2 outline-black outline"></input>
                    <h3>Password</h3>
                    <input id="password" type="password" className="outline-2 outline-black outline"></input>
                    <br/>
                    <button onClick={loginS} className="outline-2 outline-black outline mt-5">Login</button>
                </div>
            </div>
        </main>
    );
}
