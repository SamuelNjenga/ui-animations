import React from "react";

import { animated, useSpring } from "@react-spring/web";

const ChainExample = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  
  // ...
  return (
    <animated.h2 style={styles}>
      ReactJS is an amazing frontend library
    </animated.h2>
  );
};

export default ChainExample;
