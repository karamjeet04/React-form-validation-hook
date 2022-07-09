import { useState } from "react";

function usecostomhook() {
  const [count, setCount] = useState(0);
  const handleincrement = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleincrement,
  };
}

export default usecostomhook;
