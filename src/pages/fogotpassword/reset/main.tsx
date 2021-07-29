import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { ApolloError, useMutation } from "@apollo/client";
import { ResetPasswordInput, ResetPasswordOutput } from "./types";
import { RESET_CLIENT_CODE } from "../../../services/graphql/auth";
import { CircleSpinner } from "react-spinners-kit";
import NewPasswordSvg from "../../../components/svgs/newpassword";
import toast from "react-hot-toast";
import _ from "lodash";

const SendCodeComponent = () => {
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
      <div className="col-span-2">
        <NewPasswordSvg className=" w-full h-36" />
      </div>
      <div className="col-span-2">
        <h2 className="text-xl font-bold">Reset your password?</h2>
      </div>
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
      <div className="col-span-2 py-5">
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
      <div className="grid grid-cols-2 border-t cursor-pointer bg-white shadow-none">
        <button
          className={
            "border-r col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none "
          }
        >
          <span className={"text-lg font-light"}>Close</span>
        </button>

        <button
          typeof="button"
          onClick={handleResetPassword}
          disabled={resettingPassword}
          className={
            "border-r  col-span-1 flex justify-center p-5 hover:bg-gray-100 focus:outline-none  "
          }
        >
          {resettingPassword ? (
            <Fragment>
              <CircleSpinner loading color={"#d81b60"} size={18} />
            </Fragment>
          ) : (
            <Fragment>
              <span className={"text-lg font-light"}>Reset Password</span>
            </Fragment>
          )}
        </button>
      </div>
    </Fragment>
  );
};

export default SendCodeComponent;
