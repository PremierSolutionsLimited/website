/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import FooterSvg from "../../../components/svgs/footer";
//import Picture from "../../../assets/images/Picture.jpg";
//import toast from "react-hot-toast";
import { PhoneIcon, MailIcon, GlobeAltIcon } from "@heroicons/react/outline";
import ContactUs from "../components/contact-us"
export interface Props {}

const navigation = {
  main: [
    { name: "Our Offers", href: "#offers" },
    { name: "Who We Are", href: "#whoweare" },
    { name: "Key Features", href: "#keyfeatures" },
    { name: "FAQS", href: "#faq" },
  ],
};

const Footer = () => {
  const [openContact, setOpenContact] = useState<boolean>(false);
  return (
    <Fragment>
      <FooterSvg />
      <footer className="bottom-0 -mt-28 bg-gray-100" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12   px-4 overflow-hidden sm:px-6 lg:px-8">
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
                  <p>+233 303306541 / 0246900037</p>
                </div>
              </div>
              <div className="mt-3 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-800">
                  <a href="mailto:help@premierchauffergh.com">
                    <p>info@premierchauffeurgh.com</p>
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
              <div className="mt-5 flex justify-center items-center">
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setOpenContact(true)} 
                    className="p-3 bg-gold-2 text-white rounded-md border-3 hover:bg-customBlack-1 hover:border-gold-1 hover:text-gold-2 focus:ring-2 focus:ring-black">
                    Send Us An Email
                  </button>
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
      <ContactUs show={openContact} setShow={setOpenContact} />
    </Fragment>
  );
};

export { Footer };
