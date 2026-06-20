// export to index.js file
import React from "react";

function Person(props) {
  return (
    // console.log(props),
    <>
      <p>Hello {props.name}</p>
      <p>Age = {props.age}</p>
    </>
  );
}

export default Person;
