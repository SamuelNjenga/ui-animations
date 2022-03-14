import React from "react";

import { useSpring, animated } from "react-spring";

const FadingComponent = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      Favorite Programming Language is JavaScript
    </animated.div>
  );
};

export default FadingComponent;
