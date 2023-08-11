import PlantsRepository from "@/services/repositories/PlantsRepositories";

import ScrollEffect from "@/components/ScrollEffect";

import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/layouts/Navbar"),
  { ssr: true }
)
const Breadcrumb = dynamic(
  () => import("@/components/Breadcrumb"),
  { ssr: true }
)
const PlantSection = dynamic(
  () => import("@/layouts/PlantSection"),
  { ssr: true }
)
const FamilyPlants = dynamic(
  () => import("@/layouts/FamilyPlants"),
  { ssr: true }
)

export default async function PlantsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { plant_id } = searchParams;

  const data = await PlantsRepository.getById(plant_id as string);
  const commonFamilyPlants = await PlantsRepository.getAllByFamilyName(data.family);

  return (
    // <div className="flex flex-col w-[1280px] max-w-[1280px] mx-auto font-inter">
    <>
      {/* <Navbar className="border-b-white mb-8 border-b-2 z-20" /> */}
      <Breadcrumb className="mb-8 px-4 z-20 mt-[20vh] lg:w-auto lg:mx-0 sm:mx-auto sm:block" currentRoute={data.name} />
      <div className="w-screen absolute z-10 left-0 top-0 ">
        <div className="w-full lg:h-[600px] sm:h-[450px] bg-primary after:absolute after:top-20 after:content-[''] after:bg-primary after:left-0 after:right-0 after:bottom-0 " />
        <svg className="z-30 lg:hidden md:hidden sm:visible" viewBox="0 0 1920 444" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#7d8f69" />
        </svg>
      </div>
      <ScrollEffect speed={0.45} initialPosition={300} finalPosition={1000} >
        <PlantSection plant={data} />
        <FamilyPlants plants={commonFamilyPlants} />
      </ScrollEffect>
    </>

    // </div>
  );
}
