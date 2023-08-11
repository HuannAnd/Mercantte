import { NextApiRequest } from "next"

import { NextResponse } from "next/server";

import PlantsRepositories from "@/services/repositories/PlantsRepositories"


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url!);
  const family_name = searchParams.get("family_name");
  console.log(family_name);

  if (!family_name) {
    return NextResponse.json({ message: "family_name param doesnt exist", success: false });
  }
  if (typeof family_name === "string") {
    try {
      const data = await PlantsRepositories.getAllByFamilyName(family_name);
      return NextResponse.json({ message: "Are the data family", data, success: true });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error to get family", success: false });
    }
  }

  return NextResponse.json({ message: "family_name type is not a string", success: false });
}




