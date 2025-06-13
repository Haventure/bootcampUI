import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  fallback: ["sans-serif"]
});


export const metadata: Metadata = {
  title: "Login to access your Quizzes and collaborate with your peers",
  description: "Login to your account to access your saved quizzes, worksheets and collaborate with your teachers and classmates.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (<>
    <main className={`${openSans.className} antialiased relative h-dvh bg-[#461A42] overflow-hidden`}>
      <Navbar />

      <div className="absolute top-20 w-full h-[calc(100%-5rem)] overflow-y-auto">
        {children}
      </div>

    </main>
  </>);
}
