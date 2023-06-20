"use client";

import Image from "next/image";

import { Suspense, ForwardedRef, ReactNode, forwardRef, useRef } from "react";

import { FONTS_STYLED } from "@/constants/fonts"

import { Button } from "@/components";
import useMobile from "@/hooks/useMobile";
import useDevice from "@/hooks/useMobile";
import useLoad from "@/hooks/useLoad";


type BenefitProps = {
  isRight?: boolean,
  imageIndex?: number,
  title: string,
  isVisualized?: boolean,
  children: ReactNode,
  date: string,
} & React.HTMLAttributes<HTMLDivElement>

const Benefit = forwardRef<HTMLDivElement, BenefitProps>(({
  isRight = false,
  imageIndex = 1,
  isVisualized,
  title,
  children,
  date,
  className,
  ...props
}: BenefitProps, ref: ForwardedRef<HTMLDivElement>) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const isMobile = useDevice("md");
  const { handleImageLoad, isLoaded } = useLoad(imageRef);

  const imageRatio = Math.round(527.82 / 630);


  return (
    <div>
      <article ref={ref} className={`${className} flex lg:flex-row sm:flex-col relative sm:gap-0 lg:gap-[135px]`} {...props}>
        <div
          className={`w-[600px] relative lg:mx-0 sm:mx-auto ${isMobile ? "sm:order-2" : isRight ? "order-2" : "order-1"}`}
        >
          <h2
            className={`text-dark leading-tight mb-4 ${isMobile ? "text-center" : (isRight ? "text-right" : "text-left")} ${isVisualized ? "" : "duration-1000"}`}
            style={FONTS_STYLED.h1}
          >
            {title}
          </h2>
          <p
            className={`text-dark-white mb-8 ${isVisualized ? "" : "duration-1000"} ${isMobile ? "text-center" : (isRight ? "text-right" : "text-left")}`}
            style={FONTS_STYLED.body}
          >
            {children}
          </p>
          <small
            className={` text-dark-white opacity-70 ${isMobile ? "text-center mx-auto block" : isRight ? "text-right absolute right-0" : "text-left static"}`}
          >
            {date}
          </small>
        </div>
        <div className={`${isMobile ? "order-1" : (isRight ? "order-1" : "order-2")} flex items-center`}>
          <div
            className={`aspect-square lg:h-[400px] md:h-[333px] sm:h-[250px] sm:mx-auto ${isLoaded ? "blur-0" : "blur"} lg:mx-0 object-cover bg-cover bg-center lg:relative scale-90`}
            style={{ backgroundImage: `url(/benefits/fallback/${imageIndex}.jpg)` }}
          >
            <Image
              className={`w-full h-full object-cover ${isVisualized ? "" : "duration-1000"} ${isLoaded ? "opacity-100 blur-0" : "opacity-0 blur"} ${ref && isVisualized ? "opacity-100" : "opacity-0"}`}
              ref={imageRef}
              src={`/benefits/${imageIndex}.jpg`}
              onLoad={handleImageLoad}
              loading="lazy"
              alt="Benefit image"
              width={300}
              height={500}
            />
          </div>
        </div>
      </article>
    </div>
  );
});

export default Benefit;

