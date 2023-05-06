import { MongoClient, Db, Document, Filter, FindOptions, WithId, DeleteOptions, ObjectId } from "mongodb";

import { BaseDocument } from '@/@types/common'


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

  protected async getById(id: ObjectId): Promise<TSchema | undefined> {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    const result = await collection.findOne({}, { projection: { id: id } });

    return this.serialize(result);
  }

  protected async getAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    const data = await collection.find(filter as Filter<Document>, options).toArray();

    return data.map(x => this.serialize(x)!);
  }

  protected async add(data: TSchema): Promise<void> {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    await collection.insertOne(data as any);
  }

  protected async delete(filter: Filter<TSchema>, options?: DeleteOptions) {
    const collection = this.repository.collection<TSchema>(this.collectionName);
    await collection.deleteOne(filter as Filter<Document>, options);
  }

  private serialize(notSerializedPlant?: WithId<Document> | WithId<TSchema> | null): TSchema | undefined {
    if (!notSerializedPlant) return undefined;

    return { ...notSerializedPlant, _id: notSerializedPlant._id.toString() } as TSchema;
  }
}