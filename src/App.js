import "./App.css";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import PropTypes from "prop-types";
import React from "react";
// import React, { Component } from "react";

// Class Component
class App extends React.Component {
  render() {
    return (
      <>
        <h1>Abdul Moeez Tariq</h1>
        <h2>Learning React.js</h2>
      </>
    );
  }
}

// // Class Component
// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Abdul Moeez Tariq</h1>
//         <h2>Learning React.js</h2>
//       </>
//     );
//   }
// }

// let name = "Abdul Moeez";
// const carObj = { name: "Audi R8", color: "Black", make: "2008" };

// // Simple Function
// function App() {
//   return <h1>Abdul Moeez</h1>;
// }

// function App2() {
//   return <h2>Learning React.js</h2>;
// }

// function App(props) {
//   return (
//     <>
//       {/* <h1 className="App"> {name} </h1>
//       <div className="App">
//         <h1>Abdul Moeez</h1>
//         <h2> {carObj.name} </h2>
//         <h1> {name} </h1>
//         <p>Learning React</p>
//       </div> */}
//       {/* <Header />
//       <Sidebar />
//       <Footer /> */}

//       {/* // Prop Types */}
//       {/* <h1>Hey {props.name}</h1>
//       <h1>Hey {props.age}</h1> */}
//       {/* // Methods to print Booleans */}
//       {/* <h1>Hey {props.isMarried.toString()}</h1>
//       <h1>Hey {String(props.isMarried)}</h1> */}
//     </>
//   );
// }

// Type Checking PropTypes
// App.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   isMarried: PropTypes.bool,
// };

// Arrow Function in React.js
// const App = () => {
//   return (
//     <>
//       <h1>Abdul Moeez</h1>
//       <h2>Learning React JS</h2>
//     </>
//   );
// };

// // Using Props in Arrow Functions
// const App = (props) => {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//     </>
//   );
// };

// // Second Arrow Function
// const App2 = (props) => {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//     </>
//   );
// };

// Default Export
export default App;

// Named Export
// export { App, App2 };
