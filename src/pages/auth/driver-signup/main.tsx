import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { StageSpinner } from "react-spinners-kit";
import { useRegistrationProvider } from "../../../services/context";
import { differenceInCalendarYears } from "date-fns";
import { DatePicker } from "antd";
import Logo from "../../../assets/PC_logo_no_bg.png";
import BgImage from "../../../assets/images/004.jpg";
import { useLazyQuery } from "@apollo/client";
import { checkDriverMail, checkDriverPhone } from "../../../services/graphql/checkmail/query";
import toast from "react-hot-toast";
import moment from "moment";
// @ts-ignore
import DriverPrivacyPdf from "../../../assets/documents/driver-privacy.pdf";
//@ts-ignore
import AppTermsPdf from "../../../assets/documents/app-terms.pdf";

//const bgImage ="https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";

const DriverSignup = () => {
  useEffect(() => {
    document.title = "Driver Signup | Premier Chauffeur";
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [title, setTitle] = useState("");
  const [dob, setDob] = useState<any>(moment()?.subtract(18, "years"));
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useHistory();
  const [{ startRegistration }] = useRegistrationProvider();

  const [usersAge, setUsersAge] = useState<string>("");
  const [isDriverBelowAge, setIsDriverBelowAge] = useState<boolean>(false);

  const [checkIfEmailTaken, { data: isTaken, loading: checking }] =
    useLazyQuery(checkDriverMail);

  const [checkIfPhoneTaken, { data: isPhoneTaken, loading: checkingPhone }] =
    useLazyQuery(checkDriverPhone);

  // wait function
  function wait(timeout: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  const checkUsersAge = useCallback((dob: string) => {
    // (dob: string) {
    let currentDate = new Date();
    let userDate = new Date(dob);
    let age = differenceInCalendarYears(currentDate, userDate);
    if (age >= 18) {
      setUsersAge(age.toString());
      return setIsDriverBelowAge(false);
    } else {
      setUsersAge(age.toString());
      return setIsDriverBelowAge(true);
    }
    // }
  }, []);

  useEffect(() => {
    if (dob) {
      checkUsersAge(dob);
    }
  }, [checkUsersAge, dob]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitting");
    e.preventDefault();
    checkIfEmailTaken({ variables: { filter: { email } } });
    checkIfPhoneTaken({ variables: { filter: { phone } } });
  };

  const disabledDate = (current: any) => {
    // restrict to only 18 years and above
    const start = moment()?.subtract(18, "years");
    return current > start;
  };

  useEffect(() => {
    if (email === undefined) {
      console.log("here")
      return;
    } else if (isTaken?.checkDriverMail) {
      toast?.error("This email is already taken", { id: "emailTaken" });
    } else if (isPhoneTaken?.checkDriverPhone) {
      toast?.error("This phone number is already taken", { id: "phoneTaken" });
    } else if (
      isTaken?.checkDriverMail === false &&
      isPhoneTaken?.checkDriverPhone === false
    ) {
      setLoading(true);
      console.log("Starting")
      let data = {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        gender: gender,
        title,
        phone,
        otherNames,
        typeOfRegistration: "Driver",
        age: usersAge,
      };
      setLoading(true);
      wait(2000).then(async () => {
        setLoading(false);
        await startRegistration(data);
        push("/driver-registration");
      });
    }
  }, [
    isTaken,
    dob,
    email,
    phone,
    firstName,
    title,
    otherNames,
    lastName,
    usersAge,
    push,
    startRegistration,
    gender,
    isPhoneTaken,
  ]);

  return (
    <Fragment>
      <div className="min-h-screen bg-white flex">
        <button
          type="button"
          title="Back to main website"
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
        </button>

        <div className="flex-1 relative flex flex-col justify-center py-12 md:px-0 px-5 sm:px-5 w-3/12 lg:flex-none lg:mx-24 xl:mx-36">
          <div className="w-full">
            <div>
              <div className={`flex justify-center`}>
                <img
                  className="h-36 w-auto cursor-pointer rounded-full bg-black"
                  onClick={(e: any) => {
                    e?.preventDefault();
                    push("/");
                  }}
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gold-2">
                Driver Application
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
                          className="block text-sm pb-1  font-medium text-gray-700"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            id="firstName"
                            name="firstName"
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
                          className="block text-sm pb-1  font-medium text-gray-700"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            id="lastName"
                            name="lastName"
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
                          className="block text-sm pb-1  font-medium text-gray-700"
                        >
                          Other Names
                        </label>
                        <div className="mt-1">
                          <input
                            id="otherNames"
                            name="otherNames"
                            type="text"
                            autoComplete="text"
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
                          className="block text-sm pb-1  font-medium text-gray-700"
                        >
                          Title <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="title"
                          name="title"
                          title="title"
                          autoComplete="title"
                          required={true}
                          value={title}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setTitle(e.target.value)
                          }
                          className="block w-full mt-1 text-sm py-3 px-3 form-select bg-gray-100 p-2 border-none rounded-none shadow-sm placeholder-gray-200 focus:outline-none focus:ring-white focus:border-white"
                        >
                          <option value="">Please Choose</option>
                          <option value="MR">Mr</option>
                          <option value="MRS">Mrs</option>
                          <option value="MISS">Miss</option>
                          <option value="DR">Dr</option>
                          <option value="PROF">Prof</option>
                          {/* <option value="REV">Rev</option> */}
                          <option value="OTHER">Other</option>
                        </select>
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
                      {isDriverBelowAge && (
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
                          title="gender"
                          autoComplete="gender"
                          value={gender}
                          required={true}
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
                    <div className="px-2 w-1/2 overflow-hidden">
                      <label
                        htmlFor="password"
                        className="block text-sm pb-1 font-medium text-gray-700"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          autoComplete="phone"
                          placeholder="Eg. 0243251803"
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
                        href={DriverPrivacyPdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        privacy policy
                      </a>
                      .
                    </div>
                    <button
                      type="submit"
                      disabled={isDriverBelowAge}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold-2 hover:bg-gold-1 focus:outline-none  focus:ring-offset-2 focus:ring-gold-1"
                    >
                      {loading || checking || checkingPhone? (
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

          <div className={"flex flex-col bottom-6 items-center w-full mt-10"}>
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

export default DriverSignup;
