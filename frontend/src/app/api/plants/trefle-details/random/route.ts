import TrefleService from "@/httpClient/TrefleService";
import { NextResponse } from "next/server";


export async function GET(request: Request, response: Response) {
  try {
    const plant = await TrefleService.getDetailsOfRandomPlant();

    return NextResponse.json({ data: plant });
  } catch (error) {
    return NextResponse.json({ message: "failed to fetch data" });
  }
}