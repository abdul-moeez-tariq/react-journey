import React from "react";

function ListWithKeysChild({ std }) {
  return (
    <div>
      <h1>
        I am {std.name} and I am {std.age} years old.
      </h1>
    </div>
  );
}

export default ListWithKeysChild;

// // if you passing keys as a props than you'll get an error in your browser console

// // --- Not Worked ---
// function ListWithKeysChild({ std, keys }) {
//   return (
//     <div>
//       <h1>
//         I am {std.name} and I am {std.age} years old.
//       </h1>
//     </div>
//   );
// }
