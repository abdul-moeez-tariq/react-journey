import React, { Component } from "react";
import Updating2 from "./Updating2";

export default class Updating extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      nameOne: "Abdul Moeez Tariq",
    };
  }

  // Arrow Function
  changeState = () => {
    console.log("Button Clicked");

    this.setState({
      nameOne: "moizycodes"
    })
  };

  render() {
    return (
      <div>
        {/* <h1>Abdul Moeez Tariq</h1> */}
        <Updating2 name={this.state.nameOne} />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
