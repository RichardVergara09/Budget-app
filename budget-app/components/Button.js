export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`bg-gray-300 text-gray-700 p-4 rounded shadow hover:bg-gray-400 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
