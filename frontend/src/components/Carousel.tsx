"use client";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from '@/components';

import { PlantDocument } from '@/@types/plant';
import RenderResult from 'next/dist/server/render-result';


type CarouselProps = {
  plants: PlantDocument[],
  className?: string
}

export default function Carousel({ plants, className }: CarouselProps) {
  const slidesToShow = plants.length >= 3 ? 3 : plants.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  if (plants.length === 0) return null

  return (
    <Slider className={`${className} w-full`} {...settings}>
      {plants.map((plant: PlantDocument) => {
        return <Card className='mx-auto' plant={plant} key={plant.id} />
      })}
    </Slider>
  )
}