import { useSpring, config } from 'react-spring'

const useStandardSpring = (
  delay = 0, 
  setConfig = config.molasses,
  from = { opacity: 0, transform: 'translate3d(0,30%,0)' },
  to = { opacity: 1, transform: 'translate3d(0,0%,0)' }
) => {
  return (
    useSpring({ 
      from, 
      to, 
      config: setConfig, 
      delay  
    })
  )
}

export default useStandardSpring