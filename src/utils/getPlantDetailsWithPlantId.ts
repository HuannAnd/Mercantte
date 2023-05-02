import { PlantIdBody } from "@/@types/plantId";
import { PLANT_ID_URL } from "@/constants/baseURLs";
import { log } from "console";

// Deprecated

export async function getPlantDetailsWithPlantId(base64Image?: string) {
  try {
    if (!base64Image) {
      return null;
    }

    const plantIdBody = {
      api_key: `${process.env.NEXT_PUBLIC_PLANT_ID_KEY}`,
      images: [base64Image],
      plant_language: "en",
      plant_details: [
        "wiki_description",
        "taxonomy",
        "propagation_methods",
        "watering"
      ],
    }

    const res = await fetch(`${PLANT_ID_URL}/identify`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantIdBody),
    })

    const json = await res.json().catch((err) => {
      console.error(err);
      console.log(res);
    })

    console.log(res);


    return json as PlantIdBody

  } catch (error) {
    console.error(error)
  }
}