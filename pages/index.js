import Head from "next/head";
import Link from "next/link";
import Benefits1 from "../components/Benefits1";
import Benefits2 from "../components/Benefits2";
import Benefits3 from "../components/Benefits3";
import ContactUs from "../components/ContactUs";
import Content1 from "../components/Content1";
import ConvertPatients from "../components/ConvertPatients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import How from "../components/How";
import TrustedBy from "../components/TrustedBy";

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