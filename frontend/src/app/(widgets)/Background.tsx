"use client";

import { Suspense } from "react";

export default function Background() {
  return (
    <>
      <Suspense fallback={<div className="bg-cyan-50 h-full w-full" />} >
        <div className="h-[1000px] absolute w-full -translate-x-1/2 left-1/2 -z-10 mix-blend-multiply bg-blend-lighten bg-primary bg-cover bg-top" />
      </Suspense>
      <svg className="w-screen absolute z-10 top-[1000px] left-0 " viewBox="0 0 1920 443" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#5D7867" />
      </svg>
    </>
  )
}