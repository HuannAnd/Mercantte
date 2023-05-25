import { PlantDocument } from "@/@types/plant";
import { Carousel } from "@/components";
import { FONTS } from "@/constants/fonts";

type FamilyPlantsProps = {
  plants: PlantDocument[]
}

export default function FamilyPlants({
  plants
}: FamilyPlantsProps) {
  if (plants.length === 0) return null

  return (
    <section className="h-auto bg-[#5D7867] shadow-[0_0_0_100vmax_#5D7867] clip-around mt-20 n z-10 mb-[100vw]">
      <h2 className={`${FONTS.H1} text-[#fff] text-center p-10`}>Common Family</h2>
      <div className="flex flex-row justify-center items-start w-full px-40 py-10">
        <Carousel className="flex flex-row items-center justify-center grid-rows-1 h-[300px]" plants={plants} />
      </div>
    </section>
  )
}