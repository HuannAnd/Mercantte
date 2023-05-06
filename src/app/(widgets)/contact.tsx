"use client";

import { ChangeEvent, FormEvent, HTMLAttributes, useState } from 'react';

import Image from 'next/image';

import { FONTS } from '@/constants/fonts'

import { Button } from '@/components';

type ContactProps = HTMLAttributes<HTMLDivElement>

export default function Contact({ className, ...props }: ContactProps) {
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();


  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);

  }

  function validatePhone(phone: string): boolean {
    const phoneRegex = /^(\d{2})(\d{1})(\d{4})(\d{4})$/;

    return phoneRegex.test(phone);
  }

  function validate(e: FormEvent<HTMLFormElement>) {
    e.stopPropagation();

    if (!email || !phone) {
      return false
    }

    return validateEmail(email) && validatePhone(phone);
  }

  function formatPhone(phone: string) {
    const regexToPhone = /^(\d{2})(\d{1})(\d{4})(\d{4})$/

    return phone.replace(regexToPhone, "($1) $2 $3-$4");
  }

  function maskingInputValue(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    const phoneFormatted = formatPhone(target.value);

    setPhone(phoneFormatted);
  }

  return (
    <div {...props} className={`${className} mb-[100vh] w-full h-[800px] my-16 bg-secondary`}>
      <div className='left-0 absolute bg-inherit w-screen h-[800px] -z-10'></div>
      <div className='flex flex-row my-auto'>
        <div className='w-[600px]'>
          <h1 className={`${FONTS.H1} text-white flex-[7] mb-4`}>Add your email, for send tou you notifications about new</h1>
          <form onSubmit={validate} className="flex-[5] w-[520px]" action="">
            <label className='mb-2 block text-white' htmlFor="">Email</label>
            <input
              className='block mb-4 px-5 py-3 w-full rounded-lg'
              placeholder="Email"
              type="text"
            />

            <label className='mb-2 block text-white' htmlFor="">Phone</label>
            <small>{phone}</small>
            <input
              className='block mb-8 px-5 py-3 w-full rounded-lg'
              pattern='^\(\d{2}\) \d{4}-\d{4}$'

              onChange={maskingInputValue}
              value={phone}

              placeholder="(99) 9 999-9999"
              maxLength={11}
              type="tel"
            />

            <div className='flex flex-row items-start gap-2 mb-8'>
              <input className='inline-block' type="checkbox" name="" id="" />
              <span className={`${FONTS.SMALL} text-white`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minima recusandae maxime sint provident adipisci autem temporibus quisquam, voluptates labore nulla excepturi
              </span>
            </div>

            <Button className='w-full' buttonTypes='callToAction'>Submit</Button>
          </form>

        </div>
        <div aria-label='items' className='flex-[1] relative'>
          <div className='bg-primary w-[216px] h-[281px] absolute top-[232px] left-1/2 -translate-x-1/2'>
            <Image
              className='absolute object-contain scale-125 w-[356px] h-[384px] top-[129px] right-[96px]'
              src="/icons/benefit-image4.jpg"
              alt='Plant image'

              width={356}
              height={384}

              priority
            />

            <Image
              className='absolute object-contain w-[280px] h-[280px]  bottom-[204px] left-[128px]'
              src="/icons/benefit-image3.jpg"
              alt='Plant image'

              width={280}
              height={280}

              priority
            />

          </div>
        </div>

      </div>
    </div >
  )
}