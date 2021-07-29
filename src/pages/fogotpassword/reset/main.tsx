import { Fragment } from "react";
import { VerifyCodeComponentProp } from "./types";
import NewPasswordSvg from "../../../components/svgs/newpassword";

const SendCodeComponent = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: VerifyCodeComponentProp) => {
  return (
    <Fragment>
      <div className="col-span-2">
        <NewPasswordSvg className=" w-full h-36" />
      </div>
      <div className="col-span-2">
        <h2 className="text-xl font-bold">Forgot Your Password ?</h2>
      </div>
      <div className="col-span-2 py-5">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Eg. ******"
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
          placeholder="Eg. ******"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
        />
      </div>
    </Fragment>
  );
};

export default SendCodeComponent;
