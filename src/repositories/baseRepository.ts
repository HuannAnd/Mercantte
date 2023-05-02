import { MongoClient, Db, Document, Filter, FindOptions, WithId, DeleteOptions } from "mongodb";


// O T enviado tem que vir no formato Document do mongo por isso o extends Document, entendi sua ideia. Aqui a gente tá trabalhando, por enquanto somente com 
// o schema Plant, porém, caso exista uma collection User, por exemplo, isso se generalizará para User também. Permitindo que a gente trabalhe com várias coleções.
export abstract class BaseRepository<T extends Document> {
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

  protected async getById(id: any) {
    const collection = this.repository.collection(this.collectionName);
    const result = await collection.findOne({ _id: id });

    return result
  }

  protected async getAll(filter: Filter<T>, options?: FindOptions<T>): Promise<WithId<Document>[]> {
    const collection = this.repository.collection(this.collectionName)
    const data = collection.find(filter as Filter<Document>, options)

    return data.toArray()
  }

  protected async add(data: T): Promise<void> /*Promise<InsertOneResult<Document?>>*/ {
    const collection = this.repository.collection(this.collectionName);
    await collection.insertOne(data);

  }


  protected async delete(filter: Filter<T>, options?: DeleteOptions) {
    const collection = this.repository.collection(this.collectionName);
    await collection.deleteOne(filter as Filter<Document>, options);

  }
}