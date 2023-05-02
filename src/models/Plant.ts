import mongoose from "mongoose"

export type PlantType = {
  name: string,
  description: string,
  family: string
}

export const plantSchema = new mongoose.Schema<PlantType>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  family: { type: String, required: true }
});

const Plant = mongoose.model<PlantType>('Plants', plantSchema);
export default Plant;