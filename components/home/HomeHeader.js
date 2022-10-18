import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Patients", href: "#" },
  { name: "Providers", href: "/providers" },
  { name: "Clinic Locations", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Contact", href: "#" },
];

import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const roles = [
  {
    name: "Patients",
    href: "#",
    priceMonthly: 49,
    description:
      "Apex Longevity membership holders enjoy access to affordable chiropractic care for their entire families",
    features: [
      "One plan to cover the entire family",
      "Affordable care for all family members under the same plan",
      "Affordable care to supplement rising costs and exhausted insurance benefits",
    ],
  },
  {
    name: "Chiropractic Providers",
    href: "#",
    priceMonthly: 79,
    description:
      "Apex Longevity providers maintain peace of mind with Apex on their side",
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
    <div className="relative overflow-hidden bg-gray-50">
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

      <div className="relative pb-16 sm:pb-24"> 
      {/* pt-6 (this is a classname from the div above that was removed) */}




      <div className="relative bg-white shadow">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  {/* <span className="sr-only">Apex Longevity</span> */}
                  <Image
                    className="w-auto h-8 sm:h-10 cursor-pointer"
                    src='/navlogo.png'
                    alt=""
                    height={65}
                    width={200}
                    priority='true'
                  />
                  {/* <span className="w-auto h-8 sm:h-10 text-{#4f46e5}"></span> */}
                </Link>
              </div>
              
              <div className='flex justify-center gap-8 flex-nowrap sm:ml-24 lg:ml-0 lg:gap-24 lg:w-1/3'>
              <a href="#LearnMore" className="invisible text-base font-medium text-gray-500 duration-300 md:flex md:flex-1 lg:w-auto hover:text-apexB sm:visible md:visible lg:visible">
                  About
                </a>
                <a href="#Benefits" className="invisible text-base font-medium text-gray-500 duration-300 md:flex md:flex-1 lg:w-auto hover:text-apexB sm:visible md:visible lg:visible">
                  Benefits
                </a>
                <a href="#Mission" className="invisible text-base font-medium text-gray-500 duration-300 md:flex md:flex-1 lg:w-auto hover:text-apexB sm:visible md:visible lg:visible flex-nowrap whitespace-nowrap">
                  Our Why
                </a>
              </div>
             
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                {/* <a href="#" className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900">
                  Sign in
                </a> */}
                <a
                  href="#ContactUs"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white duration-300 border border-transparent rounded-md shadow-sm bg-apexB whitespace-nowrap hover:bg-apexG"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
  
         
        </div>





        {/* <Popover>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-apexB hover:bg-gray-50"
                  >
                    <LockClosedIcon
                      className="h-5 w-5 text-apexB"
                      aria-hidden="true"
                    />{" "}
                    Provider Login
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-apexB hover:bg-gray-100"
                >
                  Provider Portal
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover> */}

        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div>
            <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none text-center">
              {/* <h2 className="text-xl font-semibold leading-6 text-apexB">Apex Longevity</h2> */}
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The perfect plan for </span>{" "}
                <span className="block text-apexB xl:inline">everyone </span>
                {/* <span className="block xl:inline">The perfect plan for </span>{' '}
              <span className="block text-apexB xl:inline">patients</span> */}
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Apex Longevity is the trusted discount medical plan for
                chiropractic providers and patients nationwide
              </p>
            </div>
            <div className="mt-8  pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
              <div className="relative">
                <div className="absolute inset-0 h-3/4" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                    {roles.map((role) => (
                      <div
                        key={role.name}
                        className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300"
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
                            <a
                              href={role.href}
                              className="flex items-center justify-center rounded-md border border-transparent bg-apexB px-5 py-3 text-base font-medium text-white hover:bg-apexG duration-300"
                              aria-describedby="tier-standard"
                            >
                              I am a {role.name}
                            </a>
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
