"use client";

import { HTMLAttributes, useRef } from 'react';

import Image from 'next/image';

import { FONTS } from '@/constants/fonts'

import { Button, CondionTerm, FormError } from '@/components';

import { useContactForm } from '@/hooks/useContactForm';
import { ERRORS_CONTACT } from '@/constants/errors';


type ContactProps = HTMLAttributes<HTMLDivElement>

export default function Contact({ className, ...props }: ContactProps) {
  const {
    isSubmitting,
    formRef,
    handleOnSubmit,
    handleInputName,
    handleInputEmail,
    handleInputPhone,
    handleTermCLick,
    handleFormErrors
  } = useContactForm();


  return (
    <div {...props} className={`${className} grid shadow-[0px_0px_0px_100vmax_#8A9CA0] h-auto p-10 clip-around grid-col-1 w-full my-16 bg-secondary`}>
      <div className='grid lg:grid-cols-2 lg:grid-rows-1 my-auto sm:grid sm:grid-rows-2'>
        <div className='w-[600px] sm:mx-auto lg:order-1 sm:order-2'>
          <h1 className={`${FONTS.H1} text-white flex-[7] mb-4`}>Stay tuned for our news</h1>
          <form ref={formRef} onSubmit={handleOnSubmit} className="flex-[5] w-[520px]" action="">
            <div className='mb-4'>
              <label className='mb-2 block text-white' htmlFor="user-name">First Name *</label>
              <input
                name='user-name'
                type="text"
                maxLength={20}
                aria-label='name input'
                onChange={handleInputName}
                className='block px-5 py-3 w-full rounded-lg'
                placeholder='First Name'
              />
              <FormError error={handleFormErrors(ERRORS_CONTACT.EMPTY_NAME_INPUT)} />
            </div>
            <div className='grid grid-cols-4 gap-4 w-full mb-8'>
              <div className='col-span-2'>
                <label className='mb-2 text-white' htmlFor="user-email">Email Address</label>
                <input
                  name='user-email'
                  aria-label='email input'
                  maxLength={50}
                  onChange={handleInputEmail}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  className='mt-2 px-5 py-3 w-full rounded-lg'
                  placeholder="name@mail.com"
                  type="email"
                />
                <FormError error={handleFormErrors(ERRORS_CONTACT.WRONG_EMAIL_FORMAT)} />
              </div>
              <div className='col-span-2'>
                <label className='mb-2 text-white' htmlFor="">Phone Number</label>
                <input
                  name='user-phone'
                  aria-label='phone input'
                  className='mt-2 px-5 py-3 w-full rounded-lg'
                  onChange={handleInputPhone}
                  placeholder="(99) 9 9999-9999"
                  maxLength={11}
                  type="tel"
                />
                <FormError error={handleFormErrors(ERRORS_CONTACT.WRONG_PHONE_FORMAT)} />
              </div>
            </div>
            <div className='mb-8'>
              <FormError error={handleFormErrors(ERRORS_CONTACT.EMPTY_CONTACT_INPUTS)} />
              <FormError error={handleFormErrors(ERRORS_CONTACT.ACCEPT_TERMS_AND_CONDITIONS)} />
              <CondionTerm onClick={handleTermCLick} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minima recusandae maxime sint provident adipisci autem temporibus quisquam, voluptates labore nulla excepturi
              </CondionTerm>
              <FormError error={handleFormErrors(ERRORS_CONTACT.PHONE_OR_EMAIL_SIGNED)} />
            </div>
            <Button disabled={isSubmitting} className='w-full bg-primary disabled:brightness-75' buttonTypes='callToAction'>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
        <div aria-label='items' className='flex-[1] relative sm:order-1 lg:order-2'>
          <div className='bg-primary w-[216px] h-[281px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <Image
              className='absolute object-contain scale-125 top-[129px] right-[96px]'
              src="/icons/benefit-image4.jpg"
              alt='Plant image'
              width={356}
              height={384}
              priority
            />
            <Image
              className='absolute object-contain bottom-[204px] left-[128px]'
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