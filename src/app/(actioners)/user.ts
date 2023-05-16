"use server";

import { User } from "@/@types/user";

import UserRepository from "@/repositories/usersRepository";

export async function addUser(user: User) {
  await UserRepository.add(user);
}

