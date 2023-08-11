import { MongoClient, Db, Document, Filter, FindOptions, WithId, DeleteOptions, ObjectId, OptionalId } from "mongodb";

import { BaseDocument } from '@/@types/common'

interface Func<T, TResult> {
  (obj: T): TResult;
}

export abstract class BaseRepository<TSchema extends BaseDocument> {
  protected repository: Db;
  protected client: MongoClient;
  protected collectionName: string;

  constructor(collectionName: string) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;

    if (!uri) {
      throw new Error("The enviroment variable NEXT_PUBLIC_MONGODB_URL is undefined");
    }

    this.repository = new MongoClient(uri).db('mercantte');
    console.log('uri',uri)
    this.client = new MongoClient(uri);
    this.collectionName = collectionName;
  }

  private async getData<T>(action: Func<Db, Promise<T>>): Promise<T> {
    try {
      console.log('connecting')
      await this.client.connect();
      console.log('connection opened')
      var repository = this.client.db('mercantte')
      return await action(repository)
    } catch (error) {
      const err = error as Error

      console.log('Deu ruim', err.message)
      throw err
    }
    finally {
      await this.client.close();
      console.log('connection closed')
    }
  }

  protected async getById(id: string): Promise<TSchema | undefined> {
    const _id = new ObjectId(id);
    
    var result = await this.getData<TSchema | undefined>(async (dataBase: Db) => {
      console.log('inside getData', dataBase)
      const collection = dataBase.collection<TSchema>(this.collectionName);
      const result = await collection.findOne({ _id } as Filter<TSchema>);
  
      return this.serialize(result);
    });
    
    console.log('result', result)
    
    return result;

    // const collection = this.repository.collection<TSchema>(this.collectionName);
    // const result = await collection.findOne({ _id } as Filter<TSchema>);

    // return this.serialize(result);
  }

  protected async getAll(filter?: Filter<TSchema>, options?: FindOptions<TSchema>): Promise<TSchema[]> {
    var result = await this.getData<TSchema[]>(async (database: Db) => {
      const collection = database.collection<TSchema>(this.collectionName);
      console.log("collection: ", collection);
      

      const data = await collection.find(filter as Filter<Document>, options).toArray();
      console.log('data: ',data)
      
      const serialized =  data.map(x => this.serialize(x)!)
      console.log('serialized: ', serialized)
      return serialized
    })

    // const data = await collection.find(filter as Filter<Document>, options).toArray();

    return result;
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
}