import Link from "next/link";
import React from "react";
import { RxExternalLink } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="mt-[60px] w-full bg-black text-white">
      <div className="flex justify-between items-center">
        <div className="mt-[50px] mx-[15px]">
          <div className="flex items-start space-x-2 mt-[8px]">
            <div className="pt-[15px]">
              <div className="flex w-[15px] h-0.5 ml-[1px] bg-[rgba(0,183,195,1)]" />
            </div>
            <p
              className="text-[18px] ml-[2px] mt-[2px] font-[600] uppercase"
              style={{ letterSpacing: "1.5px" }}
            >
              Fully automated installation and onboarding
            </p>
          </div>{" "}
          <div>
            <p
              className="text-[39px] ml-[1px] font-semibold"

              // style={{ lineHeight: "120%" }}
            >
              Install via AppSource
            </p>
          </div>
          <div className="">
            <p
              className="text-[24px] mb-[56px] ml-[1px] text-[rgba(231,231,236,1)]"
              style={{
                fontWeight: "300",
                fontVariationSettings: '"wght" 300',
              }}
            >
              Click on the AppSource button, install the free trial and just
              follow the instructions
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[25px] items-center mr-[15px]">
          <Link
            href="/demo"
            className="bg-[#c8ff00] border border-white py-[18px] px-[20px]  text-black flex items-center rounded-xs text-[20px] font-semibold leading-none"
          >
            <span className="ml-[2px]">MS AppSource</span>
            <RxExternalLink
              className="ml-[2px] pb-[1px] w-5 h-5"
              strokeWidth={0.5}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
