import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [name, setName] = useState("Jane Doe");

  useEffect(() => {
    console.log(`name changed ${name}`)
  }, [name]);

  return (
    <div className="App">
      <h1> Hello {name}</h1>;
      <h2>Change the name</h2>
      <button onClick={() => setName("CodeSandbox")}></button>
      <button onClick={() => setName("John Doe")}>John Doe</button>
    </div>
  );
};