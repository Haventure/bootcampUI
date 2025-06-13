// src\app\login\page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Key, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function LoginPage() {
  return (
    <div className="min-h-[620px] w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] via-[#2d1b4e] to-[#134e5e]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1a]/40 via-transparent to-[#1e3a5f]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c2d92]/15 via-[#4c1d95]/10 to-[#0891b2]/20"></div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-10 m-7 w-[476px] min-h-[580px] relative z-10">
        <div className="flex mb-5 -mt-[1px]">
          <Image
            src="/shopify.svg"
            alt="Shopify"
            width={92}
            height={27}
            className="h-8"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-[24px] font-bold text-gray-900">Log in</h1>
          <p className="text-[14px] text-gray-500 font-semibold">
            Continue to Shopify
          </p>
        </div>

        <form className="space-y-2">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder=""
              className="w-full border-black/80 rounded-lg"
            />
          </div>

          <Button className="w-full h-[44px] bg-[#2a2a2a]/90 border-b-2 border-b-black hover:bg-gray-700 text-white rounded-lg">
            Continue with email
          </Button>
        </form>

        <div className="mt-1 flex justify-center">
          <Button className="w-full h-[44px] flex items-center justify-center text-sm text-gray-600 bg-transparent border-none outline-none shadow-none hover:bg-gray-200 rounded-lg">
            <svg
              width="40"
              height="40"
              viewBox="2 3 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black/90"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 3C7.067 3 5.5 4.567 5.5 6.5C5.5 8.433 7.067 10 9 10C10.933 10 12.5 8.433 12.5 6.5C12.5 4.567 10.933 3 9 3ZM7 6.5C7 5.39543 7.89543 4.5 9 4.5C10.1046 4.5 11 5.39543 11 6.5C11 7.60457 10.1046 8.5 9 8.5C7.89543 8.5 7 7.60457 7 6.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M4.82727 14.9552C5.66915 13.4398 7.26644 12.5 8.99999 12.5C9.4142 12.5 9.74999 12.1642 9.74999 11.75C9.74999 11.3358 9.4142 11 8.99999 11C6.72169 11 4.62247 12.2352 3.51603 14.2268L3.07937 15.0128C2.58406 15.9043 3.22875 17 4.24867 17H10.25C10.6642 17 11 16.6642 11 16.25C11 15.8358 10.6642 15.5 10.25 15.5H4.52463L4.82727 14.9552Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.125 12.5C15.6082 12.5 16 12.1082 16 11.625C16 11.1418 15.6082 10.75 15.125 10.75C14.6418 10.75 14.25 11.1418 14.25 11.625C14.25 12.1082 14.6418 12.5 15.125 12.5Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 14.8747C18.3217 14.4561 18.75 13.7281 18.75 12.9V11.625C18.75 9.62297 17.127 8 15.125 8C13.123 8 11.5 9.62297 11.5 11.625V12.9C11.5 13.8004 12.0064 14.5826 12.75 14.9772V16.8509C12.75 17.24 12.8635 17.6207 13.0766 17.9462L13.4986 18.591C14.1635 19.6068 15.5727 19.8007 16.4873 19.0023L17.0399 18.5198C17.7394 17.9091 17.9009 16.9369 17.5338 16.1584C17.7228 15.7633 17.7765 15.3088 17.6745 14.8747ZM14.2026 13.9609C14.1351 13.8353 14.0025 13.75 13.85 13.75C13.3806 13.75 13 13.3694 13 12.9V11.625C13 10.4514 13.9514 9.5 15.125 9.5C16.2986 9.5 17.25 10.4514 17.25 11.625V12.9C17.25 13.3694 16.8694 13.75 16.4 13.75H16.1818C15.9938 13.75 15.8301 13.8537 15.7447 14.0071C15.7202 14.051 15.7021 14.0991 15.6918 14.15C15.6853 14.1823 15.6818 14.2158 15.6818 14.25V14.3215C15.6818 14.4106 15.7056 14.4975 15.75 14.5736C15.7632 14.5961 15.7781 14.6177 15.7948 14.6381L16.1262 15.0431C16.1487 15.0706 16.1672 15.0998 16.1818 15.13C16.2004 15.1685 16.2129 15.2087 16.2194 15.2493C16.2497 15.4405 16.15 15.6426 15.9533 15.7227C15.8642 15.759 15.7958 15.8192 15.75 15.8915C15.6613 16.0314 15.657 16.2166 15.75 16.3612C15.7742 16.3988 15.8049 16.4336 15.8424 16.4642L16.0405 16.6256C16.2807 16.8213 16.2869 17.1861 16.0535 17.3898L15.5008 17.8723C15.2722 18.0719 14.9199 18.0234 14.7536 17.7695L14.3316 17.1247C14.2784 17.0434 14.25 16.9482 14.25 16.8509V14.15C14.25 14.0816 14.2328 14.0172 14.2026 13.9609Z"
                fill="currentColor"
              ></path>
            </svg>
            Sign in with passkey
          </Button>
        </div>

        <div className="mt-3 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[83%] border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-[14px]">
            <span className="px-2 bg-white text-gray-500 font-semibold">
              or
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <Button className="w-[125px] h-[50px] flex justify-center items-center py-6 px-4 border-none outline-none shadow-none border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200">
            <Image width={40} height={40} alt="image" src="/apple.png"/>
          </Button>
          <Button className="w-[125px] h-[50px] flex justify-center items-center py-6 px-4 border-none outline-none shadow-none border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200">
            <Image width={20} height={20} alt="image" src="/facebook.png"/>
          </Button>
          <Button className="w-[125px] h-[50px] flex justify-center items-center py-6 px-4 border-none outline-none shadow-none border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200">
            <Image width={30} height={30} alt="image" src="/google.png"/>
          </Button>
        </div>

        <div className="mt-8 text-[13px]">
          <span className="text-gray-600 mr-1">New to Shopify?</span>{" "}
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center"
          >
            Get started
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="mt-10 flex space-x-2 text-xs text-gray-500">
          <Link href="#" className="hover:text-gray-900">
            Help
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Privacy
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
