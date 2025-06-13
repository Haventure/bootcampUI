import Link from "next/link";

export default function Home() {
  const fontFamily = {
    fontFamily: '"Roboto", Tahoma, Helvetica, Arial, sans-serif',
  };

  return (
    <div className="flex relative flex-col text-center items-center mt-25">
      <img
        src="https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg"
        alt="UPS Logo"
        className="w-11"
      />
      <h1 className="mt-7.5 text-2xl" style={fontFamily}>
        Welcome
      </h1>
      {/* <input
        type="text"
        placeholder="Email or Username*"
        className="mt-8 px-4 py-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 w-85"
      /> */}
      <div className="relative mt-10 w-[330px]">
        <input
          type="text"
          id="username"
          placeholder=""
          className="peer h-[52px] w-full border border-gray-400 rounded-sm px-4 pt-4 pb-1 text-[16px] text-[#2d333a] 
                     bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all duration-200 ease-in-out"
        />
        <label
          htmlFor="username"
          className="absolute left-3 top-2.5 text-gray-500 text-[16px] bg-white px-1 transition-all duration-200 
                     ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[16px] 
                     peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Email or Username*
        </label>
      </div>
      <p
        className="mt-2 text-sm text-blue-700 underline cursor-pointer"
        style={fontFamily}
      >
        <Link href={"/"}>Forgot Username/</Link>
        <Link href={"/"}>Password?</Link>
      </p>
      <p className="text-sm mt-3" style={fontFamily}>
        By continuing, I agree to the{" "}
        <Link
          href={"/"}
          className="text-sm text-blue-700 underline cursor-pointer"
          style={fontFamily}
        >
          UPS Technology{" "}
        </Link>
      </p>
      <p>
        <Link
          href={"/"}
          className="text-sm text-blue-700 underline cursor-pointer"
          style={fontFamily}
        >
          Agreement
        </Link>
      </p>

      <button
        className="bg-yellow-400 mt-6 text-black font-bold rounded-full py-3.5 px-33 hover:bg-yellow-300 transition max-w-md mx-auto block"
        style={fontFamily}
      >
        Continue
      </button>

      <p className="mt-4 text-sm" style={fontFamily}>
        Don't have a profile?{" "}
        <Link
          href={"/"}
          className="cursor-pointer underline text-blue-600"
          style={fontFamily}
        >
          Sign Up
        </Link>
      </p>

      <p
        className="text-sm"
        style={{ paddingTop: "5%", fontFamily: '"Roboto", Tahoma, sans-serif' }}
      >
        OR CONTINUE BY USING ONE OF THESE SITES
      </p>

      <div className="flex mt-5 gap-[10px] justify-center">
        {/* Google */}
        <button
          className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12   h-12 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
        </button>

        {/* Apple */}
        <button
          className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12 hover:bg-gray-100 transition"
        >
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg width='170' xmlns='http://www.w3.org/2000/svg' height='170'%3E%3Cpath d='M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z'/%3E%3C/svg%3E"
            alt="Apple"
            className="w-5 h-5"
          />
        </button>

        {/* Facebook */}
        <button
          className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12 hover:bg-gray-100 transition"
        >
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' class='_96z7' aria-labelledby='fb-app-logo'%3E%3Cpath d='M30 15.091C30 6.756 23.285 0 15 0S0 6.756 0 15.091C0 22.625 5.484 28.868 12.656 30V19.454H8.848V15.09h3.808v-3.324c0-3.782 2.239-5.872 5.666-5.872 1.64 0 3.358.295 3.358.295v3.714h-1.893c-1.863 0-2.443 1.164-2.443 2.358v2.83h4.16l-.665 4.362h-3.495V30C24.516 28.868 30 22.625 30 15.091z' fill='%23000'/%3E%3C/svg%3E"
            alt="Facebook"
            className="w-5 h-5"
          />
        </button>

        {/* Twitter */}
        <button
          className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475689/twitter-color.svg"
            alt="Twitter"
            className="w-5 h-5"
          />
        </button>

        {/* Amazon */}
        <button
          className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12 hover:bg-gray-100 transition"
        >
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg width='400' height='334' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M236.578 94.824c-9.683.765-20.854 1.502-32.021 3.006-17.12 2.211-34.24 5.219-48.386 11.907-27.544 11.208-46.163 35.053-46.163 70.114 0 44.018 28.298 66.354 64.026 66.354 11.93 0 21.606-1.466 30.522-3.71 14.156-4.481 26.07-12.67 40.209-27.596 8.192 11.205 10.413 16.428 24.575 28.338 3.725 1.502 7.448 1.502 10.413-.742 8.932-7.458 24.561-20.873 32.773-28.33 3.71-3.012 2.955-7.463.739-11.204-8.198-10.435-16.381-19.401-16.381-39.506V96.324c0-28.359 2.214-54.453-18.614-73.822C261.147 6.815 234.34.86 213.5.86h-8.947c-37.965 2.247-78.169 18.635-87.122 65.629-1.462 5.955 3.012 8.198 5.989 8.962l41.677 5.224c4.471-.773 6.691-4.491 7.432-8.233 3.74-16.388 17.136-24.583 32.024-26.087h2.998c8.905 0 18.586 3.743 23.813 11.168 5.932 8.965 5.21 20.904 5.21 31.339v5.961h.004v.001zm0 43.278c0 17.162.723 30.571-8.195 45.461-5.208 10.437-14.141 17.154-23.827 19.4-1.481 0-3.698.766-5.947.766-16.371 0-26.077-12.673-26.077-31.334 0-23.856 14.159-35.056 32.023-40.277 9.687-2.241 20.86-2.982 32.021-2.982v8.966h.002z'/%3E%3Cpath d='M373.71 315.303c18.201-15.398 25.89-43.349 26.29-57.939v-2.44c0-3.255-.803-5.661-1.6-6.88-3.646-4.445-30.369-8.523-53.402-1.627-6.468 2.045-12.146 4.865-17.396 8.507-4.051 2.854-3.238 6.464.802 6.08 4.447-.823 10.126-1.208 16.594-2.048 14.159-1.18 30.742-1.592 34.784 3.662 5.642 6.87-6.468 36.868-11.749 49.838-1.593 4.065 2.03 5.696 5.677 2.847z' fill='%23FE9900'/%3E%3Cpath d='M2.008 257.364c52.17 47.404 120.925 75.775 197.791 75.775 47.725 0 102.727-13.381 145.199-38.899 5.676-3.27 11.316-6.912 16.565-10.952 7.286-5.25.817-13.38-6.463-10.147-3.229 1.215-6.873 2.857-10.103 4.066-46.539 18.248-95.441 26.76-140.762 26.76-72.008 0-141.56-19.87-197.786-52.684-5.259-2.822-8.907 2.428-4.441 6.081z' fill='%23FE9900'/%3E%3C/svg%3E"
            alt="Amazon"
            className="w-5 h-5"
          />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 mb-15 text-sm text-blue-700">
        <a
          href="/privacy-policy"
          className="underline hover:text-blue-900"
          style={fontFamily}
        >
          Privacy Policy
        </a>

        <span className="inline-block h-4 border-l border-gray-400"></span>

        <a
          href="/terms-of-service"
          className="underline hover:text-blue-900"
          style={fontFamily}
        >
          Terms of Service
        </a>
      </div>
    </div>
  );
}


