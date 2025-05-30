"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["100", "300", "400"], // Allowed weights
  subsets: ["latin"],
});

// const roboto = Roboto({
//   weight: ['300', '400'], // Light and normal weights
//   subsets: ['latin'],
// });
export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center mt-40  text-center">
        <h1 className={`${roboto.className} text-5xl font-thin text-black`}>
          Enter your user ID and password to log in
        </h1>
        <Link
          href={"/"}
          className="mt-12 text-blue-600 font-bold hover:text-blue-800"
        >
          CREATE A USER ID
        </Link>

        {/* User ID */}
        <p className="mb-1 mt-10 text-left mr-[35rem] text-red-600 font-medium text-sm">
          User ID
        </p>
       <input
        type="text"
        className="
          w-[610px]
          border-2 border-red-500
          
          px-8 py-4
          focus:outline-none
          relative
          transition-all duration-300
        "
        onFocus={(e) => {
          e.currentTarget.style.borderLeftWidth = '6px';
          e.currentTarget.style.borderLeftColor = '#b91c1c'; // Tailwind red-700 hex
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderLeftWidth = '2px';
          e.currentTarget.style.borderLeftColor = '#ef4444'; // Tailwind red-500 hex
        }}
      />

        {/* Password */}
       <p className="mb-1 mt-5 text-left mr-[34rem] text-red-600 font-medium text-sm">
            Password
          </p>

          <div className="relative w-[610px]">
            <input
              type={showPassword ? "text" : "password"}
              className="
                w-full
                border-2 border-red-500
                px-8 py-4
                focus:outline-none
                focus:border-l-6 focus:border-l-red-700
                transition-all duration-300
              "
              onFocus={(e) => {
                e.currentTarget.style.borderLeftWidth = '6px';
                e.currentTarget.style.borderLeftColor = '#b91c1c'; // Tailwind red-700
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderLeftWidth = '2px';
                e.currentTarget.style.borderLeftColor = '#ef4444'; // Tailwind red-500
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
            >
              <span className="border-l border-gray-300 h-6 mr-3"></span>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

        <label className="flex items-center align-center justify-center mt-10 w-96 text-left cursor-pointer select-none">
          <input
            type="checkbox"
            className="mr-3 w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-black font-medium">Remember my user ID</span>
        </label>

        <button
          type="submit"
          className="mt-10 w-40 bg-orange-500 text-white font-semibold py-4 shadow-md transition-colors"
        >
          LOG IN
        </button>

        <Link href="/forgot-password">
          <h2 className="mt-10 text-blue-600 hover:text-blue-800 cursor-pointer font-semibold">
            FORGOT YOUR USER ID OR PASSWORD
          </h2>
          <h3 className="mt-20 text-xl">Need Help?</h3>
        </Link>
        <Link href={"/"}>
          <h2 className="mt-2 text-blue-600 hover:text-blue-800 cursor-pointer font-semibold">
            CUSTOMER SERVICE
          </h2>
        </Link>
        <Footer />
      </main>
    </>
  );
}
