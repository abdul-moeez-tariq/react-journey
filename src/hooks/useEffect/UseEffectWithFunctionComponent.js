// import React, { useState, useEffect } from "react";

// function UseEffectWithFunctionComponent() {
//   const [count, setCount] = useState(0);
//   //   const [name, setName] = useState("Moeez");

//   // Without Dependency Array - effect har render ke baad chalega.
//   useEffect(() => {
//     console.log("useEffect called ... " + count);
//     // document.title = `You clicked ${count} times`;
//   });

//   // // Empty Dependency Array - effect sirf first render ke baad chalega.
//   //   useEffect(() => {
//   //     console.log("Count:", count);
//   //   }, []);

//   // // Dependency Array With Variables - Effect sirf count change hone par chalega.
//   //   useEffect(() => {
//   //     console.log("Count:", count);
//   //   }, [count]);

//   //   // Multiple Dependency Array With Variables - Effect sirf count change hone par chalega.
//   //   useEffect(() => {
//   //     console.log("Count:", count);
//   //     console.log("Name:", name);
//   //   }, [count, name]);

//   return (
//     <div className="App">
//       <h1>Count is: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>Update State</button>

//       {/* Multiple dependency Array Variable */}
//       {/* <h1>Name is: {name}</h1> */}

//       {/* Multiple dependency Array Variable Button to change State */}
//       {/* <button onClick={() => setName("Tariq")}>Change Name</button> */}
//     </div>
//   );
// }

// export default UseEffectWithFunctionComponent;

// UseEffectWithFunctionComponent.js

import { useState, useEffect } from "react";

function UseEffectWithFunctionComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("The Count is: ", count);
  }, [count]);

  return (
    <div className="App">
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}
export default UseEffectWithFunctionComponent;
