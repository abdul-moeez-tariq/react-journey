// Exporting to App.js File

import "../App.css";
// import React from "react";
import React, { Component } from "react";

// -----------------------------------------------
// ---- Click Event With Functional Component ----
// -----------------------------------------------
// function ClickEvent() {
//   // ---- Event Handler ----
//   function HelloFunction() {
//     alert("Hello World!");
//   }

//   return (
//     <div className="App">
//       <input type="button" value="Click" onClick={HelloFunction} />
//     </div>
//   );
// }

// export default ClickEvent;

// ------------------------------------------
// ---- Click Event With Class Component ----
// ------------------------------------------
// export default class ClickEvent extends Component {
//   // ---- Event Handler ----
//   HelloFunction() {
//     alert("Hello World!");
//   }

//   render() {
//     return (
//       <div className="App">
//         <input type="button" value="Click" onClick={this.HelloFunction} />
//       </div>
//     );
//   }
// }

// ------------------------------------------------------------
// ---- Click Event With Functional Component Using Arrow Function With Static Arguments ----
// ------------------------------------------------------------
// function ClickEvent() {
//   // ---- Binding Event Handler ----
//   const HelloFunction = (name) => {
//     alert("Hello " + name);
//   };

//   return (
//     <div className="App">
//       <input
//         type="button"
//         value="Click"
//         onClick={() => HelloFunction("Moeez")}
//       />
//     </div>
//   );
// }

// export default ClickEvent;

// ------------------------------------------------------------
// ---- Click Event With Functional Component Passing Props As Arguments ----
// ------------------------------------------------------------
// function ClickEvent(props) {
//   // ---- Binding Event Handler ----
//   const HelloFunction = (name) => {
//     alert("Hello " + name);
//   };

//   return (
//     <div className="App">
//       <input
//         type="button"
//         value="Click"
//         onClick={() => HelloFunction(props.name)}
//       />
//     </div>
//   );
// }

// export default ClickEvent;

// -----------------------------------------------------------
// ---- Click Event With Class Component Passing Props As Arguments ----
// -----------------------------------------------------------
export default class ClickEvent extends Component {
  render() {
    // ---- Event Handler ----
    const HelloFunction = (name) => {
      alert("Hello " + name);
    };

    return (
      <div className="App">
        <input
          type="button"
          value="Click"
          onClick={() => HelloFunction(this.props.name)}
        />
      </div>
    );
  }
}
