"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import Text from "./Text";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 120; // Pixels before turning black
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        } h-[120px] min-h-[80px]`}
      >
        <div className="px-[16px] w-full">
          <div className="flex flex-wrap justify-between mr-[-15px] ml-[-15px]">
            {/* Logo */}
            <div className="pr-[25px] pb-[33px] pl-[15px] h-[150px] overflow-hidden">
              <Link href="/" className="flex cursor-pointer h-full">
                <div className="h-full flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={193}
                    height={92.5}
                    className="h-[92.5px] w-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            <div className="flex">
              <div className="flex mr-[10px] h-[120px] text-[16px] font-[300]">
                {/* Navigation Links */}
                <ul
                  className="flex flex-row justify-center text-center items-center text-[17px] font-[600] text-white"
                  style={{ letterSpacing: "-0.25px" }}
                >
                  {["Products", "Services", "Support"].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-center items-center text-center h-[120px] py-[10px] pr-[12px]"
                      style={{ lineHeight: "120px" }}
                    >
                      <Link
                        href=""
                        className="flex justify-center text-center items-center mr-[2px]"
                      >
                        {item}
                      </Link>
                      <span className="flex justify-center items-center pb-[1px]">
                        <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    </li>
                  ))}
                  <li
                    className="flex justify-center items-center text-center h-[120px] py-[10px] pr-[20px]"
                    style={{ lineHeight: "120px" }}
                  >
                    <Link href="">Partners</Link>
                  </li>
                  <li
                    className="flex justify-center items-center text-center h-[120px] py-[10px] pr-[10px]"
                    style={{ lineHeight: "120px" }}
                  >
                    <Link href="">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Right-side buttons */}
              <div className="flex h-[120px]">
                <div className="flex items-center mr-[14px]">
                  <Link
                    href="/demo"
                    className="bg-[#c8ff00] border border-white py-[15px] px-[17.5px] text-black flex items-center rounded-xs text-[16px] font-[700] leading-none"
                  >
                    <span>Get Demo</span>
                    <RxExternalLink
                      className="ml-[2px] pb-[1px] w-4 h-4"
                      strokeWidth={0.25}
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-center text-white cursor-pointer text-[25px] mr-[15px]">
                  <IoSearch className="w-[22px] h-[50px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Section behind the navbar */}
      <Text />
    </>
  );
}
