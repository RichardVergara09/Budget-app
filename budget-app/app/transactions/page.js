import Button from "../../components/Button";
import Card from "../../components/Card";

export default function TransactionsMain() {
  const transactions = [
    {
      title: "WALMART #12944U3",
      amount: "$134.60",
      date: "Nov 2, 2022",
    },
    {
      title: "MCDONALD'S #OB3444",
      amount: "$22.48",
      date: "Nov 3, 2022",
    },
    {
      title: "Rent for November",
      amount: "$600.00",
      date: "Nov 1, 2022",
    },
    {
      title: "Paid friend back for dinner",
      amount: "$34.00",
      date: "Oct 25, 2022",
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-800">Expenses</h1>

      {/* Filter Buttons */}
      <div className="flex justify-between gap-4">
        <Button className="w-full">Search by...</Button>
        <Button className="w-full">Filters</Button>
        <Button className="w-full">Select Date Range</Button>
      </div>

      {/* Transactions list */}
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <Card
            key={index}
            className="flex justify-between items-center"
            content={
              <>
                <div>
                  <h2 className="text-gray-800">{transaction.title}</h2>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{transaction.amount}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}

