"use client";

import { Suspense } from "react";

import Image from "next/image";

import { FONTS_STYLED } from "@/constants/fonts";
import { Explain } from "@/components";

import { PlantDocument } from "@/@types/plant";

type PlantImageProps = {
  image: string;
} & React.HTMLAttributes<HTMLDivElement>

const PlantImage = ({ image, ...props }: PlantImageProps) => (
  <article  {...props}>
    <Suspense fallback={<div>Carregando...</div>}>
      <Image
        className="w-full h-full object-cover bg-blend-multiply mix-blend-multiply"
        src={image}
        alt="Imagem da Planta"
        width={500}
        height={500}
      />
    </Suspense>
  </article>
);

type PlantProps = {
  plant: PlantDocument
}

export default function Plant({
  plant
}: PlantProps) {
  return (
    <section className='lg:flex lg:flex-row sm:block gap-10 text-dark mb-10'>
      <PlantImage className="lg:w-[665px] lg:h-[715px] sm:w-[320px] sm:h-[350px] sm:mb-8 sm:block sm:p-0 sm:mx-auto bg-white flex scale-50 overflow-y-hidden justify-center items-center p-16" image={plant.image_url} />
      <article className='border-l-2 border-l-white w-[660px] px-10 sm:mx-auto'>
        <h2 className="lg:text-left sm:text-center sm:w-full" style={FONTS_STYLED.h1}>{plant.name}</h2>
        <h3 className="text-[48px] uppercase tracking-widest mb-8 text-dark-white/70 sm:text-center lg:text-left">{plant.family}</h3>
        <div className='mb-8'>
          <Explain theme="dark" isOpen className="block mb-4" label="Description" value={plant.description} />
          <Explain theme="dark" className="block mb-4 text-dark" label="Irrigation details" value={plant.irrigation_details} />
          <Explain theme="dark" className="block mb-4 text-dark" label="Care details" value={plant.care_details} />
        </div>
      </article>
    </section>
  )
}