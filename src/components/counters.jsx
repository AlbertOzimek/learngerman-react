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

  const handleReset = () => {
    const counters = state.counters.map(c => {
      return { id: c.id, value: 0 };
    });
    setState({ counters });
  };

  const handleIncrement = counterId => {
    const counters = state.counters.map(c =>
      c.id === counterId ? { id: c.id, value: c.value + 1 } : c
    );
    setState({ counters });
  };

  return (
    <React.Fragment>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      <div>
        {state.counters.map(counter => (
          <React.Fragment>
            <Counter
              key={counter.id}
              onDelete={handleDelete}
              onIncrement={handleIncrement}
              counter={counter}
            />
            <br />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Counters;
