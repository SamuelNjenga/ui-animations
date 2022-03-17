import React, { useState } from "react";

import TrailText from "./useTrail/TrailText";
import "./useTrail/TrailText.css";

const App = () => {
  const [open, set] = useState(true);

  return (
    <div
      style={{ marginLeft: "70px", marginTop: "40px" }}
      className="container"
      onClick={() => set((state) => !state)}
    >
      <TrailText open={open}>
        <span>Java</span>
        <span>TypeScript</span>
        <span>ReactJS</span>
        <span>NodeJs</span>
      </TrailText>
    </div>
  );
};

export default App;
