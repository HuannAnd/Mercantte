import TrefleHttpClient from "./TrefleHttpClient";

const token = process.env.NEXT_PUBLIC_API_TREFLE_KEY
const resource = '/v1/plants'

export default {
    async getSimillarsFamilyPlants(familyName = "12"): Promise<any> {
        return TrefleHttpClient.get(`${resource}?token=${token}&filter[family_name]=${familyName}`)
    }
}