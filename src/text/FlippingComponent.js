import React, { useState } from "react";

import { useSpring, animated, config } from "react-spring";

const FlippingComponent = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 style={props}>Hello From React JS Developers</animated.h1>
  );
};

export default FlippingComponent;
