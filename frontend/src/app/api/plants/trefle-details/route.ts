import TrefleService from "@/httpClient/TrefleService";

import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    const plantsDetails = await TrefleService.getPLantsDetails();

    return NextResponse.json({ data: plantsDetails });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error to fetch data." });
  }
}
