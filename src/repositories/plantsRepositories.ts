import { MongoClient } from 'mongodb';
import { BaseRepository } from './baseRepository'

import Plant from '@/models/Plant';


export class PlantsRepository extends BaseRepository<typeof Plant> {
  constructor() {
    super('plants');
  }

  public async add(newPlant: any): Promise<void> {
    const collection = this.repository.collection('plants');
    await collection.insertOne(newPlant);
  }


  public async get(id: any): Promise<any> {
    return this.getById(id);
  }

  public async getAll() {
    const plants = await Plant.find();

    return plants;
  }

  public async getByFamily(familyName: string) {
    const collection = this.repository.collection('Plants');
    const result = await collection.findOne({ family: familyName });

    return result;
  }

  public async getAllByFamilyName(familyName: string): Promise<any[]> {
    const collection = this.repository.collection(this.collectionName);
    const result = collection.find({ family: familyName });

    return result.toArray()
  }

  public async deletePlant() {
    await this.delete({ family: 'Vicente' });
  }
}