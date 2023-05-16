"use client";

import { Suspense } from "react";
import Image from "next/image";

type PlantImageProps = {
  image: string;
}

const PlantImage = ({ image }: PlantImageProps) => (
  <article className="w-[665px] h-[715px] bg-white flex overflow-y-hidden justify-center items-center p-16">
    <Suspense fallback={<div>Carregando...</div>}>
      <Image
        className="w-full bg-blend-multiply mix-blend-multiply"
        src={image}
        alt="Imagem da Planta"
        width={500}
        height={500}
      />
    </Suspense>
  </article>
);

export default PlantImage;