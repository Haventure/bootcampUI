import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fontEmber } from "@/fonts";
import { fontEmberLight } from "@/fonts";
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amazon.com",
  description: "Created by imran82ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${fontEmber.variable} ${fontEmberLight.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>  
        {children}
        <Bottom/>
      </body>
    </html>
  );
}