// import Link from "next/link";

// export default function Home() {
//   const fontFamily = {
//     fontFamily: '"Roboto", Tahoma, Helvetica, Arial, sans-serif',
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="flex flex-col text-center items-center w-full max-w-md py-10 bg-white shadow-lg rounded-xl">
//         <img
//           src="https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg"
//           alt="UPS Logo"
//           className="w-11"
//         />
//         <h1 className="mt-6 text-2xl" style={fontFamily}>
//           Welcome
//         </h1>

//         <div className="relative mt-10 w-[330px]">
//           <input
//             type="text"
//             id="username"
//             placeholder=" "
//             className="peer h-[52px] w-full border border-gray-400 rounded-sm px-4 pt-4 pb-1 text-[16px] text-[#2d333a] 
//                        bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
//                        transition-all duration-200 ease-in-out"
//           />
//           <label
//             htmlFor="username"
//             className="absolute left-3 top-2.5 text-gray-500 text-[16px] bg-white px-1 transition-all duration-200 
//                        ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[16px] 
//                        peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
//           >
//             Email or Username*
//           </label>
//         </div>

//         <p className="mt-2 text-sm text-blue-700 underline cursor-pointer" style={fontFamily}>
//           <Link href="/">Forgot Username/</Link>
//           <Link href="/">Password?</Link>
//         </p>

//         <p className="text-sm mt-3 px-4" style={fontFamily}>
//           By continuing, I agree to the{" "}
//           <Link href="/" className="text-blue-700 underline cursor-pointer" style={fontFamily}>
//             UPS Technology
//           </Link>{" "}
//           <Link href="/" className="text-blue-700 underline cursor-pointer" style={fontFamily}>
//             Agreement
//           </Link>
//         </p>

//         <button
//           className="bg-yellow-400 mt-6 text-black font-bold rounded-full py-3.5 px-20 hover:bg-yellow-300 transition"
//           style={fontFamily}
//         >
//           Continue
//         </button>

//         <p className="mt-4 text-sm" style={fontFamily}>
//           Don't have a profile?{" "}
//           <Link href="/" className="cursor-pointer underline text-blue-600" style={fontFamily}>
//             Sign Up
//           </Link>
//         </p>

//         <p className="text-sm mt-6" style={{ fontFamily: '"Roboto", Tahoma, sans-serif' }}>
//           OR CONTINUE BY USING ONE OF THESE SITES
//         </p>

//         <div className="flex mt-5 gap-[10px] justify-center">
//           {/* Social buttons */}
//           {[
//             {
//               src: "https://www.svgrepo.com/show/475656/google-color.svg",
//               alt: "Google",
//             },
//             {
//               src: "data:image/svg+xml;charset=utf-8,%3Csvg width='170' xmlns='http://www.w3.org/2000/svg' height='170'%3E%3Cpath d='M150.37 130.25c...z'/%3E%3C/svg%3E",
//               alt: "Apple",
//             },
//             {
//               src: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none'%3E%3Cpath d='M30 15.091C...z'/%3E%3C/svg%3E",
//               alt: "Facebook",
//             },
//             {
//               src: "https://www.svgrepo.com/show/475689/twitter-color.svg",
//               alt: "Twitter",
//             },
//             {
//               src: "data:image/svg+xml;charset=utf-8,%3Csvg width='400' height='334' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M236.578 94.824c...z'/%3E%3C/svg%3E",
//               alt: "Amazon",
//             },
//           ].map((btn, idx) => (
//             <button
//               key={idx}
//               className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full w-12 h-12 hover:bg-gray-100 transition"
//             >
//               <img src={btn.src} alt={btn.alt} className="w-5 h-5" />
//             </button>
//           ))}
//         </div>

//         <div className="flex items-center justify-center gap-4 mt-8 text-sm text-blue-700">
//           <a href="/privacy-policy" className="underline hover:text-blue-900" style={fontFamily}>
//             Privacy Policy
//           </a>
//           <span className="inline-block h-4 border-l border-gray-400"></span>
//           <a href="/terms-of-service" className="underline hover:text-blue-900" style={fontFamily}>
//             Terms of Service
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
