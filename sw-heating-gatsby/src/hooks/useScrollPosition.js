import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';
const windowPosition = isBrowser ? window.pageYOffset : 'undefined';


export default function useScrollPosition() {
  const [currentPosition, setCurrentPosition] = useState(windowPosition)
  const [scrollUp, setScrollUp] = useState(false)

  // useEffect(() => {
  //   setCurrentPosition(windowPosition)
  //   // return () => {
  //   //   setCurrentPosition(window.pageYOffset)
  //   // }
  // }, [currentPosition])

  // Listens for the when the page is scrolled up
  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.pageYOffset
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