export default function login(){
    return(
        <main>
            <div>
                <p>Login</p>
                <form>
                    <h3>Email:</h3>
                    <input type="email" class="outline-2 outline-black outline"></input>
                    <h3>Password</h3>
                    <input type="password" class="outline-2 outline-black outline"></input>
                    <br/>
                    <button class="outline-2 outline-black outline mt-5">Login</button>
                </form>
            </div>
        </main>
    )
}