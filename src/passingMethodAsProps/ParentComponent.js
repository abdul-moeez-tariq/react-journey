import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class parentComponent extends Component {
  ParentMethod = (childName, surname) => {
    alert("Hello from parent component " + childName + " " + surname);
  };

  render() {
    return (
      <div>
        <ChildComponent callMethod={this.ParentMethod} />
      </div>
    );
  }
}
