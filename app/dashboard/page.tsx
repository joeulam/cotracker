import logo from "/public/assets/cotrackerswhite.png"
import Image from 'next/image';




export default function dashboard(){
    return(
        <main className="h-[100vh]">
            <div className="h-[100vh] bg-[#4D4D4D] w-[15vw]">
                <div className="h-[10vh] items-center justify-center">
                    <div>
                        <Image src={logo} height={38} alt='CoTrackers'/>
                    </div>
                </div>
                <div className="h-[8vh] border-solid border-2 flex items-center left bg-[white]">
                    <div className="">Dashboard</div>
                </div>
                <div className="h-[8vh] flex items-center ">
                    Finance
                </div>
                <div className="h-[8vh] flex items-center ">
                    Calendar
                </div>
                <div className="h-[8vh] flex items-center ">
                    Wallet
                </div>
                <div className="h-[8vh] flex items-center ">
                    Setting
                </div>
                <div className="h-[8vh] flex items-center ">
                    Log Out
                </div>
            </div>


            <div>
                <h1>Dashboard</h1>
                <p>Date</p>
            </div>


            <div>
                <h2>Your balance:</h2>
                <h1>BALANCE</h1>
                <h3>CARD INFO</h3>
            </div>

            <div>
                <div>
                    <select name="date" id="dates">
                        <option value="week">Last week</option>
                        <option value="month">Last Month</option>
                        <option value="month6">Last six month</option>
                        <option value="year">Last year</option>
                    </select>
                </div>
                <div>
                    <h3>Transaction</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Total Spent</h3>
                    <p></p>
                </div>
            </div>


        </main>
    )
}