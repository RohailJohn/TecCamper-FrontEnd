import React from "react";
import Navbar from "../Navbar/navbar";

function Register() {
  return (
    <div>
      <div>
        <Navbar />
        <div class="flex flex-col items-center justify-center min-h-screen bg-white">
          <div class="bg-red-500 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
            <div class="text-white pb-4 text-3xl font-semibold">
              Register YourSelf !!
            </div>
            <input
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
              id="username"
              type="text"
              placeholder="Name"
            />
            <input
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
              id="email"
              type="email"
              placeholder="Email"
            />
            <input
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
              id="password"
              type="password"
              placeholder="Password"
            />
            <input
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
              id="password"
              type="password"
              placeholder="Confirm Password"
            />
            <select
              name="Role"
              id=""
              class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
            >
              <option value="User">User</option>
              <option value="User">Client</option>
            </select>
            <button class="inline-block mt-2 w-full bg-white-600 hover:bg-white hover:text-red-500  px-6 py-2 rounded text-white shadow-lg">
              Register
            </button>
            <div class="pt-5 flex flex-col items-center">
              <li class="inline-block text-white font-normal text-sm pt-2">
                Already Have An Account? Login YourSelf ...
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

export default Register;
