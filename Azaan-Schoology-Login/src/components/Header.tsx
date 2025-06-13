import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white flex justify-center items-center shadow-md h-[60px]">
      <div className="max-w-screen-xl mx-auto p-4">
        <Link href="#" className="flex justify-center items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="SchoologyLogo"
            className="h-8"
            width={175}
            height={100}
          />
        </Link>
      </div>
    </header>
  );
}
