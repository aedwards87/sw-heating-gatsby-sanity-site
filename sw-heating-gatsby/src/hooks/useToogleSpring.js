import { useSpring, config } from 'react-spring'

const useToggleSpring = (show = false) => {

  const to = {
    opacity: show ? 1 : 0,
    transform: show ? 'translate3d(0,0%,0)' : 'translate3d(0,30%,0)' 
  }

  return (
    useSpring({ 
      to, 
      config: config.molasses, 
    })
  )
}

export default useToggleSpring