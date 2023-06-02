import ProgressRepository from "../repositories/progressRepository";

import addingNewPlantToMongoDB from "./addingNewPlantToMongoDb";

import { ERRORS_HOSTED_SERVICE } from "../constants/errors";

export default async function handleHostedService() {
  try {
    const canBeStarted = await ProgressRepository.canBeStarted();
    console.log(canBeStarted);

    if (!canBeStarted) {
      console.log("Not possible to started");

      return;
    }

    await addingNewPlantToMongoDB();
  } catch (error) {
    const errorMessage = (error as Error).message;

    if (errorMessage === ERRORS_HOSTED_SERVICE.COULDNT_FIND) {
      console.log("Error: Couldn't find");

      handleHostedService();
      return;
    }

    if (errorMessage === ERRORS_HOSTED_SERVICE.LIMIT_REQUESTS_EXCEDEED) {
      console.log("Error: Limit requests exceeded");
      throw new Error(ERRORS_HOSTED_SERVICE.LIMIT_REQUESTS_EXCEDEED);
    }

    console.error(error);
  }
}