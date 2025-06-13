import Navbar from '@/Navbar';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='bg-[url("/kamihq.png")] bg-cover bg-center h-screen translate-y-[-1px] translate-x-[-1px]'>

      {/* Navbar should be outside of the centered container */}
      <Navbar />

      <div className="bg-[#dedaff] h-full w-full flex items-center justify-center relative">
        {/* Form Container */}
        <div className="bg-white px-10 py-6 mt-20 flex flex-col items-center z-10 w-full max-w-[600px] rounded-[2px]">
          <h2 className="text-[26px] font-bold text-center text-gray-800 mb-8">Log in or Sign Up</h2>

          {/* Google Button */}
          <button className="flex items-center w-[340px] justify-center gap-3 border-2 border-purple-500 rounded-full py-4 text-sm font-medium mb-4 hover:bg-purple-50">
            <Image src="/google.png" alt="Google" width={20} height={20} className="w-5 h-5 text-left" />
            Continue with Google
          </button>

          {/* Microsoft Button */}
          <button className="w-full flex items-center justify-center gap-3 border-2 border-purple-500 rounded-full py-3 text-sm font-medium mb-6 hover:bg-purple-50">
            <Image src="/microsoft.png" alt="Microsoft" width={20} height={20} className="w-5 h-5" />
            Continue with Microsoft
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Email Field */}
          <input
            type="email"
            placeholder="email"
            className="w-full mb-4 px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="password"
            className="w-full mb-6 px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Continue with Email Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75L12 13.5 2.25 6.75M21.75 6.75H2.25" />
            </svg>
            Continue with Email
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-6">
            <a href="#" className="text-purple-600 hover:underline text-sm">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
