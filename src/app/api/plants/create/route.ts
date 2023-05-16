import addingNewPlantToMongoDB from "@/utils/addingNewPlantToMongoDb";

import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const data = addingNewPlantToMongoDB();

  if (!data) return NextResponse.json({ success: false });

  return NextResponse.json({ success: true, data });
}