"use client";

import { PlantDocument } from "@/@types/plant";
import { Carousel } from "@/components";
import { FONTS_STYLED, } from "@/constants/fonts";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

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
      className="h-auto clip-around mt-20 n z-10 mb-[100vw]"
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
        <Carousel className="shadow-inner flex flex-row items-center justify-center h-[300px]" plants={plants} />
      </div>
    </section>
  )
}