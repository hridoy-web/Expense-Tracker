"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
    return (
        <section className="w-full bg-white text-black px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
            {/* Soft decorative background line */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[400px] h-[400px] bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl relative z-10">
                <div className="space-y-3 max-w-xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">Ready to master your money?</h2>
                    <p className="text-sm sm:text-base text-gray-400 font-medium">Join over thousands of users who are already tracking smart, optimizing budgets, and growing their net worth daily.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full px-5 py-4 bg-gray-900 border border-gray-800 rounded-xl font-medium text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                    <Link href="/register" className="w-full sm:w-auto">
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-sm text-white uppercase tracking-wider whitespace-nowrap hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                        >
                            <span>Join Now</span>
                            <FiArrowRight />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}