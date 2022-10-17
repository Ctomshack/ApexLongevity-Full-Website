import Head from "next/head";
import Link from "next/link";
import Benefits1 from "../components/providers/Benefits1";
import Benefits2 from "../components/providers/Benefits2";
import Benefits3 from "../components/providers/Benefits3";
import ContactUs from "../components/providers/ContactUs";
import Content1 from "../components/providers/Content1";
import ConvertPatients from "../components/providers/ConvertPatients";
import Footer from "../components/providers/Footer";
import Header from "../components/providers/Header";
import Header2 from "../components/providers/Header2";
import How from "../components/providers/How";
import TrustedBy from "../components/providers/TrustedBy";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>

      <div>
        <Header />
        <Benefits1 />
        <TrustedBy />
        <Content1 />
        <Benefits2 />
        <Header2 />
        <Benefits3 />
        <ConvertPatients />
        <How />
        <ContactUs />
        <Footer />
      </div>

    </div>
  );
}