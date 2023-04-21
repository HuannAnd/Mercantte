"use client";

import { ButtonHTMLAttributes, ReactNode } from "react"

import { FONTS } from "@/constants/fonts"


type ButtonProps = {
  buttonTypes?: 'callToAction' | 'buy',
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  buttonTypes,
  children,
  className,
  ...props
}: ButtonProps) {

  function handleCostumizableStyles() {
    switch(buttonTypes) {
      case 'callToAction':
        return "bg-secondary text-white";
      case 'buy':
        return "bg-transparent border-primary border-2 text-primary";
      default:
        return "bg-transparent border-2 border-white text-white";
  
    }
  }

  return <button className={`${handleCostumizableStyles()} ${className} px-8 py-4 ${FONTS.BODY} `} {...props}>{children}</button>
}