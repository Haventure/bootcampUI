import React from "react";

const Text = () => {
  return (
    <section className="relative z-0 -mt-[120px] pt-[90px] bg-[rgba(142,212,248,1)] text-black">
      <div className="pb-[90px]">
        <div className="flex flex-col text-center  bg-[rgba(142,212,248,1)]">
          <div className="flex justify-center text-center items-center">
            <div className="pb-[4px] mr-[9px]">
              <div className="w-[15px] h-[2px] bg-[rgb(200,255,0)]"></div>
            </div>
            <div className="ml-[1.5px]">
              <p
                className="text-[14px] font-[600] uppercase"
                style={{ letterSpacing: "1.5px" }}
              >
                Members
              </p>
            </div>
          </div>
          <div>
            <h1
              className="mt-[5px] text-[56px] font-[700]"
              style={{ lineHeight: "110%", letterSpacing: "-0.5px" }}
            >
              Login
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
