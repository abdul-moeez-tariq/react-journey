import React from "react";
import Person from "./Person"; // Passing props to children component which is Person.js

// Props as an string
// let personName = "Abdul Moeez";
// let personAge = 24;

// Props as an Array
// let friends = ["Ali", "Hamza", "Rameez", "Bilal"];

function Props() {
  return (
    <>
      {/* Props in React */}
      <Person name="Abdul Moeez Tariq" age={24} />
      {/* <Person name="Rameez Tariq" age={22} /> */}
      {/* <Person name={personName} age={personAge} /> */}

      {/* Props as an array */}
      {/* <Person name="Abdul Moeez Tariq" age={24} arr={friends} /> */}

      {/* Default Props in React */}
      <Person />
    </>
  );
}

export default Props;
