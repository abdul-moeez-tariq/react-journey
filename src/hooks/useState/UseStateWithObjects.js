import React, { useState } from "react";

function UseStateWithObjects() {
  const obj = {
    name: "Abdul Moeez",
    age: 24,
    isYoung: true,
    designation: "Full Stack JavaScript Developer",
  };

  const [person, setPerson] = useState(obj);

  let changeState = () => {
    // setPerson({
    //   name: "Rameez Tariq",
    //   age: 22,
    //   designation: "Front-End Developer",
    //   isYoung: true,
    // });

    setPerson((prevState) => {
      return {
        ...prevState, // spread operator
        name: "Rameez Tariq",
      };
    });
  };

  return (
    <div className="App">
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <h1>{person.designation}</h1>

      <button onClick={changeState}>Update</button>
    </div>
  );
}

export default UseStateWithObjects;
