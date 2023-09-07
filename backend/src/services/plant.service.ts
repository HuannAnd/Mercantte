import { ProgressRepository } from '../domain/repositories/progress.repository'
import { TrefleRepository } from "../domain/repositories/trefle.repository"
import { PlantRepository } from "../domain/repositories/plant.repository"
import { GptRepository } from "../domain/repositories/gpt.repository"

export class PlantService {
  constructor(
    private plantRepository: PlantRepository,
    private trefleRepository: TrefleRepository,
    private progressRepository: ProgressRepository,
    private gptRepository: GptRepository,
  ) { }


  async execute() {
    const canBeStart = await this.progressRepository.canBeStart()

    if (!canBeStart) {
      this.progressRepository.updateProgress()
      return
    }

    // busca no max 10 plantas

    const nextPlantId = await this.progressRepository.getNexPlantId()

    const newPlant = await this.trefleRepository.getPlantById(nextPlantId)

    const plantAlreadyExists = await this.plantRepository.getPlantById(newPlant.id)

    if (plantAlreadyExists) return

    const plantInfo = await this.gptRepository.getPlantInfoByName()


    // planta infos = gpt
    // base plant = trefle

    // sua planta = base plant + planta infos



    // caso nao tenha vc busca as infos

    // salva as plantas


  }



}


    // se a planta tem imagem


// const plantservice = new PlantService(





// );