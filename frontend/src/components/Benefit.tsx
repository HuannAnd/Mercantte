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
      <div
        className={`w-[600px] relative`}
        style={{ order: `${isRight ? 2 : 1}` }}
      >
        <h2
          className={`text-dark ${FONTS.H1} leading-tight mb-4`}
          style={{ textAlign: `${isRight ? "right" : "left"}` }}
        >
          {title}
        </h2>
        <p
          className={`text-dark-white ${FONTS.BODY} mb-8`}
          style={{ textAlign: `${isRight ? "right" : "left"}` }}
        >
          {children}
        </p>
        <small
          className={` text-dark-white opacity-70`}
          style={{
            textAlign: `${isRight ? "right" : "left"}`,
            position: `${isRight ? "absolute" : "static"}`,
            right: `${isRight ? 0 : ""}`
          }}
        >
          {date}
        </small>
        <Button
          className={`${FONTS.BOLD} w-full mt-8 bg-secondary `}
          style={isRight ? { left: 0 } : undefined}
          buttonTypes="buy"
        >Learn More</Button>
      </div>
      <div
        className={`w-[630px] h-[700px] relative scale-90`}
        style={{ order: `${isRight ? 1 : 2}` }}
      >
        <Image
          className="w-full h-full object-cover top-1/2 -translate-x-1/2 absolute left-1/2 -translate-y-1/2"
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

