import React from "react";

const Counter = props => {
  const formatCount = () => {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <React.Fragment>
      <span className={getBadgeClasses()}>
        Count: {formatCount(props.counter.value)}
      </span>
      <button
        className="btn btn-secondary"
        onClick={() => props.onIncrement(props.counter)}
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
