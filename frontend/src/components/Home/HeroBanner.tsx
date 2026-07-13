"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiTrendingUp, FiPieChart, FiShield } from "react-icons/fi";

// TypeScript type definitions
type FloatingImage = {
  src: string;
  alt: string;
  containerClass: string; 
  yOffset: number;      
  duration: number;      
  delay: number;         
  zIndex: number;
};

export default function Hero() {
  // Configured precisely to match a professional staggered UI grid layout
  const images: FloatingImage[] = [
    {
      // 1. Confused/Stressed Expense (Top Left)
      src: "/images/confused-expense.jpg",
      alt: "Stressed manual financial tracking",
      containerClass: "w-[55%] sm:w-[50%] lg:w-[55%] aspect-[4/3] left-0 top-0",
      yOffset: -10,
      duration: 5,
      delay: 0,
      zIndex: 10,
    },
    {
      // 2. Robot Tracker Dashboard (Middle Right - Hero Spotlight Accent)
      src: "/images/Robot-track-finance.jpg",
      alt: "Efficient AI financial assistant",
      containerClass: "w-[65%] sm:w-[55%] lg:w-[62%] aspect-[16/11] right-0 top-[18%] sm:top-[12%] md:top-[15%]",
      yOffset: 12,
      duration: 4.5,
      delay: 0.4,
      zIndex: 20, // Tops over the rest seamlessly
    },
    {
      // 3. Happy Family Expense Tracker (Bottom Left - Balanced Size)
      src: "/images/expense-track-happy-family.jpg",
      alt: "Organized financial life results",
      containerClass: "w-[55%] sm:w-[48%] lg:w-[55%] aspect-[4/3] left-[8%] bottom-0 lg:bottom-2",
      yOffset: -12,
      duration: 6,
      delay: 0.8,
      zIndex: 15,
    },
  ];

  // Global Content Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white text-black pt-24 pb-16 md:pt-32 md:pb-24 lg:py-32 relative overflow-hidden border-b border-gray-100 flex items-center">
      {/* Ambient Background Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-50/70 rounded-full filter blur-3xl opacity-60"></div>
      </div>

      {/* Main Container Layout */}
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center z-10">
        
        {/* Left Side: Typography & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1"
        >
          {/* Badge List */}
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
              <FiTrendingUp /> Track
            </span>
            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
              <FiPieChart /> Analyze
            </span>
            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
              <FiShield /> Secure
            </span>
          </div>

          {/* Headline and Description */}
          <div className="space-y-3">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-black tracking-tight text-gray-950 uppercase leading-tight"
            >
              ORGANIZE YOUR<br />
              <span className="text-blue-600">FINANCIAL LIFE</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 max-w-xl font-medium leading-relaxed"
            >
              Take absolute control of your daily expenses, track budgets, and unlock deep visual analytics with our AI-powered assistant.
            </motion.p>
          </div>

          {/* Interactive CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 hover:from-indigo-700 hover:to-slate-950 px-6 py-4 font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-100 transition-all rounded-sm"
              >
                <span>Get Started Free</span>
                <FiArrowRight className="text-base" />
              </motion.button>
            </Link>

            <Link href="/features" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto border border-gray-300 bg-white px-8 py-4 font-bold text-sm text-gray-700 uppercase tracking-wider transition-colors hover:border-gray-400 rounded-sm"
              >
                Learn Features
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Professional Floating Multi-Image Framework Grid */}
        <div className="lg:col-span-7 w-full flex justify-center items-center relative min-h-[380px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[580px] order-1 lg:order-2">
          
          {images.map((img, index) => (
            <motion.div
              key={index}
              // Smooth initial landing animation
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth cubic bezier
              }}
              className={`absolute bg-white border border-gray-200/60 rounded-xl md:rounded-2xl shadow-xl shadow-slate-200/80 p-1.5 md:p-2 ${img.containerClass}`}
              style={{ zIndex: img.zIndex }}
            >
              {/* Internal Framing Structure to ensure perfect image crop & fit */}
              <div className="w-full h-full rounded-[6px] md:rounded-[10px] overflow-hidden bg-gray-50 relative">
                <motion.img
                  // Infinite Fluid Floating Animation
                  animate={{ y: [0, img.yOffset, 0] }}
                  transition={{
                    duration: img.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: img.delay,
                  }}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center absolute inset-0"
                  loading="eager"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}