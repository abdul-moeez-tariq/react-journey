// import React from "react";

// // --- Arrays List Rendering ---
// function Students() {
//   //   const students = ["Moeez", "Rameez", "Zaid", "Ahmad"];

//   const numbers = [2, 4, 6, 8, 10];

//   //   Stored in a variable and returned in JSX
//   const result = numbers.map((num) => <h1>{(num = num * 2)}</h1>);

//   return (
//     <div>
//       {/* Expression */}
//       {/* {students.map((std) => (
//         <h1>{std}</h1>
//       ))} */}

//       {/* Numbers Array / list */}
//       {/* {numbers.map((num) => (
//         <h1>{num}</h1>
//       ))} */}

//       {/* Multiplied numbers with 2 */}
//       {/* {numbers.map((num) => (
//         <h1>{(num = num * 2)}</h1>
//       ))} */}

//       {result}
//     </div>
//   );
// }

// export default Students;

//  --- Object  Rendering ---
import React from "react";
import Student from "./Student";

function Students() {
  const students = [
    {
      id: 1,
      name: "Moeez",
      age: 24,
    },
    {
      id: 2,
      name: "Rameez",
      age: 22,
    },
    {
      id: 3,
      name: "Bilal",
      age: 23,
    },
    {
      id: 4,
      name: "Ahmad",
      age: 18,
    },
  ];
  return (
    <div>
      {/* map returns data in Array form. */}
      {students.map((std) => (
        <Student std={std} />
      ))}
    </div>
  );
}

export default Students;
