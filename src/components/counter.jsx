import React, { useState } from "react";

function getBadgeClasses(state) {
  let classes = "badge m-2 badge-";
  classes += state.count === 0 ? "warning" : "primary";
  return classes;
}

const Counter = props => {
  const [state, setState] = useState({
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  });

  const handleIncrement = product => {
    console.log(product);
    setState({ ...state, count: state.count + 1 });
  };

  const formatCount = () => {
    return state.count === 0 ? "Zero" : state.count;
  };

  const renderTags = () => {
    if (state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  const product = { id: 123 };
  return (
    <React.Fragment>
      <span className={getBadgeClasses(state)}>
        Count: {formatCount(state.count)}
      </span>

      {state.tags.length === 0 && "Please create a new tag!"}
      {renderTags()}
      <button onClick={() => handleIncrement(product)}>Increment</button>
    </React.Fragment>
  );
};

export default Counter;
