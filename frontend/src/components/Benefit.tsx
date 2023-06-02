"use client";

import Image from "next/image";

import { CSSProperties, ForwardedRef, ReactNode, forwardRef, useTransition } from "react";

import { FONTS_STYLED } from "@/constants/fonts"

import { Button } from "@/components";


type BenefitProps = {
  isRight?: boolean,
  imageIndex?: string,
  title: string,
  isVisualized?: boolean,
  children: ReactNode,
  date: string,
} & React.HTMLAttributes<HTMLDivElement>

const Benefit = forwardRef<HTMLDivElement, BenefitProps>(({
  isRight = false,
  imageIndex = "1",
  isVisualized,
  title,
  children,
  date,
  className,
  ...props
}: BenefitProps, ref: ForwardedRef<HTMLDivElement>) => {
  const paragraphRefEffect: CSSProperties = ref ? {
    transform: `translateX(${isVisualized ? 0 : 50}%)`,
    filter: `blur(${isVisualized ? 0 : 10}px)`,
    opacity: `${isVisualized ? 1 : 0}`
  } : {};

  const buttonRefEffect: CSSProperties = ref ? {
    transform: `translateX(${isVisualized ? 0 : 100}%)`,
    opacity: `${isVisualized ? 1 : 0}`
  } : {};


  return (
    <article ref={ref} className={`${className} lg:flex lg:flex-row gap-[135px]`} {...props}>
      <div
        className={`w-[600px] relative`}
        style={{ order: `${isRight ? 2 : 1}` }}
      >
        <h2
          className="text-dark leading-tight mb-4 duration-1000"
          style={{
            textAlign: `${isRight ? "right" : "left"}`,
            ...FONTS_STYLED.h1,
          }}
        >
          {title}
        </h2>
        <p
          className={`text-dark-white mb-8 duration-1000`}
          style={{
            textAlign: `${isRight ? "right" : "left"}`,
            ...FONTS_STYLED.body,
            ...paragraphRefEffect
          }}
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
          className="duration-1000 w-full mt-8 bg-secondary"
          style={isRight ? { left: 0, ...FONTS_STYLED.bold, ...buttonRefEffect } : { ...FONTS_STYLED.bold, ...buttonRefEffect }}
          buttonTypes="buy"
        >Learn More</Button>
      </div>
      <div
        className={`w-[630px] h-[700px] relative flex flex-row justify-center items-center scale-90`}
        style={{ order: `${isRight ? 1 : 2}` }}
      >
        <Image
          className="w-full h-full object-cover duration-1000"
          style={ref ? {
            transform: `translateX(${isVisualized ? 0 : -50}%)`,
            opacity: `${isVisualized ? '1' : '0'}`
          } : undefined}
          src={`/icons/benefit-image${imageIndex}.jpg`}
          alt="Benefit image"
          width={300}
          height={500}
          priority
        />
      </div>
    </article>
  );
});

export default Benefit;

