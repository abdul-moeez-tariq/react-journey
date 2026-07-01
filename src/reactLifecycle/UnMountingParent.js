import React, { Component } from "react";
import UnMountingChild from "./UnMountingChild";

export default class UnMountingParent extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    };
  }

  // Event Handler
  changeState = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    console.log("UnMountingParent called...");
    return (
      <div>
        {/* <h1>Abdul Moeez Tariq</h1> */}
        {this.state.active ? (
          <UnMountingChild />
        ) : (
          <h1>Component Deleted...</h1>
        )}
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
