"use client";

import Image from "next/image";

import { FONTS_STYLED } from "@/constants/fonts";

import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'


type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

type FooterLinkProps = {
  title: string,
  links: string[]
}

function FooterLink({
  title,
  links
}: FooterLinkProps) {
  return (
    <div className="flex flex-col pr-20">
      <h3
        className="text-dark mb-4"
        style={FONTS_STYLED.bold}
      >
        {title}
      </h3>
      {links.map((link, index) => <p key={index} className="text-dark-white relative text-[12px] mb-4 cursor-pointer before:h-[2px] before:-translate-x-full before:duration-300 hover:before:translate-x-0 overflow-hidden before:absolute before:bg-[#888] before:bottom-0 before:left-0 before:content-[''] before:w-full">{link}</p>)}
    </div>
  )
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
      <div className="w-[1280px] mx-auto text-dark ">
        <div className="flex flex-row w-[1280px] mb-16 h-auto justify-between">
          <article className="w-auto h-auto mb-10">
            <div className="flex flex-row justify-between gap-2 mb-4">
              <Image
                src="/mercantte-logo.jpg"
                alt="logo"
                width={24}
                height={24}
                priority
              />
              <h1
                className="text-dark"
                style={FONTS_STYLED.bold}
              >Mercantte</h1>
            </div>
            <div className="grid grid-cols-3">
              <InstagramLogoIcon className="border-2 rounded-md box-content p-[1px]" width={24} height={24} />
              <LinkedInLogoIcon className="border-2 rounded-md box-content p-[1px]" width={24} height={24} />
              <GitHubLogoIcon className="border-2 rounded-md box-content p-[1px]" width={24} height={24} />
            </div>
          </article>
          <article className="grid grid-cols-4 gap-x-2">
            <FooterLink links={["Overview", "View More"]} title="Our Plants" />
            <FooterLink links={["Benefits", "Plants", "Avaliations"]} title="Resources" />
            <FooterLink links={["Best Sellers", "Why is so special?"]} title="Summary" />
            <FooterLink links={["Plant.ID", "OpenAi", "Trefle"]} title="API's" />
          </article>
        </div>
        <div className="clip-around shadow-[0_0_0_100vmax_#444] row-span-1 col-span-3 bg-[#444] flex flex-cols items-center justify-between h-32">
          <div>
            <h2
              className="text-white"
              style={FONTS_STYLED.bold}
            >Website developed by me enjoy :D</h2>
            <p
              className="text-white"
              style={FONTS_STYLED.body}
            >© 2023 HuannAnd. Todos os direitos reservados.</p>
          </div>
          <div className="grid grid-cols-3">
            

          </div>
        </div>
      </div>
    </footer>
  )
}