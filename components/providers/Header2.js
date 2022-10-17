import Image from 'next/image';
import { ImCross } from 'react-icons/im';
import { BsArrowRightShort } from 'react-icons/bs';
import React from "react"

export default function Header2() {
  return (
    <div className="bg-white">
      <div className="px-4 py-8 mx-auto mb-8 max-w-7xl sm:py-12 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600">The Why</h2>
          <p className="mt-1 text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl lg:text-4xl">
            Apex Longevity is a Discounted Medical Plan Organization that offers
            to help Chiropractors offer legal and compliant discounts to their
            patients
          </p>
        </div> */}

        <div className="mx-auto text-lg ">
            {/* <span className="block text-lg font-semibold text-center text-indigo-600">Introducing</span> */}
            
            <h1 className="mb-12 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              Apex Longevity is the plan that helps Chiropractors offer legal and compliant discounts to their
            patients
            </h1>
          
        </div>


        <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-12">
          <div className="block lg:col-span-1">
                <Image className='rounded-md shadow'
                src='/header2.jpg' 
                width='952'
                height='640'
                alt='patients at front desk'
                />
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-1 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-1 lg:mt-0">
              <div>
                <dt>
                  
                  <p className="mt-5 text-lg leading-6 text-gray-500">{`You're probably thinking about or have already tried lowering your prices so your pratients will continue with their needed care... especially as the recession deepens and cash becomes scarce.`}</p>
                  {' '} 
                  <p className="mt-5 text-lg leading-6 text-gray-500">However, doctors that do this can face two serious problems:</p>
                  {' '} 
                  <div className='flex items-center gap-2 mt-5 text-lg leading-6 text-gray-500'>
                    <ImCross size={20}/><p className="mt-5 text-lg leading-6 text-gray-500">They stand to lose a lot of money on some visits while devaluing their care</p>
                  </div>
                    {' '} 
                  <div className='flex items-center gap-2 mt-5 text-lg leading-6 text-gray-500'>
                    <ImCross size={25}/><p className="mt-5 text-lg leading-6 text-gray-500">They are at risk of compliance issues, such as dual fee schedules and other high risk violations</p>
                  </div>
                    {' '} 
                  <p className="mt-5 text-lg leading-6 text-gray-500">Many doctors do not realize that offering cash discounts to patients can often be illegal.</p>
                  <div className="w-3/4 m-auto rounded-md shadow">
                <a
                  href="#ContactUs"
                  className="flex items-center justify-center w-full px-8 py-3 mt-12 text-base font-medium text-white duration-300 border border-transparent rounded-md bg-apexB hover:bg-apexG md:py-4 md:px-10 md:text-lg"
                >
                  Reduce Your Risk Today<BsArrowRightShort size={35} className='mx-1'/>
                </a>
              </div>
                </dt>
                {/* <dd className="mt-2 text-base text-gray-500">description</dd> */}
              </div>

          </dl>
        </div>

        
      </div>
    </div>
  );
}