'use client';

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    
      <h1 className="text-2xl font-semibold text-center  mb-5">Log in</h1>

      {/* Username/Email */}
      <div className="">
        <label className="text-sm font-semibold justify-stretch  ">
          Username or email
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="mb-3 relative">
        <label className="text-sm font-semibold">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-sm px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div
          className="absolute right-3 top-[37px] cursor-pointer text-gray-00"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      </div>

      {/* Forgot Password */}
      <div className="mb-5 text-md text-left">
        Forgot password?{" "}
        <a href="#" className="text-blue-700 hover:underline">
          Reset your password
        </a>
      </div>

      {/* Log in Button */}
      <button
        className="w-full bg-neutral-300 hover:bg-neutral-400 text-white font-semibold py-2 rounded-sm cursor-not-allowed mb-2"
        disabled
      >
        Log in
      </button>

      {/* Divider */}
      <div className="flex items-center mb-5">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-sm font-bold text-black">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Social Buttons */}
      <SocialButton
        label="Continue with Google"
        icon="/google.png"
      />
      <SocialButton
        label="Continue with Microsoft"
        icon="/microsoft.png"
      />
      <SocialButton
        label="Continue with Apple"
        icon="/apple.png"
      />
      <SocialButton
        label="Continue with Clever"
        icon="/clever.png"
      />
      
      <button className="w-full flex items-center border border-black rounded-md px-4 py-2 mb-2 hover:bg-gray-50 transition">
      
      <span className="text-md font-medium w-full text-center">Continue with Single Sign-on</span>
    </button>
    <div className="flex items-center justify-center mt-6">
        <span className="text-md font-medium w-full text-center text-gray-700">Don't have an account? 
            <Link href={"/signup"} className="text-blue-600 underline">Sign up</Link>
        </span>

    </div>
    
    </>
  );
}

function SocialButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button className="w-full flex items-center border border-black rounded-sm px-2 py-2 mb-2 hover:bg-gray-50 transition">
      <Image src={icon} alt="" width={20} height={20} className="mr-3 rounded-md h-[25px] w-[25px]" />
      <span className="text-md font-medium text-center pr-8 w-full ">{label}</span>
    </button>
  );
}
    