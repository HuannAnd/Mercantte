"use client";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Product } from '@/components';

import { PlantDocument } from '@/@types/plant';


type CarouselProps = {
  plants: PlantDocument[] | null,
  className?: string
}

export default function Carousel({ plants, className }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  if (!plants) {
    throw new Error("The carrousel plantas actually is null");
  }

  return (
    <Slider className={`${className} flex flex-row w-full`} {...settings}>

      {plants.filter((plant, index: number) => index < 5).map((plant: PlantDocument) => {
        // é necessário fazer essa copnversão, pois, Client Compoenents não aceitam a prop _id como ObjectId tendo métodos com toJSON e entre outros...
        const newPlant = { ...plant, _id: plant._id.toString() };

        return < Product className='mx-auto' plant={newPlant} key={newPlant._id} />

      }

      )}
    </Slider>
  )
}