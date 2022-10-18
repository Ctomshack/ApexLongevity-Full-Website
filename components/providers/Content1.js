/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Content1() {
    return (
      <div className="relative py-16 overflow-hidden bg-white">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">
            <svg
              className="absolute transform translate-x-32 top-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
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
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute transform translate-x-32 bottom-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              {/* <span className="block text-lg font-semibold text-center text-indigo-600">Introducing</span> */}
              <span className="block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              Break free from insurance limits by offering legal cash discounts while receiving free marketing for new patients and free cash bonuses for your team
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
            28 Million Americans have no insurance.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
            31 Million Americans have insurance, but with limited coverage.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
            The RECESSION & INFLATION are forcing people to think harder about spending money on everything - Chiropractic care included.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
            With insurance deductibles rising, out of pocket expenses will also rise.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
            Chances are that you will lose more active patients when their insurance runs out as well as cash-paying patients by not giving them cash options that are affordable and legal.
            </p>
          </div>
        </div>
      </div>
    )
  }