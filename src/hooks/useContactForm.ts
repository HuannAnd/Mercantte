import { ChangeEvent, FormEvent, useState } from "react";

import UserRepository from "@/repositories/usersRepository";
import { User } from "@/@types/user";

import { formatEmail, formatPhone } from '@/utils'


interface ValidationFunctions {
  validateEmail: (email: string) => boolean;
  validatePhone: (phone: string) => boolean;
  validate: (email?: string, phone?: string) => boolean;
}

const validationFunctions: ValidationFunctions = {
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validatePhone: (phone: string): boolean => {
    const phoneRegex = /^(\d{2})(\d{1})(\d{4})(\d{4})$/;
    return phoneRegex.test(phone);
  },

  validate: (email?: string, phone?: string): boolean => {
    if (!email || !phone) {
      return false;
    }
    return validationFunctions.validateEmail(email) && validationFunctions.validatePhone(phone);
  }
};


export function useContactForm() {
  // Valor usado para o Ui componente de Contact.tsx
  const [isWrong, setIsWrong] = useState(false);

  // Variavéis do form 
  const [name, setName] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();


  // Está recebendo o input e jogando na função formatEmail
  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;

    setEmail(email);
    e.currentTarget.value = formatEmail(email);
  }

  const handleInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.currentTarget.value

    e.currentTarget.value = formatPhone(phone);
  }

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    setName(value);
  }

  // O erro de dns acontece pois isso é uma operação no server, logo pela versão 13 do next 
  // deve conter "use server" no body da função
  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.stopPropagation();

    if (!(validationFunctions.validate()) || !name) {
      setIsWrong(true);
      return
    }

    const user: User = {
      name,
      email,
      phone
    }

    await addUser(user);
    setIsWrong(false);
  }

  // Irá adicionar o user deve ocorrer no server essa ação pois chama o MongoClient.
  async function addUser(user: User) {
    "use server";

    await UserRepository.add(user);
  }

  return {
    isWrong,
    name,
    email,
    phone,
    handleInputEmail,
    handleInputPhone,
    handleOnSubmit,
    handleInputName
  }
}