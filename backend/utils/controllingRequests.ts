import { ERRORS_HOSTED_SERVICE } from "../constants/errors";
import ProgressRepository from "../repositories/progressRepository";

export default async function controllingRequests(requestNum: number, requestLimit: number) {
  if (requestNum >= requestLimit) {
    await ProgressRepository.createRuntimeSchedule();

    throw new Error(ERRORS_HOSTED_SERVICE.LIMIT_REQUESTS_EXCEDEED);
  }
}