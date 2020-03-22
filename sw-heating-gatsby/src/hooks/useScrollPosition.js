import { useState, useEffect } from 'react';


export default function useScrollPosition(on) {
  const [currentPosition, setCurrentPosition] = useState('')
  const [scrollUp, setScrollUp] = useState(false)

  useEffect(() => {
    setCurrentPosition(window.pageYOffset)
    // return () => {
    //   cleanup
    // }
  }, [currentPosition])

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