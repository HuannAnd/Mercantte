import { AxiosResponse } from "axios";
import { BaseHttpClient } from "./BaseHttpClient";
import { OpenAiCompletionResponse } from "@/@types/openai";

class OpenAiHttpClient extends BaseHttpClient {
  constructor() {
    super("htpps://api.openai.com");
  }

  public getText(response: any): string {
    return response.choices[0].text;
  }
}

export { OpenAiHttpClient };
export default new OpenAiHttpClient();

