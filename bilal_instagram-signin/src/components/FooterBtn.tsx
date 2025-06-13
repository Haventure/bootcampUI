// "use client"

import Link from "next/link"
import LanguageSelector from "./LanguageSelector";

const links: { name: string; path: string }[] = [
  {
    name: "Meta",
    path: "#"
  },
  {
    name: "About",
    path: "#"
  },
  {
    name: "Blog",
    path: "#"
  },
  {
    name: "Jobs",
    path: "#"
  },
  {
    name: "Help",
    path: "#"
  },
  {
    name: "API",
    path: "#"
  },
  {
    name: "Privacy",
    path: "#"
  },
  {
    name: "Terms",
    path: "#"
  },
  {
    name: "Locations",
    path: "#"
  },
  {
    name: "Instagram Lite",
    path: "#"
  },
  {
    name: "Threads",
    path: "#"
  },
  {
    name: "Contact Uploading & Non-Users",
    path: "#"
  },
  {
    name: "Meta Verified",
    path: "#"
  },
]

const FooterBtn: React.FC = () => {
  return (
    <div className="mb-[52px]">
      <nav className="text-[#a8a8a8] flex gap-4 text-[12px] justify-center">
        {links.map((link, index) => {
            return (
                <Link
                    href={link.path}
                    key={index}
                    className=""
                >
                    {link.name}
                </Link>
            );
        })}
    </nav>
      <LanguageSelector />
    </div>
  )
}

export default FooterBtn