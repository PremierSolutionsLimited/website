/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import CardPng from "../../../assets/car2.png";

export default function GetStartedComponent() {
  return (
    <Fragment>
      <div className="bg-gray-100 relative">
        <div className="max-w-7xl mx-auto pt-12 pb-0 px-4 sm:px-6 lg:px-8">
          <div
            className="hidden sm:hidden md:block absolute left-1/2  transform -translate-x-1/2 bottom-10 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div>
          <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <section className="relative">
              {/* Illustration behind hero content */}

              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-12  md:pb-20">
                  {/* Section header */}
                  <div className=" pb-12 md:pb-16">
                    <h1
                      className="text-4xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Let a Professional
                    </h1>
                    <h1
                      className="text-4xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-700">
                        take the wheel
                      </span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                      <p
                        className="text-md text-gray-800 font-light mb-8"
                        data-aos="zoom-y-out"
                        data-aos-delay="150"
                      >
                        To drive you and your family, you will need a private
                        car driver with excellent chauffeuring capabilities.
                        Hire the best auto drivers in your area that are
                        professional and qualified to obey all safety
                        regulations.
                      </p>
                      <div className={"block sm:block md:hidden"}>
                        <Link to="/signup">
                          <div className="flex items-center justify-center text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 w-full mb-4 sm:w-auto sm:mb-0">
                            Become a driver
                          </div>
                        </Link>
                        <Link to="/signup">
                          <div className="flex items-center justify-center text-white py-5 px-8  rounded-full bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">
                            Book a driver now
                          </div>
                        </Link>
                      </div>
                      <div
                        className="hidden mt-14 sm:hidden max-w-xs mx-auto sm:max-w-none md:flex"
                        data-aos="zoom-y-out"
                        data-aos-delay="300"
                      >
                        <Link to="/signup">
                          <a className="btn text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 hover:text-white w-full mb-4 sm:w-auto sm:mb-0">
                            Become a driver
                          </a>
                        </Link>
                        <Link to="/signup">
                          <a className="btn text-white py-5 px-8  rounded-full bg-black hover:bg-gray-800 hover:text-white w-full sm:w-auto sm:ml-4">
                            Book a driver now
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="hidden sm:hidden z-30 md:block aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img src={CardPng} alt="car" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
