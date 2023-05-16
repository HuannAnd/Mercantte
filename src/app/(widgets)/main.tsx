"use client";

import { ReactNode, useEffect, useState } from 'react';
import { Avaliations, Contact, Sales, Summary } from './'
import { log } from 'console';


type MainProps = {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const fixedMarginTop = 300;
  const fixedPosition = 1600;
  const scrollSpeed = 0.5;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > fixedPosition) {
        setScrollPosition(fixedPosition * scrollSpeed);
        return
      }

      setScrollPosition(currentPosition * scrollSpeed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='w-full h-auto' style={{ marginTop: `${scrollPosition + fixedMarginTop}px` }}>
      <Summary />
      {children}
      <Contact id="contact" />
      <Avaliations />
    </main>
  )
}