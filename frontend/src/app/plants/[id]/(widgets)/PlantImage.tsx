"use client";

import { Suspense } from "react";
import Image from "next/image";

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

export default PlantImage;