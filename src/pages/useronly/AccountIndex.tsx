import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, To, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserFooter from "./UserFooter";
import { toast, ToastContainer, Id } from "react-toastify";
import { parseISO, compareDesc, format } from "date-fns";
import {
  ArrowDownOutline,
  ArrowUpOutline,
  Card,
  CardOutline,
  ChatbubbleOutline,
  KeyOutline,
  LogOutOutline,
  MailOutline,
  PersonOutline,
  PieChartOutline,
  SettingsOutline,
  SwapVertical,
  TimeOutline,
} from "react-ionicons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { TitleUpdater } from "../../reusables/TitleUpdater";
import axios from "axios";

// ======== LOGOUT FUNCTION
const logout = async () => {
  try {
    const response = await axios.get("https://electrobank-main.onrender.com/logout", {
      withCredentials: true, // Ensure cookies are included
    });

    if (response.status === 201) {
      toast.success("Logout successful"); // Show a toast message
      window.location.assign("/");
    }
  } catch (error) {
    toast.error("Logout failed, please try again.");
    console.error("Logout error:", error);
  }
};
const topLinks = [
  {
    to: "/account/domestic-transfer",
    link: "Wire Transfer",
    icon: (
      <div className="bg-[#6236ff] w-12 h-12 dfAc rounded-lg">
        <SwapVertical color={"white"} />
      </div>
    ),
  },
  {
    to: "/account/deposit",
    link: "Deposit",
    icon: (
      <div className=" w-12 h-12 dfAc rounded-lg bg-[#1ddc70]">
        <ArrowDownOutline color={"white"} />
      </div>
    ),
  },
  {
    to: "/account/bank-transfer",
    link: "Inter Bank",
    icon: (
      <div className=" w-12 h-12 dfAc rounded-lg bg-[#ff396f]">
        <ArrowUpOutline color={"white"} />
      </div>
    ),
  },
  {
    to: "/account/cards",
    link: "Cards",
    icon: (
      <div className="bg-[#ffb400] w-12 h-12 dfAc rounded-lg ">
        <CardOutline color={"white"} />
      </div>
    ),
  },
];

const links = [
  {
    to: "/account/loan",
    link: "Loan",
    icon: (
      <div>
        <Card color={"#27173E"} />
      </div>
    ),
  },
  {
    to: "/account/profile",
    link: "Settings",
    icon: (
      <div>
        <SettingsOutline color={"#27173E"} />
      </div>
    ),
  },

  {
    to: "/account/account-statement",
    link: "History",
    icon: (
      <div>
        <TimeOutline color={"#27173E"} />
      </div>
    ),
  },
  {
    to: "/account/support",
    link: "Support",
    icon: (
      <div>
        <ChatbubbleOutline color={"#27173E"} />
      </div>
    ),
  },
  {
    to: "/account/change-password",
    link: "Password",
    icon: (
      <div>
        <KeyOutline color={"#27173E"} />
      </div>
    ),
  },

  {
    to: "/account/cards",
    link: "Cards",
    icon: (
      <div>
        <CardOutline color={"#27173E"} />
      </div>
    ),
  },
];

