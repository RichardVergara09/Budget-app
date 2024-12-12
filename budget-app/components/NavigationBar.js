import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="w-64 bg-gray-800 text-white h-full fixed flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">Budget App</div>
      <ul className="flex-1 p-4 space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/transactions">Transactions</Link></li>
        <li><Link href="/budget-profiles">Budget Profiles</Link></li>
        <li><Link href="/loans-debts">Loans & Debts</Link></li>
        <li><Link href="/reports">Reports</Link></li>
        <li><Link href="/notifications">Notifications</Link></li>
      </ul>
    </nav>
  );
}
