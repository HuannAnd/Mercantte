import { WithId, ObjectId } from 'mongodb';
import { BaseRepository } from './baseRepository'
import { PlantDocument } from '@/@types/plant';

class PlantsRepository extends BaseRepository<PlantDocument> {
  constructor() {
    super('Plants');
  }

  public async add(newPlant: any): Promise<void> {
    const collection = this.repository.collection('plants');
    await collection.insertOne(newPlant);
  }

  // Essa função será usada na rota: app/plants/page.tsx , para carregar o conteúdo desta página
  public async getById(id: ObjectId): Promise<PlantDocument> {
    const plant = await this.findById(id);

    if (!plant) {
      throw new Error("Error to get that plant, please check the provided id");
    }

    return plant;
  }

  public async getAll(): Promise<WithId<PlantDocument>[]> {
    const collection = this.repository.collection<PlantDocument>(this.collectionName);
    const allPlants = collection.find().toArray();

    return allPlants;
  }

  public async getAllByFamilyName(familyName: string) {
    const plants = await this.findAll({}, { projection: { familyName: familyName } });

    if (plants.length === 1) {
      console.info("Does not exist another plant in the same family");
    }

    return plants;
  }

  public async delete() {
    await this.remove({ family: 'Vicente' });
  }
}

export default new PlantsRepository();