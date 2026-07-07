import React, { useEffect, useState } from "react";

function ExampleUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);

    // Cleanup Function
    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []);

  return (
    <div className="App">
      <h1>Count is: {count}</h1>
    </div>
  );
}

export default ExampleUseEffect;
