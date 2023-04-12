import Image from "next/image";

import starAction from '@/assets/starAction.svg';
import starPreview from '@/assets/starPreview.svg';


type RatingProps = {
  maxRate?: number,
  currentRate?: number,
  iconRateOnAction?: string,
  iconRateDefault?: string
} & Partial<Element>

function Rating({
  maxRate = 5,
  currentRate = 0,
  iconRateDefault = starPreview,
  iconRateOnAction = starAction,
  className,
  ...props
}: RatingProps) {
  const parsingToArray = Array(maxRate).fill('');


  return (
    <ul className={`${className} flex flex-row gap-2`}>
      {parsingToArray.map((element, index) =>
        <Image
          src={index < currentRate ? iconRateOnAction : iconRateDefault}
          alt="icon rate"
          width={10}
          height={10}
        />
      )}
    </ul>
  )
}

export default Rating;