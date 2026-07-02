import React from "react";
import ListWithKeysChild from "./ListWithKeysChild";

// --- Arrays List Rendering with Keys ---
// function ListWithKeys() {
//   const students = ["Moeez", "Rameez", "Zaid", "Ahmad"];

//   //   let studentNames = students.map((std) => <li>{std}</li>);

//   // First Method to define unique key
//   let studentNames = students.map((std, index) => <li key={index}>{std}</li>);

//   return (
//     <div>
//       {/* Expression */}
//       {/* {students.map((std) => (
//         <li>{std}</li>
//       ))} */}

//       {<ul>{studentNames}</ul>}
//     </div>
//   );
// }

// --- Object List Rendering With Keys ---
function ListWithKeys() {
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

  //   let studentNames = students.map((std, index) => <li key={index}>{std}</li>);

  return (
    <div>
      {/* map returns data in Array form. */}
      {students.map((std) => (
        <ListWithKeysChild key={std.id} std={std} />
      ))}
    </div>
  );
}

export default ListWithKeys;
