import { BaseRepository } from "./baseRepository";

import { ProgressDocument } from "@/@types/progress";

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
    const time = new Date().getHours();
    const timeOnDatabase = (await super.getAll({ key: 'plant' }))[0].time;

    if (time < timeOnDatabase) {
      return false
    }

    return true;
  }

  async createRuntimeSchedule() {
    const time = new Date().getTime();
    const newTime = time + 20 * 60 * 1000; // 20 minutes 

    await this.update({ key: "plant" }, { $set: { time: newTime } })

  }
}

export default new ProgressRepository();