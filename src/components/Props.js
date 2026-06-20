import React from "react";
import Person from "./Person"; // Passing props to children component which is Person.js

// Props as an string
// let personName = "Abdul Moeez";
// let personAge = 24;

function Props() {
  return (
    <>
      {/* Props in React */}
      <Person name="Abdul Moeez Tariq" age="24" />
      <Person name="Rameez Tariq" age="22" />
      {/* <Person name={personName} age={personAge} /> */}
    </>
  );
}

export default Props;
