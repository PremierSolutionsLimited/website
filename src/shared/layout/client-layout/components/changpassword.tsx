import { Fragment, useState } from "react";
import { ChangePasswordComponentProp } from "./types";
import { useMediaQuery } from "react-responsive";
import { BasicModal } from "../../../../components/modal";
import { XIcon } from "@heroicons/react/outline";

const MainComponent: React.FC<ChangePasswordComponentProp> = ({
  setShow,
  show,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <Fragment>
      <BasicModal
        show={show}
        setShow={setShow}
        size={isTabletOrMobile ? 100 : 30}
      >
        <div
          className={
            "w-full border-b shadow-none border-gray-200 flex flex-row justify-between px-8 pt-5 pb-3 items-center"
          }
        >
          <span className={"font-medium text-xl"}>Change Your Password</span>

          <div>
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setShow(false)}
            >
              <XIcon className={"h-6 w-6 text-red-300"} />
            </button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-12 gap-3 px-8">
          <div className="col-span-12 sm:col-span-12 md:col-span-12">
            <label
              htmlFor="url"
              className="block text-sm pb-2 font-medium text-gray-700"
            >
              Old Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
              placeholder=""
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-12">
            <label
              htmlFor="url"
              className="block text-sm pb-2 font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              className="shadow-none font-light py-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
              placeholder=""
            />
          </div>
        </div>
        <div className="py-5 px-5 border-t border-gray-200 mt-5  flex justify-end">
          <span className="inline-flex rounded-none shadow-sm mr-2 ">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="inline-flex rounded-lg items-center px-6 py-2 border border-pink-600 text-sm leading-5 font-light text-pink-600 hover:text-pink-600 bg-white hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
            >
              <span className="mx-1">Close</span>
            </button>
          </span>
          <span className="inline-flex rounded-none shadow-sm ">
            <button
              type="submit"
              className="inline-flex flex-row items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-gray focus:border-pink-600 active:bg-pink-600 transition duration-150 ease-in-out"
            >
              <span className="mx-1">Save</span>
            </button>
          </span>
        </div>
      </BasicModal>
    </Fragment>
  );
};

export default MainComponent;
