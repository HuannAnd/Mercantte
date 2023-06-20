"use client";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from '@/components';

import { PlantDocument } from '@/@types/plant';



type CarouselProps = {
  plants: PlantDocument[],
  className?: string
}

function NextArrow() {
  return <div className='aspect-square h-[10px] bg-black'>-</div>
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

  console.log(slidesToShow);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: isMobile,
    arrows: true,
    // centerMode: isMobile,

  }

  if (plants.length === 0) return null

  return (
    <Slider
      className={`${className} ${config} w-full relative`}
      {...settings}
    >
      {plants.map((plant: PlantDocument, index: number) => {
        return <Card className='mx-auto' plant={plant} key={index} />
      })}
    </Slider>
  )
}