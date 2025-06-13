import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='roboto'>
        <footer className="text-center mt-14 text-xs text-gray-500">
        <div className="space-x-2">
          <Link href="#" className="hover:underline underline text-[#1162ee]">Privacy Policy</Link>
          <span>|</span>
          <Link href="#" className="hover:underline underline text-[#1162ee]">Terms of Use</Link>
          <span>|</span>
          <Link href="#" className="hover:underline underline text-[#1162ee]">Help Center</Link>
        </div>
        <p className="mt-2 text-[#333]">PowerSchool © 2025</p>
      </footer>
    </div>
  )
}

export default Footer