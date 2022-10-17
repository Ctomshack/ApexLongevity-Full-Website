import React from "react"

export default function TrustedBy() {
    return (
      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Chiropractic Clinics & Patients Everywhere
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Apex Longevity is the trusted discount medical plan organization of Chiropractic clinics and patients nationwide
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-2">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">States</dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-apexB">48</dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Patients</dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-apexB">40,000+</dd>
                  </div>
                  {/* <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Chiropractors</dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-apexB">500+</dd>
                  </div> */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  