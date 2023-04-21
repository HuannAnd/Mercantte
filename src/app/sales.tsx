"use client";

import { HTMLAttributes } from 'react';

import { FONTS } from '@/constants/fonts'

import { Product } from '@/components';
import { PlantData } from '@/@types/trefle';


type SalesProps = {
  plants: PlantData[] | undefined,
} & HTMLAttributes<HTMLDivElement>

export default function Sales({ plants, ...props }: SalesProps) {


  return (
    <>
      <div {...props} className='p-10'>
        <h1 className={`${FONTS.H1} font-inter text-center text-white mx-auto`}>Products</h1>
        <p className={`${FONTS.BODY} text-center mx-auto text-white opacity-60`}>View some of our products, in sale</p>
      </div>

      <div className="w-full h-auto flex px-4 flex-wrap gap-x-4 gap-y-4 justify-center mb-4" >
        {!plants ? (
          <h1>Loading...</h1>
        ) : (
          
          plants.map((plant) => {
            return (
              <Product
                key={plant.id}
                plant={plant}
              />
            )
          }
          )
        )}
      </div>
    </>
  );
}

function ProductLoading() {
  return (
    <div className={`relative border-2 cursor-pointer border-primary duration-300 p-5 bottom-0 ease-out w-[280px] h-auto bg-white overflow-y-hidden`}>
      <h2>Loading Content</h2>
    </div>
  )
}