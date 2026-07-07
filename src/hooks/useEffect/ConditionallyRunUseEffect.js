import React, { useEffect, useState } from "react";

function ConditionallyRunUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Moeez");

  //   useEffect(() => {
  //     console.log("useEffect called ... " + count);
  //   }, []);

  useEffect(() => {
    console.log("Count is: " + count);
  }, [count]);

  useEffect(() => {
    console.log("Hello " + name);
  }, [name]);

  return (
    <div className="App">
      <h1>Count is: {count}</h1>

      <h1>Name is: {name}</h1>

      {/* <p>{name}, {count}</p> */}

      <button onClick={() => setCount(count + 1)}>Update State</button>
      <button onClick={() => setName("Tariq")}>Update Name</button>
    </div>
  );
}

export default ConditionallyRunUseEffect;
