// src\app\login\page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

export default function NetflixLoginIn() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="/background2.jpg"
          alt="Netflix Background"
          fill
          className="object-cover translate-y-0"
          priority
        />
      </div>

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50" />
      {/* ----------------------------------------------------------------- */}

      {/* Main Content */}
      <div className="relative z-10  min-h-[849px]">
        <div className="w-full h-[92px] overflow-hidden">
          <div className="relative ml-[144px] mt-[21px] w-[183px] h-[41px]">
            <Image
              src="/netflix.png"
              alt="Netflix Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* tracking-tight  */}

        <div className="w-full max-w-[450px] mx-auto">
          {/* Sign In Form */}
          <div className="bg-black/70 pl-[63px] pr-[65px] py-10 rounded-md pb-[124px]">
            <div className="flex">
              <h1
                className={`text-white text-[33px] mt-[6px] mb-6 font-[700] -tracking-[1px]`}
              >
                Sign In
              </h1>
            </div>

            <form>
              <div>
                <Input
                  type="text"
                  placeholder="Email or mobile number"
                  className={`w-full h-14 -mt-[4px] ml-[1px] p-4 placeholder:text-[16px] bg-[#161616]/70  border-white/35 border-1 text-white placeholder-gray-300 rounded-sm focus:bg-transparent focus:border-white`}
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  className={`w-full h-14 ml-[1px] mt-[16px] p-4 placeholder:text-[16px] bg-[#161616]/70  border-white/35 border-1 text-white placeholder-gray-300 tracking-[0x] rounded-sm focus:bg-transparent focus:border-white `}
                />
              </div>

              <Button className={`w-full h-[40px] text-[16px] font-bold ml-[1px] bg-red-600 hover:bg-red-700 text-white mt-[16px] rounded-sm`}>
                Sign In
              </Button>
            </form>

            <div className="text-center my-4">
              <span className={`text-white/70 text-[16px] -mt-[6px] -m-[2px] ml-[1px]`}>OR</span>
            </div>

            <Button
              variant="outline"
              className={`w-full h-[40px] -mt-[4px] ml-[1px] bg-white/20 border-none outline-none shadow-none border-gray-600 text-white text-[16px] font-bold hover:bg-gray-500 rounded-sm`}
            >
              Use a Sign-in Code
            </Button>

            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                className={`text-white hover:underline text-[16px] underline`}
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center mt-5 space-x-1">
              <Checkbox
                id="remember"
                className="border-gray-600 bg-black rounded-[2px] w-[18px] h-[18px] -mt-[5px] ml-[1px] data-[state=checked]:bg-white data-[state=checked]:border-black"
              />
              <label htmlFor="remember" className={`text-white text-[16px] ml-2 -mt-[1px]`}>
                Remember me
              </label>
            </div>

            <div className="mt-3">
              <span className={`text-gray-400 text-[16px] ml-[1px]`}>
                New to Netflix?{" "}
                <Link href="/signup" className={`text-white hover:underline font-bold`}>
                  Sign up now.
                </Link>
              </span>
            </div>

            <div className="mt-4 text-[13px] text-white/50 ">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
              </p>
                <Link
                  href="/learn-more"
                  className="text-blue-500 underline mb-20"
                >
                  Learn more.
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`relative z-10 bg-[#161616] py-16 min-h-[277px]`}>
        <div className="max-w-6xl mx-auto px-15">
          <p className="text-gray-400 text-[16px] font-semibold mt-[8px] mb-[20px]">Questions? Contact us.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-5">
              <Link href="/faq" className="block text-gray-400 underline">
                FAQ
              </Link>
              <Link
                href="/cookie-preferences"
                className="block text-gray-400 underline"
              >
                Cookie Preferences
              </Link>
            </div>
            <div className="space-y-5">
              <Link
                href="/help"
                className="block text-gray-400 underline"
              >
                Help Center
              </Link>
              <Link
                href="/corporate"
                className="block text-gray-400 underline"
              >
                Corporate Information
              </Link>
            </div>
            <div className="space-y-5">
              <Link
                href="/terms"
                className="block text-gray-400 underline"
              >
                Terms of Use
              </Link>
            </div>
            <div className="space-y-3">
              <Link
                href="/privacy"
                className="block text-gray-400 underline"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
