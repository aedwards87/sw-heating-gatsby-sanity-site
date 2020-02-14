import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'
import { SWDropletMask } from '../assetsjs/index'

const pages = [
  ({ style }) => <animated.div style={{ ...style }}><SWDropletMask /></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><SWDropletMask /></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><SWDropletMask /></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><SWDropletMask /></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}><SWDropletMask /></animated.div>,
]

export default function AnimatedSlider() {
  const [index, setIndex] = useState(0)
  // const [index2, setIndex2] = useState(1)
  // const [index3, setIndex3] = useState(2)

  // useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 5), 4010), [])
  // useEffect(() => void setInterval(() => setIndex2(state => (state + 1) % 5), 4000), [])

  const onClick = () => (
    setIndex(state => (state + 1) % 5)
    // , setIndex2(state => (state + 1) % 5)
    // setIndex3(state => (state + 1) % 5)
  )
  const handleClick1 = () => (
    setIndex(0)
    // , setIndex2(1)
    // setIndex3(2)
  )
  const handleClick2 = () => (
    setIndex(1)
    // ,    setIndex2(2)
    // setIndex3(3)/
  )
  const handleClick3 = () => (
    setIndex(2)
    // ,    setIndex2(3)
    // setIndex3(4)
  )
  const handleClick4 = () => (
    setIndex(3)
    // ,    setIndex2(4)
    // setIndex3(0)
  )
  const handleClick5 = () => (
    setIndex(4)
    // ,    setIndex2(0)
    // setIndex3(1)
  )
  // const onClick2 = useCallback(() => setIndex2(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(60%,0,0) scale(0.75)', zIndex: 4 },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0) scale(1)', zIndex: 5 },
    leave: { opacity: 0, transform: 'translate3d(-60%,0,0) scale(1.25)', zIndex: 6 },
    config: { mass: 10, tension: 80, friction: 50 }
  })
  // const transitions2 = useTransition((index2), p => p, {
  //   from: { opacity: 0, transform: 'translate3d(60%,0,0) scale(0.5)', zIndex: 2 },
  //   enter: { opacity: 0.5, transform: 'translate3d(0%,0,0) scale(0.75)', zIndex: 3 },
  //   leave: { opacity: 0.75, transform: 'translate3d(-100%,0,0) scale(1)', zIndex: 4 },
  //   config: { mass: 10, tension: 80, friction: 50 }
  // })
  // const transitions3 = useTransition((index3), p => p, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0) scale(0.5)', zIndex: 0 },
  //   enter: { opacity: 0.2, transform: 'translate3d(0%,0,0) scale(0.6)', zIndex: 1 },
  //   leave: { opacity: 0, transform: 'translate3d(-100%,0,0) scale(0.7)', zIndex: 2 },
  //   config: config.molasses,

  // })
  return (
    <StyledDiv>
      <div>
        <div className="simple-trans-main" onClick={onClick}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div>
        {/* <div className="simple-trans-main-2" onClick={onClick}>
          {transitions2.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div> */}
        {/* <div className="simple-trans-main-3" onClick={onClick}>
          {transitions3.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div> */}
      </div>
      <section style={{zIndex: 9999999}}>
        <button onClick={handleClick1} className={index === 0 && 'active'}>1</button>
        <button onClick={handleClick2} className={index === 1 && 'active'}>2</button>
        <button onClick={handleClick3} className={index === 2 && 'active'}>3</button>
        <button onClick={handleClick4} className={index === 3 && 'active'}>4</button>
        <button onClick={handleClick5} className={index === 4 && 'active'}>5</button>
      </section>
    </StyledDiv>
  )
}




const StyledDiv = styled.div`
  .simple-trans-main > div,
  .simple-trans-main-2 > div,
  .simple-trans-main-3 > div
   {
    cursor: pointer;
    position: absolute;
    width: calc(100% / 3);
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 800;
    font-size: 25em;
    will-change: transform, opacity;
    text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
  }

  .simple-trans-main-2 > div {
    left: calc(100% / 3);
  }
  .simple-trans-main-3 > div {
    left: calc((100% / 3) * 2);
  }

  .active {
    background: red;
  }

  section {
    position: absolute;
    bottom: -20%;
    left: 43%;
  }

`
