import UserRepository from "@/repositories/usersRepository";

import { NextResponse } from "next/server";

import { User } from '@/@types/user'
import { log } from "console";
import next from "next/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("user_id");

  if (!userId) return NextResponse.json({ error: true, message: "has not user_id" });

  try {
    const data = await UserRepository.getById(userId);
    console.log(data);

    if (!data) return NextResponse.json({ message: "the provider user not exist", success: true });

    return NextResponse.json({ message: "Success", data, success: true });

  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch data on MongoDB", success: false });
  }


}

export async function POST(request: Request) {
  const data: User = await request.json();

  if (!data) return NextResponse.json({ message: "current data is undefined" });

  await UserRepository.add(data);
  return NextResponse.json({ message: "Hello world", data });
}