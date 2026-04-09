import React, { Component } from "react";

// export default class Student extends Component {
//   constructor() {
//     super();
//     console.log("Constructor from Student");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     );
//   }
// }

// Theory
// The Constructor is a method used to initialize an object's state in a class.
// It automatically called during the creation of an object in a class.
// The concept of a constructor is the same in React.
// If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component.
// When you implement the constructor for a React component, you need to call "super(props)" method before any other statement.
// If you do not call "super(props)" method, this.props will be undefined in the constructor and can leads to bug.

// Using Props
export default class StudentTwo extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor from Student");
  }

  render() {
    return (
      <div>
        <h1>Hello! {this.props.name}</h1>
      </div>
    );
  }
}
