import { Fragment } from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <Fragment>
      <div id="faq" style={{scrollBehavior: "smooth"}}>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Questions
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

                  <p className="my-4 leading-snag">
                    We provide you with professionally trained and certified
                    chauffeurs or drivers, whilst you travel around in the
                    comfort of your own vehicle. You do not have to worry about
                    traffic, leaving the office to pick your children or driving
                    around.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium bg-gray-100 rounded-md py-2 px-4">
                    How does one become a driver on the app?
                  </summary>

                  <p className="my-4 leading-snag">
                    You become a driver on the app after successfully going
                    through our structured assessment and defensive driving
                    training process.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    What are the driver requirements?
                  </summary>

                  <p className="my-4 leading-snag">
                    You must have a valid driver licence.You must have at least
                    5 years of driving experience.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                  Who is qualified to register as a client??
                  </summary>

                  <p className="my-4 leading-snag">
                  Any individual over 18 years of age with access to a road worthy vehicle
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    How does Premier Chauffeur work?
                  </summary>

                  <p className="my-4 leading-snag">
                    Client requests for a driver and we assign client to an
                    available driver.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Do I need a car as a driver to register on Premier
                    Chauffeur?
                  </summary>

                  <p className="my-4 leading-snag">
                    No, you must not have a car to register as a driver.
                  </p>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Do I need a car as a client to register on Premier
                    Chauffeur?
                  </summary>

                  <p className="my-4 leading-snag">
                    Yes, you must have your own car or access to a car that a
                    PC chauffeur will drive on your behalf.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Is the Chauffeur for iPhone app free?
                  </summary>

                  <p className="my-4 leading-snag">Yes, absolutely.</p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    Is the Premier Chauffeur for Android app free?
                  </summary>

                  <p className="my-4 leading-snag">Yes, absolutely.</p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                    How do I download the Premier Chauffeur app for iPhone?
                  </summary>

                  <p className="my-4 leading-snag">Go to the App Store to download the latest Premier Chauffeur for iPhone app.</p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                  How do I download the Premier Chauffeur app for Android?
                  </summary>

                  <p className="my-4 leading-snag">Go to Google Play to download the latest Klips for Android app.</p>
                </details>
                <details className="mb-4">
                  <summary className="font-medium  bg-gray-100 rounded-md py-2 px-4">
                  How much do I earn as a driver?
                  </summary>

                  <p className="my-4 leading-snag">This varies and is dependent on the trip type and duration.</p>
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
