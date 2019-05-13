import React, { useState } from "react";

const Counter = props => {
  useState({ value: 1 });
  return (
    <React.Fragment>
      <h1>Counter component worksXXX</h1>
      <button>Increment</button>
    </React.Fragment>
  );
};

export default Counter;
