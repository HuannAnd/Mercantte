import { ReactNode } from "react";

import { Inter } from "next/font/google";

import './globals.css';


const inter = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-radial `}>
        <div className="overflow-x-hidden w-screen relative flex justify-center">
          {children}
        </div>
        <footer></footer>
      </body>
    </html>
  )
}