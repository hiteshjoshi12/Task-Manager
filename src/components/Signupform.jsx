import React from "react";
import { ArrowRight } from "lucide-react";
import useSignup from "../Hooks/useSignup";

const Signupform = ({onsignup}) => {
  const {email , password , handelsignup , Errormsg} = useSignup(onsignup);
  return (
    <form className="mt-8">

      <div className="space-y-5">
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="full-name"
              className="text-base font-medium text-gray-900"
            >
              Full Name
            </label>
          </div>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Full Name"
              id="full-name"
            ></input>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900"
            >
              Email
            </label>
          </div>
          <div className="mt-2">
            <input
              ref={email}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
              id="email"
            ></input>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-base font-medium text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              ref={password}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              placeholder="Password"
              id="password" autoComplete="on"
            ></input>
            <p>{Errormsg}</p>
          </div>
        </div>

        <div>
          <button
            onClick={handelsignup}
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            Create Account <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signupform;
