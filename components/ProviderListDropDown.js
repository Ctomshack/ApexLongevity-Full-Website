/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import ListofProviders from "./ListofProviders";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from "react";

export default function ProviderListDropdown() {
    let states = ['Alabama','Arizona','California','Colorado','Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',,'Ohio','Oklahoma','Oregon',,'Pennsylvania','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','West Virginia','Wisconsin','Wyoming']
    const [CurrentState, setCurrentState] = useState(states[0]);

    const handleChange = (e) => {
      setCurrentState(e.target.value);
    }

    useEffect(() => {

    }, [CurrentState])
    

    return (
        // <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-12">
        //     <div className="mx-auto max-w-7xl py-8 sm:px-6">
        //       <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        //         Select State
        //       </label>
        //       <select
        //       onChange={handleChange}
        //         id="location"
        //         name="location"
        //         className="mt-1 block shadow  rounded-md border-gray-300 py-2 pl-3 pr-10 text-xl focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-xl"
        //         value={CurrentState}
        //       >{states.map((state, idx) => {
        //           return (
        //           <option key={idx}>{state}</option>
        //           )
        //       })}
        //       </select>
        //     </div>
        //       <ListofProviders selectedState={CurrentState}/>
        // </div>
        <div>

        <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Find a Provider</h2>
            <p className="mt-5 text-xl text-gray-400">
              {`Select your state and see a list of available Apex providers near you`}
            </p>
          </div>
          <div className="mt-10 w-full max-w-xs">
            <label htmlFor="currency" className="block text-base font-medium text-gray-300">
              Select a state
            </label>
            <div className="relative mt-1.5">
              <select
                // id="currency"
                // name="currency"
                className="block w-full appearance-none rounded-md border border-transparent bg-gray-700 bg-none py-2 pl-3 pr-10 text-base text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
                onChange={handleChange}
                id="location"
                name="location"
                // className="mt-1 block shadow  rounded-md border-gray-300 py-2 pl-3 pr-10 text-xl focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-xl"
                value={CurrentState}
              >{states.map((state, idx) => {
                  return (
                  <option key={idx}>{state}</option>
                  )
              })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListofProviders selectedState={CurrentState}/>
        </div>
    )
  }
  