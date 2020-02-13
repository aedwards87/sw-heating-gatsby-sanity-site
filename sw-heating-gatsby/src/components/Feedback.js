import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'
import { horizontalDraggableScroll } from '../helpers/horizontalDraggableScroll'
import { SWDropletQuotes } from '../assets/index';

const Feedback = () => {
  const ref = useRef(0)
  useEffect(() => {
    horizontalDraggableScroll(ref)
    // console.log(window.document.getElementById('feed').offsetLeft)
  }, [ref])


  return (
    <StyledFeedBack>
      <div>
        <StyledTitle>Feedback</StyledTitle>
      </div>
      <StyledListContainer className="items" ref={ref} >
        {/* {allSanityWork.edges.map(({ node: work }) => (
          <li>{work.text}</li> */}
        {/* <ul className="items" ref={ref}> */}
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Nisi eu tempor Lorem voluptate. Commodo non dolore consectetur voluptate in culpa reprehenderit duis dolore dolore. Aute duis quis proident labore nostrud adipisicing Lorem laboris minim minim ullamco nisi ad incididunt. Exercitation tempor cupidatat eu irure anim sint ad labore dolor.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Voluptate aliqua et fugiat sit pariatur officia nostrud do. Ipsum culpa commodo amet veniam duis ex. Ipsum id id veniam cillum ad laboris nisi reprehenderit aliqua velit quis. Id aute irure nisi labore nostrud culpa. Veniam quis pariatur dolor commodo qui ea officia exercitation ut. Sit excepteur anim do tempor excepteur.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Cupidatat sit id eiusmod aliqua nulla in. Enim aliqua cupidatat fugiat laboris culpa aliqua occaecat. Ipsum est adipisicing sint mollit aute sint Lorem incididunt qui.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Enim sint ullamco elit consectetur laborum duis veniam laborum anim. Esse exercitation eiusmod labore ex minim commodo. Qui velit ad sint eu pariatur. Sint nostrud amet culpa laboris pariatur. Ullamco nostrud ut excepteur ullamco amet id duis.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Tempor proident est elit ullamco ad qui eiusmod voluptate proident excepteur. Culpa exercitation cillum deserunt incididunt. Non eiusmod excepteur ipsum excepteur adipisicing consectetur sit do magna deserunt dolore irure non qui. Proident est est veniam nostrud anim deserunt consequat esse ex exercitation. Incididunt excepteur pariatur sunt reprehenderit consequat. Dolor laboris occaecat sit pariatur id consequat qui.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Amet aliquip qui ut esse voluptate et sit officia in dolor. Qui occaecat dolore dolore tempor deserunt est enim culpa incididunt consectetur laboris. Anim laborum consectetur anim cillum aliquip non. Commodo qui do amet do. Est anim exercitation exercitation tempor laborum aute sint do est mollit nostrud.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Cillum elit est irure non reprehenderit amet et velit. Exercitation fugiat nisi laboris amet aute nostrud tempor duis elit. Reprehenderit id exercitation cillum sint amet esse consectetur. Laboris esse ad dolore et in aliqua consectetur eu aliqua nostrud. Do sunt aliquip nulla occaecat minim non est velit eu. Est reprehenderit ut culpa commodo.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>
          <SWDropletQuotes />
          <blockquote>
            <p>
              Irure elit Lorem reprehenderit adipisicing aliquip aliquip cupidatat irure ad nostrud mollit qui. Ipsum laborum fugiat adipisicing laboris. Sunt sint cupidatat dolor ad. Incididunt quis proident ullamco nulla cupidatat consequat magna et ullamco fugiat velit.
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>

        {/* </ul> */}
        {/* )} */}
      </StyledListContainer>

    </StyledFeedBack>
  )
}

const StyledFeedBack = styled.section`
  width: 100%;
  background: var(--light-bg);
  margin: 0 auto;
  h2 {
    margin-bottom: 0;
  }
  > div {
    max-width: 1900px;
    padding: 7rem 5% 0;
    margin: 0 auto;
  }
`

const StyledListContainer = styled.ul`
  list-style: none;
  padding: 8rem 0 7rem;
  margin: 0;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 80vw;
  overflow-x: scroll;
  /* scroll-snap-type: x proximity; */
  scrollbar-width: none;
  scroll-snap-type: both mandatory; 
  ::-webkit-scrollbar {
    display: none;
  }
  :before,
  :after {
    content: '';
    width: 10px;
  }
  > li {
    align-self: center;
    scroll-snap-align: center;
    position: relative;
    padding: 4rem 10% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: var(--shadow-two);
    :before, :after {
      position: absolute;
    } 
    > svg {
      position: absolute;
      top: -50px;
      left: calc(50% - (60px / 2));
      filter: drop-shadow( 0 4px 8px rgba(49, 42, 113, .3) );
      @media(min-width: 480px) {
        top: -60px;
        left: calc(50% - (70px / 2));
        width: 70px;
      }
    }
    /* :after {
      content: '"';
      top: 0;
      left: calc(50% - 1rem);
      font-size: 3rem;
      font-family: var(--fancy-font);
      color: #fff;
    }
    :before {
      content: "";
      top: -40px;
      left: calc(50% - 40px);
      height: 80px;
      width: 80px;
      background: #fff;
      background: var(--primary-four);
      border-radius: 100%;
      box-shadow: var(--shadow-two);
      border: 6px solid #fff;
    } */
  }
  :hover {
    cursor: grab;
  }
  :active {
    cursor: grabbing
  }
  @media (min-width: 736px) {
    grid-auto-columns: minmax(500px, 1fr);
    > li {
      padding: 4rem 3.5rem;
    }
  }
  blockquote {
    margin: 0;
    position: relative;
    font-size: 0.9rem;
    p {
      margin-bottom: 0;
    }
    footer {
      position: absolute;
      bottom: -2rem;
      right: 0;
      font-weight: var(--normal);
      font-size: 0.7rem;
    }
  }
  
`



export default Feedback
