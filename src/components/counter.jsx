import React, { useState } from "react";

function getBadgeClasses(state) {
  let classes = "badge m-2 badge-";
  classes += state.value === 0 ? "warning" : "primary";
  return classes;
}

const Counter = props => {
  const [state, setState] = useState({
    value: props.value
  });

  const handleIncrement = product => {
    setState({ ...state, value: state.value + 1 });
  };

  const formatCount = () => {
    return state.value === 0 ? "Zero" : state.value;
  };

  return (
    <React.Fragment>
      <span className={getBadgeClasses(state)}>
        Count: {formatCount(state.value)}
      </span>
      <button className="btn btn-secondary" onClick={() => handleIncrement()}>
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;
