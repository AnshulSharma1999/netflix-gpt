import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignInData, checkValidSignUpData } from "../Utils/vadlidate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    var errorMessage = isSignInForm
      ? checkValidSignInData(email.current.value, password.current.value)
      : checkValidSignUpData(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(errorMessage);
  };

  const resetFormFields = () => {
    if (name.current) name.current.value = "";
    email.current.value = "";
    password.current.value = "";
    setErrorMessage(null);
  };

  const toggleSignInForm = () => {
    resetFormFields();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="netflix_Login_background_img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black p-10 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-3xl font-bold py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="my-2 w-full p-2 bg-gray-700"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="my-2 w-full p-2 bg-gray-700"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          ref={password}
          className="my-2 w-full p-2 bg-gray-700"
          type="password"
          placeholder="Password"
        ></input>
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="my-4 p-2 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NETFLIX ? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;