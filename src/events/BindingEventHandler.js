// Exporting to App.js File

// ----------------------
// Binding Event Handler
// ----------------------
import React, { Component } from "react";

export default class BindingEventHandler extends Component {
  constructor() {
    super();

    // 1 --- First Method to Binding Event Handler - In Constructor Using Simple Event Handler Function ---
    // binding this with the HandleEvent function
    // this.HandleEvent = this.HandleEvent.bind(this);

    // state define
    this.state = {
      name: "Abdul Moeez",
    };
  }

  //  1/2 both Event Handler with First method Of Binding Event Handler
  //   HandleEvent() {
  //     this.setState({
  //       name: "Rameez Tariq",
  //     });
  //   }

  // 3 --- Third Method to Binding Event Handler - Using Arrow Function ---
  // binding this with the HandleEvent function
  //   HandleEvent = () => {
  //     this.setState({
  //       name: "Rameez Tariq",
  //     });
  //   };

  //  4 --- Simple Binding Event Handler Function ---
  HandleEvent() {
    this.setState({
      name: "Rameez Tariq",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        {/* <button type="button" onClick={this.HandleEvent}>
          Click Me
        </button> */}

        {/* 2 --- Second Method to Binding Event Handler inside render method ---
     binding this with the HandleEvent function - this.HandleEvent.bind(this) */}
        {/* <button type="button" onClick={this.HandleEvent.bind(this)}>
          Click Me
        </button> */}

        {/* 3 --- For Third Method to Binding Event Handler inside render method ---
     binding this with the HandleEvent function - this.HandleEvent */}
        {/* <button type="button" onClick={this.HandleEvent}>
          Click Me
        </button> */}

        {/* 4 --- Fourth Method to Binding Event Handler with Simpler Handler Function ---
     Simpl HandleEvent function - this.HandleEvent() using Arrow Function */}
        <button type="button" onClick={() => this.HandleEvent()}>
          Click Me
        </button>
      </div>
    );
  }
}
