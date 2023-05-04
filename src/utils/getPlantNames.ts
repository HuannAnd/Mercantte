import { TREFLE_BASE_URL } from '@/constants/baseURLs'

import { PlantData } from '@/@types/trefle';


export async function getPlantNames(): Promise<string[]> {
  try {
    // Aqui o código está acessando uma planta pelo id e retornando os dados dela, faremos o mesmo com nossa API que guardará dados do MongoDB
    /*
    const res = await fetch(`${TREFLE_BASE_URL}/plants/${plantId}?token=${process.env.NEXT_PUBLIC_API_TREFLE_KEY}`);
    const json = await res.json() as TrefleBody;

    const names = json.data.
    */

    // Fazendo a verificação da variáveis de enviroment
    if (!process.env.NEXT_PUBLIC_API_TREFLE_KEY) {
      throw new Error("The TREFLE API is empty");
    }

    //Fazendo o GET da API
    const data = await fetch(TREFLE_BASE_URL + "/plants?token" + process.env.NEXT_PUBLIC_API_TREFLE_KEY, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TREFLE_KEY}`
      },
    });
    const json = await data.json();

    //NOTE: A reponse retornada é desse formato:
    /*
    {
      data: {
        {
          // Dado de uma das planta
        },
        {
          // ...
        }
        
      },
      meta: {
        // Outros dados
      }

    }
    */

    // Coletando somente os nomes em um array
    const plantNames = (json as PlantData[]).map(x => x.scientific_name);
    return plantNames;
  } catch (error) {
    throw new Error("Some error");

  }
}