import Button from "../../components/Button";
import Card from "../../components/Card";

export default function LoansDebtsMain() {
  const loansDebts = [
    {
      title: "Student Loans",
      amount: "$200.00",
      dueDate: "Nov. 15, 2025",
      remainingBalance: "$15,000.00",
    },
    {
      title: "Mortgage",
      amount: "$2,500.00",
      dueDate: "Nov. 27, 2025",
      remainingBalance: "$725,403.96",
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-800">Loans & Debts</h1>

      {/* Add New Loan/Debt Button */}
      <Button className="w-full">Add New Loan/Debt</Button>

      {/* Loans and Debts List */}
      <div className="space-y-4">
        {loansDebts.map((item, index) => (
          <Card
            key={index}
            className="flex justify-between items-center"
            content={
              <>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                  <p className="text-sm text-gray-500">Remaining Balance: {item.remainingBalance}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{item.amount}</p>
                  <p className="text-sm text-gray-500">Due {item.dueDate}</p>
                  <Button className="mt-2 text-sm text-blue-500 hover:underline">Edit</Button>
                </div>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
