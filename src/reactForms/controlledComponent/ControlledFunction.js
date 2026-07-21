import React, { useState } from "react";

function ControlledFunction() {
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="text-slate-900 font-medium text-sm inline-block"
          >
            Enter Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="p-3 text-sm text-slate-900 rounded-md bg-white w-full focus:outline-none dark:text-slate-50 dark:bg-neutral-700"
            autoComplete="off"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-5 p-3 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none"
        >
          Submit
        </button>

        {/* <input type="submit" value={submit}></input> */}
      </form>
    </div>
  );
}

export default ControlledFunction;
