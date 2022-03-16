import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import "./CssVariables.css";

export default function CssVariables() {
  const [{ background }] = useSpring(
    () => ({
      from: {
        background: "var(--from, pink)",
      },
      to: {
        background: "var(--to, purple)",
      },
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <div className="container">
      <animated.div className="block" style={{ background }}>
        React JS
      </animated.div>
    </div>
  );
}
