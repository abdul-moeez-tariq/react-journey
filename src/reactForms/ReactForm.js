import React from "react";

function ReactForm() {
  return (
    <div className="mt-10 p-10">
      <h1 className="App text-2xl font-bold">React Form</h1>
      <form className="space-y-5">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="text-slate-900 font-medium text-sm inline-block"
          >
            First Name
          </label>
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-none dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
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
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            required
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-none dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
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
            placeholder="Enter your email here"
            required
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-none dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
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
