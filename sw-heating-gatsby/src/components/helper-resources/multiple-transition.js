import { render } from 'react-dom'
import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'red' }}>D</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'yellow' }}>E</animated.div>,
]

export default function App() {
  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(index + 1)
  const [index3, setIndex3] = useState(index2 + 1)

  const i2 = index + 1
  const i3 = i2 + 1

  const onClick = () => (
    setIndex(state => (state + 1) % 5),
    setIndex2(state => (state + 1) % 5),
    setIndex3(state => (state + 1) % 5)
  )
  const on1Click = () => (
    setIndex(0),
    setIndex2(1),
    setIndex3(2)
  )
  const on2Click = () => (
    setIndex(1),
    setIndex2(2),
    setIndex3(3)
  )
  const on3Click = () => (
    setIndex(2),
    setIndex2(3),
    setIndex3(4)
  )
  const on4Click = () => (
    setIndex(3),
    setIndex2(4),
    setIndex3(0)
  )
  const on5Click = () => (
    setIndex(4),
    setIndex2(0),
    setIndex3(1)
  )
  // const onClick2 = useCallback(() => setIndex2(state => (state + 1) % 3), [])



  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  const transitions2 = useTransition((index2), p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  const transitions3 = useTransition((index3), p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  return (
    <>
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
      <div className="simple-trans-main-2" onClick={onClick}>
        {transitions2.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
      <div className="simple-trans-main-3" onClick={onClick}>
        {transitions3.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
      <section>
        <button onClick={on1Click} className={index === 0 && 'active'}>1</button>
        <button onClick={on2Click} className={index === 1 && 'active'}>2</button>
        <button onClick={on3Click} className={index === 2 && 'active'}>3</button>
        <button onClick={on4Click} className={index === 3 && 'active'}>4</button>
        <button onClick={on5Click} className={index === 4 && 'active'}>5</button>
      </section>
    </>
  )
}

render(<App />, document.getElementById('root'))
