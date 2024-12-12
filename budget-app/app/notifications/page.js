import Button from "../../components/Button";

export default function NotificationsMain() {
  return (
    <div className="space-y-6 max-w-md mx-auto p-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-800">Notifications</h1>

      {/* Create New Notification Button */}
      <Button className="w-full bg-gray-200">Create New Notification</Button>

      {/* Notification List */}
      <div className="bg-gray-200 p-4 rounded-lg space-y-2">
        <h2 className="text-lg font-bold text-gray-800">FOOD REMINDER</h2>
        <p className="text-gray-700">If Food exceeds $120.00</p>
        <Button className="text-sm text-blue-500 hover:underline">Edit Notification</Button>
      </div>
    </div>
  );
}
