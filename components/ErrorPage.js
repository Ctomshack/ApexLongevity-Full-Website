import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars4Icon, BookmarkSquareIcon, BookOpenIcon, RssIcon, CursorArrowRaysIcon, UsersIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import Footer from './providers/Footer'

const links = [
  { title: 'Patients', description: 'Learn how Apex Longevity can help you receive the affordable care your family needs.', icon: UsersIcon },
  { title: 'Providers', description: 'The most compliant way to offer cash discounts to your patients.', icon: Bars4Icon },
]

export default function ErrorPage() {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navigation />
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-base font-semibold text-apexB">Whoops!</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
          </div>
          <div className="mt-12">
            <h2 className="text-base font-semibold text-gray-500">Popular pages</h2>
            <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
              {links.map((link, linkIdx) => (
                <li key={linkIdx} className="relative flex items-start space-x-4 py-6">
                  <div className="flex-shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                      <link.icon className="h-6 w-6 text-apexB" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-apexB focus-within:ring-offset-2">
                        <a href="#" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#" className="text-base font-medium text-apexB hover:text-apexB">
                Or go back home
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
