import { useLayoutEffect, useState } from 'react'

// const useBodyLockScroll = () => {
//   const [on, toggle] = useState(false)

//   useLayoutEffect(() => {
//     if (on === false) {
//       document.body.style.overflow = 'auto'
//       document.body.style.height = 'auto'
//     } else {
//       document.body.style.overflow = 'hidden'
//       document.body.style.height = '100vh'
//     }
//   }, [on, toggle])

//   return [on, toggle]
// }

const useBodyLockScroll = () => {
  const [on, toggle] = useState(false)

  useLayoutEffect(() => {
    if (on === false) {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'

    } else {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }
  }, [on, toggle])

  return [on, toggle]
}

export default useBodyLockScroll
