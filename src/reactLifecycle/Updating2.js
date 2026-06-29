import React, { Component } from "react";

export default class Updating2 extends Component {
  // constructor()
  constructor(props) {
    super(props);

    // state dependent on props
    this.state = {
      nameTwo: this.props.name,
    };
  }

  //   1 --- Updating First Method ---
  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps called...");
    if (props.name !== state.nameTwo) {
      return { nameTwo: props.name };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h1> {this.state.nameTwo} </h1>
      </div>
    );
  }
}
