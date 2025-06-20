import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-[53px]  text-[#424242] text-[12px]">
      <div className="flex gap-[24px]">
        <Link
          href="#help"
          className="hover:text-gray-700 transition-colors duration-200 hover:underline"
        >
          Help
        </Link>
        <Link
          href="#terms"
          className="hover:text-gray-700 transition-colors duration-200 hover:underline"
        >
          Terms of use
        </Link>
        <Link
          href="#privacy"
          className="hover:text-gray-700 transition-colors duration-200 hover:underline"
        >
          Privacy and cookies
        </Link>
      </div>
      <div className="pt-[8px] text-[10px]">
        <span className="">
          Use private browsing if this is not your device.
        </span>
        <Link
          href="#learnmore"
          className="font-semibold text-[#0f6cbd] hover:underline ml-1 "
        >
          Learn more
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
