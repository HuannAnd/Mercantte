import { NextRequest, NextResponse } from "next/server";

import PlantsRepository from "@/repositories/plantsRepositories";


 import { PlantDocument } from "@/@types/plant";
import { WithId } from "mongodb";

// TODO: Iniciar a ideia do POST para o banco de dados

export async function GET(request: Request) {
  try {
    const { searchParams, pathname } = new URL(request.url);

    //Se quando usado o parâmetro family_name se ele existe então a API entende que está fazendo a requisição das familias
    //para um request na rota: /api/plants/family?family_name=...
    console.log("passou aqui")
    if (pathname.includes("/family")) {
      if (searchParams.has("family_name")) {
        const familyName = searchParams.get("family_name");
        const data = await PlantsRepository.getAllByFamilyName(familyName!);

        return NextResponse.json({ message: 'Success', data });
      }

      return NextResponse.json({
        message: 'that request not exist the famiy_name parameter, please put in',
        error: true
      });
    }

    //caso nenhuma rota seja expecificada teremos um GET de todas as plantas no banco de dados
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
    const { searchParams } = new URL(request.url);
    const plantName = searchParams.get("plant_name");

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