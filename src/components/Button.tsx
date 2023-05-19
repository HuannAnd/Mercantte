"use client";

import { ButtonHTMLAttributes, MutableRefObject, ReactNode, RefObject } from "react"

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

  enum BUTTON_STYLES {
    CALL_TO_ACTION = "text-white",
    BUY = "bg-primary border-secondary border-2 text-white duration-300 hover:bg-transparent hover:text-secondary",
    DEFAULT = "bg-transparent border-2 border-white text-white"
  }


  function handleCostumizableStyles() {
    switch (buttonTypes) {
      case 'callToAction':
        return "text-white before:w-full before:content-[''] hover:before: before:-transform-x-full before:bg-white duration-300 before:absolute before:left-0 before:top-0";
      case 'buy':
        return "bg-primary border-secondary border-2 text-white duration-300 hover:bg-transparent hover:text-secondary ";
      default:
        return "border-2 border-white text-white";

    }
  }

  return <button className={`${handleCostumizableStyles()} ${className} px-4 py-2 ${FONTS.BODY} `} {...props}>{children}</button>
}