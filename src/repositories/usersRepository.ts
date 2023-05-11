import { ObjectId } from "mongodb";
import { BaseRepository } from "./baseRepository";

import { UserDocument, User } from "@/@types/user";

//Esse repository vai lidar com os usuários do Hero.
class UserRepository extends BaseRepository<UserDocument> {
  constructor() {
    super('Users');
  }

  public async add(data: User): Promise<void> {
    // Possível erro de dns pode estar aqui
    if (!this.hasAlreadySigned(data.email, data.phone)) {
      return //verificando se o usuário já existe no banco de dados
    }

    // Ou também aqui 
    await super.add(data);
  }

  private async hasAlreadySigned(email?: string, phone?: string) {
    if (email) {
      const user = super.getAll({ email: email });

      if (!user) return false

      return true;
    }
    if (phone) {
      const user = super.getAll({ phone: phone });

      if (!user) return false

      return true;
    }
  }

  public getById(id: string): Promise<UserDocument | undefined> {
    const user = super.getById(id);
    return user;
  }

  public async getAll() {
    const users = super.getAll();
    return users;
  }
}

export default new UserRepository();