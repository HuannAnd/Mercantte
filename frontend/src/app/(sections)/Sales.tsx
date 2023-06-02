"use client";

import { HTMLAttributes, useRef, useState } from 'react';

import { FONTS_STYLED } from '@/constants/fonts'

import { Card, Button } from '@/components';

import { PlantDocument } from '@/@types/plant';
import useCollapseEffect from '@/hooks/useCollapseEffect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';



type SalesProps = {
  plants: PlantDocument[],
} & HTMLAttributes<HTMLDivElement>

export default function Sales({ plants, ...props }: SalesProps) {
  const salesRef = useRef(null);
  const plantsRef = useRef(null);

  const {
    isCollapsed,
    handleOnCLick,
    display
  } = useCollapseEffect(6);

  const [isVisualized1, isVisualized2] = useIntersectionObserver(salesRef, plantsRef);

  return (
    <section {...props}>
      <div
        className='p-10 duration-1000'
        ref={salesRef}
        style={{ opacity: `${isVisualized1 ? '1' : '0'}` }}
      >
        <h1
          className="text-dark font-inter text-center mx-auto duration-1000"
          style={{
            transform: `translateY(${isVisualized1 ? 0 : -100}%)`,
            ...FONTS_STYLED.h1
          }}
        >
          Plants
        </h1>
        <p
          className={`text-center mx-auto text-dark-white opacity-60`}
          style={FONTS_STYLED.body}
        >
          View some plants, around the world
        </p>
      </div>
      <article
        ref={plantsRef}
        className={`w-full duration-1000 h-auto grid lg:grid-cols-[412px_412px_412px] md:grid-cols-[412px_412px] sm:grid-cols-[412px] px-4 flex-wrap gap-x-4 gap-y-4 justify-center mb-4`}
        style={{ gridTemplateRows: `${isCollapsed ? "auto" : "1fr 1fr"}` }}
      >
        {plants.filter((_, index: number) => display(index)).map((plant) => {
          return <Card key={plant._id} plant={plant} />
        })}
      </article>
      <div className='w-full mt-10 h-10 flex flex-row justify-center items-center'>
        <Button
          className='bg-primary border-2 text-white box-content duration-300 w-[320px] px-10 py-2 h-full text-center'
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