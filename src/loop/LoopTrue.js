import React from "react";

import { useSpring, animated } from "react-spring";

const LoopTrue = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        marginTop: 70,
        marginLeft: 50,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    >
      {" "}
      <h2 style={{ textAlign: "center" }}>JS</h2>
    </animated.div>
  );
};

export default LoopTrue;
