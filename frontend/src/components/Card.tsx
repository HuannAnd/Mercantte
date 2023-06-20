"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components";

import { FONTS_STYLED } from '@/constants/fonts'

import { PlantDocument } from "@/@types/plant";
import useLoad from "@/hooks/useLoad";
import { useRef } from "react";


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

  const imageRef = useRef<HTMLImageElement>(null!);
  const { handleImageLoad, isLoaded } = useLoad(imageRef);


  return (
    <article
      className={`bg-white w-[412px] h-[280px] flex flex-row ${className}`}
      aria-label="card"
    >
      <div
        className={`flex w-[190px] overflow-hidden relative`}
      >
        {!isLoaded && (
          <div className="flex justify-center items-center h-full absolute w-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
          </div>
        )}
        <Image
          className={`bg-center mx-auto h-full object-cover w-full duration-1000 ${isLoaded ? "opacity-100 blur-0" : "opacity-0 blur"}`}
          onLoad={handleImageLoad}
          ref={imageRef}
          loading="lazy"
          src={image_url}
          alt={`Image of ${name}`}
          width={200}
          height={300}
        />
      </div>
      <div
        className="w-[220px] p-6 flex flex-col justify-between"
        aria-label="card info"
      >
        <div>
          <h3
            className="font-inter mb-2 font-bold text-[20px] text-dark truncate max-w-xs"
            style={FONTS_STYLED.bold}
          >
            {name}
          </h3>
          <strong className="font-roboto block mb-4 uppercase text-[11px] tracking-widest text-dark-white">{family}</strong>
          <p className="card__preview-text text-dark-white text-[12px] w-full overflow-hidden h-auto">{description}</p>
        </div>
        <Link href={`/plants/${_id}?plant_id=${_id}`}>
          <Button className="w-full bg-secondary border-none" buttonTypes="buy">Learn More</Button>
        </Link>
      </div>
    </article >
  )
}


export default Card;