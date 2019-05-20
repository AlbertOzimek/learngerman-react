import React from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
};

export default App;
