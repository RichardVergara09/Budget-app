import Button from "../../components/Button";

export default function DashboardMain() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      <div className="bg-gray-200 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800">November Budget</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold text-lg">$753.87</span>
            <span className="text-sm">remaining in total</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold text-lg">$264.21</span>
            <span className="text-sm">remaining in Food</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold text-lg">$138.54</span>
            <span className="text-sm">remaining in Gas</span>
          </div>
        </div>
      </div>

      <Button className="w-full">Add Transaction</Button>

      <div className="grid grid-cols-2 gap-4">
        <Button>View Transactions</Button>
        <Button>Loans & Debts</Button>
      </div>

      <Button className="w-full">Edit Home Page</Button>
    </div>
  );
}
