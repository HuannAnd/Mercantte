export interface PlantRepository {


  getPlantById(id: number): Promise<any>;
}