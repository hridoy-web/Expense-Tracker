"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiCoffee, FiTruck, FiHome } from "react-icons/fi";

export default function Categories() {
    const cats = [
        { name: "Shopping & Retail", icon: FiShoppingBag, color: "bg-purple-50 text-purple-600" },
        { name: "Food & Dining", icon: FiCoffee, color: "bg-amber-50 text-amber-600" },
        { name: "Travel & Transport", icon: FiTruck, color: "bg-blue-50 text-blue-600" },
        { name: "Rent & Utilities", icon: FiHome, color: "bg-emerald-50 text-emerald-600" },
    ];

    return (
        <section className="w-full bg-gray-50 text-black px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Granular Tracking</span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-950 uppercase leading-tight">Track every single penny by categories</h2>
                    <p className="text-sm text-gray-500 font-medium">Easily sort your transactions into distinct built-in or custom categories to identify where you spend the most.</p>
                </div>
                
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {cats.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ x: 6 }}
                            className="p-5 bg-white border border-gray-200 rounded-xl flex items-center gap-4 shadow-sm"
                        >
                            <div className={`p-3 rounded-lg ${cat.color}`}>
                                <cat.icon className="text-xl" />
                            </div>
                            <span className="font-bold text-gray-900 text-sm sm:text-base">{cat.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}