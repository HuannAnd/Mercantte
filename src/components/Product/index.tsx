"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components";

import { FONTS } from '@/constants/fonts'

import { PlantData } from "@/@types/trefle";


type ProductProps = {
  plant: PlantData;
  className?: string,

}

function Product({ plant, className }: ProductProps) {
  const { scientific_name, image_url, slug, id } = plant;

  async function copyToClipboard(slug: string) {
    navigator.clipboard.writeText(slug);


  }


  return (
    <div className={`${className} relative border-2 cursor-pointer border-primary duration-300 p-5 bottom-0 ease-out w-[280px] h-auto bg-white overflow-y-hidden`}>
      <div className="h-[200px] w-full overflow-y-hidden mb-4">
          <Image
            className='bg-center mx-auto'
            src={image_url}
            alt={`Image of ${scientific_name}`}

            width={200}
            height={300}
          />
      </div>

      <h3 className={`${FONTS.BOLD} text-center mb-2 italic`}>{scientific_name}</h3>
      <div>
        <p className={'w-full relative' + FONTS.BOLD}>Description</p>
      </div>
      <p 
      className="mb-8 text-[#555] animate-pulse"
      style={{
        animationDelay: "0.5s",
        animationDuration: "1s"
      }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum facilis inventore!
      </p>
      <Link href={`/plants/${Number(id)}?plant_id=${Number(id)}`}>
        <Button
          className="bg-transparent border-primary border-2 w-full uppercase block px-8 py-4 font-medium tracking-widest hover:bg-slate-100 duration-300 text-primary"
          buttonTypes="buy"
          onClick={() => copyToClipboard(slug)}
        >Learn More</Button>
      </Link>
    </div>
  )
}


export default Product;