import { OPENAI_BASE_URL } from '@/constants/baseURLs'

export default async function (plantName: string) {
  const prompt = `Create a description of ${plantName} that is at least 10 lines long.`;
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
  const data = await response.json();
  return data.choices[0].text.trim();
}
