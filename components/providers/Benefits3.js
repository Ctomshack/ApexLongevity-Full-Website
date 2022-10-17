import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
    CurrencyDollarIcon,
    NewspaperIcon
  } from '@heroicons/react/24/outline'
  import React from 'react'
  
  const transferFeatures = [
    {
      id: 1,
      name: 'Legal Network-Based Discounts',
        description:
          'Offer legal, network-based discounts to cash-paying, under-insured, and out-of-network patients who maintain a valid Apex Longevity membership',
        icon: ScaleIcon,
    },
    {
        id: 2,
        name: 'Reduce the Risk of Compliance & OIG Violations',
        description:
          'Offer cash discounts to your Apex-enrolled patients legally and without worry of violating laws regarding Dual Fee Schedules, False Claims, Inducement Violations, or Anti-Kickback',
        icon: ScaleIcon,
      },
    {
      id: 3,
      name: 'FREE Marketing for New Patients',
      description:
        'Receive free online and social media marketing every month that you can utilize to attract more new patients to your clinic',
      icon: GlobeAltIcon,
    },
    {
      id: 4,
      name: 'Rebates to Your Clinic',
      description:
        'Receive $5 rebates for every newly enrolled patient that can be used to bonus your team for helping your clinic remain compliant. Happy team, Happy Clinic!',
      icon: CurrencyDollarIcon,
    },
    {
        id: 5,
        name: 'Cash Fee Schedule',
        description:
          `Create your own 'cash fee schedule' to eliminate many legal and regulatory violations you can otherwise encounter`,
        icon: NewspaperIcon,
      },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Reminder emails',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: EnvelopeIcon,
    },
  ]
  
  export default function Benefits3() {
    return (
      <div className="py-16 overflow-hidden bg-gray-50 lg:py-24" id='Benefits'>
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <svg
            className="absolute hidden transform -translate-x-1/2 left-full -translate-y-1/4 lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>
  
          <div className="relative">
            <h2 className="text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              The Benefits of Having Apex Longevity on Your Side
            </h2>
          </div>

          
          {/* lg:grid lg:grid-cols-2 */}
          <div className="relative mt-12 lg:mt-24 lg:items-center lg:gap-8">
            <div className="relative">
              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-apexB">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
  
          <svg
            className="absolute hidden transform translate-x-1/2 translate-y-12 right-full lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
          

          <div className="relative w-1/2 m-auto rounded-md shadow md:w-full lg:w-1/2">
                <a
                  href="#ContactUs"
                  className="flex items-center justify-center w-full px-8 py-3 mt-12 text-base font-medium text-white duration-300 border border-transparent rounded-md bg-apexB hover:bg-apexG md:py-4 md:px-10 md:text-lg"
                >
                  Join the Apex Longevity Network for Free Today
                </a>
              </div>
  
          {/* <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Always in the loop</h3>
                <p className="mt-3 text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                  cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
                </p>
  
                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                          <item.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
  
              <div className="relative mt-10 -mx-4 lg:col-start-1 lg:mt-0">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                </svg>
                <img
                  className="relative mx-auto"
                  width={490}
                  src="https://tailwindui.com/img/features/feature-example-2.png"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
  