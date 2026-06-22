// // Normal / Simple JavaScript Constructor
// class Student {
//   constructor() {
//     console.log("Constructor Topic");
//   }
// }

// const std = new Student();

// console.log(std);

// Constructor executed or called when we create an object

// // Parameterized Constructor
// class StudentTwo {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     // console.log("Constructor Topic");
//   }
// }

// const std1 = new StudentTwo("Abdul Moeez", 24);

// console.log(std1.name);
// console.log(std1.age);

// If we don't create a constructor then JavaScript automatically create the empty constructor.

// ---- Constructor in React.js ----
import React, { Component } from "react";

// // Constructor with No Parameter Props
// export default class Student extends Component {
//   constructor() {
//     super();
//     console.log("Constructor from Student");
//   }
//   render() {
//     return (
//       <div>
//         <h1>React.js Constructor</h1>
//       </div>
//     );
//   }
// }

// Constructor with Props
export default class Student extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor from Student");
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
