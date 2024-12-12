export default function Card({ title, content, footer }) {
  return (
    <div className="bg-gray-200 p-4 rounded shadow">
      <h2 className="text-lg font-bold text-gray-700">{title}</h2>
      <div className="text-gray-700">{content}</div>
      {footer && <div className="mt-2">{footer}</div>}
    </div>
  );
}
