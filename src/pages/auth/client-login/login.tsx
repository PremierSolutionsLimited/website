/* eslint-disable jsx-a11y/anchor-is-valid */
import { ApolloError, useMutation } from "@apollo/client";
import { Fragment, useState, useEffect, lazy, Suspense } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthProvider } from "../../../services/context";
import { LOGIN_CLIENT } from "../../../services/graphql/auth";
import { ContextLoader } from "../../../shared/loaders";
import { LoginInputProps, LoginOutputProps } from "./types";
import { StageSpinner } from "react-spinners-kit";
import Logo from "../../../assets/PC_logo_no_bg.png";
import BgImage from "../../../assets/images/005.jpg";
import _ from "lodash";
import toast from "react-hot-toast";
import { getToken } from "@firebase/messaging";
import { messaging } from "../../../services/firebase";

const ForgotPasswordComponent = lazy(() => import("../../fogotpassword"));

//const bgImage ="https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

const Login = () => {
  const [{ signIn }] = useAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
  const [gettingToken, setGettingToken] = useState(false);

  const { push } = useHistory();

  const [loginInvoker, { loading }] = useMutation<
    LoginOutputProps,
    LoginInputProps
  >(LOGIN_CLIENT);

  useEffect(() => {
    document.title = "Client Login | Premier Chauffeur";
  }, []);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGettingToken(true);
    const publicKey = process?.env?.REACT_APP_PUBLIC_VAPID_KEY;
    //console.log(publicKey)
    getToken(messaging, { vapidKey: publicKey })
    ?.then((token) => {
      setGettingToken(false);
      console.log("Token is: ",token)
      loginInvoker({
        variables: {
          email,
          password,
          notificationToken: token
        },
      })
        .then(async ({ data }) => {
          await signIn(data?.loginClient);
          push("/app/");
          toast.success(`Welcome Back ${data?.loginClient?.client?.firstName}!`);
        })
        .catch((e: ApolloError) => {
          toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)), {
            id: "loginError",
          });
        });
    })
    ?.catch((e) => {
      setGettingToken(false);
      toast.error(
        e?.toString() ===
          "AbortError: Registration failed - push service error"
          ? "This browser doesn't support push notifications. Kindly use other browser"
          : "Notifications not allowed in your browser, Kindly allow for notifications in your browser..."
      );
      console.log("An error occurred while retrieving token. ", e);
      loginInvoker({
        variables: {
          email,
          password,
          notificationToken: ""
        },
      })
        .then(async ({ data }) => {
          await signIn(data?.loginClient);
          push("/app/");
          toast.success(`Welcome Back ${data?.loginClient?.client?.firstName}!`);
        })
        .catch((e: ApolloError) => {
          toast.error(_.startCase(_.lowerCase(e?.graphQLErrors[0]?.message)), {
            id: "loginError",
          });
        });
      // toast.success(`Welcome Back ${data?.loginClient?.client?.firstName}!`);
    });   
  };

  return (
    <Fragment>
      <div className="min-h-screen bg-white flex">
        <div
          // type="button"
          onClick={() => push("/")}
          className="hidden sm:hidden md:flex lg:block relative w-0 flex-1 focus:outline-none"
        >
          <div className="flex flex-col ">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={BgImage}
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 relative flex flex-col justify-center py-12 md:px-0 px-5 sm:px-5 w-3/12 lg:flex-none lg:mx-24 xl:mx-36">
          <div className="w-full">
            <div>
              <div className="flex justify-center cursor-pointer" onClick={() => push("/")}>
                <img className="h-40 w-auto rounded-full bg-black" src={Logo} alt="Workflow" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gold-2">
                Client Login
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium pb-2 text-gray-700"
                    >
                      Email address/Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
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
                        className="h-4 w-4 text-gold-1 focus:ring-gold-2 border-gray-300 rounded"
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
                        className="font-medium text-gold-2 hover:text-gold-1 focus:outline-none"
                      >
                        Forgot your password?
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center h-12 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold-2 hover:bg-gold-1 focus:outline-none  focus:ring-offset-2 focus:ring-gold-2"
                  >
                    {loading || gettingToken? (
                      <Fragment>
                        <StageSpinner color="#fff" loading size={20} />
                      </Fragment>
                    ) : (
                      <Fragment>Login</Fragment>
                    )}
                  </button>
                </form>
              </div>
              <div className="flex flex-row items-center justify-center mt-3 font-light">
                <div>Don't have an account? </div>
                <Link to="/client-signup">
                  <button
                    type="button"
                    className="underline text-gold-2 ml-1 focus:outline-none"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={"flex flex-col bottom-6 items-center w-full"}>
            <span className="mt-1 text-xs text-center font-light text-gray-400">
              All Rights Reserved Copyright &copy; {new Date()?.getFullYear()}
            </span>
            <i className="mt-2 text-xs text-center font-light sm:text-sm md:text-base text-gray-700">
              Powered by Polymorph Labs Ghana Limited
            </i>
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
