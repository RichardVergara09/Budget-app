import Button from "../../components/Button";
import Card from "../../components/Card";

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
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      {/* Header */}
      <h1 className="text-xl font-bold text-gray-800">Budget Profiles</h1>

      {/* Add Budget Profile Button */}
      <Button className="w-full bg-gray-200 text-center">
        Create New Budget Profile
      </Button>

      {/* Budget Profiles List */}
      <div className="space-y-4">
        {profiles.map((profile, index) => (
          <Card
            key={index}
            className="text-center space-y-2"
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
  );
}
