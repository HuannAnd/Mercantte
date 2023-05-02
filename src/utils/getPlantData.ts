import { TREFLE_BASE_URL } from '@/constants/baseURLs'

import { PlantData } from '@/@types/trefle';

export async function getPlantData(plantId = "12") {
  try {
    const res = await fetch(`${TREFLE_BASE_URL}/plants/${plantId}?token=${process.env.NEXT_PUBLIC_API_TREFLE_KEY}`);
    const { data } = await res.json();

    return data as PlantData;

  } catch (error) {
    throw new Error("Some error");

  }
}