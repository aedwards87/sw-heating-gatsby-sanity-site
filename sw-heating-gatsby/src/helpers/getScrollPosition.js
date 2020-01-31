import React, { useState, useEffect } from "react"


const getScrollPosition = ({ scrollUp, currentPosition }) => {
  // Nav Bar shows on scroll up and vanishes on scroll down
  const [currentPositio, setCurrentPositio] = useState(window.pageYOffset)
  const [scrollU, setScrollU] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const newPositio = window.pageYOffset
      setScrollUp(currentPositio === 0 ? false : currentPositio > newPositio);
      setCurrentPosition(newPositio)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })
}

export default getScrollPosition
