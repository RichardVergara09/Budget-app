import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="w-64 bg-gray-200 text-black h-full fixed flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700 text-center">Budget App</div>
      <ul className="flex-1 p-4 space-y-4">
        <li><Link href="/dashboard"><img src="/images/dashboard.png" alt="dashboard icon" className="w-6 h-6 inline-block mr-2"/> Dashboard</Link></li>
        <li><Link href="/transactions"><img src="/images/transaction.png" alt="transaction icon" className="w-6 h-6 inline-block mr-2"/>Transactions</Link></li>
        <li><Link href="/budget-profiles"> <img src="/images/profile.png" alt="budget icon" className="w-6 h-6 inline-block mr-2"/>Budget Profiles</Link></li>
        <li><Link href="/loans-debts"><img src="/images/loan.png" alt="loan icon" className="w-6 h-6 inline-block mr-2"/>Loans & Debts</Link></li>
        <li><Link href="/reports"><img src="/images/report.png" alt="report icon" className="w-6 h-6 inline-block mr-2"/>Reports</Link></li>
        <li><Link href="/notifications" ><img src="/images/notification.png" alt="notification icon" className="w-6 h-6 inline-block mr-2"/>Notifications</Link></li>
        <li><Link href="/app/components/settings"> <img src="/images/Settings.png" className="w-6 h-6 inline-block mr-2"/>Settings</Link></li>
      </ul>
    </nav>
  );
}
