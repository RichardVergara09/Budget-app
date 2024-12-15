import Link from "next/link";

export default function Settings () {

    return(
        <div className="settings bg-white">
            <h1>Settings</h1>
            <Link href="/settings/account"></Link>
            <ul>
                <li>Notifications</li>
                <li>Accounts and backup</li>
                <li>Security and Location</li>
                <li>Password settings</li>
                <li>Charge limits</li>
            </ul>
            
            <Link href="/login/login">Log Out</Link>
        </div>
    )
}
