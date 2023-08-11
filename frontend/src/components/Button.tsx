"use client";

import { ButtonHTMLAttributes } from "react"

import { FONTS_STYLED } from "@/constants/fonts"

import { VariantProps, cva } from "class-variance-authority";

import cn from "@/utils/cn";

const buttonVariants = cva(
  "text-white px-4 py-2",
  {
    variants: {
      variant: {
        default: "text-white px-4 py-2",
        cta: "bg-primary border-secondary border-2 text-white duration-300 px-4 py-2 hover:bg-transparent hover:text-secondary",
        buyer: "text-white before:w-full before:content-[''] px-4 py-2 hover:before: before:-transform-x-full before:bg-white duration-300 before:absolute before:left-0 before:top-0"

      },
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ className, variant }))}
      style={FONTS_STYLED.body}
      {...props}
    >
      {children}
    </button>)
}