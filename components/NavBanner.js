import { EnvelopeIcon, PhoneArrowUpRightIcon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function NavBanner() {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(!open)
    console.log(open)
  }

  if(open) {

    return (
      <div className="relative bg-apexB ease-out duration-300">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-2 ">
          <div className="pr-2 text-center sm:text-center">
            <p className="font-medium text-white">
              {/* <span className="md:hidden">For immediate assistance <ArrowRightIcon /> </span> */}
              <span className="hidden md:inline mr-3">Need immediate assistance? Speak to our support team <ArrowRightIcon className=' inline-block h-4 w-4'/></span>
              <span className="inline-block ml-2 sm:inline-block">
                <a href="tel:+18777122739" className=" text-white font-normal underline flex">
                  <PhoneArrowUpRightIcon className='w-5 h-5 mr-2 pt-1'/>
                  +1 (877) 712-2739
                  {/* <span aria-hidden="true"> &rarr;</span> */}
                </a>
              </span>
              <span className="inline-block ml-6 mr-12 sm:inline-block">
                <a href="tel:+18777122739" className=" text-white font-normal underline flex">
                  <EnvelopeIcon className='w-5 h-5 mr-1 pt-1'/>
                  support@apexlongevity.com
                  {/* <span aria-hidden="true"> &rarr;</span> */}
                </a>
              </span>
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
            <button
              type="button"
              className="flex rounded-md p-2 hover:bg-apexB focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => handleClose()}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    )
  }

}
