import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const features = [
  {
    name: 'Provide Legal Cash Discounts',
    description: `Patients can finish their care plan after they exhaust their insurance benefits or when they simply don't have the resources to pay the full fee`,
    icon: CurrencyDollarIcon,
  },
  {
    name: `Don't Violate State / Federal Insurance Laws`,
    description:
      'Regarding Dual Fee Schedules, False Claims, Inducement Violations, or Anti-Kickback',
    icon: ScaleIcon,
  },
  {
    name: 'Get FREE Marketing',
    description:
      'To attract more new patients each and every month',
    icon: BoltIcon,
  },
  {
    name: 'Receive Reminder Emails',
    description:
      'To your patients and your practice to ensure all cash paying patients maintain a valid Apex Longevity membership',
    icon: EnvelopeIcon,
  },
]

export default function Benefits1() {
  return (
    <div className="py-12 overflow-hidden bg-gray-50" id='LearnMore'>
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <svg
          className="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">With Apex, you can sleep well at night knowing that you...</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-apexB">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}