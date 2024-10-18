import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignInData, checkValidSignUpData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { Netflix_Login_Background, NETFLIX_LOGO } from "../Utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Sign Up Function
  const signUpUser = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
        photoURL: NETFLIX_LOGO,
      });

      const { uid, displayName, photoURL } = auth.currentUser;
      dispatch(
        addUser({
          uid,
          email,
          displayName,
          photoURL,
        })
      );
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  // Sign In Function
  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  const handleButtonClick = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current?.value; // Only for sign-up

    // Validation
    const errorMessage = isSignInForm
      ? checkValidSignInData(email, password)
      : checkValidSignUpData(name, email, password);

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    // Call Sign In or Sign Up
    if (isSignInForm) {
      await signInUser(email, password);
    } else {
      await signUpUser(email, password, name);
    }
  };

  const resetFormFields = () => {
    if (nameRef.current) nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
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
          src={Netflix_Login_Background}
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
            ref={nameRef}
            className="my-2 w-full p-2 bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={emailRef}
          className="my-2 w-full p-2 bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={passwordRef}
          className="my-2 w-full p-2 bg-gray-700"
          type="password"
          placeholder="Password"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          onClick={handleButtonClick}
          className="my-4 p-2 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NETFLIX? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
