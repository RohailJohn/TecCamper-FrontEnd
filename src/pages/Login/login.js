import React from "react";
import Navbar from "../Navbar/navbar";

function Login() {
  return (
    <div>
      <div>
        <Navbar />
        <div class="flex flex-col items-center justify-center min-h-screen bg-white">
          <div class="bg-red-500 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
            <div class="text-white pb-4 text-3xl font-semibold">LogIn !!</div>
            <input
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
              id="username"
              type="text"
              placeholder="your username"
            />
            <input
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
              id="password"
              type="password"
              placeholder="password"
            />
            <button class="inline-block mt-2 w-full bg-white-600 hover:bg-white hover:text-red-500  px-6 py-2 rounded text-white shadow-lg">
              Login
            </button>
            <div class="pt-5 flex flex-col items-center">
              <li class="inline-block text-white align-baseline font-normal text-sm">
                Forgot password?Reset Password
              </li>
              <li class="inline-block text-white font-normal text-sm pt-2">
                Create A New Account ...
              </li>
            </div>
          </div>
          <p class="mt-4 text-center text-gray-400 text-xs">
            &copy;2022 Acme Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
