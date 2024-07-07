import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { Navbar } from "@/app/_components/navigation/Navbar";
import Image from "next/image";
import bgImg from '@/public/images/europe-dotted.png'

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Blog europa.jobs",
  description: "Blog of the europa.jobs job board",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <Image
          src={bgImg}
          alt={'dotted shape of Europe'}
          aria-hidden={true}
          className='w-1/3 opacity-[.15] fixed right-0 top-24 -z-10'
        />
        {children}
      </body>
    </html>
  );
}
