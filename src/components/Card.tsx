"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components";

import { FONTS } from '@/constants/fonts'

import { PlantDocument } from "@/@types/plant";


type CardProps = {
  plant: Omit<PlantDocument, "_id"> & { _id: string };
  className?: string,

}

function Card({ plant, className }: CardProps) {
  const {
    _id,
  } = plant;

  // const image_url = "";
  const name = "Pyrostegia venusta";
  const family = "Bignoniaceae";
  const description = "As plantas são essenciais para o equilíbrio ambiental e trazem benefícios para a saúde. Com um vaso de planta bem escolhido e cuidado, é possível transformar o ambiente e torná-lo mais acolhedor."

  return (
    <article className={"bg-white min-h-[280px] max-h-[300px] flex flex-row" + className} aria-label="card">
      <div className="w-[190px] overflow-hidden">
        <Image
          className='bg-center mx-auto h-full object-cover w-full'
          src="/icons/benefit-image1.jpg"
          alt={`Image of ${name}`}

          width={200}
          height={300}
        />
      </div>
      <div className="w-[230px] p-6 shadow-2xl" aria-label="card info">
        <h3 className={"font-inter mb-2 font-bold text-[20px] text-dark" + FONTS.BOLD}>{name}</h3>
        <strong className={"font-roboto block mb-4 uppercase text-[11px] tracking-widest text-dark-white"}>{family}</strong>
        <p className="text-dark-white mb-4 text-[12px] overflow-y-hidden h-auto">{description}</p>
        <Link href={`/plants/${_id}?plant_id=${_id}`}>
          <Button className="w-full bg-secondary border-none" buttonTypes="buy">Learn More</Button>
        </Link>
      </div>
    </article>
  )
}


export default Card;