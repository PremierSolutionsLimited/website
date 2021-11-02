import { Fragment, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { StageSpinner } from "react-spinners-kit";
import { useRegistrationProvider } from "../../../services/context";
import { differenceInCalendarYears } from "date-fns";
import { DatePicker } from "antd";
import Logo from "../../../assets/images/logo_white.png";
import { useLazyQuery } from "@apollo/client";
import { checkClientMail } from "../../../services/graphql/checkmail/query";
import toast from "react-hot-toast";
import moment from "moment";

const bgImage =
  "https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

const Signup = () => {
  useEffect(() => {
    document.title = "Client Signup | Hire A Driver";
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [title, setTitle] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const { push } = useHistory();
  const [{ startRegistration }] = useRegistrationProvider();

  const [isClientBelowAge, setIsClientBelowAge] = useState<boolean>(false);
  const [checkIfTaken, { data: isTaken, loading: checking }] =
    useLazyQuery(checkClientMail);
  const [loading, setLoading] = useState<boolean>(false);

  // wait function
  function wait(timeout: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  function checkUsersAge(dob: string) {
    let currentDate = new Date();
    let userDate = new Date(dob);
    let age = differenceInCalendarYears(currentDate, userDate);
    if (age >= 18) {
      return setIsClientBelowAge(false);
    } else {
      return setIsClientBelowAge(true);
    }
  }

  useEffect(() => {
    if (dob) {
      checkUsersAge(dob);
    }
  }, [dob]);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   checkIfTaken({variables:{filter:{email}}})
  //   while(checking){
  //     setLoading(checking)
  //   }
  //   if(isTaken?.checkClientMail){

  //   }
  //   let data = {
  //     firstName,
  //     lastName,
  //     dob: new Date(dob),
  //     email,
  //     gender: title === "MRS" || title === "MISS" ? "FEMALE" : "MALE",
  //     title,
  //     otherNames,
  //     typeOfRegistration: "Client",
  //   };
  //   setLoading(true);
  //   wait(2000).then(async () => {
  //     setLoading(false);
  //     await startRegistration(data);
  //     push("/client-registration");
  //   });
  // };

  const disabledDate = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(18, "years");
    return current > start;
  };

  useEffect(() => {
    if (isTaken === undefined) {
      return;
    } else if (isTaken?.checkClientMail) {
      toast?.error("This email is already taken", { id: "emailTaken" });
    } else if (isTaken?.checkClientMail === false) {
      setLoading(true);
      let data = {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        gender: title === "MRS" || title === "MISS" ? "FEMALE" : "MALE",
        title,
        otherNames,
        typeOfRegistration: "Client",
      };
      wait(2000).then(async () => {
        setLoading(false);
        await startRegistration(data);
        push("/client-registration");
      });
    }
  }, [
    isTaken,
    dob,
    email,
    firstName,
    title,
    otherNames,
    lastName,
    push,
    startRegistration,
  ]);

  useEffect(() => {
    setDob(moment()?.subtract(18, "years")?.toString());
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

        <div className="flex-1 relative flex flex-col justify-center py-12 md:px-0 px-5 sm:px-5 w-3/12 lg:flex-none lg:mx-24 xl:mx-36">
          <div className="w-full">
            <div>
              <img className="h-14 w-auto" src={Logo} alt="Workflow" />
              <h2 className="mt-6 text-3xl font-bold text-pink-600">
                Client Registration
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6">
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className="my-1 px-2 w-1/2 overflow-hidden">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm pb-1 font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Eg. John "
                            required
                            value={firstName}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setFirstName(e.target.value)}
                            className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="my-1 px-2 w-1/2 overflow-hidden">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm pb-1 font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Eg. Doe"
                            required
                            value={lastName}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setLastName(e.target.value)}
                            className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className="my-0 px-2 w-1/2 overflow-hidden">
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm pb-1 font-medium text-gray-700"
                        >
                          Other Names
                        </label>
                        <div className="mt-1">
                          <input
                            id="text"
                            name="text"
                            type="text"
                            autoComplete="text"
                            placeholder="Eg. Jr."
                            value={otherNames}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setOtherNames(e.target.value)}
                            required
                            className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="my-0 px-2 w-1/2 overflow-hidden">
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm pb-1 font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          value={title}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setTitle(e.target.value)
                          }
                          className="block w-full mt-1 text-sm py-3 px-3 form-select bg-gray-100 p-2 border-none rounded-none shadow-sm placeholder-gray-200 focus:outline-none focus:ring-white focus:border-white"
                        >
                          <option>Please Choose</option>
                          <option value="MR">Mr</option>
                          <option value="MRS">Mrs</option>
                          <option value="MISS">Miss</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm pb-1 font-medium text-gray-700"
                    >
                      Date of Birth
                    </label>
                    <div className={" bg-gray-100 p-1.5"}>
                      {/* <input
                        required
                        type={"date"}
                        id={"dob"}
                        value={dob}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setDob(e.target.value)
                        }
                        className="mt-1 block w-full pl-1 pr-1 py-1 text-base bg-gray-100 border-none focus:outline-none focus:ring-gray-100 focus:border-gray-100 sm:text-sm rounded-none"
                      /> */}

                      <DatePicker
                        defaultValue={moment()?.subtract(18, "years")}
                        onChange={(data: any) => {
                          setDob(data);
                        }}
                        disabledDate={disabledDate}
                        className={
                          "border border-none w-full bg-gray-100 focus:border-none"
                        }
                      />
                    </div>
                    {isClientBelowAge && (
                      <Fragment>
                        <p className="font-medium mt-1 text-xs text-red-600 hover:text-red-700">
                          You must be at least 18 years to sign up
                        </p>
                      </Fragment>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm pb-1 font-medium text-gray-700"
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
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                        required
                        className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                      />
                    </div>
                  </div>{" "}
                  <button
                    type="button"
                    onClick={(e) => {
                      e?.preventDefault();
                      checkIfTaken({ variables: { filter: { email } } });
                    }}
                    disabled={isClientBelowAge}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring-offset-2 focus:ring-pink-700"
                  >
                    {loading || checking ? (
                      <Fragment>
                        <StageSpinner color="#fff" loading size={20} />
                      </Fragment>
                    ) : (
                      <Fragment>Get Started</Fragment>
                    )}
                  </button>
                </form>
              </div>
              <div className="text-center font-light mt-3  text-gray-900 text-sm">
                By signing up, you agree to our terms and privacy policy.
              </div>
              <div className="text-center font-light text-gray-900 text-sm">
                We do not allow adult content
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-10 font-light">
            <div>Already have an account? </div>
            <Link to="/client-login">
              <button
                type="button"
                className="underline text-pink-600 ml-1 focus:outline-none"
              >
                Log In
              </button>
            </Link>
          </div>
          <div className={"flex flex-col items-center w-full"}>
            <div className="mt-2 text-sm font-light sm:text-sm md:text-base text-gray-700">
              Powered by Polymorph Labs Ghana Limited
            </div>
            <span className="mt-1 text-sm font-light text-gray-400">
              Copyright 2021. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
