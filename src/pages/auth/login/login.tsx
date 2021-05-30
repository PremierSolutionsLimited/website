import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const bgImage =
  "https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Login | Hire A Driver";
  }, []);

  return (
    <Fragment>
      <div className="min-h-screen bg-white flex w-full">
        <div
          className={
            "w-full sm:w-full md:w-6/12 lg:w-5/12 flex items-start justify-between flex-col px-4 sm:px-6 py-10 lg:flex-none lg:px-20"
          }
        >
          <div />
          <div className="w-full flex flex-col justify-center items-start ">
            <div className="mx-auto w-full max-w-sm ">
              <div className={""}>
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className={"mt-10"}>
                <h2 className=" text-4xl font-extrabold text-pink-600">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Please login into your account
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div
                      className={`border w-full ${
                        active === "email"
                          ? "border-pink-400"
                          : "border-transaparent"
                      }  p-3 rounded-md`}
                    >
                      <label
                        htmlFor="email"
                        className={`block text-sm font-light text-gray-400`}
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e?.target?.value)}
                          onFocus={() => setActive("email")}
                          onBlur={() => setActive(null)}
                          placeholder={"eg. johndoe@something.com"}
                          className="appearance-none block p-0 w-full border-none rounded-md placeholder-gray-500 focus:outline-none  focus:ring-gree-500 focus:border-gree-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div
                      className={`border ${
                        active === "password"
                          ? "border-pink-400"
                          : "border-transaparent"
                      }  p-3 rounded-md`}
                    >
                      <label
                        htmlFor="password"
                        className={`block text-sm font-light text-gray-400`}
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          required
                          onFocus={() => setActive("password")}
                          onBlur={() => setActive(null)}
                          value={password}
                          onChange={(e) => setPassword(e?.target?.value)}
                          placeholder={"eg. * * * * *"}
                          className="appearance-none p-0 block w-full focus:ring-0 border-none rounded-md placeholder-gray-500 focus:outline-none  focus:ring-gree-500 focus:border-gree-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember_me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="/login"
                          className="font-light text-red-600 hover:text-red-500 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div className={"flex justify-end"}>
                      <button
                        type="submit"
                        className=" flex justify-center py-3  px-20 border border-transparent rounded-md shadow-lg text-sm font-light text-white bg-pink-900 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-row items-center justify-center mt-10 font-light">
                    <div>Don't have an account? </div>
                    <Link
                      to="/signup"
                      type="button"
                      className="underline text-pink-900 font-bold ml-1 focus:outline-none"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"flex flex-col items-center w-full"}>
            <i className="mt-2 text-sm font-light sm:text-sm md:text-base text-gray-700">
              Powered by Polymorph Labs Ghana Limited
            </i>
            <span className="mt-1 text-sm font-light text-gray-400">
              Copyright 2021. All Rights Reserved
            </span>
          </div>
        </div>
        <div className="hidden lg:block relative w-6/12 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bgImage}
            // src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
