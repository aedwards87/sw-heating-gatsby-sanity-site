import React, { useCallback, useState } from "react";
import { animated, useTransition, config } from "react-spring";

import mountains from "./images/mountains.jpg";
import beach from "./images/beach.jpg";
import desert from "./images/desert.jpg";

import "./gallery.css";

const images = [
  ({ style }) => <animated.img src={mountains} alt="Mountains" style={style} />,
  ({ style }) => <animated.img src={beach} alt="Beach" style={style} />,
  ({ style }) => <animated.img src={desert} alt="Desert" style={style} />
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex(state => (state + 1) % images.length), []);
  const prevSlide = useCallback(() => setIndex(state => (state === 0) ? state = images.length - 1 : (state - 1) % images.length), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'scale(0.5)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(1.5)' },
    config: config.molasses
  });

  return (
    <>
      <div className="gallery" onClick={onClick}>
        <p className="gallery-directions" >Click anywhere to see the next image</p>
        {transitions.map(({ item, props, key }) => {
          const Image = images[item];
          return <Image key={key} style={props} />;
        })}
      </div>
      <div>
        <button onClick={prevSlide} style={{ zIndex: 99999999 }}>back</button>
      </div>
    </>
  );
};

export default Gallery;
