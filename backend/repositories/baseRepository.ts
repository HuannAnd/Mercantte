import { MongoClient, Db, Document, Filter, FindOptions, WithId, DeleteOptions, ObjectId, OptionalId, UpdateFilter } from "mongodb";

import { BaseDocument } from '../@types/common'

import { config } from "dotenv";

config();


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

  protected async getById(id: string): Promise<TSchema | undefined> {
    const _id = new ObjectId(id);

    const collection = this.repository.collection<TSchema>(this.collectionName);
    const result = await collection.findOne({ _id } as Filter<TSchema>);

    return this.serialize(result);
  }

  protected async getAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
    const collection = this.repository.collection<TSchema>(this.collectionName);

    const data = await collection.find(filter as Filter<Document>, options).toArray();

    return data.map(x => this.serialize(x)!);
  }

  protected async add(data: TSchema | OptionalId<TSchema>): Promise<void> {
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

  public async update(filter: Filter<TSchema>, newValue: UpdateFilter<TSchema>) {
    const collection = this.repository.collection(this.collectionName);

    const result = await collection.updateOne(filter as Filter<Document>, newValue);

    console.log(`${result.modifiedCount} document(s) updated`);
  }
}