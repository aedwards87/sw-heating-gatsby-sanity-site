import styled from 'styled-components'


export const StyledMainImageContainer = styled.div`
  position: absolute;
  top: -${({ navBarHeight }) => navBarHeight.navBarHeight}px;
  right: 0;
  height: 104vh;
  width: 61%;
  z-index: -1;
  overflow: hidden;
  /* ::after {
    content: "";
    height: var(--head-gradient-height);
    width: 100%;
    position: absolute;
    bottom: 0;
    background: white;
    background: var(--gradient-three);
    z-index: 99;
    left: 0;
    right: 0;
  } */
  img {
    /* display: none; */
    display: block;
    position: absolute;
    object-fit: cover;
    object-position: 5vmax 0;
    height: 60%;
    width: 100%;
    bottom: 0;
  }
  @media (min-width: 770px) {
    img {
      display: block;
      position: absolute;
      object-fit: cover;
      object-position: 2vw 50%;
      height: 104vh;
      width: 100%;
      transition: object-position 1s ease;
    }
  }
  @media (min-width: 1280px) {
    img {
      object-position: 8vw 50%;
    }
  }
  @media (min-width: 1600px) {
    img {
      object-position: 6vw 50%;
    }
  }
`