'use client';

import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center relative">
      {/* Purple banner with logo and left background pattern */}
      <div   className="w-full bg-purple-950 h-55 flex justify-center items-center relative">
        
   {/* Absolutely positioned patterned div */}
      <div
        className="absolute"
        style={{
          backgroundImage:
            "url('https://login.frontlineeducation.com/ui/images/bg-pattern.svg?v=1733336088251')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-224px -24px",
          height: "220px",
          width: "300px",
          opacity: 0.2,
          zIndex: 0,
          top: 0, // adjust as needed
          left: 0, // adjust as needed
        }}
      ></div>
        <img
          src="https://login.frontlineeducation.com/ui/images/frontline-logo-light.svg?v=1733336088251"
          alt="Frontline Logo"
          className="h-10 mb-35"
        />
      </div>

      {/* Login card overlapping the purple banner */}
      <div className="-mt-32 p-[35px] bg-white shadow-lg w-full max-w-sm overflow-hidden z-10">
        <div className="">
          <h2 className="text-[23px] text-gray-600 text-center mb-4"
          style={{ color: '#5b6770' }}
          >
            Sign in with a Frontline ID
          </h2>

          {/* Username input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1 text-[11px]"
              style={{ color: '#5b6770' }}
            >
              Frontline Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-[11px]"
            style={{ color: '#5b6770' }}
            >
              
              Frontline Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit button */}
          <button className="w-full bg-blue-400 text-white font-sm py-2 px-4 transition flex items-center justify-center gap-2" >
          <img src="https://login.frontlineeducation.com/ui/images/f-white.png" alt="" className="" />
          Sign In with Frontline ID
        </button>


          {/* Forgot links */}
          <p className="text-sm text-center text-gray-600 mt-4 mb-5 flex justify-center items-center gap-2">
            <Link href="/" className="underline">
              Forgot Username
            </Link>
            <span className="inline-block w-px h-5 bg-gray-400"></span>
            <Link href="/" className="underline">
              Forgot Password
            </Link>
          </p>
        </div>
      </div>

      {/* SSO Link below the card */}
      <p className="text-center mt-3 text-blue-700 underline hover:opacity-80">
        <Link href="/">Or Sign In with Organization SSO</Link>
      </p>

      {/* Large image below everything */}
      <div className="w-80 mt-2 mb-10">
        <img
          src="https://s3.amazonaws.com/prod-use1-plat-idm/loginAd-638842103657304637.png"
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Footer links */}
     <div className="flex items-center justify-center">
    <div className="flex items-center text-[11px] w-full max-w-xl mx-auto cursor-pointer">
      <div>About Frontline</div>
      <div className="ml-5">Terms & Conditions</div>
      <div className="ml-6">© 2025 Frontline Education. All rights reserved.</div>
    </div>
    </div>
    </div>
  );
}
