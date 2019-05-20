import React from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
const App = () => {
  const handleReset = () => {};

  return (
    <React.Fragment>
      <Navbar totalCounters={5} />
      <main className="container">
        <Counters onReset={handleReset} />
      </main>
    </React.Fragment>
  );
};

export default App;
