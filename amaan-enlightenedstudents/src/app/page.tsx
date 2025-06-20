import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-4">
        <h1
          className="text-center text-[45px] mt-20"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 900,
            fontStyle: "normal",
            color: "#9a5ba4",
          }}
        >
          Let's Get Started!
        </h1>
        <hr className="mt-6 mx-auto w-220 border-t-2" />

        <h3
          className="text-[30px] mt-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontStyle: "normal",
            color: "#e47550",
          }}
        >
          If you're interested in learning more about how to lead an Enlightened
          Event, fill this out and
          <br />
          <div className="text-[30px] text-center">
            we'll start a conversation!
          </div>
        </h3>

        <div
          className="flex flex-col gap-1 w-[1200px] mx-auto mt-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {/* First Name */}
          <label className="text-black font-bold text-[20px] " htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="px-4 py-3 bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#89848a]"
          />

          {/* Last Name */}
          <label className="text-black font-bold text-lg" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="px-4 py-3 bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#89848a]"
          />

          {/* Instagram Username */}
          <label className="text-black font-bold text-lg" htmlFor="instagram">
            Instagram Username
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            className="px-4 py-3  bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#89848a]"
          />

          {/* Email */}
          <label className="text-black font-bold text-lg" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-4 py-3  bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#89848a]"
          />
          <p>
            (Please double check that your email is correct)
          </p>

          {/* School Name */}
          <label className="text-black font-bold text-lg" htmlFor="school">
            School Name
          </label>
          <input
            type="text"
            id="school"
            name="school"
            className="px-4 py-3 bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#89848a]"
          />

          {/* Grade */}
          <label className="text-black font-bold text-lg" htmlFor="grade">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            className="px-4 py-3 bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#89848a]"
          />
             <div className="mt-6">
              <button
                className=" w-[1200px] text-white bg-[#771286] hover:bg-blue-800 border-[3px] cursor-pointer px-6 py-3 transition duration-300"
              >
                SIGN UP!
              </button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}




// <div className="flex flex-col mb-4 w-[1100px]">
//           <label htmlFor="name">First Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a5ba4]"
//           />
//           {/* second input */}
//           <label htmlFor="name">Last Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a5ba4]"
//           />
//           {/* second input */}
//           <label htmlFor="name">Instagram Username </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a5ba4]"
//           />

//           {/* second input */}
//           <label htmlFor="name">Email Address</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a5ba4]"
//           />
//           {/* second input */}
//           <label htmlFor="name">School Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a5ba4]"
//           />
//           {/* second input */}
//           <label htmlFor="name">Grade</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9a5ba4]"
//           />
//         </div>
