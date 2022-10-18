import Head from "next/head";
import Link from "next/link";
import { HomeHeader } from "../components";
import SelectRole from "../components/home/SelectRole";
// import Benefits1 from "../components/providers/Benefits1";
// import Benefits2 from "../components/providers/Benefits2";
// import Benefits3 from "../components/providers/Benefits3";
// import ContactUs from "../components/providers/ContactUs";
// import Content1 from "../components/providers/Content1";
// import ConvertPatients from "../components/providers/ConvertPatients";
// import Header from "../components/providers/Header";
// import Header2 from "../components/providers/Header2";
// import How from "../components/providers/How";
// import TrustedBy from "../components/providers/TrustedBy";
import Footer from "../components/providers/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Apex Longevity - Discount Medical Plan Organization" />
        <link rel="icon" href="/apexlogo.png" />
      </Head>

      <div>
        <HomeHeader />
        {/* <SelectRole /> */}
        <Footer />
      </div>

    </div>
  );
}