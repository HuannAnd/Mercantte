

export interface ProgressRepository {
  canBeStart(): Promise<boolean>,
  updateProgress(): Promise<void>,
  getNexPlantId(): Promise<number>
}

