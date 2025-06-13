// app/login.tsx (or wherever you place the page)
'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import Image from 'next/image';
import { Lato } from "next/font/google"

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400','700'],
})

export default function LoginPage() {
  const [open, setOpen] = useState(false);

  return (
      <div className="font-lato flex flex-col justify-between min-h-screen p-4 bg-white">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <header className="flex justify-end">
          <Dialog.Trigger asChild>
            <button className="bg-slate-800 text-white px-4 py-2 rounded font-lato">Login</button>
          </Dialog.Trigger>
        </header>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Dialog.Content
            className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md rounded-md bg-white shadow-lg p-6 sm:w-[350px] xl:w-[390px]">
            <Dialog.Title className="text-[22px] font-medium mb-4 font-lato">Please sign in</Dialog.Title>
            <div className={lato.className}>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Username or email"
                className="w-full px-4 py-3 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded"
              />
              <div className="text-[16px] text-center text-gray-800 cursor-pointer">
                forgot password?
              </div>
              <button
                type="submit"
                className="w-full tracking-widest bg-slate-800 text-white py-4 text-[19px] rounded font-bold"
              >
                Login
              </button>
            </form>
            </div>
            <div className={lato.className}>
            <p className="mt-4 text-center text-gray-800">or</p>
            <button className="w-full flex items-center justify-between gap-2 border border-gray-300 py-2 rounded">
              <Image src={'/images/google.jpg'} width={30} height={10} alt="Google" className="w-5 h-5 ml-2" />
              <p className='mr-24'>Sign in with Google</p>
            </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
