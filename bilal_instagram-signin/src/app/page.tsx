import Link from "next/link";

const Signup: React.FC = () => {
  return (
    <div className="mt-[12px] mb-[78px] bg-black flex flex-col items-center justify-center text-white text-sm">
      <div className="border border-[#363636] w-full max-w-[350px] flex flex-col items-center px-[40px] py-[10px]">
        <div className="bg-[url(/logo.png)] bg-no-repeat h-[51px] w-[175px] mt-[36px] mb-[24px]"></div>
        <form className="w-full flex flex-col gap-[6px] mt-[12px]">
          <input type="text" placeholder="Phone number, username, or email" className="bg-[#121212] text-[12px] pt-[9px] pb-[7px] pl-[8px] pr-0 text-white placeholder:text-[#a8a8a8] outline-none border border-[#363636] rounded"/>
          <input type="password" placeholder="Password" className="bg-[#121212] text-[12px] pt-[9px] pb-[7px] pl-[8px] pr-0 text-white placeholder:text-[#a8a8a8] outline-none border border-[#363636] rounded"/>
          <button className="bg-[#0095f6] text-white rounded-lg text-sm font-semibold py-1.5 mt-2">Log in</button>
        </form>
        <div className="flex items-center w-full mt-[17px] mb-[20px]">
          <div className="flex-grow h-px bg-[#363636]" />
          <span className="px-[18px] pt-[3px] text-[#a8a8a8] text-[13px] font-semibold">OR</span>
          <div className="flex-grow h-px bg-[#363636]" />
        </div>
        <button className="text-[#3579ea] font-semibold text-[14px] flex items-center gap-2 mt-[7px] mb-3">
          <div className="ml-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.098 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.021 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.927-1.953 1.875v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073z" />
            </svg>
          </div>
          Log in with Facebook
        </button>
        <Link href="#" className="text-[#e0f1ff] font-semibold text-[14px] mt-[7px] mb-[11px]">Forgot password?</Link>
      </div>
      <div className="border border-[#363636] w-full max-w-[350px] text-center mt-[10px] py-[20.5px]">
        <p className="text-[#e0f1ff] text-sm">
          Don’t have an account?{" "}
          <Link href="#" className="text-[#0095f6] font-semibold">Sign up</Link>
        </p>
      </div>
      <div className="mt-[16px] text-[14px] text-center">
        Get the app.
        <div className="flex gap-2 mt-[15px]">
          <img src="/googleapp.png" alt="Get it on Google Play" className="h-[40px]"/>
          <img src="/microsoftapp.png" alt="Get it from Microsoft" className="h-[40px]"/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
