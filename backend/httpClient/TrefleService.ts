import { TrefleBody } from "../@types/trefle";
import TrefleHttpClient from "./TrefleHttpClient";

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

  async getPLantsDetails(): Promise<{ family: string, name: string, image_url: string }[]> {
    const trefleData = await TrefleHttpClient.get<TrefleBody>(`${resource}/plants?token=${token}`);
    const plantsDetails = trefleData.data.map(x => {
      return { name: x.scientific_name, family: x.family, image_url: x.image_url }
    });

    return plantsDetails;
  },

  async getDetailsOfRandomPlant(): Promise<{ family: string, name: string, image_url: string }> {
    const plants = await TrefleHttpClient.get<TrefleBody>(`${resource}/plants?token=${token}`);
    const plantsDetails = plants.data.map(x => {
      return { name: x.scientific_name, family: x.family, image_url: x.image_url }
    });

    return plantsDetails[Math.floor(Math.random() * plantsDetails.length)]
  }
}