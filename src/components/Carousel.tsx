"use client";

import { useState } from 'react';

import { PlantData } from '@/@types/trefle';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Product } from '@/components';


type CarouselProps = {
  plants: PlantData[],
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


  return (
    <Slider className={`${className} flex flex-row w-full`} {...settings}>
      {plants.map((plant: PlantData, index:number) => index < 5 ? <Product className='mx-auto' plant={plant} key={plant.id}/> : null )}
    </Slider>
  )
}