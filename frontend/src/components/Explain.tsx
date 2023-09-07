"use client";

import { HtmlHTMLAttributes, useState } from 'react'

import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

import { VariantProps, cva } from 'class-variance-authority';

import cn from '@/utils/cn';


const mainTextVariants = cva(
  "overflow-hidden ml-8",
  {
    variants: {
      theme: {
        dark: "text-dark-white/70",
        light: "text-white/70"
      },
    },
    defaultVariants: {
      theme: "light"
    }
  }
)

interface ExplainProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
  VariantProps<typeof mainTextVariants> {
  label: string,
  value: string,
  isOpen?: boolean
}

export default function Explain({
  label,
  className,
  theme,
  value,
  isOpen = false,
  ...props
}: ExplainProps) {
  const [isMinimized, setIsMinimized] = useState<boolean>(!isOpen);
  const Trigger = isMinimized ? PlusIcon : MinusIcon
  function handleMinimizingDetails() {
    setIsMinimized(isMinimized => !isMinimized);
  }

  return (
    <div className={cn(className)} {...props}>
      <div className='flex flex-row justify-between py-5'>
        <h3 className="mb-4 uppercase text-@bold font-@bold">{label}</h3>
        <button className='w-[24px] h-[24px]' onClick={handleMinimizingDetails}>
          <Trigger className='bg-[#333] w-full h-full' color='white' />
        </button>
      </div>
      <div className={cn("h-300px grid h-auto duration-500", isMinimized ? "grid-rows-[0fr]" : "grid-rows-[1fr]")}>
        <p className={cn(mainTextVariants({ theme }))}>{value}</p>
      </div>
    </div>
  )
}