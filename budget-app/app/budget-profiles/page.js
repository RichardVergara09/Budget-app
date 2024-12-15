import Button from "../../components/Button";
import Card from "../../components/Card";
import NavigationBar from "../../components/NavigationBar";

export default function BudgetProfilesMain() {
  const profiles = [
    {
      title: "November Budget",
      amount: "$753.87/$1000",
      details: "5 categories, 2 bank statements",
    },
    {
      title: "October Budget",
      amount: "$921.10/$1200",
      details: "7 categories, 1 bank statement",
    },
    {
      title: "Shopping Budget",
      amount: "$251.75/$500",
      details: "2 categories",
    },
  ];

  return (
    <div className="flex bg-white min-h-screen">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="flex-1 ml-64 flex justify-center">
        <div className="space-y-6 w-full max-w-3xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-400 text-center">Budget Profiles</h1>

          {/* Add Budget Profile Button */}
          <Button className="w-full bg-gray-200 text-center text-lg py-4">
            Create New Budget Profile
          </Button>

          {/* Budget Profiles List */}
          <div className="space-y-4">
            {profiles.map((profile, index) => (
              <Card
                key={index}
                className="text-center space-y-2 bg-gray-200 p-6 rounded-lg shadow"
                content={
                  <>
                    <h2 className="text-lg font-bold text-gray-800">
                      {profile.title}
                    </h2>
                    <p className="text-2xl font-semibold text-gray-700">
                      {profile.amount}
                    </p>
                    <p className="text-sm text-gray-500">{profile.details}</p>
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
