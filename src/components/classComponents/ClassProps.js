// Export in App.js file

// Using Named Export Classes
import React, { Component } from "react";
import PropTypes from "prop-types";

// export class ClassProps extends Component {
//   render() {
//     return (
//       <>
//         <h1>Class Components with props</h1>
//         <p>Learn Class Components With {this.props.name}</p>
//         {/* <ClassPropsSecond /> */}
//       </>
//     );
//   }
// }

export class ClassPropsSecond extends Component {
  render() {
    return (
      <>
        <h1>Abdul Moeez Tariq</h1>
        <p>Learn Class Components With {this.props.name}</p>
      </>
    );
  }
}

// PropTypes using Class Components
ClassPropsSecond.propTypes = {
  name: PropTypes.string,
};
