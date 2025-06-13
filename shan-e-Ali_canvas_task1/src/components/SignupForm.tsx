// components/SignupForm.tsx
'use client'

import { FC } from 'react'

interface SignupFormProps {
  onSwitchForm: (form: 'login' | 'signup') => void
}

const SignupForm: FC<SignupFormProps> = ({ onSwitchForm }) => {
  return (
    <div className="w-full md:w-1/2 p-12 space-y-6">
      <h2 className="text-4xl font-bold text-gray-800">Create your account</h2>

      {/* Example simple signup inputs */}
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 border rounded-xl"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 border rounded-xl"
      />

      <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition" type="button">
        Sign Up
      </button>

      <p className="text-gray-600">
        Already have an account?{' '}
        <button
          className="text-purple-500 underline"
          onClick={() => onSwitchForm('login')}
        >
          Log in
        </button>
      </p>
    </div>
  )
}

export default SignupForm
