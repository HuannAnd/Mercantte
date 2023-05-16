"use client";

import { HTMLAttributes, useMemo } from 'react';

import Image from 'next/image';

import { FONTS } from '@/constants/fonts'

import { Button, CondionTerm } from '@/components';

import { useContactForm } from '@/hooks/useContactForm';
import { spawn } from 'child_process';



type ContactProps = HTMLAttributes<HTMLDivElement>

export default function Contact({ className, ...props }: ContactProps) {
  // de useContactForm irei tirar as máscaras além dos handles para cara input
  const {
    isWrong,
    handleOnSubmit,
    handleInputName,
    handleInputEmail,
    handleInputPhone,
    handleOnClick
  } = useContactForm();


  return (
    <div {...props} className={`${className} grid shadow-[0px_0px_0px_100vmax_#8A9CA0] h-auto p-10 clip-around grid-col-1 w-full my-16 bg-secondary`}>
      <div className='left-0 absolute bg-inherit h-inherit w-screen -z-10'></div>
      <div className='flex flex-row my-auto'>
        <div className='w-[600px]'>
          <h1 className={`${FONTS.H1} text-white flex-[7] mb-4`}>Stay tuned for our news</h1>
          <form onSubmit={handleOnSubmit} className="flex-[5] w-[520px]" action="">
            <label className='mb-2 block text-white' htmlFor="user-name">First Name *</label>
            <input
              name='user-name'
              type="text"
              aria-label='name input'
              onChange={handleInputName}
              className='block mb-4 px-5 py-3 w-full rounded-lg'
              placeholder='First Name'
            />

            <div className='grid grid-cols-4 gap-4 w-full mb-8'>
              <div className='col-span-2'>
                <label className='mb-2 text-white' htmlFor="user-email">Email Address</label>
                {isWrong && <span className='text-[12px] inline-block text-red-600'>Verifify your email address </span>}
                <input
                  name='user-email'
                  aria-label='email input'
                  onChange={handleInputEmail}
                  className='mt-2 px-5 py-3 w-full rounded-lg'
                  placeholder="name@mail.com"
                  type="text"
                />
              </div>
              <div className='col-span-2'>
                <label className='mb-2 text-white' htmlFor="">Phone Number</label>
                {isWrong && <span className='text-[12px] inline-block text-red-600'>Verifify your phone number</span>}
                <input
                  name='user-phone'
                  aria-label='phone input'
                  className='mt-2 px-5 py-3 w-full rounded-lg'
                  onChange={handleInputPhone}
                  placeholder="(99) 9 999-9999"
                  maxLength={11}
                  type="tel"
                />
              </div>
            </div>
            <CondionTerm className='mb-8' onClick={handleOnClick} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minima recusandae maxime sint provident adipisci autem temporibus quisquam, voluptates labore nulla excepturi
            </CondionTerm>
            <Button className='w-full bg-primary' buttonTypes='callToAction'>Submit</Button>
          </form>
        </div>
        <div aria-label='items' className='flex-[1] relative'>
          <div className='bg-primary w-[216px] h-[281px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
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