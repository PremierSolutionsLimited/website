import { Fragment } from "react";
import HeaderSvg from "../../../components/svgs/header";

const UsersComponent = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="-mt-20">
          <HeaderSvg />
        </div>
        <div className="mx-auto sm:mt-6 md:-mt-24 pb-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-20">
          <div className="space-y-12">
            <div className="space-y-5  sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl mt-10 sm:mt-10 md:mt-0 text-center font-extrabold tracking-tight sm:text-4xl">
                Our Offers.
              </h2>
              <p className="text-xl text-center pb-12 text-gray-500">
                Wherever you wish to go, our drivers will get you there safely
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 relative aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1579888286284-692fa4bdc42b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900 font-medium space-y-1">
                      <h3>Cross Country Trips</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpdmluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900  font-medium space-y-1">
                      <h3>Inter City Trips</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1610963349361-013b92f96014?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFja2FnZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900  font-medium space-y-1">
                      <h3>Short Trips</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.pexels.com/photos/1535437/pexels-photo-1535437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900  font-medium space-y-1">
                      <h3>Drop your kids off to school</h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersComponent;
