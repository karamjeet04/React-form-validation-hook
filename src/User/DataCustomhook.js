import React from "react";
import usecostomhook from "./CustomHook";
const DataCustomhook = () => {
  const data = usecostomhook();
  return (
    <div>
      <h1>count {data.count}</h1>
      <button type="button" onClick={data.handleincrement}>
        increment
      </button>
    </div>
  );
};

export default DataCustomhook;
