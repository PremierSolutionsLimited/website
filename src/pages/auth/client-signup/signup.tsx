import React, { Fragment, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { StageSpinner } from "react-spinners-kit";
import { useRegistrationProvider } from "../../../services/context";
import { differenceInCalendarYears } from "date-fns";
import { DatePicker } from "antd";
import Logo from "../../../assets/PC_logo_no_bg.png";
import BgImage from "../../../assets/images/009.jpg";
import { useLazyQuery } from "@apollo/client";
import {
  checkClientMail,
  checkClientPhone,
} from "../../../services/graphql/checkmail/query";
import toast from "react-hot-toast";
import moment from "moment";
import { RefreshIcon } from "@heroicons/react/outline";
// @ts-ignore
import ClientPrivacyPdf from "../../../assets/documents/client-privacy.pdf";
//@ts-ignore
import AppTermsPdf from "../../../assets/documents/app-terms.pdf";

//const bgImage ="https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

const Signup = () => {
  useEffect(() => {
    document.title = "Client Signup | Premier Chauffeur";
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [title, setTitle] = useState("");
  const [dob, setDob] = useState<any>(moment()?.subtract(18, "years"));
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [isOther, setIsOther] = useState(false);
  const { push } = useHistory();
  const [{ startRegistration }] = useRegistrationProvider();

  const [isClientBelowAge, setIsClientBelowAge] = useState<boolean>(false);
  const [checkIfEmailTaken, { data: isEmailTaken, loading: checkingEmail }] =
    useLazyQuery(checkClientMail);
  const [checkIfPhoneTaken, { data: isPhoneTaken, loading: checkingPhone }] =
    useLazyQuery(checkClientPhone);
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

  const disabledDate = (current: any) => {
    // Can not select yesterday and before
    const start = moment()?.subtract(18, "years");
    return current > start;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    e.preventDefault();
    checkIfEmailTaken({ variables: { filter: { email } } });
    checkIfPhoneTaken({ variables: { filter: { phone } } });
  };

  useEffect(() => {
    if (email === undefined) {
      console.log("here");
      return;
    } else if (isEmailTaken?.checkClientMail) {
      toast?.error("This email is already taken", { id: "emailTaken" });
    } else if (isPhoneTaken?.checkClientPhone) {
      toast?.error("This phone number is already taken", {
        id: "phoneTaken",
      });
    } else if (
      isEmailTaken?.checkClientMail === false &&
      isPhoneTaken?.checkClientPhone === false
    ) {
      setLoading(true);
      let data = {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        phone,
        gender,
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
    isEmailTaken,
    isPhoneTaken,
    dob,
    email,
    phone,
    firstName,
    title,
    otherNames,
    lastName,
    push,
    startRegistration,
    gender,
  ]);

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
              src={BgImage}
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
              <div className={`flex justify-center`}>
                <img
                  className="h-36 w-auto cursor-pointer bg-black rounded-full"
                  onClick={(e: any) => {
                    e?.preventDefault();
                    push("/");
                  }}
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gold-2">
                Client Registration
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className="my-1 px-2 w-1/2 overflow-hidden">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm pb-1 font-medium text-gray-700"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            id="firstName"
                            name="firstName"
                            autoComplete="first-name"
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
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="last-name"
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
                            id="otherNames"
                            name="otherNames"
                            autoComplete="other-names"
                            type="text"
                            placeholder="Eg. Jr."
                            value={otherNames}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setOtherNames(e.target.value)}
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
                          Title <span className="text-red-500">*</span>
                        </label>
                        {isOther ? (
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Eg. Ing."
                              name="title"
                              value={title}
                              required={true}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => setTitle(e.target.value)}
                              className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                            />
                            <div
                              className="absolute inset-y-0 z-40 rounded-full right-0 pr-3 cursor-pointer flex items-center text-gray-600 hover:text-gold-1"
                              onClick={() => setIsOther(false)}
                            >
                              <RefreshIcon
                                className="h-5 w-5 "
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        ) : (
                          <select
                            id="title"
                            name="title"
                            title="title"
                            value={title}
                            required={true}
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) => setTitle(e.target.value)}
                            className="block w-full mt-1 text-sm py-3 px-3 form-select bg-gray-100 p-2 border-none rounded-none shadow-sm placeholder-gray-200 focus:outline-none focus:ring-white focus:border-white"
                          >
                            <option value="">Please Choose</option>
                            <option value="MR">Mr</option>
                            <option value="MRS">Mrs</option>
                            <option value="MISS">Miss</option>
                            <option value="DR">Dr</option>
                            <option value="PROF">Prof</option>
                            {/*<option value="REV">Rev</option>*/}
                            <option value="OTHER">Other</option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className="my-0 px-2 w-1/2 overflow-hidden">
                      <label
                        htmlFor="password"
                        className="block text-sm pb-1 font-medium text-gray-700"
                      >
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className={" bg-gray-100 p-1.5"}>
                        <DatePicker
                          defaultValue={dob}
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
                    <div className="my-0 px-2 w-1/2 overflow-hidden">
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm pb-1 font-medium text-gray-700"
                        >
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          autoComplete="gender"
                          title="gender"
                          value={gender}
                          required
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setGender(e.target.value)
                          }
                          className="block w-full mt-1 text-sm py-3 px-3 form-select bg-gray-100 p-2 border-none rounded-none shadow-sm placeholder-gray-200 focus:outline-none focus:ring-white focus:border-white"
                        >
                          <option value="">Please Choose</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-2 overflow-hidden">
                    <div className="space-y-1 px-2 w-1/2 overflow-hidden">
                      <label
                        htmlFor="password"
                        className="block text-sm pb-1 font-medium text-gray-700"
                      >
                        Email address <span className="text-red-500">*</span>
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
                    </div>
                    <div className="space-y-1 px-2 w-1/2 overflow-hidden">
                      <label
                        htmlFor="password"
                        className="block text-sm pb-1 font-medium text-gray-700"
                      >
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="phone"
                          autoComplete="phone"
                          placeholder="Eg. 020001000"
                          value={phone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPhone(e.target.value)
                          }
                          required
                          className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div>
                    <div className="text-center font-light mt-7 mb-2  text-gray-900 text-sm">
                      By signing up, you agree to our{" "}
                      <a
                        className="text-gold-2 font-semibold hover:text-gold-1"
                        href={AppTermsPdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        terms
                      </a>{" "}
                      and{" "}
                      <a
                        className="text-gold-2 font-semibold hover:text-gold-1"
                        href={ClientPrivacyPdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        privacy policy
                      </a>
                      .
                    </div>
                    <button
                      type="submit"
                      // onClick={(e) => {
                      //   e?.preventDefault();
                      //   checkIfTaken({ variables: { filter: { email } } });
                      // }}
                      disabled={isClientBelowAge}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold-2 hover:bg-gold-1 focus:outline-none  focus:ring-offset-2 focus:ring-gold-2"
                    >
                      {loading || checkingEmail || checkingPhone ? (
                        <Fragment>
                          <StageSpinner color="#fff" loading size={20} />
                        </Fragment>
                      ) : (
                        <Fragment>Get Started</Fragment>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-10 font-light">
            <div>Already have an account? </div>
            <Link to="/client-login">
              <button
                type="button"
                className="underline text-gold-2 ml-1 focus:outline-none"
              >
                Log In
              </button>
            </Link>
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
    </Fragment>
  );
};

export default Signup;
