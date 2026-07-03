import React, { Component } from "react";
// import "./Stylesheet1.css";

// Importing CSS Module files
import Style1 from "./Stylesheet1.module.css";
import Style2 from "./Stylesheet2.module.css";

export default class Stylesheet1 extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={Style1.headingOne}>Welcome to react-journey</h1>

        <h1 className={Style2.headingOne}>Welcome to react-journey</h1>
      </div>
    );
  }
}
