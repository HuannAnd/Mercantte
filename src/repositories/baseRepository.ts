import { MongoClient, Db, Document, Filter, FindOptions, WithId, DeleteOptions, ObjectId } from "mongodb";
import { BaseDocument } from '@/@types/common'

// O T enviado tem que vir no formato Document do mongo por isso o extends Document, entendi sua ideia. Aqui a gente tá trabalhando, por enquanto somente com 
// o schema Plant, porém, caso exista uma collection User, por exemplo, isso se generalizará para User também. Permitindo que a gente trabalhe com várias coleções.

/*
  Toda BaseRepository recebe um T que será um Model que fará as operações do banco. 
*/
export abstract class BaseRepository<TSchema extends BaseDocument> {
  protected repository: Db;
  protected collectionName: string;

  constructor(collectionName: string) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;

    if (!uri) {
      throw new Error("The enviroment variable NEXT_PUBLIC_MONGODB_URL is undefined");
    }

    this.repository = new MongoClient(uri).db('mercantte');
    this.collectionName = collectionName;
  }

  protected async findById(id: ObjectId): Promise<TSchema | undefined> {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    const result = await collection.findOne({}, { projection: { id: id } });

    return this.serialize(result);
  }

  protected async findAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    const data = await collection.find(filter as Filter<Document>, options).toArray();

    return data.map(x => this.serialize(x)!);
  }

  protected async add(data: TSchema): Promise<void> {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    await collection.insertOne(data as any);
  }

  protected async remove(filter: Filter<TSchema>, options?: DeleteOptions) {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    await collection.deleteOne(filter as Filter<Document>, options);
  }

  private serialize(notSerializedPlant?: WithId<Document> | WithId<TSchema> | null): TSchema | undefined {
    if (!notSerializedPlant) return undefined;

    return { ...notSerializedPlant, _id: notSerializedPlant._id.toString() } as TSchema;
  }
}