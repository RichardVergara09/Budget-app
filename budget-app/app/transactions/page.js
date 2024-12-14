import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";

export default function TransactionsMain() {
  const transactions = [
    {
      description: "WALMART #12944U3",
      amount: "$134.60",
      date: "Nov 2, 2022",
    },
    {
      description: "MCDONALD'S #OB3444",
      amount: "$22.48",
      date: "Nov 3, 2022",
    },
    {
      description: "Rent for November",
      amount: "$600.00",
      date: "Nov 1, 2022",
    },
    {
      description: "Paid friend back for dinner",
      amount: "$34.00",
      date: "Oct 25, 2022",
    },
  ];

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

          {/* Transactions List */}
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-lg flex justify-between items-center text-gray-700"
              >
                <span>{transaction.description}</span>
                <span>{transaction.amount}</span>
                <span>{transaction.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
