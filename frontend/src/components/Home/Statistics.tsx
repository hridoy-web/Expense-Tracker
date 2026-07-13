"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiDollarSign, FiActivity, FiGlobe } from "react-icons/fi";

export default function Stats() {
    const stats = [
        { id: 1, name: "Active Users Worldwide", value: "200K+", icon: FiUsers },
        { id: 2, name: "Expenses Tracked Daily", value: "$3.5M+", icon: FiDollarSign },
        { id: 3, name: "Average Monthly Savings", value: "24.8%", icon: FiActivity },
        { id: 4, name: "Supported Currencies", value: "120+", icon: FiGlobe },
    ];

    return (
        <section className="w-full bg-white text-black px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors group"
                        >
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <stat.icon className="text-2xl" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">{stat.value}</h3>
                            <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-2 uppercase tracking-wider">{stat.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}