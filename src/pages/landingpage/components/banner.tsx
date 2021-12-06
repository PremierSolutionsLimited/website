import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import image1 from "../../../assets/images/chauf.jpeg";
import image3 from "../../../assets/images/chauf3.jpeg";
import image4 from "../../../assets/images/chauf4.jpeg";
import { Link } from "react-router-dom";

const BgElement = Element.BgElement;

export default function Banner() {
  return (
    <>
      <BannerAnim arrow={false} prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "#364D79",
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <div
              className="relative flex items-center"
              style={{ height: "70vh" }}
            >
              <div className="max-w-full mx-auto pt-12 pb-0 px-4 sm:px-6 lg:px-12">
                <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  <section className="relative">
                    <div className="max-w-full">
                      <div className="pb-12 flex justify-between md:pb-20">
                        <div className="pb-12 glass  px-4 py-5 md:pb-16">
                          <TweenOne
                            animation={{ y: 30, opacity: 0, type: "from" }}
                          >
                            <h1
                              className="text-4xl text-left md:text-6xl text-gray-50 font-bold leading-tighter tracking-tighter mb-4"
                              data-aos="zoom-y-out"
                            >
                              Premier Chauffeur
                            </h1>
                          </TweenOne>

                          <h1
                            className="text-4xl text-left md:text-6xl font-bold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                          >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-700">
                              We Drive, You Relax
                            </span>
                          </h1>
                          <div className="max-w-3xl mx-auto">
                            <p
                              className="text-md text-snug text-gray-50 text-left font-light mb-8"
                              data-aos="zoom-y-out"
                              data-aos-delay="150"
                            >
                              We provide you the comfort of travelling in your
                              own vehicle, while our professionally trained
                              chauffeur, drives you. Catch up on your day while
                              in transit.
                            </p>
                            <div className={"block sm:block md:hidden"}>
                              <Link to="/driver-signup">
                                <div className="flex items-center justify-center text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 w-full mb-4 sm:w-auto sm:mb-0">
                                  Become a driver
                                </div>
                              </Link>
                              <Link to="/client-signup">
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
                              <Link to="/driver-signup">
                                <span className="btn text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 hover:text-white w-full mb-4 sm:w-auto sm:mb-0">
                                  Become a driver
                                </span>
                              </Link>
                              <Link to="/client-signup">
                                <span className="btn text-white py-5 px-8  rounded-full bg-black hover:bg-gray-800 hover:text-white w-full sm:w-auto sm:ml-4">
                                  Book a driver now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </TweenOne>
        </Element>

        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "#364D79",
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <div
              className="relative flex items-center"
              style={{ height: "70vh" }}
            >
              <div className="max-w-full mx-auto pt-12 pb-0 px-4 sm:px-6 lg:px-12">
                <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  {/* <div className={`flex items-start justify-center`}>
                    <div className={`relative`}>
                      <ChaufSVG
                        width="800"
                        height="400"
                        className={` -top-24 absolute`}
                      />
                    </div>
                  </div> */}
                  <section className="relative">
                    <div className="max-w-full">
                      <div className="pb-12 flex justify-between md:pb-20">
                        <div className="pb-12 glass  px-4 py-5 md:pb-16">
                          <TweenOne
                            animation={{ y: 30, opacity: 0, type: "from" }}
                          >
                            <h1
                              className="text-4xl text-left md:text-6xl text-gray-50 font-bold leading-tighter tracking-tighter mb-4"
                              data-aos="zoom-y-out"
                            >
                              Tired Of Driving?
                            </h1>
                          </TweenOne>

                          <h1
                            className="text-4xl text-left md:text-6xl font-bold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                          >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-700">
                              Request a Chauffuer
                            </span>
                          </h1>
                          <div className="max-w-3xl mx-auto">
                            <p
                              className="text-md text-snug text-gray-50 text-left font-light mb-8"
                              data-aos="zoom-y-out"
                              data-aos-delay="150"
                            >
                              Long journey, family trips, short errands,
                              business appointments, client meetings and many
                              more services.
                            </p>
                            <div className={"block sm:block md:hidden"}>
                              <Link to="/driver-signup">
                                <div className="flex items-center justify-center text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 w-full mb-4 sm:w-auto sm:mb-0">
                                  Become a driver
                                </div>
                              </Link>
                              <Link to="/client-signup">
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
                              <Link to="/driver-signup">
                                <span className="btn text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 hover:text-white w-full mb-4 sm:w-auto sm:mb-0">
                                  Become a driver
                                </span>
                              </Link>
                              <Link to="/client-signup">
                                <span className="btn text-white py-5 px-8  rounded-full bg-black hover:bg-gray-800 hover:text-white w-full sm:w-auto sm:ml-4">
                                  Book a driver now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </TweenOne>
        </Element>

        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "#364D79",
              backgroundImage: `url(${image4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            <div
              className="relative flex items-center"
              style={{ height: "70vh" }}
            >
              <div className="max-w-full mx-auto pt-12 pb-0 px-4 sm:px-6 lg:px-12">
                <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  <section className="relative">
                    <div className="max-w-full">
                      <div className="pb-12 flex justify-between md:pb-20">
                        <div className="pb-12 glass  px-4 py-5 md:pb-16">
                          <TweenOne
                            animation={{ y: 30, opacity: 0, type: "from" }}
                          >
                            <h1
                              className="text-4xl text-left md:text-6xl text-gray-50 font-bold leading-tighter tracking-tighter mb-4"
                              data-aos="zoom-y-out"
                            >
                              Join Us
                            </h1>
                          </TweenOne>

                          <h1
                            className="text-4xl text-left md:text-6xl font-bold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                          >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-700">
                              AS A DRIVER
                            </span>
                          </h1>
                          <div className="max-w-3xl mx-auto">
                            <p
                              className="text-md text-snug text-gray-50 text-left font-light mb-8"
                              data-aos="zoom-y-out"
                              data-aos-delay="150"
                            >
                              Become a driver with premier chauffeur today and
                              receive exclusive requests from our clients for
                              travels, errands, scheduled transportation
                              services and many more.
                            </p>
                            <div className={"block sm:block md:hidden"}>
                              <Link to="/driver-signup">
                                <div className="flex items-center justify-center text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 w-full mb-4 sm:w-auto sm:mb-0">
                                  Become a driver
                                </div>
                              </Link>
                              <Link to="/client-signup">
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
                              <Link to="/driver-signup">
                                <span className="btn text-white py-5 px-8 rounded-full bg-pink-600 hover:bg-pink-700 hover:text-white w-full mb-4 sm:w-auto sm:mb-0">
                                  Become a driver
                                </span>
                              </Link>
                              <Link to="/client-signup">
                                <span className="btn text-white py-5 px-8  rounded-full bg-black hover:bg-gray-800 hover:text-white w-full sm:w-auto sm:ml-4">
                                  Book a driver now
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*  */}
                  {/* <div
                    data-aos={"fade-left"}
                    className={`flex items-start justify-center`}
                  >
                    <div className={`relative`}>
                      <AnimatedDriver
                        width="600"
                        height="400"
                        className={` -top-24 absolute`}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </TweenOne>
        </Element>
      </BannerAnim>
    </>
  );
}
