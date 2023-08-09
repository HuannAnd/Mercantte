"use client";

import { ButtonHTMLAttributes, MutableRefObject, ReactNode, RefObject } from "react"

import { FONTS_STYLED } from "@/constants/fonts"


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
  let defaultClassName = "text-white px-4 py-2";

  if (defaultClassName === "callToAction") {
    defaultClassName = "bg-primary border-secondary border-2 text-white duration-300 px-4 py-2 hover:bg-transparent hover:text-secondary"
  }

  if (defaultClassName === "buy") {
    defaultClassName = "text-white before:w-full before:content-[''] px-4 py-2 hover:before: before:-transform-x-full before:bg-white duration-300 before:absolute before:left-0 before:top-0";
  }

  return (
    <button
      className={`${defaultClassName} ${className}`}
      style={FONTS_STYLED.body}
      {...props}
    >
      {children}
    </button>)
}