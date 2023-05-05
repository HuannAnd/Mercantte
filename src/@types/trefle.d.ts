export interface TrefleBody {
  data: PlantData[]
  meta: Meta
}

export interface PlantData {
  id: number
  common_name: string
  slug: string
  scientific_name: string
  year: number
  bibliography: string
  author: string
  status: string
  rank: string
  family_common_name: string
  genus_id: number
  observations: string
  vegetable: boolean
  image_url: string
  genus: string
  family: Family
  duration: any
  edible_part: string[]
  edible: boolean
  images: Images
  common_names: CommonNames
  distribution: Distribution
  distributions: Distributions
  flower: Flower2
  foliage: Foliage
  fruit_or_seed: FruitOrSeed
  sources: Source[]
  specifications: Specifications
  synonyms: Synonym[]
  growth: Growth
  links: Links3
}

export interface Images {
  flower: Flower[]
  leaf: Leaf[]
  habit: Habit[]
  bark: Bark[]
  other: Other[]
  fruit: Fruit[]
  "": GeneratedType[]
}

export interface Flower {
  id: number
  image_url: string
  copyright: string
}

export interface Leaf {
  id: number
  image_url: string
  copyright: string
}

export interface Habit {
  id: number
  image_url: string
  copyright: string
}

export interface Bark {
  id: number
  image_url: string
  copyright: string
}

export interface Other {
  id: number
  image_url: string
  copyright: string
}

export interface Fruit {
  id: number
  image_url: string
  copyright: string
}

export interface GeneratedType {
  id: number
  image_url: string
  copyright: string
}

export interface CommonNames {
  spa: string[]
  por: string[]
  fra: string[]
  eng: string[]
  dan: string[]
  swe: string[]
  nor: string[]
  deu: string[]
  ita: string[]
  cos: string[]
  pol: string[]
  est: string[]
  ara: string[]
  hin: string[]
  sqi: string[]
  fin: string[]
  lit: string[]
  lav: string[]
  nld: string[]
  en: string[]
  af: string[]
  sq: string[]
  ar: string[]
  hy: string[]
  az: string[]
  ba: string[]
  eu: string[]
  be: string[]
  bg: string[]
  my: string[]
  ca: string[]
  zh: string[]
  cv: string[]
  co: string[]
  hr: string[]
  cs: string[]
  da: string[]
  nl: string[]
  eo: string[]
  et: string[]
  fi: string[]
  fr: string[]
  gl: string[]
  de: string[]
  el: string[]
  gn: string[]
  he: string[]
  hi: string[]
  hu: string[]
  is: string[]
  io: string[]
  ga: string[]
  it: string[]
  kk: string[]
  ko: string[]
  lv: string[]
  lt: string[]
  mk: string[]
  ms: string[]
  ml: string[]
  se: string[]
  no: string[]
  nb: string[]
  nn: string[]
  os: string[]
  pa: string[]
  ps: string[]
  fa: string[]
  pl: string[]
  pt: string[]
  "pt-br": string[]
  ro: string[]
  ru: string[]
  sc: string[]
  sr: string[]
  sd: string[]
  sk: string[]
  es: string[]
  sv: string[]
  "zh-tw": string[]
  tg: string[]
  ta: string[]
  tr: string[]
  uk: string[]
  ur: string[]
  cy: string[]
}

export interface Distribution {
  native: string[]
  introduced: string[]
}

export interface Distributions {
  native: Native[]
  introduced: Introduced[]
}

export interface Native {
  id: number
  name: string
  slug: string
  tdwg_code: string
  tdwg_level: number
  species_count: number
  links: Links
}

export interface Links {
  self: string
  plants: string
  species: string
}

export interface Introduced {
  id: number
  name: string
  slug: string
  tdwg_code: string
  tdwg_level: number
  species_count: number
  links: Links2
}

export interface Links2 {
  self: string
  plants: string
  species: string
}

export interface Flower2 {
  color: string[]
  conspicuous: boolean
}

export interface Foliage {
  texture: string
  color: string[]
  leaf_retention: any
}

export interface FruitOrSeed {
  conspicuous: boolean
  color: string[]
  shape: any
  seed_persistence: any
}

export interface Source {
  last_update: string
  id: string
  name: string
  url?: string
  citation?: string
}

export interface Specifications {
  ligneous_type: any
  growth_form: string
  growth_habit: string
  growth_rate: string
  average_height: AverageHeight
  maximum_height: MaximumHeight
  nitrogen_fixation: any
  shape_and_orientation: any
  toxicity: any
}

export interface AverageHeight {
  cm: any
}

export interface MaximumHeight {
  cm: any
}

export interface Synonym {
  id: number
  name: string
  author: string
  sources: Source2[]
}

export interface Source2 {
  last_update: string
  id: string
  name: string
  url: string
  citation: string
}

export interface Links4 {
  self: string
  division_order: string
  genus: string
}

export interface Family {
  id: number
  name: string
  common_name: string
  slug: string
  links: Links4
}


export interface Growth {
  description: any
  sowing: any
  days_to_harvest: any
  row_spacing: RowSpacing
  spread: Spread
  ph_maximum: number
  ph_minimum: number
  light: number
  atmospheric_humidity: number
  growth_months: any
  bloom_months: string[]
  fruit_months: any
  minimum_precipitation: MinimumPrecipitation
  maximum_precipitation: MaximumPrecipitation
  minimum_root_depth: MinimumRootDepth
  minimum_temperature: MinimumTemperature
  maximum_temperature: MaximumTemperature
  soil_nutriments: number
  soil_salinity: number
  soil_texture: any
  soil_humidity: any
}

export interface RowSpacing {
  cm: any
}

export interface Spread {
  cm: any
}

export interface MinimumPrecipitation {
  mm: any
}

export interface MaximumPrecipitation {
  mm: any
}

export interface MinimumRootDepth {
  cm: any
}

export interface MinimumTemperature {
  deg_f: any
  deg_c: any
}

export interface MaximumTemperature {
  deg_f: any
  deg_c: any
}

export interface Links3 {
  self: string
  plant: string
  genus: string
}

export interface Meta {
  images_count: number
  sources_count: number
  synonyms_count: number
  last_modified: string
}
