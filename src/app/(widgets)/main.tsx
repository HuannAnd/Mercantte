"use client";

import { ReactNode } from 'react';
import { Avaliations, Contact, Summary } from '@/app/(sections)'
import { useScrollEffect } from '@/hooks';


type MainProps = {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  const y = useScrollEffect(0.45, 200, 1500);

  return (
    <main className='w-full h-auto' style={{ marginTop: `${y}px` }}>
      <Summary />
      {children}
      <Contact id="contact" />
      <Avaliations />
    </main>
  )
}