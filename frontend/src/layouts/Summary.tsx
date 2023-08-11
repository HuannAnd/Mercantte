"use client";

import { useRef } from "react";

import Benefit from "@/components/Benefit";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type SummaryProps = React.HTMLAttributes<HTMLDivElement>

export default function Summary(props: SummaryProps) {
  const benefitRef = useRef(null);

  const [isVisualized] = useIntersectionObserver(benefitRef);

  return (
    <section {...props} className="flex flex-col w-full h-auto mt-[86px] gap-[200px] mb-16">
      <Benefit
        className="justify-between"
        title="All Rights Reserved - Your Plant Paradise"
        date="January, 23 of may"
        key={1}
        imageIndex={3}
      >
        Copyright © 2023 Your Plant Paradise. All rights reserved.
        Unlock the wonders of the botanical world with our extensive collection of over 200 plants. Combining the trusted Trefle API with OpenAI's power, we offer a reliable and intelligent resource.
        <br />
        <br />
        Immerse yourself in greenery's captivating embrace, browse our curated plant profiles with grace. From delicate blooms to majestic trees, find detailed care instructions that put you at ease.
        Our collaboration ensures data accuracy, providing up-to-date knowledge for your botany journey. Trust in our expertise and reputable sources, as you cultivate your own lush plant oasis.
        <br />
        <br />
        Start your adventure today, embrace nature's art, with Your Plant Paradise as your trusted counterpart. Discover the beauty and benefits plants bring, as we help you create a vibrant, thriving haven within.
        <br />
        <br />
        <strong>Note:</strong> This revised version maintains the core message and highlights the collaboration between Trefle API and OpenAI, while also emphasizing the reliability and expertise of Your Plant Paradise in providing a comprehensive plant resource.
      </Benefit>
      <Benefit
        className="justify-between"
        ref={benefitRef}
        title="Why we want inovatte the seeds comerce"
        isVisualized={isVisualized}
        date="December, 23 of 2022"
        isRight
        key={2}
        imageIndex={2}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ligula, maximus sed hendrerit posuere, auctor eu nibh. Etiam vel erat nulla. Cras eget placerat libero, eget luctus tellus. Phasellus scelerisque lectus vitae aliquam vulputate. In tincidunt nulla ac purus auctor aliquam. Praesent non luctus purus. Praesent pretium cursus ipsum, eu condimentum dui bibendum non.
        <br />
        <br />
        Nam euismod, neque sed viverra rhoncus, magna elit feugiat diam, id sollicitudin odio nisi eget elit. Donec laoreet, justo nec faucibus viverra, felis arcu feugiat orci, ac egestas purus metus sed eros.
      </Benefit>
    </section>
  )
}