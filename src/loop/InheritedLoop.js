import React from "react";

import { useSpring, animated } from "react-spring";

const InheritedLoop = () => {
  const styles = useSpring({
    from: { x: 0 },
    cancel: true,
    config: { duration: 1000 },
    loop: {
      x: 100,
      reset: true,
    },
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
    />
  );
};

export default InheritedLoop;
