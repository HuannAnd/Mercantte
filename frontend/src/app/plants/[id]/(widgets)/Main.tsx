"use client";

import PlantImage from "./PlantImage";

import { Button, Carousel, Explain } from "@/components";

import { FONTS } from "@/constants/fonts";

import { PlantDocument } from "@/@types/plant";
import { useScrollEffect } from '@/hooks/useScrollEffect';

type MainProps = {
  data: PlantDocument,
  commonFamilyPlants: PlantDocument[]
}

export default function Main({
  data,
  commonFamilyPlants
}: MainProps) {
  const y = useScrollEffect(0.45, 300, 1000);


  return (
    <main id="plant" className='w-full h-auto' style={{ marginTop: `${y}px` }} >
      <section className='flex flex-row gap-10 text-dark mb-10'>
        <PlantImage image={data.image_url} />
        <article className='border-l-2 border-l-white w-[660px] px-10'>
          <h2 className={`${FONTS.H1}`}>{data.name}</h2>
          <h3 className="text-[48px] uppercase tracking-widest mb-8 text-dark-white/70">{data.family}</h3>
          <div className='mb-8'>
            <Explain theme="dark" isOpen className="block mb-4" label="Description" value={data.description} />
            <Explain theme="dark" className="block mb-4 text-dark" label="Irrigation details" value={data.irrigation_details} />
            <Explain theme="dark" className="block mb-4 text-dark" label="Care details" value={data.care_details} />
          </div>
          <small className='ml-8 block mb-8 text-dark-white'></small>
          <Button className='w-full bg-primary' buttonTypes='callToAction'>Buy Now</Button>
        </article>
      </section>
      <section className="h-auto bg-[#5D7867] shadow-[0_0_0_100vmax_#5D7867] clip-around mt-20 n z-10 mb-[100vw]">
        <h2 className={`${FONTS.H1} text-[#fff] text-center p-10`}>Common Family</h2>
        <div className="flex flex-row justify-center items-start w-full px-40 py-10 gap-10">
          <Carousel className="grid grid-cols-3 grid-rows-1 h-[300px]" plants={commonFamilyPlants} />
        </div>
      </section>
    </ main>
  )
}