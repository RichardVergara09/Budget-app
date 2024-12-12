import Button from "../../components/Button";

export default function ReportsMain() {
  const placeholderData = [1, 2, 3];

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Report #173</h1>
        <button className="text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17.65 13a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
            />
          </svg>
        </button>
      </div>

      {/* Chart Placeholder */}
      <div className="flex justify-center items-center">
        <img src="/images/piechart.png" alt="Chart Placeholder" className="h-32 w-32 rounded-full" />
      </div>

      {/* Rows Placeholder */}
      <div className="space-y-4">
        {placeholderData.map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 h-12 rounded-lg flex items-center justify-center text-gray-500"
          >
            Row Placeholder {index + 1}
          </div>
        ))}
      </div>

      {/* Create New Report Button */}
      <Button className="w-full">Create New Report</Button>
    </div>
  );
}