import React from "react";

function getBadgeClasses(state) {
  let classes = "badge m-2 badge-";
  classes += state.value === 0 ? "warning" : "primary";
  return classes;
}

const Counter = props => {
  const formatCount = () => {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  };

  return (
    <React.Fragment>
      <span className={getBadgeClasses(props.counter)}>
        Count: {formatCount(props.counter.value)}
      </span>
      <button
        className="btn btn-secondary"
        onClick={() => props.onIncrement(props.counter.id)}
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;
