import Link from 'next/link';

export default function Login() {
  return (
    <>
      <div className="w-[500px] mx-auto flex flex-col items-center justify-center">
        <div className="w-full mt-[53px] mb-[40px]">
          <img src="/Logo.svg" alt="Castle Learning Logo" />
        </div>
        <div className="flex flex-col items-center justify-center px-2">
          <div className="w-full max-w-[354px] text-[#333] bg-white border border-[#eee] shadow-[0_2px_3px] shadow-[#ccc] rounded mx-[65px] pt-8 pb-3.5 px-4">
            <input
              type="text"
              placeholder="ID/Email"
              className="w-full text-[16px] focus:shadow-[0_0_12px_#3388cc] focus:outline-none border shadow-[inset_0_2px_3px_0_#dadce0] placeholder:text-gray-500 border-[#dadce0] pt-[5px] pb-[6px] px-[6.5px] rounded my-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-[16px] focus:shadow-[0_0_12px_#3388cc] focus:outline-none border shadow-[inset_0_2px_3px_0_#dadce0] placeholder:text-gray-500 border-[#dadce0] pt-[6px] pb-[5px] px-[6.5px] rounded mb-2"
            />
            <button className="w-full bg-[#f6f6f6] border border-[#dadce0] active:shadow-[0_0_12px_#3388cc] py-2 font-semibold hover:bg-[#ededed] text-[12.5px]">
              Sign In
            </button>
            <div className="w-full text-left mt-[4px]">
              <Link href="#" className="text-[12.8px] text-[#555] font-normal underline hover:text-[#921b1f]">
                Forgot Your Castle Password?
              </Link>
            </div>
          </div>

          {/* Red error text */}
          <p className="text-[#FF0000] text-[14.4px]/[19px] ml-[2px] mt-4 text-left w-full max-w-[370px]">
            If an error message is displayed after you click Sign In,<br />
            please refresh your screen or clear your browser cookies.
          </p>

          {/* Google & NYC Buttons */}
          <div className="flex items-center justify-center gap-[5px] mt-1.5">
            <button className="flex items-center w-[184px] border border-[#dadce0] px-[9px] h-[40px] rounded bg-white cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#4285f414] hover:border-[#d2e3fc]">
              <svg className="block h-[22px] w-[23px] mr-[5px]" width="20" height="24" viewBox="0 0 40 48">
                <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
                <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
                <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
                <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
              </svg>
              <span className="text-[14px] font-sans font-semibold tracking-wider text-[#3c4043]">Sign in with Google</span>
            </button>
            <button className="border border-[#dadce0] p-[5px] rounded bg-white cursor-pointer">
              <img src="/NYC-Logo.svg" alt="NYC Logo" width="165" height="30" />
            </button>
          </div>

          {/* Note Paragraph aligned left */}
          <p className="text-xs text-[#333] font-bold text-left max-w-[360px] mt-[22px] mb-[55px]">
            * NOTE: For security reasons you should close the browser after logging out. When using the above login buttons the browser may remain logged into the selected service. This will allow the next user to gain access to your Castle account. If you use the Google Sign-In please read this{" "}
            <Link href="#" className="text-[#3388cc] hover:text-white underline">page</Link> for details on how to configure your browser to prevent saving of your Google account login.
          </p>
        </div>
      </div>
      <footer>
        <div className='bg-[#921b1f] px-2 py-4 flex justify-between items-center fixed bottom-0 border-t border-[#671316] w-full text-[#eee] text-[12.4px]'>
          <div>
            <Link href="#" className='hover:underline'>© Castle Software, Inc. 2001-2025</Link>
          </div>
          <div className='mr-[8px]'>
            <Link href="#" className='hover:underline'>Support - 155</Link>
          </div>
          <div className='text-[13px]'>
            <Link href="#" className='hover:underline'>Privacy Policy</Link>, <Link href="#" className='hover:underline'>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}


// #d2e3fc hover google
// #dadce0 border color