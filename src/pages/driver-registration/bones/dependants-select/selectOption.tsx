import { Fragment } from "react";
import { SingleDependentsSelectProps } from "../types";

const SingleSelectOption: React.FC<SingleDependentsSelectProps> = ({
  firstName,
  setFirstName,
  relationship,
  setRelationShip,
  dob,
  setDob,
  gender,
  setGender,
  lastName,
  setLastName,
}) => {
  return (
    <Fragment>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Relationship
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={relationship}
          onChange={(e) => setRelationShip(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
          value={gender}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setGender(e.target.value)
          }
        >
          <option>Please Choose</option>
          <option value={"MALE"}>Male</option>
          <option value={"FEMALE"}>Female</option>
        </select>
      </div>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          type={"date"}
          id={"dob"}
          value={dob}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDob(e.target.value)
          }
          className="mt-1 block w-full pl-1 pr-1 py-2 text-base bg-gray-100 border-none focus:outline-none focus:ring-gray-100 focus:border-gray-100 sm:text-sm rounded-none"
        />
      </div>
    </Fragment>
  );
};

export default SingleSelectOption;
