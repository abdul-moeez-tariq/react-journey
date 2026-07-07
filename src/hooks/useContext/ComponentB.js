import React from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="App">
    <h1>I am Component B</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
