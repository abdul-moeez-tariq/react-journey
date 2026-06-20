// export to Props.js file
// import React from "react";
import PropTypes from "prop-types";

function Person(props) {
  return (
    // console.log(props),
    <>
      <p>Hello {props.name}</p>
      <p>Age = {props.age}</p>
    </>
  );
}

// PropTypes
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
