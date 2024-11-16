import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../Utils/constant";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error: ", error);
      navigate("/error");
    }
  };

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
  };

  const handlePreferedLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between absolute w-full z-10 bg-gradient-to-b from-black">
      <img className="w-44" src={NETFLIX_LOGO} alt="netflix_logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearchView && (
            <select
              className="bg-gray-700 text-white mx-4 my-2 p-2"
              onChange={handlePreferedLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white text-bold bg-purple-700 mx-4 p-2 my-2 rounded-lg"
            onClick={handleGptSearchView}
          >
            {showGptSearchView ? "Home Page" : "GPT Search"}
          </button>

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
