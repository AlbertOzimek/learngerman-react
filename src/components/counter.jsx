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
    console.log(product);
    setState({ ...state, value: state.value + 1 });
  };

  const formatCount = () => {
    return state.value === 0 ? "Zero" : state.value;
  };

  const product = { id: 123 };
  return (
    <React.Fragment>
      <span className={getBadgeClasses(state)}>
        Count: {formatCount(state.value)}
      </span>
      <button
        className="btn btn-secondary"
        onClick={() => handleIncrement(product)}
      >
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
