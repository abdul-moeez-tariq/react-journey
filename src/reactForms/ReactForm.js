import React, { useState } from "react";

function ReactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Event Handler
  const handleSubmit = (e) => {
    // prevent the page to reload on submt button
    e.preventDefault();

    // // user object
    // const user = {
    //   firstName,
    //   lastName,
    //   email,
    // };

    // Added user information to the local storage
    // localStorage.setItem("user", JSON.stringify(user));

    // const storedUser = JSON.parse(localStorage.getItem("user"));

    // console.log("User is: ", storedUser);

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    // Reset fields
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10">
      <h1 className="App text-2xl font-bold">React Form</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="text-slate-900 font-medium text-sm inline-block"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            required
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full focus:outline-none dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
            autoComplete="off"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="text-slate-900 font-medium text-sm inline-block"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            required
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full focus:outline-none dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
            autoComplete="off"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-slate-900 font-medium text-sm inline-block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
            required
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full focus:outline-none dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
            autoComplete="off"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full p-3 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default ReactForm;
