import { ChevronLeft } from "lucide-react";
import React from "react";

const BreadCumb = () => {
  return (
    <div className="">
      <div className="flex items-center text-center pt-[24px] px-[10px]">
        <div className="flex items-center text-center">
          <ChevronLeft className="flex items-center text-center h-3.5 w-3.5 " />
          <p className="underline text-[12px]">Home</p>
        </div>
        <div className="flex items-center text-center">
          <ChevronLeft className="flex items-center text-center h-3.5 w-3.5 " />
          <p className="text-[12px]">Login</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
