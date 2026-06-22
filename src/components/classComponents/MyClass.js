import React from "react";
// import React, { Component } from "react";

// ---- Default Export Class Functions ----

// --- Method 1 ---
class MyClass extends React.Component {
  render() {
    return (
      <>
        <h1>Abdul Moeez Tariq</h1>
        <p>Full Stack JavaScript Developer</p>
      </>
    );
  }
}

export default MyClass;

// // --- Method 2 ---
// export default class MyClass extends Component {
//   render() {
//     return (
//       <>
//         <h1>Abdul Moeez Tariq</h1>
//         <p>Full Stack JavaScript Developer</p>
//       </>
//     );
//   }
// }

// ---- Named Export Class Functions ----

// // --- Method 1 ---
// class MyClass extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Abdul Moeez Tariq</h1>
//         <p>Full Stack JavaScript Developer</p>
//       </>
//     );
//   }
// }

// export { MyClass };

// // --- Method 2 ---
// export class MyClass extends Component {
//   render() {
//     return (
//       <>
//         <h1>Abdul Moeez Tariq</h1>
//         <p>Full Stack JavaScript Developer</p>
//       </>
//     );
//   }
// }
