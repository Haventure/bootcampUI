import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

const SignUp: React.FC = () => {
  return (
    <div className="mx-auto bg-white">
      <div className="mx-auto px-2 w-full md:w-[40%] min-[900px]:w-[35%] xl:w-[25%] sm:px-1 pb-12">
        <div className="flex flex-col mt-4 text-[1.5rem] text-center items-center">
          <Link href="/">
            <Image
              src="/images/walmartLogo.svg"
              alt="Walmart Logo"
              width={32}
              height={32}
              loading="lazy"
            />
          </Link>
          <h1 className="text-[1.09rem] font-black w-full mt-4">
            Create your Walmart account
          </h1>
        </div>

        <div className="mt-[.15rem] mb-1">
          <span className="text-[.720rem] font-extrabold">Email</span>
          <div className="flex items-center text-[.850rem]">
            <span className="text-[#2e2f32]">zarghamstudy@gmail.com</span>
            <Link
              href="/"
              className="text-[.775rem] h-8 px-4 flex items-center underline"
            >
              Change
            </Link>
          </div>
        </div>

        <div>
          <label htmlFor="firstName" className="text-[.725rem] font-extrabold">
            First name
          </label>
          <div className="relative w-full mb-3">
            <div className="items-center">
              <input
                type="text"
                className="w-full p-4 border rounded-sm border-gray-500 text-gray-700 text-[1rem] focus:ring-black"
              />
            </div>
          </div>

          <label htmlFor="lastName" className="text-[.725rem] font-extrabold">
            Last name
          </label>
          <div className="relative w-full mb-3">
            <div className="items-center">
              <input
                type="text"
                className="w-full p-4 border rounded-sm border-gray-500 text-gray-700 text-[1rem] focus:ring-black"
              />
            </div>
          </div>

          <label
            htmlFor="phoneNumber"
            className="text-[.725rem] font-extrabold"
          >
            Phone number
          </label>
          <div className="relative w-full mb-3">
            <div className="items-center">
              <input
                type="text"
                className="w-full p-4 border rounded-sm border-gray-500 text-gray-700 text-[1rem] focus:ring-black"
              />
            </div>
          </div>

          <label htmlFor="password" className="text-[.725rem] font-extrabold">
            Create a password
          </label>
          <div className="relative w-full mb-3">
            <div className="items-center">
              <input
                type="password"
                className="w-full p-4 border rounded-sm border-gray-500 text-gray-700 text-[1rem] focus:ring-black"
              />
            </div>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 underline text-[.67rem]"
            >
              Show
            </button>
          </div>

          <div className="mb-4 w-full">
            <div className="w-full">
              <label className=" text-[.75rem] font-black cursor-pointer ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 mr-2 border-gray-500"
                />
                Send me emails about new arrivals, hot items, daily savings and
                more.
              </label>
            </div>
          </div>

          <p className="text-[0.65rem] mb-4">
            By clicking Continue, you acknowledge you have read and agreed to
            our{" "}
            <a href="#" className="underline">
              Terms Of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            . Message and data rates may apply. View our{" "}
            <a href="#" className="underline">
              Mobile Alerts Terms
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-5 rounded-full text-base font-extrabold hover:bg-blue-800 focus:ring-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
