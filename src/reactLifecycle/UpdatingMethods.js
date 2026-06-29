import React, { Component } from "react";

export default class UpdatingMethods extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Abdul Moeez Tariq",
    };
    // console.log("Constructor called ...");
  }

  // Event Handler
  changeState = () => {
    // console.log("Button Clicked");

    this.setState({
      name: "moizycodes",
    });
  };

  //   1 --- Updating First Method ---
  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps called ...");
    console.log("Props are", props);
    console.log("State is", state);
    return null;
  }

  // 2 --- Updating Second Method ---
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate called ...");
    console.log(nextProps);
    console.log(nextState);
    return false; // if false then the render function will not work
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
