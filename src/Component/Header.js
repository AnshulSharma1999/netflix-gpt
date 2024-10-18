import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { NETFLIX_LOGO } from "../Utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Automatically triggers onAuthStateChanged
    } catch (error) {
      console.error("Sign out error: ", error);
      navigate("/error"); // Handle error navigation only
    }
  };

  useEffect(() => {
    // Set up the authentication listener once on component mount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse"); // Redirect to /browse after user is authenticated
      } else {
        dispatch(removeUser());
        navigate("/"); // Redirect to home page if no user
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe(); 
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="flex justify-between absolute w-screen z-10 bg-gradient-to-b from-black">
      <img className="w-44" src={NETFLIX_LOGO} alt="netflix_logo" />
      {user && (
        <div className="flex p-2">
          <img className="h-12 w-12" src={user?.photoURL} alt="user_logo" />
          <button
            onClick={handleSignOut}
            className="text-xl text-white text-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
