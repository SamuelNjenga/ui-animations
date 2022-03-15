import React from "react";

import { useSpring, animated, easings } from "react-spring";

const EasingComponent = () => {
  const { background, rotateZ } = useSpring({
    from: {
      background: "#46e891",
      rotateZ: 0,
    },
    to: {
      background: "#277ef4",
      rotateZ: 225,
    },
    config: {
      duration: 2000,
      easing: easings.easeInSine,
    },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{ background, width: 120, height: 120, borderRadius: 16, rotateZ }}
    >
      <h4 style={{ textAlign: "center" }}>JS</h4>
    </animated.div>
  );
};

export default EasingComponent;
