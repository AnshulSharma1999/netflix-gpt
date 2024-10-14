import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="flex justify-between absolute w-screen z-10 bg-gradient-to-b from-black">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      />

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
