import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

// if condition
// function Conditionals() {
//   const name = "Tariq";
//   if (name === "Moeez") {
//     return <Component1 />;
//   } else {
//     return <Component2 />;
//   }
// }

// export default Conditionals;

// Returning JSX
// function Conditionals() {
//   const name = "Tariq";
//   let data;
//   if (name === "Moeez") {
//     data = <Component1 />;
//   } else {
//     data = <Component2 />;
//   }

//   return <div>{data}</div>;
// }

// export default Conditionals;

// Logical AND Operator
// function Conditionals() {
//   const name = "Moeez";

//   return <div>{name === "Moeez" && <h1>Hello Moeez</h1>}</div>;
// }

// export default Conditionals;

// Ternary Operator
function Conditionals() {
  const name = "Tariq";
//   const age = 24;

  return (
    // <div>{age > 18 ? <h1> You can vote</h1> : <h1>You cannot vote</h1>}</div>
    <div>
      {/* Component Rendering */}
      {name === "Moeez" ? <Component1 /> : <Component2 />}
    </div>
  );
}

export default Conditionals;
