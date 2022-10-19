import Head from "next/head";
import Link from "next/link";
import { Navigation, PatientBenefits, PatientFAQs, PatientHeader, PatientPricing } from "../../components";
import PatientBenefits2 from "../../components/patients/PatientBenefits2";
import PatientPricing2 from "../../components/patients/PatientPricing2";
import Footer from "../../components/providers/Footer";


export default function JoinApex() {
  return (
    <div>
      <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>

      <div>
        <Navigation />
        <PatientPricing2 />
        <PatientBenefits />
        <PatientFAQs />
        <Footer />
      </div>

    </div>
  );
}