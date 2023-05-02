import Image from "next/image";

import { FONTS } from "@/constants/fonts";

import { PathType } from "@/@types/breadcrumbPaths";

import NavBar from "@/app/navbar";
import Info from './plant-info';

import { Button, Carousel, Breadcrumb } from "@/components";

import {
  getPlantData,
  convertImageToBase64,
  getPlantDetailsWithPlantId,
  getSimillarsFamilyPlants,
  getPlantInfo
} from "@/utils";
import { PlantIdBody } from "@/@types/plantId";


export default async function PlantsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // get the params from URL
  const { plant_id } = searchParams

  // Essencials plant data
  const plantData = await getPlantData(plant_id?.toString());
  const familyName = plantData.family.name;
  const plantURLImage = plantData.image_url


  // get all family plants to show in Carousel component
  const commonFamilyPlants = await getSimillarsFamilyPlants(familyName);

  // Navbar content
  const paths: PathType[] = [
    { label: "Home", value: "" },
    { label: "Our Plants", value: "/", htmlElementId: "#products" },
    { label: plantData.scientific_name, value: "" },
  ]

  // encode to get the data on post request 
  const base64Image = await convertImageToBase64(plantURLImage);
  const { suggestions } = await getPlantDetailsWithPlantId(base64Image) as PlantIdBody;
  const plantInformation = suggestions.find((x) => x.plant_name.toUpperCase() === plantData.scientific_name.toUpperCase());

  if (!plantInformation) {
    throw new Error('plant information not exist, or not founded');

  }

  const { description, family, watering, copyrightLicense } = getPlantInfo(plantInformation);

  return (
    <div className='bg-[#A18F74] shadow-main h-screen flex flex-col w-[1280px] mx-auto'>

      <NavBar className="border-b-white mb-8 border-b-2" />
      <Breadcrumb className="mb-8 px-4" paths={paths} />

      <svg className="w-screen absolute -z-10 left-0 top-0" viewBox="0 0 1920 443" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#675A46" />
      </svg>


      <section className='flex flex-row gap-10 text-white '>
        <article className='w-[665px] h-[715px] bg-white flex overflow-y-hidden justify-center items-center p-16'>
          {plantData?.image_url && (
            <Image
              className="w-full bg-blend-multiply mix-blend-multiply"

              src={plantData.image_url}
              alt={`${plantData?.scientific_name}`}

              width={200}
              height={300}

              priority
            />
          )}
        </article>

        <article className='border-l-2 border-l-white w-[660px] px-10'>
          <Info
            name={plantData.scientific_name}
            description={description}
            family={family}
            watering={watering}
            copyrightLicense={copyrightLicense}
          />

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
