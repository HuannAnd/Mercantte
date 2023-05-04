import { OPENAI_BASE_URL } from '@/constants/baseURLs'

// TODO: Fazer um trycatch para todas as funcões getPlant***() para lidar melhor com os erros.

export default async function getPlantCareDetails(plantName: string) {
  try {
    const prompt = `What are some things to keep in mind when caring for ${plantName}?`;
    const response = await fetch(OPENAI_BASE_URL + "/engines/text-davinci-002/completions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        max_tokens: 1024,
        n: 1,
        stop: '\n'
      }),
    });

    //TODO: fazer a analise da response que chega aqui, estourar um erro caso for nula.

    const data = await response.json();
    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error to use the OPENAI API");
  }
}