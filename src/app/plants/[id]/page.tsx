import { GetServerSidePropsContext, NextPage, NextPageContext } from "next";
import Image from "next/image";

import { FONTS } from "@/constants/fonts";

import { PlantData } from "@/@types/trefle";
import { PathType } from "@/@types/breadcrumbPaths";

import { Button, Product, Carousel, Breadcrumb } from "@/components";

import { TREFLE_BASE_URL } from "@/constants/trefle-base-url";
import NavBar from "@/app/navbar";
import { isConstructorDeclaration } from "typescript";



export async function getPlantData(plantId = "12") {
  try {
    const res = await fetch(`${TREFLE_BASE_URL}/plants/${plantId}?token=${process.env.NEXT_PUBLIC_API_TREFLE_KEY}`);
    const { data } = await res.json();

    return data as PlantData;

  } catch (error) {
    throw new Error("Some error");

  }
}

export async function getSimillarsFamilyPlants(FamilyName = "12") {
  try {
    const body = await fetch(`${TREFLE_BASE_URL}/plants?token=${process.env.NEXT_PUBLIC_API_TREFLE_KEY}&filter[family_name]=${FamilyName}`)
    const { data } = await body.json();

    return data

  } catch (error) {

  }
}


export default async function PlantsPage({
  params,
  searchParams
}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { plant_id } = searchParams

  console.log(params)

  const plantData = await getPlantData(plant_id?.toString());
  const FamilyName = plantData.family.name;

  const commonFamilyPlants = await getSimillarsFamilyPlants(FamilyName);

  const paths: PathType[] = [
    { label: "Home", value: "" },
    { label: "Our Plants", value: "/", htmlElementId: "#products" },
    { label: plantData.scientific_name, value: "" },
  ]

  return (
    <div className='bg-[#A18F74] shadow-main h-screen flex flex-col w-[1280px] mx-auto'>

      <NavBar className="border-b-white mb-8 border-b-2" />
      <Breadcrumb className="mb-8 px-4" paths={paths}  />

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
          <h2 className={`${FONTS.H2} mb-8`}>{plantData?.scientific_name}</h2>
          <strong className='mb-4 block'>Description</strong>
          <p className='ml-8 mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum natus officiis dolorum accusamus a nesciunt cupiditate id. Consequatur minus ipsa provident explicabo optio necessitatibus itaque hic. Quod, eaque quia?
            Ut, molestiae illum doloremque, aliquam cum possimus, repudiandae earum blanditiis quos porro necessitatibus obcaecati debitis harum nisi? Nulla in eveniet quisquam nostrum, hic quam? Error esse natus recusandae expedita corrupti.
          </p>
          <strong className='mb-4 block'>Features</strong>
          <ul className="ml-8 mb-8" >
            <li>Speeds up grow</li>
            <li>Very beatiful</li>
            <li>Compost of lower water</li>
          </ul>
          <small className='ml-8 block mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum natus officiis dolorum accusamus a nesciunt cupiditate id. Consequatur minus ipsa
          </small>

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
