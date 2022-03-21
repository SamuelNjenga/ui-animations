import React, { useRef } from "react";

import { Parallax } from "@react-spring/parallax";

import Page from "./parallax/Page";

import "./parallax/Page.css";

const App = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax className="container" ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
};

export default App;
