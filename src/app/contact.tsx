"use client";

import { HTMLAttributes } from 'react';

import { FONTS } from '@/constants/fonts'

import { Button } from '@/components';

type ContactProps = HTMLAttributes<HTMLDivElement>

export default function Contact({ className, ...props}: ContactProps  ) {
  return (
    <div {...props} className={`${className} shadow-breakout mb-[100vh] flex justify-center items-center w-full h-[800px] my-16 bg-primary`}>
      <div className='left-0 absolute bg-primary w-screen h-[800px] -z-10'></div>
      <div className='block my-auto'>
        <h1 className={`${FONTS.H1} text-white flex-[7] mb-4`}>Add your email, for send tou you notifications about new</h1>
        <form className="flex-[5] w-[520px]" action="">
          <label className='mb-2 block text-white' htmlFor="">Email</label>
          <input className='block mb-4 px-5 py-3 w-full rounded-lg' placeholder="Email" type="text" />

          <label className='mb-2 block text-white' htmlFor="">Phone</label>
          <input className='block mb-8 px-5 py-3 w-full rounded-lg' placeholder="Phone number" type="text" />

          <div className='flex flex-row items-start gap-2 mb-8'>
            <input className='inline-block' type="checkbox" name="" id="" />
            <span className={`${FONTS.SMALL} text-white`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minima recusandae maxime sint provident adipisci autem temporibus quisquam, voluptates labore nulla excepturi
            </span>
          </div>

          <Button className='w-full' buttonTypes='callToAction'>Submit</Button>
        </form>

      </div>
    </div >
  )
}