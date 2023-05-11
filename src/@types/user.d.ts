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

export type User = {
  name: string
  email?: string,
  phone?: string
}