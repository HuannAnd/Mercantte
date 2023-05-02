import { TREFLE_BASE_URL } from "@/constants/baseURLs";


export async function getSimillarsFamilyPlants(familyName = "12") {
  try {
    const body = await fetch(`${TREFLE_BASE_URL}/plants?token=${process.env.NEXT_PUBLIC_API_TREFLE_KEY}&filter[family_name]=${familyName}`)
    const { data } = await body.json();

    return data

  } catch (error) {
    console.error(error)
  }
}