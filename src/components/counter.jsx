import React, { useState } from "react";

const Counter = props => {
  const [state] = useState({
    count: 0
  });
  const formatCount = () => {
    return state.count === 0 ? "Zero" : state.count;
  };
  return (
    <React.Fragment>
      <h1>Count: {formatCount(state.count)}</h1>
      <button>Increment</button>
    </React.Fragment>
  );
};

export default Counter;
