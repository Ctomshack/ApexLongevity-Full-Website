import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import Link from 'next/link'
import { Footer, Navigation } from '../../components'

const faqs = [
  {
    question: "What do I get from becoming an Apex provider?",
    answer:
      "Doctors enjoy peace of mind knowing they are remaining compliant when legally offering cash discounts. They also receive free digital ads for new patients and a $5 rebate for every enrolled member.",
  },
  {
    question: "Why choose Apex Longevity over other DMPOs?",
    answer:
      "There are several great reasons to choose Apex Longevity over other discount medical plans. See https://apexlongevity.com/providers/About for a complete list of benefits.",
  },
  {
    question: "How does Apex help my practice?",
    answer:
      "Your practice will realize many benefits by partnering with Apex Longevity. See https://apexlongevity.com/providers/About for a complete list of benefits.",
  },
  {
    question: "Is it expensive to join Apex as a provider?",
    answer:
      "No, Apex is a completely free network to join!",
  },
  {
    question: "Why are dependents not listed on the membership card?",
    answer:
      "Apex Longevity is a discount medical plan organization, not insurance. Therefore, dependent information is kept on file in the clinic office. As a provider, verify you have dependent information.",
  },
  {
    question: "Does patient membership automatically renew?",
    answer:
      " Yes. Apex Longevity will automatically renew unless the patient decides not to auto renew when initially signing up online. Most patients elect to auto-renew.",
  },
  {
    question: "My patient is a member of another DMPO. What incentive is there to switch to Apex?",
    answer:
      "Apex offers current members of other DMPOs to transfer their membership for $1.00 for a full year. At the end of the first year, the membership is auto renewed at the normal fee of $49 per year.",
  },
  {
    question: "Should I offer cash discounts to patients who are not a part of a discount medical program?",
    answer:
      "Clinics should never offer discounted cash services without a Discount Medical Program because it is quite easy to violate your state board regulations pertaining to dual fee schedules.",
  },
  {
    question: "What payment options do patients have who do not have or want to use a credit card?",
    answer:
      `Yes. A patient can choose cash or check. Cash or check will need to be mailed to: Apex Longevity - 36901 American Way, Suite 7, Avon, OH 44011

      The member will show as "active pending payment" until the office has received payment and switched the member over to "active" status.`,
  },
  {
    question: "How soon can I enroll as a provider?",
    answer:
      "You can choose to enroll now by doing so on this website or by calling Apex and enrolling over the phone, your choice.",
  },
  {
    question: "When will a patient receive their Apex Longevity membership card?",
    answer:
      "The membership card will immediately arrive to the patients email address the day he /she signs up.",
  },
  {
    question: "If my patient enters the incorrect email address, what should I do?",
    answer:
      "Simply reach out to APEX Longevity support or login to your provider portal and update their email address. All support is provided by Apex Longevity operations. You can reach them by phone, email or livechat.",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProviderFAQs() {
  return (
    <>
     <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>
      
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
