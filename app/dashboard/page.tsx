export default function dashboard(){
    return(
        <main>
            <div>
                <div>
                    LOGO
                </div>
                <div>
                    Dashboard
                </div>
                <div>
                    Finance
                </div>
                <div>
                    Calendar
                </div>
                <div>
                    Wallet
                </div>
                <div>
                    Setting
                </div>
                <div>
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