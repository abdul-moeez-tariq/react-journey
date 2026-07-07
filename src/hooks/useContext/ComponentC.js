import React, { useContext } from "react";
import { DesignationContext, NameContext } from "../../App";

function ComponentC() {
  const myName = useContext(NameContext);
  const myDesignationContext = useContext(DesignationContext);
  return (
    <div className="App">
      <h1>I am Component C</h1>
      <h1>{myName}</h1>
      <h1>{myDesignationContext}</h1>
    </div>
  );
}

export default ComponentC;
