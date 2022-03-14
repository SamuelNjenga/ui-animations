import React, { useState } from "react";

import { useSpring, animated, config } from "react-spring";

const Scrolling = () => {
  const [flip, set] = useState(false);

  const words = [
    "React Js ",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "MySQL",
    "Ruby",
    "Python",
    "Java",
  ];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.div
      style={{
        position: "relative",
        width: "100%",
        height: 60,
        overflow: "auto",
        fontSize: "0.5em",
        marginTop: "160px",
        marginRight: "40p",
      }}
      scrollTop={scroll}
    >
      {words.map((word, i) => (
        <div
          key={`${word}_${i}`}
          style={{
            width: "100%",
            height: 50,
            textAlign: "center",
          }}
        >
          {word}
        </div>
      ))}
    </animated.div>
  );
};

export default Scrolling;
