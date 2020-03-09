import { useMediaQuery } from 'react-responsive'
 
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 980 })
  return isDesktop ? children : null
}
const SmallScreen = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 979 })
  return isSmallScreen ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

export { Desktop, SmallScreen, Tablet, Mobile, Default }