"use client";

import { ReactNode, HTMLAttributes } from 'react';
import { Avaliations, Contact, Summary } from '@/app/(sections)'
import { useScrollEffect } from '@/hooks';


type MainProps = {
  children: ReactNode,
  speed: number,
  initialPosition: number,
  finalPosition: number
} & HTMLAttributes<HTMLDivElement>

export default function ScrollEffect({
  children,
  speed,
  initialPosition,
  finalPosition,
  ...props
}: MainProps) {
  const y = useScrollEffect(speed, initialPosition, finalPosition);

  return (
    <main {...props} style={{ marginTop: `${y}px` }}>
      {children}
    </main>
  )
}