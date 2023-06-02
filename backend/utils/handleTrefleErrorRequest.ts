import { TrefleErrorBody } from "../@types/trefle";
import { ERRORS_HOSTED_SERVICE } from "../constants/errors";
import ProgressRepository from "../repositories/progressRepository";
import { AxiosError } from "axios";

export default async function handleTrefleErrorRequest(error: AxiosError) {
  console.log("Passou aqui", error);

  if (error.response && error.response.status >= 400 && error.response.status <= 499) {
    console.log("Error " + error.status);

    const trefleError = error.response.data as TrefleErrorBody;
    console.log(trefleError);


    if (trefleError.message.includes("Couldn't find Species with")) {
      console.log("Spent here");

      await ProgressRepository.updateProgress();

      throw new Error(ERRORS_HOSTED_SERVICE.COULDNT_FIND);
    }

    throw new Error("Current response of endpoint from Trefle is: " + trefleError.message);
  }
} 