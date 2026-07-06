// import React, { useState } from "react";

// // --- First Method of useState with Strings ---
// function UseStateWithStrings() {
//   const myArray = useState("Moeez");
//   return (
//     <div className="App">
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Rameez")}>Update</button>
//     </div>
//   );
// }

// export default UseStateWithStrings;

// import React, { useState } from "react";

// // --- Second Method of useState with strings ---
// function UseStateWithStrings() {
//   const myArray = useState("Moeez");

//   const changeState = () => {
//     myArray[1]("Rameez");
//   };
//   return (
//     <div className="App">
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>Update</button>
//     </div>
//   );
// }

// export default UseStateWithStrings;

// // --- useState with strings ---
// import React, { useState } from "react";

// // --- First Method ---
// function UseStateWithStrings() {
//   const myArray = useState("Moeez");
//   return (
//     <div className="App">
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Rameez")}>Update</button>
//     </div>
//   );
// }

// export default UseStateWithStrings;

// // useState with Strings
import React, { useState } from "react";

// --- useState with strings ---
function UseStateWithStrings() {
  // Destructure
  const [name, setName] = useState("Moeez");
  // setName is state updater function to change the value

  const changeState = () => {
    setName("Rameez");
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  );
}

export default UseStateWithStrings;
