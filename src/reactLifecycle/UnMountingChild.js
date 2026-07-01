import React, { Component } from "react";

export default class UnMountingChild extends Component {
  // --- UnMounting method ---
  componentDidMount() {
    console.log("componentWillMount called...");
  }

  render() {
    return (
      <div>
        <h1>Moeez Tariq</h1>
      </div>
    );
  }
}
