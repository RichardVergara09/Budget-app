import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";

export default function NotificationsMain() {
  const notifications = [
    {
      title: "FOOD REMINDER",
      description: "If Food exceeds $120.00",
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
          <h1 className="text-2xl font-bold text-gray-800 text-center">Notifications</h1>

          {/* Create New Notification Button */}
          <Button className="w-full bg-gray-200 text-lg py-4">Create New Notification</Button>

          {/* Notifications List */}
          <div className="space-y-6">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{notification.title}</h2>
                  <p className="text-gray-700 text-lg">{notification.description}</p>
                </div>
                <Button className="text-lg text-blue-500 hover:underline">Edit Notification</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
