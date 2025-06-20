"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import SignInOptions from "./SigninOptions";

const LoginPage: React.FC = () => {
  const [staySignedIn, setStaySignedIn] = useState(false);
  // const [role, setRole] = useState<"Student" | "Educator">("Student");

  return (
    <div className="min-h-screen overflow-x-hidden relative w-full">
      <div
        className="bg-left-bottom bg-cover bg-fixed bg-white"
        style={{
          backgroundImage:
            "url('https://app.discoveryeducation.com/static/img/public/2021/student-desktop@2x.jpg')",
        }}
      >
        <div className="flex-1 min-h-[500px]">
          <div className="align-baseline">
            <div className="px-8 ">
              <div className="m-auto max-w-[600px] min-h-full">
                <section className="relative flex flex-col justify-center text-center pt-4 item-center rounded-[16px] min-h-screen]">
                  <div className="bg-white rounded-[16px] shadow-lg w-full">
                    {/* Logo */}
                    <div className="relative flex item-center justify-center pt-[32px] pb-[16px]">
                      <Link href="/">
                        <Image
                          src="/images/de-logo-full-black.png"
                          alt="Discovery Education Logo"
                          width={197}
                          height={46}
                        />
                      </Link>
                    </div>
                    {/* Sign In Section */}
                    <div className="flex flex-1 flex-col overflow-x-hidden">
                      {/* Role Toggle */}
                      <div className="px-[32px] min-h-[44px]">
                        <ul className="flex list-none opacity-100 pt-[9px] gap-x-6 gap-4">
                          <li className="flex justify-center w-1/2">
                            <Link
                              href=""
                              className="flex justify-center items-center text-center mt-[2px]  text-[#003d6b] mb-[16px] px-[4px]"
                            >
                              <svg className="w-[16px] h-[16px] mx-[8px]">
                                <FaBookReader />
                              </svg>
                              <span
                                className="text-[18px]  font-[600] leading-[18px]"
                                style={{ fontFamily: "Proxima Vara" }}
                              >
                                Student
                              </span>
                            </Link>
                          </li>
                          <li className="flex justify-center w-1/2">
                            <Link
                              href=""
                              className="flex justify-center items-center text-center mt-[2px]  text-[#003d6b] mb-[16px] px-[4px]"
                            >
                              <svg className="w-[16px] h-[16px]  mx-[8px]">
                                <FaChalkboardTeacher />
                              </svg>
                              <span
                                className="text-[18px]  font-[600]  leading-[18px] "
                                style={{ fontFamily: "Proxima Vara" }}
                              >
                                Educator
                              </span>
                            </Link>
                          </li>
                        </ul>
                        {/* <button
                          className={`px-4 py-2 rounded-lg ${
                            role === "Student"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => setRole("Student")}
                        >
                          Student
                        </button>
                        <button
                          className={`px-4 py-2 rounded-lg ${
                            role === "Educator"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => setRole("Educator")}
                        >
                          Educator
                        </button> */}
                      </div>

                      <div className="items-center text-center mt-[2.5px] mb-[30px] px-[32px]">
                        <form
                          action=""
                          className="min-h-[165px] pt-4 relative w-full"
                        >
                          {/* Sign In with Username */}
                          <div className="pb-[16px] max-w-[700px] w-full">
                            <label
                              className="flex text-start text-[#575757] text-[1rem] leading-[1.65] font-bold"
                              style={{
                                fontFamily: "Proxima Nova, Arial, sans-serif",
                              }}
                            >
                              Sign In With Username
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Username"
                              className="flex justify-center item-center p-[5px] border border-[#7b869d] rounded-sm text-[1.125rem]  mb-2 max-w-[700px] w-full text-[#2b303b] "
                              style={{ fontFamily: "Proxima Vara" }}
                            />
                            <button
                              className="w-full mt-1 text-[1.125rem] inline-block pointer items-center bg-[#0077d1] py-[9px] rounded-[8px] text-white"
                              style={{ fontFamily: "Proxima Vara" }}
                            >
                              Continue
                            </button>
                          </div>
                        </form>

                        {/* Stay Signed In and Forgot Link */}
                        <div
                          className="flex flex-row justify-between items-center text-center w-full mt-[9px] mb-[24.5px]"
                          style={{ fontFamily: "Proxima Vara" }}
                        >
                          <div className="flex items-center ">
                            <input
                              type="checkbox"
                              checked={staySignedIn}
                              onChange={() => setStaySignedIn(!staySignedIn)}
                              className="h-6 w-6 align-bottom"
                            />
                            <label className="text-[#575757] text-[1rem] mx-[8px] leading-[24px]">
                              Stay signed in
                            </label>
                            <span>
                              <FaCircleInfo />
                            </span>
                          </div>
                          <Link
                            href="#"
                            className=" text-[#0077D1] leading-[26px] px-[8px]"
                          >
                            Forgot your username or password?
                          </Link>
                        </div>

                        <div className="border-y border-[#c1d1d7] ">
                          {/* Divider */}
                          <span
                            className="bg-white text-[#575757] text-[13px] inline-block px-2 -translate-y-3.5"
                            style={{ fontFamily: "Proxima Vara" }}
                          >
                            OR
                          </span>

                          {/* Sign In Buttons */}
                          <SignInOptions />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <h1 className="font-bold mb-2">
                        Not sure which method to use?
                      </h1>
                      <div className="flex items-center">
                        <input
                          type="text"
                          placeholder="Search for my school"
                          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
                          Search
                        </button>
                      </div>
                    </div>

                    {/* Footer Links */}
                    {/* <div className="flex justify-between mt-6 text-blue-500 text-sm">
                      <a href="#" className="hover:underline">
                        Create account with school password
                      </a>
                      <a href="#" className="hover:underline">
                        Request a Demo
                      </a>
                    </div> */}
                  </div>
                </section>
                <section className="flex absolute bottom-[40px] right-0 max-w-[30vw]">
                  <Image
                    src="/images/avatar-login.png"
                    alt="Avatar"
                    width={360}
                    height={36}
                    className="ml-[32px]"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
