"use client";

import Image from "next/image";

import Rating from "@/components/Rating";
import { FONTS_STYLED } from "@/constants/fonts";

import { PersonIcon } from '@radix-ui/react-icons'
import { parse } from "path";
import { UserAvaliator } from "@/@types/user";
import { formatDate } from "@/utils";

type ProfileProps = {
  user: UserAvaliator

}

export default function Profile({
  user
}: ProfileProps) {
  const { comment, name, email, rate, image, date } = user;

  return (
    <article className="h-[240px] w-[320px] flex flex-col gap-2 shadow-lg p-5 duration-300 cursor-pointer hover:-translate-y-3">
      <div className="grid grid-cols-[48px_1fr] gap-2 items-center">
        <div className="bg-primary w-full rounded-full overflow-hidden">
          {!!image ? (
            <Image
              className="object-cover w-full aspect-square bg-center"
              src={image}
              alt="A Random User"
              width={48}
              height={48}
            />
          ) : (
            <PersonIcon className="w-[48px] h-[48px] p-2" color="white" />
          )
          }
        </div>
        <div className="p-2">
          <h3
            aria-label="Name"
            className="text-dark"
          >
            {name}
          </h3>
          <p
            aria-label="Email"
            className="text-dark-white mb-4"
            style={FONTS_STYLED.small}
          >
            {email}
          </p>
          <Rating maxRate={5} currentRate={rate} />
        </div>
      </div>
      <div className="flex-[1] p-2 grid grid-rows-[1fr_auto] gap-y-2">
        <q
          className="h-full text-ellipsis line-clamp-3 overflow-hidden text-dark"
          style={FONTS_STYLED.body}
        >{comment}</q>
        <small className="text-right text-dark-white">{formatDate(date)}</small>
      </div>
    </article>
  )
}