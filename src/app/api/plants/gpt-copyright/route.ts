import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import findParam from "@/utils/findParam";

import OpenAiHttpService from "@/httpClient/OpenAiHttpService";

// Para pegar a response: /api/plants/gpt-copyright?plant_name=avenca;
export async function GET(request: NextApiRequest) {
  const obj = findParam(request, "plant_name");
  console.log(obj)

  if (!obj.exist && obj?.param) {
    return NextResponse.json({ message: "The param does not exist" });
  }
  if (typeof obj?.param !== "string") {
    return NextResponse.json({ message: "The specified param not contain your type correctly" });
  }

  try {
    // Error 429 Too many Requests, possíveis causas são a quantidade de tokens ou RPM 
    const description = await OpenAiHttpService.getPlantDescription(obj?.param);
    // const careDetails = await OpenAiHttpService.getCareDetails(obj?.param);
    // const irrigationDetails = await OpenAiHttpService.getIrrigationDetails(obj?.param);

    const data = {
      description,
      // careDetails,
      // irrigationDetails
    }

    return NextResponse.json({ message: "It the data", data, success: true })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error to get gpt responses", success: false })
  }

}

