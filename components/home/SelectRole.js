import { CheckIcon } from '@heroicons/react/24/outline'

const roles = [
  {
    name: 'Patient',
    href: '#',
    priceMonthly: 49,
    description: 'Apex Longevity membership holders enjoy access to affordable chiropractic care for their entire families',
    features: [
      'One plan to cover the entire family',
      'Affordable care for all family members under the same plan',
      'Affordable care to supplement rising costs and exhausted insurance benefits',
      
    ],
  },
  {
    name: 'Chiropractic Provider',
    href: '#',
    priceMonthly: 79,
    description: 'Apex Longevity providers maintain peace of mind with Apex on their side',
    features: [
      'Legal network-based discounts to patients who maintain a valid Apex Longevity Membership',
      'Reduced risk of compliance & OIG violations',
      'FREE marketing for new patients',
      'Enrollment rebates to your clinic',
    ],
  },
]

export default function SelectRole() {
  return (
    <div className="bg-apexB">
      <div className="pt-12 sm:pt-16 lg:pt-24">
      {/* <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg> */}
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
            <h2 className="text-xl font-semibold leading-6 text-gray-300">Apex Longevity</h2>
            <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The right plan for you, whoever you are
            </p>
            <p className="text-xl text-gray-300">
              Apex Longevity is the trusted discount medical plan for chiropractic providers and patients nationwide
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-apexB" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {roles.map((role) => (
                <div key={role.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300">
                  <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex rounded-full bg-green-100 px-4 py-1 text-base font-semibold text-green-600"
                        id="tier-standard"
                      >
                        {role.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                      {/* ${role.priceMonthly}
                      <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">/mo</span> */}
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{role.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {role.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="rounded-md shadow">
                      <a
                        href={role.href}
                        className="flex items-center justify-center rounded-md border border-transparent bg-apexB px-5 py-3 text-base font-medium text-white hover:bg-apexG duration-300"
                        aria-describedby="tier-standard"
                      >
                        I am a {role.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
