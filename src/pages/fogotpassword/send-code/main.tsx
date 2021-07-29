import { Fragment } from "react";
import { SendCodeComponentProp } from "./types";
import ForgotPasswordSvg from "../../../components/svgs/forgotpassword";

const SendCodeComponent = ({ email, setEmail }: SendCodeComponentProp) => {
  return (
    <Fragment>
      <div className="col-span-2">
        <ForgotPasswordSvg className=" w-full h-48" />
      </div>
      <div className="col-span-2">
        <h2 className="text-xl font-bold">Forgot Your Password ?</h2>
      </div>
      <div className="col-span-2 ">
        <div className="text-center text-sm font-light pt-2">
          {" "}
          We get it, stuff happens. Just enter your email address below and
          we'll send you a code to reset your password!
        </div>
      </div>
      <div className="col-span-2 py-5">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Eg. johndoe@something.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
        />
      </div>
    </Fragment>
  );
};

export default SendCodeComponent;
