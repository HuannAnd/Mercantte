import Image from "next/image"

import { Button } from "@/components"

import { FONTS } from "@/constants/fonts"
import { spawn } from "child_process"

export default function LoadingPlantPage() {


  return (
    <div className='bg-[#A18F74] shadow-main h-screen flex flex-col w-[1280px] mx-auto'>

      {/* <NavBar className="border-b-white mb-8 border-b-2" />
      <Breadcrumb className="mb-8 px-4" paths={paths} /> */}

      <section className='flex flex-row gap-10 text-white '>
        <article className='mix-blend-multiply w-[665px] h-[715px] bg-white flex overflow-y-hidden justify-center items-center p-16'>
          <Image
            className="w-full bg-blend-multiply invert"
            src="/dark-plant.jpg"
            alt="empty plant"


            width={200}
            height={300}

            priority
          />
        </article>

        <article className='border-l-2 border-l-white w-[660px] px-10'>
          <h2 className={`${FONTS.H2} mb-8`}>
            <span
              className="bg-white h-[64px] w-full inline-block animate-pulse rounded-md"
              style={{
                animationDelay: `0.05s`,
                animationDuration: '1s',
              }}
            ></span>
          </h2>
          <strong className='mb-4 block'>Description</strong>
          <p className='ml-8 mb-8 gap-4 '>
            {[1, 0.7, 1, 1, 0.5].map((ratio: number, index: number) => (
              <span
                className="bg-white h-[20px] w-full inline-block animate-pulse rounded-md"
                key={index}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animationDuration: '1s',
                  width: `${ratio * 100}%`
                }}
              ></span>
            ))}
          </p>
          <strong className='mb-4 block'>Features</strong>
          <p className="ml-8 mb-8">
            {[0.3, 0.4, 0.2].map((ratio: number, index: number) => (
              <span
                className="bg-white h-[20px] w-full block mb-1 animate-pulse rounded-md"
                key={index}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animationDuration: '1s',
                  width: `${ratio * 100}%`
                }}
              ></span>
            ))}
          </p>
          <small className='ml-8 block mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum natus officiis dolorum accusamus a nesciunt cupiditate id. Consequatur minus ipsa
          </small>

          <Button className='w-full disabled:text-slate-300 disabled:bg-secondary/70' buttonTypes='callToAction' disabled>Buy Now</Button>
        </article>
      </section>

      <section className="h-auto bg-white mt-20 n z-10 mb-[100vw]">
        <div className="absolute h-[787.34px] w-screen left-0 bg-white"></div>

        <div className="w-full overflow-hidden z-10 relative bg-clip-border clip">
          <h2 className={`${FONTS.H2} text-[#333] text-center p-10`}>Common Family</h2>
          <div className="flex flex-row justify-center items-start w-full px-40 py-10 gap-10">

          </div>

        </div>

      </section>

    </div>
  )
}