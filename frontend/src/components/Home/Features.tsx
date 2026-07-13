"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiPieChart, FiBell } from "react-icons/fi";

export default function Features() {
    const features = [
        {
            title: "AI Expense Categorization",
            desc: "Smart algorithms automatically sort your transactions into meaningful categories instantly.",
            icon: FiCpu,
        },
        {
            title: "Visual Budget Analytics",
            desc: "Beautiful, interactive charts that give you a clear perspective on your monthly cash flow.",
            icon: FiPieChart,
        },
        {
            title: "Smart Limit Alerts",
            desc: "Get instant gentle reminders before you accidentally cross your set budget limits.",
            icon: FiBell,
        },
    ];

    return (
        <section className="w-full bg-white text-black px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto text-center space-y-12">
                <div className="space-y-3 max-w-2xl mx-auto">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Core Features</span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-950 uppercase">Everything you need to save money</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between group"
                        >
                            <div className="space-y-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <feature.icon className="text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-950">{feature.title}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}