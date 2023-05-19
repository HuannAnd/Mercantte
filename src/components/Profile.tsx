"use client";

import Image from "next/image";

import { Rating } from "@/components";
import { FONTS } from "@/constants/fonts";

import { PersonIcon } from '@radix-ui/react-icons'
import { parse } from "path";
import { UserAvaliator } from "@/@types/user";

type ProfileProps = {
  user: UserAvaliator

}

export function Profile({
  user
}: ProfileProps) {
  const { comment, name, email, rate, image } = user;

  return (
    <article className="h-[240px] w-[320px] flex flex-col gap-2 shadow-lg p-5 duration-300 cursor-pointer hover:-translate-y-3">
      <div className="grid grid-cols-[48px_1fr] gap-2 items-center">
        <div className="bg-primary w-full rounded-full overflow-hidden">
          {!!image ? (
            <Image
              className="object-cover w-full h-full "
              src={image}
              alt=""

              width={48}
              height={48}
            />
          ) : (
            <PersonIcon className="w-[48px] h-[48px] p-2" color="white" />
          )
          }
        </div>
        <div className="p-2">
          <h3 aria-label="Name" className={`text-dark ${FONTS.BOLD}`}>{name}</h3>
          <p aria-label="Email" className={`text-dark-white mb-4 ${FONTS.SMALL}`}>{email}</p>
          <Rating maxRate={5} currentRate={rate} />
        </div>
      </div>
      <div className="flex-[1] p-2 grid grid-rows-[1fr_auto] gap-y-2">
        <p className={`h-full text-ellipsis line-clamp-3 overflow-hidden text-dark ${FONTS.BODY}`}>"{comment}"</p>
        <small className="text-right text-dark-white ">December, 22 of may</small>
      </div>
    </article>
  )
}