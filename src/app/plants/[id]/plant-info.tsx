"use client";

import { Watering } from "@/@types/plantId";

import { FONTS } from "@/constants/fonts";

type InfoProps = {
  name: string,
  description?: string,
  family?: string,
  watering?: Watering,
  copyrightLicense?: string

}

export default function Info({
  name,
  description,
  family,
  watering,
  copyrightLicense
}: InfoProps) {


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
          <h3 className={`${FONTS.BOLD}`}>Watering</h3>
          <ul className="ml-8">
            <li>
              Maximum{" "}
              {watering?.max}
            </li>
            <li>
              Minimum{" "}
              {watering?.min}
            </li>
          </ul>
        </div>
      </div>
      <small className='ml-8 block mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta velit nam ullam, enim impedit fugiat, eaque alias rem illum et perspiciatis necessitatibus maxime, dolorum reiciendis recusandae obcaecati porro suscipit! Beatae!
      </small>
    </>
  )
};