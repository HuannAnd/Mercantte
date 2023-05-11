import UserRepository from "@/repositories/usersRepository";
import { NextResponse } from "next/server";

import { User } from '@/@types/user'


export async function POST(request: Request) {
  const data: User = await request.json();

  return NextResponse.json({ message: "Hello world" });

  try {
    const user = request.body;
    await UserRepository.add(user);

    return NextResponse.json({ message: "The user has added", success: true })

  } catch (error) {
    return NextResponse.json({ message: "Error to add that user", success: false })
  }

}