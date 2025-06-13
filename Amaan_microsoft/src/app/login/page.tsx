import Link from "next/link";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
});

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 bg-[url(/microsoft.svg)] bg-cover bg-no-repeat bg-center px-6 overflow-x-hidden">
      <section className="text-black body-font w-full max-w-[28rem] pt-4">
        <div className="bg-white rounded-lg p-10 flex flex-col w-full shadow-md h-[420px]">
          {/* Card Content */}
          <h1 className="flex items-center justify-center text-xl text-gray-600 font-bold">
            <img src="/logo.png" alt="Microsoft" className="w-7 h-7 mr-1" />
            Microsoft
          </h1>
          <h2 className={`${roboto.className} text-center font-bold mt-8 text-2xl`}>
            Sign In
          </h2>
          <p className="text-sm text-center mt-2">Use your Microsoft account.</p>

          <div className="relative mb-6 mt-8 box-border">
            <input
              type="email"
              placeholder="Email or phone number"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-6 transition-colors duration-200 ease-in-out"
            />
            <p className="cursor-pointer mt-2 ml-1 text-blue-600 font-semibold hover:underline">
              <Link href="/">Forgot your username?</Link>
            </p>
          </div>

          <button className="w-full text-white bg-blue-700 border-0 py-2 px-10 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Next
          </button>

          <p className="text-sm text-gray-500 mt-5 text-center">
            New to Microsoft?{" "}
            <Link href="/" className="text-blue-600 font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        {/* Footer links placed just below the card */}
        <div className="w-full max-w-lg px-6 text-center text-sm text-gray-600 mt-20">
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/" className="hover:underline">
              Help
            </Link>
            <Link href="/" className="hover:underline">
              Terms of use
            </Link>
            <Link href="/" className="hover:underline">
              Privacy & cookies
            </Link>
          </div>
        </div>
      </section>
    <p className="text-sm">Use private browsing if this is not your device.
        <Link href={'/'} className="text-blue-500 hover:underline">
        Learn more
        </Link>
        </p>
    </div>
  );
}

export default Login;
