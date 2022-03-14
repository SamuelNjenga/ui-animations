import React, { useState } from "react";

import { useSpring, animated, config } from "react-spring";

const Counter = () => {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 100,
    delay: 2000,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.div>{number.to((n) => n.toFixed(1))}</animated.div>;
};

export default Counter;
