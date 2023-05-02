export interface PlantIdBody {
  id: number
  custom_id: any
  meta_data: MetaData
  uploaded_datetime: number
  finished_datetime: number
  images: Image[]
  suggestions: Suggestion[]
  modifiers: any[]
  secret: string
  fail_cause: any
  countable: boolean
  feedback: any
  is_plant_probability: number
  is_plant: boolean
}

export interface MetaData {
  latitude: any
  longitude: any
  date: string
  datetime: string
}

export interface Image {
  file_name: string
  url: string
}

export interface Suggestion {
  id: number
  plant_name: string
  plant_details: PlantDetails
  probability: number
  confirmed: boolean
  similar_images: SimilarImage[]
}

export interface PlantDetails {
  common_names?: string[]
  edible_parts?: string[]
  propagation_methods?: string[]
  synonyms?: string[]
  taxonomy?: Taxonomy
  url?: string
  wiki_description?: WikiDescription,
  watering?: Watering,
  wiki_image?: WikiImage
  scientific_name?: string
  structured_name?: StructuredName
}

export interface Taxonomy {
  class: string
  family: string
  genus: string
  kingdom: string
  order: string
  phylum: string
}

export interface WikiDescription {
  value: string
  citation: string
  license_name: string
  license_url: string
}

export interface Watering {
  min: number,
  max: number
}

export interface WikiImage {
  value: string
  citation: string
  license_name: string
  license_url: string
}

export interface StructuredName {
  genus: string
  species?: string
}

export interface SimilarImage {
  id: string
  similarity: number
  url: string
  url_small: string
  citation?: string
  license_name?: string
  license_url?: string
}
