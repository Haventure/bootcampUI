'use client'

import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import Link from 'next/link'
import FormIcon from '@/components/icons/FormIcon'
import MailIcon from '@/components/icons/MailIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'

interface LoginModalProps {
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      
      {/* Close Button OUTSIDE */}
      <button
        onClick={onClose}
        className="absolute top-4 right-56 rounded-full w-[35px] h-[35px] bg-slate-600 text-white text-3xl font-bold hover:text-red-300 transition z-50"
      >
        &times;
      </button>

      <div className="relative flex flex-col md:flex-row w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl rounded-2xl">
        {/* Left Section */}
        <div className="w-auto h-auto  md:w-1/2 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Log in or sign up in seconds
          </h2>
          <p className="text-gray-600 text-[15px] text-justify">
            Use your email or another service to continue with Canva (it’s free)!
          </p>

          <button className="w-full flex items-center p-2 border rounded-lg hover:bg-gray-100 transition">
            <FcGoogle className="text-[22px]" />
            <span className="flex-1 text-center font-semibold text-[13px]">Continue with Google</span>
          </button>

          <button className="w-full flex items-center  p-2 border rounded-lg  hover:bg-gray-100 transition">
            <span className="text-blue-600"><FacebookIcon /></span>
            <span className="flex-1 font-semibold text-[13px]">Continue with Facebook</span>
          </button>

          <button className="w-full flex items-center  p-2 border rounded-lg hover:bg-gray-100 transition">
            <MailIcon />
            <span className="flex-1 font-semibold text-[13px] text-center">Continue with email</span>
          </button>

          <button className="w-full flex justify-center p-2 rounded-lg hover:bg-gray-100 transition">
            <span className="text-center font-semibold text-[13px]">Continue another way</span>
          </button>

          <p className="text-gray-600 text-[13px]">
            By continuing, you agree to Canva’s{' '}
            <Link href="#" className="text-purple-500 underline">Terms of Use</Link>. Read our{' '}
            <Link href="#" className="text-purple-500 underline">Privacy Policy</Link>.
          </p>

          <Link href="" className="flex items-center justify-center gap-2">
            <FormIcon />
            <span className="flex-1 text-left font-medium">Sign up with your work email</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:block w-1/2 overflow-hidden">
          <Image
            src="/auth_dialog_en.jpg"
            alt="Login illustration"
            width={600}
            height={600}
            className="object-cover h-auto w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default LoginModal
