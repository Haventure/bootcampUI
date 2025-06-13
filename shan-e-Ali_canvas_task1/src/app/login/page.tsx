'use client'

import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import Link from 'next/link'
import FormIcon from '@/components/icons/FormIcon'
import MailIcon from '@/components/icons/MailIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'

const LoginPage: FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Left Section: Login Options */}
        <div className="w-full md:w-1/2 p-12 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Log in or sign up in seconds
          </h2>

          <p className="text-gray-600 text-xl">
            Use your email or another service to continue with Canva (it’s free)!
          </p>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            <span className="flex-1 text-center font-semibold">Continue with Google</span>
          </button>

          {/* Facebook Login Button with colored icon */}
          <button
            type="button"
            className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            {/* FacebookIcon uses `currentColor`, so this wrapper sets it to blue */}
            <span className="text-blue-600">
              <FacebookIcon />
            </span>
            <span className="flex-1 text-center font-semibold">Continue with Facebook</span>
          </button>

          {/* Email Login Button */}
          <button
            type="button"
            className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            <MailIcon />
            <span className="flex-1 text-center font-semibold">Continue with Email</span>
          </button>

          {/* Alternate Option Button */}
          <button
            type="button"
            className="w-full flex justify-center px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            <span className="text-center font-semibold">Continue another way</span>
          </button>

          {/* Terms & Privacy Links */}
          <p className=" text-gray-600 text-lg">
            By continuing, you agree to Canva’s{' '}
            <Link href="#" className="text-purple-500 underline">Terms of Use.</Link>{' '}
            Read our{' '}
            <Link href="#" className="text-purple-500 underline">Privacy Policy</Link>.
          </p>

          {/* Work Email Signup Button */}
            <Link href="" className="flex items-center justify-center gap-2">
                <FormIcon />
                <span className="flex-1 text-left font-semibold">Sign up with your work email</span>
            </Link>
        </div>

        {/* Right Section: Illustration Image */}
        <div className="hidden md:block w-1/2">
          <Image
            src="/auth_dialog_en.jpg"
            alt="Login illustration"
            width={600}
            height={600}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
