import React, { Component } from "react";

class MultipleInputsWithClassComponent extends Component {
  // State
  state = {
    firstName: "",
    lastName: "",
    email: "",
  };

  // Handle Input Change
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  // Handle Form Submit
  handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name:", this.state.firstName);
    console.log("Last Name:", this.state.lastName);
    console.log("Email:", this.state.email);

    // Reset Form
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  render() {
    return (
      <div className="max-w-5xl mx-auto mt-10 p-10">
        <h1 className="mb-6 text-3xl font-bold">
          Multiple Inputs - Class Component
        </h1>

        <form onSubmit={this.handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 inline-block text-sm font-medium text-slate-900"
            >
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="Enter your first name"
              autoComplete="off"
              className="w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 inline-block text-sm font-medium text-slate-900"
            >
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Enter your last name"
              autoComplete="off"
              className="w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm font-medium text-slate-900"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
              autoComplete="off"
              className="w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MultipleInputsWithClassComponent;

// import React, { useState } from "react";

// function MultipleInputsWithClassComponent() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter your name"
//       />

//       <h2>Name: {name}</h2>
//     </div>
//   );
// }

// export default MultipleInputsWithClassComponent;
