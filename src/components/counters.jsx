import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [state] = useState({
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  });

  const handleDelete = counterId => {
    console.log("Event Handler called", counterId);
  };

  return (
    <React.Fragment>
      {state.counters.map(counter => (
        <React.Fragment>
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={handleDelete}
            value={counter.value}
          />
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Counters;
