import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";

export default function DashboardMain() {
  return (
    <div className="flex">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex items-center justify-center">
        <div className="space-y-6 w-full max-w-3xl p-6">
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
      </div>
    </div>
  );
}
