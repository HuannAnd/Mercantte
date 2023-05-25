import { BaseHttpClient } from "./BaseHttpClient";

class OpenAiHttpClient extends BaseHttpClient {
  constructor() {
    super("https://api.openai.com");
  }

  public getText(response: any): string {
    return response.choices[0].text;
  }
}

export { OpenAiHttpClient };
export default new OpenAiHttpClient();

