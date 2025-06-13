import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="font-lato bg-white flex items-center h-[61px] px-4 shadow-md md:px-8 xl:justify-center xl:gap-x-6">
      {/* ===== Mobile (xs-sm) ===== */}
      <div className="flex items-center space-x-2 md:hidden">
        <Image src="/images/logo.jpg" alt="Logo" width={30} height={30} className="h-6 w-6" />
        <p className="text-blue-950 font-bold text-sm sm:text-base">Khan Academy</p>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <IoSearchOutline className="text-2xl text-[#1865f2] ml-[120px]" />

        <Sheet>
          <SheetTrigger>
            <Menu className="text-2xl text-[#1865f2]" />
          </SheetTrigger>
          <SheetContent className="w-[250px]">
            <div className="flex flex-col gap-6 mt-10">
              <div className="flex items-center justify-between text-[#1865f2] font-semibold text-sm">
                <p>Donate</p>
                <IoMdArrowDropdown />
              </div>
              <p className="text-[#1865f2] font-medium text-sm">Login</p>
              <button className="bg-[#1865f2] text-white px-4 py-2 rounded-md text-sm font-semibold">
                Sign up
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ===== Desktop (md to lg) layout ===== */}
      <div className="hidden xl:flex items-center gap-x-6 w-full px-8 relative">
  <div className="flex items-center text-[#1865f2] font-semibold">
    <p className="text-md ml-[36px]">Explore</p>
    <IoMdArrowDropdown size={25} />
  </div>

  <div className="relative w-[200px] max-w-sm text-[#1865f2] font-semibold flex items-center ml-[40px]">
    <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-blue-500" />
    <input
      className="w-full pl-10 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-500 placeholder:text-[#1865f2] placeholder:text-[16px]"
      type="text"
      placeholder="Search"
    />
  </div>

  {/* Centered logo */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <Link href="#" className="flex items-center gap-[2px]">
      <Image
        src="/images/logo.jpg"
        alt="SchoologyLogo"
        className="h-8"
        width={35}
        height={100}
      />
      <p className="font-extrabold text-xl text-blue-950 hover:text-[#1865f2]">Khan Academy</p>
    </Link>
  </div>

  <div className="flex items-center gap-10 ml-auto mr-[40px]">
    <div className="flex items-center font-semibold text-[#1865f2] gap-1">
      <p>Donate</p>
      <TbExternalLink />
    </div>

    <div className="text-[#1865f2] font-semibold">
      Login
    </div>

    <div>
      <button className="bg-[#1865f2] hover:ring-2 hover:ring-[#1865f2] px-4 py-2 flex rounded-md text-white font-semibold">
        Sign up
      </button>
    </div>
  </div>
</div>

    </header>
  );
}
