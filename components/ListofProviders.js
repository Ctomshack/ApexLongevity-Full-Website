import { MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid';
import providers from '../providerList.json';

// const people = [
//   {
//     name: 'Jane Cooper',
//     title: 'Regional Paradigm Technician',
//     role: 'Chiropractic Provider',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//   },
//   // More people...
// ]

export default function ListofProviders(selectedState) {

  return (
    <div className='bg-gray-50'>

    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-12">

    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider, Idx) => {
        if (provider.State === selectedState.selectedState) {
          let googleMapSearchParams = provider.Name.replaceAll(' ', '+')

          return (
          <li key={Idx} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow hover:shadow-xl hover:scale-105">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-bold text-gray-700">{provider.Name}</h3>
                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Chiropractic
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{provider.Address}</p>
                <p className="mt-1 truncate text-sm text-gray-500">{provider.City}, {provider.State}</p>
              </div>
              {/* <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={provider.imageUrl} alt="" /> */}
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${googleMapSearchParams}`}
                    className="relative hover:text-apexG -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 duration-200"
                  >
                    <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Directions</span>
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${provider.Phone}`}
                    className="relative hover:text-apexG  inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 duration-200"
                  >
                    <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          )
        }
      }
      )}
    </ul>
    </div>
    </div>
  )
}