const drawerLinks: { text: string; link?: string; icon: React.JSX.Element }[] =
  [
    {
      text: "Dashboard",
      link: "./",
      icon: (
        <PieChartOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "My Profile",
      link: "./profile",
      icon: (
        <PersonOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "Change Password",
      link: "./change-password",
      icon: (
        <KeyOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "My Statement",
      link: "./account-statement",
      icon: (
        <TimeOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "Domestic Transfer",
      link: "./domestic-transfer",
      icon: (
        <ArrowDownOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "Inter Bank Transfer",
      link: "./bank-transfer",
      icon: (
        <ArrowUpOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "Wire Transfer",
      link: "./domestic-transfer",
      icon: (
        <SwapVertical
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "Support",
      link: "./support",
      icon: (
        <MailOutline
          style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
        />
      ),
    },
    {
      text: "Log out",
      icon: (
        <div onClick={logout} className="cursor-pointer">
          <LogOutOutline
            style={{ height: "1.5rem", width: "1.4rem", color: "white" }}
          />
        </div>
      ),
    },
  ];

const AccountIndex = () => {
  interface User {
    name: string;
    acc_num: string;
    phone: string;
    email: string;
    country: string;
    occupation: string;
    activated: boolean;
    current_balance: string;
    account_currency: string;
    account_type: string;
    role: string;
  }
  interface Transaction {
    date: string;
    amount: string;
    status: string;
    transac_id: string;
    beneficiary_name?: string;
    beneficiary_acc_num?: string;
    sender_name?: string;
    sender_acc_num?: string;
    acc_type?: string;
  }
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [creditTransac, setCreditTransac] = useState([]);
  const [debitTransac, setDebitTransac] = useState([]);
  const [image, setImage] = useState()

  useEffect(()=>{
    axios.get('https://electrobank-main.onrender.com/getUpload', {withCredentials : true})
    .then((res) => setImage(res.data.profile_picture))
    .catch(err => console.log(err))
},[])

  useEffect(() => {
    const toastId: Id = toast.info("Please wait, fetching user data...", {
      autoClose: false,
      closeOnClick: false,
    });
    axios
      .get<{ user: User }>("https://electrobank-main.onrender.com/getUser", {
        withCredentials: true,
      })
      .then((response) => {
        if (response) {
          const User = response.data.user;
          console.log(User);
          setUser(User);
          toast.dismiss(toastId);
        } else {
          console.log("user not found");
          navigate("/auth/login");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/auth/login");
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://electrobank-main.onrender.com/transact-statement", {
        withCredentials: true,
      })
      .then((response) => {
        if (response) {
          setCreditTransac(response.data.sender_details);
          setDebitTransac(response.data.beneficiary_details);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatDate = (isoDate: string) => {
    return format(new Date(isoDate), "EEEE, MMMM do, yyyy h:mm a");
  };

  const getLatestTransactions = (transactions: Transaction[]): Transaction[] => {
    return [...transactions]
      .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
      .slice(0, 3); // Get the latest 3 transactions
  };
  const latestCreditTransaction = getLatestTransactions(creditTransac);
  const latestDebitTransaction = getLatestTransactions(debitTransac)

  const [nav, showNav] = useState<boolean>(false);
  return (
    <>
      <TitleUpdater />
      <ToastContainer />
      <div className="bg-sky-500 df-jsb-ac  h-16 px-8 fixed w-full font-poppins">
        <FontAwesomeIcon
          icon={faBars}
          className="text-white h-6 cursor-pointer  max-mdPhone:h-5"
          onClick={() => showNav(true)}
        />
        <p className="text-white text-lg max-mdPhone:text-base">
          EliteOceanic Savings
        </p>
        <div className="icons w-[60%]">
          <Link to={"./account-statement"}>
            <FontAwesomeIcon
              icon={faBell}
              className="text-white h-6  max-mdPhone:h-5"
            />
          </Link>
         
          <Link to={"./profile"}>
            {image ? <img src={`https://electrobank-main.onrender.com/images/${image}`} alt="Avatar" className="h-[5%] w-[5%] object-contain rounded-lg" /> : <FontAwesomeIcon
              icon={faUser}
              className="text-[#27173E] h-6 pl-6  max-mdPhone:pl-5 max-mdPhone:h-5"
            />}
            

          </Link>
        </div>
        <div
          className={`drawer absolute h-screen w-screen bg-black bg-opacity-55 top-0 bottom-0 ${
            nav ? "left-0" : "left-[-200rem]"
          } transition-all ease-in-out duration-500 `}
          onClick={() => showNav(false)}>
          <div
            className="drawerContainer bg-white h-screen inline-block"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}>
            <div className="header px-4 dfAc gap-8 py-4">
              <FontAwesomeIcon icon={faUser} className="text-[#27173E] h-6 " />
              <div className="pr-6">
                <p className="text-base text-[#27173E]">
                  {user ? user.name : ""}
                </p>
                <p className="text-[#a9abad] text-sm">
                  Acc No: {user ? user.acc_num : ""}
                </p>
              </div>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-[#6263ff] h-5 w-5 text-sm pl-2 cursor-pointer"
                onClick={() => showNav(false)}
              />
            </div>
            <div className="bg-sky-500 py-2 pl-4">
              <p className="text-sm text-white text-opacity-60">Balance</p>
              <p className="text-3xl pt-2 mb-1 font-bold text-white">
                {user && user.account_currency == "naira"
                  ? `₦ ${user.current_balance}`
                  : ""}
              </p>
            </div>
            <div className="drawerLinks ">
              {drawerLinks.map((v, i) => (
                <Link
                  to={v.link as To}
                  key={i}
                  className=" text-[#27173e] py-[10px] df-ac px-4">
                  <div className="bg-sky-500 rounded-full mr-4 w-9 h-9 dfAc">
                    {v.icon}
                  </div>
                  <p className="text-sm">{v.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="body bg-slate-100 pt-16  font-poppins">
        <div className="midSection bg-sky-500 pt-2">
          <div className="details   mx-4 px-4 pt-4 bg-white rounded-tl-xl rounded-tr-xl">
            <div className="df-jsb-ac">
              <div className="text-[#27173E]">
                <p className="text-base">
                  {user ? user.name : "Fetching Name"}
                </p>
                <h1 className="text-3xl font-semibold pt-1 pb-3">
                  {user && user.account_currency == "naira"
                    ? `₦ ${user.current_balance}`
                    : `${
                        user != null
                          ? `$ ${user.current_balance}`
                          : "Loading balance"
                      }`}
                </h1>
                <p className="text-sm">
                  Ledger Balance:{" "}
                  {user && user.account_currency == "naira"
                    ? `₦ ${user.current_balance}`
                    : `${
                        user != null
                          ? `$ ${user.current_balance}`
                          : "Loading Ledger balance"
                      }`}
                </p>
              </div>
              <p>
                Acct Type:{" "}
                {user && user.account_type ? user.account_type : "Loading type"}
              </p>
            </div>
            <div className="border-b border-gray-300 py-2"></div>
          </div>
        </div>
        <div className="flex justify-between  px-16 max-phone:px-4 max-mdPhone:px-8 mx-4 gap-4 py-4  bg-white rounded-bl-xl rounded-br-xl">
          {topLinks.map((value, key) => (
            <div key={key} className=" text-center ">
              <Link
                to={value.to}
                className="text-sm  flex flex-col  max-mdPhone:text-xs items-center text-[#27173E]">
                <div className="pb-2">{value.icon}</div>
                <p className="text-center">{value.link}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-4 my-6">
          <h1 className="pb-2 text-[#27173E] text-lg">Quick Links</h1>
          <div className="flex justify-center w-full gap-x-4 max-phone:gap-x-2">
            {links.slice(0, 3).map((link, key) => (
              <Link
                to={link.to}
                className="
              text-center w-full  flex  flex-col items-center justify-center py-5 px-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow
              "
                key={key}>
                {link.icon}
                <span className="text-[13px] text-gray-600 mt-1 ">
                  {link.link}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex w-full justify-center gap-x-4 max-phone:gap-x-2 mt-2">
            {links.slice(3, 6).map((link, key) => (
              <Link
                to={link.to}
                className="text-center w-full  flex  flex-col items-center justify-center py-5 px-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                key={key}>
                {link.icon}
                <span className="text-[13px] text-gray-600 mt-1">
                  {link.link}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 "></div>
        <div className="credit w-[98%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-medium mb-2 ">Recent Credit transaction</h1>
          <Link to={'/account/account-statement'}><h1>View all</h1></Link>
          </div>
          {latestCreditTransaction.length > 0 ? (
            <div className="w-full h-auto py-5 bg-white">
              {latestCreditTransaction.map((transac: Transaction, index: number) => (
                <div
                  key={index}
                  className="w-[90%] mt-5 mx-auto h-auto flex flex-row justify-between items-center">
                  <div>
                    <h1 className="text-[14px]">
                      name:{" "}
                      <span className="text-[10px]">
                        {transac.beneficiary_name}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      Account number :{" "}
                      <span className="text-[10px]">
                        {transac.beneficiary_acc_num}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      Amount :{" "}
                      <span className="text-[10px] text-[red]">
                        -{transac.amount}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      Account type :{" "}
                      <span className="text-[10px]">{transac.acc_type}</span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[14px]">
                      Status:{" "}
                      <span className="text-[12px] text-[green]">
                        {transac.status}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      ref :{" "}
                      <span className="text-[12px]">{transac.transac_id}</span>
                    </h1>
                    <h1 className="text-[14px]">
                      Date :{" "}
                      <span className="text-[12px]">
                        {formatDate(transac.date)}
                      </span>
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>No transaction...</h1>
          )}
        </div>
        <div className="pt-8 "></div>
        <div className="credit w-[98%] mx-auto">
          <div className="flex justify-between items-center">
          <h1 className="font-poppins font-medium mb-2 ">Recent Debit transaction</h1>
          <Link to={'/account/account-statement'}><h1>View all</h1></Link>
          </div>
         
          {latestCreditTransaction.length > 0 ? (
            <div className="w-full h-auto py-5 bg-white">
              {latestDebitTransaction.map((transac: Transaction, index: number) => (
                <div
                  key={index}
                  className="w-[90%] mt-5 mx-auto h-auto flex flex-row justify-between items-center">
                  <div>
                    <h1 className="text-[14px]">
                      name:{" "}
                      <span className="text-[10px]">
                        {transac.sender_name}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      Account number :{" "}
                      <span className="text-[10px]">
                        {transac.sender_acc_num}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      Amount :{" "}
                      <span className="text-[10px] text-[green]">
                        +{transac.amount}
                      </span>{" "}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[14px]">
                      Status:{" "}
                      <span className="text-[12px] text-[green]">
                        {transac.status}
                      </span>{" "}
                    </h1>
                    <h1 className="text-[14px]">
                      ref :{" "}
                      <span className="text-[12px]">{transac.transac_id}</span>
                    </h1>
                    <h1 className="text-[14px]">
                      Date :{" "}
                      <span className="text-[12px]">
                        {formatDate(transac.date)}
                      </span>
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>No transaction...</h1>
          )}
        </div>
        <div className="pb-20 "></div>
      </div>
      <UserFooter />
    </>
  );
};

export default AccountIndex;
