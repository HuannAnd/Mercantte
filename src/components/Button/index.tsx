import { FONTS } from "@/constants/fonts"
import { ButtonHTMLAttributes, ReactNode } from "react"


type ButtonProps = {
  buttonTypes?: 'callToAction' | 'buy',
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  buttonTypes,
  children,
  className,
  ...props
}: ButtonProps) {

  function handleCostumizableStyles() {
    switch(buttonTypes) {
      case 'callToAction':
        return "bg-secondary text-white "
      case undefined:
        return "bg-transparent border-2 border-white text-white"
      case 'buy':
        return "bg-transparent border-primary border-2 text-primary"
      default:
        return
  
    }

  }

  return <button className={`${handleCostumizableStyles()} px-8 py-4 ${FONTS.BODY} `} {...props}>{children}</button>
}

export default Button