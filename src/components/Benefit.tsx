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
  date: string

}

function Benefit({
  isRight = false,
  imageIndex = "1",
  title,
  children,
  date

}: BenefitProps) {

  return (
    <div className="flex flex-row gap-[135px]">

      <div className={`${isRight ? 'order-2' : 'order-1'} w-[600px] relative`}>
        <h2 className={`${isRight ? 'text-right' : ''} ${FONTS.H1} leading-tight text-white mb-4`}>{title}</h2>
        <p className={`${isRight ? 'text-right' : ''} ${FONTS.BODY} mb-8 text-white`}>{children}</p>
        <small className={`${isRight ? 'text-right absolute right-0 ' : ''} text-primary opacity-70`}>{date}</small>
        <Button
          className={`${FONTS.BOLD} ${!isRight ? 'left-0' : ''} w-full mt-8 `}
        >Learn More</Button>
      </div>

      <div
        className={`
        ${isRight ? 'order-1' : 'order-2'} 
        ${imageIndex ? 'bg-primary' : (isRight ? 'bg-slate-200' : 'bg-slate-100')} 
        w-[630px] h-[700px] relative scale-90`}
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

    </div>
  )
}

export default Benefit;

