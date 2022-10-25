import Head from 'next/head'
import React from 'react'
import { Footer, Navigation, ProviderListDropdown, } from "../../components";
import Disclaimer from '../../components/Disclaimer';

const FindAProvider = () => {
  return (
    <div>
        <Head>
            <title>Apex Longevity</title>
            <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
            <link rel="icon" href="/apexlogo.png" />
        </Head>

        <div>
            <Navigation />
            <ProviderListDropdown />
            <Disclaimer />
            <Footer />
        </div>
    </div>
  )
}

export default FindAProvider