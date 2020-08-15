import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [scrollUp, setScrollUp] = useState(false)

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    const windowPosition = isBrowser ? window.pageYOffset : 'undefined';
    setCurrentPosition(windowPosition)
  }, [currentPosition])

  // Listens for the when the page is scrolled up
  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.pageYOffset || document.documentElement.scrollTop
      setScrollUp(currentPosition === 0 ? false : currentPosition > newPosition);
      setCurrentPosition(newPosition)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  }, [scrollUp, currentPosition])

  return [scrollUp, setScrollUp, currentPosition, setCurrentPosition]

}