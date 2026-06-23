// import React from "react";
import React, { Component } from "react";

// export default function WithProps(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//       <p>{props.designation}</p>
//     </div>
//   );
// }

// --------------------------------------------------------
// ---- Destructuring Props With Functional Components ----
// --------------------------------------------------------

// Destructuring With Props

// // --- First Method ---
// export default function WithProps({ name, age, designation }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{age}</p>
//       <p>{designation}</p>
//     </div>
//   );
// }

// // --- Second Method ---
// export default function WithProps(props) {
//   const { name, age, designation } = props;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{age}</p>
//       <p>{designation}</p>
//     </div>
//   );
// }

// ----------------------------------------------------
// ---- Destructuring Props With Class Components ----
// ----------------------------------------------------

class WithProps extends Component {
  render() {
    const { name, age, designation } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{designation}</p>
      </div>
    );
  }
}

export default WithProps;
