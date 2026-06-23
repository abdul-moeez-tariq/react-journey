// Exporting in App.js file

import React, { Component } from "react";

// ---- State With Constructor ----
export default class State extends Component {
  // constructor created to initialize the object's state
  constructor() {
    super();

    // state defined
    this.state = {
      //   name: "Abdul Moeez Tariq",
      number: 1,
    };
  }

  changeName() {
    this.setState({
      name: "Full Stack JavaScript Developer",
    });
  }

  changeNumber() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.name}</h1> */}
        {/* <button type="button" value="Click" onClick={() => this.changeName()}>
          Click Me
        </button> */}

        <h1>{this.state.number}</h1>
        <button
          type="button"
          value="Number"
          onClick={() => this.changeNumber()}
        >
          Change Number
        </button>
      </div>
    );
  }
}

// When the state updated, the component is also rendered.

// // ---- State Without Constructor ----
// export default class State extends Component {
//   // constructor created to initialize the object's state
//   state = {
//     name: "Abdul Moeez Tariq",
//     number: 1,
//   };

//   //   changeName() {
//   //     this.setState({
//   //       name: "Full Stack JavaScript Developer",
//   //     });
//   //   }

//   changeNumber() {
//     this.setState({
//       name: "Full Stack JavaScript Developer",
//       number: this.state.number + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         {/* <h1>{this.state.name}</h1>
//         <button type="button" value="Click" onClick={() => this.changeName()}>
//           Click Me
//         </button> */}

//         <h1>{this.state.name}</h1>
//         <h1>{this.state.number}</h1>
//         <button
//           type="button"
//           value="Number"
//           onClick={() => this.changeNumber()}
//         >
//           Change Number
//         </button>
//       </div>
//     );
//   }
// }

// // ---- State With Constructor Using Props ----
// export default class State extends Component {
//   // constructor created to initialize the object's state
//   constructor(props) {
//     super(props);

//     // state defined
//     this.state = {
//       //   name: "Moeez Tariq",
//       name: this.props.name,
//       age: 24,
//       designation: "Full Stack Developer",
//     };
//   }

//   changeName() {
//     this.setState({
//       name: "Abdul Moeez Tariq",
//       age: 24,
//       designation: "Full Stack JavaScript Developer",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age}</h1>
//         <h1>{this.state.designation}</h1>
//         <button type="button" value="Click" onClick={() => this.changeName()}>
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }
