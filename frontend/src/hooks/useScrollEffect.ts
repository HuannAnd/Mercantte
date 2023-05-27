"use client";

import { useEffect, useState } from "react";


export function useScrollEffect(speed: number, initialPosition: number, finalPosition: number) {
  const [scrollPosition, setScrollPosition] = useState<number>(initialPosition);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollRange = Math.max(0, finalPosition - initialPosition);
      const scrollProgress = Math.min(1, currentPosition / scrollRange);
      const scrollDistance = scrollProgress * scrollRange * speed;
      const updatedScrollY = initialPosition + scrollDistance;

      setScrollPosition(updatedScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, initialPosition, finalPosition]);

  return scrollPosition;
}