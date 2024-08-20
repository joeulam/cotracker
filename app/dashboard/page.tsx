"use client";
import logo from "../../public/assets/cotrackerswhite.png";
import Image from "next/image";
import WindowIcon from "@mui/icons-material/Window";
import { format } from "date-fns";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase_api/firebaseConfig";
import { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MedicationIcon from "@mui/icons-material/Medication";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { Pdata } from "../../components/Pdata";
import { useDisclosure, useInputState } from "@mantine/hooks";
import {
  Modal,
  Button,
  MantineProvider,
  NumberInput,
  LoadingOverlay,
  Stack,
  Input,
  Combobox,
  CheckIcon,
  Group,
  useCombobox,
  PillsInput,
  Pill,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { notifications } from '@mantine/notifications';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

export default function Dashboard() {
  const router = useRouter();
  // Creates the date data//
  function date() {
    const currentDate = format(new Date(), "PPPp");
    return currentDate;
  }
  // Check if user is logged in if not kick to login screen //
  async function dataGrab() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "user", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } else {
      Kick();
    }
  }

  function Kick() {
    router.push("/login");
  }

  function userCheck() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      Kick();
    }
  }

  async function submitNewTransaction() {
    setVisible.open();
    try {
			if(transactionName != "" && cost != ""){
				await setDoc(
					doc(
						collection(doc(db, "user", uid), "newTransactions"),
						dates.toString()
					),
					{
						date: dates,
						transactionName: transactionName,
						tags: value, // Pass your tags array here
						cost: cost,
					}
				);
				await updateDoc(doc(db, "user", uid),{
					total_spent: increment(Number(cost)),
					transaction: increment(1),
				})
				console.log("Document successfully written!");
				setOpened.toggle();
				setVisible.close();
				notifications.show({
					title: 'Transaction recorded',
					message: null,
					color: 'green'
				})    
				dates = null;
				transactionName = null;
				cost = null;
				value = null;
				// TODO CLEAR variables after submitting
				fetchData()
			}
			else{
				setVisible.close();
				notifications.show({
					title: 'Name and cost cannot be blank',
					message: null,
					color: 'red'
				}) 
			}
		}
		catch (error) {
			console.error("Error writing document: ", error);
			setOpened.toggle();
			setVisible.close();
			notifications.show({
				title: 'Something went wrong',
				message: error.toString(),
				color: 'red'
			})    
		}
  }

  const [balance, setBalance] = useState<number | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  var [total, setTotal] = useState<number | null>(null);
  var [trans, setTranscation] = useState<number | null>(null);

  var [dates, setDate] = useState<Date | null>(null);
  var [transactionName, setTransactionName] = useInputState("");
  var [cost, setCost] = useInputState<string | number>(0);
  var [value, setValue] = useState<string[]>([]); // For selected tags

  const [visible, setVisible] = useDisclosure(false); // Loading overlay
  const [opened, setOpened] = useDisclosure(false); // Add new transaction card
  const [tags, setTags] = useState<string[] | null>([]); // All tags

	async function fetchData() {
		const data = await dataGrab();
		const myInstance = new Pdata(data);
		setBalance(myInstance.getBalance());
		setUid(myInstance.getUid());
		setTotal(myInstance.getTotalS());
		setTranscation(myInstance.getTransaction());
		setTags(myInstance.getTags());
	}
  // Fetch balance when the component mounts
  useEffect(() => {
    fetchData();
    userCheck();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [search, setSearch] = useState("");

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = tags
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <MantineProvider defaultColorScheme="light">
      <div className="flex">
        <div className="h-[100vh] bg-[#4D4D4D] w-[15vw]">
          <div className="h-[10vh] w-[15vw]">
            <div className="flex items-center justify-center mt-[10%]">
              <Image src={logo} height={38} alt="CoTrackers" />
            </div>
          </div>
          <div className="ml-[1vw]">
            <div className="ml-[-1vw] bg-[#6E6E6E] border-2">
              <div className="ml-[1vw] h-[8vh] flex items-center left ">
                <WindowIcon className="mr-[1vw]" sx={{ color: "white" }} />
                <div className="text-white">Dashboard</div>
              </div>
            </div>

            <div className="h-[8vh] flex items-center ">
              <TrendingUpIcon className="mr-[1vw]" sx={{ color: "white" }} />
              <div className="text-white">
                <a href="/finances">Finance</a>
              </div>
            </div>
            <div className="h-[8vh] flex items-center ">
              <CalendarTodayIcon className="mr-[1vw]" sx={{ color: "white" }} />
              <div className="text-white">Calendar</div>
            </div>
            <div className="h-[8vh] flex items-center ">
              <AccountBalanceWalletIcon
                className="mr-[1vw]"
                sx={{ color: "white" }}
              />
              <div className="text-white">Wallet</div>
            </div>
            <div className="h-[8vh] flex items-center ">
              <SettingsIcon className="mr-[1vw]" sx={{ color: "white" }} />
              <div className="text-white">Setting</div>
            </div>
            <div className="text-white h-[8vh] flex items-center ">
              <div className="text-wrap">
                Logged in as {uid !== null ? uid : "Loading..."}
              </div>
            </div>
            <div className="h-[8vh] flex items-center ">
              <LogoutIcon className="mr-[1vw]" sx={{ color: "white" }} />
              <div className="text-white">Log Out</div>
            </div>
          </div>
        </div>

        <div className="ml-[3vw]">
          <div>
            <h1 className="text-[48px]">Dashboard</h1>
            <p>{date()}</p>
          </div>

          <div className="bg-white pr-[20vw] pl-[2vw] pt-[2vh] pb-[2vh] rounded-[15px] mt-[4vh]">
            <h2 className="text-[30px]">Your balance:</h2>
            <h1 className="text-[30px]">
              ${balance !== null ? balance : "Loading..."}
            </h1>
          </div>

          <div className="flex mt-[7vh]">
            <div className="bg-white rounded-[15px] p-8 mr-[1vw]">
              <select name="date" id="dates" className="items-center">
                <option value="week">Last week</option>
                <option value="month">Last Month</option>
                <option value="month6">Last six month</option>
                <option value="year">Last year</option>
              </select>
            </div>
            <div className="bg-white rounded-[15px] p-8 mr-[1vw]">
              <h3>Transaction</h3>
              <p>{trans !== null ? trans : "Loading..."}</p>
            </div>
            <div className="bg-white rounded-[15px] p-8">
              <h3>Total Spent</h3>
              <p>{total !== null ? total : "Loading..."}</p>
            </div>
          </div>

          <div className="flex mt-[5vh]">
            <div className="bg-white mr-[2vw]">
              <ShoppingBagIcon />
              Shopping
            </div>
            <div className="bg-white mr-[2vw]">
              <FastfoodIcon />
              Cafe and Restaurant
            </div>
            <div className="bg-white">
              <MedicationIcon />
              Healthcare
            </div>
          </div>
        </div>

        <Modal opened={opened} onClose={setOpened.close} title="New Transaction">
          <LoadingOverlay
            visible={visible}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
          />

          <Stack align="stretch" justify="center" gap="xs">
            <Input.Wrapper required={true} label="Transaction Name">
              <Input required={true} value={transactionName} onChange={setTransactionName} />
            </Input.Wrapper>

            <NumberInput
              label="Cost"
              placeholder="Dollars"
              prefix="$"
              value={cost}
							required={true}
              onChange={setCost}
            />
            <Combobox
              store={combobox}
              onOptionSubmit={handleValueSelect}
            >
						<Combobox.Header>Tags</Combobox.Header>
              <Combobox.DropdownTarget>
                <PillsInput onClick={() => combobox.openDropdown()}>
                  <Pill.Group>
                    {values}

                    <Combobox.EventsTarget>
                      <PillsInput.Field
                        onFocus={() => combobox.openDropdown()}
                        onBlur={() => combobox.closeDropdown()}
                        value={search}
                        placeholder="Search values"
                        onChange={(event) => {
                          combobox.updateSelectedOptionIndex();
                          setSearch(event.currentTarget.value);
                        }}
                        onKeyDown={(event) => {
                          if (
                            event.key === "Backspace" &&
                            search.length === 0
                          ) {
                            event.preventDefault();
                            handleValueRemove(value[value.length - 1]);
                          }
                        }}
                      />
                    </Combobox.EventsTarget>
                  </Pill.Group>
                </PillsInput>
              </Combobox.DropdownTarget>

              <Combobox.Dropdown>
                <Combobox.Options>
                  {options.length > 0 ? (
                    options
                  ) : (
                    <Combobox.Empty>Nothing found...</Combobox.Empty>
                  )}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <DateInput
              value={dates}
              onChange={setDate}
              label="Date"
              placeholder="Date"
							required={true}
            />
            <Button onClick={submitNewTransaction}>Add Transaction</Button>
          </Stack>
        </Modal>
				<div className="absolute bottom-10 right-10 rounded-[100%] pd-[26px] bg-slate-400 transform scale-300 hover:scale-150 transition-transform">
          <button onClick={setOpened.open}>
            <AddIcon style={{ fontSize: 36 }} />
          </button>
        </div>
				
      </div>

			<Notifications />

    </MantineProvider>
  );
}
