import Image from "next/image"

import { Button } from "@/components"

import { FONTS } from "@/constants/fonts"
import { spawn } from "child_process"
import { NavBar } from "@/app/(widgets)"

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center shadow-[0_0_0_100vmax_#222] justify-center">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-[200px] aspect-square border-t-[10px] border-b-[10px] border-primary"></div>
      </div>
    </div>
  )
}