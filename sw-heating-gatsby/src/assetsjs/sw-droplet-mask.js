import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { UserContext } from '../components/index'
import { useTransition, animated, config } from 'react-spring'


const pages = [
  ({ style, navBarHeight, className, height }) => (
    <StyledMaskContainer navBarHeight={navBarHeight} style={style} >
      <svg height={height} className={className, 'SVG'} viewBox="0 0 476 588" fill="none"
      style={{ filter: 'drop-shadow(40px 55px 40px rgba(0, 0, 0, .7))' }}
      >
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
        <StyledImage xlinkHref={require("../images/image1.jpg")} alt={'To come'} className="clip-svg" />
      </svg>
      <StyledDropletBorderSVG height={height} className={className} viewBox="0 0 476 588" fill="none">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
      </StyledDropletBorderSVG>
    </StyledMaskContainer>
  ),
  ({ style, navBarHeight, className, height }) => (
    <StyledMaskContainer navBarHeight={navBarHeight} style={style} >
      <svg height={height} className={className, 'SVG'} viewBox="0 0 476 588" fill="none"
      style={{ filter: 'drop-shadow(40px 55px 40px rgba(0, 0, 0, .7))' }}
      >
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
        <StyledImage xlinkHref={require("../images/image1.jpg")} alt={'To come'} className="clip-svg" />
      </svg>
      <StyledDropletBorderSVG height={height} className={className} viewBox="0 0 476 588" fill="none">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
      </StyledDropletBorderSVG>
    </StyledMaskContainer>
  ),
  ({ style, navBarHeight, className, height }) => (
    <StyledMaskContainer navBarHeight={navBarHeight} style={style} >
      <svg height={height} className={className, 'SVG'} viewBox="0 0 476 588" fill="none"
      style={{ filter: 'drop-shadow(40px 55px 40px rgba(0, 0, 0, .7))' }}
      >
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
        <StyledImage xlinkHref={require("../images/image1.jpg")} alt={'To come'} className="clip-svg" />
      </svg>
      <StyledDropletBorderSVG height={height} className={className} viewBox="0 0 476 588" fill="none">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
      </StyledDropletBorderSVG>
    </StyledMaskContainer>
  ),
  ({ style, navBarHeight, className, height }) => (
    <StyledMaskContainer navBarHeight={navBarHeight} style={style} >
      <svg height={height} className={className, 'SVG'} viewBox="0 0 476 588" fill="none"
      style={{ filter: 'drop-shadow(40px 55px 40px rgba(0, 0, 0, .7))' }}
      >
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
        <StyledImage xlinkHref={require("../images/image1.jpg")} alt={'To come'} className="clip-svg" />
      </svg>
      <StyledDropletBorderSVG height={height} className={className} viewBox="0 0 476 588" fill="none">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
      </StyledDropletBorderSVG>
    </StyledMaskContainer>
  ),
  ({ style, navBarHeight, className, height }) => (
    <StyledMaskContainer navBarHeight={navBarHeight} style={style} >
      <svg height={height} className={className, 'SVG'} viewBox="0 0 476 588" fill="none"
      style={{ filter: 'drop-shadow(40px 55px 40px rgba(0, 0, 0, .7))' }}
      >
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
        <StyledImage xlinkHref={require("../images/image1.jpg")} alt={'To come'} className="clip-svg" />
      </svg>
      <StyledDropletBorderSVG height={height} className={className} viewBox="0 0 476 588" fill="none">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
      </StyledDropletBorderSVG>
    </StyledMaskContainer>
  ),
]



const DropletImageMask = ({ height = '80vh', className }) => {
  const navBarHeight = useContext(UserContext)
  const [index, setIndex] = useState(0)


  const onClick = () => setIndex(state => (state + 1) % 5)
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute', transform: 'translate3d(60%,0,0) scale(0.75)', zIndex: 4 },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0) scale(1)', zIndex: 5 },
    leave: { opacity: 0, transform: 'translate3d(-60%,0,0) scale(1.25)', zIndex: 6 },
    config: { mass: 11, tension: 300, friction: 120 }
  })

  // useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 5), 6000), [])
  
  return (
    <StyledDropletImageMaskContainer navBarHeight={navBarHeight} onClick={onClick}>

          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} height={height} className={className} navBarHeight={navBarHeight} />
          })}

        {/* <svg height={height} className={className, 'SVG'} viewBox="0 0 476 588" fill="none"
          style={{ filter: 'drop-shadow(40px 55px 40px rgba(0, 0, 0, .7))' }}
        >
          <defs>
            <clipPath id="myClip">
              <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
            </clipPath>
          </defs>
          <StyledImage xlinkHref={require("../images/image1.jpg")} alt={'To come'} className="clip-svg" />
        </svg>

        <StyledDropletBorderSVG height={height} className={className} viewBox="0 0 476 588" fill="none">
          <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
        </StyledDropletBorderSVG> */}
        
    </StyledDropletImageMaskContainer>
  )
}

const AnimMaskContainer = animated.div

const StyledDropletImageMaskContainer = styled.div`
  position: absolute;
  right: 0;
  top: -${({ navBarHeight }) => navBarHeight.navBarHeight}px;
  width: 44%;
  min-height: 500px;
  height: 120vh;
  overflow: hidden;
  > div > svg {
    min-height: 550px;
    transition: min-height 0.5s ease;
    @media (min-height: 680px) and (max-width: 1678px) {
      top: 45%;
      transform: translateY(-55%) scale(1.013);
    }
    @media (min-height: 930px) and (min-width: 1678px) {
      top: 45%;
      transform: translateY(-55%) scale(1.013);
    }
  }
  .SVG {
    position: relative;
    @media (min-height: 680px) and (max-width: 1678px) {
      top: 45%;
      transform: translateY(-55%);
    }
    @media (min-height: 930px) and (min-width: 1678px) {
      top: 45%;
      transform: translateY(-55%);
    }
  }
  @media (min-width: 1680px) {
    min-height: 800px;
    transition: min-height 0.5s ease;
    > div > svg {
      min-height: 800px;
      transition: min-height 0.5s ease;
    }
  }
`
const StyledMaskContainer = styled(AnimMaskContainer)`
  position: relative;
  right: -3.75vw;
  width: 476px;
  width: 100%;
  height: ${({ navBarHeight }) => `calc(100% - (${navBarHeight.navBarHeight}px) - 15px)`};
  top: ${({ navBarHeight }) => `calc(${navBarHeight.navBarHeight}px - 15px)`};
  /* @media (min-height: 630px) {
    top: 45%;
    transform: translateY(-50%);
  } */
`

const StyledImage = styled.image`
  clip-path: url(#myClip);
  object-fit: cover;
  height: 100%;
`

const StyledDropletBorderSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.013)
`

export default DropletImageMask
