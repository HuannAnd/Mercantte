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
    name,
    family,
    image_url,
    description,
  } = plant;

  return (
    <article className={"bg-white w-[412px] h-[280px] flex flex-row" + className} aria-label="card">
      <div className="flex w-[190px] overflow-hidden">
        <Image
          className='bg-center mx-auto h-full object-cover w-full'
          src={image_url}
          alt={`Image of ${name}`}

          width={200}
          height={300}
        />
      </div>
      <div className="w-[220px] p-6 shadow-2xl flex flex-col justify-between" aria-label="card info">
        <div>
          <h3 className={"font-inter mb-2 font-bold text-[20px] text-dark truncate max-w-xs" + FONTS.BOLD}>{name}</h3>
          <strong className={"font-roboto block mb-4 uppercase text-[11px] tracking-widest text-dark-white"}>{family}</strong>
          <p className="text-dark-white truncate line-clamp-6 text-[12px] w-full overflow-y-hidden h-[120px]">{description}</p>
        </div>
        <Link href={`/plants/${_id}?plant_id=${_id}`}>
          <Button className="w-full bg-secondary border-none" buttonTypes="buy">Learn More</Button>
        </Link>
      </div>
    </article>
  )
}


export default Card;