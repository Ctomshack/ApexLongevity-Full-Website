
  import Image from 'next/image'
import Link from 'next/link'
  import React from 'react'
  

  
  export default function PatientHeader() {
    return (
      <div className="relative bg-gray-50 ">
        <main className="lg:relative">
          <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline drop-shadow">The Care You Need</span>{' '}
                <span className="block xl:inline drop-shadow">at a Cost You</span>{' '}
                <span className="block text-apexB xl:inline drop-shadow">Can Afford</span>{' '}
              </h1>
              <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              A membership plan with Apex Longevity provides discounts on many of your chiropractic expenses. The program may be used by you and members of your immediate family. While this program is not insurance, it may be used to cover expenses not covered by a major medical health insurance policy.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#GetStarted"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white duration-300 border border-transparent rounded-md bg-apexB hover:bg-apexG md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#LearnMore"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium duration-300 bg-white border border-transparent rounded-md text-apexB hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            {/* <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            /> */}
            <Image
            src='/PatientHeader.jpeg'
            alt='Apex Longevity Header Image' 
            layout='fill'
            objectFit='cover'
            priority='true'
            />
          </div>
        </main>
      </div>
    )
  }