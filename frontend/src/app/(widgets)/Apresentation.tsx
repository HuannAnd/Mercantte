"use client";

import { HTMLAttributes } from 'react'

import Image from 'next/image';

type ApresentationProps = HTMLAttributes<HTMLDivElement>

export default function Apresentation(props: ApresentationProps) {
  return (
    <div {...props}>
      <div className="bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl w-[220px] h-[250px] ">
        <Image
          className="object-contain absolute h-[251px] w-[219px] right-[192px] bottom-[144px] "
          src="/icons/benefit-image1.jpg"
          alt="Plant image"
          width={250}
          height={250}
        />

        <Image
          className="scale-150 object-contain absolute left-[110px] bottom-[125px] h-[283px]"
          src="/icons/benefit-image2.jpg"
          alt="Plant image"
          width={300}
          height={400}
        />
      </div>

      <div className="absolute top-0 right-0 -z-10 w-[297px] h-[367px] shadow-xl bg-secondary" />
      <div className="absolute bottom-[100px] right-0 -z-10 w-[123px] h-[152px] shadow-xl bg-secondary" />
    </div>
  )
}