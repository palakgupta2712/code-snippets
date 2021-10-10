import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">&#60; Code Snippets &#47;&#62;</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="ml-auto text-white flex justify-center items-center mr-5">
              {user && (
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="w-8 h-8 mx-1 rounded-full flex-shrink-0 object-cover object-center"
                />
              )}

              {user?.displayName}
            </div>
            <Link to="/" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/snippets" className="mr-5 hover:text-white">
              Snippets
            </Link>
            {user ? (
              <Button title="Sign Out" onClick={logout} path="/" />
            ) : (
              <Button title="Sign In" path="/login" />
            )}{" "}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
