"use client";

import { HTMLAttributes } from 'react';

import { FONTS } from '@/constants/fonts'

import { Product } from '@/components';
import { PlantData } from '@/@types/trefle';
import { PlantDocument } from '@/@types/plant';


type SalesProps = {
  plants: PlantDocument[] | undefined,
} & HTMLAttributes<HTMLDivElement>

export default function Sales({ plants, ...props }: SalesProps) {
  return (
    <>
      <div {...props} className='p-10'>
        <h1 className={`${FONTS.H1} font-inter text-center text-white mx-auto`}>Plants</h1>
        <p className={`${FONTS.BODY} text-center mx-auto text-white opacity-60`}>View some plants, around the world</p>
      </div>

      <div className="w-full h-auto flex px-4 flex-wrap gap-x-4 gap-y-4 justify-center mb-4" >
        {!plants ? (
          <h1>Loading...</h1>
        ) : (
          plants.filter((plant, index: number) => index < 4).map((plant) => {
            // é necessário fazer essa copnversão, pois, Client Compoenents não aceitam a prop _id como ObjectId tendo métodos com toJSON e entre outros...
            const newPlant = { ...plant, _id: plant._id.toString() };

            return <Product key={plant._id.toString()} plant={newPlant} />
          }
          )
        )}
      </div>
    </>
  );
}