import './globals.css';

import { Inter, Roboto } from "next/font/google";
import dynamic from 'next/dynamic';
import Navbar from '@/layouts/Navbar';

const roboto = Roboto({
  weight: ["400"],
  variable: "--font-roboto",
  subsets: ["latin"]
})

const inter = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin"]
});

const Footer = dynamic(
  () => import("@/layouts/Footer"),
  { ssr: false }
)

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <title>Mercantte</title>
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-inter bg-radial bg-white`}>
        <div className="overflow-x-hidden w-screen relative">
          <Navbar isHommed className="border-b-2 bg-[#eee] left-1/2 -translate-x-1/2 top-0 mx-auto mix-blend-darken z-[999] fixed w-full max-w-[1280px] border-b-white" />
          <div className="flex flex-col max-w-[1280px] mx-auto font-inter">
            {children}
          </div>
        </div>
        <Footer className='w-screen mt-10 pt-10 bg-white' />
      </body>
    </html>
  )
}