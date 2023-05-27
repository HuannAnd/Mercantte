"use client";

import { Profile } from "@/components";

import { FONTS_STYLED } from "@/constants/fonts";
import avaliators from "@/constants/avaliators";


export default function Avaliations() {
  return (
    <section className="w-full h-auto mb-[100vh]">
      <div className="p-10">
        <h2
          className={`text-center text-dark`}
          style={FONTS_STYLED.h1}
        >Avaliations</h2>
        <p></p>
      </div>
      <div className="grid lg:grid-cols-[320px_320px_320px] md:grid-cols-[320px_320px] sm:grid-cols-[320px] justify-center gap-8 items-center">
        {avaliators.map((user) => <Profile key={user.name} user={user} />)}
      </div>
    </section>
  )
}