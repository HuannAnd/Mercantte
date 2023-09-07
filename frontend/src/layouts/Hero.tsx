"use client";

import { HTMLAttributes, useRef } from 'react'

import Button from '@/components/Button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type HeroProps = HTMLAttributes<HTMLDivElement>

export default function Hero(props: HeroProps) {
  const heroRef = useRef(null);

  const [isVisualized] = useIntersectionObserver(heroRef);

  return (
    <div className="md:mx-auto w-[500px] h-auto lg-order-1 md:order-2 sm:order-2 items-start left-0 text-white top-0 z-20 mt-[55px]" ref={heroRef}>
      <h1 className="text-[64px] font-bold lg:text-left sm:text-center">Why most people use, our products?</h1>
      <p className="font-regular text-white/70 text-[16px] mt-4">
        My plant products provide an easy way to bring nature into spaces while offering health benefits.
        <br />
        <br />
        Carefully selected and shipped, they ensure customer satisfaction. With expertise in plant care and personalized service, buying from me is enjoyable and stress-free.
      </p>
      <Button
        className='w-full mt-8 bg-secondary shadow-lg duration-1000'
        style={{
          transform: `translateX(${isVisualized ? 0 : -50}%)`,
          opacity: `${isVisualized ? 1 : 0}`,
          filter: `blur(${isVisualized ? 0 : 10}px)`,
        }}
        variant='cta'
      ><a href='#products' className=''>Our Plants</a></Button>
    </div>
  );
}