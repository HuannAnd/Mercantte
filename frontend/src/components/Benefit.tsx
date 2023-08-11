"use client";

import Image from "next/image";

import { ForwardedRef, ReactNode, forwardRef, useRef, MutableRefObject } from "react";

import useDevice from "@/hooks/useMobile";
import useLoad from "@/hooks/useLoad";

import cn from "@/utils/cn";


type BenefitProps = {
  isRight?: boolean,
  imageIndex?: number,
  title: string,
  isVisualized?: boolean,
  children: ReactNode,
  date: string,
} & React.HTMLAttributes<HTMLDivElement>

function Benefit({
  isRight = false,
  imageIndex = 1,
  isVisualized,
  title,
  children,
  date,
  className,
  ...props
}: BenefitProps, ref: ForwardedRef<HTMLDivElement>) {
  const imageRef = useRef<HTMLImageElement>(null);

  const isMobile = useDevice("md");
  const { handleImageLoad, isLoaded } = useLoad(imageRef as MutableRefObject<HTMLImageElement>);

  return (
    <div>
      <article
        className={cn(className, "flex lg:flex-row sm:flex-col relative sm:gap-0 lg:gap-[135px]")} {...props}
        ref={ref}
      >
        <div className={cn(
          "w-[600px] relative lg:mx-0 sm:mx-auto",
          isMobile ? "sm:order-2"
            : isRight ? "order-2" : "order-1"
        )}>
          <h2 className={cn(
            "text-dark leading-tight mb-4 text-@h1 font-@h1",
            isMobile ? "text-center"
              : isRight ? "text-right" : "text-left",
            isVisualized ? "" : "duration-1000"
          )}>{title}</h2>
          <p className={cn(
            "text-dark-white mb-8 font-@body text-@body",
            isVisualized ? "" : "duration-1000",
            isMobile ? "text-center"
              : isRight ? "text-right" : "text-left"
          )}>{children}</p>
          <small className={cn(
            "text-dark-white opacity-70",
            isMobile ? "text-center mx-auto block"
              : isRight ? "text-right absolute right-0" : "text-left static"
          )}>{date}</small>
        </div>
        <div className={cn(
          "flex items-center",
          isMobile ? "order-1"
            : isRight ? "order-1" : "order-2"
        )}>
          <div
            className={cn(
              "aspect-square lg:h-[400px] md:h-[333px] sm:h-[250px] sm:mx-auto lg:mx-0 object-cover bg-cover bg-center lg:relative scale-90",
              isLoaded ? "blur-0" : "blur"
            )}
            style={{ backgroundImage: `url(/benefits/fallback/${imageIndex}.jpg)` }}
          >
            <Image
              className={cn(
                "w-full h-full object-cover z-10",
                isVisualized ? "" : "duration-1000",
                isLoaded ? "opacity-100 blur-0" : "opacity-0 blur",
                ref && isVisualized ? "opacity-100" : "opacity-0"
              )}
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
};

export default forwardRef(Benefit);

