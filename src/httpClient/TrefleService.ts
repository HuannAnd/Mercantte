import { PlantData, TrefleBody } from "@/@types/trefle";
import TrefleHttpClient from "./TrefleHttpClient";

const token = process.env.NEXT_PUBLIC_API_TREFLE_KEY
const resource = '/v1'

export default {
    async getSimillarsFamilyPlants(familyName = "12"): Promise<any> {
        return TrefleHttpClient.get(`${resource}/plants?token=${token}&filter[family_name]=${familyName}`);
    },

    async getPlantNames(): Promise<string[]> {
        const trefleData = await TrefleHttpClient.get<TrefleBody>(`${resource}/plants?token=${token}`);
        const names = trefleData.data.map(x => x.scientific_name);

        return names;
    }
}