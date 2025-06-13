// app/components/Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function Header() {
    const [showModal, setShowModal] = useState(false)
  return (
    <header className="w-full px-[32px] py-4 border-b-2  bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
            alt="Canva Logo"
            width={80}
            height={80}
          />    
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <Link href="#" className="hover:text-black">Features</Link>
          <Link href="#" className="hover:text-black">Pricing</Link>
          <Link href="#" className="hover:text-black">Learn</Link>
          <Link href="#" className="hover:text-black">Templates</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
            
          <button  
          onClick={() => setShowModal(true)}
          className="text-sm text-gray-700 border px-2 py-2 w-[80px] text-center font-semibold rounded-md hover:bg-slate-100">
            Log in</button>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm bg-purple-600 text-white py-2 px-2 rounded-md w-[80px] text-center font-semibold hover:bg-purple-700 transition"
          >
            Sign up
          </button>
          {/* Conditional Modal */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </header>
  );
}
