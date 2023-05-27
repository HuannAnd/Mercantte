import { BaseDocument } from "./common";


export type ProgressDocument = BaseDocument & {
  key: string,
  value: number,
  time: number
}