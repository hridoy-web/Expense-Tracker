"use client";

import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const email = data.email as string
        const password = data.password as string

        if (!email || !password) {
            toast.error("All fields are required.");
            return;
        }

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
            });

            if (error) {
                toast.error(error?.message || "Invalid email or password!");
                return;

            } else {
                toast.success(`Welcome back ${data?.user?.name}`);
                router.push("/");
                router.refresh();
            }

        } catch (error) {
            console.error(`betterAuth Login Error: ${error}`);
            toast.error("An unexpected error occurred.");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            console.error(`Google Sign In Error: ${error}`);
        }
    };


    return (
        <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-gray-50 text-black px-4 overflow-y-auto">
            <div className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-xl border border-gray-100 my-auto">
                <h2 className="text-center text-3xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-center text-sm text-gray-500">Sign in to your account to continue</p>

                <form onSubmit={handleSubmit} className="space-y-4">
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

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Sign In
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
                    onClick={handleGoogleSignIn}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white p-3 font-medium text-gray-700 transition hover:bg-gray-50"
                >
                    <FcGoogle className="h-5 w-5" />
                    Sign in with Google
                </button>

                <p className="text-center text-sm text-gray-600">
                    Dont have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline font-medium">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}