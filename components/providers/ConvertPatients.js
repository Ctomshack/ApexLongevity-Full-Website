import Image from "next/image"
import React from 'react'

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function ConvertPatients() {
    return (
      <div className="relative py-16 bg-white sm:py-24" id="Mission">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 w-full right-1/2 rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
                <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  src='/testimonial.jpg'
                  alt="Doctor providing patient care"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-apexB mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-apexB via-apexB opacity-90" />
                <div className="relative px-8">
                  {/* <div>
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                      alt="Workcation"
                    />
                  </div> */}
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-apexB"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative pb-4">
                        Apex Longevity is AMAZING - a discount medical program that allows patients to get the treatment they need at an affordable rate. The staff at Apex is wonderful, always willing to help answer any questions or issues that arise. Truly grateful to offer Apex to our patients!
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">Dr. Stewart Fresh, HealthSource of Covington</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower patients
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  With Apex Longevity, you can help patients receive the continued care they deserve by offering legal cash discounts to Apex-enrolled membership holders.
                </p>
                <p className="text-base leading-7">
                  Feel confident offering more wellness care to patients who need it, but may have exhausted their insurance benefits or are uninsured.
                </p>
                <p className="pb-6 text-base leading-7 border-b-2 border-gray-100">
                  {`Break free from insurance limitations and increase your clinic's bottom line, all while providing wellness care to MORE patients at an affordable rate they can afford.`}
                </p>
              </div>
            </div>
              <div className="mt-10">
                <a href="#LearnMore" className="text-base font-medium duration-300 text-apexB hover:text-apexG">
                  {`Learn more about how we're making chiropractic care more accessible`}
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
  
           
          </div>
        </div>
      </div>
    )
  }