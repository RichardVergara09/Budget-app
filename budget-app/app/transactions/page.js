"use client";
import {useState, useEffect} from 'react';
import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";

export default function Page() {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const [newTransaction, setNewTransaction] = useState({description: "", amount: "", date: ""});

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      setTransactions(transactions);
    };
    fetchTransactions();
  }, []);

    const getTransactions = async () => {
      const response = await fetch("/api/transactions");
      const data = await response.json();
      return data;
    }

    const updateTransaction = async (e) => {
      e.preventDefault();
      await fetch(`/api/transactions/${selectedTransaction?.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(selectedTransaction)
      });
      const transactions = await getTransactions();
      setTransactions(transactions);
    }

    const deleteTransaction = async (id) => {
      await fetch(`/api/transactions/${id}`, {
        method: "DELETE"
      });
      setSelectedTransaction({});
      const transactions = await getTransactions();
      setTransactions(transactions);
    }

    const addTransaction = async (e) => {
      e.preventDefault();
      await fetch("/api/transactions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...newTransaction})
      });
      const transactions = await getTransactions();
      setTransactions(transactions);
      setNewTransaction({name: "", amount: "", date: ""});
    }


  return (
    <div className="flex">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex justify-center">
        <div className="space-y-6 w-full max-w-3xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 text-center">Transactions</h1>

          {/* Filter Buttons */}
          <div className="flex justify-between gap-4">
            <Button className="bg-gray-300 text-gray-700 p-2 rounded shadow hover:bg-gray-400">Search by...</Button>
            <Button className="bg-gray-300 text-gray-700 p-2 rounded shadow hover:bg-gray-400">Filters</Button>
            <Button className="bg-gray-300 text-gray-700 p-2 rounded shadow hover:bg-gray-400">Select Date Range</Button>
          </div>

          {/* Add Transaction */}
          <div className=" text-white p-4 rounded-md">
            <form className="max-w-md mx-auto" onSubmit={(e) => addTransaction(e)}>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="number" name="amount" min="0" step="0.01" id="amount" value={newTransaction.amount} 
                    onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})} 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="amount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="date" name="date" id="date" value={newTransaction.date} 
                    onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="description" id="description" value={newTransaction.description} 
                    onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </form>
          </div>

          {/* Transactions List */}
          <div className="space-y-4">
            <ul className="bg-blue-300 border-2 font-bold border-white rounded-md p-3 flex w-full justify-evenly grid grid-cols-4">
              <li >Description</li>
              <li>Amount</li>
              <li>Date</li>
              <li></li>
            </ul>

            {transactions.map((transaction) => (
              <ul key={transaction.id} className="bg-blue-300 border-2 border-white rounded-md p-3 flex w-full justify-evenly grid grid-cols-4">
                <li>{transaction.description}</li>
                <li>${transaction.amount}</li>
                <li>{transaction.date}</li>
                <button onClick={() => setSelectedTransaction(transaction)} className="text-white bg-green-500 p-1 rounded-md">Edit</button>
                {/* <button onClick={() => deleteTransaction(selectedTransaction.id)} className="text-white bg-red-500 p-1 rounded-md">Delete</button> */}
              </ul>
            ))}
          </div>
          <div className={selectedTransaction.id? "bg-red-200 p-3 rounded-md" : "invisible"}>
            <h2 className="text-center font-bold mb-2">Transaction Details</h2>
            <form onSubmit={(e) => updateTransaction(e)}>
              <label>
                Description: 
                <input type="text" className="border border-grey-300 text-black"
                  value={selectedTransaction.description}
                  onChange={(e) => setSelectedTransaction({...selectedTransaction, description: e.target.value})} />
              </label>
              <label>
                Amount: 
                <input type="number" className="border border-grey-300 text-black"
                  value={selectedTransaction.amount}
                  onChange={(e) => setSelectedTransaction({...selectedTransaction, amount: e.target.value})} />
              </label>
              <label>
                Date:
                <input type="date" className="border border-grey-300 text-black" 
                  value={selectedTransaction.date}
                  onChange={(e) => setSelectedTransaction({...selectedTransaction, date: e.target.value})} />
              </label>
              <button type="submit" 
                className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              <button 
                className="mt-2 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => deleteTransaction(selectedTransaction.id)}>Delete</button>
            </form>

            
          </div>

        </div>
      </div>
    </div>
  );
}
