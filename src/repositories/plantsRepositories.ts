import { ObjectId } from 'mongodb';

import { BaseRepository } from './baseRepository'

import { PlantDocument } from '@/@types/plant';


class PlantsRepository extends BaseRepository<PlantDocument> {
  constructor() {
    super('Plants');
  }

  public async add(newPlant: any): Promise<void> {
    super.add(newPlant);
  }

  public async getById(id: string): Promise<PlantDocument> {
    const plant = await super.getById(id);

    if (!plant) {
      throw new Error("Error to get that plant, please check the provided id");
    }

    return plant;
  }

  public async getAll(): Promise<PlantDocument[]> {
    return super.getAll();
  }

  public async thatPlantAlreadyExists(plantName: string) {
    const plants = await super.getAll({ name: plantName });

    if (plants.length >= 1) return true;

    return false;
  }

  public async getAllByFamilyName(family: string) {
    const plants = await super.getAll({ family });

    if (plants.length === 1) {
      console.info("Does not exist another plant in the same family");
    }

    return plants;
  }

  public async delete() {
    await super.delete({ family: 'Vicente' });
  }
}

export default new PlantsRepository();