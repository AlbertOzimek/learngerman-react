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
      <span className="badge badge-primary m-2">
        Count: {formatCount(state.count)}
      </span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </React.Fragment>
  );
};

export default Counter;
