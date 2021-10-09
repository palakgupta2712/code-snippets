import React from "react";
import SignInWithButton from "./SignInWithButton";
import { signInWithGoogle } from "../../firebase";

function Login() {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Sign into your account
            </h1>

            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div class="flex text-gray-300">
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
