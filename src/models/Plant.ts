import mongoose from "mongoose"

import { PlantDocument } from "@/@types/plant";

export const plantSchema = new mongoose.Schema<PlantDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  family: { type: String, required: true },
  care_details: { type: String, require: true },
  image_url: String,
  irrigation_details: String,

});

const Plant = mongoose.model<PlantDocument>('Plants', plantSchema);
export default Plant;