import React from "react";
import SignInWithButton from "../components/Login/SignInWithButton";
import { signInWithGoogle } from "../firebase";

function Login() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Sign into your account
            </h1>
            {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p> */}
            <div className="flex text-gray-300">
              <SignInWithButton title="Google" signInWith={signInWithGoogle} />
              <SignInWithButton title="Github" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
