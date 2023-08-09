import { useState } from 'react'

export default function useCollapseEffect(show: number) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleOnCLick = () => {
    if (isCollapsed) {
      const productsSection = document.getElementById('products');

      if (productsSection) {
        productsSection.scrollIntoView();
      }
    }
    setIsCollapsed(isCollapsed => !isCollapsed);
  }

  const display = (index: number) => {
    if (isCollapsed) {
      return true
    }

    return index < show
  }

  return {
    isCollapsed,
    display,
    handleOnCLick
  }
}