import { useLayoutEffect } from 'react'

const useBodyLockScroll = () => {
  useLayoutEffect(() => {
    const originalOverflowStyle = window.getComputedStyle(document.body).overflow
    const originalHeightStyle = window.getComputedStyle(document.body).height
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
    return () => {
      document.body.style.overflow = originalOverflowStyle
      document.body.style.height = originalHeightStyle
    };
  }, [])
}

export default useBodyLockScroll
