/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useEffect, lazy, Suspense } from "react";
import { Link, useHistory } from "react-router-dom";
import { ContextLoader } from "../../../shared/loaders";

const ForgotPasswordComponent = lazy(() => import("../../fogotpassword"));

const bgImage =
  "https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

  const { push } = useHistory();

  useEffect(() => {
    document.title = "Client Login | Hire A Driver";
  }, []);

  return (
    <Fragment>
      <div className="min-h-screen bg-white flex">
        <button
          type="button"
          onClick={() => push("/")}
          className="hidden sm:hidden md:flex lg:block relative w-0 flex-1 focus:outline-none"
        >
          <div className="flex flex-col ">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={bgImage}
              alt=""
            />
            <div
              className={"absolute top-0 bg-black bg-opacity-10 h-full w-full"}
            >
              {/* <div className="relative">
                <img
                  src={LogoFanbaseSmall}
                  className=" h-auto absolute -top-48 w-auto"
                  alt="logo"
                />
              </div> */}
            </div>
          </div>
        </button>

        <div className="flex-1 relative flex flex-col justify-center py-12 sm:px-2 w-3/12 lg:flex-none lg:mx-24 xl:mx-36">
          <div className="w-full">
            <div>
              <div className={""}>
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-pink-600">
                Client Login
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium pb-2 text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Eg. johndoe@something.com"
                        required
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                        className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 mt-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium py-2 text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="**************"
                        required
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPassword(e.target.value)
                        }
                        className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between my-6">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-pink-600 focus:ring-pink-700 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <button
                        type={"button"}
                        onClick={() =>
                          setShowForgotPassword(!showForgotPassword)
                        }
                        className="font-medium text-pink-600 hover:text-pink-700 focus:outline-none"
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </div>

                  {/* <Link href="/finish-profile"> */}
                  <button
                    type="submit"
                    className="w-full flex justify-center h-12 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring-offset-2 focus:ring-pink-700"
                  >
                    Log In
                  </button>
                  {/* </Link> */}
                </form>
              </div>
              <div className="flex flex-row items-center justify-center mt-3 font-light">
                <div>Don't have an account? </div>
                <Link to="/client-signup">
                  <button
                    type="button"
                    className="underline text-pink-600 ml-1 focus:outline-none"
                  >
                    Sign up
                  </button>
                </Link>
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
      </div>
      <Suspense fallback={ContextLoader()}>
        <ForgotPasswordComponent
          show={showForgotPassword}
          setShow={setShowForgotPassword}
        />
      </Suspense>
    </Fragment>
  );
};

export default Login;
