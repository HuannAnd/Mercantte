import handleTrefleErrorRequest from "../utils/handleTrefleErrorRequest";
import { TrefleRetrieveBody } from "../@types/trefle";
import TrefleHttpClient from "./TrefleHttpClient";

import { config } from 'dotenv'
import axios, { AxiosError } from "axios";
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
    console.log("getPlanyById executed");
    try {
      const trefleData = await TrefleHttpClient.get<TrefleRetrieveBody>(`${resource}/plants/${id}?token=${token}`)
      console.log(trefleData);

      if (!trefleData) {
        throw new Error("TrefleData does not exist");
      }

      const { scientific_name, image_url, family } = trefleData.data;

      if (!image_url) {
        console.log("That plant does not contain image");

        return null;
      }

      const plantDetails = {
        name: scientific_name,
        family: family.name,
        image_url
      }

      return plantDetails;

    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.data) {
        await handleTrefleErrorRequest(axiosError);
      }

      console.log(axiosError);
    }
  },
}