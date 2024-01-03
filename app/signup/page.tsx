'use client'
import {signupFunction} from '../signup/signup'
export default function signup(){
    return(
        <main>
            <div>
                <p>Signup</p>
                <div>
                    <h3>Email:</h3>
                    <input type="email" className="outline-2 outline-black outline email"></input>
                    <h3>Password</h3>
                    <input type="password" className="outline-2 outline-black outline pass"></input>
                    <br/>
                </div>
                <button onClick={() => signupFunction(document.getElementsByClassName("email"), document.getElementsByClassName("pass"))} className="outline-2 outline-black outline mt-5">signup</button>

            </div>
        </main>
    )
}