import React from "react";

import useInput from "./user-input";
const Formvalidate = () => {
  //const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameisvalid,
    hasError: nameInputHasError,
    valueChangeHAndler: nameChangeHAndler,
    InputBLurHandler: nameBlurHAndler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== ""); // anonymous function define here in line


  const {
    value: Emailentered,
    isValid: Emailenteredisvalid,
    hasError: EMailInputHasError,
    valueChangeHAndler: EmailChangeHAndler,
    InputBLurHandler: EmailBlurHAndler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formisValid = false;
  if (enteredNameisvalid && Emailenteredisvalid) {
    formisValid = true;
  }
  // const emailInputChangeHAndler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailBLurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };
  const FormSubmissionHandler = (event) => {
    event.preventDefault();
    
    if (!enteredNameisvalid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmail()
  };

  return (
    <form onSubmit={FormSubmissionHandler} className="container my-5">
      <h1 >BASIC VALIDATION FORM</h1>
      <div className="card">

      <div className="my-5  mx-5 d-flex flex-column" >
        <label htmlFor="name"> <strong className="text-success">your name</strong></label>
        <input
        
        style={{width:500}}
          type="text"
          id="name"
          onChange={nameChangeHAndler}
          onBlur={nameBlurHAndler}
          value={enteredName}
          />
        {nameInputHasError && <p className="text-danger">name must not be empty</p>}
        <label htmlFor="email"><strong className="text-success">your Email</strong></label>
        <input
         style={{width:500}}
          type="text"
          id="name"
          onChange={EmailChangeHAndler}
          onBlur={EmailBlurHAndler}
          value={Emailentered}
          />
        { EMailInputHasError && <p className="text-danger">email must contain @</p>}
      </div>
      <button  className="btn btn-success mx-5"style={{width:500}} type="submit" disabled={!formisValid}>
        submit
      </button>
          </div>
    </form>
  );
};

export default Formvalidate;
