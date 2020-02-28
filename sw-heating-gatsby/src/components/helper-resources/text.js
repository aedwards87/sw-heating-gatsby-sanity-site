import React from 'react'
import styled from 'styled-components'
import { Spring, Trail, Transition, animated } from 'react-spring/renderprops'

import {
  CurvedBG,
  Card,
  ImgTemp as PersonImg,
  CardWrapper
} from '../Elements/index'
import { cyan, burgundy } from '../Utilities/index'
import Arrow from '../Images/arrow'
import Toggle from '../Components/Toggle'

const data = [
  {
    id: 1,
    companyName: 'ICSA',
    companyLogoURI: 'icsa-logo-compact-rgb-core.png',
    title: 'Welcome and introduction',
    imageURI: 'profile-template.jpg',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  },
  {
    id: 2,
    companyName: 'Orange Triangle',
    sponsorLevel: 'Headline',
    title: 'Welcome and introduction',
    imageURI: 'profile-template.jpg',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus,iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.'
  }
]

const About = () => (
  <>
    <Spring
      from={{ transform: 'translate3d(0,-100px,0)', opacity: 0 }}
      to={{ transform: 'translate3d(0,-35px,0)', opacity: 1 }}
      config={{ tension: 100, friction: 13 }}
    >
      {props => (
        <AnimCurvedBG style={props} bgColor={cyan} color="white">
          <Spring
            native
            from={{ opacity: 0, transform: 'translate3d(0,10px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={{ delay: 300, duration: 500 }}
          >
            {props => (
              <AnimHead style={props}>
                <h1>About</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit
                  amet purus maximus, porta tristique tortor. Aenean imperdiet
                  at diam tincidunt lacinia. Duis id turpis eu diam feugiat
                  fringilla eget nec nunc. Praesent dapibus consectetur tellus,
                  et luctus orci posuere.
                </p>
              </AnimHead>
            )}
          </Spring>
        </AnimCurvedBG>
      )}
    </Spring>

    <CardWrapper>
      <Trail
        native
        items={data.map(data => data.id - 1)}
        keys={data.map(data => data.id)}
        from={{ opacity: 0, transform: 'translate3d(20px,40px,0)' }}
        to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
        config={{ mass: 5, tension: 2000, friction: 200, delay: 300 }}
      >
        {item => props => (
          <animated.div
            style={props}
            // className="bob bob"
          >
            <Toggle>
              {({ on, toggle }) => (
                <>
                  <AboutCard
                    onClick={toggle}
                    style={props}
                    className={on ? 'active' : null}
                  >
                    <PersonImg>
                      <img
                        src={require(`../Images/${data[item].imageURI}`)}
                        alt=""
                      />
                    </PersonImg>
                    <div>
                      <h3>{data[item].title}</h3>
                      <p>
                        from{' '}
                        <b>
                          {data[item].sponsorLevel
                            ? `${data[item].sponsorLevel} sponsor`
                            : data[item].companyName }
                        </b>
                      </p>
                    </div>
                    <Logo
                      src={require(`../Images/sponsorLogos/${data[item].companyName.toLowerCase().replace(/\s+/g, '')}.png`)}
                      alt={`${data[item].companyName} logo`}
                    />
                    <Arrow
                      color={cyan}
                      height="15px"
                      aboveHeight="20px"
                      className={on ? 'active' : null}
                    />
                  </AboutCard>

                  <Transition
                    native
                    items={on}
                    from={{
                      height: 0,
                      opacity: 0,
                      transform: 'translate3d(0,-15px,0)'
                    }}
                    enter={{
                      height: 'auto',
                      opacity: 1,
                      transform: 'translate3d(0,-5px,0)'
                    }}
                    leave={{
                      height: 0,
                      opacity: 0,
                      marginTop: '0',
                      transform: 'translate3d(0,-30px,0)'
                    }}
                    config={{ mass: 5, tension: 230, friction: 40 }}
                  >
                    {on =>
                      on &&
                      (props => (
                        <animated.div style={props}>
                          <DropDownCard onClick={toggle} dropDownShadow>
                            {/* <p>{data[item].message}</p> */}
                            <p>
                              {data[item].message.split('\n').map((text, i) => (
                                <React.Fragment key={i}>
                                  {text}
                                  {data[item].message.split('\n').length - 1 ===
                                  i ? null : (
                                    <>
                                      <br />
                                      <br />
                                    </>
                                  )}
                                </React.Fragment>
                              ))}
                            </p>
                          </DropDownCard>
                        </animated.div>
                      ))
                    }
                  </Transition>
                </>
              )}
            </Toggle>
          </animated.div>
        )}
      </Trail>
    </CardWrapper>
  </>
)

const AboutCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  max-width: 930px;
  cursor: pointer;
  transition: all 0.3s ease;
  > p {
    margin: 5px 0 0;
  }
  p:nth-child(3) {
    background: ${cyan};
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  & div p b {
    color: ${burgundy};
    font-weight: 500;
  }
  @media (min-width: 650px) {
    grid-template-columns: auto 6fr auto auto;
  }
  svg {
    transition: all 0.5s ease;
    /* opacity: 0; */
    transform: rotate(0deg);
  }
  svg.active {
    /* opacity: 1 */
    transform: rotate(-180deg);
  }
  &.active {
    border-radius: 20px 20px 0 0;
    @media (min-width: 600px) {
      border-radius: 20px 20px 0 0;
    }
  }
`

const Logo = styled.img`
  height: 30px;
  display: none;
  @media (min-width: 650px) {
    display: inline-block;
  }
`

const Head = styled.header`
  color: white;
  padding: 40px 0 70px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  transition: max-width 0.6s ease;
  /* Above */
  @media (min-width: 450px) {
    padding: 140px 0 80px 0;
  }
  /* @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  }; */

  /* Below */
  @media (max-width: 900px) {
    max-width: 625px;
  }
`

const DropDownCard = styled(AboutCard)`
  border-radius: 0 0 20px 20px;
  grid-template-columns: auto;
  padding: 10px 30px 30px;
  justify-items: center;
  > p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
  @media (min-width: 450px) {
    padding: 10px 40px 40px;
    > p {
      font-size: 0.95rem;
      line-height: 1.35rem;
    }
  }
  @media (min-width: 600px) {
    border-radius: 0 0 20px 20px;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  @media (min-width: 770px) {
    padding: 10px 50px 50px 150px;
    > p {
      font-size: 1rem;
      line-height: 1.45rem;
    }
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default About
