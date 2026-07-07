import React, { Component } from "react";

export default class UsingStateWithClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  // Increment Function
  Increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  // Decrement Function
  Decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}
