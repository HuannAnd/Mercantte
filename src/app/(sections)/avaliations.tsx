"use client";

import { Profile } from "@/components";

import { FONTS } from "@/constants/fonts";
import avaliators from "@/constants/avaliators";


export default function Avaliations() {



  return (
    <section className="w-full h-auto mb-[100vh]">
      <div className="p-10">
        <h2 className={`text-center text-dark ${FONTS.H1}`}>Avaliations</h2>
        <p></p>
      </div>
      <div className="flex flex-row justify-center gap-8 items-center">
        {avaliators.map((user) => <Profile key={user.name} user={user} />)}

      </div>
    </section>
  )
}