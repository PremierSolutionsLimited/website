/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import FooterSvg from "../../../components/svgs/footer";
import Picture from "../../../assets/images/Picture.jpg";
//import toast from "react-hot-toast";
import { PhoneIcon, MailIcon, GlobeAltIcon } from "@heroicons/react/outline";
export interface Props {}

const navigation = {
  main: [
    { name: "Our Offers", href: "#offers" },
    { name: "Who We Are", href: "#whoweare" },
    { name: "Key Features", href: "#features" },
    { name: "FAQS", href: "#faqs" },
  ],
};

const Footer = () => {
  //const [loading, setLoading] = useState<boolean>(false);
  return (
    <Fragment>
      <FooterSvg />
      <footer className="bg-gray-100 -mt-16" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        {/* <div className="max-w-7xl mx-auto py-0 px-4 sm:px-6 lg:py-0 lg:px-8">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <p className="text-gray-500 mb-1 text-base flex items-center">
                Visit Premier Solutions Website
                <span><ArrowCircleDownIcon className="inset-0 ml-0.5 h-5 w-5 text-gold-2" /></span>
              </p>
              <a href="https://premiersolutionsgh.com" target="_blank" rel="noreferrer">
                <img className="h-16" src={Picture} alt="Company name" />
              </a>
            </div>
            <div className="mt-12  md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                HyperLinks
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-4">
                <li>
                  <a
                    href="#offers"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Our Offers
                  </a>
                </li>

                <li>
                  <a
                    href="#whoweare"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Who we are
                  </a>
                </li>

                <li>
                  <a
                    href="#keyfeatures"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 col-span-2 w-full xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-300">
                The latest details, news, and updates, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="appearance-none font-light min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        toast.success("Subscribed Successfully", {
                          id: "subscribed",
                        });
                      }, 2000);
                    }}
                    className="w-full bg-gold-1 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gold-1 focus:outline-none"
                  >
                    {loading ? "Subscribing....." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={"flex flex-col bottom-6 items-center w-full"}>
            <span className="mt-1 text-xs text-center font-light text-gray-400">
              All Rights Reserved Copyright &copy; {new Date()?.getFullYear()}
            </span>
            <i className="mt-2 text-xs text-center font-light sm:text-sm md:text-base text-gray-700">
              Powered by Polymorph Labs Ghana Limited
            </i>
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto py-6   px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Us</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Get in touch with us for any enquiries or feedback.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-800">
                  <p>024-499-7999</p>
                </div>
              </div>
              <div className="mt-3 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-800">
                  <a href="mailto:help@premierchauffergh.com">
                    <p>help@premierchauffeurgh.com</p>
                    </a>
                </div>
              </div>
              <div className="mt-3 flex">
                <div className="flex-shrink-0">
                  <GlobeAltIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-800">
                  <a href="https://premiersolutionsgh.com" target="_blank" rel="noreferrer noopener">
                    <p>www.premiersolutionsgh.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          <nav
            className="-mx-5 my-6 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-lg text-gold-3 hover:text-gold-2"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className={"flex flex-col bottom-6 items-center w-full"}>
            <span className="mt-1 text-xs text-center font-light text-gray-400">
              All Rights Reserved Copyright &copy; {new Date()?.getFullYear()}
            </span>
            <i className="mt-2 text-xs text-center font-light sm:text-sm md:text-base text-gray-700">
              Powered by Polymorph Labs Ghana Limited
            </i>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export { Footer };
