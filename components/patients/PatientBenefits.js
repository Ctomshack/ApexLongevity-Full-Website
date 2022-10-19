import { ChatBubbleBottomCenterTextIcon, UsersIcon, NoSymbolIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'One plan for the entire family',
    description:
      'Primary plan holders and their immediate family members benefit from the cost savings associated with an Apex Longevity membership.',
    icon: UsersIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'A single $49 annual fee is the only cost associated with Apex Longevity. No hidden fees involved!',
    icon: NoSymbolIcon,
  },
  {
    name: 'Automatic annual renewals',
    description:
      'Never let your cost-savings benefits run out. Apex Longevity memberships are set to automatically renew at $49/year after one year since initial enrollment. Automatic renewal may be deactivated by speaking with Apex Support or your chiropractic provider.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Email notifications',
    description:
      'Upon membership activiation, the primary plan holder will receive an email notification with their membership card and email notifications prior to any membership renewals.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function PatientBenefits() {
  return (
    <div className="bg-white py-16" id='LearnMore'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-apexB">What is Apex Longevity?</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            One membership for the entire family
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A single $49 annual membership provides your entire family with cost savings on chiropractic services. The program can be used by yourself and members of your immediate family. While this program is not a replacement for insurance, it can be used to supplement a major medical health insurance policy.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-apexB text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
