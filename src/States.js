// The state is a built-in React object that is used to contain data or information about the component.

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Multiple State Variables
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

Counter();

// // State with input field
// import { useState } from "react";
function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Hello {name}</h1>
    </div>
  );
}

Form();

// // Updates state based on the previus value
// setCount(prev => prev + 1);
