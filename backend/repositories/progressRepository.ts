import { BaseRepository } from "./BaseRepository";

import { ProgressDocument } from "../@types/progress";
import { SCHEDULE_TIME } from "../constants/schedule";

class ProgressRepository extends BaseRepository<ProgressDocument> {
  constructor() {
    super("Progress");
  }

  async updateProgress() {
    const progressOnDb = await this.getProgress();
    console.log("The current progress is " + progressOnDb);

    await this.update({ key: "plant" }, { $set: { value: progressOnDb + 1 } });

    console.log("The progress on mongoDb is: " + progressOnDb);
  }

  async getProgress(): Promise<number> {
    const progress = await super.getAll({ key: 'plant' });

    return progress[0].value;
  }

  async canBeStarted(): Promise<boolean> {
    const time = Date.now();
    console.log(time);
    const timeOnDatabase = (await super.getAll({ key: 'plant' }))[0].time;
    console.log(timeOnDatabase);

    if (time < timeOnDatabase) {
      return false
    }

    return true;
  }

  async createRuntimeSchedule() {
    const timeNow = new Date().getTime();
    const newTime = timeNow + SCHEDULE_TIME * 60 * 1000;

    await this.update({ key: "plant" }, { $set: { time: newTime } })

  }
}

export default new ProgressRepository();