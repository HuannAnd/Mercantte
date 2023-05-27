import { PlantDocument } from "../@types/plant";

import OpenAIHttpService from "../httpClient/OpenAiHttpService";
import TrefleService from "../httpClient/TrefleService";

import PlantRepository from "../repositories/plantsRepositories";
import ProgressRepository from "../repositories/progressRepository";
import controllingRequests from "./controllingRequests";

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

async function getTreflePlantDetails(id: number) {
  const plantDetails = await TrefleService.getPlantById(id);

  if (!plantDetails) return null;

  return plantDetails;
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

let requestCounter = 0;
const requestLimit = 10;

export default async function addingNewPlantToMongoDB(): Promise<void> {
  requestCounter++
  console.log('Entering addingNewPlantToMongoDB function');
  console.log(`This is: ${requestCounter}th request`);

  await controllingRequests(requestCounter);
  // if (requestCounter == requestLimit) {



  //   throw new Error("The request limit was reached");
  // }

  const progress = await ProgressRepository.getProgress();
  console.log('Retrieved progress: ', progress);

  const trefleDetails = await getTreflePlantDetails(progress);
  console.log('Retrieved Trefle plant details: ', trefleDetails);

  if (!trefleDetails) {
    console.log('Trefle plant details not found. Updating progress and retrying...');

    await ProgressRepository.updateProgress();

    await addingNewPlantToMongoDB();
    return;
  }

  const exist = await checkIfPlantExists(trefleDetails.name);
  if (exist) {
    console.log("That Plant already exists");

    await ProgressRepository.updateProgress();

    await addingNewPlantToMongoDB();
    return;
  }

  const [description, careDetails, irrigationDetails] = await createGptPlantDetails(trefleDetails.name);

  console.log('Generated plant details:', { description, careDetails, irrigationDetails });

  await addNewPlantToMongoDB(trefleDetails, description, careDetails, irrigationDetails);
  console.log('Successfully added new plant to MongoDB');
  console.clear();
  console.log("Current progress: " + (progress + 1));
  requestCounter = 0;
}