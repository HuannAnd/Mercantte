import cron from "node-cron";

import addingNewPlantToMongoDB from "./utils/addingNewPlantToMongoDb";

const minutesToPlant = 3;
let remainingMinutes = minutesToPlant;



console.log("Program is running");

cron.schedule("0-59 * * * *", () => {
  const syncFuntion = async () => {
    await addingNewPlantToMongoDB();
  }

  if (remainingMinutes === 0) {
    console.log('Executed');

    syncFuntion();
    remainingMinutes = minutesToPlant;
  }

  console.log(`Missing ${remainingMinutes} minutes to add a new plant`);
  remainingMinutes--;
});
