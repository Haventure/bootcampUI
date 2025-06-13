import Image from "next/image";
import Link from "next/link";

const signInOptions = [
  {
    label: "Sign In With Google",
    icon: "/images/logo/google.png",
    href: "#",
    height: 22,
    width: 22,
  },
  {
    label: "Sign In With Clever",
    icon: "/images/logo/clever.png",
    href: "#",
    height: 22,
    width: 22,
  },
  {
    label: "Sign In With ClassLink",
    icon: "/images/logo/classlink.png",
    href: "#",
    height: 22,
    width: 22,
  },
  {
    label: "Use QR Code",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Qr-2.png",
    href: "#",
    height: 22,
    width: 22,
  },
  {
    label: "Sign In With Microsoft",
    icon: "/images/logo/microsoft.png",
    href: "#",
    height: 22,
    width: 22,
  },
];

export default function SignInOptions() {
  return (
    <ul
      className="flex flex-wrap justify-between gap-2 mb-[15px]"
      style={{ fontFamily: "Proxima Vara" }}
    >
      {signInOptions.map(({ label, icon, href, height, width }) => (
        <li key={label} className="flex basis-[48%]">
          <Link
            href={href}
            className="text-[#0069b8] mb-2 h-10 rounded-lg min-w-[240px] w-full border border-[#0069b8] flex items-center justify-center hover:bg-[#003d6b] transition"
          >
            <span className="flex items-center justify-center text-center mx-[8px]">
              <Image src={icon} alt={label} width={width} height={height} />
            </span>
            <span className=" ml-[.5px] mr-[1px] flex items-center text-center justify-center font-[600] text-[18px] leading-[18px]">
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
