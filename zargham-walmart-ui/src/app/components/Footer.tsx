import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col relative flex-auto border-t mt-16 py-6 text-sm text-gray-600">
      <div className="container flex flex-wrap justify-between gap-x-4 gap-y-2 px-4 text-center">
        <div>
          <span className="block w-full md:w-auto text-center md:text-left">
            © 2025 Walmart. All Rights Reserved.
          </span>
        </div>

        <div className="flex text-center justify-center items-center text-xs gap-3">
          <Link href="#" className="hover:underline">
            Give feedback
          </Link>
          <Link href="#" className="hover:underline">
            CA Privacy Rights
          </Link>

          <Link href="#" className="hover:underline flex items-center gap-1">
            <Image
              src="/images/privacy-icon.svg"
              alt=""
              width={16}
              height={16}
            />
            Your Privacy Choices
          </Link>

          <Link href="#" className="hover:underline">
            Notice at Collection
          </Link>
          <Link href="#" className="hover:underline">
            Request My Personal Information
          </Link>
          <Link href="#" className="hover:underline">
            Delete Account
          </Link>
          <Link href="#" className="hover:underline">
            California Supply Chains Act
          </Link>
        </div>
      </div>
    </footer>
  );
}
