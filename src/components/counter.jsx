import React, { useState } from "react";

const Counter = props => {
  const [state] = useState({
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  });

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
  return (
    <React.Fragment>
      {state.tags.length === 0 && "Please create a new tag!"}
      {renderTags()}
    </React.Fragment>
  );
};

export default Counter;
