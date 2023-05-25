import { WithId, Document, ObjectId } from "mongodb"
import { BaseDocument } from '@/@types/common'

export type PlantDocument = BaseDocument & {
  id: string,
  name: string,
  family: string,
  description: string,
  image_url: string,
  care_details: string,
  irrigation_details: string,
}



