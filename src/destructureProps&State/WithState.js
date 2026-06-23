// Destructuring With States

import React, { Component } from "react";

export default class WithState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rameez Tariq",
      age: 22,
    };
  }

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    );
  }
}
