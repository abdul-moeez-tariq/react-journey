// export to Props.js file
import PropTypes from "prop-types";

function Person(props) {
  return (
    // console.log(props),
    <>
      <p>Hello {props.name}</p>
      <p>Age = {props.age}</p>

      {/* Props as an array */}
      {/* <p>Array = {props.arr}</p>
      <p>Array = {props.arr[0]}</p> */}
    </>
  );
}

// PropTypes
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  // arr: PropTypes.array,
};

// Default Props
Person.defaultProps = {
  name: "Anonymous",
  age: 18,
};

export default Person;

// React 18+ new version code
// import PropTypes from "prop-types";

// function Person({ name = "Anonymous", age = 18 }) {
//   return (
//     <>
//       <p>Hello {name}</p>
//       <p>Age = {age}</p>
//     </>
//   );
// }

// Person.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// };

// export default Person;