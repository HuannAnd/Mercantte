"use client";

import { useEffect, useState } from "react";


export function useIntersectionObserver(...refs: React.MutableRefObject<null | Element>[]) {
  const [isVisualizing, setIsVisualizing] = useState<boolean[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibilityArray = entries.map((entry) => entry.isIntersecting); 
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      })

      setIsVisualizing(visibilityArray);
    }, observerOptions);

    refs.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      if (refs) {
        refs.forEach((ref) => {
          if (ref && ref.current) {
            observer.unobserve(ref.current);
          }
        });
      }
    };
  }, []);

  return isVisualizing;
};