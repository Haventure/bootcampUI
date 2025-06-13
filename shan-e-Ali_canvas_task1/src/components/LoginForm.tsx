// components/LoginForm.tsx
'use client'

import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import FormIcon from '@/components/icons/FormIcon'
import MailIcon from '@/components/icons/MailIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'

interface LoginFormProps {
  onSwitchForm: (form: 'login' | 'signup') => void
}

const LoginForm: FC<LoginFormProps> = ({ onSwitchForm }) => {
  return (
    <div className="w-full md:w-1/2 p-12 space-y-6">
      <h2 className="text-4xl font-bold text-gray-800">
        Log in or sign up in seconds
      </h2>

      <p className="text-gray-600 text-xl">
        Use your email or another service to continue with Canva (it’s free)!
      </p>

      {/* Google Login Button */}
      <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition" type="button">
        <FcGoogle className="text-xl" />
        <span className="flex-1 text-center font-semibold">Continue with Google</span>
      </button>

      {/* Facebook Login Button */}
      <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition" type="button">
        <span className="text-blue-600">
          <FacebookIcon />
        </span>
        <span className="flex-1 text-center font-semibold">Continue with Facebook</span>
      </button>

      {/* Email Login Button */}
      <button className="w-full flex items-center gap-2 px-4 py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition" type="button" onClick={() => onSwitchForm('signup')}>
        <MailIcon />
        <span className="flex-1 text-center font-semibold">Continue with Email</span>
      </button>

      {/* Alternate Option Button */}
      <button className="w-full flex justify-center px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition" type="button">
        <span className="text-center font-semibold">Continue another way</span>
      </button>

      <p className="text-gray-600 text-lg">
        By continuing, you agree to Canva’s{' '}
        <Link href="#" className="text-purple-500 underline">Terms of Use.</Link>{' '}
        Read our{' '}
        <Link href="#" className="text-purple-500 underline">Privacy Policy</Link>.
      </p>

      <Link href="#" className="flex items-center justify-center gap-2">
        <FormIcon />
        <span className="flex-1 text-left font-semibold">Sign up with your work email</span>
      </Link>
    </div>
  )
}

export default LoginForm
