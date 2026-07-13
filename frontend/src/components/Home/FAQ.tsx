"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
    const faqs = [
        { q: "Is my financial data safe here?", a: "Absolutely. We use end-to-end industry standard encryption to ensure your tracking logs are 100% private and protected." },
        { q: "Can I create custom expense categories?", a: "Yes, you can easily create, rename, and color-code custom categories matching your lifestyle." },
        { q: "Is the basic version completely free?", a: "Yes, the standard tracking features, budget limits, and monthly analytics are free forever." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white text-black px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Questions</span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-950 uppercase">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-950 transition-colors hover:bg-gray-100/70 text-sm sm:text-base"
                            >
                                <span>{faq.q}</span>
                                {openIndex === index ? <FiMinus className="text-blue-600" /> : <FiPlus className="text-blue-600" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-gray-200 bg-white"
                                    >
                                        <p className="p-5 text-sm text-gray-500 font-medium leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}