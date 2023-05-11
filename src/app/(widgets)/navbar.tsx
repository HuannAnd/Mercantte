"use client";

import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
  type NavOption = {
    label: string,
    value: string,
    htmlElement?: string
  }

  const navOptions: NavOption[] = [
    { label: "Home", value: "/" },
    { label: "Our plants", value: "/", htmlElement: "#products" },
    { label: "Contact", value: "/", htmlElement: "#contact" }
  ]

  return (
    <nav className={`${className} w-full relative h-auto p-10 z-10 text-white flex flex-row justify-between z-2`}>
      <div className="">
        <h2 className="text-[24px]">Mercantte</h2>
      </div>
      <ul className="flex w-full flex-row justify-center items-center text-[16px] font-medium gap-[70px] uppercase font-regular">
        {navOptions.map(({ label, htmlElement, value }, index) =>
          <Link
            className="overflow-x-hidden relative before:bg-white before:h-[2px] before:w-full before:content-[''] before:-translate-x-full hover:text-slate-300 duration-300 before:duration-300 hover:before:translate-x-0 before:absolute before:bottom-0 before:left-0 w-"
            key={label}
            href={`${value}${htmlElement ?? ""}`}
          > {label}</Link>
        )
        }
      </ul>
    </nav>
    
  );
}