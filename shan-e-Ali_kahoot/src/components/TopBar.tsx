"use client";

import Image from "next/image";

export default function TopBar() {
  return (
    <nav className="flex fixed top-0 left-0 z-50 w-full justify-between items-center px-4 py-3 bg-white border-b border-neutral-200 drop-shadow-sm shadow-neutral-700">
      {/* Kahoot Logo */}
      <Image
        src="https://assets-cdn.kahoot.it/auth/assets/topbar_logo_purple-BNw_v6xK.svg"
        alt="Kahoot company logo"
        width={120}
        height={40}
        className="h-8 w-auto"
      />

      {/* Language Picker */}
      <div className="relative flex items-center  cursor-pointer text-sm">
        <Image
          src="https://assets-cdn.kahoot.it/auth/assets/language-picker-black-ByQqAUxR.svg"
          alt="Language Icon"
          width={20}
          height={20}
          className="h-8 w-8"
        />
        <span className="font-bold text-lg">EN</span>
       
         
      </div>
    </nav>
  );
}
