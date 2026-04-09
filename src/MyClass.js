// Prop Types with Function/Class Components

import React, { Component } from "react";
import PropTypes from "prop-types";

// Default Export
// export default class MyClass extends Component {
//   render() {
//     return (
//       <div>
//         {/* <h1>Abdul Moeez</h1> */}
//         <h1>My Name is {this.props.name}</h1>
//         <h1>My Age is {this.props.age}</h1>
//       </div>
//     );
//   }
// }

// Named Export
export class MyClass extends Component {
  render() {
    return (
      <div>
        {/* <h1>Abdul Moeez</h1> */}
        <h1>My Name is {this.props.name}</h1>
        <h1>My Age is {this.props.age}</h1>
        <MyClassTwo />
      </div>
    );
  }
}

// Named Export
export class MyClassTwo extends Component {
  render() {
    return (
      <div>
        <h1>Learning React.js</h1>
      </div>
    );
  }
}

// PropTypes with Class Components
// -- PropTypes is used for type checking
// MyClass.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// };

MyClass.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// Logging the ProtoType values
console.log("PropTypes:", PropTypes);

function Test(props) {
  return <h1>{props.name}</h1>;
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function App() {
  return <Test name={123} />;
}
