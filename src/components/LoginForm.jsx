import React from "react";
import { ArrowRight } from "lucide-react";
import useLogin from "../Hooks/useLogin";

const LoginForm = ({ onLogin }) => {
  const {emailRef,passwordRef,errorMsg,handleLogin,handleForgotPassword,} = useLogin(onLogin);

  return (
  
      
      <form action="#" method="POST" className="mt-8">
        <div className="space-y-5">
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
                ref={emailRef}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                id="email"
              ></input>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
              <button
                onClick={(e) => handleForgotPassword(e)}
                className="text-sm font-semibold text-black hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="mt-2">
              <input
                ref={passwordRef}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                autoComplete="on"
              ></input>
              <p>{errorMsg}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogin}
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Get started <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </form>
    
  );
};

export default LoginForm;
