import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div className="App">
      <h1>I am Component A</h1>
      <ComponentB />
    </div>
  );
}

export default ComponentA;

// Interview Definition

// useContext React Hook hai jo Context API ke through shared data ko component tree me directly access karne ki facility deta hai, jisse prop drilling avoid hoti hai aur global state ko manage karna easy ho jata hai.
