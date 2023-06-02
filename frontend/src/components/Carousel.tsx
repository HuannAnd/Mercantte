"use client";

import Slider, { CustomArrowProps } from 'react-slick';
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
  let config = "w-auto";

  if (slidesToShow === 1) {
    config = "w-[412px]";
  }

  if (slidesToShow === 2) {
    config = "w-[824px]";
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  }

  if (plants.length === 0) return null

  return (
    <Slider
      centerPadding='20px'
      className={`${className} ${config} w-full relative`}
      {...settings}
    >
      {plants.map((plant: PlantDocument, index: number) => {
        return <Card className='mx-auto' plant={plant} key={index} />
      })}
    </Slider>
  )
}