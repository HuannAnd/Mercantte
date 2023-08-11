"use client";

import { useRef } from "react";

import { PlantDocument } from "@/@types/plant";

import Carousel from "@/components/Carousel";

import { FONTS_STYLED, } from "@/constants/fonts";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type FamilyPlantsProps = {
  plants: PlantDocument[]
}

export default function FamilyPlants({
  plants
}: FamilyPlantsProps) {
  if (plants.length === 0) return null

  const sectionRef = useRef(null);

  const [isVisualized] = useIntersectionObserver(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="h-auto clip-around mt-20 z-10"
    >
      <div className="p-10 text-center">
        <h2
          className="text-dark"
          style={FONTS_STYLED.h1}
        >Common Family</h2>
        <p
          className="text-dark-white duration-1000"
          style={{ transform: `translateY(${isVisualized ? 0 : 100}%)`, opacity: `${isVisualized ? 1 : 0}`, ...FONTS_STYLED.body }}
        >Some of family from that plant</p>
      </div>
      <div className="flex flex-row justify-center items-start w-full">
        <Carousel className="flex flex-row items-center justify-center h-[300px]" plants={plants} />
      </div>
    </section>
  )
}