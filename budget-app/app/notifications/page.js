import Button from "../../components/Button";

export default function NotificationsMain() {
  const notifications = [
    {
      title: "FOOD REMINDER",
      description: "If Food exceeds $120.00",
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-lg font-bold text-gray-800">Notifications</h1>

      {/* Create New Notification Button */}
      <Button className="w-full bg-gray-200">Create New Notification</Button>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800">{notification.title}</h2>
              <p className="text-gray-700">{notification.description}</p>
            </div>
            <Button className="text-sm text-blue-500 hover:underline">Edit Notification</Button>
          </div>
        ))}
      </div>
    </div>
  );
}