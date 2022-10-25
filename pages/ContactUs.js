import Head from 'next/head'
import React from 'react'
import MainContactUs from '../components/home/MainContactUs'
import Navigation from '../components/Navigation'
import Footer from '../components/providers/Footer'

const ContactUs = () => {
  return (
    <>
    <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>
      
    <Navigation />
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-apexB">Questions or Concerns?</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl drop-shadow">
            Contact Apex Longevity
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Speak to an Apex representative immediately by calling the number listed below.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            For all other inquiries,  submit the email form and a representative will be in touch.
          </p>
        </div>
      </div>
    </div>

{/* <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
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
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
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
            className="absolute bottom-12 left-full translate-x-32 transform"
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
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">Have Questions or Concerns?</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Contact Apex Longevity Support
            </span>
          </h1>
          <p className="mt-5 pl-4 text-xl mx-auto max-w-xl leading-8 text-gray-500">
          Need immediate assistance? Speak to an Apex representative by calling the number listed below.
          </p>
          <p className="mt-5 pl-4 text-xl mx-auto max-w-xl leading-8 text-gray-500">
          For all other inquiries,  submit the email form and a representative will be in touch.
          </p>
        </div>
        
      </div>
    </div> */}
    <MainContactUs />
    <Footer />
    </>
  )
}

export default ContactUs