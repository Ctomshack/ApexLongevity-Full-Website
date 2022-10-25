import Head from 'next/head'
import React from 'react'
import { OurTeam } from '../components'
import MainContactUs from '../components/home/MainContactUs'
import Navigation from '../components/Navigation'
import Footer from '../components/providers/Footer'

export default function Team() {
  return (
    <>
    <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>
      
    <Navigation />
    <OurTeam />
    {/* <MainContactUs /> */}
    <Footer />
    </>
  )
}