"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { HiColorSwatch } from "react-icons/hi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white border-t border-gray-200 text-gray-600 font-sans mt-auto">
            {/* Main Footer Container */}
            <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* 1. Brand Section */}
                <div className="space-y-4">
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
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Track your daily income and expenses effortlessly. Secure your financial future with smart analytics and insights.
                    </p>
                </div>

                {/* 2. Quick Links Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Quick Links</h3>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link href="/" className="hover:text-blue-600 hover:underline transition-all font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/features" className="hover:text-blue-600 hover:underline transition-all font-medium">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-600 hover:underline transition-all font-medium">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3. Contact Information Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                            <FiMail className="text-blue-600 text-base shrink-0" />
                            <a href="mailto:support@expensetracker.com" className="hover:text-blue-600 font-medium break-all">
                                support@expensetracker.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiPhone className="text-blue-600 text-base shrink-0" />
                            <a href="tel:+8801700000000" className="hover:text-blue-600 font-medium">
                                +880 1700-000000
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiMapPin className="text-blue-600 text-base shrink-0" />
                            <span className="text-gray-500 font-medium">
                                Chittagong, Bangladesh
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 4. Social Links Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Follow Us</h3>
                    <p className="text-sm text-gray-500">Stay updated by connecting with us on our social platforms.</p>
                    <div className="flex items-center gap-3 pt-1">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm">
                            <FaFacebookF className="text-base" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all shadow-sm">
                            <FaTwitter className="text-base" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all shadow-sm">
                            <FaLinkedinIn className="text-base" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all shadow-sm">
                            <FaGithub className="text-base" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright Section */}
            <div className="w-full border-t border-gray-100 bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-gray-500">
                    <div>
                        © {currentYear} <span className="text-gray-900 font-bold">Expense Tracker</span>. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-blue-600 transition-all">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-blue-600 transition-all">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}