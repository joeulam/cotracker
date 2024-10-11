'use client'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { apps } from "../../firebase_api/firebaseConfig";
import { useRouter } from 'next/navigation';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase_api/firebaseConfig";

// Creates a new page in firebase // 
async function create_new_user(uid){
    await setDoc(doc(db, "user", uid), {
        balance: 0.00,
        user: uid,
        transaction: 0,
        total_spent: 0.00,
        tags: ["Income","Food"],
      });
}



export default function Signup(){
    const router = useRouter();
    function signupB(){
        const email = (document.getElementById("email") as HTMLInputElement | null)?.value;
        const password = (document.getElementById("password") as HTMLInputElement | null)?.value;
        const auth = getAuth(apps);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in and changes the URL //  
            const user = userCredential.user
            create_new_user(user.uid)
            console.log("Creating page")
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