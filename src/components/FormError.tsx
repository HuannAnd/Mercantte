import { ERRORS_CONTACT } from "@/constants/errors";
import { NULL } from "sass";


type ErrorProps = {
  error: ERRORS_CONTACT | null

}

export default function Error({ error }: ErrorProps) {
  if (!error) return null

  return <span className='text-[12px] inline-block text-red-600'>{error}</span>
}