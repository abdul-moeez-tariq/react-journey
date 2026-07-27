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

// --- UseEffectWithFunctionComponent.js ---
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
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className="mt-2 p-2 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
      >
        Click {count} times
      </button>
    </div>
  );
}
export default UseEffectWithFunctionComponent;

// // --- Cleanup Function ---
// import React, { useEffect } from "react";

// function UseEffectWithFunctionComponent() {
//   useEffect(() => {
//     console.log("Component Mounted");

//     return () => {
//       console.log("Component Unmounted");
//     };
//   }, []);

//   return <div>Abdul Moeez Tariq</div>;
// }

// export default UseEffectWithFunctionComponent;
