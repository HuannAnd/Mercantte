import Image from "next/image";

import { FONTS } from "@/constants/fonts";

import paths from '@/constants/paths'

import NavBar from "@/app/(widgets)/navbar";
import Info from './info';

import { Button, Carousel, Breadcrumb } from "@/components";

import PlantsRepository from "@/repositories/plantsRepositories";

import { ObjectId } from "mongodb";



export default async function PlantsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { plant_id } = searchParams;

  const data = await PlantsRepository.getById(new ObjectId(plant_id as string));
  const commonFamilyPlants = await PlantsRepository.getAllByFamilyName(data.family);

  return (
    <div className="bg-primary shadow-main h-screen flex flex-col w-[1280px] mx-auto">
      <NavBar className="border-b-white mb-8 border-b-2" />
      <Breadcrumb className="mb-8 px-4" paths={paths} currentRoute={data.name} />
      <svg className="w-screen absolute -z-10 left-0 top-0" viewBox="0 0 1920 443" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#675A46" />
      </svg>
      <section className='flex flex-row gap-10 text-white '>
        <article className='w-[665px] h-[715px] bg-white flex overflow-y-hidden justify-center items-center p-16'>
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
        </article>
        <article className='border-l-2 border-l-white w-[660px] px-10'>
          <Info plant={data} />
          <Button className='w-full' buttonTypes='callToAction'>Buy Now</Button>
        </article>
      </section>
      <section className="h-auto bg-white mt-20 n z-10 mb-[100vw]">
        <div className="absolute h-[787.34px] w-screen left-0 bg-white"></div>
        <div className="w-full overflow-hidden z-10 relative bg-clip-border clip">
          <h2 className={`${FONTS.H2} text-[#333] text-center p-10`}>Common Family</h2>
          <div className="flex flex-row justify-center items-start w-full px-40 py-10 gap-10">
            <Carousel key="huann-carousel" plants={commonFamilyPlants} />
          </div>
        </div>
      </section>
    </div>
  );
}
