// import React from "react"

import Image from "next/image"
import Link from "next/link"

//  export default function Footer() {
//     return (
//       <footer className="bg-gray-800">
//         <div className="w-2/3 px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex justify-center space-x-6">
//             {/* <p className="mt-8 text-base text-left text-gray-300 underline">Legal Disclaimer</p> */}
//           </div>
//           <p className="mt-8 text-xs text-left text-gray-300">*This discount plan organization (formerly known as a discount medical plan organization in Florida) is NOT insurance, a health insurance policy, Medicare prescription drug plan or qualified health plan under the Affordable Care Act. This plan (The Plan) provides discounts only on chiropractic services offered by providers who have agreed to participate in The Plan. The range of discounts for medical or ancillary services offered under The Plan will vary depending on the type of provider and products or services. The Plan does not make and is prohibited from making members’ payments to providers for products or services received under The Plan. The member is required and obligated to pay for all discounted chiropractic services and equipment received under The Plan, but will receive a discount on certain identified chiropractic services from providers in The Plan.</p>
//           <p className="mt-8 text-xs text-left text-gray-300">
// The Discount Medical Plan Organization/Discount Plan Organization is Apex Longevity, LLC, 36901 American Way ,Suite #7, Avon, OH 44011. You may call 1-877-712-2739 ext. 0 for more information or visit www.apexlongevity.com/find-a-clinic/ for a list of providers. The Plan will make available before purchase and upon request, a list of program providers and the providers’ city, state and specialty, located in the member’s service area. The fees for The Plan are specified in the membership agreement. The Plan includes a 30-day cancellation provision. Note to MA consumers: The plan is not insurance coverage and does not meet the minimum creditable coverage requirements under M.G.L. c. 111M and 956 CMR 5.00. Not available for sale in the state of Washington.</p>
//           <p className="mt-8 text-base text-center text-gray-300">&copy; 2022 Apex Longevity. All rights reserved.</p>
//         </div>
//       </footer>
//     )
//   }



const navigation = {
  Patients: [
    { name: 'Join Apex', href: '/patients/join' },
    { name: 'Find a Provider', href: '/patients/findAProvider' },
    { name: 'About', href: '/patients/about' },
    { name: 'FAQs', href: '/patients/FAQs' },
  ],
  Providers: [
    { name: 'Login', href: '#' },
    { name: 'Join Apex', href: '/providers/Join' },
    { name: 'About', href: '/providers/About' },
    { name: 'FAQs', href: '/providers/FAQs' },
  ],
  company: [
    { name: 'About', href: '/About' },
    { name: 'Team', href: '/Team' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Jobs', href: '/Jobs' },
    // { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Disclaimer', href: '#' },
    { name: 'California Residents', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Apexlongevity/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/apexlongevity',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 border-t-2 border-blue-100">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
          <Link href="/">
                  <Image
                    className="w-auto h-8 sm:h-10 cursor-pointer"
                    src='/navlogo.png'
                    alt="company logo"
                    height={65}
                    width={200}
                    priority='true'
                  />
                </Link>
            <p className="text-base text-gray-400">
              Empowering patients to receive the continued care they deserve while keeping chiropractors compliant and safe.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-apexG">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Patients</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.Patients.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-apexG">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Providers</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.Providers.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-apexG">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-apexG">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-apexG">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2022 Apex Longevity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

  