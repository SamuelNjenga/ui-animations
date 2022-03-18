import React, { useRef } from "react";

import { loremIpsum } from "lorem-ipsum";

import { Main } from "./useTransitions/NotificationHubStyles.js";
import { MessageHub } from "./useTransitions/NotificationHub.js";

const App = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.(loremIpsum());
  };

  return (
    <div style={{ marginLeft: "70px", marginTop: "40px" }}>
      <Main onClick={handleClick}>
        Click here to create notifications
        <MessageHub
          children={(add) => {
            ref.current = add;
          }}
        />
      </Main>
    </div>
  );
};

export default App;
