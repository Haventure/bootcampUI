import Image from 'next/image';
import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { TbExternalLink } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className='font-lato bg-[#0b2149] text-white w-full'>
      <footer className="w-full px-4 py-10 xl:flex xl:justify-between text-xs text-gray-500">
        {/* Left Block */}
        <div className="xl:w-[35%] flex flex-col items-start xl:items-center mb-10 xl:mb-0">
          <p className='text-[16px] xl:text-[20px] text-center xl:mt-20'>
            Our mission is to provide a free, world-class education to anyone, anywhere.
          </p>
          <p className='mt-8 text-[16px] xl:text-[20px] text-center'>
            Khan Academy is a 501(c)(3) nonprofit
          </p>
          <p className='mt-2 text-[16px] xl:text-[20px] text-center xl:flex xl:ml-20 gap-2'>
            organization
            <span className='flex hover:underline text-white'>Donate <TbExternalLink /></span>
            or
            <span className='flex hover:underline text-white'>Volunteer</span>
            today!
          </p>
          <div className='flex mt-10 xl:mt-[370px] gap-2 xl:ml-20'>
            <span>Language</span>
            <span className='text-white flex items-center gap-1'>English <IoMdArrowDropdown className='text-[15px]' /></span>
          </div>
        </div>

        {/* About */}
        <div className='mb-10 xl:mb-0 xl:mt-20 xl:w-[15%] '>
          <p className='text-white font-bold mb-2 ml-2 xl:ml-16'>About</p>
          {[
            "News", "Impact", "Our team", "Our interns", "Our content specialists",
            "Our leadership", "Our supporters", "Our contributors", "Our finances",
            "Careers", "Internships", "Cookie Preferences"
          ].map((item, i) => (
            <p key={i} className="text-white ml-2 xl:ml-16 mb-1 flex items-center gap-1">
              {item} {item === "Impact" && <TbExternalLink />}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div className='mb-10 xl:mb-0 xl:mt-20 xl:w-[15%]'>
          <p className='font-bold mb-2 ml-2 xl:ml-16'>Contact</p>
          {["Help", "Support community", "Share your story", "Press"].map((item, i) => (
            <p key={i} className="text-white ml-2 xl:ml-16 mb-1">{item}</p>
          ))}
          <div className='mt-6'>
            <p className="font-bold mb-2 ml-2 xl:ml-16">Download our apps</p>
            <div className='ml-2 xl:ml-16 space-y-2'>
              <Image src="/images/appStore.jpg" alt="App Store" width={110} height={10} className="rounded-md border border-white" />
              <Image src="/images/googlePlay.jpg" alt="Google Play" width={110} height={10} className="rounded-md border border-white" />
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className='xl:w-[35%] xl:mt-20'>
          <p className='font-bold mb-2 ml-2 xl:ml-16 text-gray-500'>Courses</p>
          {[
            "Math: Pakistan grades", "Science:Pakistan grades", "U.S. Math: Pre-K - 8th grade",
            "Math: Get ready courses", "Math: high school & college", "Test prep", "Economics",
            "Science", "Computing", "Reading & Language arts", "Life skills", "Social studies",
            "Partner courses", "Khan for educators"
          ].map((item, i) => (
            <p key={i} className="text-white ml-2 xl:ml-16 mb-1">{item}</p>
          ))}
        </div>
      </footer>

      {/* Country Section */}
      <div className="flex flex-wrap items-center gap-3 mt-8 px-4 xl:ml-20 text-sm text-gray-500">
        <span>Country</span>
        {[
          { src: '/images/us.jpg', name: 'U.S.' },
          { src: '/images/ind.jpg', name: 'India' },
          { src: '/images/mex.jpg', name: 'Mexico' },
          { src: '/images/bra.jpg', name: 'Brazil' }
        ].map((country, i) => (
          <span key={i} className="flex items-center gap-2 text-white">
            <Image src={country.src} alt={country.name} width={15} height={10} />
            <p>{country.name}</p>
          </span>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className='flex flex-wrap justify-between items-center mt-8 px-4 xl:px-20 text-sm text-gray-500'>
        <div className='flex flex-wrap gap-4'>
          <span>© 2025 Khan Academy</span>
          <span>Terms of use</span>
          <span>Privacy Policy</span>
          <span>Cookie Notice</span>
          <span>Accessibility Statement</span>
        </div>
        <div className="mt-4 xl:mt-0">
          <Image src={'/images/social.jpg'} alt='socialIcons' width={120} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
