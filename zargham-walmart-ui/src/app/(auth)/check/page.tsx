"use client";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleContinueClick = () => {
    router.push("/sign-up");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow flex-col items-center px-4">
        <div className="mx-auto px-4 w-full md:w-[40%] min-[900px]:w-[30%] xl:w-1/4 pb-16 md:px-1">
          <header className="flex flex-col mt-[1.75rem] text-[1.75rem] text-center items-center">
            <Link href="/">
              <Image
                src="/images/walmartLogo.svg"
                alt="Walmart Logo"
                width={64}
                height={64}
                loading="lazy"
              />
            </Link>
            <h1 className="text-lg mt-[.5rem] mb-[1.5rem] font-bold">
              Sign in or create your account
            </h1>
            <p className="mb-[1.5rem] text-[#2e2f32] text-sm font-normal leading-6">
              Not sure if you have an account? Enter your phone number or email
              and we&apos;ll check for you.
            </p>
          </header>
          <form className="mt-[1rem] mb-[1rem]">
            <label className="text-left text-sm ml-1 font-bold">
              Phone number or email
            </label>
            <div className="relative flex rounded shadow-[inset_0_0_0_1px_#909196]">
              <input
                type="text"
                id="input"
                className="w-full p-[1rem] border border-[#2e2f32]  rounded hover:ring-offset-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center font-bold mt-4 mb-4 px-6 text-base h-10 bg-blue-600 text-white py-2  rounded-full hover:bg-blue-700 transition"
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </form>
          <p className="whitespace-nowrap my-1 pr-2 text-[#2e2f32] font-normal text-base leading-6">
            Securing your personal information is our priority.
            <br />
            <Link href="#" className="underline text-[#2e2f32]">
              See our privacy measures.
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
