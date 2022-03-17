import { useState } from "react";

import { useTransition, animated, config } from "@react-spring/web";

function Mount() {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!show),
  });

  return (
    <div>
      <h4>Mount</h4>
      {transitions(
        (styles, item) =>
          item && <animated.div style={styles}>JavaScript,✌️</animated.div>
      )}
    </div>
  );
}

export default Mount;
