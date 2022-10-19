import Head from "next/head";
import Link from "next/link";
import { Navigation, PatientBenefits, PatientFAQs, PatientHeader, PatientPricing } from "../../components";
import Disclaimer from "../../components/Disclaimer";
import Footer from "../../components/providers/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>

      <div>
        <Navigation />
        <PatientHeader />
        <PatientBenefits />
        <PatientPricing />
        <PatientFAQs />
        <Disclaimer />
        <Footer />
      </div>

    </div>
  );
}