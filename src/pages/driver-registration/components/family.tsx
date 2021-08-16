import { FC, Fragment } from "react";
import { FamilyComponentProp } from "./types";
import DependentsComponentSelect from "../bones/dependants-select";

const FamilyComponent: FC<FamilyComponentProp> = ({
  nexOfKinRelation,
  setNextOfKinRelation,
  nextOfKinName,
  setNextOfKinName,
  setNextOfKinPhone,
  nextOfKinPhone,
  nextOfKinTelephone,
  setNextOfKinTelephone,
  nextOfKinAddress,
  setNextOfKinAddress,
  dependents,
  setDependents,
  setTab,
}) => {
  function handleGoToNextPage(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    return setTab("emergency");
  }
  return (
    <Fragment>
      <div className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-0 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-12">
              <label
                htmlFor="company"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Next of Kin Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={nextOfKinName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNextOfKinName(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Relationship
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={nexOfKinRelation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNextOfKinRelation(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={nextOfKinAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNextOfKinAddress(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
                name="company"
                id="company"
                value={nextOfKinPhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNextOfKinPhone(e.target.value)
                }
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-1 font-medium text-gray-700"
              >
                Telephone
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={nextOfKinTelephone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNextOfKinTelephone(e.target.value)
                }
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <DependentsComponentSelect
                dependDents={dependents}
                setDependents={setDependents}
              />
            </div>
          </div>
        </div>
        <div className="pt-6 divide-y divide-gray-200">
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
              onClick={() => setTab("personal")}
              type="button"
              className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleGoToNextPage}
              className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FamilyComponent;
