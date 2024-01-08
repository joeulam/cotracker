'use client'
import logo from "/public/assets/cotrackerswhite.png"
import Image from 'next/image';
import WindowIcon from '@mui/icons-material/Window';
import { format, compareAsc } from "date-fns";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { doc, getDoc} from "firebase/firestore"; 
import { db } from "../../firebase_api/firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";

class Pdata {
    private id: any;
    private balance: any;
    private totalS: any;
    private transaction: any;
  
    constructor(data) {
      this.totalS = data.total_spent;
      this.balance = data.balance;
      this.id = data.user;
      this.transaction = data.transaction;

    }
    getBalance(){
        return this.balance
    }
    getTotalS(){
        return this.totalS
    }
    getTransaction(){
        return this.transaction
    }
    getUid(){
        return this.id
    }
  }

// Creates the date data//
function date(){
    const currentDate = format(new Date(),'PPPp')
    return currentDate
}

function userCheck(){
    const auth = getAuth();
    const user = auth.currentUser;
    if(!user){
        kick()
    }
}
function kick(){
    const router = useRouter()
    router.push("/login");
}
// Check if user is logged in if not kick to login screen // 

async function dataGrab() {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const docRef = doc(db, "user", uid);
    const docSnap = await getDoc(docRef);
    if (user){
        if (docSnap.exists()) {
            return docSnap.data();
          } else {
            console.log("No such document!");
            return null;
          }
    }
    else{
        kick()
    }
    
  }


export default function dashboard(){
    const [balance, setBalance] = useState<number | null>(null);
    const [uid, setUid ] = useState<string | null>(null);
    const [total, setTotal ] = useState<number | null>(null);
    const [trans, setTranscation ] = useState<number | null>(null);

  // Fetch balance when the component mounts
  useEffect(() => {
    async function fetchData() {
        const data = await dataGrab();
        const myInstance = new Pdata(data);
        setBalance(myInstance.getBalance());
        setUid(myInstance.getUid());
        setTotal(myInstance.getTotalS());
        setTranscation(myInstance.getTransaction());

    }

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

    return(
        <main onLoad={userCheck()} className="h-[100vh] flex">

            <div className="flex">
                <div className="h-[100vh] bg-[#4D4D4D] w-[15vw]">
                    <div className="h-[10vh] w-[15vw]">
                        <div className="flex items-center justify-center">
                            <Image src={logo} height={38} alt='CoTrackers'/>
                        </div>
                        
                    </div>
                    <div className="h-[8vh] border-solid border-2 flex items-center left bg-[#6E6E6E]">
                        <WindowIcon sx={{color:"white"}}/>
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
                        Logged in as {uid !== null ? uid : 'Loading...'}
                    </div>
                    <div className="h-[8vh] flex items-center ">
                        Log Out
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="text-[48px]">Dashboard</h1>
                        <p>{date()}</p>
                    </div>

                    <div>
                        <h2 className="text-[30px]">Your balance:</h2>
                        <h1>${balance !== null ? balance : 'Loading...'}</h1>                
                        <h3>CARD INFO</h3>
                    </div>
                </div>
                
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
                    <p>{trans !== null ? trans : 'Loading...'}</p>
                </div>
                <div>
                    <h3>Total Spent</h3>
                    <p>{total !== null ? total : 'Loading...'}</p>
                </div>
            </div>
        </main>
    )
}