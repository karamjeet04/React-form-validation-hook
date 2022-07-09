import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue); //enteredValue.trim() !== "";(not write hard code)
  const hasError = !valueIsValid && isTouched;

  const valueChangeHAndler = (event) => {
    setEnteredValue(event.target.value);
  };
  const InputBLurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    InputBLurHandler,
    valueChangeHAndler,
    reset: reset,
  };
};

export default useInput;
