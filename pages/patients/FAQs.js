import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Footer, Navigation } from '../../components'

const faqs = [
  {
    question: "What is Apex Longevity?",
    answer:
      "The Apex Longevity program provides discounts on many of your chiropractic expenses. The program may be used by you and members of your immediate family. While this program is not a replacement for insurance, it may be used to supplement a major medical health insurance policy. Doctors are usually required to charge insurance companies and patients the same fees unless they are under a network contract for a lower fee. Apex Longevity is a contracted network that allows doctors to set and accept discounts on their services for our members. When you join Apex Longevity, you are entitled to similar “in-network” discounts just like the insurance companies.",
  },
  {
    question: "What is a DMPO (Discount Medical Plan Organization)?",
    answer:
      "A discount medical plan is a plan that offers discounts on health care services and may allow you and your dependents to save money on services not covered by your health insurance plan. Our company and DMPOs are typically regulated by the Departments of Insurance in most states. Discount Medical Plans have been around for many years. They are often owned and operated by insurance carriers. For example, Sam’s Club has Healthy Allies, and uses United Health Care based networks. Cigna and Aetna also operate their own DMPOs. Apex Longevity is somewhat unique in that it is privately owned and does not contract with any managed care organizations.",
  },
  {
    question: "Why should I join Apex Longevity?",
    answer:
      "Apex Longevity is a great way to reduce your out-of-pocket expenses for health care as health care costs continue to rise. A single $49 annual membership includes everyone in your immediate family, giving them the ability to receive needed treatment that may be paid out-of-pocket at a reduced rate. Partially insured patients, who have coverage from some services and not others, like Medicare patients, may use their Apex Longevity benefits to complement their existing benefits, specifically for the non-covered services. Apex Longevity is provider network that works in conjunction with a discount medical plan organization (DMPO). As a patient, you may join Apex Longevity in your chiropractor’s office for $49 a year. This membership will allow you and your legal dependents to receive discounts on many of your chiropractic expenses. While this program is not a replacement for insurance, it may be used to supplement a major medical health insurance policy.",
  },
  {
    question: "How does a membership with Apex Longevity benefit myself and my immediate family?",
    answer:
      "Discount plans may be beneficial to consumers looking to save money on health care costs. This plan offers savings to plan members on chiropractic services between participating health care providers and the organization offering the discount plan. Apex Longevity is NOT HEALTH INSURANCE AND SHOULD NOT REPLACE HEALTH INSURANCE.",
  },
  {
    question: "Why are dependents not listed on the membership card?",
    answer:
      "Apex Longevity is a discount medical plan organization, not insurance. Therefore, dependent information is kept on file in your provider's office.",
  },
  {
    question: "How much of a discount will I receive with my Apex Longevity membership?",
    answer:
      "Health care costs vary across the country. Your Apex Longevity participating provider can show you the network discounts that are offered in his or her office. Most patients save the $49 membership fee on their very first visits.",
  },
  {
    question: "Can I join Apex Longevity if I have Medicare or Insurance coverage?",
    answer:
      "YES. You may join Apex Longevity if you have Medicare or Insurance coverage, but it may only be used for services not covered by Medicare or Insurance.",
  },
  {
    question: "How long is my Apex Longevity membership good for?",
    answer:
      "Your Apex Longevity membership is valid for a full twelve (12) month period from the effective date. The membership is set to automatically renew, unless otherwise specified by the plan holder to your provider OR Apex Longevity support.",
  },
  {
    question: "How often can I use the services of an Apex Longevity provider?",
    answer:
      `As often as you wish. With the program, you enjoy unlimited access to the services and providers in our network, and we encourage you to use them as often as necessary.`,
  },
  {
    question: "Why are my dependents not listed on my card?",
    answer:
      "Apex Longevity is a discount medical plan organization, not insurance. Therefore, dependent information is kept on file in your provider’s office and dependents are not listed on your membership card. Please verify with your provider that they have your dependent information and keep them up-to-date of any changes that need to be made.",
  },
  {
    question: "When will I receive their Apex Longevity membership card?",
    answer:
      "Your membership card will immediately arrive to your email address on file the day you enroll into the program.",
  },
  {
    question: "Will my membership automatically renew?",
    answer:
      "YES. Memberships are set to automatically renew every year. If you wish to deactivate automatic renewals, PLEASE CONTACT YOUR PROVIDER OR APEX LONGEVITY SUPPORT.",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProviderFAQs() {
  return (
    <>
    <Navigation />
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="mt-4 text-base text-gray-500 ">
           {`If you can't find what you're
            looking for, you can always`}{' '}
            <Link href='/ContactUs'>
            <a className="font-medium text-apexB hover:text-apexG">
              send us an email
            </a>
            </Link>{' '}
            with your enquiry.
          </p>
        <div className="mt-8 divide-y divide-gray-200">
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-4 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
