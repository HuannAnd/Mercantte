import { ObjectId } from 'mongodb';

import { BaseRepository } from './BaseRepository'

import { PlantDocument } from '@/@types/plant';

import { ERRORS_PLANTS_REPOSITORY } from '@/constants/errors'


class PlantsRepository extends BaseRepository<PlantDocument> {
  constructor() {
    super('Plants');
  }

  public async add<T extends PlantDocument>(newPlant: T): Promise<void> {
    const isExist = await this.verifingIfPlantExist(newPlant.name);

    if (isExist) {
      throw new Error(ERRORS_PLANTS_REPOSITORY.PLANT_EXIST);
    }

    await super.add(newPlant);
  }

  public async getById(id: string): Promise<PlantDocument> {
    const plant = await super.getById(id);

    if (!plant) {
      throw new Error(ERRORS_PLANTS_REPOSITORY.GET_PLANT_BY_ID);
    }

    return plant;
  }

  public async getAll(): Promise<PlantDocument[]> {
    return super.getAll();
  }

  public async verifingIfPlantExist(plantName: string) {
    const plants = await super.getAll({ name: plantName });

    if (plants.length >= 1) return true;

    return false;
  }

  public async getAllByFamilyName(family: string) {
    const plants = await super.getAll({ family });

    if (plants.length === 1) {
      console.info(ERRORS_PLANTS_REPOSITORY.EMPTY_PLANT_FAMILY);
      return [];
    }

    return plants;
  }

  public async delete() {
    await super.delete({ family: 'Vicente' });
  }
}

export default new PlantsRepository();