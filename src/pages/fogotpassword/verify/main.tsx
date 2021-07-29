import { Fragment } from "react";
import { VerifyCodeComponentProp } from "./types";
import VerifyPasswordSvg from "../../../components/svgs/verifypassword";

const VerifyCodeComponent: React.FC<VerifyCodeComponentProp> = ({
  verificationCode,
  setVerificationCode,
}) => {
  return (
    <Fragment>
      <div className="col-span-2">
        <VerifyPasswordSvg className=" w-full h-48" />
      </div>
      <div className="col-span-2">
        <h2 className="text-xl font-bold">Verify Code</h2>
      </div>
      <div className="col-span-2 ">
        <div className="text-center text-sm font-light pt-2">
          {" "}
          Please enter the six digits code sent to your mobile phone or email
          here
        </div>
      </div>
      <div className="col-span-2 py-5">
        <input
          id="number"
          name="number"
          type="number"
          autoComplete="number"
          placeholder="Eg. 123434"
          maxLength={6}
          minLength={6}
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
          className="appearance-none block bg-gray-100 w-full px-3 py-3 border-none rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
        />
      </div>
    </Fragment>
  );
};

export default VerifyCodeComponent;
