"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        { step: "01", title: "Connect or Input", desc: "Manually add your expenses or securely sync transactions." },
        { step: "02", title: "Set Smart Budgets", desc: "Define monthly limits for different custom spending categories." },
        { step: "03", title: "Analyze & Save", desc: "Watch your savings grow using our clean dashboard graphs." },
    ];

    return (
        <section className="w-full bg-white text-black px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Simple Process</span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-950 uppercase">Get started in three easy steps</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden group hover:border-blue-200 transition-colors"
                        >
                            <span className="text-6xl font-black text-blue-100 absolute -top-2 -right-2 group-hover:text-blue-200 transition-colors">{item.step}</span>
                            <div className="space-y-3 pt-4 z-10 relative">
                                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}