"use client";

import Image from "next/image";

import { ReactNode } from "react";

import { FONTS } from "@/constants/fonts"

import { Button } from "@/components";


type BenefitProps = {
  isRight?: boolean,
  imageIndex?: string,
  title: string,
  children: ReactNode,
  date: string,
  theme?: 'dark' | 'light'

}

function Benefit({
  isRight = false,
  imageIndex = "1",
  title,
  children,
  date,
  theme = 'light'
}: BenefitProps) {
  const orderClass = isRight ? 'order-2' : 'order-1';
  const alignmentClass = isRight ? 'text-right' : '';

  

  return (
    <article className="lg:flex lg:flex-row gap-[135px]">
      <div className={`${orderClass} w-[600px] relative`}>
        <h2 className={`${alignmentClass} ${theme === 'dark' ? 'text-dark' : 'text-white'} ${FONTS.H1} leading-tight mb-4`}>{title}</h2>
        <p className={`${alignmentClass} ${theme === 'dark' ? 'text-dark-white' : 'text-white/70'} text-dark-white ${FONTS.BODY} mb-8`}>{children}</p>
        <small className={`${isRight ? 'text-right absolute right-0 ' : ''}  ${theme === 'dark' ? 'text-dark-white' : 'text-white/70'} opacity-70`}>{date}</small>
        <Button
          className={`${FONTS.BOLD} ${!isRight ? 'left-0' : ''} w-full mt-8 bg-secondary `}
          buttonTypes="buy"
        >Learn More</Button>
      </div>
      <div
        className={`
        ${!orderClass} 
        ${imageIndex ? 'bg-primary' : (isRight ? 'bg-slate-200' : 'bg-slate-100')} 
        w-[630px] h-[700px] relative scale-90 sm:`}
      >
        <Image
          className="w-full h-full object-cover top-1/2 -translate-x-1/2 absolute left-1/2 -translate-y-1/2 "
          src={`/icons/benefit-image${imageIndex}.jpg`}
          alt="Benefit image"
          width={300}
          height={500}
          priority
        />
      </div>
    </article>
  )
}

export default Benefit;
