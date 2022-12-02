import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Footer, Navigation } from '../../components'

const faqs = [
  {
    question: "What is Apex Longevity?",
    answer:
      "Apex Longevity is a discount medical plan organization (DMPO), which is an annual membership plan that provides you and your immediate family members access to a network of Apex Providers across the nation. You and your immediate family members can utilize your Apex membership to receive discounted rates on services rendered by Apex Providers. These discounts differ between Apex Providers and the total amount of cost-savings you may receive are maintained on file within your Apex Provider's office. Apex Longevity is not to be used as a replacement for insurance, but may be a supplement to a major medical health insurance policy. A membership with Apex Longevity provides you and your immediate family access to similar 'in-network' discounts to insurance companies.",
  },
  {
    question: "What is a DMPO (Discount Medical Plan Organization)?",
    answer:
      "A discount medical plan organization (DMPO) is a plan that provides you and your immediate family access to discounts on services rendered by Apex Providers. Discount medical plan organizations (DMPO) are regulated by the Department of Insurance in most states.",
  },
  {
    question: "Why should I join Apex Longevity?",
    answer:
      "A plan with Apex Longevity is a fantastic way to reduce your out-of-pocket expenses for chiropractic care. A membership plan with Apex Longevity is $49/year and covers yourself and your immediate family members. The plan provides the opportunity to access discounted rates on out-of-pocket expenses through your Apex Provider that may supplement expenses not typically covered by insurance, or for those who have exhausted their insurance benefits. Although Apex Longevity is not insurance, and should not be used to replace insurance, it can be utilized to supplement your insurance plan through cost-savings on chiropractic expenses.",
  },
  {
    question: "How does a membership with Apex Longevity benefit myself and my immediate family?",
    answer:
      "Apex Longevity membership plans cost only $49/year and cover yourself and your immediate family. A plan with Apex Longevity will provide cost-savings on out-of-pocket chiropractic expenses. Most Apex members recoup the $49 annual fee within a single visit to their Apex Provider.",
  },
  {
    question: "Why are dependents not listed on the membership card?",
    answer:
      "Dependents are typically listed on insurance cards. However, Apex Longevity is not insurance and should not be used as a replacement for insurance. Your dependents are maintained on file within your Apex Provider's office. Please verify with your Apex Provider to ensure personal information for your dependents is on file and correct.",
  },
  {
    question: "How much of a discount will I receive with my Apex Longevity membership?",
    answer:
      "Cost-savings differ between Apex Providers. A list of discounted rates may be obtained by speaking with your Apex Provider. Most Apex members recoup the $49 annual fee after a single visit to an Apex Provider's office.",
  },
  {
    question: "Can I join Apex Longevity if I have Medicare or Insurance coverage?",
    answer:
      "Yes. You may join Apex Longevity if you have Medicare or Insurance coverage, but it may only be used for services not covered by Medicare or Insurance.",
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
      "Yes. Memberships are set to automatically renew every year. If you wish to deactivate automatic renewals, please contact your Apex Provider or speak with an Apex Longevity Representative.",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PatientFAQs() {
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
