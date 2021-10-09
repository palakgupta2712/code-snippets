import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span class="ml-3 text-xl">&#60; Code Snippets &#47;&#62;</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p>{user?.displayName}</p>
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
