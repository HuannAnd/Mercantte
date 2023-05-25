"use client";

import { Benefit } from "@/components";

export default function Summary() {
  return (
    <div className="flex flex-col w-full h-auto mt-[86px] gap-[200px]">
      <Benefit
        title="Our best-sellers"
        date="January, 23 of may"
        key={1}
        theme="dark"
        imageIndex="3"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ligula, maximus sed hendrerit posuere, auctor eu nibh. Etiam vel erat nulla. Cras eget placerat libero, eget luctus tellus. Phasellus scelerisque lectus vitae aliquam vulputate. In tincidunt nulla ac purus auctor aliquam. Praesent non luctus purus. Praesent pretium cursus ipsum, eu condimentum dui bibendum non.
        <br />
        <br />
        Donec bibendum libero eget mollis laoreet. Sed consectetur ultricies nisi, at cursus turpis aliquet in. Morbi at lectus id sem lacinia scelerisque. Vestibulum cursus convallis porta. Nam libero sapien, lacinia fringilla sapien vel, efficitur sagittis justo.
      </Benefit>
      <div className="relative w-full h-[2px] z-10 bg-[#444] shadow-[0_0_0_100vmax_#444] clip-around"></div>
      <Benefit
        title="Why we want inovatte the seeds comerce"
        date="December, 23 of 2022"
        isRight
        key={2}
        theme="dark"
        imageIndex="2"

      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ligula, maximus sed hendrerit posuere, auctor eu nibh. Etiam vel erat nulla. Cras eget placerat libero, eget luctus tellus. Phasellus scelerisque lectus vitae aliquam vulputate. In tincidunt nulla ac purus auctor aliquam. Praesent non luctus purus. Praesent pretium cursus ipsum, eu condimentum dui bibendum non.
        <br />
        <br />
        Nam euismod, neque sed viverra rhoncus, magna elit feugiat diam, id sollicitudin odio nisi eget elit. Donec laoreet, justo nec faucibus viverra, felis arcu feugiat orci, ac egestas purus metus sed eros.
      </Benefit>
      <div className="relative w-full h-[2px] z-10 bg-[#444] shadow-[0_0_0_100vmax_#444] clip-around"></div>
    </div>
  )
}