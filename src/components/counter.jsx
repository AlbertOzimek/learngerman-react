import React, { useState } from "react";

const Counter = props => {
  const [state, setState] = useState({ count: 0 });
  const formatCount = () => {
    return state.count === 0 ? "Zero" : state.count;
  };
  return (
    <React.Fragment>
      <span>Count: {formatCount(state.count)}</span>
      <button>Increment</button>
    </React.Fragment>
  );
};

export default Counter;
