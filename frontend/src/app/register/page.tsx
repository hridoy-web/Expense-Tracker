"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff, IoMdCheckmarkCircle, IoMdRadioButtonOff } from "react-icons/io";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
    const router = useRouter();

    // States for Password and Visibility
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Password validation rules (Dynamic checked)
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isLengthValid || !hasUppercase || !hasLowercase || !hasNumber) {
            toast.error("Password does not meet all security requirements.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const name = data.name as string;
        const email = data.email as string;
        const passwordValue = data.password as string;

        if (!name || !email || !passwordValue) {
            toast.error('All fields are required.');
            return;
        }

        try {
            const { data: resData, error } = await authClient.signUp.email({
                name,
                email,
                password: passwordValue
            });

            if (error) {
                toast.error(error?.message || "Registration failed!");
                return;
            } else {
                toast.success(`Welcome ${resData?.user?.name}`);
                router.push('/');
                router.refresh();
            }

        } catch (error) {
            console.error(`betterAuth Function Error: ${error}`);
            toast.error("An unexpected error occurred.");
        }
    };

    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: '/',
        });
    };

    return (
        <div className="w-full flex items-center justify-center px-4 py-26">
           
            <div className="w-full max-w-md space-y-6 p-8 border border-slate-300 rounded-xl">
                
                {/* Professional Headline & Branding */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-950">
                        Create Your Account
                    </h2>
                    <p className="text-sm text-gray-500">
                        Join Expense Tracker to manage your finance smartly
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <div className="relative mt-1">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full rounded-xl border border-gray-300 p-3 pl-10 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-black"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <div className="relative mt-1">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="name@example.com"
                                className="w-full rounded-xl border border-gray-300 p-3 pl-10 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-black"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-300 p-3 pl-10 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-black"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                            </button>
                        </div>
                    </div>

                    {/* Password Real-time Checklist UI with Premium React Icons */}
                    <div className="grid grid-cols-2 gap-3 text-xs pt-3 pb-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className={`flex items-center gap-2 ${isLengthValid ? "text-green-600 font-semibold" : "text-gray-400 font-normal"}`}>
                            {isLengthValid ? <IoMdCheckmarkCircle className="text-base shrink-0 text-green-600" /> : <IoMdRadioButtonOff className="text-base shrink-0 text-gray-300" />}
                            <span>Min 8 characters</span>
                        </div>
                        <div className={`flex items-center gap-2 ${hasUppercase ? "text-green-600 font-semibold" : "text-gray-400 font-normal"}`}>
                            {hasUppercase ? <IoMdCheckmarkCircle className="text-base shrink-0 text-green-600" /> : <IoMdRadioButtonOff className="text-base shrink-0 text-gray-300" />}
                            <span>One uppercase</span>
                        </div>
                        <div className={`flex items-center gap-2 ${hasLowercase ? "text-green-600 font-semibold" : "text-gray-400 font-normal"}`}>
                            {hasLowercase ? <IoMdCheckmarkCircle className="text-base shrink-0 text-green-600" /> : <IoMdRadioButtonOff className="text-base shrink-0 text-gray-300" />}
                            <span>One lowercase</span>
                        </div>
                        <div className={`flex items-center gap-2 ${hasNumber ? "text-green-600 font-semibold" : "text-gray-400 font-normal"}`}>
                            {hasNumber ? <IoMdCheckmarkCircle className="text-base shrink-0 text-green-600" /> : <IoMdRadioButtonOff className="text-base shrink-0 text-gray-300" />}
                            <span>One number</span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 p-3.5 font-bold text-white transition hover:bg-blue-700 shadow-md shadow-blue-100 active:scale-[0.99]"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="relative flex items-center justify-center my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <span className="relative bg-white px-3 text-xs text-gray-400 uppercase tracking-wider font-medium">Or continue with</span>
                </div>

                {/* Google Sign In Button */}
                <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white p-3.5 font-semibold text-gray-700 transition hover:bg-gray-50 hover:border-gray-400 active:scale-[0.99]"
                >
                    <FcGoogle className="h-5 w-5 shrink-0" />
                    <span>Sign up with Google</span>
                </button>

                <p className="text-center text-sm text-gray-600 pt-1">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline font-bold">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}