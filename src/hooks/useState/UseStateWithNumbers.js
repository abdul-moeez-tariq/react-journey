import React, { useState } from "react";

function UseStateWithNumbers() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  // const changeState = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className="App">
      <h1>Count is: {count}</h1>
      {/* <button onClick={changeState}>Increase</button> */}

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseStateWithNumbers;
