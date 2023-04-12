import { ReactNode } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin"]
})


export default function RootLayout({
  children
}: {
  children: ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}