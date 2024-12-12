import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Budget App",
  description: "Manage your finances effectively",
};

const NavigationBar = () => (
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex`}
      >
        <NavigationBar />
        <main className="flex-1 ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}
