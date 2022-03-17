import React from "react";

import ViewPager from "./useSprings/ViewPager";

import  "./useSprings/styles.module.css";

const App = () => {
  return (
    <div style={{ marginLeft: "70px", marginTop: "40px" }} className="container">
      <ViewPager />
    </div>
  );
};

export default App;
