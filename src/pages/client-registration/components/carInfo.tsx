import { Fragment, useState } from "react";
import { CarInfoComponentProp } from "./types";
import { IClassSelectList, IType } from "../../driver-registration/bones/types";
import SelectClassOfCars from "../../driver-registration/bones/classMultiSelect";
import SelectTypeOfCars from "../../driver-registration/bones/typeMultiSelect";

const CarInfoComponent: React.FC<CarInfoComponentProp> = ({ setTab }) => {
  const [classOfCars, setClassOfCars] = useState<IClassSelectList[]>([]);
  const [typesOfCars, setTypeOfCars] = useState<IType[]>([]);
  return (
    <Fragment>
      <form className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium pb-2 text-gray-700"
              >
                Class of cars owned
              </label>
              <SelectClassOfCars
                classSelect={classOfCars}
                setClassSelect={setClassOfCars}
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium pb-2 text-gray-700"
              >
                Type of Cars (Manual or Automatic)
              </label>
              <SelectTypeOfCars type={typesOfCars} setType={setTypeOfCars} />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="company"
                className="block text-sm pb-2 font-medium text-gray-700"
              >
                Colour of car
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="mt-1 block w-full border-none bg-gray-100 rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
              />
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
                onClick={() => setTab("carImages")}
                type="button"
                className="ml-5 bg-pink-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default CarInfoComponent;
