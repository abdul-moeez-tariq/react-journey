import React, { Component } from "react";

// Class Component
export default class childComponent extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.callMethod}>Pass Props</button> */}

        {/* Single Parameter */}
        {/* <button onClick={() => this.props.callMethod("Moeez")}>
          Pass Props
        </button> */}

        {/* Multiple Parameter */}
        <button onClick={() => this.props.callMethod("Moeez", "Tariq")}>
          Pass Props
        </button>
      </div>
    );
  }
}

// Functional Component
// import React from 'react'

// export default function ChildComponent(props) {
//   return (
//     <div>
//       <button onClick={() => props.callMethod("Moeez", "Tariq")}>
//           Pass Props
//         </button>
//     </div>
//   )
// }
