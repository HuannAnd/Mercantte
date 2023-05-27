import verifingStatus from "@/utils/verifingStatus";
import { TrefleBody, TrefleRetrieveBody } from "../@types/trefle";
import TrefleHttpClient from "./TrefleHttpClient";

import ProgressRepository from "@/repositories/progressRepository";

import { config } from 'dotenv'
config();

const token = process.env.NEXT_PUBLIC_API_TREFLE_KEY

if (!token) {
  throw new Error("Expected token is null");
}

const resource = '/v1'

export default {
  async getSimillarsFamilyPlants(familyName = "12"): Promise<any> {
    return TrefleHttpClient.get(`${resource}/plants?token=${token}&filter[family_name]=${familyName}`);
  },

  async getPlantById(id: number) {
    const trefleData = await TrefleHttpClient.getResponse<TrefleRetrieveBody>(`${resource}/plants/${id}?token=${token}`);
    console.log(trefleData.status);

    verifingStatus(trefleData.status);

    const { scientific_name, image_url, family } = trefleData.data.data;

    if (trefleData.data.data && !image_url) {
      console.log("That plant does not contain image");

      return null;
    }

    const plantDetails = {
      name: scientific_name,
      family: family.name,
      image_url
    }

    return plantDetails;
  },

}