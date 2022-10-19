import React from "react";
import Navigation from "../../components/Navigation";
import ContactUs from "../../components/providers/ContactUs";
import How from "../../components/providers/How";
import Header from "../../components/providers/Header";
import Footer from "../../components/providers/Footer";

import { CheckIcon } from "@heroicons/react/24/outline";
import Disclaimer from "../../components/Disclaimer";

const features = [
  "Step 1: Submit the email form below or call +1 (877) 712-2739",
  "Step 2: Receive, complete, and submit the New Provider application",
  "Step 3: Complete the Apex training video series",
  "Step 4: Submit your unique Apex fee schedule",
  "Step 5: Create & access your Provider account",
  "Step 6: Receive your Welcome Kit",
];

const JoinApex = () => {
  return (
    <>
      <Navigation />
      {/* <Header /> */}

      <div className="bg-white md:mt-12 px-6" id="GetStarted">
        <div className="px-4 md:py-8 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="text-gray-900 drop-shadow-md">
                  Become an Apex Longevity Provider for{" "}
                </span>
                <span className="text-apexB drop-shadow-md"> Free</span>
              </h1>
              <p className="mt-5 text-xl text-gray-500 lg:w-3/4 drop-shadow-sm">
                Includes every feature we offer within a personalized Apex
                Longevity dashboard, free marketing brochures, free new patients
                marketing, unlimited member enrollments, 1-on-1 training, and
                lifetime customer support
              </p>
              {/* <p className="text-xl text-gray-500 ">
              1-on-1 training, and lifetime customer support
            </p> */}
            </div>
            <a
              href="#EverythingYouNeed"
              className="inline-flex lg:hidden items-center justify-center w-auto px-5 py-3 mt-8 text-base font-medium text-white duration-300 border border-transparent rounded-md bg-apexB hover:bg-apexG sm:mt-10 sm:w-auto xl:mt-0"
            >
              Get started today
            </a>
          </div>
          <div
            className="pt-16 border-t border-gray-200 xl:grid xl:grid-cols-2 xl:gap-x-8"
            id="EverythingYouNeed"
          >
            <div>
              <h2 className="text-lg font-semibold text-apexB">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                All-in-one platform
              </p>
              <p className="mt-4 text-lg text-gray-500 lg:w-3/4">
                Access your admin dashboard to enroll and manage patient
                memberships, receive lifetime customer support, and free
                training to ensure your staff is well-equipped for success with
                Apex Longevity.
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-1 md:gap-x-8 xl:col-span-1 xl:mt-0">
              <ul role="list" className="divide-y divide-gray-200">
                {features.map((feature, featureIdx) =>
                  featureIdx === 0 ? (
                    <li key={feature} className="flex py-4 md:py-0 md:pb-4">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-apexG"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base text-gray-900">
                        {feature}
                      </span>
                    </li>
                  ) : (
                    <li key={feature} className="flex py-4">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-apexG"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base text-gray-900">
                        {feature}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ContactUs />
      <Disclaimer />
      <Footer />
    </>
  );
};

export default JoinApex;
