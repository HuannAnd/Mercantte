"use client";

import { PlantDocument } from "@/@types/plant";
import { Watering } from "@/@types/plantId";

import { FONTS } from "@/constants/fonts";

type InfoProps = {
  plant: PlantDocument
}

export default function Info({
  plant
}: InfoProps) {

  const {
    name,
    description,
    irrigation_details,
    family
  } = plant

  return (
    <>
      <h2 className={`${FONTS.H2} mb-8`}>{name}</h2>
      <div className='mb-8'>
        <div className="block mb-4">
          <h3 className={`${FONTS.BOLD} mb-4`}>Description</h3>
          <p className="ml-8">{description}</p>
        </div>
        <div className="block mb-4">
          <h3 className={`${FONTS.BOLD} mb-4`}>Family</h3>
          <p className={"ml-8 " + FONTS.BODY}>{family}</p>
        </div>
        <div className="block">
          <h3 className={`${FONTS.BOLD}`}>Irrigation details</h3>
          <p className={"ml-8 " + FONTS.BODY}>{irrigation_details}</p>
        </div>
      </div>
      <small className='ml-8 block mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta velit nam ullam, enim impedit fugiat, eaque alias rem illum et perspiciatis necessitatibus maxime, dolorum reiciendis recusandae obcaecati porro suscipit! Beatae!
      </small>
    </>
  )
};