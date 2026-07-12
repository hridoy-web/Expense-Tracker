"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
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
        // console.log("Registration Data:", name, password, email);

        const name = data.name as string
        const email = data.email as string
        const password = data.password as string

        if (!name || !email || !password) {
            toast.error('All fields are required.')
            return
        }

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password
            })

            if (error) {
                toast.error(error?.message || "Registration failed!")
                return
            } else {
                toast.success(`Welcome ${data?.user?.name}`)
                router.push('/')
                router.refresh()
            }

        } catch (error) {
            console.error(`betterAuth Function Error: ${error}`)
            toast.error("An unexpected error occurred.");
        }
    };

    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: '/',
        })
    };

    return (
        <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-gray-50 text-black px-4 overflow-y-auto">
            <div className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-xl border border-gray-100 my-auto">
                <h2 className="text-center text-3xl font-bold text-gray-900">Create Account</h2>
                <p className="text-center text-sm text-gray-500">Get started with your free account</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Password Input with Show/Hide Toggle */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-300 p-3 pr-10 outline-none focus:border-blue-500"
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

                    {/* Password Real-time Checklist UI */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                        <div className={`flex items-center gap-1.5 ${isLengthValid ? "text-green-600 font-medium" : "text-gray-400"}`}>
                            <span>{isLengthValid ? "✓" : "•"}</span> Min 8 characters
                        </div>
                        <div className={`flex items-center gap-1.5 ${hasUppercase ? "text-green-600 font-medium" : "text-gray-400"}`}>
                            <span>{hasUppercase ? "✓" : "•"}</span> One uppercase letter
                        </div>
                        <div className={`flex items-center gap-1.5 ${hasLowercase ? "text-green-600 font-medium" : "text-gray-400"}`}>
                            <span>{hasLowercase ? "✓" : "•"}</span> One lowercase letter
                        </div>
                        <div className={`flex items-center gap-1.5 ${hasNumber ? "text-green-600 font-medium" : "text-gray-400"}`}>
                            <span>{hasNumber ? "✓" : "•"}</span> One number
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="relative flex items-center justify-center my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <span className="relative bg-white px-3 text-xs text-gray-400 uppercase">Or continue with</span>
                </div>

                <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white p-3 font-medium text-gray-700 transition hover:bg-gray-50"
                >
                    <FcGoogle className="h-5 w-5" />
                    Sign up with Google
                </button>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline font-medium">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}