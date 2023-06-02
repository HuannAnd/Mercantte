import cron from "node-cron";

import handleHostedService from "./utils/handleHostedService";


const timeToExecute = 3;
let remainingMinutes = timeToExecute;

console.log("Program is running");

cron.schedule("0-59 * * * *", () => {
  if (remainingMinutes === 0) {
    console.log('Executed');

    handleHostedService();
    remainingMinutes = timeToExecute;
  }

  console.log(`Missing ${remainingMinutes} minutes to add a new plant`);
  remainingMinutes--;
});