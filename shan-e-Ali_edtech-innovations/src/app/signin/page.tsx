// app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1f4f9] flex flex-col items-center justify-center px-4">
      <div className="bg-white w-full max-w-[880px] h-[380px] rounded-3xl p-9 flex  justify-between">
        
        <div>
        {/* Google logo */}
        <div className="mb-6">
          <Image src="/google.png" alt="Google" width={40} height={40} className="w-12" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-normal text-gray-900 mb-6">Choose an account</h1>

        </div>
        
        <div className="flex flex-col justify-center items-left w-full max-w-[400px] pl-4 pb-12 ">
        {/* Account box */}
        <div className="border-b-1 border-gray-300 pb-4 px-2 flex items-center gap-4 hover:bg-gray-100 hover:rounded-2xl cursor-pointer">
          <Image
            src="/shanicon.png"
            alt="Shan Ali"
            width={40}
            height={40}
            className="rounded-full w-7"
          />
          <div>
            <p className="text-md font-semibold text-gray-900">Shan Ali</p>
            <p className="text-sm text-gray-600">mrshanali00786@gmail.com</p>
          </div>
        </div>

        {/* Use another account */}
        <div className="border-b-1 border-gray-300 px-2  pb-4 py-4 flex items-center gap-4 hover:bg-gray-100 hover:rounded-2xl cursor-pointer">
          <Image
            src="/usericon.png"
            alt="Shan Ali" 
            width={40}
            height={40}
            className="rounded-full w-4 h-4"
          />
          <p className="text-sm text-gray-900">Use another account</p>
        </div>

        </div>
        

      </div>

      {/* Footer */}
      <div className="flex justify-between w-full max-w-[880px] mt-8 text-[11px] px-4 ">
        <div>
          <select className="bg-transparent outline-none">
            <option>English (United States)</option>
          </select>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
}
