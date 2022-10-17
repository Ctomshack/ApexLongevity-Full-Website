import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const supportLinks = [
  {
    name: 'Patients Receive Affordable Chiropractic Care',
    href: '#ContactUs',
    description:
      'Without undercutting or devaluing your services',
    icon: PhoneIcon,
  },
  {
    name: 'Earn More Income',
    href: '#ContactUs',
    description:
      'Make it easier for patients to finish their care plans when their insurance runs out or if they are uninsured',
    icon: LifebuoyIcon,
  },
  {
    name: 'Win-Win Situation',
    href: '#ContactUs',
    description:
      'Patients get discounts for paying out of pocket and your practice earns more income',
    icon: NewspaperIcon,
  },
]

export default function Benefits2() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
            layout='fill'
            objectFit='cover'
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Good News!</h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
            You can now give your patients legal cash discounts without placing your practice or your license in risk of violating state / federal laws regarding dual fee schedules
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white shadow-xl rounded-2xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg bg-apexB rounded-xl">
                  <link.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 rounded-bl-2xl rounded-br-2xl bg-gray-50 md:px-8">
                <a href={link.href} className="text-base font-medium duration-300 text-apexB hover:text-apexG">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}