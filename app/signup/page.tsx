'use client'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { apps } from "../../firebase_api/firebaseConfig";
import { useRouter } from 'next/navigation';

export default function Signup(){
    const router = useRouter();
    function signupB(){
        const email = (document.getElementById("email") as HTMLInputElement | null)?.value;
        const password = (document.getElementById("password") as HTMLInputElement | null)?.value;
        const auth = getAuth(apps);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in and changes the URL //  
            router.push("/dashboard");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; // Outputs error message (Maybe try and get it to print only the error message)// 
            console.log(error.message)
        });
}

    return(
        <main>
            <div>
                <p>Signup</p>
                <div>
                    <h3>Email:</h3>
                    <input id="email" type="email" className="outline-2 outline-black outline email"></input>
                    <h3>Password</h3>
                    <input id="password" type="password" className="outline-2 outline-black outline pass"></input>
                    <br/>
                </div>
                <button onClick={signupB} className="outline-2 outline-black outline mt-5">signup</button>

            </div>
        </main>
    )
}