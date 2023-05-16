import Image from "next/image"

import { Button } from "@/components"

import { FONTS } from "@/constants/fonts"
import { spawn } from "child_process"
import { NavBar } from "@/app/(widgets)"

export default function LoadingPlantPage() {


  return (
    <div className="h-screen flex flex-col w-[1280px] mx-auto">
      <NavBar className="border-b-white mb-8 border-b-2" />
      {/* <Breadcrumb className="mb-8 px-4" paths={paths} currentRoute={data.name} /> */}
      <div className="w-screen absolute -z-10 left-0 top-0 ">
        <div className="w-full h-[300px] bg-primary" />
        <svg className="" viewBox="0 0 1920 444" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#5D7867" />
        </svg>
      </div>
      <section className='flex flex-row gap-10 text-white mb-10'>
        <article className='w-[665px] h-[715px] bg-secondary flex overflow-y-hidden justify-center items-center p-16'>
          {/* {data?.image_url && (
            <Image
              className="w-full bg-blend-multiply mix-blend-multiply"

              src={data.image_url}
              alt={`${data.image_url}`}

              width={200}
              height={300}

              priority
            />
          )} */}
        </article>
        <article className='border-l-2 border-l-white w-[660px] px-10'>
          {/* <Info plant={data} /> */}
          <Button className='w-full' buttonTypes='callToAction'>Buy Now</Button>
        </article>
      </section>
      <section className="h-auto bg-[#ddd] mt-20 n z-10 mb-[100vw]">
        <div className="absolute h-[787.34px] w-screen left-0 bg-inherit"></div>
        <div className="w-full h-[787.34px] overflow-hidden z-10 relative bg-clip-border clip">
          <h2 className={`${FONTS.H2} text-[#333] text-center p-10`}>Common Family</h2>
          <div className="flex flex-row justify-center items-start w-full px-40 py-10 gap-10">
            {/* <Carousel plants={commonFamilyPlants} /> */}
          </div>
        </div>
      </section>
    </div>
  )
}