"use client";

import { Button } from '@/components';

export default function Hero(){
  return (
    <div className="w-[500px] h-[850px] items-start left-0 text-white top-0 z-20 mt-[55px]">
      <h1 className="text-[64px] font-bold">Mercantte</h1>
      <h2 className="text-[48px] font-medium">Why most people use, our loreal’s products?</h2>
      <p className="font-regular text-[16px] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi arcu, suscipit id vehicula sed, ultricies sit amet libero. Aliquam risus enim, vehicula ac posuere in, molestie non turpis. Ut et aliquet nibh. Aenean tincidunt dolor eget dui mollis, sit amet semper lectus iaculis. Duis a urna magna
      </p>
      <Button buttonTypes='callToAction' className='w-full mt-8'>Our Products</Button>
    </div>
  );
}