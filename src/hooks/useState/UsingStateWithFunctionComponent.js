import React, { useState } from "react";

function UsingStateWithFunctionComponent() {
  const [count, setCount] = useState(0);

  // Increment Function
  let Increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  let Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Count is: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default UsingStateWithFunctionComponent;
