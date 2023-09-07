import { BaseRepository } from "./BaseRepository";

import { UserDocument, User } from "@/@types/user";

import { ERRORS_USERS_REPOSITORY } from "@/constants/errors"

//Esse repository vai lidar com os usuários do Hero.
class UserRepository extends BaseRepository<UserDocument> {
  constructor() {
    super('Users');
  }

  public async add(user: User): Promise<void> {
    const isSigned = await this.verifingIfUserExist(user.email, user.phone);
    if (isSigned) {
      throw new Error(ERRORS_USERS_REPOSITORY.EMAIL_OR_PHONE_SIGNED);
    }

    // Ou também aqui 
    await super.add(user);
  }

  private async verifingIfUserExist(email?: string, phone?: string): Promise<boolean> {
    if (email || phone) {
      const users = await super.getAll({ $or: [{ email }, { phone }] });

      if (users.length >= 1) return true

      return false;
    }
    throw new Error("Email and phone is does not exist");
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