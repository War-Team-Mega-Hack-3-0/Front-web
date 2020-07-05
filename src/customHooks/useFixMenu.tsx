import { useRef, useEffect, useState } from 'react'

export function useFixMenuOnScroll() {
  const mainElement = useRef<HTMLDivElement>(null)
  const [isSticky, setSticky] = useState(false)

  useEffect(applyEventScrollToFixMenu, [mainElement])

  function applyEventScrollToFixMenu() {
    const myElement = mainElement.current
    myElement?.addEventListener('scroll', handleScroll)
    return () => {
      myElement?.removeEventListener('scroll', handleScroll)
    }
  }

  function handleScroll() {
    if (!isSticky && mainElement.current) {
      setSticky(true)
    }
  }

  return { isSticky, mainElement }
}
