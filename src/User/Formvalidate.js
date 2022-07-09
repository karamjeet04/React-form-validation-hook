import React from "react";
import { useState } from "react";
const Formvalidate = () => {
  const [enteredName, setentEredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameisvalid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameisvalid && enteredNameTouched;

  let formisValid = false;
  if (enteredNameisvalid) {
    formisValid = true;
  }
  const nameInputChangeHAndler = (event) => {
    setentEredName(event.target.value);
  };
  const nameInputBLurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const FormSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameisvalid) {
      return;
    }
    console.log(enteredName);
    setentEredName("");
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={FormSubmissionHandler}>
      <div>
        <label htmlFor="name">your name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHAndler}
          onBlur={nameInputBLurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p>name must not be empty</p>}
      </div>
      <button type="submit" disabled={!formisValid}>
        submit
      </button>
    </form>
  );
};

export default Formvalidate;
