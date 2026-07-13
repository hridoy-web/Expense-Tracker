"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
    const reviews = [
        {
            text: "This application completely changed my savings habit. I managed to save an extra 20% within the very first month!",
            name: "Sanjoy Kumar",
            role: "Business Analyst",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"
        },
        {
            text: "The UI is incredibly clean. I love the simple categorization system and the continuous floating animation details.",
            name: "Hridoy Chowdhury",
            role: "Frontend Developer",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
        }
    ];

    return (
        <section className="w-full bg-gray-50 text-black px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-100">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">User Stories</span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-950 uppercase">Loved by thousands of savers</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-6"
                        >
                            <p className="text-sm sm:text-base italic text-gray-600 font-medium leading-relaxed">{review.text}</p>
                            <div className="flex items-center gap-4">
                                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-gray-300" />
                                <div>
                                    <h4 className="font-bold text-gray-950 text-sm sm:text-base">{review.name}</h4>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}