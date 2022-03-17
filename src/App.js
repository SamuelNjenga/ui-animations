import React from "react";

import DraggableList from "./useSprings/DraggableList";

import  "./useSprings/styles.module.css";

const App = () => {
  return (
    <div style={{ marginLeft: "70px", marginTop: "40px" }} className="container">
      <DraggableList items={"Lorem ipsum dolor sit".split(" ")} />
    </div>
  );
};

export default App;
