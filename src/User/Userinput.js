import React from "react";
import { useState } from "react";
const Userinput = () => {
  const [state, setState] = useState("");

  const handlechange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const cilcked = () => {
    console.log("error", state);
    let value = state.toUpperCase();
    setState(value);
  };

  return (
    <div>
      <input type="text" value={state} onChange={handlechange} />

      <button onClick={cilcked}>button</button>
      <h1>{state}</h1>
    </div>
  );
};

export default Userinput;
