"use client";

import { PlantImage } from "../(widgets)";

import { FONTS_STYLED } from "@/constants/fonts";
import { Button, Explain } from "@/components";
import { PlantDocument } from "@/@types/plant";



type PlantProps = {
  plant: PlantDocument
}

export default function Plant({
  plant
}: PlantProps) {
  return (
    <section className='flex flex-row gap-10 text-dark mb-10'>
      <PlantImage image={plant.image_url} />
      <article className='border-l-2 border-l-white w-[660px] px-10'>
        <h2 style={FONTS_STYLED.h1}>{plant.name}</h2>
        <h3 className="text-[48px] uppercase tracking-widest mb-8 text-dark-white/70">{plant.family}</h3>
        <div className='mb-8'>
          <Explain theme="dark" isOpen className="block mb-4" label="Description" value={plant.description} />
          <Explain theme="dark" className="block mb-4 text-dark" label="Irrigation details" value={plant.irrigation_details} />
          <Explain theme="dark" className="block mb-4 text-dark" label="Care details" value={plant.care_details} />
        </div>
        <small className='ml-8 block mb-8 text-dark-white'></small>
        <Button className='w-full bg-primary' buttonTypes='callToAction'>Buy Now</Button>
      </article>
    </section>
  )
}