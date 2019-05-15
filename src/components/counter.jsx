import React, { useState } from "react";

function getBadgeClasses(state) {
  let classes = "badge m-2 badge-";
  classes += state.count === 0 ? "warning" : "primary";
  return classes;
}

const Counter = props => {
  const [state] = useState({
    count: 0
  });
  const formatCount = () => {
    return state.count === 0 ? "Zero" : state.count;
  };
  return (
    <React.Fragment>
      <span className={getBadgeClasses(state)}>
        Count: {formatCount(state.count)}
      </span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </React.Fragment>
  );
};

export default Counter;
