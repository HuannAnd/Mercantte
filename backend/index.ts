import cron from "node-cron";

import addingNewPlantToMongoDB from "@/utils/addingNewPlantToMongoDb";

console.log("Executed");

cron.schedule("*/10 * * * *", async () => {
  console.log("Hello");

});
