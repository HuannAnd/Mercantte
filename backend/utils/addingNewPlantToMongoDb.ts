import { PlantDocument } from "@/@types/plant";

import OpenAIHttpService from "@/httpClient/OpenAiHttpService";
import TrefleService from "@/httpClient/TrefleService";

import PlantRepository from "@/repositories/plantsRepositories";

type TrefleDetails = {
  name: PlantDocument["name"],
  family: PlantDocument["family"],
  image_url: PlantDocument["image_url"]
}

async function checkIfPlantExists(plantName: string) {
  const exist = await PlantRepository.verifingIfPlantExist(plantName);
  return exist;
}

async function createGptPlantDetails(name: string): Promise<[string, string, string]> {
  const description = await OpenAIHttpService.getPlantDescription(name);
  const careDetails = await OpenAIHttpService.getCareDetails(name);
  const irrigationDetails = await OpenAIHttpService.getIrrigationDetails(name);

  return [description, careDetails, irrigationDetails];
}

async function addNewPlantToMongoDB(trefleDetails: TrefleDetails, description: string, careDetails: string, irrigationDetails: string): Promise<void> {
  const newPlant = {
    name: trefleDetails.name,
    family: trefleDetails.family,
    image_url: trefleDetails.image_url,
    description: description.trim(),
    care_details: careDetails.trim(),
    irrigation_details: irrigationDetails.trim(),
  } as PlantDocument;

  await PlantRepository.add(newPlant);
}


export default async function addingNewPlantToMongoDB(): Promise<void> {
  const trefleDetails = await TrefleService.getDetailsOfRandomPlant();
  console.log('Trefle plant details:', trefleDetails);

  const exist = await checkIfPlantExists(trefleDetails.name);
  if (exist) {
    throw new Error("That Plant already exists");
  }

  const [description, careDetails, irrigationDetails] = await createGptPlantDetails(trefleDetails.name);

  console.log('Generated plant details:', { description, careDetails, irrigationDetails });

  await addNewPlantToMongoDB(trefleDetails, description, careDetails, irrigationDetails);
  console.log('Successfully added new plant to MongoDB');
}