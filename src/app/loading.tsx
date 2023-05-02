import { FONTS } from "@/constants/fonts";


export default function Loading() {
  return (
    <div className="flex items-center justify-center absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
      <div className="w-10 h-10 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
    </div>
  )
}