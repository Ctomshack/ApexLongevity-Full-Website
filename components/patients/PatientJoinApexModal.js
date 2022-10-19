import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PatientJoinApexModal({ visible, onClose }) {
  const [open, setOpen] = useState(true)
  
  const cancelButtonRef = useRef(null)

  // const handleClose = () => {
  //   setOpen(false)
  // }
  
  
  if(!visible) return null;

  return (
    <Transition.Root show={open} as={Fragment} onClose={onClose}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <ShieldCheckIcon className="h-6 w-6 text-apexG" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-6">
                    <Dialog.Title as="h3" className="text-3xl font-medium leading-6 text-gray-900">
                      Start Saving Today!
                    </Dialog.Title>
                    <div className="mt-6">
                      <p className="text-md text-gray-500">
                        {`To join, simply complete a membership application in your provider's (chiropractor's) office. Please click the button below to Find a Provider nearest you.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-8 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <Link href='/patients/FindAProvider'>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-apexB px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-apexG focus:outline-none focus:ring-2 focus:ring-apexG focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={onClose}
                  >
                    Find a Provider
                  </button>
                  </Link>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
