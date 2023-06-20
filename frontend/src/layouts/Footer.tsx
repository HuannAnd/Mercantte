"use client";

import Image from "next/image";

import { FONTS_STYLED } from "@/constants/fonts";

import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'


type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

type FooterLinkProps = {
  title: string,
  links: { label: string, value?: string }[]
}

function FooterLink({
  title,
  links
}: FooterLinkProps) {
  return (
    <div className="flex flex-col items-start w-auto pr-20">
      <h3
        className="text-dark mb-4 w-auto"
        style={FONTS_STYLED.bold}
      >
        {title}
      </h3>
      {links.map((link, index) => <a key={index} href={link.value ?? "#"} className="text-dark-white w-auto relative text-[12px] mb-4 cursor-pointer before:h-[2px] before:-translate-x-full before:duration-300 hover:before:translate-x-0 overflow-hidden before:absolute before:bg-[#888] before:bottom-0 before:left-0 before:content-[''] before:w-full">{link.label}</a>)}
    </div>
  )
}

export default function Footer({
  children,
  ...props
}: FooterProps) {
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
              <a href="https://github.com/HuannAND">
                <GitHubLogoIcon className="border-2 rounded-md box-content p-[1px] cursor-pointer" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/huann-vicente-5092a9261/">
                <LinkedInLogoIcon className="border-2 rounded-md box-content p-[1px] cursor-pointer" width={24} height={24} />
              </a>
              <InstagramLogoIcon className="border-2 rounded-md box-content p-[1px] cursor-pointer" width={24} height={24} />
            </div>
          </article>
          <article className="grid grid-cols-4 gap-x-2">
            <FooterLink links={[{ label: "Overview", value: "#products" }, { label: "View More", value: "#" }]} title="Our Plants" />
            <FooterLink links={[{ label: "Summary", value: "#summary" }, { label: "Plants", value: "#products" }, { label: "Avaliations", value: "#avaliations" }, {label: "Contact", value: "#contact"}]} title="Resources" />
            <FooterLink links={[{ label: "Best Sellers" }, { label: "Why is so special?", value: "#" }]} title="Benefits" />
            <FooterLink links={[{ label: "Plant.Id", value: "https://web.plant.id/" }, { label: "OpenAi", value: "https://platform.openai.com/" }, { label: "Trefle", value: "https://trefle.io/" }]} title="API's" />
          </article>
        </div>
        <div className="clip-around shadow-[0_0_0_100vmax_#506d3a] row-span-1 col-span-3 bg-[#506d3a] flex flex-cols items-center justify-between h-32">
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
          <div className="w-auto text-white flex flex-row gap-x-2">
            <div className="inline justify-between mx-4 items-center">
              &#x2022;
              <Image
                className="text-white inline-block mx-4 invert"
                src="/icons/trefle-logo.svg"
                alt=""
                width={24}
                height={24}
              />
              <p className="text-white inline-block">OpenAI</p>
            </div>
            <div className="inline-block mx-4">
              &#x2022;
              <Image
                className="text-white inline-block mx-4 h-[24px] w-[24px] invert"
                src="/icons/openai-logo.png"
                alt=""
                width={24}
                height={24}
              />
              <p className="text-white inline-block">Trefle</p>
            </div>
            <div className="inline-block mx-4">
              &#x2022;
              <Image
                className="text-white inline-block mx-4 scale-150 h-[24px] object-contain w-[24px] "
                src="/icons/plant-id-logo.png"
                alt=""
                width={24}
                height={24}
              />
              <p className="text-white inline-block">Plant.Id</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}