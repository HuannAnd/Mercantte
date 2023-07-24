"use client";

import { useRef } from 'react'

import { Profile } from "@/components";

import { FONTS_STYLED } from "@/constants/fonts";
import avaliators from "@/constants/avaliators";

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';


export default function Avaliations() {
  const avaliationRef = useRef(null);

  const [isVisualized] = useIntersectionObserver(avaliationRef);

  return (
      <section
        ref={avaliationRef}
      id='avaliations'
      className="w-full block duration-1000 h-auto mb-20"
      style={{ opacity: `${isVisualized ? '1' : '0'}` }}
    >
      <div className="p-10">
        <h2
          className="text-center text-dark duration-1000"
          style={{
            transform: `translateY(${isVisualized ? 0 : -100}%)`,
            ...FONTS_STYLED.h1
          }}
        >Avaliations</h2>
        <p
          className='text-dark-white text-center'
          style={{
            transform: `translateY(${isVisualized ? 0 : -100}%)`,
            ...FONTS_STYLED.body
          }}
        >Hear What Our Clients Have to Say!</p>
      </div>
      <div className="grid lg:grid-cols-[320px_320px_320px] md:grid-cols-[320px_320px] sm:grid-cols-[320px] justify-center gap-8 items-center">
        {avaliators.map((user) => <Profile key={user.name} user={user} />)}
      </div>
    </section>
  );
}