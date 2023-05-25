"use client";

import { ChangeEvent, FormEvent, MutableRefObject, ReactNode, useRef, useState } from "react";

import { User } from "@/@types/user";

import { formatEmail, formatPhone } from '@/utils'
import sendingUserToDatabase from "@/utils/sendingUserToDatabase";
import validateForm from "@/utils/validateForm";

import { ERRORS_CONTACT } from "@/constants/errors";


export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [warns, setWarns] = useState<ERRORS_CONTACT[]>([]);

  const [name, setName] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [term, setTerm] = useState<boolean>(false);

  const handleTermCLick = () => {
    setTerm(!term);
  }

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    console.log(value);

    setEmail(value);
  }

  const handleInputPhone = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    value = value.replace(/[a-zA-Z]/g, "");
    console.log(value);


    if (e.currentTarget.maxLength >= 11) {
      setPhone(value);
      e.currentTarget.value = formatPhone(value);
      return
    }

    setPhone(value);
    console.log(phone);
  }

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;

    if (value.length > 20) {

    }

    value = value.replace(/\d/g, "");
    e.currentTarget.value = value;

    setName(value);
  }

  const handleFormErrors = (error: ERRORS_CONTACT): ERRORS_CONTACT | null => {
    if (warns.includes(error)) {
      return error
    }
    return null
  }

  const clearInputs = () => {
    if (formRef) {
      formRef.current?.reset();
      setTerm(false);
    }
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault();

      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      const { isValid, warnings } = validateForm(term, name, email, phone);

      if (warnings.length !== 0 && !isValid) {
        setWarns(warnings);
        setIsSubmitting(false);

        return;
      }

      const user: User = {
        name: name!,
        email,
        phone
      }

      await sendingUserToDatabase(user);

      clearInputs();
      setIsSubmitting(false);
      setWarns([]);
    } catch (error) {
      const err = (error as Error).message;
      console.error("Error: ", err);

      if (ERRORS_CONTACT.PHONE_OR_EMAIL_SIGNED.includes(err)) {
        setWarns([ERRORS_CONTACT.PHONE_OR_EMAIL_SIGNED])
      }
      
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    formRef,
    buttonRef,
    handleFormErrors,
    handleInputEmail,
    handleInputPhone,
    handleOnSubmit,
    handleInputName,
    handleTermCLick
  }
}