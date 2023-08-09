"use client";

import { HtmlHTMLAttributes, useRef, useState } from 'react'

import { FONTS_STYLED } from "@/constants/fonts"

import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';


type ExplainProps = {
  label: string,
  value: string,
  theme: "dark" | "light",
  isOpen?: boolean
} & HtmlHTMLAttributes<HTMLDivElement>

export default function Explain({
  label,
  className,
  theme,
  value,
  isOpen = false,
  ...props
}: ExplainProps) {
  const [isMinimized, setIsMinimized] = useState<boolean>(!isOpen);

  // Tudo estilização
  const textColor = theme === 'dark' ? "text-dark-white/70" : "text-white/70";

  function handleMinimizingDetails() {
    setIsMinimized(isMinimized => !isMinimized);
  }

  return (
    <div className={`${className}`} {...props}>
      <div className='flex flex-row justify-between py-5'>
        <h3
          className="mb-4 uppercase"
          style={FONTS_STYLED.bold}
        >
          {label}
        </h3>
        <button className='w-[24px] h-[24px]' onClick={handleMinimizingDetails}>
          {isMinimized ? (
            <PlusIcon className='bg-[#333] w-full h-full' color='white' />
          ) : (
            <MinusIcon className='bg-[#333] w-full h-full' color='white' />
          )}
        </button>
      </div>
      <div
        className="h-300px grid h-auto duration-500"
        style={{ gridTemplateRows: `${isMinimized ? "0fr" : "1fr"}` }}
      >
        <p className={`overflow-hidden ml-8 ${textColor}`}>{value}</p>
      </div>
    </div>
  )
}