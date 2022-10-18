import Head from "next/head";
import Link from "next/link";
import { Navigation, PatientBenefits, PatientHeader, PatientPricing } from "../../components";
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
        <Footer />
      </div>

    </div>
  );
}