"use client";

import { Suspense } from "react";

export default function Background() {
  return (
    <Suspense fallback={ <div className="bg-cyan-50 h-full w-full" /> } >
      <div className="h-[1000px] absolute w-full -translate-x-1/2 left-1/2 -z-10 mix-blend-multiply bg-blend-lighten bg-primary bg-leaf bg-cover bg-top" />
    </Suspense>
  )
}