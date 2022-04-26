import { Fragment } from "react";
import HeaderSvg from "../../../components/svgs/header";
import Offers from "./offers";
import Image1 from "../../../assets/images/1000_F_1795123_AbL0VAydISbu4ablvaFt3ZsXCUeJ78.jpg"
import Image2 from "../../../assets/images/1000_F_124642680_FYfbwP9fTFf5C0jx6XAtHq5Mj7U5jx0o.jpg"
import Image3 from "../../../assets/images/beach-cape-coast-ghana-morning_101709-1033.jpg"

const UsersComponent = () => {
  return (
    <Fragment>
      <div id={"offers"} className="bg-white" style={{scrollBehavior: "smooth"}}>
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
            <Offers />

            <ul className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 relative aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={Image2}
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
                      src={Image1}
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
                      src={Image3}
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
