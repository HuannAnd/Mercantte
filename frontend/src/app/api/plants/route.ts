import { NextRequest, NextResponse } from "next/server";

import PlantsRepository from "@/services/repositories/PlantsRepositories";
import TrefleService from "@/services/httpClient/TrefleService";

// TODO: Iniciar a ideia do POST para o banco de dados
export async function GET(request: Request) {
  try {
    const data = await PlantsRepository.getAll();

    if (!data) {
      throw new Error("The plants collection is empty");
    }

    return NextResponse.json({ message: "Success", data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error to connect to MongoDB database" })

  }
}

// rota: /api/plants?plant_name=...
export async function POST(request: Request) {
  try {
    const plant = await request.json();

    if (!plant) return NextResponse.json({ message: "The request must be body estructures", success: false });

    const plantTrefleDetails = await TrefleService.getDetailsOfRandomPlant();
    const plantDetailsOfGPT = await fetch("/api/plants/gpt-copyright?plant_name=" + plantTrefleDetails.name);

    const newPlant = { ...plantTrefleDetails, ...plantDetailsOfGPT };

    await PlantsRepository.add(newPlant);

    // a estrutura do body do POST: 
    // const body = {
    //   name: plantName,
    //   description,
    //   careDetails,
    //   irrigationDetails,
    //   watering_details: wateringDetails,
    //   ...
    // }

    // if (searchParams.has("plant_name")) {
    //   if (!plantName) {
    //     return NextResponse.json({
    //       message: "The plant_name param is null or undefined",
    //       error: true,
    //     });
    //   }
    //   // coletando os dados para fazer o POST, dados que precisam do body
    //   const description = await getPlantDescription(plantName);
    //   const careDetails = await getPlantCareDetails(plantName);
    //   const irrigationDetails = await getPlantIrrigationsDetails(plantName);

    //   // 





    // }




  } catch (error) {

  }


}