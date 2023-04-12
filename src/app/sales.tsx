"use client";

import { use } from 'react'

import { FONTS } from '@/constants/fonts'

import { Product } from '@/components';


async function getPlants() {
  const res = await fetch("https://trefle.io/api/v1/plants?token=d2X1SEdal8KhUHgZ1wNWQE7pisrAn7qKe5lYPOsFN-U")

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();

}

const dataPromise = getPlants();

export default function Sales() {
  const plants = use(dataPromise);

  return (
    <>
      <h1 className={`${FONTS.H1} font-inter text-center text-white mx-auto`}>Products</h1>
      <p className={`${FONTS.BODY} text-center mx-auto text-white opacity-60`}>View some of our products, in sale</p>

      <div className="w-full h-auto flex-col flex flex-wrap mb-4" >

        {plants.data.map((plant: { id: string, scientific_name: string }) => {
          return <Product key={plant.id} title={plant.scientific_name} />
        })}

        {/* <Product price={32} title="Sunflower Seeds" productImage='' key="2" /> */}
      </div>

    </>
  );
}