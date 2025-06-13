'use client';

import Navbar from '@/Navbar';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
  
        <main className='bg-[#dedaff] bg-[url("/kamihq.png")] bg-cover bg-center h-screen translate-y-[-1px] translate-x-[-1px]'>
      
      <Navbar />
      <div className="bg-[#dedaff]  h-full w-full flex items-center justify-center relative">
        {/* Form Container */}
      <div className="bg-white  p-8 rounded-sm max-w-[600px] shadow-lg  w-full text-center space-y-6 relative">
        <h1 className="text-[26px] font-semibold text-gray-800 pb-4">Log in or Sign Up</h1>

        {/* Google Button */}
        <div className="flex items-center justify-center w-full ">
            <button className="flex items-center w-[340] border-2 border-purple-500 py-4 rounded-full text-black hover:bg-purple-50 transition">
                <Image src="/google.png" className="w-5 h-5 ml-6 " alt="Google" width={20} height={20} />
                <span className='text-center w-full text-[18px] font-bold pr-10'>
                    Continue with Google
                </span> 
            </button>
        </div>
        

        {/* Microsoft Button */}
        <div className="flex items-center justify-center w-full pb-4">
            <button className="flex items-center w-[340] border-2 border-purple-500 py-4 rounded-full text-black hover:bg-purple-50 transition">
                <Image src="/microsoft.png" className="w-5 h-5 ml-6 " alt="Google" width={20} height={20} />
                <span className='text-center w-full text-[18px] font-bold pr-10'>
                    Continue with Microsoft
                </span> 
            </button>
        </div>

        {/* Divider */}
        <div className="flex items-center text-gray-400 text-sm">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email + Password Form (Conditional) */}
        {showEmailForm && (
          <div className="space-y-8 ">
            <input
              type="email"
              placeholder="email"
              className="w-[290px] text-center px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="password"
              className="w-[290px] text-center px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}

        {/* Continue with Email */}
        <div className="flex items-center justify-center w-full">
             <button
          onClick={() => setShowEmailForm(true)}
          className={`flex items-center gap-10 w-[340px] py-4 rounded-full text-[18px] text-black font-bold transition ${
            showEmailForm ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-white text-black border-2 border-purple-500 hover:bg-purple-50'
          }`}
        >
         {showEmailForm ? 
           <Image src="/mail1.png" className="w-6 h-5 ml-6 " alt="Google" width={20} height={20} /> :
          <Image src="/mail.png" className="w-6 h-5 ml-6 " alt="Google" width={20} height={20} />
           }
          {showEmailForm ? 'Continue with Email' : 'Continue with Email'}
        </button>
        </div>
       

        {/* Forgot Password */}
        {showEmailForm && (
          <div className="text-sm text-purple-600 mt-1">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
        )}

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-4">
          By signing up for a Kami account you are agreeing to our{' '}
          <a href="#" className="text-purple-600 underline">terms of service</a> and{' '}
          <a href="#" className="text-purple-600 underline">data privacy policy</a>.
        </p>
      </div>
      </div>
    </main>
    
 

  );
}
