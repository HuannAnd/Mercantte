import { WithId, Document, ObjectId } from "mongodb"
import { BaseDocument } from '@/@types/common'

export type UserContact = (
  { email: string; phone?: never; } | // tem email, não tem phone
  { email?: never; phone: string; } | // tem phone, não tem email
  { email: string; phone: string; }   // tem email e phone
)

export type UserDocument = BaseDocument & {
  _id: string,
  name: string,
  email?: string,
  phone?: string
}

// arbitrariamente usaremos esse type, porém podemos pegar esse type e usar para o próprio UserDocument. Como não temos a feature de cadastro, usaremos esse aqui,
// para mostrar "avaliadores"(bots).
export type UserAvaliator = {
  name: string
  email: string,
  image?: string,
  comment: string,
  rate: number
}

export type User = {
  name: string
  email?: string,
  phone?: string
}