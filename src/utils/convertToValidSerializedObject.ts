import { WithId, Document } from "mongodb";

// Essa função converte um documento para uma prop que pode ser serializada, pois em WithId<Document>
export default function convertToValidSerializedObject(notSerializedPlant: WithId<Document>) {
  const newPlant = {...notSerializedPlant, _id: notSerializedPlant._id.toString()};

  return newPlant;
}