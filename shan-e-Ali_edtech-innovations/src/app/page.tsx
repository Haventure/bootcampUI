import Image from "next/image";
import Link from "next/link";

// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[url('/bg-edtech.png')] bg-cover  text-white flex flex-col">
      {/* Top Navbar */}
      <header className="flex justify-between px-4 pt-4">
        <div className="flex gap-2">
          <Image src="/blogger-logo.png" alt="Blogger" className="h-8" width={32} height={40} />
          <span className="text-xl font-sans pt-0.5  text-center">Blogger</span>
        </div>
         {/* Main Content */}
      <section className="flex-1 flex flex-col justify-center items-center text-center -ml-12 pt-4 ">
        <h1 className="text-4xl sm:text-[42px] font-sans-serif-roboto  mb-4">
          Publish your passions, your way
        </h1>
        <p className="text-lg sm:text-xl -ml-3 mb-8">
          Create a unique and beautiful blog easily.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-bold mt-2.5 -ml-3.5 py-4 px-4 rounded-sm shadow">
          CREATE YOUR BLOG
        </button>
      </section>

        <Link href="/signin" className=" hover:text-white/50 pt-2 pr-6 text-sm font-semibold ">
          SIGN IN
        </Link>
      </header>

     
    </main>
  );
}
