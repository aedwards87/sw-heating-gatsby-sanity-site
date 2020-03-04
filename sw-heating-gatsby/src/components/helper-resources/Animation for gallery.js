import React, { useCallback, useState } from "react";
import { animated, useTransition, config } from "react-spring";

import mountains from "./images/mountains.jpg";
import beach from "./images/beach.jpg";
import desert from "./images/desert.jpg";

import "./gallery.css";

// This will be imported, must remember to import Image from Gatsby
const images = [
  ({ style }) => <animated.Image src={mountains} alt="Mountains" style={style} />,
  ({ style }) => <animated.Image src={beach} alt="Beach" style={style} />,
  ({ style }) => <animated.Image src={desert} alt="Desert" style={style} />
];

const Gallery = ({ from, enter, leave, images, className }) => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex(state => (state + 1) % images.length), []);
  const prevSlide = useCallback(() => setIndex(state => (state === 0) ? state = images.length - 1 : (state - 1) % images.length), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, /*transform: 'scale(0.5)'*/ ...from },
    enter: { opacity: 1, /*transform: 'scale(1)'*/ ...enter },
    leave: { opacity: 0, /*transform: 'scale(1.5)'*/ ...leave },
    config: config.molasses
  });

  return (
    <>
      <div className="gallery" onClick={onClick} className={className}>
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
