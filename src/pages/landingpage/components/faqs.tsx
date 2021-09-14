import { Fragment } from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <Fragment>
      <div id="faq" className="h:0 md:h-faq-height sm:h-0">
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-5/6 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    What is Premier Chauffeur?
                  </summary>

                  <span className="py-5">
                    We provide you with professionally trained and certified
                    chauffeur or drivers, whilst you travel around in the
                    comfort of your own vehicle. You do not have to worry about
                    traffic, leaving the office to pick your children or driving
                    around.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-medium bg-gray-100 rounded-md py-2 px-4">
                    How does one become a driver on the app?
                  </summary>

                  <span>
                    You become a driver on the app after successfully going
                    through our structured assessment and defensive driving
                    training process.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    What are the requirements?
                  </summary>

                  <span>
                    You must have a valid driver licence.You must have at least
                    5 years of driving experience.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    How does Premier Chauffeur work?
                  </summary>

                  <span>
                    Client request for a driver and we assign client to an
                    available driver.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Do I need a car as a driver to register on Premier
                    Chauffeur?
                  </summary>

                  <span className="px-4 py-2">
                    No, you must not have a car to register as a driver.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Do I need a car as a client to register on Premier
                    Chauffeur?
                  </summary>

                  <span className="px-4 py-2">
                    Yes, you must have your own car or access to a car that a
                    PSL chauffeur will drive on your behalf.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Is the Chauffeur for iPhone app free?
                  </summary>

                  <span className="px-4 py-2">Yes, absolutely.</span>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Is the Premier Chauffeur for Android app free?
                  </summary>

                  <span className="px-4 py-2">Yes, absolutely.</span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default FrequentlyAskedQuestions;
