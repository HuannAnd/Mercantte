import { MutableRefObject } from 'react'


export function useIsOverlapping<T extends HTMLElement, D extends HTMLElement>(ref1: MutableRefObject<T> , ref2: MutableRefObject<D>) {
  // Acessando as propriedades das duas referências
  const rect1 = ref1.current.getBoundingClientRect();
  const rect2 = ref2.current.getBoundingClientRect();

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}

