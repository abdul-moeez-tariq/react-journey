// import React, { Component } from "react";
// import "../CssStyleSheet.css";

// export default class CssStyleSheet extends Component {
//   // constructor
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "Abdul Moeez Tariq",
//     };
//   }

//   changeState = () => {
//     this.setState({
//       name: "Moeez Tariq",
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1 className="myFont myFont2">{this.state.name}</h1>
//         <button onClick={this.changeState}>Click Me</button>
//       </div>
//     );
//   }
// }

// Condition Base CSS Styling
import React, { Component } from "react";
import "../CssStyleSheet.css";

export default class CssStyleSheet extends Component {
  render() {
    let x = this.props.check ? "myFont" : "myFont2";
    return (
      <div className="App">
        {/* Applying two classes at same time using string literals */}
        <h1 className={`${x} myFont3`}>Abdul Moeez Tariq</h1>
      </div>
    );
  }
}
