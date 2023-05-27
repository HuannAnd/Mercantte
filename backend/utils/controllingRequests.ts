import ProgressRepository from "@/repositories/progressRepository";

const requestLimit = 10;

export default async function controllingRequests(requestNum: number) {
  if (requestNum >= requestLimit) {
    await ProgressRepository.createRuntimeSchedule();

    throw new Error("The next execution can only be done in 20 minutes");

  }
}