"use client";

import { HTMLAttributes, useRef } from 'react'

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type ApresentationProps = HTMLAttributes<HTMLDivElement>

export default function Apresentation(props: ApresentationProps) {
  const apresentationRef = useRef(null);

  const [isVisualized] = useIntersectionObserver(apresentationRef);
  const basicDelay = 300;


  return (
    <div {...props}>
      <div
        className="bg-secondary duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl w-[220px] h-[250px] "
        ref={apresentationRef}
        style={{
          opacity: `${isVisualized ? 1 : 0}`,
          filter: `blur(${isVisualized ? 0 : 10}px)`,
        }}
      >
        <Image
          className="object-contain duration-1000 absolute h-[251px] w-[219px] right-[192px] bottom-[144px]"
          src="/benefits/1.jpg"
          alt="Plant image"
          width={250}
          height={250}
          style={{
            transform: `translateX(${isVisualized ? 0 : 100}%)`,
            opacity: `${isVisualized ? 1 : 0}`,
            filter: `blur(${isVisualized ? 0 : 10}px)`,
            transitionDelay: `${1 * basicDelay}ms`
          }}
        />
        <Image
          className="scale-150 object-contain duration-1000 absolute left-[110px] bottom-[125px] h-[283px]"
          src="/benefits/2.jpg"
          alt="Plant image"
          width={300}
          height={400}
          style={{
            transform: `translateX(${isVisualized ? 0 : 100}%)`,
            opacity: `${isVisualized ? 1 : 0}`,
            filter: `blur(${isVisualized ? 0 : 10}px)`,
            transitionDelay: `${2 * basicDelay}ms`
          }}
        />
      </div>
      <div
        className="absolute top-0 right-0 duration-1000 -z-10 w-[297px] h-[367px] shadow-xl bg-secondary"
        style={{
          transform: `translateX(${isVisualized ? 0 : 100}%)`,
          opacity: `${isVisualized ? 1 : 0}`,
          filter: `blur(${isVisualized ? 0 : 10}px)`,
          transitionDelay: `${3 * basicDelay}ms`
        }}
      />
      <div
        className="absolute bottom-10 duration-1000 -right-3 -z-10 w-[123px] h-[152px] shadow-xl bg-secondary"
        style={{
          transform: `translateX(${isVisualized ? 0 : 100}%)`,
          opacity: `${isVisualized ? 1 : 0}`,
          filter: `blur(${isVisualized ? 0 : 10}px)`,
          transitionDelay: `${5 * basicDelay}ms`
        }}
      />
    </div>
  )
}