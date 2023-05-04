"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components";

import { FONTS } from '@/constants/fonts'

import { PlantDocument } from "@/@types/plant";


type ProductProps = {
  plant: Omit<PlantDocument, "_id"> & { _id: string };
  className?: string,

}

function Product({ plant, className }: ProductProps) {
  const {
    _id,
    image_url,
    name,
    description,
    family
  } = plant;


  return (
    <div className={`${className} flex flex-col justify-between relative border-2 cursor-pointer border-primary duration-300 p-5 bottom-0 ease-out w-[280px] h-auto bg-white overflow-y-hidden`}>
      <div className="h-[200px] w-full overflow-y-hidden mb-4">
        <Image
          className='bg-center mx-auto h-full object-cover  '
          src={image_url}
          alt={`Image of ${name}`}

          width={200}
          height={300}
        />
      </div>
      <div className="">
        <h3 className={`${FONTS.BOLD} text-center mb-2 italic`}>{name}</h3>
        <div className="mb-8">
          <p className={'w-full relative'}>
            <strong>Family</strong>{""}
            {family}
            <br />
            <strong>Description</strong>{" "}
            <q>{description}</q>
          </p>
        </div>
        <Link href={`/plants/${_id}?plant_id=${_id}`}>
          <Button
            className="w-full uppercase block px-8 py-4 font-medium tracking-widest"
            buttonTypes="buy"
          >Learn More</Button>
        </Link>
      </div>
    </div>
  )
}


export default Product;