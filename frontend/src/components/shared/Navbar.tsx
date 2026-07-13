"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX, HiChevronDown, HiArrowRight, HiColorSwatch } from "react-icons/hi";
import { authClient, useSession } from "@/lib/auth-client";
import { MdDashboard } from "react-icons/md";
import { BiLogOut, BiSolidUserBadge } from "react-icons/bi";

export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { data: session } = useSession()
    const user = session?.user

    const handleLogOut = async () => {
        await authClient.signOut()
        router.push('/login')
        router.refresh()
    }

    const centerLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "#features" },
        { name: "Contact", path: "/contact" },
    ];

    const getLinkClass = (path: string) => {
        const isActive = pathname === path;
        return `text-sm font-semibold tracking-wide uppercase px-4 py-2 transition-all duration-300 relative group ${isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
            }`;
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200  transition-all duration-300">

            <div className="w-11/12 mx-auto">
                <div className="flex justify-between h-20 items-center">

                    {/*  Logo */}
                    <Link href="/" className="flex items-center gap-3 group select-none">
                        <div className="relative h-11 w-11 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-md">
                            <HiColorSwatch className="w-6 h-6 text-white" />
                            <div className="absolute inset-0 border border-white/20 scale-90"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                                EXPENSE <span className="text-indigo-600">TRACKER</span>
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-0.5">
                                Smart Analytics
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {centerLinks.map((link) => (
                            <Link key={link.name} href={link.path} className={getLinkClass(link.path)}>
                                {link.name}

                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${pathname === link.path ? "scale-x-100" : ""}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Authentication & Profile Options */}
                    <div className="hidden md:flex items-center gap-2">
                        {!user ? (
                            <div className="flex items-center gap-3">

                                <Link
                                    href="/login"
                                    className="text-sm font-bold tracking-wider uppercase text-slate-700 hover:text-indigo-600 px-6 py-3 bg-transparent border border-transparent hover:border-slate-200 transition-all duration-200 active:scale-95"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    href="/register"
                                    className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 hover:from-indigo-700 hover:to-slate-950 px-7 py-3 shadow-lg shadow-indigo-100 transition-all duration-300 active:scale-95"
                                >
                                    Get Started <HiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ) : (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="flex items-center gap-3 p-1.5 pr-4 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-200"
                                >
                                    <div className="relative h-9 w-9 border-2 border-indigo-200 rounded-full overflow-hidden bg-slate-200">
                                        <Image
                                            src={user?.image || '/images/user-icon-logo.png'}
                                            alt={user?.name || 'expense tracker user logo'}
                                            fill
                                            className="object-cover"
                                            sizes="36px"
                                            priority
                                        />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold text-slate-800 leading-none">{user?.name}</span>
                                    </div>
                                    <HiChevronDown className="w-4 h-4 text-slate-500" />
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow-xl border border-slate-100 bg-base-100 w-64 mt-2 text-slate-700 font-medium z-[100] rounded-none"
                                >
                                    <li className="menu-title text-[10px] tracking-wider font-bold text-slate-400  p-3 border-b mb-4 border-slate-100 block">
                                        <span className="block mb-0.5 text-sm text-black">Signed In</span>
                                        <span className=" normal-case text-xs block max-w-50 truncate overflow-hidden whitespace-nowrap">
                                            {user?.email}
                                        </span>
                                    </li>


                                    {/* Dashboard Link  */}
                                    <li className="mt-1">
                                        <Link
                                            href="/dashboard"
                                            className={`flex items-center gap-3 py-3 px-4 text-sm font-semibold rounded-none transition-all duration-150 ${pathname === "/dashboard"
                                                ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-600"
                                                : "hover:bg-slate-50 text-slate-700"
                                                }`}
                                        >
                                            <MdDashboard className="w-4 h-4 shrink-0" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>

                                    {/* Profile Link */}
                                    <li>
                                        <Link
                                            href="/profile"
                                            className={`flex items-center gap-3 py-3 px-4 text-sm font-semibold rounded-none transition-all duration-150 ${pathname === "/profile"
                                                ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-600"
                                                : "hover:bg-slate-50 text-slate-700"
                                                }`}
                                        >
                                            <BiSolidUserBadge className="w-4 h-4 shrink-0" />
                                            <span>My Profile</span>
                                        </Link>
                                    </li>

                                    {/* Divider Line */}
                                    <div className="divider my-1 before:bg-slate-100 after:bg-slate-100"></div>

                                    {/* Log Out Button */}
                                    <li>
                                        <button
                                            onClick={() => { handleLogOut() }}
                                            className="flex items-center gap-3 py-3 px-4 text-sm font-bold text-red-600 hover:bg-red-50 rounded-none transition-all duration-150"
                                        >
                                            <BiLogOut className="w-5 h-5 shrink-0" />
                                            <span>Log Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Mobile Hamburg Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-800 hover:text-indigo-600 p-2.5 border border-slate-100 hover:border-slate-200 bg-slate-50 transition-all duration-200"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-200 w-full absolute left-0 top-20 shadow-xl px-6 py-6 space-y-5 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
                    <div className="flex flex-col space-y-2">
                        {centerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block text-sm font-bold tracking-wide uppercase py-3 px-4 border-l-4 ${pathname === link.path
                                    ? "bg-indigo-50/50 border-indigo-600 text-indigo-600"
                                    : "border-transparent text-slate-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                        {!user ? (
                            <div className="flex flex-col gap-3">
                                <Link
                                    href='/login'
                                    onClick={() => { setIsMobileMenuOpen(false); }}
                                    className="w-full text-center py-3.5 text-sm font-bold tracking-wider uppercase text-slate-700 bg-slate-50 border border-slate-200"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href='/register'
                                    onClick={() => { setIsMobileMenuOpen(false); }}
                                    className="w-full text-center py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 to-slate-900 shadow-md"
                                >
                                    Get Started
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-2">
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-3 px-4 text-sm font-semibold ${pathname === "/dashboard" ? "text-indigo-600 bg-indigo-50/50" : "text-slate-600"}`}
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/profile"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-3 px-4 text-sm font-semibold ${pathname === "/profile" ? "text-indigo-600 bg-indigo-50/50" : "text-slate-600"}`}
                                >
                                    My Profile
                                </Link>
                                <button
                                    onClick={() => { setIsMobileMenuOpen(false); handleLogOut() }}
                                    className="w-full text-left mt-2 py-3.5 px-4 text-sm font-bold uppercase text-red-600 bg-red-50/60"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}