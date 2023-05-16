import Image from "next/image";

import { FONTS } from "@/constants/fonts";

import paths from '@/constants/paths'

import NavBar from "@/app/(widgets)/navbar";

import { Button, Carousel, Breadcrumb, Explain } from "@/components";

import PlantsRepository from "@/repositories/plantsRepositories";
import PlantImage from "./(widgets)/PlantImage";


export default async function PlantsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { plant_id } = searchParams;

  const data = await PlantsRepository.getById(plant_id as string);
  const commonFamilyPlants = await PlantsRepository.getAllByFamilyName(data.family);

  return (
    <div className="h-screen flex flex-col w-[1280px] mx-auto">
      <NavBar className="border-b-white mb-8 border-b-2" />
      <Breadcrumb className="mb-8 px-4" paths={paths} currentRoute={data.name} />
      <div className="w-screen absolute -z-10 left-0 top-0 ">
        <div className="w-full h-[300px] bg-primary" />
        <svg className="" viewBox="0 0 1920 444" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#5D7867" />
        </svg>
      </div>
      <section className='flex flex-row gap-10 text-white mb-10'>
        <PlantImage image={data.image_url} />
        {/* <article className='w-[665px] h-[715px] bg-secondary flex overflow-y-hidden justify-center items-center p-16'>
          {data?.image_url && (
            <Image
              className="w-full bg-blend-multiply mix-blend-multiply"

              src={data.image_url}
              alt={`${data.image_url}`}

              width={200}
              height={300}

              priority
            />
          )}
        </article> */}
        <article className='border-l-2 border-l-white w-[660px] px-10'>
          <h2 className={`${FONTS.H1}`}>{data.name}</h2>
          <h3 className="text-[48px] uppercase tracking-widest mb-8 text-white/70">{data.family}</h3>
          <div className='mb-8'>
            <Explain theme="light" isOpen className="block mb-4" label="Description" value={data.description} />
            <Explain theme="dark" className="block mb-4 text-dark" label="Irrigation details" value={data.irrigation_details} />
          </div>
          <small className='ml-8 block mb-8 text-dark-white'>{data.care_details}</small>
          <Button className='w-full' buttonTypes='callToAction'>Buy Now</Button>
        </article>
      </section>
      <section className="h-auto bg-[#444] shadow-[0_0_0_100vmax_#444] clip-around mt-20 n z-10 mb-[100vw]">
        <h2 className={`${FONTS.H1} text-[#fff] text-center p-10`}>Common Family</h2>
        <div className="flex flex-row justify-center items-start w-full px-40 py-10 gap-10">
          <Carousel plants={commonFamilyPlants} />
        </div>
      </section>
    </div>
  );
}
