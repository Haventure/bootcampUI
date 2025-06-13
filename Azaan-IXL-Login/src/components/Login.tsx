'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Roboto_Slab } from "next/font/google"
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-roboto-slab",
});


export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-between p-4 xl:p-8">
      {/* Top-right Login Button */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#5abe37] text-white px-4 py-2 rounded hover:bg-[#52b700]"
        >
          
          Sign In
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-[80%] max-w-[630px] overflow-hidden xl:flex max-h-[65vh]">
            {/* Left Panel (Image) */}
            <div className="hidden xl:block w-[220px] bg-gradient-to-tr from-cyan-400 to-blue-500">
              <div className="flex items-center justify-center h-[100%] p-4">
                <Image
                  src="/images/sideImage.jpg"
                  alt="Login Illustration"
                  width={340}
                  height={240}
                />
              </div>
            </div>

            {/* Right Panel (Form) */}
            <div className="flex-1 p-5 xl:px-6 xl:py-6 relative overflow-y-auto mt-0">
              {/* Close Button */}
              <button
                aria-label='close'
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X />
              </button>
              <span className={`${robotoSlab.variable} font-roboto-slab`}><h2 className="text-3xl font-normal text-[#00aeef] mb-4">Sign in to IXL</h2></span>
              <form className="space-y-5">
                {/* Username */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor='email' className="text-[15px] text-[#545454] font-medium">Username</label>
                    <Link href="#" className="text-[11px] text-[#b0b0b0] hover:underline">Forgot username?</Link>
                  </div>
                  <input
                    placeholder=' '
                    aria-label='email'
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor='password' className="text-[15px] font-medium text-[#545454]">Password</label>
                    <Link href="#" className="text-[11px] text-[#b0b0b0] hover:underline">Forgot password?</Link>
                  </div>
                  <input
                    placeholder=' '
                    aria-label='password'
                    type="password"
                    className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 mb-2"
                  />
                </div>

                {/* Remember + Sign In Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className='mb-2' />
                    <label htmlFor="remember" className="text-[15px] text-[#545454] mb-2">Remember</label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#5abe37] text-[16px] font-medium text-white px-8 py-2 rounded hover:bg-green-700 mb-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="text-[14px] mt-4 flex">
                Not a member yet?{' '}
                <Link href="#" className="text-[#00aeef] gap-1 hover:underline flex justify-center items-center ml-1">Join now
                <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
