"use client";

import { useRef } from "react";

import { Benefit } from "@/components";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Summary() {
  const benefitRef = useRef(null);

  const [isVisualized] = useIntersectionObserver(benefitRef);

  return (
    <div className="flex flex-col w-full h-auto mt-[86px] gap-[200px] mb-16">
      <Benefit
        title="Our best-sellers"
        date="January, 23 of may"
        key={1}
        imageIndex="3"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ligula, maximus sed hendrerit posuere, auctor eu nibh. Etiam vel erat nulla. Cras eget placerat libero, eget luctus tellus. Phasellus scelerisque lectus vitae aliquam vulputate. In tincidunt nulla ac purus auctor aliquam. Praesent non luctus purus. Praesent pretium cursus ipsum, eu condimentum dui bibendum non.
        <br />
        <br />
        Donec bibendum libero eget mollis laoreet. Sed consectetur ultricies nisi, at cursus turpis aliquet in. Morbi at lectus id sem lacinia scelerisque. Vestibulum cursus convallis porta. Nam libero sapien, lacinia fringilla sapien vel, efficitur sagittis justo.
      </Benefit>
      <Benefit
        className="duration-1000"
        ref={benefitRef}
        // style={{
        //   transform: `translateX(${isVisualized ? 0 : -50}%)`,
        //   opacity: `${isVisualized ? '1' : '0'}`
        // }}
        title="Why we want inovatte the seeds comerce"
        isVisualized={isVisualized}
        date="December, 23 of 2022"
        isRight
        key={2}
        imageIndex="2"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ligula, maximus sed hendrerit posuere, auctor eu nibh. Etiam vel erat nulla. Cras eget placerat libero, eget luctus tellus. Phasellus scelerisque lectus vitae aliquam vulputate. In tincidunt nulla ac purus auctor aliquam. Praesent non luctus purus. Praesent pretium cursus ipsum, eu condimentum dui bibendum non.
        <br />
        <br />
        Nam euismod, neque sed viverra rhoncus, magna elit feugiat diam, id sollicitudin odio nisi eget elit. Donec laoreet, justo nec faucibus viverra, felis arcu feugiat orci, ac egestas purus metus sed eros.
      </Benefit>
    </div>
  )
}