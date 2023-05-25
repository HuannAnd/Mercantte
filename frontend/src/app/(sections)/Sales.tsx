"use client";

import { HTMLAttributes } from 'react';

import { FONTS } from '@/constants/fonts'

import { Card } from '@/components';

import { PlantDocument } from '@/@types/plant';


type SalesProps = {
  plants: PlantDocument[] | undefined,
} & HTMLAttributes<HTMLDivElement>

export default function Sales({ plants, ...props }: SalesProps) {
  return (
    <>
      <div {...props} className='p-10'>
        <h1 className={`${FONTS.H1} text-dark font-inter text-center mx-auto`}>Plants</h1>
        <p className={`${FONTS.BODY} text-center mx-auto text-dark-white opacity-60`}>View some plants, around the world</p>
      </div>
      <div className="w-full h-auto grid lg:grid-cols-[412px_412px_412px] md:grid-cols-[412px_412px] sm:grid-cols-[412px] px-4 flex-wrap gap-x-4 gap-y-4 justify-center mb-4" >
        {!plants ? (
          <h1>Loading...</h1>
        ) : (
          plants.filter((_, index: number) => index < 20).map((plant) => {
            return <Card key={plant._id} plant={plant} />
          }
          )
        )}
      </div>
    </>
  );
}