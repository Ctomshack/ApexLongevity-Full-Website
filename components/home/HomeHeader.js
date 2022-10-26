import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";
import Disclaimer from "../Disclaimer";

const roles = [
  {
    name: "Patients",
    href: "/patients/About",
    priceMonthly: 49,
    description:
      "Apex Longevity membership holders enjoy access to affordable chiropractic care for their entire immediate family",
    features: [
      "Access the same level of care from the doctors you trust, at a discounted rate that your immediate family will love!",
      "Affordable care for all immediate family members under the same plan",
      "A single plan to supplement rising costs and exhausted insurance benefits",
    ],
  },
  {
    name: "Chiropractic Providers",
    href: "/providers/About",
    priceMonthly: 79,
    description:
      "Apex Longevity providers maintain peace of mind knowing they can offer legal cash discounts to patients without the risk of violating state and federal laws",
    features: [
      "Legal network-based discounts for patients",
      "Reduced risk of compliance & OIG violations",
      "FREE marketing for new patients",
      "Enrollment rebates to your clinic",
    ],
  },
];

export default function HomeHeader() {
  return (
    <div className="radialGradient relative overflow-hidden bg-apexB" id="GetStarted">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pb-16"> 
      {/* pt-6 (this is a classname from the div above that was removed) */}

      {/* <Navigation /> */}

        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div>
            <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none text-center">
              {/* <h2 className="text-xl font-semibold leading-6 text-apexB">Apex Longevity</h2> */}
              {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The perfect plan for </span>{" "}
                <span className="block text-apexB xl:inline">everyone </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Apex Longevity is the trusted discount medical plan for
                chiropractic providers and patients nationwide
              </p> */}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                <span className="block xl:inline">Help us help you</span>{" "}
                {/* <span className="block text-white xl:inline">help you </span> */}
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-200 sm:text-lg md:mt-8 pt-4 md:max-w-2xl sm:max-w-xl md:text-xl drop-shadow-md">
                Please select one of the options below to ensure you receive the right information about Apex Longevity 
              </p>
            </div>
            <div className="mt-8  pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-16">
              <div className="relative">
                <div className="absolute inset-0 h-3/4" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-md space-y-8 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-8 lg:space-y-0">
                    {roles.map((role) => (
                      <div
                        key={role.name}
                        className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-110 duration-300"
                      >
                        
                        <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                          <div>
                            <h3
                              className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-base font-semibold text-blue-600"
                              id="tier-standard"
                            >
                              {role.name}
                            </h3>
                          </div>
                          <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                            {/* ${role.priceMonthly}
                      <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">/mo</span> */}
                          </div>
                          <p className="mt-5 text-lg text-gray-500">
                            {role.description}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                          <ul role="list" className="space-y-4">
                            {role.features.map((feature) => (
                              <li key={feature} className="flex items-start">
                                <div className="flex-shrink-0">
                                  <CheckIcon
                                    className="h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                  />
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  {feature}
                                </p>
                              </li>
                            ))}
                          </ul>

                          <div className="rounded-md shadow">
                            <Link
                              href={role.href}
                              className="flex items-center justify-center rounded-md border border-transparent bg-apexB px-5 py-3 text-base font-medium text-white hover:bg-apexG duration-300"
                              aria-describedby="tier-standard"
                            >
                             <a className="flex items-center justify-center rounded-md border border-transparent bg-apexB px-5 py-3 text-base font-medium text-white hover:bg-apexG duration-300">
                             {`I am a ${role.name.slice(0, role.name.length -1)}`} </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
