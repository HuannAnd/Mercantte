import Image from "next/image";

import { FONTS } from "@/constants/fonts";

import paths from '@/constants/paths'

import NavBar from "@/app/(widgets)/navbar";

import { Breadcrumb } from "@/components";

import PlantsRepository from "@/repositories/plantsRepositories";

import { Main } from "./(widgets)";


export default async function PlantsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { plant_id } = searchParams;

  const data = await PlantsRepository.getById(plant_id as string);
  const commonFamilyPlants = await PlantsRepository.getAllByFamilyName(data.family);

  return (
    <div className="flex h-auto flex-col w-[1280px] mx-auto">
      <NavBar className="border-b-white mb-8 border-b-2 z-20" />
      <Breadcrumb className="mb-8 px-4 z-20" paths={paths} currentRoute={data.name} />
      <div className="w-screen absolute z-10 left-0 top-0 ">
        <div className="w-full h-[300px] bg-primary" />
        <svg className="z-30" viewBox="0 0 1920 444" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#5D7867" />
        </svg>
      </div>
      <Main data={data} commonFamilyPlants={commonFamilyPlants} />
    </div>
  );
}
