"use client";

import NextLink from 'next/link';

import { Path } from '@/constants/paths'
import { DropdownMenu } from '@/components'



type NavBarProps = {
  isHommed?: boolean,
} & React.HTMLAttributes<HTMLDivElement>



export default function NavBar({
  className,
  isHommed = false,
}: NavBarProps) {
  const paths: Path[] = [
    { label: "Home", value: "/", to: "#" },
    { label: "Our plants", value: "/", to: "#products" },
    { label: "Contact", value: "/", to: "#contact" }
  ];

  return (
    <nav className={`${className} lg:w-full sm:w-screen sm:mx-auto relative h-auto p-10 z-10 text-white flex flex-row justify-between z-2`}>
      <div className="">
        <h2 className="text-[24px]">Mercantte</h2>
      </div>
      <ul className="lg:flex sm:hidden w-full  flex-row justify-center items-center text-[16px] font-medium gap-[70px] uppercase font-regular">
        {paths.map((opt) => {
          if (isHommed) {
            return (
              <a
                className="overflow-x-hidden relative cursor-pointer before:bg-white before:h-[2px] before:w-full before:content-[''] before:-translate-x-full hover:text-slate-300 duration-300 before:duration-300 hover:before:translate-x-0 before:absolute before:bottom-0 before:left-0"
                href={`${opt.to}`}
                key={opt.label}
              > {opt.label}</a>
            )
          }
          return (
            <NextLink
              className="overflow-x-hidden relative cursor-pointer before:bg-white before:h-[2px] before:w-full before:content-[''] before:-translate-x-full hover:text-slate-300 duration-300 before:duration-300 hover:before:translate-x-0 before:absolute before:bottom-0 before:left-0"
              key={opt.label}
              href={`${opt.value}/#${opt.to}`}
            >{opt.label}</NextLink>
          )
        }
        )}
      </ul>
      <div className="grid grid-cols-2">
        <DropdownMenu
          className="lg:hidden sm:visible rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
          paths={paths}
          isHommed={isHommed}
        />
      </div>
    </nav>
  );
}