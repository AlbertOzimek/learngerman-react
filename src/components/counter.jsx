import React, { useState } from "react";

function getBadgeClasses(state) {
  let classes = "badge m-2 badge-";
  classes += state.count === 0 ? "warning" : "primary";
  return classes;
}

const Counter = props => {
  const [state] = useState({
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
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
      <ul>
        {state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Counter;
