import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";

import UserRepository from "@/repositories/usersRepository";
import { User } from "@/@types/user";

import { formatEmail, formatPhone } from '@/utils'
import { addUser } from "@/app/(actioners)/user";
import { Unbounded } from "next/font/google";
import axios from "axios";


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
  const [term, setTerm] = useState<boolean>(false);


  // Está recebendo o input e jogando na função formatEmail
  const handleOnClick = () => {
    setTerm(!term);

  }

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
    console.log("action");
    event.preventDefault();


    if (!validationFunctions.validate() || !name) {
      setIsWrong(true);
      console.log("Invalid");

      return
    }

    const user: User = {
      name,
      email,
      phone
    }

    setEmail(undefined);
    setPhone(undefined);
    setName(undefined);

    fetch("http://localhost:3000/api/users", {
      body: JSON.stringify(user),
    })

    setIsWrong(false);
  }

  // Irá adicionar o user deve ocorrer no server essa ação pois chama o MongoClient.

  return {
    isWrong,
    name,
    email,
    phone,
    term,
    handleInputEmail,
    handleInputPhone,
    handleOnSubmit,
    handleInputName,
    handleOnClick
  }
}