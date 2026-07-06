import React, { useState } from "react";

function UseStateWithArray() {
  // Array
  let num = [11, 22, 33, 44];

  let [numbers, setNumbers] = useState(num);

  //   Update the List numbers with previous numbers
  //   let changeList = () => {
  //     setNumbers([55, 66, 77, 88]);
  //   };

  //   // Add more values to array
  //   let changeList = () => {
  //     setNumbers((prevState) => {
  //       return [...prevState, 98, 99, 100];
  //     });
  //   };

  // Add Random Numbers through Math Object
  let changeList = () => {
    setNumbers((prevState) => {
      return [...prevState, Math.floor(Math.random() * 50)];
    });
  };

  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <button onClick={changeList}>Change Array</button>
    </div>
  );
}

export default UseStateWithArray;
