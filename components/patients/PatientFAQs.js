import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Footer, Navigation } from '../../components'

const faqs = [
  {
    question: "What is Apex Longevity?",
    answer:
      "Apex Longevity is a Discount Medical Plan Organization (DMPO), which provides discounts on many of your chiropractic expenses. Your Plan may be used by you and members of your immediate family. While this program is not a replacement for insurance, it may be used to supplement a major medical health insurance policy. Doctors are usually required to charge insurance companies and patients the same fees unless they are under a network contract for a lower fee. Apex Longevity is a contracted network that allows doctors to set and accept discounts on their services for our members. When you join Apex Longevity, you are entitled to similar “in-network” discounts just like the insurance companies.",
  },
  {
    question: "What is a DMPO (Discount Medical Plan Organization)?",
    answer:
      "A plan that offers you and your immediate family access to discounts on health care services and may allow cost-savings on services not covered by your health insurance plan. DMPO's are typically regulated by the Department of Insurance in most states. Discount Medical Plans have existed for many years and are often owned and operated by insurance carriers.",
  },
  {
    question: "Why should I join Apex Longevity?",
    answer:
      "A plan with Apex Longevity is a fantastic way to reduce your out-of-pocket expenses for health care as health care costs continue to rise. A single $49 annual membership includes everyone in your immediate family and provides the ability to receive needed treatment that may be paid out-of-pocket at a reduced rate. Partially insured and uninsured patients may use their Apex Longevity benefits to complement their existing benefits, specifically for the non-covered services. Apex Longevity is provider network that works in conjunction with a discount medical plan organization (DMPO). You may enroll in Apex Longevity within your provider's office.. While this program is not a replacement for insurance, it may be used to supplement a major medical health insurance policy.",
  },
  {
    question: "How does a membership with Apex Longevity benefit myself and my immediate family?",
    answer:
      "A plan with Apex Longevity is a cost-savings program that supplements insurance and provides discounts for out-of-pocket health care costs. The exact amount of discounted rates can be found by speaking with your provider directly. This plan offers savings to plan members on chiropractic services between participating health care providers and the organization offering the discount plan. Apex Longevity is NOT HEALTH INSURANCE AND SHOULD NOT REPLACE HEALTH INSURANCE.",
  },
  {
    question: "Why are dependents not listed on the membership card?",
    answer:
      "Apex Longevity is a discount medical plan organization - NOT insurance. Complete information on all dependents covered under the Apex Longevity plan is maintained on file in your provider's office.  Please verify with your provider that they have your dependent information and keep them up-to-date of any changes that need to be made.",
  },
  {
    question: "How much of a discount will I receive with my Apex Longevity membership?",
    answer:
      "Most patients recoup the $49 cost of memebrship with Apex Longevity afte their first visit to a participating Apex Longevity provider. Exact discounts cannot be provided as each provider has the authority to select their discounted rates. Your Apex Longevity provider can show you the network discounts that are offered in his or her office.",
  },
  {
    question: "Can I join Apex Longevity if I have Medicare or Insurance coverage?",
    answer:
      "YES, you may join Apex Longevity if you have Medicare or Insurance coverage, but it may only be used for services not covered by Medicare or Insurance.",
  },
  {
    question: "How long is my Apex Longevity membership good for?",
    answer:
      "Your Apex Longevity membership is valid for a full twelve (12) month period from the effective date. The membership is set to automatically renew, unless otherwise specified by the plan holder to your provider OR Apex Longevity support.",
  },
  {
    question: "How often can I use the services of an Apex Longevity provider?",
    answer:
      `Apex Longevity membership plans may be utilized as frequently as you wish. While being an active Apex Longevity member, you and your immediate family members enjoy unlimited access to the services and providers in our network. We encourage you to take advantage of your membership and discounted rates as often as needed.`,
  },
  {
    question: "When will I receive my Apex Longevity membership card?",
    answer:
      "Your membership card will be immediately sent to your email address on file the day you enroll into the program.",
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

export default function PatientFAQs() {
  return (
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
            with your inquiry.
          </p>
        <div className="mt-8 divide-y divide-gray-200 ">
        <dl className="mt-6 space-y-6 divide-y divide-gray-200 ">
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
  )
}
