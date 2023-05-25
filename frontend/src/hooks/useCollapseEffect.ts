import { useState } from 'react'

export default function useCollapseEffect(show: number) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleOnCLick = () => {
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