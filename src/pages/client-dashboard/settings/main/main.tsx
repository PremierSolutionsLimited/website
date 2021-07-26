import { Fragment, useEffect, useState } from "react";
import { useCurrentClient } from "../../../../services/context/currentClient";
import ProfileImage from "../../../../assets/images/male.jpeg";
import moment from "moment";

const MainComponent = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [otherNames, setOtherNames] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [photograph, setPhotograph] = useState<string>("");

  const currentClient = useCurrentClient();

  useEffect(() => {
    if (currentClient) {
      setFirstName(currentClient?.firstName);
      setLastName(currentClient?.lastName);
      setOtherNames(currentClient?.otherNames);
      setUsername(currentClient?.username);
      setEmail(currentClient?.email);
      setPhone(currentClient?.phone);
      setPhotograph(currentClient?.photograph);
    }
  }, [currentClient]);
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
        {/* Main content */}
        <div className="flex-1 max-h-screen xl:overflow-y-auto">
          <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Account Settings
            </h1>

            <form className="mt-6 space-y-8 divide-y divide-y-gray-200">
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-6 sm:gap-x-4">
                <div className="sm:col-span-6">
                  <h2 className="text-xl font-medium text-gray-900">Profile</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFirstName(e.target.value)
                    }
                    className="shadow-none font-light py-2 mt-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                    placeholder="Eg. John"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLastName(e.target.value)
                    }
                    className="shadow-none font-light py-2 mt-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                    placeholder="Eg. Doe"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Other names
                  </label>
                  <input
                    type="text"
                    required
                    value={otherNames}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOtherNames(e.target.value)
                    }
                    className="shadow-none font-light py-2 mt-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                    placeholder="Eg. Jr."
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUsername(e.target.value)
                    }
                    className="shadow-none font-light py-2 mt-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                    placeholder="Eg. doe"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <img
                      className="inline-block h-14 w-14 rounded-full"
                      src={photograph || ProfileImage}
                      alt=""
                    />
                    <div className="ml-4 flex">
                      <div className="relative bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-50 focus-within:ring-blue-500">
                        <label
                          htmlFor="user-photo"
                          className="relative text-sm font-medium text-gray-900 pointer-events-none"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                        </label>
                        <input
                          id="user-photo"
                          name="user-photo"
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                        />
                      </div>
                      {photograph && (
                        <Fragment>
                          <button
                            type="button"
                            className="ml-3 bg-transparent py-2 px-3 border border-pink-600 rounded-md  text-sm font-light text-pink-600 hover:text-gray-700 focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-pink-500"
                          >
                            Remove
                          </button>
                        </Fragment>
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    className="shadow-none font-light py-2 mt-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                    placeholder="Eg. john@gmail.com"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    required
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                    className="shadow-none font-light py-2 mt-2 px-2 bg-white border focus:outline-none block w-full sm:text-sm border-gray-300 rounded-md focus:ring-pink-600  focus:shadow-outline-purple focus:border-pink-600"
                    placeholder="Eg. 0200000000"
                  />
                </div>
                <p className="text-sm text-gray-500 sm:col-span-6">
                  This account was created on{" "}
                  <time dateTime="2017-01-05T20:35:40">
                    {moment(currentClient?.createdAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </time>
                  .
                </p>
              </div>

              <div className="pt-8 flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainComponent;
