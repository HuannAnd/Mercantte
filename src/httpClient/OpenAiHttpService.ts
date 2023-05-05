import OpenAiHttpClient, { OpenAiHttpClient as OpenAiHttpCLientConstructor } from "./OpenAiHttpClient";

const resource = "/v1";

export class OpenAIHttpService extends OpenAiHttpCLientConstructor {
  private options = this.createAuthHeader(process.env.NEXT_PUBLIC_API_OPENAI_KEY);

  async getPlantDescription(plantName: string): Promise<string> {
    const prompt = `Create a description of ${plantName} that is at least 10 lines long.`;
    const data = {
      model: 'text-davinci-002',
      prompt,
      max_tokens: 1024,
      
    }
    
    const description = await OpenAiHttpClient.post(`${resource}/completions`, data, this.options).then(this.getText);
    return description;
  }

  async getCareDetails(plantName: string): Promise<string> {
    const prompt = `What are some things to keep in mind when caring for ${plantName}?`;
    const data = {
      model: 'text-davinci-002',
      prompt,
      max_tokens: 1024,
    }

    const careDetails = await OpenAiHttpClient.post(`${resource}/completions`, data, this.options).then(this.getText);
    return careDetails;
  }

  async getIrrigationDetails(plantName: string): Promise<string> {
    const prompt = `Write some details about the irrigation requirements for ${plantName}.`;
    const data = {
      model: 'text-davinci-002',
      prompt,
      max_tokens: 1024,
    }

    const irrigationDetails = await OpenAiHttpClient.post(`${resource}/completions`, data, this.options).then(this.getText);
    return irrigationDetails;
  }
} 

export default new OpenAIHttpService();