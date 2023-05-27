"use client";

import { FONTS_STYLED } from "@/constants/fonts";


type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

export default function Footer({
  children,
  ...props
}: FooterProps) {
  const navigation = [
    "Home",
    "Our Plants",
    "Contact"
  ]

  const contacts = [
    { isLink: false, label: "huannvicente14@outlook.com" },
    { isLink: true, label: "https://github.com/HuannAnd" }
  ]

  return (
    <footer {...props}>
      <div className="w-[1280px] pt-20 mx-auto h-full text-dark grid grid-cols-3 grid-rows-5 gap-x-2 ">
        <article className="row-span-4 col-span-1">
          <h2
            className="text-dark"
            style={FONTS_STYLED.h2}
          >Navigation</h2>
          <ul>
            {navigation.map((link, index) => (
              <li key={index} className="text-dark-white hover:brightness-75 text-[20px] cursor-pointer">{link}</li>
            ))}
          </ul>
        </article>
        <article className="row-span-4 col-span-1">
          <h2
            className="text-dark"
            style={FONTS_STYLED.h2}
          >Contact</h2>
          <ul>
            {contacts.map((link, index) => (
              <li
                key={index}
                className="text-dark-white hover:brightness-75 text-[20px] cursor-pointer"
                style={link.isLink ? { textDecoration: "underline" } : {}}
              >{link.label}</li>
            ))}
          </ul>
        </article>
        <div className="clip-around shadow-[0_0_0_100vmax_#5D7867] row-span-1 col-span-3 bg-primary flex flex-cols items-center justify-center h-32">
          <h2
            className="text-white"
            style={FONTS_STYLED.bold}
          ></h2>
          <p
            className="text-white"
            style={FONTS_STYLED.body}
          >© 2023 HuannAnd. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}