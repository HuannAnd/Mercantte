"use client";

import { HTMLAttributes } from 'react'

import { Button } from '@/components';

type HeroProps = HTMLAttributes<HTMLDivElement>

export default function Hero(props: HeroProps) {
  return (
    <div {...props}>
      <h1 className="text-[64px] font-bold">Why most people use, our loreal’s products?</h1>
      <p className="font-regular text-white/70 text-[16px] mt-4">
        My plant products provide an easy way to bring nature into spaces while offering health benefits.
        <br />
        <br />
        Carefully selected and shipped, they ensure customer satisfaction. With expertise in plant care and personalized service, buying from me is enjoyable and stress-free.
      </p>
      <Button buttonTypes='callToAction' className='w-full mt-8 bg-secondary shadow-lg'>Our Products</Button>
    </div>
  );
}