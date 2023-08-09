import { ERRORS_CONTACT } from "@/constants/errors";
import { FONTS_STYLED } from "@/constants/fonts";
import { NULL } from "sass";


type ErrorProps = React.HTMLAttributes<HTMLSpanElement> & {
  error: ERRORS_CONTACT | null
}

export default function Error({ error, className, ...props }: ErrorProps) {
  if (!error) return null

  return <span
    className={`${className} inline-block text-red-600`}
    style={FONTS_STYLED.body}
    {...props}
  >{error}</span>
}