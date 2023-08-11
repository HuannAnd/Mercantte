import { MongoClient, Db, Document, Filter, FindOptions, WithId, DeleteOptions, ObjectId, OptionalId } from "mongodb";

import { BaseDocument } from '@/@types/common'
import { Collection } from "mongoose";

interface Func<T, TResult> {
  (obj: T): TResult;
}

export abstract class BaseRepository<TSchema extends BaseDocument> {
  protected repository: Collection<TSchema> | null;
  protected client: MongoClient;
  protected collectionName: string;

  constructor(collectionName: string) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;

    if (!uri) {
      throw new Error("The enviroment variable NEXT_PUBLIC_MONGODB_URL is undefined");
    }

    this.collectionName = collectionName;
    this.repository = new MongoClient(uri).db('mercantte').collection<TSchema>(this.collectionName) as any;
    console.log('uri', uri)
    this.client = new MongoClient(uri);
  }

  public async createLifetimeConnection() {
    await this.client.connect();
    this.repository = this.client.db('mercantte').collection<TSchema>(this.collectionName) as any
  }
  public async closeLifetimeConnection() {
    await this.client.close();
    this.repository = null
  }

  protected async getById(id: string): Promise<TSchema | undefined> {
    if (!this.repository) return

    const _id = new ObjectId(id);
    const plant = await this.repository.findOne({ _id } as any);

    return this.serialize(plant)
  }

  protected async getAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
    const plants = await (this.repository!).find(filter as Filter<Document>, options).toArray();

    return plants.map(x => this.serialize(x)!)
  }

  protected async add(data: TSchema | OptionalId<TSchema>): Promise<void> {
    await (this.repository!).insertOne(data as any)
  }

  protected async delete(filter: Filter<TSchema>, options?: DeleteOptions) {
    await (this.repository!).deleteOne(filter as Filter<Document>, options);
  }

  private serialize(notSerializedPlant?: WithId<Document> | WithId<TSchema> | null): TSchema | undefined {
    if (!notSerializedPlant) return undefined;

    return { ...notSerializedPlant, _id: notSerializedPlant._id.toString() } as TSchema;
  }
}