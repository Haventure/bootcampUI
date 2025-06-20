import { Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className=" w-full pt-[60px]">
      <div className="w-full mx-auto px-[15px]">
        <div className="flex flex-wrap mx-[-15px]">
          {/* Login Form Section */}
          <div className="relative order-2 flex-none basis-1/2 max-w-[50%] px-[15px] w-full">
            <div className="bg-black py-[30px] pl-[29px] pr-[29px] w-full h-full ">
              <div className="mb-[15px] w-full">
                <Label
                  htmlFor="username"
                  className="block mb-[7px] text-[16px] px-[1px] text-[rgba(231,231,236,1)]"
                  style={{
                    fontWeight: "300",
                    fontVariationSettings: '"wght" 300',
                  }}
                >
                  Username <span className="text-[rgba(193,108,107,1)]">*</span>
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="bg-white border border-solid rounded-[2px] border-black min-h-[52px] placeholder:text-[16px] p-[16px] text-[rgba(231,231,236,1)] w-full"
                  style={{
                    fontWeight: "300",
                    fontVariationSettings: '"wght" 300',
                  }}
                />
              </div>

              <div className="mb-[16px] text-[rgba(231,231,236,1)] text-[16px] font-light w-full">
                <Label
                  htmlFor="username"
                  className="block mb-[7px] text-[16px] px-[1px] text-[rgba(231,231,236,1)]"
                  style={{
                    fontWeight: "300",
                    fontVariationSettings: '"wght" 300',
                  }}
                >
                  Password <span className="text-[rgba(193,108,107,1)]">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="bg-white border border-solid rounded-[2px] border-black min-h-[52px] placeholder:text-[16px] p-[16px] text-[rgba(231,231,236,1)] w-full"
                    style={{
                      fontWeight: "300",
                      fontVariationSettings: '"wght" 300',
                    }}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-[15px] px-[1px] pt-[19px] w-full">
                <button className="w-full border rounded-[2px] border-solid border-white bg-[#c8ff00] py-[11px] px-[16px]   text-black text-base cursor-pointer font-[700]">
                  Login
                </button>
              </div>

              <div className="mt-[20px] mb-[15px] mx-[1px]">
                <Link
                  href="#"
                  className="text-[rgba(0,183,195,1)] text-[16px]"
                  style={{
                    fontWeight: "300",
                    fontVariationSettings: '"wght" 300',
                  }}
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 flex-none basis-1/4 max-w-[25%] block relative w-full px-[15px]"></div>

          {/* Registration Section */}
          <div className="order-3 flex-none basis-1/4 px-[15px] max-w-[25%] w-full">
            <div className="w-full h-[1px] bg-black "></div>
            <div className="bg-white flex flex-col items-start text-left h-full py-[30px]">
              <div className="">
                <div className="flex items-start space-x-2 mb-[3px]">
                  <div className="py-[6px]">
                    <div className="flex w-[15px] h-0.5 bg-[rgba(142,216,248,1)]" />
                  </div>
                  <p
                    className="text-[12px] ml-[2px] font-[600]"
                    style={{ letterSpacing: "1.5px" }}
                  >
                    NOT REGISTERED?
                  </p>
                </div>
                <h2 className="text-[19.5px] font-semibold hover:underline decoration-2 cursor-pointer">
                  Create an account
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
