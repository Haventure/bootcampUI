import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Source_Serif_4 } from 'next/font/google';

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add or reduce based on your needs
});

const SignIn = () => {
  return (
    <div className="font-lato flex flex-col xl:flex-row h-[940px] w-full">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 bg-[#2c533c] hidden xl:flex flex-col items-center justify-center h-full">
        <div className="w-full flex justify-center mb-12">
          <Image src="/images/signinImage.jpg" width={470} height={10} alt="sideImage" />
        </div>
        <div className={sourceSerifPro.className}>
          <div className="w-full flex justify-between text-white font-medium px-4 ">
          <h1 className="font-sourceSerif text-4xl w-[100%]">
            Join Khan Academy and
            <p className="flex justify-center">learn with us</p>
          </h1>
        </div>
        </div>
        <div className="w-full flex justify-center text-white font-medium">
          <p className="text-[20px] mt-4 text-center mb-6">
            Log in to Khan Academy to get started!
          </p>
        </div>

        <div className="w-full flex justify-center text-white font-medium text-[14px] px-4">
          <h1 className="text-center">
            By logging in to Khan Academy, you agree to our
            <p className="gap-[4px] flex justify-center">
              <Link className="underline" href={'#'}>Terms of use</Link> and
              <Link className="underline" href={'#'}>Privacy Policy</Link>
            </p>
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 mt-28 px-4 sm:px-12 md:px-20 xl:px-0 py-12 xl:py-0 h-full">
        <div className="w-full max-w-[400px]">
          <span className={sourceSerifPro.className}><span className="text-2xl sm:text-3xl md:text-[36px] font-normal ml-40">Log in</span></span>
          {["google.jpg", "clever.jpg", "facebook.jpg", "apple.jpg"].map((img, idx) => (
            <div key={idx} className="mt-1 ml-40 font-arial">
              <button className="hover:border-2 hover:border-[#1865f2] font-semibold text-[16px] flex items-center gap-6 border py-3 px-12 rounded-md border-[#171717] w-[150%] h-[60px]">
                <Image src={`/images/${img}`} alt="logo" width={25} height={10} />
                Continue with Google
              </button>
            </div>
          ))}

          <div className="text-orange-400 mt-6 ml-40">
            <span className="flex text-sm ">
              *<p className="ml-[4px] text-[#171717]">indicates a required field.</p>
            </span>
          </div>

          <div className="mt-4 ml-40">
            <label className="text-md flex gap-x-[4px]">Email or username <p className="text-orange-400">*</p></label>
            <input
              aria-label='email'
              className=" mt-2 border border-[#171717] py-2 px-4 w-[150%] rounded"
              type="text"
              placeholder=""
            />
          </div>

          <div className="mt-4 ml-40">
            <label className="text-md flex gap-x-[4px]">Password <p className="text-orange-400">*</p></label>
            <input
              aria-label='password'
              className=" mt-2 border border-[#171717] py-2 px-4 w-[150%]"
              type="password"
              placeholder=""
            />
          </div>

          <div className="mt-4 ml-40 text-[#1865f2] font-semibold text-sm">
            Forgot password?
          </div>

          <div className="mt-6 ml-40">
            <button className="font-arial w-[150%] border py-3 rounded-md border-[#bfc2ca] font-semibold bg-[#9ea3ad] text-white">
              Log in
            </button>
          </div>

          <div className="mt-6 ml-40 text-sm w-[90%]">
            Need a Khan Academy account?
            <Link className="text-[#1865f2] font-semibold ml-1" href="#">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;