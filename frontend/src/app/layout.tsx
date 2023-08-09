import './globals.css';

import { Inter, Roboto } from "next/font/google";
import dynamic from 'next/dynamic';

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
      <body className={`${inter.variable} ${roboto.variable} font-inter bg-radial`}>
        <div className="overflow-x-hidden w-screen relative flex justify-center">
          {children}
        </div>
        <Footer className='w-screen mt-10 pt-10 bg-white' />
      </body>
    </html>
  )
}