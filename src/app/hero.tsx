"use client";

import { Button } from '@/components';

export default function Hero() {
  return (
    <div className="w-[500px] h-[850px] items-start left-0 text-white top-0 z-20 mt-[55px]">
      <h1 className="text-[64px] font-bold">Mercantte</h1>
      <h2 className="text-[48px] font-medium">Why most people use, our loreal’s products?</h2>
      <p className="font-regular text-[16px] mt-4">
        My plant products provide an easy way to bring nature into spaces while offering health benefits. Carefully selected and shipped, they ensure customer satisfaction. With expertise in plant care and personalized service, buying from me is enjoyable and stress-free.
      </p>
      <Button buttonTypes='callToAction' className='w-full mt-8'>Our Products</Button>
    </div>
  );
}