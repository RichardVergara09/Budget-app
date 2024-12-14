import Button from "../../components/Button";
import Card from "../../components/Card";
import NavigationBar from "../../components/NavigationBar";

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
    <div className="flex">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex justify-center">
        <div className="space-y-6 w-full max-w-3xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 text-center">Loans & Debts</h1>

          {/* Add New Loan/Debt Button */}
          <Button className="w-full bg-gray-200 text-lg py-4">Add New Loan/Debt</Button>

          {/* Loans and Debts List */}
          <div className="space-y-4">
            {loansDebts.map((item, index) => (
              <Card
                key={index}
                className="flex justify-between items-center bg-gray-200 p-6 rounded-lg shadow"
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
      </div>
    </div>
  );
}
