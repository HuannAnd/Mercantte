import { ReactNode } from "react";

import { FONTS } from "@/constants/fonts"


type BenefitProps = {
  isRight?: boolean,
  image?: string,
  title: string,
  children: ReactNode,
  date: string

}

function Benefit({
  isRight = false,
  image,
  title,
  children,
  date

}: BenefitProps) {

  return (
    <div className="flex flex-row gap-[135px]">

      <div className={`${isRight ? 'order-2' : 'order-1'} w-[600px] relative`}>
        <h2 className={`${isRight ? 'text-right' : ''} ${FONTS.H1} leading-tight text-white mb-4`}>{title}</h2>
        <p className={`${isRight ? 'text-right' : ''} ${FONTS.BODY} mb-8 text-primary opacity-70`}>{children}</p>
        <small className={`${isRight ? 'text-right absolute right-0 ' : ''} text-primary opacity-70`}>{date}</small>
        <button className={`${FONTS.BOLD} ${!isRight ? 'left-0' : ''} absolute bottom-0  px-10 py-5 text-center bg-transparent w-full text-white border-white border-2 `}>Learn More</button>
      </div>

      <div
        className={`
        ${isRight ? 'order-1' : 'order-2'} 
        ${image ? 'bg-black' : (isRight ? 'bg-slate-400' : 'bg-slate-200')} 
        w-[630px] h-[700px]`}
      />

    </div>
  )
}

export default Benefit;

