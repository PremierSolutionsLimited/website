/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ApolloError, useMutation } from "@apollo/client";
import { ResetPasswordInput, ResetPasswordOutput } from "./types";
import { RESET_CLIENT_CODE } from "../../../services/graphql/auth";
import { CircleSpinner } from "react-spinners-kit";
import Logo from "../../../assets/images/logo.png";
import toast from "react-hot-toast";
import _ from "lodash";

const SendCodeComponent = () => {
  useEffect(() => {
    document.title = "Reset Password | Hire A Driver";
  }, []);

  const { push } = useHistory();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [invokeResetPassword, { loading: resettingPassword }] = useMutation<
    ResetPasswordOutput,
    ResetPasswordInput
  >(RESET_CLIENT_CODE);

  const resetStates = () => {
    setPassword("");
    setConfirmPassword("");
  };

  // reset client password
  const handleResetPassword = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Your passwords do not match");
    }
    invokeResetPassword({
      variables: {
        newPassword: password,
      },
    })
      .then(() => {
        resetStates();
        return push("/app/");
      })
      .catch((e: ApolloError) => {
        return toast.error(
          _.startCase(_.lowerCase(e?.graphQLErrors[0]?.message))
        );
      });
  };
  return (
    <Fragment>
      <div className="bg-white min-h-screen flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex">
                  <span className="sr-only">Workflow</span>
                  <img className="h-32 w-auto" src={Logo} alt="" />
                </a>
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Reset your password
                </h1>
                <div className="mt-6">
                  <Link
                    to="/"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
                <div
                  className={"bg-white max-w-xl grid grid-cols-2 shadow-none"}
                >
                  <div className="col-span-2 pt-5">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                  <div className="col-span-2 pt-5">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    />
                  </div>
                  <div className="col-span-2 py-5">
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      disabled={resettingPassword}
                      className="w-full flex justify-center h-12 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring-offset-2 focus:ring-pink-700"
                    >
                      {resettingPassword ? (
                        <Fragment>
                          <CircleSpinner color="#fff" loading size={20} />
                        </Fragment>
                      ) : (
                        <Fragment>Reset</Fragment>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 bg-gray-50">
            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
              <nav className="flex space-x-4">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  Contact Support
                </a>
                <span
                  className="inline-block border-l border-gray-300"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  Status
                </a>
                <span
                  className="inline-block border-l border-gray-300"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-600"
                >
                  Twitter
                </a>
              </nav>
            </div>
          </footer>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SendCodeComponent;
