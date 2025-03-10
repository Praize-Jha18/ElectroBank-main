import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  const user = {
    name: "PJ",
    email: "praisejahfrancis@gmail.com",
    balance: "$5,000.00",
  };

  const transactions = [
    { id: 1, date: "2025-03-10", amount: "$200", type: "Deposit" },
    { id: 2, date: "2025-03-09", amount: "$50", type: "Withdrawal" },
    { id: 3, date: "2025-03-08", amount: "$100", type: "Transfer" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Welcome, {user.name}</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-800 font-bold">Balance: {user.balance}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Transfer</button>
      </div>

      <div className="mt-6">
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 ${activeTab === "transactions" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`} 
            onClick={() => setActiveTab("transactions")}>Transactions</button>
          <button 
            className={`px-4 py-2 ${activeTab === "profile" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`} 
            onClick={() => setActiveTab("profile")}>Edit Profile</button>
        </div>

        {activeTab === "transactions" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
            <ul>
              {transactions.map((tx) => (
                <li key={tx.id} className="border p-2 mb-2 rounded shadow">
                  <span className="font-medium">{tx.date}</span>: {tx.type} - {tx.amount}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Edit Profile</h3>
            <input type="text" placeholder="Name" className="border p-2 w-full mb-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 w-full mb-2 rounded" />
            <button className="px-4 py-2 bg-green-600 text-white rounded">Save Changes</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
