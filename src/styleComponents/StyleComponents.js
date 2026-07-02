import React, { Component } from "react";

// // --- Inline Style using JavaScript Object ---
// export default class StyleComponents extends Component {
//   render() {
//     return (
//       <div>
//         {/* <h1 style={{ color: "red" }}>Abdul Moeez Tariq</h1> */}

//         <h1 style={{ color: "red", backgroundColor: "yellow" }}>
//           Abdul Moeez Tariq - Full Stack JavaScript Developer
//         </h1>
//       </div>
//     );
//   }
// }

// // --- Inline Styling Using Seperate Object ---
// export default class StyleComponents extends Component {
//   render() {
//     // Styling Object ---> cannot be called in other component
//     let styleObj1 = {
//       color: "red",
//       backgroundColor: "black",
//     };

//     // Second Styling Object
//     let styleObj2 = {
//       textAlign: "center",
//       fontFamily: "cooper",
//     };

//     return (
//       <div>
//         {/* <h1 style={styleObj1}>
//           Abdul Moeez Tariq - Full Stack JavaScript Developer
//         </h1> */}

//         {/* Using spread operator to use multiple styling objects */}
//         <h1 style={{ ...styleObj1, ...styleObj2 }}>
//           Abdul Moeez Tariq - Full Stack JavaScript Developer
//         </h1>
//       </div>
//     );
//   }
// }

// // Changing State Using Styles
export default class StyleComponents extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      name: "Abdul Moeez Tariq",
      designation: "Front-End Developer",
    };
  }

  // Event Handler
  changeState = () => {
    this.setState({
      active: true,
      name: "moizycodes",
      designation: "{{Full Stack JavaScript Developer}}",
    });
  };

  render() {
    let styleObj = {
      padding: "10px 10px",
      color: "yellow",
      backgroundColor: "black",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.2)",
    };

    // condition
    if (this.state.active) {
      styleObj.backgroundColor = "blue";
    }
    return (
      <>
        <div className="App">
          <h1 style={styleObj}>{this.state.name}</h1>
          <h1 style={styleObj}>{this.state.designation}</h1>
        </div>

        <div className="App">
          <button style={styleObj} onClick={this.changeState}>
            Change State
          </button>
        </div>
      </>
    );
  }
}
