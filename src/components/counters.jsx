import React, { useState } from "react";
import Counter from "./counter";

const Counters = props => {
  const [state, setState] = useState({
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  });

  const handleDelete = counterId => {
    const counters = state.counters.filter(c => c.id !== counterId);
    setState({ counters });
  };

  return (
    <React.Fragment>
      {state.counters.map(counter => (
        <React.Fragment>
          <Counter key={counter.id} onDelete={handleDelete} counter={counter} />
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Counters;
