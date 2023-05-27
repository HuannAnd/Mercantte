"use client";

import { HTMLAttributes, useState } from 'react';

import { FONTS } from '@/constants/fonts'

import { Card, Button } from '@/components';

import { PlantDocument } from '@/@types/plant';
import useCollapseEffect from '@/hooks/useCollapseEffect';



type SalesProps = {
  plants: PlantDocument[],
} & HTMLAttributes<HTMLDivElement>

export default function Sales({ plants, ...props }: SalesProps) {
  const {
    isCollapsed,
    handleOnCLick,
    display
  } = useCollapseEffect(6);


  return (
    <section {...props}>
      <div className='p-10'>
        <h1 className={`${FONTS.H1} text-dark font-inter text-center mx-auto`}>Plants</h1>
        <p className={`${FONTS.BODY} text-center mx-auto text-dark-white opacity-60`}>View some plants, around the world</p>
      </div>
      <article
        className={`w-full h-auto grid lg:grid-cols-[412px_412px_412px] md:grid-cols-[412px_412px] sm:grid-cols-[412px] px-4 flex-wrap gap-x-4 gap-y-4 justify-center mb-4`}
        style={{ gridTemplateRows: `${isCollapsed ? "auto" : "1fr 1fr"}` }}
      >
        {plants.filter((_, index: number) => display(index)).map((plant) => {
          return <Card key={plant._id} plant={plant} />
        })
        }
      </article>
      <div className='w-full mt-10 h-10 flex flex-row justify-center items-center'>
        <Button
          className='border-[#444] border-2 text-dark box-content duration-300 w-[320px] px-10 py-2 h-full text-center'
          style={{ filter: `${isCollapsed ? "brightness(60%)" : "brightness(100%)"}` }}
          buttonTypes='callToAction'
          onClick={handleOnCLick}
        >
          {isCollapsed ? "Less" : "View More"}
        </Button>
      </div>
    </section>
  );
}