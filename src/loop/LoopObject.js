import React from "react";

import { useSpring, animated } from "react-spring";

const LoopObject = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    >
      Go
    </animated.div>
  );
};

export default LoopObject;
