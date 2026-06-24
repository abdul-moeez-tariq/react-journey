import React, { Component } from "react";
import MountingChildren from "./MountingChildren";

export default class Mounting extends Component {
  // 1 --- constructor() method ---
  constructor(props) {
    super(props);

    this.state = {
      name: "Abdul Moeez Tariq",
    };

    // console.log("Mounting constructor invoked...");
  }

  // 2 --- getDerivedStateFromProps() method ---
  static getDerivedStateFromProps(props, state) {
    // console.log("Mounting getDerivedStateFromProps...");
    // console.log(props);
    // console.log(state);
    return null;
  }

  // 4 --- componentDidMount() method
  componentDidMount() {
    // console.log("Mounting componentDidMount...");
  }

  // 3 --- render() method ---
  render() {
    // console.log("Mounting render invoked...");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>

        {/* Mounting Children Component */}
        <MountingChildren />
      </div>
    );
  }
}
