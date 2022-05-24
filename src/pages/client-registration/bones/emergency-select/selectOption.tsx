import { Fragment } from "react";
import { SingleEmergencySelectProps } from "../types";

const SingleSelectOption: React.FC<SingleEmergencySelectProps> = ({
  name,
  setName,
  relationship,
  setRelationShip,
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
          name="name"
          id="name"
          required
          placeholder="Eg. Maverick Abemposah"
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
          name="relationship"
          id="relationship"
          required
          placeholder="Eg. Brother"
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
          Phone
        </label>
        <input
          type="text"
          name="phone"
          required
          id="phone"
          placeholder="Eg. 0542677282"
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
          placeholder="Eg. 24 boundary street - Accra"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
        />
      </div>
    </Fragment>
  );
};

export default SingleSelectOption;
