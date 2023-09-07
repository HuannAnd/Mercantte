"use client";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from '@/components/Card';

import { PlantDocument } from '@/@types/plant';
import { VariantProps, cva } from 'class-variance-authority';

import cn from '@/utils/cn';


const carouselVariants = cva(
  "w-full relative",
  {
    variants: {
      variant: {
        default: "w-auto",
        single: "w-[412px]",
        multiple: "w-[824px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  },
)

interface CarouselProps extends VariantProps<typeof carouselVariants> {
  plants: PlantDocument[],
  className?: string
}

export default function Carousel({ plants, variant, className }: CarouselProps) {
  const slidesToShow = plants.length >= 3 ? 3 : plants.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  if (plants.length === 0) return null

  return (
    <Slider
      className={cn(carouselVariants({ variant, className }))}
      {...settings}
    >
      {plants.map((plant: PlantDocument, index: number) => {
        return <Card className='mx-auto' plant={plant} key={index} />
      })}
    </Slider>
  )
}