import React, { useRef } from "react";

import { useSpring, animated } from "react-spring";

const LoopFunction = () => {
  const n = useRef(0);

  const styles = useSpring({
    loop: () => 3 > n.current++,
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
      <h1 style={{ textAlign: "center" }}>TS</h1>
    </animated.div>
  );
};

export default LoopFunction;
