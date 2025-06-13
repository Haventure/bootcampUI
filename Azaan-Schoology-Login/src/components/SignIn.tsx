import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='roboto flex h-[450px] justify-center items-center w-[100%] bg-[#F9F9F8]'>
        <div>
      <div className="ml-8 mt-6 bg-white border rounded-sm border-gray-200 h-[250px] sm:p-8 shadow-sm flex justify-center items-center w-[85%] max-w-md ">
        <span className=''>
          <div className='mt-8'>
             <h2 className="text-lg font-[450px] text-[#333] mb-2 ">Sign in to Schoology</h2>
          </div>
        <div>
          <p className="text-xs text-gray-400 mb-2">All fields are required</p>
        </div>
        <input
          type="text"
          placeholder="Email or Username"
          className="w-[100%] border border-gray-300 p-2 mb-2 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[100%] border border-gray-300 p-2 mb-2 text-sm"
        />
         <div className='flex justify-between'>
        <div className="flex items-center justify-between mb-3">
          <button className="text-white bg-blue-700 border-blue-500 hover:border hover:border-[#d4f3ff] hover:text-[#d4f3ff] rounded-sm  text-sm px-4 py-2 font-bold">
            Log in
          </button>
        </div>

        <div className="text-right mb-3">
          <Link href="#" className="text-sm text-[#005eb8] hover:underline">
            Forgot your password
          </Link>
          <br />
          <Link href="#" className="gap-y-4 mt-4 text-sm text-[#005eb8] hover:border-blue-400">
            SSO Login
          </Link>
        </div>
        </div>

        <div className="flex items-center justify-center my-4">
          
        </div>
        </span>
      </div>
      <div>
       <div className='h-28'>
         <div className="flex items-center justify-center w-[84%] my-2 ml-[34px]">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-sm text-black">or</span>
            <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className='flex items-center justify-center gap-4'>
            <Image src="/images/qr-code.png" width={450} height={100} alt="QR Code" className="h-14 w-14 font-bold text-[14px] object-contain mb-2" />
          <button
            className="text-[15px] font-bold bg-white border-[1.7px] px-4 py-1 border-[#005eb8] hover:border hover:border-[#d4f3ff] text-[#005eb8]"
          >
            Scan QR Code
          </button>
        </div>
        </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default SignIn