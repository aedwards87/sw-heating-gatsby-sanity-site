import React, { useState } from 'react'
import useToggleSpring from '../hooks/useToogleSpring'
import { Waypoint } from 'react-waypoint';
import { animated } from 'react-spring'


const TitleAnimation = ({ children }) => {
  const [show, setShow] = useState(false)
  const toggleAnimation = useToggleSpring(show)
  
  return (
    <Waypoint 
      onEnter={() => setShow(true)} 
      // onLeave={() => setShow(false)} 
      bottomOffset='80px'
    >
      <animated.div style={toggleAnimation}>
        {children}
      </animated.div>
    </Waypoint>
  )
}

export default TitleAnimation
