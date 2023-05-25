import './globals.css';

import { ReactNode } from "react";

import { Inter, Roboto } from "next/font/google";

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

export default function RootLayout({
  children
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <title>Mercantte</title>
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-inter bg-radial relative`}>
        <div className="overflow-x-hidden w-screen relative flex justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}