"use client"
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

const bgImages = ["/bg-1.jpg", "/bg-2.jpg", "/bg-3.jpg", "/bg-4.jpg", "/bg-5.jpg", "/bg-6.jpg", "/bg-7.jpg", "/bg-8.jpg", "/bg-9.jpg", "/bg-10.jpg"]

export default function Home() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const randomIndex: number = Math.floor(Math.random() * bgImages.length);
    setBgImage(bgImages[randomIndex]);
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"  style={{ backgroundImage: `url(${bgImage})` }}>
        <div  className="bg-[#00000080] w-full h-full text-white" />
      </div>

      <div className="w-[1080px] mx-auto relative text-white flex z-10">
        <div className="w-1/2 h-screen flex flex-col justify-center items-start">
          <img className="mt-[82px] ml-[9px]" src="/adobe_logo_white.svg" alt="Adobe Logo" />
          <h3 className="text-[19.5px] ml-[9px] mt-[6px] font-light">Sign in or create an account</h3>
        </div>
        
        <div className="w-[47.25%] ml-[18px] mx-auto py-4">
          <div className="bg-white rounded border border-[#ffffff00] py-[40px] px-[56px] flex flex-col">
            <h1 className="text-[27.5px] text-[#222222] font-semibold mb-[10px]">Sign in</h1>
            <div className="flex text-[16.2px] mb-[33px]">
              <p className="text-[#505050] tracking-tight font-semibold">New user?</p>
              <Link rel="stylesheet" href="#" className="text-[#1473e6] tracking-[-0.25px] ml-[4px] hover:underline active:text-[#0d66d0]">Create an account</Link>
            </div>
            <form className="flex flex-col">
              <label className="text-[#464646] text-[12px] tracking-tight font-semibold mb-[8px]">Email address</label>
              <input type="text" autoFocus className="border border-[#909090] text-[14px] text-black bg-white rounded outline-0 h-[32px] mb-[20px] pt-[2px] pr-[12px] pb-[4px] pl-[11px] hover:border-[#6d6d6d] focus:border-[#147af3] active:border-[#0265dc]"/>
              <div className="flex justify-end">
                <button className="bg-[#0265dc] text-[15px] text-white cursor-pointer tracking-tighter hover:bg-[#0054b6] active:bg-[#004491] w-[86px] mt-[9px] rounded-full border-2 border-[#0000] px-[13px] pt-[3px] pb-[3px] font-semibold">Continue</button>
              </div>
            </form>
            <div className="mt-[21px] mb-[10px] text-[#4b4b4b] text-[18px] flex justify-center">
              <span className="border-t border-[#eaeaea] w-[50%] mt-[12px] mr-[8px]"></span>
              <p>Or</p>
              <span className="border-t border-[#eaeaea] w-[50%] mt-[12px] ml-[8px]"></span>
            </div>
            <div className="mt-[13px] flex flex-col gap-[15px] w-full">
              <Button label="Google" path="/google-icon.svg" />
              <Button label="Facebook" path="/facebook-icon.svg" />
              <Button label="Apple" path="/apple-icon.svg" />
              <Link href="#" className="text-[#1473e6] mt-[2px] text-[15px] text-center tracking-tight hover:underline active:text-[#0d66d0]">View more</Link>
            </div>
            <Link href="#" className="text-[#1473e6] mt-[35px] mb-[14px] text-[14.5px] tracking-tight text-left hover:underline active:text-[#0d66d0]">Get help signing in</Link>
          </div>
        </div>
      </div>
      <button className="fixed bottom-[60px] right-[22px] bg-white bg-[url('/jarvis_bubble_chat.svg')] bg-no-repeat bg-[length:24px] bg-center border-2 border-[#505050] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.15)] text-[#34495e] text-[20px] w-[60px] h-[60px] cursor-pointer outline-none z-[99999]"/>
      <Link href="#" className="absolute flex bottom-[-83px] tracking-tight text-[12px] hover:underline font-bold leading-[1.33] pb-[12px] pl-[16px]">
        <img src="/stock.svg" alt="Icon image" className="w-[18px] h-[18px] mr-[6px]"/>
        <p className="mt-[1px]">Lincoln Barbour</p>
      </Link>
      <footer className="bg-white relative w-full border-t border-[#d3d3d3] py-[10px] px-[16px] flex flex-wrap justify-end
      text-[14.5px] text-[#747474]">
        <p className="tracking-tight mr-[16px]">Copyright © 2025 Adobe. All rights reserved.</p>

        <Link href="#" className="hover:text-[#1473e6] hover:underline active:text-[#0d66d0] tracking-tight border-l border-[#d3d3d3] px-[16px]">
          Terms of Use
        </Link>
        <Link href="#" className="hover:text-[#1473e6] hover:underline active:text-[#0d66d0] tracking-tight border-l border-[#d3d3d3] px-[16px]">
          Cookie preferences
        </Link>
        <Link href="#" className="hover:text-[#1473e6] hover:underline active:text-[#0d66d0] tracking-tight border-l border-[#d3d3d3] px-[16px]">
          Privacy
        </Link>
        <Link href="#" className="hover:text-[#1473e6] hover:underline active:text-[#0d66d0] tracking-tight border-l border-[#d3d3d3] px-[16px]">
          Do not sell or share my personal information
        </Link>
      </footer>

    </div>
  );
}
