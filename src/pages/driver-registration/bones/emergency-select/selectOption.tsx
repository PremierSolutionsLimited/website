import { Fragment } from "react";
import { SingleEmergencySelectProps } from "../../../client-registration/bones/types";

const SingleSelectOption: React.FC<SingleEmergencySelectProps> = ({
  name,
  setName,
  relationship,
  setRelationShip,
  telephone,
  setTelephone,
  phone,
  setPhone,
  address,
  setAddress,
}) => {
  return (
    <Fragment>
      <div className="col-span-12 sm:col-span-12">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          Telephone
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
    </Fragment>
  );
};

export default SingleSelectOption;
